let myFavSuperheroes = ["Antman", "Superman", "Batman", "Ironrman", "Spiderman"];
console.log(myFavSuperheroes)
console.log(myFavSuperheroes[3])

//total number of superheroes in array:
console.log(myFavSuperheroes.length)

//adding "thor"
myFavSuperheroes[4]="Thor"
console.log(myFavSuperheroes[4])

//unshift add a new element at the begining. hereby adding Aquaman 
myFavSuperheroes.unshift("Aquaman")
console.log(myFavSuperheroes)

//push add new element at the end of array. here adding Thanos
//pop remove from the end
myFavSuperheroes.pop()
myFavSuperheroes.push("Thanos")
console.log(myFavSuperheroes)

//shift command removes the first element from the array
myFavSuperheroes.shift()
console.log(myFavSuperheroes)

//pop command removes last element from an array
myFavSuperheroes.pop()
console.log(myFavSuperheroes)

//splice(3,0, "Thanos") means Thanos elemnent to be added at the place starting from index 3 and removes 0 element
//splice(2,1, "thanos") means Thanos elemnent to be added at the place starting from index 2 and removes 1 element
myFavSuperheroes.splice(3,0 ,"Thanos");
console.log(myFavSuperheroes)
myFavSuperheroes.splice(2, 0, "Bhim");
console.log(myFavSuperheroes)


let marvelheroes = ["Shaktiman", "Minnal","shiv"];
let Dcheroes = ["Murli", "Krish"];

//remember the three "." (dots) before arrayname... it concatnate both array and add em.
//here adding marvelheroes and dcheroes
let superherouniverse = [...marvelheroes, ...Dcheroes];
console.log(superherouniverse);
console.log(superherouniverse[0]);
console.log(superherouniverse[marvelheroes.length]);



