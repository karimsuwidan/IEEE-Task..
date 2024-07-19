// 122 challenge

// let chosen=1;
// let myFriends=[
//     {title:"osama",age:39,available:true,skills:["html","css"]},
//     {title:"ahmed",age:25,available:false,skills:["python","django"]},
//     {title:"karim",age:32,available:true,skills:["php","larvel"]}
// ]
// if(chosen===1){ 
//     let[a,,]=myFriends
//     let {title,age,available,skills:[,css]}=a
//     console.log(title)
//     console.log(age)
//     if(available===true){
//         console.log("available")
//     }else{
//         console.log("Notavailable")
//     }
//     console.log(css)
// }else if(chosen===2){
//     let[,a,]=myFriends
//     let {title,age,available,skills:[,django]}=a
//     console.log(title)
//     console.log(age)
//     if(available===true){
//         console.log("available")
//     }else{
//         console.log("Notavailable")
//     }
//     console.log(django)
// }else if(chosen===3){
//     let[,,a]=myFriends
//     let {title,age,available,skills:[,larvel]}=a
//     console.log(title)
//     console.log(age)
//     if(available===true){
//         console.log("available")
//     }else{
//         console.log("Notavailable")
//     }
//     console.log(larvel)
// }

// 01
// let myNumbers = [1, 2, 3, 4, 5];

// let[a,,,,e]=myNumbers
// console.log(a * e); 

// 02

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// let [a,b,c,[d,e,[f,g]]]=mySkills
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);


// 03

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let AllArrays=arr1.concat(arr2,arr3)
// let [c,,,,,,,a,b]=AllArrays
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// 04

// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
//     let {age:a,working:w}=member
//   console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
//   let {country:c}=member
//   console.log(`I Live in ${c}`);
//   let {hobbies:[h1,,h3]}=member

//   console.log(`My Hobbies: ${h1} And ${h3}`);


// 05
// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//       "Oath In Felghana": ["USA", "Japan"],
//       "Ark Of Napishtim": {
//         US: "20 USD",
//         JAP: "10 USD",
//       },
//       Origin: "30 USD",
//     },
//   };
//     let{title:t,developer:d,releases}=game; 
//     let [o, a] = Object.keys (releases);
//     let [[u,j],{US:u_price,JAP:j_price},or]=Object.values(releases)
//     console.log(`My Favourite Games Style Is ${t} Style`);
//     console.log(`And I Love ${d} Games`);
//     console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);  
//     console.log(`Although I Love ${a}`);
//     console.log(`${a} Price in USA Is ${u_price}`);
//     console.log(`${a} Price in Japan Is ${j_price}`);
//     console.log(`Origin Price Is ${or}`);

// 06

// let chosen=1;
// let myFriends=[
//     {title:"osama",age:39,available:true,skills:["html","css"]},
//     {title:"ahmed",age:25,available:false,skills:["python","django"]},
//     {title:"karim",age:32,available:true,skills:["php","larvel"]}
// ]
// if(chosen===1){ 
//     let[a,,]=myFriends
//     let {title,age,available,skills:[,css]}=a
//     console.log(title)
//     console.log(age)
//     if(available===true){
//         console.log("available")
//     }else{
//         console.log("Notavailable")
//     }
//     console.log(css)
// }else if(chosen===2){
//     let[,a,]=myFriends
//     let {title,age,available,skills:[,django]}=a
//     console.log(title)
//     console.log(age)
//     if(available===true){
//         console.log("available")
//     }else{
//         console.log("Notavailable")
//     }
//     console.log(django)
// }else if(chosen===3){
//     let[,,a]=myFriends
//     let {title,age,available,skills:[,larvel]}=a
//     console.log(title)
//     console.log(age)
//     if(available===true){
//         console.log("available")
//     }else{
//         console.log("Notavailable")
//     }
//     console.log(larvel)
// }



// ..............................................................................................

// 01
// let setOfNumber=new Set([10])
// setOfNumber.add(20).add(setOfNumber.size)
// console.log(setOfNumber)
// console.log(Array.from(setOfNumber)[2])



// 02
// let myfriends=["osama","ahmed","sayed","sayed","mahmoud","osama"]
// console.log(new Set(myfriends.sort()))



// 03
// let myInfo={
//     userName:"Osama",
//     role:"admin",
//     country:"Egypt"
// }
// console.log(new Map(Object.entries(myInfo)))
// console.log(new Map(Object.entries(myInfo)).size)
// console.log(new Map(Object.entries(myInfo)).delete("role"))



// 04
// let number=100020003000;
// console.log(+[...new Set(number.toString())].sort().slice(1).join(""))




// 05
// let theName="Elzero";
// console.log(theName.split(""))
// console.log([...(theName)])
// console.log(Array.from(theName))
// console.log([...new Set(theName)])
// console.log(Object.assign([],theName))





// 06
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// chars.sort()
// console.log(chars)
// chars.copyWithin(0,3,6)
// console.log(chars)


// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// chars.sort()
// console.log(chars)
// chars.copyWithin(0,4,8)
// console.log(chars)


// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// console.log(chars)
// chars.copyWithin(2,0,6)
// console.log(chars)




// 07
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// console.log(numsOne.concat(numsTwo))
// console.log([...numsOne,...numsTwo])
// numsOne.push(...numsTwo)
// console.log((numsOne))



// 08
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log(Math.max(...n1)*([...n1,...n2].length))