// Write your solution here!
const cats=["Milo", "Otis","Garfield"]
    cats.length = 0
    cats.push("Milo","Otis","Garfield");

function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;
}
cats.length = 0
    cats.push("Milo","Otis","Garfield");

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats;
}
cats.length = 0
    cats.push("Milo","Otis","Garfield");

function destructivelyRemoveLastCat(){
    cats.splice(-1);
    return cats;
}
cats.length = 0
     cats.push("Milo","Otis","Garfield");
 function destructivelyRemoveFirstCat(){
     cats.splice(0,1)
     return cats;
 }
 cats.length = 0
 cats.push("Milo","Otis","Garfield");
 console.log(cats)
function appendCat(name){
    return [...cats, name]
}
cats.length = 0
 cats.push("Milo","Otis","Garfield");
 function prependCat(name){
    return [name,...cats]
}
cats.length = 0
 cats.push("Milo","Otis","Garfield");
 function removeLastCat(name){
    return cats.slice(0, -1)
 }
 cats.length = 0
 cats.push("Milo","Otis","Garfield");
 function removeFirstCat(name){
    return cats.slice(1)
 }
 




