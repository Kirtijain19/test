// ****
// ***
// **
// *

#include<stdio.h>
void main()
{
    int n,i,j;
    printf("enetr number of rows");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        for(j=n; j>=i; j--)
        {
            printf("*");
        }
        printf("\n");

    }
}
