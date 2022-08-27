
//Array
let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv0: HTMLElement = document.getElementById('app0');
appDiv0.innerHTML = `
<h1>Array declaration</h1>
<h2>list: ${list}</h2>
<h2>otherList: ${otherList}</h2>
`;

//Tuple
let me: [string, number];

me = ['Karen', 32];
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Tuple</h1>
<h2>Me chamo ${me[0]} e tenho ${me[1]} anos.</h2>
`;

//Enum
enum Color {Red, Green, Blue};
let color1: Color = Color.Green;

enum ColorwithRef {Red=10, Green=20, Blue=30};
let color2: ColorwithRef = ColorwithRef.Blue;
const appDiv1:  HTMLElement = document.getElementById('app1');
appDiv1.innerHTML = `
<h1>Enumerated types</h1>
<h2>Cor 1: ${color1}</h2>
<h2>Cor 2: ${color2}</h2>
`;

//any é um tipo de dado
let notSure: any = 4;
notSure = "Maybe I´m a string";
notSure = false; //okay, definitely a boolean

const appDiv2: HTMLElement = document.getElementById('app2');
appDiv2.innerHTML = `
<h1>Any variable</h1>
<h2>${notSure}</h2>
`;

//void
function warnUser(): void{
  console.log("This is my warning message.");
}

let myFunction: void = warnUser();

let unusable: void = undefined;
unusable = null;

myFunction;

const appDiv3: HTMLElement = document.getElementById('app3');
appDiv3.innerHTML = `
<h1>unusable: ${unusable}</h1>
<h2>myFunction: ${myFunction}</h2>
`;
/*
//Object
declare function create(o: object | null): void;
create({prop: 0}); //OK
create(null); //OK
//create(42); //Erro
//create("string"); //Erro
//create(false); //Erro
//create(undefined); //Erro

const appDiv4: HTMLElement = document.getElementById('app4');
appDiv4.innerHTML = `
<h1>Object: ${}</h1>
`;*/

//Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;

//Functions (pertence ao Object)
function sum(n1: number, n2: number): number{
  return n1+n2;
}

function fullName(pessoa: {name: string, lastname: string}): string{
  return pessoa.name+" "+pessoa.lastname;
}

const appDiv4: HTMLElement = document.getElementById('app4');
appDiv4.innerHTML = `
<h1>Functions</h1>
<h2>Soma de 2 e 3: ${sum(2,3)}</h2>
<h2>Soma de 11 e 329: ${sum(11,329)}</h2>
<h2>Meu nome completo é: ${fullName({lastname: 'Alves', name: 'Karen Livia'})}</h2>
`;

let title: string = "Olá, mundo";
let paragraph: string = "Blablabla...";

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appP: HTMLElement = document.getElementById('app.p');
  appP.innerHTML = "Contador: "+counter;
}, 1000)

const btn = document.getElementById("app.btn");
btn?.addEventListener("click", alertMethod);
function alertMethod(this: HTMLElement, ev: Event){
  alert("Alertando com typescript!");
}

//Write Typescript code!
const appH1: HTMLElement = document.getElementById('app.h1');
appH1.innerHTML = title;

//Classes
class Greeter{
  greeting: string;
  constructor(message: string){
    this.greeting = message;
  }
  greet(){
    return 'Olá, ' + this.greeting + '!';
  }
}

let greeter = new Greeter('sou uma classe');

const appDiv5: HTMLElement = document.getElementById('app5');
appDiv5.innerHTML = `
<h1>Classes</h1>
<h2>${greeter.greet()}</h2>
`
