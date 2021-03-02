#include <stdio.h>

int main()
{
    // int *a = (int *)((void *)0) + 5;
    // printf("%d\n", a);

    // int a = 0x12345678;
    // char b = (char)a;
    // printf("%c\n", b);

    int a = 10; // 定義一個 int a 變數
    int *b = &a; 
    //定義一個 int b 的指標變數 並指向 int a 變數，
    
    printf("%p\n", b);// b 指向 a 記憶體位置(= &a)
    printf("%d\n", *b); // *b 是指向 a 的數值
    printf("%p\n", &a);
    printf("%d\n", *(int *)&a);
    // (int *)
    return 0;
}

