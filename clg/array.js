const s=["mohit","rohit","prateek"];
console.log(s);
console.log(s[1]);

const s1=[];
s1[0]="mohit";
s1[1]="rohit";
s1[2]="prateek";
console.log(s1);

const s2=new Array("mohit", "rohit", "prateek");
console.log(s2);

for(let i=0; i<s.length; i++)
{
    console.log(s[i]);
}

const a={
    firstname:"Kirti",
    lastname:"Jain",
    age:19

}
console.log(a);

const studentArr=[{name:"sumit", city:"agra", cgpa:9.4}, {name:"priya", city:"delhi", cgpa:8.5},{name:"ritika",city:"mumbai", cgpa:8},{name:"nitika",city:"mumbai", cgpa:8},{name:"pritika",city:"mumbai", cgpa:8.11},{name:"gitika",city:"mumbai", cgpa:8}]
console.log(studentArr)
console.table(studentArr)

for(let i=0; i<studentArr.length; i++)
{
    if(studentArr[i].city=="mumbai")
    {
        console.log(studentArr[i]);
    }
    else if(studentArr[i].cgpa>8.5)
    {
        console.log(studentArr[i]);
    }
}


