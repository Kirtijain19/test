console.log("FAULTY CALCULATOR");
/* Create a faulty calculator using JS which does the following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:
+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrong operations 10% of the times.
*/
function calci(a,b,c) {
    if (d=Math.random()<0.1) {
        if(c=='+')
            console.log(a-b);
        else if(c=='*')
            console.log(a+b);
        else if(c=='-')
            console.log(a/b);
        else if(c=='/')
            console.log(a**b);

        
    } else {
        if(c=='+')
            console.log(a+b);
        else if(c=='*')
            console.log(a*b);
        else if(c=='-')
            console.log(a-b);
        else if(c=='/')
            console.log(a/b);
        
    }
    
}
calci(5,4,'+');
calci(5,4,'*');
calci(6,2,'/');
calci(10,5,'-');
