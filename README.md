# Login Page — White over Black (HTML/CSS/JS)

UI di login minimal con **card bianca** sovrapposta al **pannello scuro**.
La card bianca scorre **da sinistra a destra** su click, restando **sopra** la black card.


## ✨ Caratteristiche
- Sovrapposizione pulita con CSS Grid (stessa `grid-area`) e `z-index`
- Animazione fluida con `transform` + `transition`
- Stato unico `.is-signup` che governa testo in blackCard + posizione whiteCard
- Input accessibili: label reali, underline, `:focus-visible` con ring
- Button primary blu Windows (`#0078D4` / `#106EBE` hover / `#005A9E` active)
- Font: Montserrat



## 🔧 Tech stack
- HTML semantico (label + autocomplete)
- CSS (Grid + Flex, custom properties per larghezze, focus ring)
- JS (solo per togglare la classe `.is-signup`)




## ▶️ Avvio rapido
1) Clona il repo
git clone https://github.com/FedericoFiore00/login-page
cd login-page

2) Apri index.html nel browser (pagina statica).

3) GitHub Pages
- Settings → Pages
- Source: Deploy from a branch
- Branch: main (root)
- Salva → URL: https://github.com/FedericoFiore00/login-page

## 🧩 Come funziona lo switch Login/Sign up
- La blackCard contiene due pannelli:
  - Destra: “Don’t have an Account? → SIGN UP”
  - Sinistra: “Have an Account? → LOG IN”
- La whiteCard è sempre sopra (stessa `grid-area`, `z-index: 2`) e si muove con `transform`.
- Al click del bottone nero, uno script aggiunge/rimuove la classe `.is-signup` su `.box`:
  - `.box:not(.is-signup)` → whiteCard a sinistra, pannello SIGN UP visibile a destra
  - `.box.is-signup` → whiteCard a destra, pannello LOG IN visibile a sinistra


## 🎨 Design tokens (chiave)
- Accent (Windows blue):
  - Base #0078D4
  - Hover #106EBE
  - Active #005A9E
  - Focus ring: #0078D4 @ 30–35% (3–4px)
- Input underline (whiteCard):
  - Base #E5E7EB → Hover #D1D5DB → Focus 2px #0078D4
- Black card gradient: linear-gradient(135deg, #2e2e2e, #3c3c3c)
- Sfondo pagina: linear-gradient(135deg, #e0e0e0, #f2f2f2)

## ♿ Accessibilità (minimi indispensabili)
- `:focus-visible` con focus ring chiaro 
- Autocomplete: `username`, `current-password`
- Target minimo 44px per bottoni e input

## ⚙️ Personalizzazione rapida
- Larghezze card con custom properties (un solo punto di verità):
  - `--bw` (black width), `--ww` (white width)
  - Offset whiteCard: `calc((var(--bw) - var(--ww)) / 2)`
- Colori: mantieni un solo accent per coerenza visiva

## 🗺️ Roadmap / TODO
- [ ] Layout mobile (whiteCard full width; pannelli black su due righe)
- [ ] Sign up form (ora è commentato)
- [ ] Validazione HTML5 + messaggi personalizzati
- [ ] ARIA per errori (`aria-invalid`, `aria-describedby`)
- [ ] Animazioni fade su testi della blackCard (opacity/visibility)
- [ ] Tema dark/light (opzionale)

## 🙌 Credits
- Ispirazione UI: Dribbble — “Login Page UI Design”
- Fluent UI / Windows blue reference

## 📜 Licenza
MIT — usa e modifica liberamente, mantieni i credits.
