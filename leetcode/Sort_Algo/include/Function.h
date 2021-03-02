#pragma once

inline void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

inline void swap(int &a, int &b)
{
    int temp = a;
    a = b;
    b = temp;
}