#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def miniMaxSum(arr):
    # Write your code here
    new_arr = sorted(arr)
    min = sum(new_arr[:-1])
    max = sum(new_arr[1:])
    return min, max
if __name__ == '__main__':
    input_arr = [7,69,2,221,8974]
    # arr = list(map(int, input().rstrip().split()))
    arr = list(map(int, input_arr))
    print(arr)
    min, max = miniMaxSum(arr)
    print(min, max)
