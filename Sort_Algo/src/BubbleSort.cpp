#include "BubbleSort.h"

void BubbleSort::Start(){
    Sort(get_arr(), get_size());
}

void BubbleSort::Sort(int *arr, int size){
    for(int i = size - 1 ; i > 0 ; i--){
        for(int j = 0 ; j < i ; j++){
            if(arr[j] > arr[j+1]){
                swap(arr[j], arr[j+1]);
            }
        }
    }
}