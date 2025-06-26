// greeting.js
const content = document.querySelector("#content");

export const pageLoad = () => {
  const div = document.createElement("div");
  div.classList.add("container");
  content.appendChild(div);
  const image = document.createElement("img");
  image.classList.add("bg");
  const title = document.createElement("h1");
  title.textContent = "🍗 Welcome to FireWings House 🔥";
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Bold Wings. Cold Drinks. Good Vibes. Crave the heat? Get your fix with our legendary wings, crispy sides, and signature sauces.";

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = "🔥 Dine-in • Takeout • Game Night Ready";
  div.appendChild(title);
  div.appendChild(paragraph);
  div.appendChild(paragraph2);
  div.appendChild(image);
};
