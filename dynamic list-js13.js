let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let grocerycontainer = document.getElementById("groceryListContainer");
grocerycontainer.classList.add("bgcontainer");

let heading_box = document.createElement("div");
heading_box.classList.add("heading-box");
grocerycontainer.appendChild(heading_box);


let headingele = document.createElement("h1");
headingele.textContent = "Grocery List";
headingele.classList.add("mainheading");
heading_box.appendChild(headingele);

let list_box = document.createElement("div");
list_box.classList.add("bglistbox");
grocerycontainer.appendChild(list_box);

let ullist = document.createElement("ul");
list_box.appendChild(ullist);

for (let item of groceryList) {
    let listitem = document.createElement("li");
    listitem.textContent = item;
    listitem.classList.add("itemstyle");
    ullist.appendChild(listitem);
}