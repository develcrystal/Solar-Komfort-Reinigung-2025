#!/usr/bin/env python3
"""
RAG-System Quick Test für PDF-Suche
"""

import json
import os
from pathlib import Path

def find_kundenanweisungen_pdf():
    """Sucht nach PDFs mit Kundenanweisungen"""
    marketing_path = Path("J:/.shortcut-targets-by-id/1nMrbtIquQDn76hkciXPOMk4lQ8oO6YTW/Marketing Romain/Reinigung")
    
    pdf_files = []
    doc_files = []
    
    print("[STATUS] Suche nach Kundenanweisungen...")
    print(f"[STATUS] Durchsuche: {marketing_path}")
    
    if not marketing_path.exists():
        print("[ERROR] Marketing-Pfad nicht gefunden!")
        return
    
    # Rekursive Suche
    for item in marketing_path.rglob("*"):
        if item.is_file():
            name_lower = item.name.lower()
            
            if item.suffix.lower() == '.pdf':
                pdf_files.append({
                    'name': item.name,
                    'path': str(item),
                    'size': item.stat().st_size if item.exists() else 0,
                    'relevant': any(keyword in name_lower for keyword in 
                                  ['komfort', 'gebäude', 'reinigung', 'anweisung', 'kunde'])
                })
            
            elif item.suffix.lower() in ['.docx', '.doc']:
                doc_files.append({
                    'name': item.name,
                    'path': str(item),
                    'size': item.stat().st_size if item.exists() else 0,
                    'relevant': any(keyword in name_lower for keyword in 
                                  ['komfort', 'gebäude', 'reinigung', 'anweisung', 'kunde'])
                })
    
    print(f"\n[STATUS] GEFUNDENE PDFs ({len(pdf_files)}):")
    print("=" * 50)
    
    for pdf in sorted(pdf_files, key=lambda x: x['relevant'], reverse=True):
        relevance = "*** RELEVANT ***" if pdf['relevant'] else ""
        print(f"{pdf['name']} {relevance}")
        print(f"  Pfad: {pdf['path']}")
        print(f"  Größe: {pdf['size']/1024:.1f} KB")
        print()
    
    print(f"\n[STATUS] GEFUNDENE DOKUMENTE ({len(doc_files)}):")
    print("=" * 50)
    
    for doc in sorted(doc_files, key=lambda x: x['relevant'], reverse=True):
        relevance = "*** RELEVANT ***" if doc['relevant'] else ""
        print(f"{doc['name']} {relevance}")
        print(f"  Pfad: {doc['path']}")
        print(f"  Größe: {doc['size']/1024:.1f} KB")
        print()
    
    # Spezielle Suche nach "Komfort Gebäudeservice24 GmbH" Ordner
    service_path = marketing_path / "Komfort Gebäudeservice24 GmbH"
    if service_path.exists():
        print(f"\n[STATUS] KOMFORT GEBÄUDESERVICE24 ORDNER:")
        print("=" * 50)
        print(f"Pfad: {service_path}")
        
        for item in service_path.rglob("*"):
            if item.is_file():
                print(f"  {item.name} ({item.suffix})")
    
    return {
        'pdf_files': pdf_files,
        'doc_files': doc_files,
        'relevant_pdfs': [pdf for pdf in pdf_files if pdf['relevant']],
        'relevant_docs': [doc for doc in doc_files if doc['relevant']]
    }

def load_scan_results():
    """Lädt Scan-Ergebnisse"""
    scan_file = Path("F:/108Coding/solar-komfort-reinigung-rag/project_scan_results.json")
    
    if scan_file.exists():
        with open(scan_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        print(f"\n[STATUS] SCAN-ERGEBNISSE GELADEN:")
        print("=" * 50)
        
        # Reinigung-spezifische Daten
        reinigung_data = data.get('paths', {}).get('reinigung_data', {})
        if 'files' in reinigung_data:
            print(f"Reinigung-Ordner: {len(reinigung_data['files'])} Dateien")
            
            for file_info in reinigung_data['files']:
                name = file_info.get('name', '')
                if any(ext in name.lower() for ext in ['.pdf', '.docx']):
                    print(f"  {name}")
        
        # Gebäudeservice-spezifische Daten  
        service_data = data.get('paths', {}).get('gebaeudeservice', {})
        if 'files' in service_data:
            print(f"\nGebäudeservice-Ordner: {len(service_data['files'])} Dateien")
            
            for file_info in service_data['files']:
                name = file_info.get('name', '')
                print(f"  {name}")
    
    else:
        print("[STATUS] Keine Scan-Ergebnisse gefunden")

if __name__ == "__main__":
    print("[STATUS] RAG-SYSTEM PDF SUCHE")
    print("=" * 60)
    
    # Direkte PDF-Suche
    find_kundenanweisungen_pdf()
    
    # Scan-Ergebnisse laden
    load_scan_results()
    
    print("\n[STATUS] Suche abgeschlossen")
