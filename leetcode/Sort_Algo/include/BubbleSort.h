#include <cstdlib>
#include <experimental/optional>

#include "Init.h"
#include "Function.h"

class BubbleSort : public Init
{
public:
    BubbleSort() = default;
    BubbleSort(int *arr, int size) : Init(arr, size)
    {
        front_ = 0;
        end_ = get_size() - 1;
    }

    void Start();
private:
    std::experimental::optional<int> front_;
    std::experimental::optional<int> end_;

    void Sort(int *arr, int size);
};