var makeupProducts = {
  Maybelline: {
    Brazil: {
      img: "images/Maybelline-Brazil-Highlighter.jpg",
      productName: "Highlighter",
      shade: "Champagne",
      price: "$15",
    },
    Italy: {
      img: "images/Maybelline-Italy-Contour.jpg",
      productName: "Contour",
      shade: "Deep Bronze",
      price: "$18",
    },
    India: {
      img: "images/Maybelline-India-Primer.jpg",
      productName: "Primer",
      shade: "Matte",
      price: "$20",
    },
    Mexico: {
      img: "images/Maybelline-Mexico-Concealer.jpg",
      productName: "Concealer",
      shade: "Light Beige",
      price: "$17",
    },
    Russia: {
      img: "images/Maybelline-Russia-Setting Spray.jpg",
      productName: "Setting Spray",
      shade: "Invisible",
      price: "$19",
    },
  },
  LOreal: {
    Germany: {
      img: "images/LOreal-Germany-Brow Penci.jpg",
      productName: "Brow Pencil",
      shade: "Dark Brown",
      price: "$13",
    },
    Spain: {
      img: "images/lOreal-Spain-Bronzer.jpg",
      productName: "Bronzer",
      shade: "Sun Kissed",
      price: "$21",
    },
    Canada: {
      img: "images/LOreal-Canada-Lip Liner.jpg",
      productName: "Lip Liner",
      shade: "Mauve",
      price: "$10",
    },
    Japan: {
      img: "images/LOreal-Japan-Eyeliner.jpg",
      productName: "Eyeliner",
      shade: "Jet Black",
      price: "$14",
    },
    Australia: {
      img: "images/LOreal-Australia-Fake Lashes.jpg",
      productName: "Fake Lashes",
      shade: "Dramatic",
      price: "$25",
    },
  },
  Revlon: {
    SouthAfrica: {
      img: "images/Revlon-SouthAfrica-Lip Balm.jpg",
      productName: "Lip Balm",
      shade: "Peach",
      price: "$8",
    },
    Turkey: {
      img: "images/Revlon-Turkey-Color Corrector.jpg",
      productName: "Color Corrector",
      shade: "Green",
      price: "$16",
    },
    Egypt: {
      img: "images/Revlon-Egypt-Loose Powder.jpg",
      productName: "Loose Powder",
      shade: "Translucent",
      price: "$22",
    },
    Argentina: {
      img: "images/Revlon-Argentina-Tinted Moisturizer.jpg",
      productName: "Tinted Moisturizer",
      shade: "Natural Glow",
      price: "$18",
    },
    Thailand: {
      img: "images/Revlon-Thailand-Setting Powder.jpg",
      productName: "Setting Powder",
      shade: "Banana",
      price: "$20",
    },
  },
  MAC: {
    Sweden: {
      img: "images/MAC-Sweden-Lip Stain.jpg",
      productName: "Lip Stain",
      shade: "Ruby",
      price: "$24",
    },
    Norway: {
      img: "images/MAC-Norway-Face Primer.jpg",
      productName: "Face Primer",
      shade: "Hydrating",
      price: "$28",
    },
    Denmark: {
      img: "images/MAC-Denmark-Finishing Powder.jpg",
      productName: "Finishing Powder",
      shade: "Sheer",
      price: "$30",
    },
    Belgium: {
      img: "images/MAC-Belgium-Serum.jpg",
      productName: "Serum",
      shade: "Vitamin C",
      price: "$32",
    },
    Netherlands: {
      img: "images/MAC-Netherlands-Face Mask.jpeg",
      productName: "Face Mask",
      shade: "Charcoal",
      price: "$27",
    },
  },
  NARS: {
    UAE: {
      img: "images/NARS-UAE-Tinted Brow Gel.jpg",
      productName: "Tinted Brow Gel",
      shade: "Auburn",
      price: "$22",
    },
    SaudiArabia: {
      img: "images/NARS-SaudiArabia-Matte Lip Cream.jpg",
      productName: "Matte Lip Cream",
      shade: "Nude",
      price: "$18",
    },
    Iran: {
      img: "images/NARS-Iran-Face Oil.jpg",
      productName: "Face Oil",
      shade: "Argan",
      price: "$34",
    },
    Qatar: {
      img: "images/NARS-Qatar-Eyebrow Gel.jpg",
      productName: "Eyebrow Gel",
      shade: "Ash Brown",
      price: "$20",
    },
    Oman: {
      img: "images/NARS-Oman-Face Mist.jpg",
      productName: "Face Mist",
      shade: "Rose",
      price: "$26",
    },
  },
  UrbanDecay: {
    Pakistan: {
      img: "images/UrbanDecay-Pakistan-Eye Cream.jpg",
      productName: "Eye Cream",
      shade: "Cooling",
      price: "$35",
    },
    Malaysia: {
      img: "images/UrbanDecay-Malaysia-Lash Serum.jpg",
      productName: "Lash Serum",
      shade: "Strengthening",
      price: "$40",
    },
    Indonesia: {
      img: "images/UrbanDecay-Indonesia-Lip Scrub.jpg",
      productName: "Lip Scrub",
      shade: "Sugar",
      price: "$12",
    },
    Philippines: {
      img: "images/UrbanDecay-Philippines-Eye Serum.jpg",
      productName: "Eye Serum",
      shade: "Brightening",
      price: "$38",
    },
    Vietnam: {
      img: "images/UrbanDecay-Vietnam-Hand Cream.jpg",
      productName: "Hand Cream",
      shade: "Lavender",
      price: "$16",
    },
  },
  Benefit: {
    Greece: {
      img: "images/Benefit-Greece-Makeup Remover.jpg",
      productName: "Makeup Remover",
      shade: "Oil-Free",
      price: "$18",
    },
    Portugal: {
      img: "images/Benefit-Portugal-Nail Polish.jpg",
      productName: "Nail Polish",
      shade: "Coral",
      price: "$10",
    },
    Switzerland: {
      img: "images/Benefit-Switzerland-Sunscreen.jpg",
      productName: "Sunscreen",
      shade: "SPF 50",
      price: "$28",
    },
    Austria: {
      img: "images/Benefit-Austria-Face Wash.jpg",
      productName: "Face Wash",
      shade: "Tea Tree",
      price: "$14",
    },
    Finland: {
      img: "images/Benefit-Finland-Lip Plumper.jpg",
      productName: "Lip Plumper",
      shade: "Clear",
      price: "$22",
    },
  },
  TooFaced: {
    Chile: {
      img: "images/TooFaced-Chile-Body Lotion.jpg",
      productName: "Body Lotion",
      shade: "Coconut",
      price: "$18",
    },
    Peru: {
      img: "images/TooFaced-Peru-Foot Cream.jpg",
      productName: "Foot Cream",
      shade: "Peppermint",
      price: "$15",
    },
    NewZealand: {
      img: "images/TooFaced-NewZealand-Shampoo.jpg",
      productName: "Shampoo",
      shade: "Volumizing",
      price: "$20",
    },
    Morocco: {
      img: "images/TooFaced-Morocco-Conditioner.jpg",
      productName: "Conditioner",
      shade: "Nourishing",
      price: "$22",
    },
    Israel: {
      img: "images/TooFaced-Israel-Hair Serum.jpg",
      productName: "Hair Serum",
      shade: "Argan Oil",
      price: "$25",
    },
  },
  Tarte: {
    Ireland: {
      img: "images/Tarte-Ireland-Hand Sanitizer.jpg",
      productName: "Hand Sanitizer",
      shade: "Aloe Vera",
      price: "$10",
    },
    Scotland: {
      img: "images/Tarte-Scotland-Lip Primer.jpg",
      productName: "Lip Primer",
      shade: "Neutral",
      price: "$12",
    },
    Wales: {
      img: "images/Tarte-Wales-Hair Spray.jpg",
      productName: "Hair Spray",
      shade: "Strong Hold",
      price: "$18",
    },
    NorthernIreland: {
      img: "images/Tarte-NorthernIreland-Hair Mask.jpg",
      productName: "Hair Mask",
      shade: "Repairing",
      price: "$22",
    },
    Iceland: {
      img: "images/Tarte-Iceland-Heat Protectant.jpg",
      productName: "Heat Protectant",
      shade: "Thermal",
      price: "$20",
    },
  },
  Smashbox: {
    Estonia: {
      img: "images/Smashbox-Estonia-Hair Gel.jpg",
      productName: "Hair Gel",
      shade: "Ultra Strong",
      price: "$15",
    },
    Latvia: {
      img: "images/Smashbox-Latvia-Hair Mousse.jpg",
      productName: "Hair Mousse",
      shade: "Volume Boost",
      price: "$18",
    },
    Lithuania: {
      img: "images/Smashbox-Lithuania-Body Scrub.jpg",
      productName: "Body Scrub",
      shade: "Exfoliating",
      price: "$20",
    },
    Finland: {
      img: "images/Smashbox-Finland-Hair Spray.jpg",
      productName: "Hair Spray",
      shade: "Hold & Shine",
      price: "$12",
    },
    Sweden: {
      img: "images/Smashbox-Sweden-Face Serum.jpg",
      productName: "Face Serum",
      shade: "Hydrating",
      price: "$25",
    },
  },

  AnastasiaBeverlyHills: {
    Singapore: {
      img: "images/AnastasiaBeverlyHills-Singapore-Eyebrow Pencil.jpg",
      productName: "Eyebrow Pencil",
      shade: "Taupe",
      price: "$22",
    },
    Malaysia: {
      img: "images/AnastasiaBeverlyHills-Malaysia-Contour Palette.jpg",
      productName: "Contour Palette",
      shade: "Medium to Deep",
      price: "$40",
    },
    Indonesia: {
      img: "images/AnastasiaBeverlyHills -Indonesia-Brow Gel.jpg",
      productName: "Brow Gel",
      shade: "Clear",
      price: "$24",
    },
    Philippines: {
      img: "images/AnastasiaBeverlyHills-Philippines-Setting Powder.jpg",
      productName: "Setting Powder",
      shade: "Loose Translucent",
      price: "$38",
    },
    Vietnam: {
      img: "images/AnastasiaBeverlyHills-Vietnam-Highlighter Palette.jpg",
      productName: "Highlighter Palette",
      shade: "Glow Kit",
      price: "$45",
    },
  },

  FentyBeauty: {
    SouthKorea: {
      img: "images/FentyBeauty-SouthKorea-Body Lava.jpeg",
      productName: "Body Lava",
      shade: "Who Needs Clothes?!",
      price: "$59",
    },
    HongKong: {
      img: "images/FentyBeauty-HongKong-Stunna Lip Paint.jpg",
      productName: "Stunna Lip Paint",
      shade: "Uncensored",
      price: "$25",
    },
    Taiwan: {
      img: "images/FentyBeauty-Taiwan-Pro Filt'r Foundation.jpg",
      productName: "Pro Filt'r Foundation",
      shade: "Soft Matte",
      price: "$35",
    },
    Thailand: {
      img: "images/FentyBeauty -Thailand-Match Stix.jpg",
      productName: "Match Stix",
      shade: "Amber",
      price: "$32",
    },
    Singapore: {
      img: "images/FentyBeauty-Singapore-Cheeks Out.jpg",
      productName: "Cheeks Out",
      shade: "Petal Poppin",
      price: "$22",
    },
  },

  HudaBeauty: {
    UAE: {
      img: "images/HudaBeauty-UAE-Lip Contour.jpg",
      productName: "Lip Contour",
      shade: "Trendsetter",
      price: "$19",
    },
    SaudiArabia: {
      img: "images/HudaBeauty-SaudiArabia-False Lashes.jpg",
      productName: "False Lashes",
      shade: "Samantha #7",
      price: "$23",
    },
    Kuwait: {
      img: "images/HudaBeauty-Kuwait-Overachiever Concealer.jpg",
      productName: "Overachiever Concealer",
      shade: "Granola",
      price: "$30",
    },
    Qatar: {
      img: "images/HudaBeauty-Qatar-Easy Bake Loose Powder.jpg",
      productName: "Easy Bake Loose Powder",
      shade: "Banana Bread",
      price: "$34",
    },
    Bahrain: {
      img: "images/HudaBeauty-Bahrain-Rose Gold Palette.jpg",
      productName: "Rose Gold Palette",
      shade: "Remastered",
      price: "$65",
    },
  },

  CharlotteTilbury: {
    France: {
      img: "images/CharlotteTilbury-France-Magic Cream.jpg",
      productName: "Magic Cream",
      shade: "Moisturizer",
      price: "$100",
    },
    UK: {
      img: "images/CharlotteTilbury -UK-Hollywood Flawless Filter.jpg",
      productName: "Hollywood Flawless Filter",
      shade: "Light/Medium",
      price: "$44",
    },
    Ireland: {
      img: "images/CharlotteTilbury-Ireland-Airbrush Flawless Foundation.jpg",
      productName: "Airbrush Flawless Foundation",
      shade: "Cool Beige",
      price: "$44",
    },
    Australia: {
      img: "images/CharlotteTilbury-Australia-Pillow Talk Lipstick.jpg",
      productName: "Pillow Talk Lipstick",
      shade: "Original",
      price: "$34",
    },
    NewZealand: {
      img: "images/CharlotteTilbury -NewZealand-Cheek to Chic Blush.jpg",
      productName: "Cheek to Chic Blush",
      shade: "Ecstasy",
      price: "$40",
    },
  },

  PatMcGrath: {
    USA: {
      img: "images/PatMcGrath-USA-Mothership Palette.jpg",
      productName: "Mothership Palette",
      shade: "Subliminal",
      price: "$125",
    },
    Canada: {
      img: "images/PatMcGrath-Canada-LuxeTrance Lipstick.jpg",
      productName: "LuxeTrance Lipstick",
      shade: "Beautiful Stranger",
      price: "$38",
    },
    UK: {
      img: "images/PatMcGrath-UK-Skin Fetish Foundation.jpg",
      productName: "Skin Fetish Foundation",
      shade: "Light Medium",
      price: "$68",
    },
    France: {
      img: "images/PatMcGrath-Permagel Eyeliner.jpg",
      productName: "Permagel Eyeliner",
      shade: "Xtreme Black",
      price: "$28",
    },
    Italy: {
      img: "images/Metalmorphosis Eyeshadow.jpg",
      productName: "Metalmorphosis Eyeshadow",
      shade: "Gold",
      price: "$25",
    },
  },
};
var brand = document.querySelector(".brand");
var country = document.querySelector(".country");
var cards = document.querySelector(".cards");
var selectedCard = document.querySelector(".selectedCard");
brand.innerHTML = `<option selected>Select Brand</option>`;
for (var key in makeupProducts) {
  brand.innerHTML += ` <option value="${key}">${key}</option>`;

  for (var key1 in makeupProducts[key]) {
    console.log(key1);
    var obj = makeupProducts[key][key1];
    cards.innerHTML += `<div class="card text-center col-12 col-md-4 mt-5" style="width: 18rem;">
  <img src="${obj.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj.productName}</h5>
    <p class="card-text">${obj.shade}.</p>
    <a href="#" class="btn btn-primary">${obj.price}</a>
  </div>
</div>`;
  }
}

function setCountry() {
  var selectedBrand = brand.value;
  country.innerHTML = "";
  country.innerHTML = `<option selected>Select Country</option>`;
  for (var key in makeupProducts[selectedBrand]) {
    country.innerHTML += ` <option value="${key}">${key}</option>`;
  }
}

function searchCard() {
  var userVal = makeupProducts[brand.value][country.value];
  console.log(userVal);
  cards.style.display = "none";
  selectedCard.innerHTML = `<div class="card text-center d-flex justify-content-center  m-auto" style="width: 18rem;">
  <img src="${userVal.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${userVal.productName}</h5>
    <p class="card-text">${userVal.shade}.</p>
    <a href="#" class="btn btn-primary">${userVal.price}</a>
  </div>
</div>`;
}

function clearProduct() {
  cards.style.display = "flex";
  selectedCard.style.display = "none";
}

