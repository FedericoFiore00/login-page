# 🍷 Cantina Vino - Login Page

Una moderna pagina di login con design elegante e animazioni fluide. La card bianca scorre sopra il pannello scuro per passare tra login e registrazione.

![Login Page Preview](https://via.placeholder.com/800x400/2e2e2e/ffffff?text=Login+Page+Preview)

## ✨ Caratteristiche Principali

- **🎨 Design Moderno**: Card bianca sovrapposta a pannello scuro con gradienti eleganti
- **🔄 Animazioni Fluide**: Transizioni smooth tra login e registrazione
- **⚡ Loading States**: Spinner animato e feedback visivo sui bottoni
- **📱 Responsive**: Layout ottimizzato per desktop e mobile
- **♿ Accessibile**: Focus ring, autocomplete e target touch adeguati
- **🎯 UX Intuitiva**: Switch immediato tra login e signup

## 🚀 Demo Live

Apri `index.html` nel browser per vedere la demo locale.

## 🛠️ Tecnologie Utilizzate

- **HTML5** - Struttura semantica
- **CSS3** - Grid, Flexbox, animazioni e transizioni
- **JavaScript ES6+** - Interattività e gestione stati
- **Font Montserrat** - Tipografia moderna

## 📁 Struttura Progetto

```
login-page/
├── index.html          # Pagina principale
├── style.css           # Stili globali e layout
├── login.css           # Stili specifici login
├── sign_up.css         # Stili specifici registrazione
├── font.css            # Import font Montserrat
├── app.js              # Logica JavaScript
└── README.md           # Documentazione
```

## 🎯 Come Funziona

### Layout e Animazioni
- **Black Card**: Pannello scuro con due sezioni (Login/Signup)
- **White Card**: Card bianca che scorre da sinistra a destra
- **CSS Grid**: Entrambe le card occupano la stessa area (`grid-area: 1/1`)
- **Z-index**: White card sempre sopra (z-index: 2)

### Stati e Interazioni
- **Classe `.is-signup`**: Controlla posizione white card e visibilità pannelli
- **Click Handler**: Toggle della classe per switch tra modalità
- **Loading States**: Spinner animato durante le operazioni

## 🎨 Design System

### Colori
```css
/* Accent Color (Windows Blue) */
--primary: #0078D4
--primary-hover: #106EBE
--primary-active: #005A9E

/* Backgrounds */
--bg-page: linear-gradient(135deg, #e0e0e0, #f2f2f2)
--bg-black-card: linear-gradient(135deg, #2e2e2e, #3c3c3c)
--bg-white-card: #fafafa

/* Text */
--text-primary: #2e2e2e
--text-secondary: #E5E7EB
--text-white: #f2f2f2
```

### Tipografia
- **Font Family**: Montserrat
- **Pesi**: 400 (regular), 600 (semi-bold)
- **Dimensioni**: 16px (bottoni), 14px (input)

## 🔧 Funzionalità JavaScript

### Gestione Stati Loading
```javascript
// Attiva stato loading
function startLoading(button) {
    if (!button) return;
    button.classList.add('loading');
}

// Disattiva stato loading
function stopLoading(button) {
    if (!button) return;
    button.classList.remove('loading');
}
```

### Event Listeners
- **Login Button**: Attiva loading per 1.5s
- **Signup Button**: Attiva loading per 1.5s
- **Switch Buttons**: Toggle tra modalità login/signup

## 📱 Responsive Design

### Desktop (≥768px)
- Layout side-by-side con card sovrapposte
- Animazioni complete di scorrimento

### Mobile (<768px)
- Layout stack verticale
- Card full-width
- Animazioni ottimizzate per touch

## ♿ Accessibilità

- **Focus Ring**: Indicatori visivi chiari per navigazione tastiera
- **Autocomplete**: Supporto per username e password
- **Target Size**: Bottoni e input minimo 44px
- **Contrasto**: Ratio WCAG AA compliant
- **Screen Reader**: Struttura semantica appropriata

## 🚀 Installazione e Setup

1. **Clona il repository**
   ```bash
   git clone https://github.com/FedericoFiore00/login-page
   cd login-page
   ```

2. **Apri nel browser**
   ```bash
   # Apri index.html direttamente nel browser
   # Oppure usa un server locale
   python -m http.server 8000
   # Vai su http://localhost:8000
   ```

3. **Deploy su GitHub Pages**
   - Vai su Settings → Pages
   - Source: Deploy from a branch
   - Branch: main (root)
   - Salva

## 🎨 Personalizzazione

### Modificare Colori
Aggiorna le variabili CSS in `style.css`:
```css
:root {
  --primary: #tuo-colore;
  --primary-hover: #tuo-colore-hover;
}
```

### Aggiungere Validazione
Estendi `app.js` con logica di validazione:
```javascript
function validateForm(inputs) {
  // Logica di validazione
  return isValid;
}
```

### Personalizzare Animazioni
Modifica le transizioni in `style.css`:
```css
.whiteCard {
  transition: transform 0.6s ease; /* Durata e easing */
}
```

## 🗺️ Roadmap

- [ ] **Validazione Form**: Controlli HTML5 e messaggi personalizzati
- [ ] **API Integration**: Collegamento con backend reale
- [ ] **Tema Dark/Light**: Switch automatico basato su preferenze sistema
- [ ] **Animazioni Avanzate**: Micro-interazioni e feedback visivi
- [ ] **PWA Support**: Service worker e installabilità
- [ ] **Testing**: Unit test per JavaScript e CSS

## 🤝 Contribuire

1. Fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Distribuito sotto licenza MIT. Vedi `LICENSE` per maggiori informazioni.

## 🙏 Credits

- **Design Inspiration**: Dribbble - "Login Page UI Design"
- **Color Palette**: Microsoft Fluent UI
- **Typography**: Montserrat by Julieta Ulanovsky
- **Icons**: Custom CSS spinners

## 📞 Contatti

- **GitHub**: [@FedericoFiore00](https://github.com/FedericoFiore00)
- **Email**: [Il tuo email]

---

⭐ Se ti piace questo progetto, lascia una stella su GitHub!