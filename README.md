# HjerteRom

En webbasert applikasjon som hjelper deg å finne det beste omsorgssenteret for dine eldre, basert på individuelle preferanser, mobilitet, interesser og geografisk tilhørighet.

---

## Teknologistack

| Lag | Teknologi |
|-----|-----------|
| Markup | HTML5 |
| Styling | CSS3, Bootstrap 5 |
| Logikk | Vanilla JavaScript (ES6+) |
| Ikoner | Bootstrap Icons |
| Kart | Google Maps JavaScript API |
| Data | JSON (lokale filer + API-fallbacks) |

---

## Mappestruktur

```
/
├─ index.html               – Inngangspunkt (videresender til onboarding eller home)
│
├─ /pages
│   ├─ onboarding.html      – Velkomstside / introduksjon
│   ├─ preferences.html     – Registrer preferanser (alder, mobilitet, interesser …)
│   ├─ home.html            – Hjemskjerm med anbefalte byer
│   ├─ city.html            – Detaljvisning for valgt by
│   ├─ activities.html      – Aktiviteter filtrert etter preferanser
│   ├─ carecenter.html      – Liste over omsorgssentre
│   └─ compare.html         – Sammenlign byer / omsorgssentre
│
├─ /js
│   ├─ app.js               – Overordnet init og routing
│   ├─ state.js             – Brukerpreferanser og applikasjonstilstand
│   ├─ dataService.js       – Henter data fra API eller lokale JSON-filer
│   ├─ recommendation.js    – Anbefalingslogikk (by, omsorgssenter)
│   ├─ mapService.js        – Google Maps-integrasjon
│   └─ components/
│       ├─ buttons.js       – Gjenbrukbare knapper
│       ├─ cards.js         – Kortkomponenter (by, senter, aktivitet)
│       ├─ lists.js         – Listekomponenter
│       └─ filters.js       – Filter- og sorteringskomponenter
│
├─ /data
│   ├─ cities.json          – Byer med beskrivelse og metadata
│   ├─ activities.json      – Aktiviteter per by
│   ├─ carecenters.json     – Omsorgssentre per by
│   └─ ratings.json         – Vurderinger og rangeringer
│
├─ /css
│   ├─ main.css             – Global layout og typografi
│   └─ components.css       – Komponentspesifikke stiler
│
└─ /assets
    └─ (ikoner og bilder)
```

---

## Dataflyt

```
Bruker fyller inn preferanser (preferences.html)
        ↓
state.js lagrer preferansene (localStorage + minnebasert objekt)
        ↓
recommendation.js leser state og filtrerer data fra dataService.js
        ↓
home.html viser anbefalte byer
        ↓
city.html / activities.html / carecenter.html viser filtrert innhold
```

### Brukerpreferanser – datamodell

```json
{
  "userType": "foreldre | meg_selv",
  "age": 75,
  "counties": ["Vestland", "Rogaland"],
  "mobility": "god | begrenset | rullestol",
  "interests": ["natur", "kultur", "sosialt"],
  "priorities": ["nærhet_til_familie", "helsestilbud", "aktivitetstilbud"]
}
```

---

## Komme i gang (lokalt)

```bash
# Klon repoet
git clone https://github.com/pehag5384/HjerteRom.git
cd HjerteRom

# Åpne i nettleser (ingen build-steg nødvendig)
open index.html
# eller bruk Live Server i VS Code
```

> **Google Maps API-nøkkel:** Legg nøkkelen i en lokal `config.js` (ikke commit denne filen).
> Eksempel: `const MAPS_API_KEY = "din_nøkkel_her";`

---

## Samarbeidsregler

1. **Én feature per branch** – navngi etter mønsteret `feature/<navn>` (f.eks. `feature/preferences`)
2. **Ingen direkte push til `main`** – bruk pull requests
3. **Småe commits** med beskrivende meldinger på norsk eller engelsk (velg én og hold deg til det)
4. **All kode skal forstås uten muntlig forklaring** – kommenter der logikken ikke er åpenbar
5. **Felles navngivning** – engelsk for kode (variabler, funksjoner, filer), norsk for UI-tekster

### Branches

| Branch | Formål |
|--------|--------|
| `main` | Stabil, fungerende versjon |
| `feature/preferences` | Preferanseskjema |
| `feature/homescreen` | Hjemskjerm |
| `feature/maps` | Kartintegrasjon |
| `feature/data-integration` | Dataservice og JSON-fallbacks |

---

## Arbeidsfordeling (roller)

| Rolle | Ansvar |
|-------|--------|
| **State & data** | `state.js`, `dataService.js`, JSON-filer, localStorage |
| **Anbefaling & filtrering** | `recommendation.js`, by-logikk, sortering, filtre |
| **Kart & geografi** | `mapService.js`, Google Maps, avstander |
| **UI-sammensetting** | HTML-sider, komponenter, konsistens mellom sider |

---

## Utviklingsrekkefølge

- [x] Repo + struktur + README
- [x] Datamodell for preferanser
- [x] Onboarding / preferanseløp
- [x] Lagring av preferanser
- [x] Anbefaling av by
- [x] Homescreen (basert på lagret state)
- [x] By-informasjon + aktiviteter
- [x] Omsorgssenter-liste
- [x] Filtrering og sortering
- [ ] Google Maps-integrasjon
- [ ] Finpuss / sammenkobling

