"""
n=int(input("enter number of rows"))
for i in range(n):
    for j in range(n,i,-1):
        print("*",end=" ")
    print("\n")

    
Pattern 1
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5

n=int(input("enetr numebr of rows"))
for i in range(n):
    for j in range(n):
        print(j+1, end=" ")
    print("\n")

Pattern 2
****
***
**
*
"""
"""
Pattern 3
****
 ***
  **
   *
"""
"""
Pattern 4
*******
*** ***
**   **
*     *

for i in range(4):
    for j in range(i,4):
        print("*", end=" ")
    for k in range(1,2*i-1):
        print(" ", end=" ")
    

n=int(input("enetr a numer"))
for i in range(1,n+1):
    if(n%i==0):
        print(i,"is factor")
"""
n=int(input("enetr a number"))
m=n
x=n
digits=0
sum=0
while n>0:
    digits+=1
    n=n//10
while x>0:
    r=n%10
    sum=sum+pow(r,digits)
    n=n//10
if(sum==m):
    print("armstrong")
else:
    print("not armstrong")
