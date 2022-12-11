let list1 = document.getElementById("list1");
let list2 = document.getElementById("list2");
let list3 = document.getElementById("list3");
let list4 = document.getElementById("list4");
appendList();
/* let x = list[8]; */
function appendList() {
  return fetch(
    "https://raw.githubusercontent.com/ChasAcademy-Nshoan-Abdlwafa/Dynamisk-sida/main/data.json"
  )
    .then((result) => result.json()) // Skapar JSON-data, "jsonifierar"
    .then((content) => {
      // Färdigt JSON-objekt, redo att användas
      console.log(content);
      for (let i = 0; i < content.todolist1.length; i++) {
        // Skapar for-loop, som går igenom varje element i listan
        // Första delen (let i = 0;): vart det ska börja iterera, här börjar det på allra första elementet, dvs. i = 0
        // Andra delen (i < content.todolist.length;): när det ska sluta iterera, här avslutas itererationen när den har nått det sista elementet
        // Tredje delen (i++): hur många steg per iteration, här itereras det över varje enskild listelement, så i++ (i += 1)

        let listItem = document.createElement("li"); // Skapar ett li-objekt i HTML, via JavaScript

        let todoListItem = content.todolist1[i];
        listItem.innerHTML = todoListItem.ToDo; // Populera skapade li-elementet med värdena från JSON-datan

        list1.appendChild(listItem); // Lägger till li-element till ul-listan som hämtades in från HTML-dokumentet
      }

      for (let i = 0; i < content.todolist2.length; i++) {
        // Skapar for-loop, som går igenom varje element i listan
        // Första delen (let i = 0;): vart det ska börja iterera, här börjar det på allra första elementet, dvs. i = 0
        // Andra delen (i < content.todolist.length;): när det ska sluta iterera, här avslutas itererationen när den har nått det sista elementet
        // Tredje delen (i++): hur många steg per iteration, här itereras det över varje enskild listelement, så i++ (i += 1)

        let listItem = document.createElement("li"); // Skapar ett li-objekt i HTML, via JavaScript

        let todoListItem = content.todolist2[i];
        listItem.innerHTML = todoListItem.ToDo; // Populera skapade li-elementet med värdena från JSON-datan

        list2.appendChild(listItem); // Lägger till li-element till ul-listan som hämtades in från HTML-dokumentet
      }

      for (let i = 0; i < content.todolist3.length; i++) {
        // Skapar for-loop, som går igenom varje element i listan
        // Första delen (let i = 0;): vart det ska börja iterera, här börjar det på allra första elementet, dvs. i = 0
        // Andra delen (i < content.todolist.length;): när det ska sluta iterera, här avslutas itererationen när den har nått det sista elementet
        // Tredje delen (i++): hur många steg per iteration, här itereras det över varje enskild listelement, så i++ (i += 1)

        let listItem = document.createElement("li"); // Skapar ett li-objekt i HTML, via JavaScript

        let todoListItem = content.todolist3[i];
        listItem.innerHTML = todoListItem.ToDo; // Populera skapade li-elementet med värdena från JSON-datan

        list2.appendChild(listItem); // Lägger till li-element till ul-listan som hämtades in från HTML-dokumentet
      }

      for (let i = 0; i < content.todolist4.length; i++) {
        // Skapar for-loop, som går igenom varje element i listan
        // Första delen (let i = 0;): vart det ska börja iterera, här börjar det på allra första elementet, dvs. i = 0
        // Andra delen (i < content.todolist.length;): när det ska sluta iterera, här avslutas itererationen när den har nått det sista elementet
        // Tredje delen (i++): hur många steg per iteration, här itereras det över varje enskild listelement, så i++ (i += 1)

        let listItem = document.createElement("li"); // Skapar ett li-objekt i HTML, via JavaScript

        let todoListItem = content.todolist4[i];
        listItem.innerHTML = todoListItem.ToDo; // Populera skapade li-elementet med värdena från JSON-datan

        list2.appendChild(listItem); // Lägger till li-element till ul-listan som hämtades in från HTML-dokumentet
      }
    });
}
