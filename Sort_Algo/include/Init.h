#include <iostream>

class Init
{
public:
    Init() = default;
    Init(int *arr, int size) : arr_(arr), size_(size)
    {
    }
    void PrintArray();

    int *get_arr() const { return arr_; }

    int get_size() const { return size_; }

private:
    int *arr_;
    int size_;
};