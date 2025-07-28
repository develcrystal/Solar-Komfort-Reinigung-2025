#!/usr/bin/env python3
"""
Solar-Komfort Reinigung Projekt Scanner
Analysiert alle relevanten Projektordner und erstellt eine Übersicht
"""

import os
import json
import hashlib
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Any
import mimetypes

class ProjectScanner:
    def __init__(self):
        self.base_paths = {
            'main_project': r'F:\108Coding\solar-komfort',
            'nextly_template': r'F:\108Coding\solar-komfort\nextly-template',
            'marketing_base': r'J:\.shortcut-targets-by-id\1nMrbtIquQDn76hkciXPOMk4lQ8oO6YTW\Marketing Romain',
            'reinigung_data': r'J:\.shortcut-targets-by-id\1nMrbtIquQDn76hkciXPOMk4lQ8oO6YTW\Marketing Romain\Reinigung',
            'gebaeudeservice': r'J:\.shortcut-targets-by-id\1nMrbtIquQDn76hkciXPOMk4lQ8oO6YTW\Marketing Romain\Reinigung\Komfort Gebäudeservice24 GmbH'
        }
        
        self.file_types = {
            'code': ['.js', '.jsx', '.ts', '.tsx', '.py', '.php', '.html', '.css', '.scss'],
            'documents': ['.md', '.txt', '.docx', '.pdf', '.gsheet'],
            'images': ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'],
            'data': ['.json', '.csv', '.xlsx', '.xml'],
            'archive': ['.zip', '.rar', '.tar', '.gz']
        }
        
        self.project_info = {
            'scan_date': datetime.now().isoformat(),
            'paths': {},
            'files': {},
            'structure': {},
            'recommendations': []
        }

    def scan_directory(self, path: str, max_depth: int = 3, current_depth: int = 0) -> Dict[str, Any]:
        """Scannt ein Verzeichnis rekursiv"""
        if not os.path.exists(path) or current_depth > max_depth:
            return {}
        
        structure = {
            'path': path,
            'type': 'directory',
            'files': [],
            'subdirs': {},
            'stats': {
                'total_files': 0,
                'total_size': 0,
                'file_types': {}
            }
        }
        
        try:
            for item in os.listdir(path):
                item_path = os.path.join(path, item)
                
                if os.path.isfile(item_path):
                    file_info = self._analyze_file(item_path)
                    structure['files'].append(file_info)
                    structure['stats']['total_files'] += 1
                    structure['stats']['total_size'] += file_info.get('size', 0)
                    
                    file_ext = file_info.get('extension', '').lower()
                    file_type = self._get_file_type(file_ext)
                    structure['stats']['file_types'][file_type] = structure['stats']['file_types'].get(file_type, 0) + 1
                
                elif os.path.isdir(item_path) and not item.startswith('.'):
                    structure['subdirs'][item] = self.scan_directory(item_path, max_depth, current_depth + 1)
        
        except PermissionError:
            structure['error'] = 'Permission denied'
        except Exception as e:
            structure['error'] = str(e)
        
        return structure

    def _analyze_file(self, file_path: str) -> Dict[str, Any]:
        """Analysiert eine einzelne Datei"""
        file_info = {
            'name': os.path.basename(file_path),
            'path': file_path,
            'extension': os.path.splitext(file_path)[1],
            'size': 0,
            'modified': None,
            'type': 'unknown',
            'content_preview': None
        }
        
        try:
            stat = os.stat(file_path)
            file_info['size'] = stat.st_size
            file_info['modified'] = datetime.fromtimestamp(stat.st_mtime).isoformat()
            
            # MIME Type bestimmen
            mime_type, _ = mimetypes.guess_type(file_path)
            file_info['mime_type'] = mime_type
            
            # Dateityp kategorisieren
            file_info['type'] = self._get_file_type(file_info['extension'])
            
            # Content Preview für relevante Dateien
            if file_info['type'] in ['code', 'documents'] and file_info['size'] < 1024 * 100:  # < 100KB
                file_info['content_preview'] = self._get_content_preview(file_path)
                
        except Exception as e:
            file_info['error'] = str(e)
        
        return file_info

    def _get_file_type(self, extension: str) -> str:
        """Bestimmt den Dateityp basierend auf der Erweiterung"""
        for file_type, extensions in self.file_types.items():
            if extension.lower() in extensions:
                return file_type
        return 'other'

    def _get_content_preview(self, file_path: str, max_lines: int = 10) -> str:
        """Erstellt eine Vorschau des Dateiinhalts"""
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                lines = []
                for i, line in enumerate(f):
                    if i >= max_lines:
                        lines.append(f"... [{i + 1}+ weitere Zeilen]")
                        break
                    lines.append(line.rstrip())
                return '\n'.join(lines)
        except:
            return "[STATUS] Konnte Vorschau nicht erstellen"

    def scan_all_projects(self) -> Dict[str, Any]:
        """Scannt alle Projektpfade"""
        print("[STATUS] Starte Projekt-Scan...")
        
        for name, path in self.base_paths.items():
            print(f"[STATUS] Scanne: {name} -> {path}")
            if os.path.exists(path):
                self.project_info['paths'][name] = self.scan_directory(path)
            else:
                self.project_info['paths'][name] = {'error': f'Pfad nicht gefunden: {path}'}
        
        # Analyse und Empfehlungen
        self._analyze_project_status()
        return self.project_info

    def _analyze_project_status(self):
        """Analysiert den Projektstatus und erstellt Empfehlungen"""
        recommendations = []
        
        # Überprüfe Hauptkomponenten
        if 'nextly_template' in self.project_info['paths']:
            template_data = self.project_info['paths']['nextly_template']
            if 'error' not in template_data:
                recommendations.append({
                    'priority': 'HIGH',
                    'category': 'Template Ready',
                    'message': 'Nextly-Template ist verfügbar und kann für Reinigungsseite angepasst werden',
                    'action': 'Template-Anpassung für Gebäudereinigung starten'
                })
        
        # Überprüfe Marketing-Material
        if 'gebaeudeservice' in self.project_info['paths']:
            service_data = self.project_info['paths']['gebaeudeservice']
            if 'error' not in service_data:
                recommendations.append({
                    'priority': 'MEDIUM',
                    'category': 'Marketing Assets',
                    'message': 'Gebäudeservice-Material gefunden',
                    'action': 'Marketing-Assets in Template integrieren'
                })
        
        self.project_info['recommendations'] = recommendations

    def save_scan_results(self, output_path: str = None):
        """Speichert die Scan-Ergebnisse"""
        if not output_path:
            output_path = os.path.join(os.path.dirname(__file__), 'project_scan_results.json')
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(self.project_info, f, indent=2, ensure_ascii=False)
        
        print(f"[STATUS] Scan-Ergebnisse gespeichert: {output_path}")
        return output_path

def main():
    """Haupt-Scan-Funktion"""
    scanner = ProjectScanner()
    results = scanner.scan_all_projects()
    
    # Ergebnisse speichern
    output_file = scanner.save_scan_results()
    
    # Kurze Zusammenfassung
    print("\n[STATUS] SCAN ABGESCHLOSSEN")
    print("=" * 50)
    
    for name, data in results['paths'].items():
        if 'error' in data:
            print(f"❌ {name}: {data['error']}")
        else:
            stats = data.get('stats', {})
            print(f"✅ {name}: {stats.get('total_files', 0)} Dateien, {stats.get('total_size', 0) / 1024:.1f} KB")
    
    print(f"\n[STATUS] Empfehlungen: {len(results['recommendations'])}")
    for rec in results['recommendations']:
        print(f"  {rec['priority']}: {rec['message']}")
    
    print(f"\n[STATUS] Detaillierte Ergebnisse in: {output_file}")

if __name__ == "__main__":
    main()
