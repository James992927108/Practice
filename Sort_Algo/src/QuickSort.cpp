#include "QuickSort.h"

void QuickSort::Start()
{
    Sort(get_arr(), *front_, *end_);
}

QuickSort &QuickSort::set_front(int front)
{
    front_ = front;
    return *this;
}

QuickSort &QuickSort::set_end(int end)
{
    end_ = end;
    return *this;
}

QuickSort &QuickSort::set_sort_range(int front, int end)
{
    front_ = front;
    end_ = end;
    return *this;
}

int QuickSort::get_front() const
{
    if (front_)
    {
        return *front_;
        // return front_.value(); // same as *front_
    }
    return -1;
}

int QuickSort::get_end() const
{
    if (end_)
    {
        return *end_;
    }
    return -1;
}

int QuickSort::Partition(int *arr, int front, int end)
{
    int pivot = *(arr + end); // arr[end]
    int i = front - 1;
    for (int j = front; j < end; j++)
    {
        if (arr[j] < pivot)
        {
            i++;
            // swap(arr + i, arr + j);
            // swap(&arr[i], &arr[j]);

            // swap(*(arr + i) , *(arr + j));

            swap(arr[i], arr[j]);
        }
    }
    i++;
    swap(arr[i], arr[end]);
    return i;
}

void QuickSort::Sort(int *arr, int front, int end)
{
    if (front < end)
    {
        int pivot = Partition(arr, front, end);
        Sort(arr, front, pivot - 1);
        Sort(arr, pivot + 1, end);
    }
}
