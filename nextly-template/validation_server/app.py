from flask import Flask, render_template, request, jsonify
import os
import re
from pathlib import Path
import json
from bs4 import BeautifulSoup
import requests
from urllib.parse import urljoin, urlparse
import glob
from dataclasses import dataclass
from typing import List, Dict, Any

app = Flask(__name__, template_folder='templates', static_folder='static')

# Configuration
NEXTJS_BUILD_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'src', 'app')
PUBLIC_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'public')

@dataclass
class ValidationError:
    type: str
    message: str
    severity: str  # 'error', 'warning', 'info'
    page: str
    element: str = ""
    suggestion: str = ""

class WebsiteValidator:
    def __init__(self):
        self.errors = []
        self.warnings = []
        
    def validate_website(self) -> List[ValidationError]:
        """Main validation function that runs all checks"""
        self.errors = []
        
        # Check content and image consistency
        self.check_content_image_consistency()
        
        # Check SEO elements
        self.check_seo_elements()
        
        # Check keyword consistency
        self.check_keyword_consistency()
        
        # Check for broken links
        self.check_broken_links()
        
        # Check for content accuracy
        self.check_content_accuracy()
        
        return self.errors
    
    def check_content_image_consistency(self):
        """Check if images match the content they're associated with"""
        # Look for all page files
        page_files = glob.glob(f"{NEXTJS_BUILD_PATH}/**/*.tsx", recursive=True)
        
        for file_path in page_files:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Extract image sources and alt texts
            images = re.findall(r'src=[\'"]([^\'"]*\.webp|[^\'"]*\.jpg|[^\'"]*\.png)[\'"]', content)
            alt_texts = re.findall(r'alt=[\'"]([^\'"]*)[\'"]', content)
            
            # Extract page-specific content to check for relevance
            page_content_lower = content.lower()
            
            # Check for each image if alt text seems relevant to page content
            for alt_text in alt_texts:
                if alt_text.lower().startswith('placeholder') or 'temp' in alt_text.lower():
                    self.errors.append(ValidationError(
                        type="Image Mismatch",
                        message=f"Found placeholder alt text: '{alt_text}' in {file_path}",
                        severity="error",
                        page=os.path.basename(file_path),
                        suggestion="Replace placeholder alt text with descriptive content"
                    ))
                elif len(alt_text.strip()) < 5:
                    # Very short alt text might indicate insufficient description
                    self.errors.append(ValidationError(
                        type="Image Accessibility",
                        message=f"Very short alt text: '{alt_text}' might not be descriptive enough",
                        severity="warning",
                        page=os.path.basename(file_path),
                        suggestion="Provide more descriptive alt text for accessibility"
                    ))
            
            # Check if image paths exist in public directory
            for img_path in images:
                if img_path.startswith('/img'):
                    full_img_path = os.path.join(PUBLIC_PATH, img_path[1:])  # Remove leading slash
                    if not os.path.exists(full_img_path):
                        self.errors.append(ValidationError(
                            type="Missing Image",
                            message=f"Image file does not exist: {full_img_path}",
                            severity="error",
                            page=os.path.basename(file_path),
                            suggestion="Verify the image path in public directory"
                        ))
                    else:
                        # Check if the image is relevant to the page content
                        # Extract service name from file path
                        service_path = os.path.relpath(file_path, NEXTJS_BUILD_PATH)
                        service_parts = service_path.split(os.sep)
                        service_name = service_parts[0] if service_parts[0] != 'page.tsx' else 'home'
                        
                        # Skip validation for general components
                        if service_name != '.' and service_name not in ['.', 'api', 'datenschutz', 'impressum', 'kontakt', 'ueber-uns', 'galerie', 'referenzen']:
                            # Check if service name appears in image path
                            if service_name not in img_path.lower() and 'flux' not in img_path.lower():
                                self.errors.append(ValidationError(
                                    type="Image Relevance",
                                    message=f"Image {img_path} might not be relevant to service {service_name}",
                                    severity="warning",
                                    page=os.path.basename(file_path),
                                    suggestion=f"Consider using images specific to {service_name} service"
                                ))
    
    def check_seo_elements(self):
        """Check for SEO-related issues"""
        page_files = glob.glob(f"{NEXTJS_BUILD_PATH}/**/page.tsx", recursive=True)
        
        for file_path in page_files:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Extract metadata using regex patterns
            title_match = re.search(r'title:\s*[\'"]([^\'"]*)[\'"]', content)
            desc_match = re.search(r'description:\s*[\'"]([^\'"]*)[\'"]', content)
            
            if title_match:
                title = title_match.group(1)
                if len(title) < 10:
                    self.errors.append(ValidationError(
                        type="SEO Issue",
                        message=f"Title too short: '{title}' (less than 10 characters)",
                        severity="warning",
                        page=os.path.basename(file_path),
                        suggestion="Use titles with 10-60 characters for better SEO"
                    ))
                elif len(title) > 60:
                    self.errors.append(ValidationError(
                        type="SEO Issue",
                        message=f"Title too long: '{title}' (more than 60 characters)",
                        severity="warning",
                        page=os.path.basename(file_path),
                        suggestion="Use titles with 10-60 characters for better SEO"
                    ))
            else:
                self.errors.append(ValidationError(
                    type="SEO Missing",
                    message="No title metadata found in page",
                    severity="error",
                    page=os.path.basename(file_path),
                    suggestion="Add title metadata for SEO"
                ))
            
            if desc_match:
                description = desc_match.group(1)
                if len(description) < 50:
                    self.errors.append(ValidationError(
                        type="SEO Issue",
                        message="Description too short (less than 50 characters)",
                        severity="warning",
                        page=os.path.basename(file_path),
                        suggestion="Use descriptions with 50-160 characters for better SEO"
                    ))
                elif len(description) > 160:
                    self.errors.append(ValidationError(
                        type="SEO Issue",
                        message="Description too long (more than 160 characters)",
                        severity="warning",
                        page=os.path.basename(file_path),
                        suggestion="Use descriptions with 50-160 characters for better SEO"
                    ))
            else:
                self.errors.append(ValidationError(
                    type="SEO Missing",
                    message="No description metadata found in page",
                    severity="error",
                    page=os.path.basename(file_path),
                    suggestion="Add description metadata for SEO"
                ))
                
            # Check for H1 tags in content
            h1_pattern = r'<h1[^>]*>.*?</h1>'
            h1_matches = re.findall(h1_pattern, content, re.IGNORECASE)
            if not h1_matches:
                # For Next.js, H1 might be in JSX format
                jsx_h1_pattern = r'<h1[^>]*>.*?</h1>'
                jsx_h1_matches = re.findall(jsx_h1_pattern, content, re.IGNORECASE | re.DOTALL)
                if not jsx_h1_matches:
                    self.errors.append(ValidationError(
                        type="SEO Missing",
                        message="No H1 heading found in page",
                        severity="warning",
                        page=os.path.basename(file_path),
                        suggestion="Add H1 heading for SEO structure"
                    ))
    
    def check_keyword_consistency(self):
        """Check for keyword consistency across pages"""
        page_files = glob.glob(f"{NEXTJS_BUILD_PATH}/**/page.tsx", recursive=True)
        
        for file_path in page_files:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Extract the service name from file path
            service_path = os.path.relpath(file_path, NEXTJS_BUILD_PATH)
            service_parts = service_path.split(os.sep)
            service_name = service_parts[0] if service_parts[0] != 'page.tsx' else 'home'
            
            # Skip validation for general pages
            if service_name in ['.', 'api', 'datenschutz', 'impressum', 'kontakt', 'ueber-uns', 'galerie', 'referenzen', 'blog']:
                continue
            
            # Normalize service name for matching (replace hyphens with spaces)
            normalized_service_name = service_name.replace('-', ' ')
            
            # Check if the service name appears in the content
            content_lower = content.lower()
            if normalized_service_name.replace(' ', '') not in content_lower.replace(' ', '').replace('-', ''):
                # Also check if related terms exist
                service_variations = [
                    normalized_service_name,
                    normalized_service_name.replace('reinigung', 'reinigen'),
                    normalized_service_name.replace('service', 'dienstleistung'),
                    normalized_service_name.replace('einigung', 'einrichtung')  # Special case check
                ]
                
                found_variation = any(variation.replace(' ', '') in content_lower.replace(' ', '') for variation in service_variations)
                
                if not found_variation:
                    self.errors.append(ValidationError(
                        type="Keyword Inconsistency",
                        message=f"Service name '{normalized_service_name}' not found in content",
                        severity="warning",
                        page=service_name,
                        suggestion=f"Ensure the service name and related terms are properly mentioned in the page content"
                    ))
            
            # Check for company name consistency
            company_mentions = [
                'komfort gebäudeservice24',
                'komfort Gebäudeservice24',
                'Komfort Gebäudeservice24',
                'Komfort Gebäudeservice24 GmbH',
                'komfort gebäudeservice24 gmbh'
            ]
            
            has_company_reference = any(mention in content for mention in company_mentions)
            if not has_company_reference and service_name not in ['.', 'home']:
                self.errors.append(ValidationError(
                    type="Brand Consistency",
                    message=f"Company name not found in service page: {service_name}",
                    severity="warning",
                    page=service_name,
                    suggestion="Ensure company name is properly referenced on service pages"
                ))
    
    def check_broken_links(self):
        """Check for broken internal links"""
        # This would involve building the actual site and checking links
        # For now, we'll check for common patterns that might indicate broken links
        page_files = glob.glob(f"{NEXTJS_BUILD_PATH}/**/page.tsx", recursive=True)
        
        for file_path in page_files:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Look for link patterns that might be broken
            links = re.findall(r'href=[\'"]([^\'"]*)[\'"]', content)
            for link in links:
                if link.startswith('/') and not link.startswith('/api'):
                    # Check if the linked page exists
                    expected_path = os.path.join(NEXTJS_BUILD_PATH, link[1:].replace('/', os.sep), 'page.tsx')
                    if not os.path.exists(expected_path):
                        # Also try alternative patterns
                        alt_path = os.path.join(NEXTJS_BUILD_PATH, link[1:] + '.tsx')
                        if not os.path.exists(alt_path):
                            self.errors.append(ValidationError(
                                type="Broken Link",
                                message=f"Possible broken internal link: {link}",
                                severity="warning",
                                page=os.path.basename(file_path),
                                suggestion=f"Verify that the target page exists at {expected_path}"
                            ))
    
    def check_content_accuracy(self):
        """Check for content accuracy and consistency"""
        page_files = glob.glob(f"{NEXTJS_BUILD_PATH}/**/page.tsx", recursive=True)
        
        for file_path in page_files:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Check for common patterns that might indicate inaccurate content
            # Look for placeholder text patterns
            placeholder_patterns = [
                (r'lorem ipsum', 'Lorem ipsum placeholder text'),
                (r'placeholder', 'Generic placeholder text'),
                (r'dummy text', 'Dummy content'),
                (r'filler content', 'Filler content'),
                (r'example content', 'Example content'),
                (r'put your content here', 'Content instruction'),
                (r'content goes here', 'Content instruction'),
                (r'bildquelle', 'Image source placeholder'),
                (r'bild credits?', 'Image credits placeholder')
            ]
            
            for pattern, description in placeholder_patterns:
                matches = re.findall(pattern, content, re.IGNORECASE)
                if matches:
                    self.errors.append(ValidationError(
                        type="Content Accuracy",
                        message=f"Found {description}: '{matches[0]}'",
                        severity="error",
                        page=os.path.basename(file_path),
                        suggestion="Replace placeholder content with actual content"
                    ))
            
            # Check for inconsistent company name references
            service_path = os.path.relpath(file_path, NEXTJS_BUILD_PATH)
            service_parts = service_path.split(os.sep)
            service_name = service_parts[0] if service_parts[0] != 'page.tsx' else 'home'
            
            # Skip validation for general pages
            if service_name in ['.', 'api', 'datenschutz', 'impressum', 'kontakt', 'ueber-uns', 'galerie', 'referenzen']:
                continue
                
            # Check if content has enough substance
            # Remove HTML/JSX tags and count actual words
            clean_content = re.sub(r'<[^>]+>', '', content)  # Remove JSX tags
            clean_content = re.sub(r'/\*.*?\*/', '', clean_content, flags=re.DOTALL)  # Remove comments
            clean_content = re.sub(r'//.*', '', clean_content)  # Remove single-line comments
            words = re.findall(r'\b\w+\b', clean_content)
            
            if len(words) < 100 and service_name not in ['.', 'home']:
                self.errors.append(ValidationError(
                    type="Content Quality",
                    message=f"Content appears to be thin with only {len(words)} words",
                    severity="warning",
                    page=service_name,
                    suggestion="Add more substantial content to improve quality and SEO"
                ))
            
            # Check for contact form references on service pages
            if service_name not in ['.', 'home', 'kontakt', 'impressum', 'datenschutz'] and 'kontakt' not in content.lower():
                self.errors.append(ValidationError(
                    type="Content Completeness",
                    message=f"Contact/reachout information missing in {service_name} service page",
                    severity="warning",
                    page=service_name,
                    suggestion="Include contact information or CTA for this service"
                ))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/validate')
def validate():
    validator = WebsiteValidator()
    errors = validator.validate_website()
    
    # Group errors by type
    error_summary = {
        'total_errors': len(errors),
        'errors_by_type': {},
        'errors_by_severity': {'error': 0, 'warning': 0, 'info': 0},
        'detailed_errors': [e.__dict__ for e in errors]
    }
    
    for error in errors:
        if error.type not in error_summary['errors_by_type']:
            error_summary['errors_by_type'][error.type] = 0
        error_summary['errors_by_type'][error.type] += 1
        
        error_summary['errors_by_severity'][error.severity] += 1
    
    return jsonify(error_summary)

@app.route('/validate/<page>')
def validate_page(page):
    validator = WebsiteValidator()
    # For now, we'll run full validation and filter results
    all_errors = validator.validate_website()
    page_errors = [e for e in all_errors if page in e.page.lower()]
    
    return jsonify({
        'page': page,
        'errors': [e.__dict__ for e in page_errors],
        'count': len(page_errors)
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)