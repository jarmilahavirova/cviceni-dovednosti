console.log("funguju!");

const urovenHTML = Number(
  prompt("Vyjádřete číslem na stupnici od 0 do 100 svou úroveň znalosti HTML:")
);
const urovenCSS = Number(
  prompt("Vyjádřete číslem na stupnici od 0 do 100 svou úroveň znalosti CSS:")
);
const urovenJS = Number(
  prompt(
    "Vyjádřete číslem na stupnici od 0 do 100 svou úroveň znalosti JavaScriptu:"
  )
);

const updateSkill = (id, skill) => {
  const progressBar = document
    .getElementById("skill" + id)
    .querySelector(".skill__progress");
  progressBar.style.width = skill + "%";
  const skillValue = document
    .getElementById("skill" + id)
    .querySelector(".skill__value");
  skillValue.textContent = `${skill} / 100`;
};

updateSkill(1, urovenHTML);
updateSkill(2, urovenCSS);
updateSkill(3, urovenJS);
