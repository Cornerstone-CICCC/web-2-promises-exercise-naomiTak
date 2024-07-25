const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let dataFistName = "";
let dataLastName = "";
let dataAge = "";
let hobbies = [];


    fs.readFile("./firstname.txt", "utf-8")
        .then((first)=>{
            dataFistName = first
            return fs.readFile("./lastname.txt", "utf-8");
        })
        .then((last)=>{
            dataLastName = last
            return fs.readFile("./age.txt", "utf-8");
        })
        .then((age)=>{
            dataAge = age
            return fs.readFile("./hobbies.txt", "utf-8");
        })
        .then((hobbytext)=>{
            hobbytext = hobbytext.replace(/\[|\]|"/g, '');
            hobbies = hobbytext.split(",")
            console.log(`${dataFistName} ${dataLastName} is ${dataAge} years old and his hoobies are ${hobbies[0]} and ${hobbies[1]}`)
        })
    

/*
    .catch((error) => {
        console.log("Error", error)
    })
        */



// ASYNC/AWAIT SOLUTION BELOW THIS LINE