const content = document.querySelector("#content");

export const contact = () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "#2E2E2E	";
  div.classList.add("container");
  content.appendChild(div);

  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  div.appendChild(title);

  const divContact = document.createElement("div");
  divContact.style.backgroundColor = "#F9F9F9";
  div.appendChild(divContact);

  const phone = document.createElement("p");
  phone.textContent = "Phone";
  divContact.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = "Email";
  divContact.appendChild(email);
};
