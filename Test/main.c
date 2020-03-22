#include <stdio.h>
#include <stdlib.h>

#define true 1
#define false 0
#define SET_BIT(x,n) ((x) |= (1<< (n)))
#define CLEAR_BIT(x,n) ((x) &= (~(1 << n)))
#define CHECK_BIT(x,n) (((x) & (1 << (n))) != 0)
#define FILP_BIT(x,n) ((x) ^= (1<<(n)))
#define SQUARE(x) ((x)*(x))
int main(){
    // int a = 0x0000;
    // SET_BIT(a,1);
    // printf("%x\n",a);
    // CLEAR_BIT(a,1);
    // printf("%x\n",a);
    // FILP_BIT(a,1);
    // printf("%x\n",a);
    // printf("%d\n",CHECK_BIT(a,1));
    int a[5] = {1, 2, 3, 4, 5};
    int *p = (int*)(&a+1);
    printf("%d\n",&a);
    printf("%d,%d\n",*(a+1),(*p));
    return 0;
}


// union AA
// {
//   char a[2];
//   int s;
// };

// int main()
// {
//   // AA aa = { 0 };
//   // aa.a[0] = 12;
//   // aa.a[1] = 1;
//   // printf("%x\n", aa.s);
//   // printf("%d\n", sizeof(aa));
//   // getchar();
//   char a[] = "123";
//   char *b = a;
//   printf("%d\n",sizeof(*b));
//   return 0;
// }


// Example 6
// int toBinary(int data)
// {
//   printf("%d\n",data);
//   int x[64],k,i=0;
//   int base = 2;
//   while(data)
//   {
//     x[i]=data%base;
//     data/=base;
//     i++;
//   }
//   for(k=i-1;k>=0;k--)
//   {
//     if(x[k]<10)
//     {
//       printf("%d", x[k]);
//     }
//     else if(x[k]<=16)
//     {
//       printf("%c", 'A'+x[k]-10);
//     }
//   }
// }
// int  func(int x) 
// { 
//   int  countx  = 0;
//   while (x) 
//   { 
//     countx  ++ ;
//     x  =  x & (x - 1 );
//     printf("%d\n",toBinary(x)); 
//     printf("%d, %d\n",x, countx); 
//   } 
//   return  countx; 
// };
// int main()
// {
//   int countx = 0;
//   int x = 9999;
//   countx = func(x);
//   printf("%d\n",countx);
//   return 0;
//   }
// Example 5
// int main() {
//   char strAry[] = "This is string";
//   char *aryPtr = strAry;
//   int *intPtr = (int*)strAry;

//   printf("%s\n",strAry);
//   printf("%c\n",*strAry);
//   printf("%c\n",*strAry+1);
//   printf("%c\n",*(strAry+2));

//   printf("%s\n",aryPtr);
//   printf("%c\n",*aryPtr);
//   printf("%c\n",*aryPtr+1);
//   printf("%c\n",*(aryPtr+2));

//   printf("%s\n",intPtr);
//   printf("%c\n", *intPtr);
//   printf("%c\n", *intPtr+1);
//   printf("%c\n", *(intPtr+2));

//   printf("%d\n",sizeof(strAry));
//   printf("%d\n",sizeof(*strAry));
//   printf("%d\n",sizeof(aryPtr));
//   printf("%d\n",sizeof(*aryPtr));
//   printf("%d\n",sizeof(intPtr));
//   printf("%d\n",sizeof(*intPtr));

// }

// Example 4

// int add(int a, int b) {
//   return a+b;
// }
// int mult(int a, int b) {
//   return a*b;
// }
// int main() {
//   int (*op)(int a, int b);
//   op = add;
//   printf("op(3,5)=%d\n", op(3,5));
//   op = mult;
//   printf("op(3,5)=%d\n", op(3,5));
// }

// Example 3
// int main(void){
//     unsigned long num_a = 0x00001111;
//     unsigned long num_b = 0x00000202;
//     unsigned long num_c;

//     num_c = num_a & (~num_b);
//     num_c = num_c | num_b;

//     printf("%lx\n", num_c); // 00001313
// }


// Example 1
// int main(void) {
//     int* ptr;
//     int a = 10;
    
//     ptr = & a;
//     printf("ptr = %d \n", ptr);
//     printf("&ptr = %d \n", &ptr);
//     printf("a = %d \n", a);
//     printf("&a = %d \n", &a);
//     printf("*ptr = %d \n", *ptr);

//     return 0;
// }

// example 2
// int g_int = 0;
// void changePtr(int* pInt){
//     printf("func: %d\n", pInt);
//     pInt = &g_int;
//     printf("func: %d\n", pInt);
// }

// int main(void){
//     int localInt = 1;
//     int* localPInt = &localInt; 
//     printf("%d\n", &localPInt);

//     changePtr(localPInt); 
//     printf("%d\n", &localPInt);

//     printf("%d\n", *localPInt);
//     return 0;
// }
