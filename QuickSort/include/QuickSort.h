# include <cstdlib>

# include <iostream>
using namespace std;

class QuickSort
{
    public:
        QuickSort(int *arr, int front, int end);
        void swap(int *a, int *b);
        int Partition(int *arr, int front, int end);
        void Sort(int *arr, int front, int end);
        void PrintArray(int *arr, int size);
};