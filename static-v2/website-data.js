/**
 * ========================================
 * ALEXI DELFIEUX PORTFOLIO - EDITABLE DATA
 * ========================================
 * 
 * This file contains all the content for your website.
 * You can easily modify artworks, text, contact information, etc.
 * 
 * HOW TO EDIT:
 * 1. Open this file in any text editor (Notepad++, VSCode, Sublime Text)
 * 2. Modify the data below
 * 3. Save the file
 * 4. Upload to your server
 * 
 * IMPORTANT: Keep the JavaScript syntax correct (commas, quotes, brackets)
 * 
 * ========================================
 */

// ==================== CONTACT INFORMATION ====================
const CONTACT_INFO = {
  // Update with your real contact details
  phone: '+33 6 12 34 56 78',
  email: 'alexi.delfieux@example.com',
  location: 'Paris, France / Sydney, Australia',
  
  // Social media links (replace with your actual profiles)
  instagram: 'https://instagram.com/alexidelfieux',
  facebook: 'https://facebook.com/alexidelfieux',
  twitter: 'https://twitter.com/alexidelfieux'
};

// ==================== ARTIST INFORMATION ====================
const ARTIST_INFO = {
  name: 'ALEXI DELFIEUX',
  
  // Artist bio in English
  bio_en: "My paintings come from two opposite directions: the dense geometry of the Paris suburbs where I grew up, and the open horizons I have been travelling through in the last few years. I first worked as a graphic designer and in digital marketing, producing images for clients and brands. At some point the briefs felt repetitive and I realised I needed to reclaim creativity for myself. Painting became that space. In Australia the red earth makes the sky feel wider, bluer, with whiter clouds. Travelling through around twenty countries has sharpened my senses: you notice details locals no longer see - the light on a wall, a colour combination, the way people eat, talk or play music. I try to keep that traveller's gaze even when I return to places I know very well. On the canvas I combine blocks, lines and taped shapes that come from suburbs and architecture with more fluid gestures, sprays and drips that recall graffiti, skies and weather. Each painting becomes a fragment of a map where rigid structures and human complexity meet, and where simple gestures like sharing or caring still connect us beneath the layers.",
  
  // Artist bio in French
  bio_fr: "Mes peintures viennent de deux directions opposées : la géométrie dense des banlieues parisiennes où j'ai grandi et les horizons ouverts que je traverse en voyageant. J'ai d'abord travaillé comme graphiste et dans le webmarketing, en produisant des images pour des clients et des marques. À un moment, les briefs ont commencé à se répéter et j'ai ressenti le besoin de me réapproprier ma créativité. La peinture est devenue cet espace. En Australie, la terre rouge fait paraître le ciel plus grand, plus bleu, les nuages plus blancs. À force de voyager - dans une vingtaine de pays - les sens se réveillent: on remarque des détails que les gens sur place ne voient plus, une lumière sur un mur, une combinaison de couleurs, une façon de manger, de parler ou de jouer de la musique. J'essaie de garder ce regard de voyageur même quand je reviens dans des lieux que je connais par cœur. Sur la toile, je combine des blocs, des lignes et des formes construites au scotch avec des gestes plus libres, des sprays et des coulures qui rappellent le graffiti, le ciel et la météo. Chaque peinture devient un fragment de carte où se rencontrent structures rigides et complexité humaine, et où des gestes simples comme partager ou prendre soin restent un terrain commun.",
  
  // Process description in English
  process_en: "I mostly paint with spray cans, Posca markers, rollers and acrylic paint. To build my shapes I use a lot of masking tape: it allows me to draw sharp lines, cut blocks and bring the canvas closer to the architecture of the suburbs I know. I like to work outdoors. The wind moves the spray, the splashes and drips are not fully predictable, and the sun helps the paint dry faster. When I lay thick layers of acrylic, sometimes combined with chrome paint, cracks appear as it dries and create an earthy, eroded surface. What interests me is the balance between control and accident: the areas built with tape and rollers, very graphic, and the areas left to gesture, wind and time. The painting becomes a ground where I build a structure but also let the material live its own life.",
  
  // Process description in French
  process_fr: "Je peins principalement avec des bombes aérosols, des marqueurs Posca, des rouleaux et de la peinture acrylique. Pour construire mes formes, j'utilise beaucoup le scotch de masquage : il me permet de tracer des lignes nettes, de découper des blocs, de rapprocher la toile de l'architecture des banlieues que je connais. Je travaille souvent en extérieur. Le vent déplace la bombe, les projections et les coulures ne sont pas complètement prévisibles, le soleil accélère le séchage. Quand je pose des couches épaisses d'acrylique, parfois combinées à des peintures chromées, des craquelures apparaissent en séchant et créent une matière presque terrestre, comme une surface érodée. Ce qui m'intéresse, c'est l'équilibre entre contrôle et accident : les zones construites au scotch et au rouleau, très graphiques, et les parties laissées au geste, au vent et au temps. La toile devient un terrain où je construis une structure et où je laisse aussi la matière vivre sa propre vie."
};

