#include <iostream>

#define ADD_TWO(x, y) \
    x += 2;           \
    y += 2;

int main()
{
    bool flag = true;
    int j = 5, k = 7;
    if (flag)
    {
        ADD_TWO(j, k);
    }

    std::cout << j << " " << k << std::endl;
}