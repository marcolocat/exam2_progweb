const main = document.querySelector("main");
const url = "https://randomuser.me/api/?results=20";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const users = data.results;

    users.forEach((user) => {
      const titre = user.name.title;
      const prenom = user.name.first;
      const nom = user.name.last;
      const ville = user.location.city;
      const pays = user.location.country;
      const age = user.dob.age;
      const email = user.email;
      const photo = user.picture.medium;

      const profil = document.createElement("div");
      profil.classList.add("card");

      profil.innerHTML = `
        <div class="profil">
          <img src="${photo}" alt="${prenom} ${nom}" />
        </div>
        <div class="infosPerso">
          <h2 class="profilNom">${titre} ${prenom} ${nom}</h2>
          <p class="profilAge">${age} years old</p>
          <p class="profilLieu">
          ${ville}, ${pays}
          </p>
        
        </div>
      `;

      main.appendChild(profil);
    });

const TriParNom = document.getElementById("sort--name");
const TriParAge = document.getElementById("sort--age");

TriParNom.addEventListener("click", () => {
TriParNom.classList.add("selected");
TriParAge.classList.remove("selected");

const UsersTrie = [...users].sort((a, b) => {
if (a.name.last < b.name.last) return -1;
if (a.name.last > b.name.last) return 1;
return 0;
});

main.innerHTML = "";

UsersTrie.forEach((user) => {
const titre = user.name.title;
const prenom = user.name.first;
const nom = user.name.last;
const ville = user.location.city;
const pays = user.location.country;
const age = user.dob.age;
const email = user.email;
const photo = user.picture.medium;

const profil = document.createElement("div");
profil.classList.add("card");

profil.innerHTML = `
  <div class="avatarProfil">
    <img src="${photo}" alt="${prenom} ${nom}" />
  </div>
  <div class="profilInfos">
    <h2 class="profilNom">${titre} ${prenom} ${nom}</h2>
    <p class="profilAge">${age} years old</p>
    <p class="profilLieu">
    ${ville}, ${pays}
    </p>
  
  </div>
`;

main.appendChild(profil);
});
});

TriParAge.addEventListener("click", () => {
TriParAge.classList.add("selected");
TriParNom.classList.remove("selected");

const sortedUsers = [...users].sort((a, b) => a.dob.age - b.dob.age);

main.innerHTML = "";
  })})
