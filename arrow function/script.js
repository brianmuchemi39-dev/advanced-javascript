/*const subtraction = (a, b) => a - b

console.log (subtraction(5, 4));*/

function subtraction(a , b){
    return a - b;
}
console.log((subtraction(10, 7)))

const subtracton = (a, b )=> a - b

console.log((subtracton(10, 7)));

const multiply = (x, Y) => {
    return x*Y
}

console.log(multiply(5,6));

//Template Literals

let nae = "brian";
let coure = "javascript";
 
console.log("my nama is "  + nae + " and i am learning"  + coure);

const score = 87
console.log(`your next score target is ${score + 5}`);

const price = 500
const quality = 3
//totalprice = price*quality;

//console.log("the toatal price is " + totalprice)
console.log(`the total price is ${price*quality}`);

let y = "Brian";
let c = "javascript";
let d = "6 months"

console.log(`
    student : ${y} 
    course : ${c} 
    duration : ${d}`);

    // Destructuring

    const student ={
        name:"brian",
        age: 24,
        course: "javascript"
    };

    //console.log(student.name)

   // const { nme, age, course} = student;

    //onsole.log(nme);

    const {name, age, course}= student;
    console.log(name);
    console.log(age);
    console.log(course);

    const worker = {
        department : "mechanical",
        specilization : "Plant",
        experience : 24
    }

console.log(worker.experience);

const {department, specilization, experience} = worker
console.log(specilization);
console.log(experience);
console.log(department);

const employee = {
    ame: "Brian",
    ae : 24,
    section: Engineering
}

const { ame, ae, role= "intern"} = employee

console.log(ame);
console.log(ae);
console.log(role);