#include <stdio.h>

int main(){
    static char *s[] = {"black", "white", "pink", "violet"};
    char **ptr[] = {s+3, s+2, s+1, s}, ***p;
    p = ptr;
    ++p;
    printf("%s\n",**p+1);
    printf("%s\n", *s);
    return 0;
}
