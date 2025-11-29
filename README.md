# Alexi Delfieux - Artist Portfolio Website

A beautiful, bilingual (French/English) artist portfolio website showcasing contemporary artworks with a modern, responsive design.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🎨 Features

- **Bilingual Support**: Seamless French/English language switching
- **Gallery**: 36+ artworks organized by series with filtering
- **Artwork Details**: Modal popups with full artwork information and inspiration stories
- **Inquiry System**: Direct contact form integration from artwork modals
- **Commission Work**: Dedicated section explaining the commission process
- **Responsive Design**: Beautiful on desktop, tablet, and mobile
- **Modern UI**: Clean design with smooth animations and transitions

## 📁 Repository Structure

```
alexi-delfieux-portfolio/
├── static-website/          # Ready-to-deploy static files (HTML/CSS/JS)
│   ├── index.html
│   ├── static/
│   │   ├── css/
│   │   └── js/
│   └── README-DEPLOYMENT.txt
│
└── source-code/             # React source code for customization
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   └── mockData.js
    ├── public/
    ├── package.json
    └── tailwind.config.js
```

## 🚀 Quick Deploy (Static Website)

### Option 1: Deploy to OVH Hosting

1. Navigate to the `static-website` folder
2. Download all files
3. Upload to your OVH hosting's `www` or `public_html` folder via FTP
4. Visit your domain - Done! 🎉

### Option 2: Deploy to Netlify

```bash
cd static-website
# Drag and drop to Netlify or use CLI:
netlify deploy --prod
```

### Option 3: Deploy to GitHub Pages

1. Go to repository Settings > Pages
2. Set source to "Deploy from a branch"
3. Select the branch and `/static-website` folder
4. Your site will be live at: `https://delfieuxalexi-afk.github.io/alexi-delfieux-portfolio/`

## 🛠️ Development (Source Code)

### Prerequisites

- Node.js 16+ and Yarn
- React 19

### Installation

```bash
cd source-code
yarn install
```

### Run Development Server

```bash
yarn start
```

Runs on `http://localhost:3000`

### Build for Production

```bash
yarn build
```

Creates optimized production build in `build/` folder.

## 📖 Pages

- **Home**: Hero section with featured artworks
- **About**: Artist biography and creative process
- **Gallery**: Complete artwork collection with filters
- **Exhibitions**: Exhibition history and education
- **Contact**: Contact form and commission information

## 🎨 Artwork Series

- **Saint Martin & Cityscapes**: Peripheral Paris, water and long horizons
- **Rise / Splash Series**: Square canvases, graffiti echoes and sea spray
- **Bloc & Structures**: Modular compositions built as colour architectures
- **Early Mozer Era**: Early explorations around texture, sound and motion
- **Origins & Totems**: Totemic figures and dense interiors

## 🔧 Customization

### Update Artwork Data

Edit `source-code/src/mockData.js`:

```javascript
export const artworks = [
  {
    id: 1,
    title: "Your Artwork Title",
    year: 2024,
    technique: "Acrylic on canvas",
    format: "100x80 cm",
    price: 1000,
    available: true,
    series: "your-series",
    image: "https://your-image-url.com/image.jpg",
    description_en: "English description...",
    description_fr: "Description française..."
  }
];
```

### Update Contact Information

Edit `source-code/src/mockData.js`:

```javascript
export const contactInfo = {
  phone: '+33 6 12 34 56 78',
  email: 'your.email@example.com',
  location: 'Your Location',
  instagram: 'https://instagram.com/yourhandle',
  facebook: 'https://facebook.com/yourpage',
  twitter: 'https://twitter.com/yourhandle'
};
```

### Change Colors

Edit `source-code/tailwind.config.js` to customize the color scheme.

## 📱 Technology Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Create React App with Craco

## 📝 License

MIT License - Feel free to use and modify for your needs.

## 🆘 Support

For deployment help:
- OVH Support: https://help.ovhcloud.com/
- React Documentation: https://react.dev/

## 📧 Contact

For questions about this website:
- Email: alexi.delfieux@example.com
- Instagram: [@alexidelfieux](https://instagram.com/alexidelfieux)

---

**Built with ❤️ for showcasing contemporary art**
