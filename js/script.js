const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = new Object();
cat.complain = function() {
    console.log("Meow!");
}
// should not be called according to assignment?
cat.complain();


// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// Question 3

heading.style.fontSize = "2rem";


// Question 4

heading.className = "subheading";

// Question 5

const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


// Question 6

const resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

// Question 7

const listNames = function(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

listNames(cats);


// Question 8

function createCats(cats) {
    let catList = "";
    for (let i = 0; i < cats.length; i++) {
        if (!cats[i].age) {
            cats[i].age = "Age unknown";
        }
        catList += `<h5>${cats[i].name}<h5>
        <p>${cats[i].age}</p>`

    }
    const finalHtml = "<div>" + catList + "</div>";
    return finalHtml;
}

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);