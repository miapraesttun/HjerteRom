HjerteRom – Webapplikasjon
Dette prosjektet er en webapp utviklet i gruppe, basert på en Figma‑prototype.
Applikasjonen hjelper brukere (primært pårørende) med å finne egnede omsorgssentre for eldre ved å samle preferanser, anbefale byer og presentere relevant informasjon på en strukturert måte.
Prosjektet er laget som en ren frontend‑applikasjon med HTML, CSS og JavaScript.

Clone – “kopi til egen maskin”
Dette er det alle gjør.

Repo finnes på GitHub
Du kjører git clone
Du får prosjektet lokalt på PC-en din

Branch – “jobbe parallelt i samme repo” (det dere skal bruke)
Branch = alternativ tidslinje inne i samme repository

Eksempel:
main → stabil versjon
feature/preferences → du jobber med preferansedelen
feature/maps → noen andre jobber med kart

Alle:
- jobber i samme repo
- deler historikk
- kan merge arbeid sammen kontrollert
- spør KI om hvordan man jobber i branches, kopier hele readme, så den skjønner sammenhengen



Kort forklaring av branches:

Tenk på Git‑repoet som et tre:
main er stammen
branches er greiner som vokser ut fra stammen
hver person jobber på sin egen grein
når en grein er ferdig og fungerer, flettes den tilbake inn i stammen
👉 Ingen jobber direkte på main.

Hva er main‑branchen?
main er alltid:
- stabil
- kjørbar
- “sannheten” i prosjektet

Hvis main er ødelagt:
- hele gruppa står fast

Derfor:
- main skal kun få kode som er ferdig og testet.

Dette fungerer fint så lenge hver person har sin egen branch og jobber med sitt ansvarsområde

to personer skal ikke:
- endre samme filer samtidig uten å avtale det
- jobbe på samme branch

Hvis noe må deles:
- snakk først
- merge ofte, men kontrollert



INFORMASJON:

1. Overordnet mål
Målet med prosjektet er å:

Strukturere kompleks informasjon på en forståelig måte
Samle og lagre brukerpreferanser
Bruke åpne API‑er og datasett der det er mulig
Bygge en modulær løsning der kode er gjenbrukbar og forståelig for hele gruppen

Viktig for samarbeidet:

All kode skal kunne forstås av andre i gruppen uten muntlig forklaring.


2. Teknologistack
Prosjektet bruker kun enkle, etablerte teknologier:

HTML – struktur
CSS – styling (med Bootstrap)
JavaScript (vanlig JS) – logikk, state og datahåndtering

Biblioteker og tjenester

Bootstrap – layout og UI‑komponenter
Google Maps API – kart, avstand og ruteinformasjon
SSB API – offentlig statistikk (der relevant)
OpenAI API (valgfritt) – støtte til generert/strukturert tekst
Lokale JSON‑filer – fallback der API‑data ikke finnes

Ingen frontend‑rammeverk (React, Vue, etc.) brukes.


3. Prosjektstruktur (viktig)
Denne mappestrukturen skal følges og ikke endres uten enighet i gruppen.
/root
│
├─ index.html
│
├─ /pages
│   ├─ onboarding.html
│   ├─ preferences.html
│   ├─ home.html
│   ├─ city.html
│   ├─ activities.html
│   ├─ carecenter.html
│   └─ compare.html
│
├─ /js
│   ├─ app.js
│   ├─ state.js
│   ├─ dataService.js
│   ├─ recommendation.js
│   ├─ mapService.js
│   └─ /components
│       ├─ buttons.js
│       ├─ cards.js
│       ├─ lists.js
│       └─ filters.js
│
├─ /data
│   ├─ cities.json
│   ├─ activities.json
│   ├─ carecenters.json
│   └─ ratings.json
│
├─ /css
│   ├─ main.css
│   └─ components.css
│
└─ /assets
    └─ icons / images

Prinsipper bak strukturen

Pages inneholder kun sideoppsett og sammenkobling
JS‑filer har tydelig ansvarsområde
components/ inneholder gjenbrukbare funksjoner
data/ brukes for all lokal/fake/generert informasjon
API‑data og JSON behandles likt via dataService


4. Brukerpreferanser og state
All informasjon brukeren legger inn (alder, mobilitet, interesser, fylker osv.):

lagres samlet i én felles state
håndteres via state.js
brukes videre i:

anbefaling av by
filtrering av aktiviteter
sortering av omsorgssentre

👉 Ingen side skal håndtere egne private preferansedata.


5. Komponentbasert JavaScript
UI‑elementer (kort, knapper, lister, filtre osv.) bygges som:
- rene JavaScript‑funksjoner
- uten side‑spesifikke antagelser
- med tydelige input‑parametere

Dette gjør det mulig å:
- gjenbruke kode
- kombinere funksjoner på tvers av sider
- forstå hva koden gjør basert på funksjonsnavn


6. GitHub‑workflow og branches
Branch‑struktur

main = stabil versjon (skal alltid fungere)
Alle utvikler i feature‑branches

Eksempler:

feature/preferences
feature/recommendations
feature/maps
feature/data-service

Regler

Ingen pusher direkte til main
Én feature per branch
Små commits med beskrivende meldinger
Ferdig feature merges først når den:

fungerer isolert
ikke bryter eksisterende funksjonalitet


7. Arbeidsdeling (rollebasert)
Arbeidet deles etter ansvarsområder, ikke sider:

State & data

preferanser, lagring, JSON‑struktur


Anbefaling & filtrering

byvalg, sortering, rangeringslogikk


Kart & geografi

Google Maps, avstander, overlays


Side‑komposisjon

bygge sider av eksisterende komponenter



Alle jobber mot:

samme datamodell
samme filstruktur
samme navngiving


8. Utviklingsrekkefølge (skal følges)

Repository + README + struktur
Felles datamodell
Preferanseflyt (onboarding)
Lagring av state
Anbefaling av by
Homescreen
By‑informasjon og aktiviteter
Omsorgssentre
Filtrering/sortering
Google Maps‑integrasjon
Sammenkobling og finpuss


9. Samarbeidsregler (kort)

Endringer i struktur tas opp før de gjøres
Kode skrives for mennesker, ikke bare maskiner
Forklarende navn > korte navn
Dokumentasjon er en del av leveransen


