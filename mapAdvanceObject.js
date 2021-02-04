const Student = [
    {id:45, name:"ujjal", profession:"freelancer"},
    {id:12, name:"jamal", profession: "adviser"}
]
const ujjal = Student.map(x => "name is " + x.name);
const bigNums = Student.filter(x => x.id > 35);
const findNums = Student.find( x => x.id >10);
console.log(findNums);
// console.log(bigNums);
// console.log(ujjal);