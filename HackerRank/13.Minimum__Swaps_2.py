#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumSwaps function below.
def minimumSwaps(arr):
    numSwaps = 0
    for index in range(len(arr)):
        while index + 1 != arr[index]:
            swapIndex = arr[index] - 1
            valAtIndex = arr[index]
            valAtSwapIndex = arr[swapIndex]
            arr[index] = valAtSwapIndex
            arr[swapIndex] = valAtIndex
            numSwaps += 1
    return numSwaps

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    res = minimumSwaps(arr)

    fptr.write(str(res) + '\n')

    fptr.close()
