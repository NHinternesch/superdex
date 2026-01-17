# 🎮 Superweek Pokedex

> Gotta catch 'em all! Discover Superweek 2026 speakers through a Pokemon-inspired Pokedex interface.

## 🌟 Features

- **Authentic Pokedex Design**: Classic red Pokedex with blinking lights, D-pad, and buttons
- **Smooth Animations**: Close, shake, and open animations with flash effects
- **35+ Speakers**: Complete database of Superweek 2026 speakers
- **Smart Search**: Search by first name, last name, or full name
- **Speaker Profiles**: View company, location, LinkedIn, and website links
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Easter Egg**: Triple-click the blue light for a random speaker!

## 🚀 Quick Start

Simply open `index.html` in your browser - no build process required!

Or visit the live site: [https://[your-username].github.io/superweek-pokedex](https://[your-username].github.io/superweek-pokedex)

## 🎨 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom animations, gradients, and responsive design
- **Vanilla JavaScript** - No frameworks, pure JS
- **Press Start 2P Font** - Authentic retro gaming aesthetic
- **Anime.js** - Smooth animation library

## 🔍 How to Use

1. Enter a speaker's name in the search field
2. Click the yellow "GO" button (or press Enter)
3. Watch the Pokedex close, shake, and reopen
4. View the speaker's profile with company, location, and links
5. Click "Search Again" to find another speaker

### Example Searches

Try searching for:
- `Simo` or `Simo Ahava`
- `Krista` or `Krista Seiden`
- `Marie` or `Marie Fenner`
- `Doug` or `Doug Hall`
- `Nicolas` (yes, that's me! 👋)

## 📁 Project Structure

```
superweek-pokedex/
├── index.html       # Main HTML structure
├── styles.css       # Pokemon-themed styling
├── script.js        # Search logic & animations
├── speakers.js      # Speaker database
└── README.md        # This file
```

## 🎯 Speaker Data

All speaker data is sourced from [Superweek 2026](https://superweek.hu/) including:
- Full name
- Company/Organization
- Location (city, country)
- LinkedIn profile
- Personal/Company website

## 🛠️ Customization

### Adding New Speakers

Edit `speakers.js` and add a new entry:

```javascript
'speaker name': {
    name: 'Full Name',
    company: 'Company Name',
    companyUrl: 'https://company.com',
    location: 'City, Country',
    image: 'https://...',
    linkedin: 'https://linkedin.com/in/...',
    website: 'https://...'
}
```

### Changing Colors

Edit `styles.css` and modify the CSS variables in the gradient backgrounds.

## 🎨 Design Credits

Inspired by the classic Pokemon Pokedex design and adapted from the [Producer Pokedex](https://github.com/yourusername/producer-pokedex) project.

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- **Superweek Conference** - For organizing amazing analytics conferences
- **All Speakers** - For sharing their knowledge with the community
- **Pokemon/Nintendo** - For the iconic Pokedex design inspiration

## 🐛 Known Issues

- Some speaker images use placeholder avatars (fallback to initials)
- LinkedIn/website links are researched and may need updates

## 🚀 Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose `main` branch and `/root` folder
6. Your site will be live at `https://[username].github.io/[repo-name]`

---

Built with 💙 for the analytics community by [Nicolas Hinternesch](https://linkedin.com/in/nicolashinternesch)

**Superweek 2026** | February 3-7, 2026 | Budapest, Hungary 🇭🇺
