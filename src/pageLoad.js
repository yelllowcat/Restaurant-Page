// greeting.js
const content = document.querySelector("#content");

export const pageLoad = () => {
  const div = document.createElement("div");
  div.classList.add("container");
  div.classList.add("containerHome");

  content.appendChild(div);

  const title = document.createElement("h1");
  title.classList.add("titleHome");

  const divText = document.createElement("div");
  divText.classList.add("divText");

  title.textContent = "🍗 Welcome to FireWings House 🔥";
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Where flavor takes flight! At FireWing House, every wing is packed with bold, unforgettable taste — from classic Buffalo to fiery Mango Habanero, and favorites like Smoky BBQ and Garlic Parmesan. Whether you love bone-in, boneless, or crave a fully loaded combo, we’ve got your perfect heat level and crunch.";

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "🔥 Flavor that bites. Vibes that stick. FireWing House is waiting for you!";

  const schedule = document.createElement("div");
  schedule.classList.add("schedule");

  const titleSchedule = document.createElement("h2");
  titleSchedule.textContent = "Schedule";
  schedule.appendChild(titleSchedule);

  const scheduleText = document.createElement("p");
  scheduleText.textContent =
    "Sunday: 8am - 8pm Monday: 6am - 6pm Tuesday: 6am - 6pm Wednesday: 6am - 6pm Thursday: 6am - 10pm Friday: 6am - 10pm Saturday: 8am - 10pm";
  schedule.appendChild(scheduleText);

  const location = document.createElement("div");
  location.classList.add("location");

  const titleLocation = document.createElement("h2");
  titleLocation.textContent = "Schedule";
  location.appendChild(titleLocation);

  const locationText = document.createElement("p");
  locationText.textContent = "📍 1457 Sunset Avenue, Austin, Texas 78701";
  location.appendChild(locationText);

  div.appendChild(title);
  div.appendChild(divText);
  divText.appendChild(paragraph);
  divText.appendChild(paragraph2);
  div.appendChild(schedule);
  div.appendChild(location);
};
