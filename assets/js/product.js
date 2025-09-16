// Update your catalogue here. Provide 1+ images per product.
const PLACEHOLDER_IMG = "assets/images/placeholder.jpg";


window.PRODUCTS = [
{
id: "saree-katan-red",
name: "Katan Silk Saree — Ruby Red",
category: "Saree",
fabric: "Katan Silk",
color: "Ruby Red",
priceRange: "$$$",
images: [
"assets/images/saree-katan-red-1.jpg",
"assets/images/saree-katan-red-2.jpg",
"assets/images/saree-katan-red-3.jpg",
],
blurb: "Handloom Banarasi weaving with antique zari pallu."
},
{
id: "lehenga-zari-gold",
name: "Zari Work Lehenga — Antique Gold",
category: "Lehenga",
fabric: "Raw Silk",
color: "Antique Gold",
priceRange: "$$$$",
images: [
"assets/images/lehenga-zari-gold-1.jpg",
"assets/images/lehenga-zari-gold-2.jpg",
"assets/images/lehenga-zari-gold-3.jpg",
],
blurb: "Regal zari motifs with cancan lining for perfect flare."
},
{
id: "sherwani-emerald",
name: "Embroidered Sherwani — Emerald",
category: "Sherwani",
fabric: "Jacquard Silk",
color: "Emerald",
priceRange: "$$$",
images: [
"assets/images/sherwani-emerald-1.jpg",
"assets/images/sherwani-emerald-2.jpg",
"assets/images/sherwani-emerald-3.jpg",
],
blurb: "Zardozi collar detailing. Ideal for weddings/receptions."
},
{
id: "kurta-cream",
name: "Kurta Set — Ivory Cream",
category: "Kurta",
fabric: "Cotton Silk",
color: "Ivory",
priceRange: "$$",
images: [
"assets/images/kurta-cream-1.jpg",
"assets/images/kurta-cream-2.jpg",
"assets/images/kurta-cream-3.jpg",
],
blurb: "Classic kurta set with subtle embroidery."
}
];

window.getSafeImages = (p) => (Array.isArray(p.images) && p.images.length ? p.images : [PLACEHOLDER_IMG]);