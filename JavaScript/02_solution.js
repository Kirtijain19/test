//write  a function that doubles each element in an array but if array contains consecutive duplicate elements, only double one of them.
function double(arr)
{
    let arr2=[]
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==arr[i+1])
        {
            continue;
        }
        else{
            // console.log(2*arr[i]);
            arr2.push(arr[i]*2)
            
        }
    }
    console.log(arr2)
}
let myArray= [1,2,2,3,3,3,4,5,6,6,7,8]
double(myArray);