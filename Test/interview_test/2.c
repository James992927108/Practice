#include <stdio.h>


#define true 1
#define false 0
#define SET_BIT(x,n) ((x) |= (1<< n))
#define CLEAR_BIT(x,n) ((x) &= (~(1 << n)))
#define CHECK_BIT(x,n) (((x) & (1 << (n))) != 0)
#define FILP_BIT(x,n) ((x) ^= (1<<(n)))
#define SQUARE(x) ((x)*(x))
int main(){
    int a = 0x0000;
    SET_BIT(a,1);
    printf("%x\n",a);
    CLEAR_BIT(a,1);
    printf("%x\n",a);
    FILP_BIT(a,1);
    printf("%x\n",a);
    printf("%d\n",CHECK_BIT(a,1));
    return 0;
}
