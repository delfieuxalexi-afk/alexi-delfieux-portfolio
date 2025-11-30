# 📸 How to Upload Your Artwork Images

## 📁 Where to Put Images

**Upload your artwork photos to this folder:**
```
portfolio-complete/artwork-images/
```

---

## 📤 How to Upload to GitHub

### Method 1: Via GitHub Website (Easiest)

1. **Go to your repository:**
   https://github.com/delfieuxalexi-afk/alexi-delfieux-portfolio

2. **Navigate to this folder:**
   - Click `portfolio-complete`
   - Click `artwork-images`

3. **Upload images:**
   - Click "Add file" button
   - Click "Upload files"
   - Drag & drop your images OR click "choose your files"
   - Click "Commit changes"

4. **Done!** Your images are now on GitHub

### Method 2: Via Git (Advanced)

```bash
# Clone repository
git clone https://github.com/delfieuxalexi-afk/alexi-delfieux-portfolio.git
cd alexi-delfieux-portfolio/portfolio-complete/artwork-images/

# Copy your images here
# Then commit and push
git add .
git commit -m "Add artwork images"
git push
```

---

## 📷 Image Recommendations

### File Format:
- ✅ JPEG (.jpg) - Best for photos
- ✅ PNG (.png) - For transparency
- ❌ Avoid TIFF, BMP (too large)

### Size:
- **Recommended:** 1200-1600px wide
- **Max:** 2000px wide (larger = slower website)
- **File size:** Under 500 KB each (compress if needed)

### Naming:
Use clear, descriptive names:
- ✅ `saint-martin-01.jpg`
- ✅ `mer-rouge-2021.jpg`
- ✅ `rise-splash-02.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `photo.jpg`

---

## 🔧 After Uploading Images

Once images are on GitHub, update your code to use them:

### Option 1: Link from GitHub (Simple)

In `source/src/mockData.js`, use GitHub URLs:

```javascript
{
  id: 1,
  title: "Saint Martin 01",
  image: "https://raw.githubusercontent.com/delfieuxalexi-afk/alexi-delfieux-portfolio/main/portfolio-complete/artwork-images/saint-martin-01.jpg"
}
```

**GitHub URL Pattern:**
```
https://raw.githubusercontent.com/YOUR-USERNAME/REPO-NAME/main/PATH-TO-IMAGE/FILENAME.jpg
```

**Your pattern:**
```
https://raw.githubusercontent.com/delfieuxalexi-afk/alexi-delfieux-portfolio/main/portfolio-complete/artwork-images/YOUR-IMAGE.jpg
```

### Option 2: Host on Your Server (Better Performance)

1. **Download images from GitHub**
2. **Upload to your OVH hosting:**
   - Create folder: `/images/` on your server
   - Upload all artwork images
3. **Update mockData.js:**
   ```javascript
   image: "https://yourdomainname.com/images/saint-martin-01.jpg"
   ```

---

## 📋 Image Checklist

Before uploading:
- [ ] Images compressed (under 500 KB each)
- [ ] Good file names (descriptive, no spaces)
- [ ] Correct format (JPEG or PNG)
- [ ] Right orientation
- [ ] Good resolution (1200-1600px wide)

After uploading:
- [ ] All images uploaded successfully
- [ ] Updated mockData.js with image URLs
- [ ] Rebuilt: `npm run build`
- [ ] Tested locally
- [ ] Uploaded to OVH

---

## 💡 Tips

### Compress Images:
- **Online:** TinyPNG.com or Squoosh.app
- **Windows:** Use "Paint" → Save as JPEG at 80% quality

### Batch Rename:
Windows PowerShell:
```powershell
# In your images folder
Get-ChildItem *.jpg | Rename-Item -NewName {$_.BaseName -replace ' ','-'}
```

### Test Image URLs:
Paste the GitHub URL in your browser - image should display

---

## 🆘 Troubleshooting

**Images don't show on website:**
1. Check URL is correct (copy-paste from GitHub)
2. Make sure it starts with `https://`
3. Check image file actually exists on GitHub
4. Clear browser cache (Ctrl+F5)

**GitHub upload fails:**
- Check file isn't too large (max 25 MB per file)
- Try uploading fewer images at once
- Check your internet connection

**Image looks pixelated:**
- Original image is too small
- Use higher resolution original (1200px+ wide)

---

## 📞 Need Help?

Just let me know which images you've uploaded and I'll:
1. Get the GitHub URLs
2. Update your mockData.js
3. Rebuild the website
4. Prepare it for upload

---

**Ready to upload? Just drag & drop your images to this GitHub folder!** 📸
