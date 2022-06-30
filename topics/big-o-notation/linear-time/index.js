const groceryCart = ["milk","eggs", "cheese"];

function findItem(list, item){
    for(let index = 0; index < list.length; index++){
        let currentItem = list[index];
        if(currentItem === item){
            console.log(`we found the item: ${item}`)
        }
    }
}

// ES5
function findItem(list, item){
    list.forEach(function(item){
        console.log(item)
    })
}

// ES6
const findItem = (list, item) => list.forEach(item => console.log(item));

findItem(groceryCart, "eggs");