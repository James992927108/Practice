
#include "QuickSort.h"
#include "BubbleSort.h"

#include <typeinfo> 

template <typename Algo>
void select_sort(Algo& s){
    std::cout << typeid(s).name() << std::endl;

    std::cout << "original:\n";
    s.PrintArray();

    s.Start();

    std::cout << "sorted:\n";
    s.PrintArray();
}

int main()
{
    int arr[] = {9, 4, 1, 6, 10, 3, 8, 2, 5};

    int size = sizeof(arr)/sizeof(arr[0]);
    std::cout << "Function:" << __FUNCTION__ << ", arr Size: " << sizeof(arr)/sizeof(arr[0]) << std::endl;
    // size 必須帶入到 class 中進行初始化，因為在建構是中，只有帶指向 arr[]的 int 指標
    // 目前有一個問題是
    // QuickSort QS(arr, size);
    // select_sort(QS);

    BubbleSort BS(arr, size);
    select_sort(BS);

    return 0;
}