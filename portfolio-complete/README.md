# Alexi Delfieux - Artist Portfolio Website

Complete portfolio website with source code and ready-to-deploy static version.

---

## 📁 Directory Structure

```
portfolio-complete/
├── source/              # React source code (edit here)
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   ├── context/     # Language context
│   │   └── mockData.js  # ← EDIT THIS to change content!
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
│
├── build/               # Static website (ready to upload)
│   ├── index.html
│   ├── static/
│   └── ...
│
└── README.md           # This file
```

---

## 🎯 Quick Start Guide

### Option 1: Just Deploy (No Changes Needed)
1. Go to `build/` folder
2. Upload everything to your OVH hosting
3. Done!

### Option 2: Edit & Rebuild
1. Edit content in `source/src/mockData.js`
2. Rebuild (see instructions below)
3. Upload new `build/` folder to OVH

---

## 💻 Working Locally on Windows

### Prerequisites

Install these on your Windows PC:

1. **Node.js** (v16 or higher)
   - Download: https://nodejs.org/
   - Choose "LTS" version
   - Run installer, click "Next" through everything

2. **Text Editor** (choose one)
   - VS Code: https://code.visualstudio.com/ (recommended)
   - Sublime Text: https://www.sublimetext.com/
   - Notepad++: https://notepad-plus-plus.org/

3. **Git** (optional, for GitHub)
   - Download: https://git-scm.com/download/win
   - Use default settings during install

### Setup

1. **Download the project**
   - From GitHub: Click "Code" → "Download ZIP"
   - Extract to: `C:\Projects\alexi-portfolio\`

2. **Open Command Prompt**
   - Press `Win + R`
   - Type: `cmd`
   - Press Enter

3. **Navigate to project**
   ```cmd
   cd C:\Projects\alexi-portfolio\source
   ```

4. **Install dependencies**
   ```cmd
   npm install
   ```
   Wait 2-5 minutes for installation...

5. **Start development server**
   ```cmd
   npm start
   ```
   
   Your browser will open automatically to `http://localhost:3000`
   
   ✨ **The website is now running locally!**

---

## ✏️ How to Edit Content

### Edit Artworks, Prices, Text

1. **Open** `source/src/mockData.js` in your text editor

2. **Find what you want to edit:**

#### Change Contact Information
```javascript
export const contactInfo = {
  phone: '+33 6 12 34 56 78',           // ← Your phone
  email: 'alexi.delfieux@example.com',  // ← Your email
  location: 'Paris, France',            // ← Your location
  instagram: 'https://instagram.com/yourhandle',
  facebook: 'https://facebook.com/yourpage',
  twitter: 'https://twitter.com/yourhandle'
};
```

#### Add a New Artwork
Find the `export const artworks = [` section and add:
```javascript
{
  id: 37,  // ← Next available number
  title: "Your Artwork Title",
  year: 2024,
  technique: "Acrylic on canvas",
  techniqueFr: "Acrylique sur toile",
  format: "100x80 cm",
  price: 1200,
  available: true,
  series: "saint-martin",
  image: "https://your-image-url.com/artwork.jpg",
  description_en: "English description...",
  description_fr: "Description française..."
},  // ← Don't forget comma!
```

#### Change Price
```javascript
{
  id: 1,
  title: "Saint Martin 01",
  price: 1500,  // ← Change this number
  ...
}
```

#### Mark as Sold
```javascript
{
  id: 1,
  title: "Saint Martin 01",
  available: false,  // ← Change true to false
  ...
}
```

3. **Save the file** (Ctrl + S)

4. **See changes immediately**
   - If dev server is running, it auto-refreshes!
   - If not, restart: `npm start`

---

## 🔨 How to Rebuild for Production

After editing, rebuild the static version:

### On Windows:

1. **Open Command Prompt**
   ```cmd
   cd C:\Projects\alexi-portfolio\source
   ```

2. **Build the website**
   ```cmd
   npm run build
   ```
   
   Wait 30-60 seconds...
   
   ✅ **Done!** New files created in `build/` folder

3. **The `build/` folder now contains your updated website**

---

## 📤 How to Upload to OVH Hosting

### Method 1: FTP with FileZilla (Recommended)

#### Setup FileZilla:
1. **Download FileZilla**
   - Visit: https://filezilla-project.org/
   - Download "FileZilla Client"
   - Install with default settings

2. **Get OVH FTP Credentials**
   - Login to: https://www.ovh.com/manager/web/
   - Select your hosting
   - Click "FTP" tab
   - Note down:
     - FTP Server: `ftp.yourdomainname.com`
     - Username: (shown on screen)
     - Password: (if forgotten, reset it here)

#### Upload Files:

1. **Open FileZilla**

2. **Connect to your server**
   - Host: `ftp.yourdomainname.com`
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: `21`
   - Click "Quickconnect"

3. **Navigate on server**
   - Right side (server): Go to `www` or `public_html` folder
   - Left side (your PC): Navigate to `C:\Projects\alexi-portfolio\build\`

4. **Upload files**
   - Select ALL files in the `build/` folder
   - Right-click → Upload
   - Wait for upload to complete (1-2 minutes)

5. **Done!** 
   Visit your domain: `https://yourdomainname.com`

