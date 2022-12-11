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
      for (let i = 0; i < content.Education.length; i++) {
        let educationItem = content.Education[i];

        let title = document.createElement("h4");
        let listItem = document.createElement("li");
        title.innerHTML = Object.keys(educationItem);
        listItem.innerHTML = Object.values(educationItem);

        list1.appendChild(title);
        list1.appendChild(listItem);
      }

      for (let i = 0; i < content.Work.length; i++) {
        let workItem = content.Work[i];

        let title = document.createElement("h4");
        let listItem = document.createElement("li");
        title.innerHTML = Object.keys(workItem);
        listItem.innerHTML = Object.values(workItem);

        list2.appendChild(title);
        list2.appendChild(listItem);
      }
    });
}