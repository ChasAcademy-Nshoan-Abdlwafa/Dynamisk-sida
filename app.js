let list1 = document.getElementById("list1");
let list2 = document.getElementById("list2");
appendList();
function appendList() {
  return fetch(
    "https://raw.githubusercontent.com/ChasAcademy-Nshoan-Abdlwafa/Dynamisk-sida/main/data.json"
  )
    .then((result) => result.json())
    .then((content) => {
      console.log(content);
      for (let i = 0; i < content.Chas.length; i++) {

        let listItem = document.createElement("li");

        let educationItem = content.Chas[i];
        listItem.innerHTML = educationItem.Chas;

        list1.appendChild(listItem);
      }

      for (let i = 0; i < content.Wijkmanska.length; i++) {
        let listItem = document.createElement("li");

        let educationItem = content.Wijkmanska[i];
        listItem.innerHTML = educationItem.Wijkmanska;

        list1.appendChild(listItem);
      }

      for (let i = 0; i < content.Postnord.length; i++) {
        let listItem = document.createElement("li");

        let workItem = content.Postnord[i];
        listItem.innerHTML = workItem.Postnord;

        list2.appendChild(listItem);
      }

      for (let i = 0; i < content.ÖB.length; i++) {
        let listItem = document.createElement("li");

        let workItem = content.ÖB[i];
        listItem.innerHTML = workItem.ÖB;

        list2.appendChild(listItem);
      }
    });
}