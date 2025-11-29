# ✅ STANDALONE VERSION - TRULY EDITABLE!

## 🎉 THIS VERSION WORKS!

This is a **pure HTML/CSS/JavaScript** version with **NO React, NO build process**.

---

## ✏️ How to Edit (3 Simple Steps)

### 1. Open `data.json` in any text editor

### 2. Edit the content:

**Change Contact Info:**
```json
"contact": {
  "phone": "+33 6 12 34 56 78",  ← Change this
  "email": "your.email@example.com",
  ...
}
```

**Add a New Artwork:**
```json
{
  "id": 37,
  "title": "Your Artwork",
  "year": 2024,
  "technique": "Acrylic on canvas",
  "techniqueFr": "Acrylique sur toile",
  "format": "100x80 cm",
  "price": 1200,
  "available": true,
  "series": "saint-martin",
  "image": "https://your-image-url.com/photo.jpg",
  "description_en": "English description...",
  "description_fr": "Description française..."
}
```

**Change Price:**
```json
"price": 1500  ← Just change the number
```

**Mark as Sold:**
```json
"available": false  ← Change true to false
```

### 3. Upload to your server

**That's it!** Refresh browser - see changes immediately!

---

## 📁 Files Included

- `index.html` - Main website (don't edit)
- `app.js` - JavaScript code (don't edit)  
- **`data.json`** - ✏️ **EDIT THIS FILE!**
- `README-STANDALONE.md` - This file

---

## 🌟 Features

✅ All 36 artworks included
✅ Bilingual (FR/EN) with toggle button
✅ Gallery with artwork cards
✅ Modal popups with full details
✅ Contact form
✅ Responsive design
✅ Smooth animations
✅ Social media links

---

## 📤 Upload to OVH

### Method 1: FTP
1. Connect via FileZilla
2. Upload ALL files to `www/` folder
3. Done!

### Method 2: OVH Web FTP
1. Login to OVH Control Panel
2. Go to FTP Explorer
3. Upload ALL files
4. Visit your domain

---

## 🎨 Customization Guide

### Add Your Own Images

**Option 1: Upload to server**
1. Create `/images/` folder on your server
2. Upload artwork photos
3. In data.json use: `"image": "./images/photo.jpg"`

**Option 2: Use image hosting**
1. Upload to Imgur, Cloudinary, etc.
2. Get direct image URL
3. Use: `"image": "https://..."`

### Edit Artist Bio
```json
"artist": {
  "bio_en": "Your English bio...",
  "bio_fr": "Votre bio en français...",
  ...
}
```

### Add Exhibition
```json
{
  "year": 2024,
  "title": "Exhibition Name",
  "location": "City, Country",
  "description_en": "English description",
  "description_fr": "Description française"
}
```

---

## ⚠️ JSON Syntax Rules

✅ **Correct:**
```json
{
  "title": "Artwork",
  "price": 1200
}
```

❌ **Wrong:**
```json
{
  "title": Artwork,    ← Missing quotes
  "price": 1200,       ← Extra comma
}
```

**Rules:**
1. Text needs quotes: `"title": "Text"`
2. Numbers no quotes: `"price": 1200`
3. Use commas between items, not after last one
4. Validate JSON at jsonlint.com if errors

---

## 🔧 Troubleshooting

### Website is blank
→ Check data.json for syntax errors
→ Validate at jsonlint.com
→ Check browser console for errors

### Changes don't appear
→ Clear browser cache (Ctrl+F5)
→ Make sure you uploaded the file
→ Check file was saved before upload

### Images don't load
→ Check URLs are correct
→ Test URL in browser directly
→ Use https:// not http://
→ Check image is publicly accessible

---

## 💡 Pro Tips

1. **Always backup data.json before editing**
2. **Use VS Code or Notepad++** (not Microsoft Word!)
3. **Test at jsonlint.com** before uploading
4. **Edit one thing at a time** to avoid errors
5. **Keep original file** as reference

---

## ✅ Testing Locally

Before uploading:
1. Save data.json
2. Open index.html in browser
3. Check changes work
4. Then upload to server

---

## 🎯 What Makes This Different?

### ❌ Static V2/V3 (React):
- Data compiled into JavaScript
- Can't edit without rebuilding
- Needs Node.js and yarn

### ✅ This Standalone Version:
- Pure HTML/CSS/JS
- Edit data.json and see changes
- No build process
- Works immediately

---

## 📊 File Sizes

- index.html: ~4 KB
- app.js: ~7 KB  
- data.json: ~60 KB (with all 36 artworks)
- Total: ~71 KB (excluding images)

**Super lightweight!**

---

## 🆘 Need Help?

**Common Edits:**
- Contact: Lines 13-20 in data.json
- Add artwork: Add to "artworks" array
- Change price: Find artwork, edit "price"
- Mark sold: Change "available" to false

**Validation:**
- Use jsonlint.com to check syntax
- Browser console shows errors (F12)

---

## 📝 Quick Reference

```json
{
  "artist": {
    "bio_en": "English bio",
    "bio_fr": "Bio français"
  },
  "contact": {
    "email": "your@email.com",
    "phone": "+33..."
  },
  "artworks": [
    {
      "id": 1,
      "title": "Title",
      "price": 1200,
      "available": true
    }
  ]
}
```

---

**🎉 You're all set! Edit data.json and upload!**