### Method 2: OVH Web FTP

1. **Login to OVH Control Panel**
   - Go to: https://www.ovh.com/manager/web/

2. **Open FTP Explorer**
   - Select your hosting
   - Click "FTP" → "FTP Explorer"

3. **Upload files**
   - Navigate to `www` or `public_html`
   - Click "Upload files"
   - Select ALL files from `build/` folder
   - Upload

---

## 🔄 Complete Workflow

### Making Changes & Deploying:

```
1. Edit Content
   ↓
   Open source/src/mockData.js
   Make changes
   Save file

2. Test Locally
   ↓
   npm start
   Check changes at http://localhost:3000

3. Rebuild
   ↓
   npm run build
   Creates new build/ folder

4. Upload to OVH
   ↓
   Use FileZilla to upload build/ contents
   Upload to www/ or public_html/

5. Done!
   ↓
   Visit your domain
```

---

## 🔧 Common Tasks

### Update All Prices at Once

Open `mockData.js` and use Find & Replace:
- Find: `"price": 1200`
- Replace: `"price": 1500`

### Add Multiple Artworks

Copy an existing artwork block, paste multiple times, then edit each one.

### Change Images

Replace image URLs with your own:
```javascript
image: "https://yourdomain.com/images/artwork1.jpg"
```

Or upload images to `/images/` folder on your server:
```javascript
image: "./images/artwork1.jpg"
```

---

## 📝 Working with GitHub

### Clone Repository

```bash
git clone https://github.com/delfieuxalexi-afk/alexi-delfieux-portfolio.git
cd portfolio-complete/source
npm install
```

### Make Changes and Push

```bash
# Make your edits in mockData.js

# Commit changes
git add .
git commit -m "Updated artwork prices"
git push origin main

# Rebuild
npm run build

# Upload build/ folder to OVH
```

---

## ⚠️ Troubleshooting

### Build fails with errors
**Solution:**
```cmd
# Delete node_modules and reinstall
rmdir /s node_modules
npm install
npm run build
```

### Website shows old content after upload
**Solution:**
1. Clear browser cache (Ctrl + F5)
2. Make sure you uploaded ALL files from build/
3. Check you uploaded to correct folder (www/ or public_html/)

### Images don't load
**Solution:**
1. Check image URLs are correct
2. Test URL in browser
3. Make sure images are publicly accessible
4. Use `https://` not `http://`

### npm start doesn't work
**Solution:**
1. Make sure Node.js is installed: `node --version`
2. Make sure you're in the source/ folder
3. Delete node_modules and reinstall:
   ```cmd
   rmdir /s node_modules
   npm install
   npm start
   ```

---

## 📋 File Reference

### Important Files to Edit:

| File | Purpose | What to Edit |
|------|---------|--------------|
| `source/src/mockData.js` | All content | Artworks, prices, contact, text |
| `source/src/App.css` | Styling | Colors, fonts (advanced) |
| `source/tailwind.config.js` | Design | Colors, spacing (advanced) |

### Don't Edit These:

- `build/` folder - This gets regenerated
- `package.json` - Unless adding new libraries
- Component files - Unless you know React

---

## 🎨 Customization Tips

### Change Website Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',  // Main color
  secondary: '#your-color' // Secondary color
}
```

Then rebuild: `npm run build`

### Change Fonts

Edit `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif']
}
```

---

## 💡 Pro Tips

1. **Always test locally before uploading**
   - Run `npm start` and check everything works

2. **Keep a backup**
   - Save a copy of `mockData.js` before major changes

3. **Use version control**
   - Commit to GitHub after each change

4. **Test on mobile**
   - The site is responsive, but always check on phone

5. **Optimize images**
   - Use compressed images (JPEG at 80% quality)
   - Recommended size: 800-1200px wide

---

## 🆘 Need Help?

### Resources:
- Node.js Issues: https://nodejs.org/en/docs/
- React Docs: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/docs
- OVH Support: https://help.ovhcloud.com/
- FileZilla Guide: https://wiki.filezilla-project.org/

### Common Questions:

**Q: Do I need to know coding?**
A: No! Just edit `mockData.js` following the examples.

**Q: How often should I rebuild?**
A: After every change you want to publish.

**Q: Can I edit the build/ folder directly?**
A: No! It gets overwritten when you rebuild.

**Q: What if I break something?**
A: Re-download from GitHub and start over.

---

## ✅ Checklist

### Before Making Changes:
- [ ] Node.js installed
- [ ] Text editor installed
- [ ] Source files downloaded
- [ ] Dependencies installed (`npm install`)

### Making Changes:
- [ ] Edit `mockData.js`
- [ ] Save file
- [ ] Test locally (`npm start`)
- [ ] Changes look good

### Deploying:
- [ ] Rebuild (`npm run build`)
- [ ] Build completed successfully
- [ ] FileZilla connected to OVH
- [ ] Uploaded all build/ files
- [ ] Visited website and checked

---

**🎉 You're all set! Edit, rebuild, and deploy with confidence!**
