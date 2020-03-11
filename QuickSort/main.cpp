# include "QuickSort.h"

int main() {

    int n = 9;
    int arr[] = {9, 4, 1, 6, 10, 3, 8, 2, 5};
    cout << "original:\n";
    QuickSort QS(arr, 0, n-1);
    
    QS.PrintArray(arr, n);

    QS.Sort(arr, 0, n-1);

    cout << "sorted:\n";
    QS.PrintArray(arr, n);
    return 0;
}