// //Object literal
// var john = {
//     firstName:'john',
//     lastName:'Smith',
//     Birthear:1998,
//     family:['jane','mark','bob'],
//     job:'teacher',
//     isMarrid:false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// var x='Birthear';
// console.log(john[x]);

// john.job='designer';
// john['isMarrid']=true;
// console.log(john);

// //new Object syntax
// var jane=new Object();
// jane.name='jnaem';
// jane.Birthear=1969;
// jane['lastname']="Smith"

/* ************************************* */


//*****Objects and methods*/

// var john = {
//        firstName:'john',
//        lastName:'Smith',
//        Birthear:1998,
//        family:['jane','mark','bob'],
//        job:'teacher',
//        isMarrid:false,
//        calcAge:function(){
//            this.age= 2018-this.Birthear;
//        }
// };
//  john.calAge();
// console.log(john);

/*Loops and iteration */
/*
for(var i=0;i<=10;i++)
console.log(i);

var john=['john','smith',1990,'designer',false];
for(var i=0;i<john.length;i++){
   // console.log(john[i]);
}
var i=0;
while(i<john.length){
    console.log(john[i]);
    i++;
}
*/

/*var john=['john','smith',1990,'designer',false];
for(var i=0;i<john.length;i++){
    if(typeof john[i] !=='string') 
    {break;}
    console.log(john[i]);
}
*/

/* ************************************* */

/*
//function constructor //PROTOTYPE
var john = {
    name:'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.calculateAge=function(){
        console.log(2016-this.yearOfBirth);
    }
} 

Person.prototype.calculateAge=function(){
    console.log(2016-this.yearOfBirth);
}

Person.prototype.lastName='Smith';

var john= new Person('John',1990,'teacher');
var jane=new Person('Jane',1989,'designer');
var mark=new Person('mark',1969,'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.name+' '+john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

/* ************************************* */

/*

//Object.create method
var personProto={
    calculateAge:function(){
        console.log(2016-this.yearOfBirth)
    }
};

var john=Object.create(personProto);
john.name='John';
john.yearOfBirth=1998;
john.job='teacher';

var jane=Object.create(personProto,
    {
        name:{value:'jame'},
        yearOfBirth:{value:1998},
        job:{ value:'designer'}    
    
    });
*/

/* ************************************* */


/*
//Premitives And Objects


//Premetives
var a=23;
var b=a;
a=46;
console.log(a);
console.log(b);

var obj1={
    name:'john',
    age:26
};
var obj2=obj1;
obj1.age=30;
console.log(obj1.age);
console.log(obj2.age);

//Functions

var age=27;
var obj={
    name:'Jonas',
    city:'Lisbon'
};

function change(a,b){
    a=30;
    b.city="San Fransiciso";
}

change(age,obj);

console.log(age);
console.log(obj.city); 
*/

/* ************************************* */

/*
//Passing functions as arguments

var years=[1990,2006,1997,1998,1991];

function arrayCalc(arr,fn){
    var arrRes = [];
    for (var i= 0; i < arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020- el;
}

function isFullAge(el){
    return el>=18;
}

function maxHeartRate(el){
    if (el>=18 && el<= 81){
      return Math.round (206.9-(0.67*el));
    }else{
        return -1;
    }
}

var ages =arrayCalc(years,calculateAge);
var fullAges= arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages,maxHeartRate)

console.log(ages);
console.log(fullAges);
console.log(rates);

*/

/* ******************************** */

/*
//Functions returning functions

function interviewQuestion(job){
    if (job === 'designer'){
       return function(name){     //returning functions
            console.log(name+',what is blah??');
       }
    } else if (job==='teacher'){
        return function(name){
            console.log('What subject do you teach?,'+name);
        }
    } else{
        return function(name){
            console.log('Hello'+name+',What do you do?')
        }
    }
}

var teacherQestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQestion('John');
designerQuestion('John');
designerQuestion('Mark');
designerQuestion('Mary');

interviewQuestion('teacher')('Mark');//function calling with two arguments
*/

/* ************************************* */

//Imeditaly Invoked Function Expression (IIFE)
/*
// function game(){
//     var score=Math.random()*10;
//     console.log(score>=5);
// }
// game();

(function(){                        //IIFE
    var score=Math.random()*10;
    console.log(score>=5);
})();
 
(function(goodLuck){                        //IIFE
    var score=Math.random()*10;
    console.log(score>=5 -goodLuck);
})(5);//passing argument into function

*/

/* ************************************* */

/*
//Closures  (V.Imp)

function retirement(retirementAge){
    var a='years left until retirement';
    return function(yearOfBirth){
        var age=2016-yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}

var retirementUS=retirement(66);
var retirementGermany=retirement(65);
var retirementIceland=retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//another example of closure
function outerFunction(outerVariable){
    return function innnerFunction(innerVariable){
        console.log('Outer Variable: ' + outerVariable);
        console.log('inner Variable: ' + innerVariable);

    }
}
const newFunction=outerFunction('outside'); 
newFunction('inside');
console.dir(newFunction); // you can see the closure in console

//another example
function interviewQuestion(job){
    return function(name){
        if (job=='designer'){
            console.log(name+',what is blah??');
        }else if (job==='teacher'){
            console.log('What subject do you teach?,'+name);
        }else{
            console.log('Hello'+name+',What do you do?')
        }
    }
}

interviewQuestion('teacher')('john');

*/

/* ************************************* */

//Bind,Call and apply

var john={
    name:'john',
    age:26,
    job:'teacher',
    presentation:function(style,timeOfDay){
        if (style==='formal'){
            console.log('Good'+timeOfDay+',ladies and gentleman! I\'m '+this.name+',I\'m '+this.job+' and I\'m '+this.age + ' years old.');
        }else if(style==='friendly'){
            console.log('hey! What\'s up? I\'m '+this.name+',I\'m '+this.job+' and I\'m '+this.age + ' years old. Have a nice '+timeOfDay+'.');
        }
    }
};

var emily={
    name:'Emily',
    age:35,
    job:'designer'
};
john.presentation('formal','morning');
john.presentation.call(emily,'friendly','afternoon');//call method
//john.presentation.apply(emily,'friendly','afternoon');
 