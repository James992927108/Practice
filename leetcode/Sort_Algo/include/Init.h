#include <iostream>
#pragma once

class Init
{
public:
    Init() = default;
    Init(int *arr, int size) : arr_(arr), size_(size)
    {
        // std::cout << "Function:" << __FUNCTION__ << ", arr Size: " << sizeof(arr)/sizeof(arr[0]) << std::endl;
    }
    void PrintArray();

    int *get_arr() const { return arr_; }

    int get_size() const { return size_; }

private:
    int *arr_;
    int size_;
};