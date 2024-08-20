var makeupProducts = {
  Maybelline: {
    NewYork: {
      img: "images/lipstick.jpg",
      productName: "Lipstick",
      shade: "Red",
      price: "$10",
    },
    london: {
      img: "images/foundation.jpg",
      productName: "Foundation",
      shade: "Beige",
      price: "$15",
    },
    Paris: {
      img: "images/mascara.jpg",
      productName: "Mascara",
      shade: "Black",
      price: "$12",
    },
    Tokyo: {
      img: "images/eyeshadow.jpg",
      productName: "Eyeshadow",
      shade: "Gold",
      price: "$20",
    },
    Sydney: {
      img: "images/blush.jpg",
      productName: "Blush",
      shade: "Pink",
      price: "$18",
    },
  },
  LOreal: {
    Paris: {
      img: "images/loreal-paris-lipstick.jpg",
      productName: "Lipstick",
      shade: "Nude",
      price: "$12",
    },
    NewYork: {
      img: "images/lorel-newyork-foundation.jpg",
      productName: "Foundation",
      shade: "Medium",
      price: "$18",
    },
    Tokyo: {
      img: "images/loreal-tokyo-mascara.jpg",
      productName: "Mascara",
      shade: "Brown",
      price: "$14",
    },
    Sydney: {
      img: "images/loreal-sydney-eyeshadow.jpg",
      productName: "Eyeshadow",
      shade: "Silver",
      price: "$22",
    },
    London: {
      img: "images/loreal-london-blush.jpg",
      productName: "Blush",
      shade: "Peach",
      price: "$16",
    },
  },
  Revlon: {
    NewYork: {
      img: "images/revlon-newyork-lipgloss.jpg",
      productName: "Lipgloss",
      shade: "Clear",
      price: "$8",
    },
    Paris: {
      img: "images/revlon-paris-foundation.jpg",
      productName: "Foundation",
      shade: "Dark",
      price: "$20",
    },
    Tokyo: {
      img: "images/revlon-tokyo-mascara.jpg",
      productName: "Mascara",
      shade: "Volumizing",
      price: "$17",
    },
    London: {
      img: "images/revlon-london-eyeshadow.jpg",
      productName: "Eyeshadow",
      shade: "Bronze",
      price: "$19",
    },
    Sydney: {
      img: "images/revlon-sydney-blush.jpg",
      productName: "Blush",
      shade: "Coral",
      price: "$15",
    },
  },
  MAC: {
    Toronto: {
      img: "images/MAC-toronto-lipstick.jpg",
      productName: "Lipstick",
      shade: "Matte",
      price: "$25",
    },
    Paris: {
      img: "images/MAC-paris-foundation.jpg",
      productName: "Foundation",
      shade: "Light",
      price: "$30",
    },
    NewYork: {
      img: "images/MAC-newyork-mascara.jpg",
      productName: "Mascara",
      shade: "Waterproof",
      price: "$22",
    },
    Tokyo: {
      img: "images/MAC-tokyo-eyeshadow.jpg",
      productName: "Eyeshadow",
      shade: "Plum",
      price: "$28",
    },
    Sydney: {
      img: "images/MAC-sydney-blush.jpg",
      productName: "Blush",
      shade: "Rose",
      price: "$23",
    },
  },
  NARS: {
    Tokyo: {
      img: "images/NARS-tokyo-lipstick.jpg",
      productName: "Lipstick",
      shade: "Mauve",
      price: "$24",
    },
    Paris: {
      img: "images/NARS-paris-foundation.jpg",
      productName: "Foundation",
      shade: "Medium Dark",
      price: "$27",
    },
    London: {
      img: "images/NARS-london-mascara.jpg",
      productName: "Mascara",
      shade: "Lengthening",
      price: "$19",
    },
    NewYork: {
      img: "images/NARS-eyeshadow-eyeshadow.jpg",
      productName: "Eyeshadow",
      shade: "Copper",
      price: "$26",
    },
    Sydney: {
      img: "images/NARS-syney-blush.jpeg",
      productName: "Blush",
      shade: "Berry",
      price: "$22",
    },
  },
  UrbanDecay: {
    NewYork: {
      img: "images/urbanDecay-newyork-lipstick.jpg",
      productName: "Lipstick",
      shade: "Berry",
      price: "$21",
    },
    Paris: {
      img: "images/UrbanDecay-paris-foundation.jpg",
      productName: "Foundation",
      shade: "Full Coverage",
      price: "$29",
    },
    Tokyo: {
      img: "images/UrbanDecay-tokyo-mascara.jpg",
      productName: "Mascara",
      shade: "Volumizing",
      price: "$23",
    },
    London: {
      img: "images/UrbanDecay-london-eyeshadow.jpg",
      productName: "Eyeshadow",
      shade: "Emerald",
      price: "$27",
    },
    Sydney: {
      img: "images/UrbanDecay of Sydney of blush.jpeg",
      productName: "Blush",
      shade: "Mauve",
      price: "$20",
    },
  },
  Benefit: {
    NewYork: {
      img: "images/Benefit-newyork-lipstick.jpg",
      productName: "Lipstick",
      shade: "Pink",
      price: "$18",
    },
    Paris: {
      img: "images/benefit-paris-foundation.jpeg",
      productName: "Foundation",
      shade: "Ivory",
      price: "$22",
    },
    Tokyo: {
      img: "images/benefit-tokyo-mascara.jpg",
      productName: "Mascara",
      shade: "Dark Brown",
      price: "$16",
    },
    London: {
      img: "images/benefit-london-eyeshadow.jpg",
      productName: "Eyeshadow",
      shade: "Gold",
      price: "$24",
    },
    Sydney: {
      img: "images/benefit-Sydney-blush.jpeg",
      productName: "Blush",
      shade: "Bubblegum",
      price: "$18",
    },
  },
  TooFaced: {
    NewYork: {
      img: "images/TooFaced-NewYork-lipstick-caramel.jpg",
      productName: "Lipstick",
      shade: "Caramel",
      price: "$19",
    },
    Paris: {
      img: "images/TooFaced-Paris-foundation-tan.jpg",
      productName: "Foundation",
      shade: "Tan",
      price: "$25",
    },
    Tokyo: {
      img: "images/TooFaced-Tokyo-mascara-blackest-black.jpeg",
      productName: "Mascara",
      shade: "Blackest Black",
      price: "$21",
    },
    London: {
      img: "images/TooFaced-London-eyeshadow-platinum.jpg",
      productName: "Eyeshadow",
      shade: "Platinum",
      price: "$28",
    },
    Sydney: {
      img: "images/TooFaced-Sydney-blush-papaya.jpg",
      productName: "Blush",
      shade: "Papaya",
      price: "$22",
    },
  },
  Tarte: {
    NewYork: {
      img: "images/Tarte-NewYork-lipstick-mahogany.jpg",
      productName: "Lipstick",
      shade: "Mahogany",
      price: "$22",
    },
    Paris: {
      img: "images/Tarte-Paris-foundation-deep.jpg",
      productName: "Foundation",
      shade: "Deep",
      price: "$28",
    },
    Tokyo: {
      img: "images/Tarte-Tokyo-mascara-jet-black.jpeg",
      productName: "Mascara",
      shade: "Jet Black",
      price: "$20",
    },
    London: {
      img: "images/Tarte-London-eyeshadow-rose-gold.jpg",
      productName: "Eyeshadow",
      shade: "Rose Gold",
      price: "$26",
    },
    Sydney: {
      img: "images/Tarte-Sydney-blush-terracotta.jpg",
      productName: "Blush",
      shade: "Terracotta",
      price: "$24",
    },
  },
  Smashbox: {
    NewYork: {
      img: "images/Smashbox-NewYork-lipstick-crimson.jpg",
      productName: "Lipstick",
      shade: "Crimson",
      price: "$20",
    },
    Paris: {
      img: "images/Smashbox-Paris-foundation-neutral.jpeg",
      productName: "Foundation",
      shade: "Neutral",
      price: "$24",
    },
    Tokyo: {
      img: "images/Smashbox-Tokyo-mascara-volumizer.jpg",
      productName: "Mascara",
      shade: "Volumizer",
      price: "$22",
    },
    London: {
      img: "images/Smashbox-London-eyeshadow-rose.jpg",
      productName: "Eyeshadow",
      shade: "Rose",
      price: "$25",
    },
    Sydney: {
      img: "images/Smashbox   Sydney blush.jpg",
      productName: "Blush",
      shade: "Sunset",
      price: "$21",
    },
  },
  Hourglass: {
    NewYork: {
      img: "images/Hourglass-NewYork-lipstick-rosewood.jpg",
      productName: "Lipstick",
      shade: "Rosewood",
      price: "$26",
    },
    Paris: {
      img: "images/Hourglass -Paris-foundation-powder.jpg",
      productName: "Foundation",
      shade: "Powder",
      price: "$30",
    },
    Tokyo: {
      img: "images/Hourglass  -Tokyo-mascara-bold.jpg",
      productName: "Mascara",
      shade: "Bold",
      price: "$24",
    },
    London: {
      img: "images/Hourglass-London-eyeshadow-ivory.jpg",
      productName: "Eyeshadow",
      shade: "Ivory",
      price: "$28",
    },
    Sydney: {
      img: "images/Hourglass-Sydney-blush-dusty-rose.jpeg",
      productName: "Blush",
      shade: "Dusty Rose",
      price: "$25",
    },
  },
  FentyBeauty: {
    NewYork: {
      img: "images/FentyBeauty-NewYork-lipstick-uncensored.jpg",
      productName: "Lipstick",
      shade: "Uncensored",
      price: "$28",
    },
    Paris: {
      img: "images/FentyBeauty-Paris-foundation-150.jpg",
      productName: "Foundation",
      shade: "150",
      price: "$32",
    },
    Tokyo: {
      img: "images/FentyBeauty-Tokyo-mascara-lengthening.jpg",
      productName: "Mascara",
      shade: "Lengthening",
      price: "$26",
    },
    London: {
      img: "images/FentyBeauty-London-eyeshadow-caramel.jpg",
      productName: "Eyeshadow",
      shade: "Caramel",
      price: "$30",
    },
    Sydney: {
      img: "images/FentyBeauty-Sydney-blush-ginger.jpeg",
      productName: "Blush",
      shade: "Ginger",
      price: "$27",
    },
  },
  LauraMercier: {
    NewYork: {
      img: "images/LauraMercier-NewYork-lipstick-sable.jpg",
      productName: "Lipstick",
      shade: "Sable",
      price: "$23",
    },
    Paris: {
      img: "foundation-honey.jfif",
      productName: "Foundation",
      shade: "Honey",
      price: "$25",
    },
    Tokyo: {
      img: "mascara-darkness.jfif",
      productName: "Mascara",
      shade: "Darkness",
      price: "$22",
    },
    London: {
      img: "eyeshadow-mocha.jfif",
      productName: "Eyeshadow",
      shade: "Mocha",
      price: "$26",
    },
    Sydney: {
      img: "blush-rosebud.jfif",
      productName: "Blush",
      shade: "Rosebud",
      price: "$22",
    },
  },
  NYX: {
    NewYork: {
      img: "lipstick-teddy.jfif",
      productName: "Lipstick",
      shade: "Teddy",
      price: "$10",
    },
    Paris: {
      img: "foundation-warm.jfif",
      productName: "Foundation",
      shade: "Warm",
      price: "$14",
    },
    Tokyo: {
      img: "mascara-length.jfif",
      productName: "Mascara",
      shade: "Length",
      price: "$12",
    },
    London: {
      img: "eyeshadow-plum.jfif",
      productName: "Eyeshadow",
      shade: "Plum",
      price: "$15",
    },
    Sydney: {
      img: "blush-peachy.jfif",
      productName: "Blush",
      shade: "Peachy",
      price: "$11",
    },
  },
  KatVonD: {
    NewYork: {
      img: "lipstick-vampire.jfif",
      productName: "Lipstick",
      shade: "Vampire",
      price: "$24",
    },
    Paris: {
      img: "foundation-fair.jfif",
      productName: "Foundation",
      shade: "Fair",
      price: "$27",
    },
    Tokyo: {
      img: "mascara-intense.jfif",
      productName: "Mascara",
      shade: "Intense",
      price: "$22",
    },
    London: {
      img: "eyeshadow-sapphire.jfif",
      productName: "Eyeshadow",
      shade: "Sapphire",
      price: "$28",
    },
    Sydney: {
      img: "images/blush.jpg",

      productName: "Blush",
      shade: "Rosewood",
      price: "$24",
    },
  },
};

var brand = document.querySelector(".brand");
var country = document.querySelector(".country");
var cards = document.querySelector(".cards");

brand.innerHTML += ` <option selected> Select Brand</option>`;
country.innerHTML += ` <option selected> Select Country</option>`;

for (var key in makeupProducts) {
  brand.innerHTML += ` <option value="${key}">${key}</option>`;
  for (var key1 in makeupProducts[key]) {
    var obj = makeupProducts[key][key1];
    cards.innerHTML += `<div class="card text-center g-5 col-12 col-md-6  mt-md-5 mt-sm-0" style="width: 18rem;">
      <img src="${obj.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${obj.productName}</h5>
        <p class="card-text">${obj.shade}</p>
        <a href="#" class="btn btn-primary">${obj.price}</a>
      </div>
    </div>`;
  }
}
function setCountry() {
  for (var key1 in makeupProducts[key]) {
    country.innerHTML += `<option value="${key1}">${key1}</option>`;
    console.log(key1);
  }
}
