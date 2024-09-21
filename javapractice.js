console.log('Manikanta Alamanda')
let age=18;
if(age<18)
    console.log('Under18');
else   
    console.log('Above18');
const student={
    fullName:'Manikanta',
    age:20,
    cgpa:8.13,
}
console.log(student)
let condition=(age==18);
console.log(condition)
let color;
let mode="darkmode"
if(mode=="darkmode")
    color="black"
console.log(color)
let str="Mani"
console.log(str.length)
let object={
    name:"Janaki",
    occupation:"Photographer"
}
for(let key in object)
    console.log(`${key}-${object[key]}`)
let output=`Meet Mr.${object.name} he is famous ${object.occupation}`
console.log(output)
for(let i=0;i<5;i++)
    console.log(i);
let str2="TEACHER"
for(let i of str2)
        console.log(i)
str2.toLowerCase()
console.log(str2.toLowerCase())
console.log(str2.slice(0,str2.length-1))
console.log(str.concat(str2))
console.log(str2.charAt(0))
let heroes=["NTR","MB","PK"]
console.log(heroes)
let n=prompt('Enter the value of n:')
console.log("n==",n)
function myfunction(msg){
    console.log(msg)
}
msg="This is a msg"
myfunction(msg);
function sum(x,y){
    console.log("Sum=",x+y)
}
sum(3,6)



let arr = [1, 2, 3, 4, 5];
arr.forEach(function printval(val) {
    console.log(val);
});
let arr2=[1,2,3,4,5,6,7]
let evenArr=arr2.filter((val)=>{
    return val%2==0
});
console.log(evenArr)
function vowels(string){
    let count=0;
    for(let i of string){
        if(i=='a' ||i=='e' ||i=='i' ||i=='o' ||i=='u' )
            count++;
    }
    console.log("Vowels=",count)
}





let string="Manikanta"
vowels(string)
const vowels2=(string)=>{
    let count=0;
    for(let i of string){
        if(i=='a' ||i=='e' ||i=='i' ||i=='o' ||i=='u' )
            count++;
    }
    console.log("Vowels=",count)
}
vowels2(string)