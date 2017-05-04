#include <stdio.h>


void changeInt(int i)
{
    i = 5050;
	printf("We are inside the function. The address of i is %x \n", &i);

}

void changeArray(int iArray[])
{
    iArray[0] = 5050;
	printf("We are inside the function. The address of i is %x \n", iArray);

}


main(void)
{
	//this is passing by value, so i shouldn't change.
    int i = 10;
    printf("%d \n", i);
	printf("The address of i is %x \n", &i);
    changeInt(i);
    printf("%d \n", i);
	printf("The address of i is %x \n", &i);


    //Following is passing by ref, the original iArray will be modified.
    int iArray[] = {1,2,3,4,5};
	printf("%d \n", iArray[0]);
	printf("The address of i is %x \n", iArray);

    changeArray(iArray);
	printf("%d \n", iArray[0]);
	printf("The address of i is %x \n", iArray);
	



}
