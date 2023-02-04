const id = 1532;

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((respons) => respons.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector(".tekstp1").textContent = produkt.productdisplayname;
  document.querySelector(".tekstp2").textContent = produkt.basecolour;
  document.querySelector(".produktimg").src = imagePath;
  document.querySelector(".tekstp4").textContent = produkt.brandname;
  document.querySelector(".tekstp3").textContent = produkt.gender;
}

hentData();
