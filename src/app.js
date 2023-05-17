/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let articles = ["my", "the", "some", "our"];
  let adjectives = ["best", "only", "amazing", "awesome"];
  let noun = ["portefolio", "web", "world", "thing"];
  let tld = [".com", ".fr", ".net", ".org"];

  let randomDomainNames = [];

  for (let art of articles) {
    for (let adj of adjectives) {
      for (let n of noun) {
        for (let t of tld) {
          randomDomainNames.push(`${art}${adj}${n}${t}`);
        }
      }
    }
  }
  function generateRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  document.querySelector("#generate").onclick = () => {
    let randomDomain =
      randomDomainNames[Math.floor(Math.random() * randomDomainNames.length)];
    let randomColor = generateRandomColor();

    let domainElement = document.querySelector("#domain");
    domainElement.innerHTML = `<h1>${randomDomain}</h1>`;
    domainElement.style.color = randomColor;
  };
};
