//write a program that assigns houses to students based on the length of their name
let students= ["shubh", "anjali", "shivani", "annapurna", "shhubham", "krishnanendu", "ravindranathan", "shivesh", "kaif", "emanuel"]

let houses=[]
for (const student of students) {
    if(student.length < 6)
    {
        houses.push("red")
    }
    else if(student.length < 8)
    {
            houses.push("green")
    }
    else if(student.length < 12)
    {
            houses.push("yellow")
    }
    else{
        houses.push("pink")
    }
}
console.log(houses)