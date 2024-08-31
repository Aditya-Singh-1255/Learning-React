let arr = [1, 2, 3];
let brr = [...arr];
brr.push(4);
console.log(arr);
console.log(brr);

let obj1 = {
    name : 'Aditya Kumar',
    age: 10,
    address:{
        village: 'marwan'
    }
}

let obj2 = {...obj1};
obj2.name = 'Ajay';
obj2.age = 30
obj2.address.village = 'Karza'
console.log(obj1);

console.log(obj2);