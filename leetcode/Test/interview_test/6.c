// 999999999
//  7777777
//   55555
//    333
//     1


#include <stdio.h>

int main(){
    for(int i = 9; i > 0; i -= 2 ){
        for(int j = 9; j > i; j-= 2){
            printf(" ");
        }
        for(int j = 0; j < i; j++){
            printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}