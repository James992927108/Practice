#include "Init.h"

void Init::PrintArray()
{
    for (int i = 0; i < size_; i++)
    {
        std::cout << arr_[i] << " ";
    }
    std::cout << std::endl;
    std::cout << "************************" << std::endl;
}