const urlParams = new URLSearchParams(window.location.search);

const sea = urlParams.get("sea");

// const url = `https://kea-alt-del.dk/t7/api/products?limit=20&category=§{cat}`;

const filNavn = `https://kea-alt-del.dk/t7/api/products?limit=20&season=${sea}`;

document.querySelector(".overskriftpl").textContent = sea;

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
    klon.querySelector(".pris").textContent = produkt.price;
    klon.querySelector(".tekstpl3").textContent = produkt.articletype;
    klon.querySelector(".brand").textContent = produkt.brandname;
    klon.querySelector(".procent").textContent = produkt.discount;
    klon.querySelector(".udsalgtekst1 span").textContent = Math.round(produkt.price - produkt.price * (produkt.discount / 100));
    klon.querySelector("a").href = "produkt.html?id=" + produkt.id;

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
