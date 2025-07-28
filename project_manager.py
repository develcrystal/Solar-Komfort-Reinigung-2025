#!/usr/bin/env python3
"""
Solar-Komfort Reinigung Project Manager mit Claude CLI Integration
Hauptinterface für Projektberatung und Automation
"""

import os
import json
import subprocess
import sys
from pathlib import Path
from datetime import datetime
from typing import Dict, Any, List, Optional

class SolarKomfortProjectManager:
    def __init__(self):
        self.project_root = Path("F:/108Coding/solar-komfort-reinigung-rag")
        self.deployed_url = "https://nextly-template-develcrystal-develcrystals-projects.vercel.app"
        self.claude_cli_path = r"C:\Users\Hill\AppData\Roaming\npm\node_modules\@anthropic-ai\claude-code\cli.js"
        self.template_path = Path("F:/108Coding/solar-komfort/nextly-template")
        self.marketing_path = Path("J:/.shortcut-targets-by-id/1nMrbtIquQDn76hkciXPOMk4lQ8oO6YTW/Marketing Romain/Reinigung")
        
        self.project_status = {
            'last_update': datetime.now().isoformat(),
            'deployed_url': self.deployed_url,
            'template_ready': self._check_template_status(),
            'marketing_assets': self._check_marketing_assets(),
            'claude_cli_ready': self._check_claude_cli()
        }

    def _check_template_status(self) -> bool:
        """Prüft ob Nextly Template verfügbar ist"""
        return self.template_path.exists() and (self.template_path / "package.json").exists()

    def _check_marketing_assets(self) -> Dict[str, Any]:
        """Prüft verfügbare Marketing Assets"""
        assets = {
            'flyer_available': False,
            'logo_available': False,
            'documents_count': 0,
            'images_count': 0
        }
        
        if self.marketing_path.exists():
            for item in self.marketing_path.rglob("*"):
                if item.is_file():
                    name_lower = item.name.lower()
                    if 'flyer' in name_lower:
                        assets['flyer_available'] = True
                    elif 'logo' in name_lower:
                        assets['logo_available'] = True
                    elif item.suffix.lower() in ['.pdf', '.docx', '.md']:
                        assets['documents_count'] += 1
                    elif item.suffix.lower() in ['.jpg', '.png', '.svg', '.webp']:
                        assets['images_count'] += 1
        
        return assets

    def _check_claude_cli(self) -> bool:
        """Prüft Claude CLI Verfügbarkeit"""
        return Path(self.claude_cli_path).exists()

    def run_claude_cli(self, prompt: str, print_mode: bool = True, output_format: str = "text") -> Dict[str, Any]:
        """Führt Claude CLI Befehl aus"""
        if not self._check_claude_cli():
            return {'error': 'Claude CLI nicht verfügbar', 'output': None}
        
        cmd = ['node', self.claude_cli_path]
        
        if print_mode:
            cmd.extend(['-p', prompt])
            if output_format != "text":
                cmd.extend(['--output-format', output_format])
        else:
            cmd.append(prompt)
        
        try:
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=300,
                cwd=str(self.project_root)
            )
            
            return {
                'success': result.returncode == 0,
                'output': result.stdout,
                'error': result.stderr,
                'returncode': result.returncode
            }
        except subprocess.TimeoutExpired:
            return {'error': 'Claude CLI Timeout', 'output': None}
        except Exception as e:
            return {'error': f'Claude CLI Fehler: {str(e)}', 'output': None}

    def get_project_overview(self) -> str:
        """Erstellt Projektübersicht"""
        overview = [
            "[STATUS] SOLAR-KOMFORT REINIGUNG PROJEKT ÜBERSICHT",
            "=" * 60,
            "",
            f"DEPLOYMENT STATUS: {self.deployed_url}",
            f"TEMPLATE READY: {'✅' if self.project_status['template_ready'] else '❌'}",
            f"CLAUDE CLI READY: {'✅' if self.project_status['claude_cli_ready'] else '❌'}",
            "",
            "MARKETING ASSETS:",
            f"  Flyer verfügbar: {'✅' if self.project_status['marketing_assets']['flyer_available'] else '❌'}",
            f"  Logo verfügbar: {'✅' if self.project_status['marketing_assets']['logo_available'] else '❌'}",
            f"  Dokumente: {self.project_status['marketing_assets']['documents_count']}",
            f"  Bilder: {self.project_status['marketing_assets']['images_count']}",
            "",
            "NÄCHSTE SCHRITTE:",
            "1. Kundenänderungen sammeln",
            "2. Template für Reinigungsservice anpassen",
            "3. Marketing-Assets integrieren",
            "4. Neue Domain deployen",
            "",
            f"Letzte Aktualisierung: {self.project_status['last_update']}"
        ]
        
        return "\n".join(overview)

    def analyze_customer_changes(self, change_description: str) -> Dict[str, Any]:
        """Analysiert Kundenänderungen mit Claude CLI"""
        prompt = f"""
Analysiere folgende Kundenänderung für Solar-Komfort Reinigungswebsite:

AKTUELLER STATUS:
- Deployed: {self.deployed_url}
- Template: Next.js/React Nextly Template
- Ziel: Gebäudereinigung/Solarreinigung Service

KUNDENÄNDERUNG:
{change_description}

AUFGABE:
1. Kategorisiere die Änderung (Design, Content, Funktionalität, SEO)
2. Schätze Aufwand (Niedrig/Mittel/Hoch)
3. Erstelle Umsetzungsplan mit konkreten Schritten
4. Identifiziere benötigte Dateien/Assets
5. Gib spezifische Anweisungen für Implementation

FORMAT: Strukturierte Antwort mit klaren Kategorien und Handlungsempfehlungen.
"""
        
        result = self.run_claude_cli(prompt)
        return result

    def generate_implementation_plan(self, analysis_result: str) -> Dict[str, Any]:
        """Generiert Implementierungsplan basierend auf Analyse"""
        prompt = f"""
Basierend auf folgender Änderungsanalyse, erstelle einen detaillierten Implementierungsplan:

ANALYSE:
{analysis_result}

TECHNISCHER KONTEXT:
- Template: F:/108Coding/solar-komfort/nextly-template
- Marketing: J:/.shortcut-targets-by-id/1nMrbtIquQDn76hkciXPOMk4lQ8oO6YTW/Marketing Romain/Reinigung
- Deployment: Vercel
- Tools: Desktop Commander, Claude CLI, Git

ERSTELLE:
1. Schritt-für-Schritt Anleitung
2. Benötigte Dateien/Ordner
3. CLI-Befehle für Automation
4. Testing-Checkliste
5. Deployment-Strategie

FORMAT: Ausführbare Anweisungen mit konkreten Pfaden und Befehlen.
"""
        
        result = self.run_claude_cli(prompt)
        return result

    def delegate_to_claude_cli(self, task_description: str, working_directory: str = None) -> Dict[str, Any]:
        """Delegiert spezifische Aufgaben an Claude CLI"""
        if working_directory:
            os.chdir(working_directory)
        
        prompt = f"""
AUFGABE: {task_description}

KONTEXT:
- Arbeitsverzeichnis: {working_directory or str(self.project_root)}
- Projekt: Solar-Komfort Reinigung
- Template: Next.js/React
- Ziel: Kundenspezifische Anpassungen

REGELN:
- Keine Emojis im Code verwenden
- Windows-kompatible Pfade
- PS-kompatible Befehle
- Modularität beachten
- Git-Commits dokumentieren

Führe die Aufgabe aus und dokumentiere alle Änderungen.
"""
        
        # Interactive mode für komplexe Tasks
        result = self.run_claude_cli(prompt, print_mode=False)
        return result

    def create_project_memory(self) -> str:
        """Erstellt CLAUDE.md für Projektkontext"""
        memory_content = f"""# Solar-Komfort Reinigung Projekt

## Übersicht
Anpassung des Nextly Templates für Gebäudereinigungsservice der Solar-Komfort GmbH.

## Technische Details
- **Template:** Next.js/React Nextly Template
- **Deployment:** Vercel ({self.deployed_url})
- **Entwicklung:** KI-basiert mit Claude CLI Integration
- **Platform:** Windows 10/11 mit PowerShell

## Projektstruktur
- **Template Source:** {self.template_path}
- **Marketing Assets:** {self.marketing_path}
- **RAG System:** {self.project_root}
- **Working Directory:** Aktuelles Verzeichnis

## Verfügbare Assets
{json.dumps(self.project_status['marketing_assets'], indent=2)}

## Guidelines
- KEINE Emojis im Code
- Windows-kompatible Pfade (absolute Pfade bevorzugt)
- PowerShell-kompatible Befehle
- Modularer Code (max 400 Zeilen pro Datei)
- Git-Commits dokumentieren

## Ziele
1. Template für Reinigungsservice anpassen
2. Marketing-Assets integrieren
3. Kundenänderungen umsetzen
4. Neue Domain deployen

## Status
Letzte Aktualisierung: {self.project_status['last_update']}
Template Ready: {self.project_status['template_ready']}
CLI Ready: {self.project_status['claude_cli_ready']}
"""
        
        memory_file = self.project_root / "CLAUDE.md"
        memory_file.write_text(memory_content, encoding='utf-8')
        
        return str(memory_file)

    def interactive_mode(self):
        """Interaktiver Modus für Projektmanagement"""
        print(self.get_project_overview())
        print("\n[STATUS] Solar-Komfort Reinigung Project Manager bereit")
        print("Verfügbare Befehle:")
        print("  'status' - Projektübersicht")
        print("  'analyze <änderung>' - Kundenänderung analysieren")
        print("  'implement <plan>' - Implementierungsplan erstellen")
        print("  'delegate <task>' - Task an Claude CLI delegieren")
        print("  'memory' - CLAUDE.md erstellen")
        print("  'exit' - Beenden")
        
        while True:
            try:
                user_input = input("\n> ").strip()
                
                if user_input.lower() == 'exit':
                    break
                elif user_input.lower() == 'status':
                    print(self.get_project_overview())
                elif user_input.lower() == 'memory':
                    memory_file = self.create_project_memory()
                    print(f"[STATUS] CLAUDE.md erstellt: {memory_file}")
                elif user_input.startswith('analyze '):
                    change = user_input[8:]
                    result = self.analyze_customer_changes(change)
                    print(f"[ANALYSE] {result.get('output', result.get('error', 'Fehler'))}")
                elif user_input.startswith('implement '):
                    plan = user_input[10:]
                    result = self.generate_implementation_plan(plan)
                    print(f"[IMPLEMENTATION] {result.get('output', result.get('error', 'Fehler'))}")
                elif user_input.startswith('delegate '):
                    task = user_input[9:]
                    result = self.delegate_to_claude_cli(task)
                    print(f"[DELEGATION] {result.get('output', result.get('error', 'Fehler'))}")
                else:
                    print("[STATUS] Unbekannter Befehl. Verfügbare Befehle: status, analyze, implement, delegate, memory, exit")
                    
            except KeyboardInterrupt:
                print("\n[STATUS] Beendet durch Benutzer")
                break
            except Exception as e:
                print(f"[ERROR] {str(e)}")

def main():
    """Hauptfunktion"""
    print("[STATUS] Initialisiere Solar-Komfort Reinigung Project Manager...")
    
    manager = SolarKomfortProjectManager()
    
    # Projekt Memory erstellen
    memory_file = manager.create_project_memory()
    print(f"[STATUS] Projekt Memory erstellt: {memory_file}")
    
    # Test Claude CLI
    if manager.project_status['claude_cli_ready']:
        print("[STATUS] Claude CLI verfügbar - Integration aktiv")
    else:
        print("[WARNING] Claude CLI nicht verfügbar")
    
    # Interaktiver Modus
    manager.interactive_mode()

if __name__ == "__main__":
    main()
