const logoContainer = document.querySelector("#logo-container");
const searchInput = document.querySelector("#search");

function filter(query, logos) {
  if (query === "") {
    logoContainer.innerHTML = logos
      .map(logo => logoComponent(logo))
      .join("");
  }

  const searchText = query.toLowerCase();

  logoContainer.innerHTML = logos
    .filter(logo => logo.name.toLowerCase().includes(searchText))
    .map(logo => logoComponent(logo))
    .join("");
}

function logoComponent(logo) {
  return `
    <figure class="${logo.style}">
      <img src="${logo.img}">
      <figcaption>
        <label class="top">${logo.name}</label>
        <label class="right"><img src="./assets/contributors/${logo.contributor}.jpeg" alt="${logo.contributor}">${logo.contributor}</label>
        <label class="left">${logo.date}</label>
      </figcaption>
    </figure>
  `;
}

async function getLogos() {
  const response = await fetch("./logos.json");
  const logos = await response.json()

  filter("", logos);

  searchInput.addEventListener("input", () => {
    filter(searchInput.value, logos)
  });
}

getLogos();
