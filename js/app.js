//My Name
let name = "Mahmoud";
//Number of Sates in Us
const stateUs = 14;
//Adding 5+4
let sum = 5 + 4;
//Implementaion Hello world in alert
function sayHello(){
    alert("Hello World!");
}
//calling sayHello Function
sayHello();
//Implementaion checkAge function
function checkAge (name,age){
    if(age < 21){
        alert("sorry "+name + ", you aren't old enough to view this page!");
    }

}
//Calling checkAge Function
checkAge('Charles',21);
checkAge('Abby' ,27);
checkAge('James' ,18);
checkAge('John' ,17);
//Create array conaing vegetables name
let vegetables = ['Broccoli','Celery','Cucumber','Cauliflower','Beetroot'];
//Print each value in array vegetable
for(let val of vegetables){
    console.log(val);
}
//create object
let pet={
    name:"",
    breed:""
};
//create array of objects each object have name and age properity
let details=[{name:"Mahmoud",age:22},{name:"Ahmed",age:20},{name:"Yasser",age:32},{name:"Hassan",age:20},{name:"Abdo",age:23}];
//check each object in array
details.forEach(element => {
    //call function check age
    checkAge(element.name,element.age);
});
//create function getLength to calculate number of characters in passing string value
function getLength(value){
return value.length;
}
let numCharacters=getLength('Hello World');
(numCharacters&1)?console.log('The world is an odd place!'):console.log('The world is nice and even!');
