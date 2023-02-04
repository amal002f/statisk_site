const filNavn = "https://kea-alt-del.dk/t7/api/products";

const id = 1533;

const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData(navn) {
  fetch(navn)
    .then((respons) => respons.json())
    .then(visData);
}

const skabelon = document.querySelector("#minSkabelon").content;
const beholder = document.querySelector("#beholder");

function visData(json) {
  console.log(json);
  json.forEach((produktliste) => {
    const klon = skabelon.cloneNode(true);
    klon.querySelector(".overskriftpl3").textContent = produktliste.productdisplayname;
    klon.querySelector(".pris3").textContent = produktliste.price;
    klon.querySelector(".tekstpl3").textContent = produktliste.articletype;
    if (json.soldout) {
      klon.querySelector("article").classList.add("produktUdsolgt");
    }
    // klon.querySelector(".produktimg3").src = imagePath;
    beholder.appendChild(klon);
  });
}

hentData(filNavn);