// ==================== ARTWORKS ====================
// Add, remove, or modify artworks here
const ARTWORKS = [
  {
    id: 1,
    title: "Saint Martin 01",
    year: 2021,
    technique: "Acrylic on canvas",
    techniqueFr: "Acrylique sur toile",
    format: "115x75 cm",
    price: 1200,
    available: true,  // Change to false when sold
    series: "saint-martin",
    // Replace with your actual image URL
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800",
    // Description that appears in the modal
    description_en: "Inspired by the peripheral landscapes of Paris and the Canal Saint-Martin, this piece captures the tension between urban geometry and natural horizons. The bold triangle represents the sharp architecture cutting through the flowing water and sky, while the horizontal bands evoke the long, open spaces that make you breathe deeper when you step away from the dense city center.",
    description_fr: "Inspiré par les paysages périphériques de Paris et le Canal Saint-Martin, cette pièce capture la tension entre la géométrie urbaine et les horizons naturels. Le triangle audacieux représente l'architecture pointue traversant l'eau et le ciel fluides, tandis que les bandes horizontales évoquent les espaces longs et ouverts qui vous font respirer plus profondément lorsque vous vous éloignez du centre-ville dense."
  },
  {
    id: 2,
    title: "MER Rouge",
    year: 2021,
    technique: "Acrylic on canvas",
    techniqueFr: "Acrylique sur toile",
    format: "115x75 cm",
    price: 1200,
    available: true,
    series: "saint-martin",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    description_en: "The Red Sea - not the biblical one, but the industrial red brick facades reflecting in the canal water at sunset. This large piece combines masking tape geometry with spray paint atmosphere. The sharp yellow triangle cuts through like a construction crane or church spire, while the gradient below shifts from deep red to white like light on moving water.",
    description_fr: "La Mer Rouge - pas celle biblique, mais les façades de briques rouges industrielles se reflétant dans l'eau du canal au coucher du soleil. Cette grande pièce combine la géométrie du ruban de masquage avec l'atmosphère de la peinture en spray. Le triangle jaune pointu traverse comme une grue de construction ou un clocher d'église, tandis que le dégradé en dessous passe du rouge profond au blanc comme la lumière sur l'eau en mouvement."
  },
  {
    id: 3,
    title: "RISE in Saint Martin - 02",
    year: 2021,
    technique: "Acrylic on 3D canvas",
    techniqueFr: "Acrylique sur toile 3D",
    format: "50x50 cm",
    price: 500,
    available: true,
    series: "rise-splash",
    image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800",
    description_en: "Part of the Rise series, this piece was created outdoors near the Canal Saint-Martin. The square form floats between sky and earth, spray-painted layers catching the wind and sun. The white mist below represents morning fog over water, while the warm gradient above captures the rising sun burning through Paris smog.",
    description_fr: "Faisant partie de la série Rise, cette pièce a été créée en extérieur près du Canal Saint-Martin. La forme carrée flotte entre ciel et terre, les couches peintes au spray captant le vent et le soleil. La brume blanche en dessous représente le brouillard matinal sur l'eau, tandis que le dégradé chaud au-dessus capture le soleil levant brûlant à travers le smog parisien."
  }
  
  // ADD MORE ARTWORKS HERE
  // Copy the structure above and modify the values
  // Make sure to add a comma after each artwork except the last one
];

// ==================== EXHIBITIONS ====================
const EXHIBITIONS = [
  {
    year: 2021,
    title: 'Expo Climbing District',
    location: 'Île-de-France',
    description_en: 'Solo exhibition featuring works from Saint Martin series and urban explorations.',
    description_fr: 'Exposition solo présentant des œuvres de la série Saint Martin et des explorations urbaines.'
  }
  
  // ADD MORE EXHIBITIONS HERE
];

// ==================== DO NOT EDIT BELOW THIS LINE ====================
// This section makes the data available to the website

if (typeof window !== 'undefined') {
  window.WEBSITE_DATA = {
    contact: CONTACT_INFO,
    artist: ARTIST_INFO,
    artworks: ARTWORKS,
    exhibitions: EXHIBITIONS
  };
}
