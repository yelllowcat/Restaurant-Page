const content = document.querySelector("#content");

export const contact = () => {
  const div = document.createElement("div");
  div.classList.add("container");
  div.classList.add("containerContact");

  content.appendChild(div);

  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  div.appendChild(title);

  const divContact = document.createElement("div");
  div.appendChild(divContact);
  divContact.classList.add("divContact");

  const phone = document.createElement("p");
  phone.textContent = "Phone: ";
  div.classList.add("phone");
  divContact.appendChild(phone);

  const number = document.createElement("span");
  number.textContent = "+52 612-111-222-3.";
  phone.appendChild(number);

  const email = document.createElement("p");
  email.textContent = "Email: ";
  email.classList.add("email");

  divContact.appendChild(email);

  const exampleEmail = document.createElement("span");
  exampleEmail.textContent = "example@gmail.com.";
  email.appendChild(exampleEmail);
};
