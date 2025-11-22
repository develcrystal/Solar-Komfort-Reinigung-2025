# Verbindung zwischen Hauptprojekt und Vision-Tool

## Übersicht
Diese Datei dokumentiert, wie das Hauptprojekt "Komfort Gebäudeservice24 GmbH" mit dem Vision-Tool-Server kommuniziert.

## MCP-Verbindung
- Vision-Tool läuft als separater MCP-Server auf Port 3001
- Verfügbare Endpunkte:
  - http://localhost:3001/mcp/tools - Liste aller verfügbaren Tools
  - http://localhost:3001/mcp/tools/analyze_image - Endpunkt für Bildanalyse

## Verfügbares Tool
- `analyze_image`: Haupttool zur visuellen Analyse von Bildern
- Parameter: imagePath (Pflicht), prompt (optional)
- Rückgabe: Erfolg/Status und Analyseergebnis

## Verbindungsaufbau
1. Vision-Tool-Server muss auf Port 3001 laufen
2. Hauptprojekt kann dann das globale `analyze_image` Tool verwenden
3. Verbindung erfolgt über MCP-Protokoll

## Entwicklung vs. Produktion
- In Entwicklungsumgebung: Vollständige Funktionalität verfügbar
- In Produktionsumgebung: Keine Abhängigkeit vom Vision-Tool
- Für Produktionsbuilds: Vision-Tools werden ausgeschlossen

## Zugriffsmuster
Sobald MCP-Verbindung hergestellt ist:
```typescript
const result = await analyze_image({
  imagePath: "pfad/zum/bild.jpg",
  prompt: "Beschreibung des gewünschten Analysierens"
});
```

## Sicherheitshinweise
- API-Schlüssel nur in sicheren Umgebungen verwenden
- Keine Übertragung sensibler Bilder über das Tool in Produktivumgebungen
- Tool ausschließlich für Entwicklungsaudits verwenden