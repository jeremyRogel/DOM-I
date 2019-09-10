const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav bar
let anchors = document.querySelectorAll("nav a");
anchors.forEach(
  (item, index) => (item.textContent = siteContent["nav"][`nav-item-${index + 1}`])
);
//title
let title = document.querySelector(".cta-text h1");
title.textContent = siteContent["cta"]["h1"];

//button
let button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];

//top image
let topImage = document.querySelector("#cta-img");
topImage.src = siteContent["cta"]["img-src"];

//features
let featuresTitle = document.querySelector(".top-content .text-content h4");
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

let featuresBody = document.querySelector(".top-content .text-content p");
featuresBody.textContent = siteContent["main-content"]["features-content"];
//about
let aboutTitle = document.querySelector(".top-content .text-content:last-child h4");
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

let aboutBody = document.querySelector(".top-content .text-content:last-child p");
aboutBody.textContent = siteContent["main-content"]["about-content"];

//middle image
let middleImage = document.querySelector("#middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

//services
let servicesTitle = document.querySelector(".bottom-content .text-content h4");
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

let servicesBody = document.querySelector(".bottom-content .text-content p");
servicesBody.textContent = siteContent["main-content"]["services-content"];

//product
let productTitle = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
productTitle.textContent = siteContent["main-content"]["product-h4"];

let productBody = document.querySelector(".bottom-content .text-content:nth-child(2) p");
productBody.textContent = siteContent["main-content"]["product-content"];

//vision
let visionTitle = document.querySelector(".bottom-content .text-content:last-child h4");
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

let visionBody = document.querySelector(".bottom-content .text-content:last-child p");
visionBody.textContent = siteContent["main-content"]["vision-content"];

//contact
let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

//contact address
let contactPTags = document.querySelectorAll(".contact p");
contactPTags[0].textContent = siteContent["contact"]["address"];

contactPTags[1].textContent = siteContent["contact"]["phone"];

contactPTags[2].textContent = siteContent["contact"]["email"];


//footer
let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];