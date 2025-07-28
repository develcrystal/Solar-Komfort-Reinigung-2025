#!/usr/bin/env python3
"""
Task Automation für Solar-Komfort Reinigung mit Gemini CLI Integration
"""

import os
import subprocess
import json
from pathlib import Path
from datetime import datetime
from typing import Dict, Any, List

class TaskAutomation:
    def __init__(self):
        self.project_root = Path("F:/108Coding/solar-komfort-reinigung-rag")
        self.claude_cli = r"C:\Users\Hill\AppData\Roaming\npm\node_modules\@anthropic-ai\claude-code\cli.js"
        
    def run_claude_task(self, task: str, context: str = "") -> Dict[str, Any]:
        """Führt Task mit Claude CLI aus"""
        prompt = f"""
TASK: {task}

CONTEXT: {context}

PROJEKT: Solar-Komfort Reinigung
TEMPLATE: Next.js/React Nextly Template
DEPLOYMENT: Vercel

REGELN:
- Keine Emojis im Code
- Windows-kompatible Befehle
- Absolute Pfade verwenden
- Git-Dokumentation

Führe Task aus und dokumentiere Ergebnis.
"""
        
        try:
            result = subprocess.run(
                ['node', self.claude_cli, '-p', prompt],
                capture_output=True,
                text=True,
                timeout=300,
                cwd=str(self.project_root)
            )
            
            return {
                'success': result.returncode == 0,
                'output': result.stdout,
                'error': result.stderr
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def run_gemini_task(self, task: str) -> Dict[str, Any]:
        """Führt Task mit Gemini CLI aus (falls verfügbar)"""
        try:
            result = subprocess.run(
                ['gemini-cli', task],
                capture_output=True,
                text=True,
                timeout=180
            )
            
            return {
                'success': result.returncode == 0,
                'output': result.stdout,
                'error': result.stderr
            }
        except FileNotFoundError:
            return {'success': False, 'error': 'Gemini CLI nicht verfügbar'}
        except Exception as e:
            return {'success': False, 'error': str(e)}

def main():
    automation = TaskAutomation()
    
    test_task = "Analysiere Nextly Template Struktur für Reinigungsservice-Anpassung"
    result = automation.run_claude_task(test_task)
    
    print(f"[STATUS] Task Result: {result['success']}")
    if result['success']:
        print(f"[OUTPUT] {result['output']}")
    else:
        print(f"[ERROR] {result.get('error', 'Unbekannter Fehler')}")

if __name__ == "__main__":
    main()
