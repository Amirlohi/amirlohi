async function getFoods(){
    const foods = await fetch("foods.json");
    const data = await foods.json();
}
const listfood=[];
console.log("hi")
const foodDiv = document.getElementById("list");
data.map(data=>{
    listfood = data;
})
getFoods();


const shopping = document.getElementById('shop');
const close = document.getElementById('close');
