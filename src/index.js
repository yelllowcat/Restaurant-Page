import "./styles.css";
import { pageLoad } from "./pageLoad.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

//pageLoad();
const content = document.querySelector("#content");

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

menuBtn.addEventListener("click", () => {
  if (content.firstChild != null) {
    content.firstChild.remove();
  }
  menu();
});
homeBtn.addEventListener("click", () => {
  if (content.firstChild != null) {
    content.firstChild.remove();
  }
  pageLoad();
});
contactBtn.addEventListener("click", () => {
  if (content.firstChild != null) {
    content.firstChild.remove();
  }
  contact();
});
pageLoad();
