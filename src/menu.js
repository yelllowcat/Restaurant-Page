const content = document.querySelector("#content");

export const menu = () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "#2E2E2E	";
  div.classList.add("container");
  div.classList.add("containerMenu");
  content.appendChild(div);

  const dishes = document.createElement("section");
  div.appendChild(dishes);
  const dishesTitle = document.createElement("h1");
  dishesTitle.textContent = "Dishes";
  dishes.appendChild(dishesTitle);
  dishes.classList.add("drinksSec");

  const wings = document.createElement("p");
  wings.textContent = "Wings";
  dishes.appendChild(wings);
  const boneless = document.createElement("p");
  boneless.textContent = "Boneless";
  dishes.appendChild(boneless);
  const frenchFries = document.createElement("p");
  frenchFries.textContent = "French Fries";
  dishes.appendChild(frenchFries);

  const drinks = document.createElement("section");
  div.appendChild(drinks);
  const drinksTitle = document.createElement("h1");
  drinksTitle.textContent = "Drinks";
  drinks.appendChild(drinksTitle);
  drinks.classList.add("drinksSec");

  const coca = document.createElement("p");
  coca.textContent = "Coca Cola";
  drinks.appendChild(coca);
  const pacifico = document.createElement("p");
  pacifico.textContent = "Pacifico";
  drinks.appendChild(pacifico);
  const modelo = document.createElement("p");
  modelo.textContent = "Modelo";
  drinks.appendChild(modelo);
  const tecate = document.createElement("p");
  tecate.textContent = "Tecate";
  drinks.appendChild(tecate);

  const extras = document.createElement("section");
  div.appendChild(extras);
  const extrasTitle = document.createElement("h1");
  extrasTitle.textContent = "Extras";
  extras.appendChild(extrasTitle);
  extras.classList.add("drinksSec");

  const ranch = document.createElement("p");
  ranch.textContent = "Ranch";
  extras.appendChild(ranch);
  const xtraSauce = document.createElement("p");
  xtraSauce.textContent = "Extra Wing Sauce";
  extras.appendChild(xtraSauce);
  const blueCheese = document.createElement("p");
  blueCheese.textContent = "Blue Cheese";
  extras.appendChild(blueCheese);
  const honeyMustard = document.createElement("p");
  honeyMustard.textContent = "Honey Mustard";
  extras.appendChild(honeyMustard);
};
