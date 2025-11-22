# Verwendung des MCP Vision-Tools

## Status
Der Vision-MCP-Server läuft auf http://localhost:3001 und ist bereit zur Verwendung.

## Verwendung im Projekt
Sobald die MCP-Verbindung korrekt eingerichtet ist, sollte das globale `analyze_image` Tool wie folgt verwendet werden:

```javascript
const result = await analyze_image({
  imagePath: "/path/to/image.jpg", 
  prompt: "Analysiere dieses Bild einer Webseite und bewerte visuell die Layout-Elemente, Design-Aspekte, Farben, Typografie, Struktur und wie gut es für den Benutzer lesbar und navigierbar ist. Gebe konkrete Feedback zu Verbesserungsmöglichkeiten bezüglich Layout, Farbgestaltung, Lesbarkeit, Design und Usability."
});
```

## Technische Details
- Server läuft auf Port 3001
- MCP-Endpunkt: http://localhost:3001/mcp
- Verwendet OpenRouter API mit Qwen/Qwen3-VL-30B-A3B-Instruct Modell
- Unterstützt verschiedene Bildformate (JPG, PNG, WebP, GIF)

## Verzeichnisstruktur
Das Tool befindet sich in: F:\108Coding\solar-komfort-reinigung-rag\nextly-template\mcp-vision

## Entwicklungshinweis
Diese Funktion ist für Entwicklungsaudits gedacht und sollte nicht in der Produktionsumgebung aktiv sein.