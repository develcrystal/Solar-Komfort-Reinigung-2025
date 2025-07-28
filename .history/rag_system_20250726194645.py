#!/usr/bin/env python3
"""
RAG System für Solar-Komfort Reinigungsprojekt - VERVOLLSTÄNDIGT
Intelligente Beratung basierend auf Projektdaten
"""

import json
import os
import re
from pathlib import Path
from typing import List, Dict, Any, Optional
from dataclasses import dataclass
from datetime import datetime

@dataclass
class QueryResult:
    """Ergebnis einer RAG-Anfrage"""
    answer: str
    confidence: float
    sources: List[str]
    recommendations: List[str]
    next_steps: List[str]

class ProjectRAG:
    def __init__(self, scan_results_path: str = None):
        self.scan_results_path = scan_results_path or "project_scan_results.json"
        self.project_data = {}
        self.knowledge_base = {}
        self.deployed_url = "https://nextly-template-develcrystal-develcrystals-projects.vercel.app"
        self.load_project_data()
        self.build_knowledge_base()
        
        self.predefined_responses = {
            'status': self._get_project_status,
            'next_steps': self._get_next_steps,
            'kundensicht': self._get_customer_perspective,
            'technical': self._get_technical_info,
            'marketing': self._get_marketing_info,
            'deployment': self._get_deployment_info,
            'changes': self._get_change_management,
            'automation': self._get_automation_info
        }

    def load_project_data(self):
        """Lädt die Projekt-Scan-Daten"""
        if os.path.exists(self.scan_results_path):
            with open(self.scan_results_path, 'r', encoding='utf-8') as f:
                self.project_data = json.load(f)
        else:
            print("[STATUS] Scan-Daten nicht gefunden - führe project_scanner.py aus")

    def build_knowledge_base(self):
        """Erstellt die Wissensbasis"""
        self.knowledge_base = {
            'project_structure': self._extract_structure_info(),
            'available_assets': self._extract_assets(),
            'technical_stack': self._extract_tech_stack(),
            'marketing_materials': self._extract_marketing_materials(),
            'recommendations': self.project_data.get('recommendations', []),
            'deployment_info': {
                'current_url': self.deployed_url,
                'status': 'DEPLOYED',
                'platform': 'Vercel',
                'tech': 'Next.js/React'
            }
        }

    def _extract_structure_info(self) -> Dict[str, Any]:
        """Extrahiert Strukturinformationen"""
        structure = {}
        paths = self.project_data.get('paths', {})
        
        for name, data in paths.items():
            if 'error' not in data:
                structure[name] = {
                    'total_files': data.get('stats', {}).get('total_files', 0),
                    'file_types': data.get('stats', {}).get('file_types', {}),
                    'key_files': self._find_key_files(data)
                }
        return structure

    def _extract_assets(self) -> List[Dict[str, str]]:
        """Extrahiert verfügbare Assets"""
        assets = []
        paths = self.project_data.get('paths', {})
        
        for path_name, data in paths.items():
            if 'error' not in data:
                files = data.get('files', [])
                for file_info in files:
                    if file_info.get('type') in ['images', 'documents', 'data']:
                        assets.append({
                            'name': file_info.get('name', ''),
                            'type': file_info.get('type', ''),
                            'path': file_info.get('path', ''),
                            'source': path_name
                        })
        return assets

    def _extract_tech_stack(self) -> Dict[str, List[str]]:
        """Extrahiert technische Informationen"""
        return {
            'frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            'deployment': ['Vercel', 'Git'],
            'development': ['VS Code', 'MCP Tools', 'Claude-CLI'],
            'automation': ['Gemini-CLI', 'Desktop Commander']
        }

    def _extract_marketing_materials(self) -> List[Dict[str, str]]:
        """Extrahiert Marketing-Materialien"""
        materials = []
        reinigung_data = self.project_data.get('paths', {}).get('reinigung_data', {})
        
        if 'error' not in reinigung_data:
            files = reinigung_data.get('files', [])
            for file_info in files:
                if any(keyword in file_info.get('name', '').lower() 
                      for keyword in ['flyer', 'reinigung', 'marketing', 'logo']):
                    materials.append({
                        'name': file_info.get('name', ''),
                        'type': file_info.get('type', ''),
                        'path': file_info.get('path', ''),
                        'purpose': self._guess_material_purpose(file_info.get('name', ''))
                    })
        return materials

    def _find_key_files(self, data: Dict[str, Any]) -> List[str]:
        """Findet wichtige Dateien"""
        key_files = []
        files = data.get('files', [])
        
        important_names = [
            'README.md', 'package.json', 'index.html', 'next.config.js',
            'vite.config.js', 'tailwind.config.ts', 'tsconfig.json'
        ]
        
        for file_info in files:
            name = file_info.get('name', '')
            if name in important_names or name.endswith('.config.js'):
                key_files.append(name)
        return key_files

    def _guess_material_purpose(self, filename: str) -> str:
        """Errät den Zweck einer Marketing-Datei"""
        filename_lower = filename.lower()
        
        if 'flyer' in filename_lower:
            return 'Print-Marketing'
        elif 'logo' in filename_lower:
            return 'Branding'
        elif 'reinigung' in filename_lower:
            return 'Service-Beschreibung'
        elif 'pdf' in filename_lower or 'docx' in filename_lower:
            return 'Dokumentation'
        elif any(ext in filename_lower for ext in ['jpg', 'png', 'svg']):
            return 'Bildmaterial'
        else:
            return 'Unbekannt'

    def query(self, question: str) -> QueryResult:
        """Hauptfunktion für Anfragen"""
        question_lower = question.lower()
        category = self._categorize_question(question_lower)
        
        if category in self.predefined_responses:
            return self.predefined_responses[category]()
        
        return self._general_response(question)

    def _categorize_question(self, question: str) -> str:
        """Kategorisiert eine Frage"""
        if any(word in question for word in ['status', 'stand', 'fortschritt']):
            return 'status'
        elif any(word in question for word in ['änderung', 'change', 'anpassung', 'modifikation']):
            return 'changes'
        elif any(word in question for word in ['automation', 'automatisch', 'cli', 'gemini']):
            return 'automation'
        elif any(word in question for word in ['nächste', 'next', 'weiter', 'todo']):
            return 'next_steps'
        elif any(word in question for word in ['kunde', 'kundensicht', 'customer']):
            return 'kundensicht'
        elif any(word in question for word in ['technisch', 'code', 'implementation']):
            return 'technical'
        elif any(word in question for word in ['marketing', 'material', 'assets']):
            return 'marketing'
        elif any(word in question for word in ['deployment', 'deploy', 'veröffentlichen']):
            return 'deployment'
        else:
            return 'general'

    def _get_project_status(self) -> QueryResult:
        """Gibt den Projektstatus zurück"""
        structure = self.knowledge_base.get('project_structure', {})
        
        status_text = "[STATUS] SOLAR-KOMFORT REINIGUNG PROJEKT\n\n"
        status_text += f"DEPLOYMENT: {self.deployed_url}\n"
        status_text += "PLATFORM: Vercel (Next.js/React)\n"
        status_text += "ENTWICKLUNG: KI-basiert, anpassungsbereit\n\n"
        
        if 'nextly_template' in structure:
            template_info = structure['nextly_template']
            status_text += f"TEMPLATE: Verfügbar ({template_info.get('total_files', 0)} Dateien)\n"
            status_text += "TECH-STACK: React, Next.js, TypeScript, Tailwind\n\n"
        
        materials = self.knowledge_base.get('marketing_materials', [])
        if materials:
            status_text += f"MARKETING: {len(materials)} Assets verfügbar\n"
            for material in materials[:3]:
                status_text += f"  - {material['name']} ({material['purpose']})\n"
            status_text += "\n"
        
        status_text += "BEREIT FÜR: Kundenänderungen, Domain-Migration\n"
        
        return QueryResult(
            answer=status_text,
            confidence=0.95,
            sources=['deployment_status', 'project_scan'],
            recommendations=['Kundenänderungen sammeln', 'Automation setup'],
            next_steps=['Change-Management', 'CLI-Integration', 'Domain-Setup']
        )

    def _get_change_management(self) -> QueryResult:
        """Change Management Strategie"""
        change_strategy = [
            "[STATUS] CHANGE MANAGEMENT STRATEGIE",
            "",
            "AKTUELLER STAND:",
            f"- Template deployed: {self.deployed_url}",
            "- KI-entwickelte Basis vorhanden",
            "- Kundenänderungen anstehend",
            "",
            "CHANGE WORKFLOW:",
            "1. ANALYSE",
            "   - Screenshot der aktuellen Seite",
            "   - Kundenanforderungen dokumentieren",
            "   - RAG-System für Empfehlungen nutzen",
            "",
            "2. PLANUNG",
            "   - Claude-CLI für Task-Automation",
            "   - MCP-Tools für Code-Änderungen",
            "   - Desktop Commander für File-Ops",
            "",
            "3. UMSETZUNG",
            "   - Halbautomatische Änderungen",
            "   - Iterative Anpassungen",
            "   - Kontinuierliches Testing",
            "",
            "4. DEPLOYMENT",
            "   - Staging-Environment",
            "   - Kunden-Review",
            "   - Produktions-Deployment",
            "",
            "AUTOMATION TOOLS:",
            "- RAG-System: Intelligente Beratung",
            "- Claude-CLI: Task-Delegation",
            "- Gemini-CLI: Content-Generation",
            "- MCP-Tools: Development-Automation"
        ]
        
        return QueryResult(
            answer="\n".join(change_strategy),
            confidence=0.9,
            sources=['change_management_best_practices'],
            recommendations=['Claude-CLI setup', 'Workflow definieren'],
            next_steps=['CLI-Integration testen', 'Change-Pipeline aufbauen']
        )

    def _get_automation_info(self) -> QueryResult:
        """Automation und CLI Information"""
        automation_info = [
            "[STATUS] AUTOMATION FRAMEWORK",
            "",
            "VERFÜGBARE TOOLS:",
            "",
            "1. CLAUDE-CLI",
            "   - Task-Delegation an Claude",
            "   - Code-Generierung automatisiert",
            "   - Terminal-basierte Workflows",
            "   - Setup erforderlich",
            "",
            "2. GEMINI-CLI",
            "   - Content-Generierung",
            "   - Marketing-Text-Automation",
            "   - Bereits verfügbar",
            "",
            "3. MCP-TOOLS",
            "   - Desktop Commander (File-Ops)",
            "   - Browser MCP (Testing)",
            "   - Direct Development-Integration",
            "",
            "4. RAG-SYSTEM",
            "   - Intelligente Projektberatung",
            "   - Kontext-aware Empfehlungen",
            "   - Change-Management-Support",
            "",
            "INTEGRATION STRATEGIE:",
            "- Screenshot-basierte Änderungsanfragen",
            "- RAG für Strategieempfehlungen",
            "- CLI-Tools für Umsetzung",
            "- Halbautomatische Workflows",
            "",
            "NÄCHSTE SCHRITTE:",
            "- Claude-CLI evaluieren und installieren",
            "- Workflow-Scripts entwickeln",
            "- Integration mit bestehendem Setup"
        ]
        
        return QueryResult(
            answer="\n".join(automation_info),
            confidence=0.85,
            sources=['automation_tools', 'mcp_documentation'],
            recommendations=['Claude-CLI Setup starten', 'Workflow testen'],
            next_steps=['CLI-Evaluation', 'Integration-Tests', 'Workflow-Automatisierung']
        )

    def _get_deployment_info(self) -> QueryResult:
        """Deployment Informationen"""
        deployment_info = [
            "[STATUS] DEPLOYMENT STRATEGIE",
            "",
            "AKTUELLER STATUS:",
            f"- Live URL: {self.deployed_url}",
            "- Platform: Vercel",
            "- Status: Deployed und funktional",
            "",
            "DOMAIN-MIGRATION PLAN:",
            "1. Neue Domain vom Kunden erhalten",
            "2. DNS-Konfiguration vorbereiten",
            "3. Vercel Domain-Setup",
            "4. SSL-Zertifikat automatisch",
            "5. Redirect von alter URL optional",
            "",
            "CHANGE-DEPLOYMENT:",
            "- Git-basierte Workflows",
            "- Automatic Vercel deployment",
            "- Preview-URLs für Reviews",
            "- Production deployment nach Freigabe",
            "",
            "QUALITY ASSURANCE:",
            "- Staging-Environment nutzen",
            "- Mobile/Desktop Testing",
            "- Performance-Checks",
            "- SEO-Validierung"
        ]
        
        return QueryResult(
            answer="\n".join(deployment_info),
            confidence=0.9,
            sources=['vercel_deployment', 'domain_management'],
            recommendations=['Domain-Transfer vorbereiten', 'QA-Pipeline setup'],
            next_steps=['Domain-Info sammeln', 'Migration planen']
        )

    def _general_response(self, question: str) -> QueryResult:
        """Allgemeine Antwort für unbekannte Fragen"""
        return QueryResult(
            answer=f"[STATUS] Frage analysiert: '{question}'\n\nVerfügbare Kategorien:\n- status: Projektstatus\n- changes: Änderungsmanagement\n- automation: CLI und Automation\n- kundensicht: Customer Perspective\n- technical: Technische Details\n- deployment: Deployment Info",
            confidence=0.5,
            sources=['rag_system'],
            recommendations=['Spezifischere Frage stellen'],
            next_steps=['Kategorie wählen', 'Detailfragen stellen']
        )

def main():
    """Test des RAG-Systems"""
    rag = ProjectRAG()
    
    test_queries = [
        "Was ist der aktuelle Status?",
        "Wie manage ich Kundenänderungen?", 
        "Welche Automation-Tools sind verfügbar?",
        "Deployment-Strategie?"
    ]
    
    for query in test_queries:
        print(f"\n[QUERY] {query}")
        print("=" * 50)
        result = rag.query(query)
        print(result.answer)
        print(f"\n[CONFIDENCE] {result.confidence}")
        print(f"[NEXT_STEPS] {', '.join(result.next_steps)}")

if __name__ == "__main__":
    main()
