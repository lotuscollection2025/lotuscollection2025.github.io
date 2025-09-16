(function(){
if (phoneLink) phoneLink.href = `tel:${storePhone.replace(/\s+/g, "")}`;
if (phoneLink) phoneLink.textContent = storePhone;


function getProduct(){
return window.PRODUCTS.find(p => p.id === productId);
}


function renderProduct(p){
if (!productEl) return;
if (!p){
productEl.innerHTML = `
<div class="product-body">
<h1 class="card-title">Item Not Found</h1>
<p class="card-subtitle">Please return to the <a class="link" href="index.html#catalogue">catalogue</a>.</p>
</div>
`;
return;
}
const imgs = (window.getSafeImages ? window.getSafeImages(p) : p.images) || [];
const first = imgs[0] || "assets/images/placeholder.jpg";
productEl.innerHTML = `
<img class="product-media" src="${first}" alt="${p.name}" />
<div class="product-body">
<span class="badge">${p.category}</span>
<h1 class="card-title">${p.name}</h1>
<p class="card-subtitle">${p.blurb || ""}</p>
<p class="card-meta">Fabric: ${p.fabric} • Colour: ${p.color} • Range: ${p.priceRange}</p>
</div>
`;
const hiddenId = document.getElementById("productId");
if (hiddenId) hiddenId.value = p.id;
}


// Form → mailto
const form = document.getElementById("enquiry-form");
if (form){
form.addEventListener("submit", (e) => {
e.preventDefault();
const p = getProduct();
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const message = document.getElementById("message").value.trim();


if (!name || !email){
alert("Please enter your name and email.");
return;
}


const subject = encodeURIComponent(`Enquiry: ${p ? p.name : "Product"} (${p ? p.id : "no-id"})`);
const bodyLines = [
`Name: ${name}`,
`Email: ${email}`,
phone ? `Phone: ${phone}` : null,
"",
`Product: ${p ? p.name : "(unknown)"}${p ? ` (${p.id})` : ""}`,
`Link: ${location.origin}${location.pathname}?product=${encodeURIComponent(p ? p.id : "")}`,
"",
"Message:",
message || "(none)",
].filter(Boolean);


const body = encodeURIComponent(bodyLines.join("\n"));
const mailto = `mailto:${storeEmail}?subject=${subject}&body=${body}`;
window.location.href = mailto;
});
}


renderProduct(getProduct());
})();