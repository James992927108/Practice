#include "Screen.h"

int main(){

    Screen my_screen(4, 3, '0');
    char ch1 = my_screen.get();

    my_screen.move(1, 2).set('#');
    char ch2 = my_screen.get(1, 2);
    std::cout << "ch1 : " << ch1 << std::endl;
    std::cout << "ch2 : " << ch2 << std::endl;

    return 0;
}