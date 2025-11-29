========================================
ALEXI DELFIEUX ARTIST PORTFOLIO WEBSITE
Static Website - Ready to Deploy
========================================

This package contains the complete static website ready to upload to your OVH hosting.

FILE SIZE: 579 KB
TOTAL FILES: 10 files (HTML, CSS, JavaScript, assets)

========================================
WHAT'S INCLUDED:
========================================
✓ index.html - Main website file
✓ static/css/ - Stylesheets
✓ static/js/ - JavaScript files
✓ asset-manifest.json - Asset manifest

========================================
FEATURES:
========================================
✓ Bilingual website (French/English)
✓ Gallery with 36+ artworks
✓ Artwork details with modal popups
✓ Inquiry system (redirects to contact form)
✓ Commission work section
✓ About page with artist bio
✓ Exhibition history
✓ Contact form
✓ Fully responsive (mobile & desktop)
✓ Social media integration

========================================
HOW TO DEPLOY TO OVH HOSTING:
========================================

METHOD 1: FTP Upload (Recommended)
-----------------------------------
1. Extract this ZIP file
2. Connect to your OVH hosting via FTP:
   - Host: ftp.your-domain.com
   - Username: Your FTP username
   - Password: Your FTP password
3. Navigate to your "www" or "public_html" folder
4. Upload ALL extracted files to this folder
5. Visit your domain: https://your-domain.com

METHOD 2: OVH Web FTP
-----------------------------------
1. Go to: https://www.ovh.com/manager/web/
2. Select your hosting
3. Click "FTP" > "FTP Explorer"
4. Navigate to "www" folder
5. Upload all files from the extracted ZIP

========================================
IMPORTANT NOTES:
========================================

✓ All artworks are stored with mock data
✓ Contact form shows success message but doesn't send emails
   (You'll need to integrate a form service like Formspree or EmailJS)
✓ All images load from Unsplash CDN
✓ Social media links are placeholders (update in the code if needed)

========================================
TROUBLESHOOTING:
========================================

Issue: "404 Not Found" when refreshing pages
Solution: Add .htaccess file to your www folder:

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

========================================
NEXT STEPS:
========================================

1. Upload files to your OVH hosting
2. Configure your domain (if not already done)
3. Test the website: https://your-domain.com
4. (Optional) Set up contact form integration
5. (Optional) Update social media links
6. (Optional) Replace artwork images with real photos

========================================
SUPPORT:
========================================

Need help with deployment?
- OVH Support: https://help.ovhcloud.com/
- OVH Community: https://community.ovh.com/

========================================
Version: 1.0
Date: November 2024
========================================
