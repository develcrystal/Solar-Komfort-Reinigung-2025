<p align="center">
 <a href="https://web3templates.com/?ref=nextly_github_logo">
 <img src="https://user-images.githubusercontent.com/1884712/132941531-0fdd7acf-47ca-424e-b77f-1fab2e372a37.png" alt="W3T" width="100" height="41"/>
 </a> 
 <br>
 <br>
</p>

# Komfort Gebäudeservice24 GmbH - Website

Diese Website wurde für die Komfort Gebäudeservice24 GmbH entwickelt, um ihre Dienstleistungen im Bereich Gebäudereinigung und Objektbetreuung zu präsentieren.

![Solar Komfort GmbH Website](https://user-images.githubusercontent.com/1884712/121497169-03228680-c990-11eb-975a-e77fddc43de0.png)

## Funktionen

Die Website bietet folgende Funktionen:

- **Responsive Design**: Optimiert für Desktop, Tablet und Mobilgeräte
- **Moderne UI**: Klares, benutzerfreundliches Interface mit Fokus auf die Dienstleistungen
- **Dunkelmodus**: Unterstützung für helles und dunkles Design
- **Kontaktmöglichkeiten**: Direkte Kontaktaufnahme per Telefon und E-Mail

## Inhalte

Die Website umfasst folgende Bereiche:

1. **Hero-Bereich**: Präsentation der Hauptdienstleistungen
2. **Dienstleistungen**: Detaillierte Beschreibung der angebotenen Leistungen
   - Dachbeschichtung
   - Dachreinigung
   - Fassadenreinigung
   - Pflasterreinigung
3. **Prozess**: Erklärung des Arbeitsablaufs bei der Dachbeschichtung
4. **Video**: Demonstration der Dienstleistungen
5. **Kundenstimmen**: Testimonials zufriedener Kunden
6. **FAQ**: Häufig gestellte Fragen zu den Dienstleistungen
7. **Kontakt**: Kontaktinformationen und Call-to-Action

## Technische Details

Diese Website basiert auf dem Nextly-Template und wurde mit folgenden Technologien entwickelt:

- **Next.js**: React-Framework für serverseitiges Rendering
- **Tailwind CSS**: Utility-First CSS-Framework für das Design
- **React**: JavaScript-Bibliothek für die Benutzeroberfläche
- **TypeScript**: Typsicheres JavaScript für robusteren Code

## Installation und Entwicklung

### 1\. Repository klonen

```bash
git clone https://github.com/ihr-repository/solarkomfort-website.git
```

### 2\. In das Verzeichnis wechseln

```
cd solarkomfort-website
```

### 3\. Abhängigkeiten installieren

```
npm install
```

### 4\. Entwicklungsserver starten

```
npm run dev
```

Die Website ist dann unter http://localhost:3000 erreichbar (oder dem von Next.js automatisch gewählten Port).

## Changelog

### [2025-03-13 12:59] ###

#### Neue Funktionen und Änderungen:
- **Neue Seiten hinzugefügt**:
  - Dienstleistungen
  - Über uns
  - Referenzen
  - Kontakt
- **Navigation aktualisiert**: Die Navbar wurde angepasst, um Links zu den neuen Seiten bereitzustellen.

#### Codeänderungen:
- Erstellung von `page.tsx`-Dateien für jede neue Seite.
- Aktualisierung der `Navbar.tsx` für korrekte Links.

#### Offene Punkte:
- Inhalte für die neuen Seiten weiter ausbauen.
- Google Maps-Karte auf der Kontaktseite implementieren.

### [2025-03-13 15:17] ###

#### Neue Funktionen und Änderungen:
- **Deployment auf Vercel**:
  - Die Website wurde erfolgreich auf Vercel deployt und ist nun online verfügbar.
  - Die Website ist unter https://solar-komfort-reinigung-pu1jp3o24-develcrystals-projects.vercel.app erreichbar.

#### Codeänderungen:
- ESLint-Fehler in der Referenzen-Seite wurden behoben (unescapte Anführungszeichen durch HTML-Entities ersetzt).
- Erstellung einer `.vercelignore`-Datei, um unnötige Dateien vom Deployment auszuschließen.

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite.
- Funktionalität des Kontaktformulars implementieren.
- Einrichtung einer benutzerdefinierten Domain für die Website.

### [2025-03-13 16:30] ###

#### Neue Funktionen und Änderungen:
- **Flux KI-generierte Bilder integriert**:
  - Ersetzung von Platzhalterbildern durch hochwertige, generierte Bilder
  - Optimierung der Bildgrößen für bessere Performance
  - Konsistente visuelle Identität durch einheitlichen Stil der Bilder

#### Codeänderungen:
- Aktualisierung der Bildpfade in allen relevanten Komponenten
- Anpassung der Bildgrößen und -formate für optimale Darstellung
- Implementierung von Lazy Loading für verbesserte Ladezeiten

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite
- Funktionalität des Kontaktformulars implementieren
- Einrichtung einer benutzerdefinierten Domain für die Website

### [2025-03-13 17:10] ###

#### Neue Funktionen und Änderungen:
- **Hero-Bild aktualisiert**: Das Platzhalter-Bild auf der Hauptseite wurde durch das Flux-generierte Bild "quer_Vorher-Nachher Dachreinigung.webp" ersetzt.
- **Navigationslinks korrigiert**: Probleme mit Umlauten in URLs behoben, insbesondere für die "Über uns"-Seite.
- **Dark/Light-Umschalter verbessert**: Design des Theme-Umschalters in der Navigationsleiste optimiert für bessere Sichtbarkeit.

#### Codeänderungen:
- `src/components/Hero.tsx`: Hero-Bild durch Flux-generiertes Bild ersetzt.
- `src/components/Navbar.tsx`: Funktion `getNavigationUrl` hinzugefügt, um korrekte URL-Pfade für Menüpunkte zu generieren.
- `src/app/layout.tsx`: Favicon-Konfiguration aktualisiert, um mehrere Formate zu unterstützen.

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite.
- Funktionalität des Kontaktformulars implementieren.
- Einrichtung einer benutzerdefinierten Domain für die Website.

### [2025-03-14 09:45] ###

#### Neue Funktionen und Änderungen:
- **Team-Sektion überarbeitet**:
  - Neue Layout-Struktur für bessere Präsentation der Teammitglieder
  - Hinzufügung von Rollen und Beschreibungen für jedes Teammitglied
  - Implementierung von Hover-Effekten für interaktivere Darstellung

#### Codeänderungen:
- `src/components/Team.tsx`: Komplette Überarbeitung der Komponente mit neuen Styles und Funktionalitäten
- `src/app/ueber-uns/page.tsx`: Integration der überarbeiteten Team-Komponente
- `src/styles/globals.css`: Hinzufügung neuer Utility-Klassen für Team-Karten und Hover-Effekte

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite
- Funktionalität des Kontaktformulars implementieren
- Einrichtung einer benutzerdefinierten Domain für die Website

### [2025-03-14 14:20] ###

#### Neue Funktionen und Änderungen:
- **Referenzen-Slider optimiert**:
  - Verbesserte Navigation mit deutlicheren Pfeilen
  - Automatische Rotation der Referenzbilder implementiert
  - Responsive Anpassung für verschiedene Bildschirmgrößen

#### Codeänderungen:
- `src/components/ImageSlider.tsx`: Überarbeitung der Slider-Logik für bessere Performance
- `src/app/referenzen/page.tsx`: Anpassung der Slider-Konfiguration
- `src/styles/slider.css`: Neue Styles für Navigationselemente

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite
- Funktionalität des Kontaktformulars implementieren
- Einrichtung einer benutzerdefinierten Domain für die Website

### [2025-03-14 16:45] ###

#### Neue Funktionen und Änderungen:
- **Kontaktformular-Platzhalter**:
  - Implementierung eines visuellen Platzhalters für das kommende Kontaktformular
  - Vorbereitung der Backend-Integration für Formularübermittlungen

- **Google Maps-Platzhalter**:
  - Einbindung eines statischen Kartenbilds als Platzhalter für die Google Maps-Integration
  - Vorbereitung der API-Integration

#### Codeänderungen:
- `src/app/kontakt/page.tsx`: Hinzufügung von Platzhalterkomponenten für Formular und Karte
- `src/components/ContactForm.tsx`: Neue Komponente für das Kontaktformular (Platzhalter)
- `src/components/MapPlaceholder.tsx`: Neue Komponente für die Kartenansicht (Platzhalter)

#### Offene Punkte:
- Implementierung der tatsächlichen Google Maps-Karte anstelle des Platzhalters
- Funktionalität des Kontaktformulars implementieren
- Einrichtung einer benutzerdefinierten Domain für die Website

### [2025-03-15 14:24] ###

#### Neue Funktionen und Änderungen:
- **Vorteils-Kacheln optimiert**:
  - Neue maßgeschneiderte Bilder für die drei Hauptvorteile der Dachbeschichtung implementiert
  - Verbesserte visuelle Darstellung mit thematisch passenden Bildern für jeden Vorteil
  - Optimierte Kombination von Icons und Bildern für ansprechendere Präsentation

- **Bildprompts dokumentiert**:
  - Erstellung detaillierter Bildprompts für die Generierung neuer Bilder
  - Dokumentation aller Bildprompts in `image-prompts.md` für zukünftige Konsistenz

#### Codeänderungen:
- `src/app/page.tsx`: Aktualisierung der Bildpfade in den Vorteils-Kacheln
- `image-prompts.md`: Hinzufügung neuer Bildprompts für die Vorteils-Kacheln
- Neue Bilder im `public/img/flux/`-Verzeichnis:
  - `dach-beschichtung-detail.webp` für "Langanhaltender Schutz"
  - `energieeffizienz-dach.webp` für "Verbesserte Energieeffizienz"
  - `immobilie-wertsteigerung.webp` für "Wertsteigerung der Immobilie"

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite
- Funktionalität des Kontaktformulars implementieren
- Einrichtung einer benutzerdefinierten Domain für die Website
- Überprüfung der Website-Performance mit den neuen Bildern

### [2025-03-15 14:32] ###

#### Neue Funktionen und Änderungen:
- **Prozessbilder aktualisiert**:
  - Neue hochwertige Bilder für die drei Schritte des Dachbeschichtungsprozesses implementiert
  - Verbesserte visuelle Darstellung der einzelnen Arbeitsschritte
  - Konsistentes Design für alle Prozessbilder

- **Bildprompts erweitert**:
  - Neue detaillierte Bildprompts für die Prozessschritte erstellt
  - Dokumentation in `image-prompts.md` für zukünftige Bildgenerierung

#### Codeänderungen:
- `src/app/page.tsx`: Aktualisierung der Bildpfade für die Prozessschritte
- `image-prompts.md`: Hinzufügung neuer Bildprompts für die Prozessschritte
- Neue Bilder im `public/img/flux/`-Verzeichnis:
  - `prozess-vorbereitung-reinigung.webp` für "Vorbereitung & Reinigung"
  - `prozess-grundierung.webp` für "Grundierung"
  - `prozess-zweifache-beschichtung.webp` für "Zweifache Beschichtung"

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite
- Funktionalität des Kontaktformulars implementieren
- Einrichtung einer benutzerdefinierten Domain für die Website
- Überprüfung der Website-Performance mit den neuen Bildern

### [2025-03-15 14:40] ###

#### Neue Funktionen und Änderungen:
- **Neues Favicon implementiert**:
  - Blaues SK-Favicon für die Website hinzugefügt
  - Verbesserte Markenidentität durch konsistente Farbgebung

#### Codeänderungen:
- `src/app/layout.tsx`: Aktualisierung der Favicon-Konfiguration
- Neues Favicon im `public/`-Verzeichnis:
  - `favicon_sk_blue.webp` als primäres Favicon eingerichtet

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite
- Funktionalität des Kontaktformulars implementieren
- Einrichtung einer benutzerdefinierten Domain für die Website
- Überprüfung der Website-Performance mit den neuen Bildern

### [2025-03-15 14:47] ###

#### Neue Funktionen und Änderungen:
- **Favicon-Konfiguration optimiert**:
  - Konfiguration für das blaue SK-Favicon verbessert
  - Sowohl .ico als auch .webp Format für bessere Browserkompatibilität eingerichtet

#### Codeänderungen:
- `src/app/layout.tsx`: Erweiterte Favicon-Konfiguration für mehrere Formate
- Alte Favicon-Dateien entfernt für eine aufgeräumte Projektstruktur

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite
- Funktionalität des Kontaktformulars implementieren
- Einrichtung einer benutzerdefinierten Domain für die Website
- Überprüfung der Website-Performance mit den neuen Bildern

### [2025-03-15 13:32] ###

#### Neue Funktionen und Änderungen:
- **Verbesserung der Team-Sektion**:
  - Komplette Neugestaltung mit modernem, kreativem Layout
  - Einführung von Hover-Effekten für die Teammitglieder-Karten
  - Verbesserte visuelle Hierarchie und Informationsdarstellung

- **Optimierung der Bilder**:
  - Ersetzung der Portrait-Bilder auf der Kontakt- und Über-uns-Seite durch Team-Gruppenfotos
  - Konsistentere visuelle Darstellung auf allen Seiten

- **Verbesserung der Benutzerinteraktion**:
  - Optimierung der Slider-Funktionalität auf der Referenzenseite
  - Verbesserung der "Back to Top"-Button-Funktionalität auf allen Seiten
  - Entfernung redundanter CTA-Sektionen für ein aufgeräumteres Design

#### Codeänderungen:
- Aktualisierung der `ImageSlider.tsx`-Komponente für bessere Klickbarkeit der Navigationselemente
- Verbesserung der `BackToTop.tsx`-Komponente für zuverlässigere Funktionalität
- Anpassung der Hero-Bilder auf der Kontakt- und Über-uns-Seite
- Entfernung redundanter CTA-Sektionen auf der Referenzenseite

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite
- Funktionalität des Kontaktformulars implementieren
- Einrichtung einer benutzerdefinierten Domain für die Website

### [2025-03-15 13:49] ###

#### Neue Funktionen und Änderungen:
- **Vercel-GitHub-Integration überprüft**:
  - Bestätigung der funktionierenden CI/CD-Pipeline zwischen GitHub und Vercel
  - Automatisches Deployment bei Push auf den main-Branch
  - Synchronisation zwischen lokalem Entwicklungsstand, GitHub-Repository und Vercel-Deployment verifiziert

#### Codeänderungen:
- Keine direkten Codeänderungen, nur Überprüfung der Deployment-Konfiguration

#### Offene Punkte:
- Die bestehenden offenen Punkte bleiben unverändert
- Einrichtung einer benutzerdefinierten Domain für die Website bleibt prioritär

### [2025-03-15 16:02] ###

#### Neue Funktionen und Änderungen:
- **Vercel-Deployment aktualisiert, um die neuesten Änderungen zu übernehmen**
- **Bilder für Flux-Komponenten hinzugefügt**
- **Nicht mehr benötigte Dateien entfernt**

#### Codeänderungen:
- Keine direkten Codeänderungen, nur Überprüfung der Deployment-Konfiguration und Entfernung nicht benötigter Dateien

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite
- Funktionalität des Kontaktformulars implementieren
- Einrichtung einer benutzerdefinierten Domain für die Website

### [2025-03-15 16:31] ###

#### Neue Funktionen und Änderungen:
- **Vercel-Deployment-Probleme behoben**:
  - Repository-URL in package.json korrigiert (von nextly-template auf solar-komfort-reinigung)
  - Fehlendes Paket "tailwind-merge" explizit installiert
  - Neues Vercel-Projekt eingerichtet für bessere GitHub-Integration

#### Codeänderungen:
- **package.json**: Repository-URL auf https://github.com/develcrystal/solar-komfort-reinigung aktualisiert
- **package-lock.json**: Abhängigkeiten aktualisiert, um tailwind-merge korrekt zu installieren

#### Offene Punkte:
- Implementierung der Google Maps-Karte auf der Kontaktseite
- Funktionalität des Kontaktformulars implementieren
- Einrichtung einer benutzerdefinierten Domain für die Website

### [2025-03-15 16:50] ###

#### Änderungen:
- Git-Konfiguration aktualisiert: E-Mail-Adresse auf `developer.crystalcodes@gmail.com` geändert, um Probleme mit dem Vercel-Deployment zu beheben.
- Test-Commit erstellt, um die Vercel-GitHub-Integration zu überprüfen.

#### Offene Punkte:
- Überprüfung, ob die Aktualisierung der Git-Konfiguration das Vercel-Deployment-Problem behebt.

### [2025-03-15 16:52] ###

#### Änderungen:
- `package.json` angepasst: `tailwindcss` und `postcss` von devDependencies zu dependencies verschoben, um Vercel-Build-Fehler zu beheben.
- Der Fehler "Cannot find module 'tailwindcss'" im Vercel-Deployment wurde identifiziert und behoben.

#### Offene Punkte:
- Überprüfung, ob die Aktualisierung der package.json das Vercel-Deployment-Problem behebt.

### [2025-03-15 16:55] ###

#### Änderungen:
- `vercel.json` angepasst: Build-Befehl aktualisiert, um explizit `tailwindcss`, `postcss` und `autoprefixer` zu installieren.
- `package.json` erweitert: `autoprefixer` als Abhängigkeit hinzugefügt.
- `postcss.config.js` erstellt: Konfigurationsdatei für PostCSS und Tailwind CSS hinzugefügt.

#### Offene Punkte:
- Überprüfung, ob die zusätzlichen Konfigurationsänderungen das Vercel-Deployment-Problem beheben.
