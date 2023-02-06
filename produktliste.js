const filNavn = "https://kea-alt-del.dk/t7/api/products";

function hentData(navn) {
  fetch(navn)
    .then((respons) => respons.json())
    .then(visData);
}

const skabelon = document.querySelector("#minSkabelon").content;
const beholder = document.querySelector("#beholder");

function visData(json) {
  console.log(json);
  json.forEach((produkt) => {
    const klon = skabelon.cloneNode(true);
    klon.querySelector(".overskriftpl3").textContent = produkt.productdisplayname;
    klon.querySelector(".pris3").textContent = produkt.price;
    klon.querySelector(".tekstpl3").textContent = produkt.articletype;
    if (produkt.soldout) {
      klon.querySelector("article").classList.add("soldOut");
    }
    if (produkt.discount) {
      klon.querySelector("article").classList.add("onSale");
    }
    klon.querySelector(".produktimg").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
    beholder.appendChild(klon);
  });
}

hentData(filNavn);

// async function getData() {
//   const response = await fetch("https://kea-alt-del.dk/t7/api/products");
//   const data = await response.json();
//   data.forEach(showProduct);
// }

// getData();

// function showProduct(product) {
//   console.log(product);
//   const template = document.querySelector("#smallProductTemplate").content;
//   const copy = template.cloneNode(true);
//   copy.querySelector(".overskriftpl3").textContent = product.productdisplayname;
//   if (product.soldout) {
//     copy.querySelector("article").classList.add("soldOut");
//   }
//   if (product.discount) {
//     copy.querySelector("article").classList.add("onSale");
//   }
//   document.querySelector("main").appendChild(copy);
// }

// function showProduct(product) {
//     console.log(product);
//     const template = document.querySelector("#smallProductTemplate").content;
//     const copy = template.cloneNode(true);
//     copy.querySelector("h3").textContent = product.productdisplayname;
//     if (product.soldout) {
//       copy.querySelector("article").classList.add("soldOut");
//     }
//     if (product.discount) {
//       copy.querySelector("article").classList.add("onSale");
//     }
//     document.querySelector("main").appendChild(copy);
//   }
