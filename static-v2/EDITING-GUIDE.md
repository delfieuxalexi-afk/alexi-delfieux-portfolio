# 📝 Easy Editing Guide - Alexi Delfieux Portfolio

This static website can be easily edited without any coding knowledge or rebuilding!

---

## 🎯 Quick Start

**All your content is in ONE file:** `website-data.js`

1. Open `website-data.js` in any text editor
2. Modify the data (artworks, contact info, text)
3. Save the file
4. Upload to your server

**That's it!** Your changes will appear immediately.

---

## 📧 How to Change Contact Information

Open `website-data.js` and find the `CONTACT_INFO` section:

```javascript
const CONTACT_INFO = {
  phone: '+33 6 12 34 56 78',           // ← Change this
  email: 'alexi.delfieux@example.com',  // ← Change this
  location: 'Paris, France',            // ← Change this
  instagram: 'https://instagram.com/yourhandle',  // ← Change this
  facebook: 'https://facebook.com/yourpage',      // ← Change this
  twitter: 'https://twitter.com/yourhandle'       // ← Change this
};
```

---

## 🎨 How to Add/Edit Artworks

### To Add a New Artwork:

1. Open `website-data.js`
2. Find the `ARTWORKS` array
3. Copy an existing artwork block
4. Paste it at the end (before the closing `]`)
5. Modify the values

**Example:**

```javascript
{
  id: 4,  // ← Increment the number
  title: "Your Artwork Title",
  year: 2024,
  technique: "Acrylic on canvas",
  techniqueFr: "Acrylique sur toile",
  format: "100x80 cm",
  price: 800,
  available: true,  // true = available, false = sold
  series: "saint-martin",  // Choose: saint-martin, rise-splash, bloc-structures, early-mozer, origins-totems
  image: "YOUR_IMAGE_URL_HERE",
  description_en: "Your description in English...",
  description_fr: "Votre description en français..."
}
```

### To Mark Artwork as Sold:

Find your artwork and change:
```javascript
available: false,  // ← Changes badge from "Available" to "Sold"
```

### To Change Price:

```javascript
price: 1500,  // ← New price in euros
```

### To Remove an Artwork:

Simply delete the entire artwork block (including the `{` and `}`).

---

## 🖼️ How to Add Your Own Artwork Images

### Option 1: Use Image URLs (Easiest)

1. Upload your image to:
   - Your OVH hosting (e.g., `https://yourdomain.com/images/artwork1.jpg`)
   - Image hosting service (Imgur, Cloudinary, etc.)
2. Copy the image URL
3. Paste it in the artwork:

```javascript
image: "https://yourdomain.com/images/my-artwork.jpg",
```

### Option 2: Upload to Your Server

1. Create an `images` folder on your server
2. Upload artwork photos (JPG, PNG, WebP)
3. Reference them:

```javascript
image: "./images/my-artwork.jpg",
```

---

## ✍️ How to Edit Artist Bio & Process

Find the `ARTIST_INFO` section and modify the text:

```javascript
const ARTIST_INFO = {
  name: 'YOUR NAME',
  
  bio_en: "Your English biography...",
  bio_fr: "Votre biographie en français...",
  
  process_en: "Your process description in English...",
  process_fr: "Votre description du processus en français..."
};
```

---

## 🏆 How to Add Exhibitions

Find the `EXHIBITIONS` array and add:

```javascript
{
  year: 2024,
  title: 'Your Exhibition Name',
  location: 'City, Country',
  description_en: 'Description in English',
  description_fr: 'Description en français'
}
```

---

## 🌐 How to Change Website Language

The website automatically detects the user's preferred language, but you can modify all translations in `website-data.js`.

Each text field has two versions:
- `_en` = English
- `_fr` = French

---

## ⚠️ Important Rules

### 1. **Keep the Syntax Correct**

✅ **Correct:**
```javascript
price: 1200,
```

❌ **Wrong:**
```javascript
price: 1200  // Missing comma
```

### 2. **Use Quotes for Text**

✅ **Correct:**
```javascript
title: "My Artwork",
```

❌ **Wrong:**
```javascript
title: My Artwork,  // Missing quotes
```

### 3. **Commas Between Items**

Each artwork needs a comma after the closing `}`, except the last one:

```javascript
const ARTWORKS = [
  {
    id: 1,
    title: "Artwork 1"
  },  // ← Comma here
  {
    id: 2,
    title: "Artwork 2"
  }   // ← No comma on the last one
];
```

---

## 🔧 Troubleshooting

### Problem: Website is blank after editing

**Solution:** You probably have a syntax error. Common issues:
- Missing comma
- Missing quotes around text
- Missing bracket `}` or `]`

**Fix:** Copy the original `website-data.js` and start again, making changes carefully.

### Problem: Changes don't appear

**Solutions:**
1. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
2. Make sure you uploaded the modified file to the server
3. Check that you saved the file after editing

### Problem: Images don't load

**Solutions:**
1. Check that the image URL is correct
2. Make sure the image is publicly accessible
3. Use `https://` URLs, not `http://`

---

## 📤 Uploading Changes to OVH

### Via FTP (FileZilla):

1. Connect to your OVH hosting
2. Navigate to your `www` or `public_html` folder
3. Upload the modified `website-data.js` file
4. Refresh your website

### Via OVH Web FTP:

1. Go to OVH Control Panel
2. Click "FTP" → "FTP Explorer"
3. Navigate to your website folder
4. Upload the modified `website-data.js` file

---

## 💡 Pro Tips

1. **Always make a backup** of `website-data.js` before editing
2. **Test locally** first if possible (open `index.html` in a browser)
3. **Use a good text editor** like Notepad++, Sublime Text, or VSCode
4. **Don't use Microsoft Word** - it will break the file!
5. **Keep the original file** as a template for adding new artworks

---

## 📝 Quick Reference

| What to Edit | Where to Find It | What to Change |
|-------------|-----------------|----------------|
| Contact Info | `CONTACT_INFO` | phone, email, social links |
| Artworks | `ARTWORKS` array | Add/remove/edit artwork objects |
| Artist Bio | `ARTIST_INFO` | bio_en, bio_fr, process_en, process_fr |
| Exhibitions | `EXHIBITIONS` array | Add exhibition objects |
| Prices | Inside each artwork | `price: 1200` |
| Availability | Inside each artwork | `available: true` or `false` |

---

## 🆘 Need Help?

If you're stuck:
1. Check the syntax carefully
2. Compare your changes to the original examples
3. Make sure all brackets, quotes, and commas are correct
4. Ask a developer friend to review the file

---

## ✅ Checklist Before Uploading

- [ ] Made a backup of the original file
- [ ] Edited the data in `website-data.js`
- [ ] Checked for syntax errors (commas, quotes, brackets)
- [ ] Saved the file
- [ ] Uploaded to server
- [ ] Cleared browser cache
- [ ] Tested the website

---

**Happy editing! Your website is now fully customizable without any coding! 🎉**
