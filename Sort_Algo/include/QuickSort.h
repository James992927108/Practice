#include <cstdlib>
#include <experimental/optional>

#include "Init.h"
#include "Function.h"

class QuickSort : public Init
{
public:
    QuickSort() = default;
    QuickSort(int *arr, int size) : Init(arr, size)
    {
        front_ = 0;
        end_ = size - 1;
    }

    void Start();

    QuickSort &set_front(int front);
    QuickSort &set_end(int end);
    QuickSort &set_sort_range(int front, int end);

    int get_front() const;
    int get_end() const;

private:
    std::experimental::optional<int> front_;
    std::experimental::optional<int> end_;

    int Partition(int *arr, int front, int end);
        
    void Sort(int *arr, int front, int end);
};