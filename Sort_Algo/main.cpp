#include "QuickSort.h"

int main()
{

    
    int arr[] = {9, 4, 1, 6, 10, 3, 8, 2, 5};

    int size = sizeof(arr)/sizeof(arr[0]);

    QuickSort QS(arr, size);

    std::cout << "original:\n";
    QS.PrintArray();

    QS.Start();

    std::cout << "sorted:\n";
    QS.PrintArray();

    return 0;
}