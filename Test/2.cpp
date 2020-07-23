#include <iostream>

int main()
{
    int a[] = {6, 7, 8, 9, 10};
    int *p = a;

    *(p++) += 123;
    *(++p) += 123;

    int length = sizeof(a) / sizeof(a[0]);
    for (int i = 0; i < length; i++)
    {

        std::cout << a[i] << std::endl;
    }

    return 0;
}
