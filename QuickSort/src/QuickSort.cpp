# include "QuickSort.h"
QuickSort:: QuickSort(int *arr, int front, int end){
    this-> arr = arr;
    this-> front = front;
    this-> end = end;
}

void QuickSort:: swap(int *a, int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

int QuickSort:: Partition(int *arr, int front, int end){
    int pivot = arr[end];
    int i = front -1;
    for (int j = front; j < end; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    i++;
    swap(&arr[i], &arr[end]);
    return i;
}

void QuickSort:: Sort(int *arr, int front, int end){
    if (front < end) {
        int pivot = Partition(arr, front, end);
        Sort(arr, front, pivot - 1);
        Sort(arr, pivot + 1, end);
    }
}
void QuickSort:: PrintArray(int *arr, int size){
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}