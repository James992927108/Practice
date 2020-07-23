#include <stdio.h>

int strcmp_implementation(char *source, char *dest)
{
    while (*source!='\0' || *dest!='\0')
    {
        if (*source!=*dest)
            return -1;
        source++, dest++;
    }
    return 0;
}
 
int main()
{
    char *source = "abc";
    char *dest1 = "abc";
    char *dest2 = "abd";
 
    printf("ret1: %d\n", strcmp_implementation(source, dest1));    // return 0
    printf("ret2: %d\n", strcmp_implementation(source, dest2));    // return -1

    return 0;
}