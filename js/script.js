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