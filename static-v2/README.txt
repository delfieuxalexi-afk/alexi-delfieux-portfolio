========================================
ALEXI DELFIEUX PORTFOLIO - EDITABLE STATIC VERSION
========================================

This is a special version where you can easily edit all content without coding!

========================================
QUICK START - 3 STEPS
========================================

1. Edit your content in: website-data.js
2. Upload all files to your OVH hosting
3. Visit your domain - Done!

========================================
WHAT CAN YOU EDIT?
========================================

✓ Artworks (add, remove, modify)
✓ Prices and availability
✓ Contact information
✓ Artist bio and process
✓ Exhibitions
✓ All text in French and English
✓ Images (just change the URLs)

========================================
HOW TO EDIT
========================================

1. Open "website-data.js" in any text editor
   (Notepad++, Sublime Text, VSCode, etc.)

2. Find the section you want to edit:
   - CONTACT_INFO = your contact details
   - ARTIST_INFO = bio and process text
   - ARTWORKS = all your artworks
   - EXHIBITIONS = exhibition history

3. Modify the values

4. Save the file

5. Upload to your OVH hosting

========================================
EXAMPLE: Change Phone Number
========================================

Open website-data.js and find:

const CONTACT_INFO = {
  phone: '+33 6 12 34 56 78',  ← Change this line
  email: 'alexi.delfieux@example.com',
  ...
};

========================================
EXAMPLE: Add a New Artwork
========================================

Open website-data.js, find ARTWORKS, and add:

{
  id: 10,  ← Use next number
  title: "My New Artwork",
  year: 2024,
  technique: "Acrylic on canvas",
  techniqueFr: "Acrylique sur toile",
  format: "100x80 cm",
  price: 800,
  available: true,
  series: "saint-martin",
  image: "YOUR_IMAGE_URL_HERE",
  description_en: "Description in English...",
  description_fr: "Description en français..."
},

========================================
EXAMPLE: Mark Artwork as Sold
========================================

Find your artwork and change:
available: true,  ← Change to false

========================================
FILES INCLUDED
========================================

✓ index.html - Main website file
✓ website-data.js - YOUR EDITABLE CONTENT (EDIT THIS!)
✓ EDITING-GUIDE.md - Detailed editing instructions
✓ static/ - CSS and JavaScript files (DON'T EDIT)

========================================
UPLOAD TO OVH
========================================

Method 1: FTP (FileZilla)
1. Connect to your OVH hosting via FTP
2. Go to your "www" or "public_html" folder
3. Upload ALL files
4. Visit your domain

Method 2: OVH Web FTP
1. Go to OVH Control Panel
2. Click "FTP" > "FTP Explorer"
3. Navigate to your website folder
4. Upload ALL files

========================================
IMPORTANT NOTES
========================================

✓ Always backup website-data.js before editing
✓ Keep JavaScript syntax correct (commas, quotes)
✓ Don't use Microsoft Word to edit (use text editor)
✓ Clear browser cache after uploading changes (Ctrl+F5)
✓ Test changes before uploading to production

========================================
ADDING YOUR OWN ARTWORK IMAGES
========================================

Option 1: Upload to your server
1. Create "images" folder on your server
2. Upload artwork photos
3. Reference: image: "./images/my-artwork.jpg"

Option 2: Use image hosting
1. Upload to Imgur, Cloudinary, etc.
2. Get image URL
3. Use: image: "https://your-url.com/image.jpg"

========================================
TROUBLESHOOTING
========================================

Problem: Website is blank
Solution: Check website-data.js for syntax errors
         (missing commas, quotes, or brackets)

Problem: Changes don't appear
Solution: 1. Clear browser cache (Ctrl+F5)
         2. Check you uploaded the file
         3. Make sure you saved after editing

Problem: Images don't load
Solution: 1. Check image URL is correct
         2. Make sure images are publicly accessible
         3. Use https:// URLs

========================================
DETAILED HELP
========================================

Read EDITING-GUIDE.md for:
✓ Step-by-step instructions
✓ Common mistakes to avoid
✓ Examples for every type of edit
✓ Troubleshooting tips

========================================
SUPPORT
========================================

OVH Help: https://help.ovhcloud.com/
FileZilla: https://filezilla-project.org/

========================================
FILE SIZE
========================================

Total size: ~600 KB
Upload time: Less than 1 minute on most connections

========================================

Ready to go! Edit website-data.js and upload!

========================================
