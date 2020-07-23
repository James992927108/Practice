#include <iostream>

int main()
{
    const double *pc = 0;
    const double davl = 3.14;
    pc = & davl;
    std::cout << *pc << std::endl;

    return 0;
}