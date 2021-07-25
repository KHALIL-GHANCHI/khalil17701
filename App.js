//console.log('Hello World!');
///////
//Q. No 1
/////////

var itemsArray = [
{name:'juice',price:'50', quantity:'3'},
{name:'cookie',price:'30', quantity:'9'},
{name:'shirt',price:'880', quantity:'1'},
{name:'pen',price:'100', quantity:'2'}];

var a= itemsArray[0].price * itemsArray[0].quantity

var b= itemsArray[1].price * itemsArray[1].quantity

var c= itemsArray[2].price * itemsArray[2].quantity

var d= itemsArray[3].price * itemsArray[3].quantity

var sum = a + b + c + d; 
console.log(sum)

//Q No 2

var StudentInfo = {
firstName: "khalil",
   lastName: "ahmed",
  email: "khalil@gmail.com",
 password: "ainkaay",
   age: 30,
 gender: "male",
 city: "Karachi",
  country: "Pakistan",
 };

let fName = StudentInfo.hasOwnProperty("firstName");
 console.log(fName);
 let lName = StudentInfo.hasOwnProperty("lastName");
 console.log(lName);
 let age = StudentInfo.hasOwnProperty("age");
console.log(age);
 let country = StudentInfo.hasOwnProperty("country");
 console.log(country);


/////////
//Q No 3
///////////



function Data (name, age){
  this.name= name; 
  this.age= age; 
}

const person1 =  new Data('khalil','35')

const person2 =  new Data('Ahmed','32')


console.log(person1);
console.log(person2);

//////////
////Q No 4
////////////

function CheckVerification(name, gender, address, education, profession) {
this.name = name;
this.gender = gender;
  this.address = address;
this.education = education;
 this.profession = profession;
 }

const Peoples = new CheckVerification(
 "ahmed",
 "Male",
 "nazimabad",
 "graduation",
  "we developer"
);
console.log(Peoples);

//save vales of education
function educationData() {
  var select = document.getElementById("education");
  if (localStorage === "") {
    select[localStorage.getItem("save")].selected = true;
  } else if (select.value === "matric") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "inter") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "graduation") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "master") {
    localStorage.setItem("save", select.value);
  }
}

//profession


function professionPeoples() {
  var profession = document.getElementById("profession");
  if (localStorage === "") {
    profession[localStorage.getItem("save")];
  } else if (profession.value === "Web developer") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "React Native") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "Flutter Developer") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "ios developer") {
    localStorage.setItem("profession", profession.value);
  }
}



var radio = document.getElementsByName("gender");
for (var i = 0; i < radio.length; i++) {
  if (radio[i].checked) {
    localStorage.getItem("gender");
  }
}