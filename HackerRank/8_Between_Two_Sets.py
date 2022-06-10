#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'getTotalX' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER_ARRAY b
#

def is_arr_element(i, arr):
    for a in arr: 
        if i % a  != 0: 
            return False
    return True

def getTotalX(arr, brr):
    # Write your code here
    ans=0
    for i in range(1, 101):
        if all(i%x==0 for x in a) and all(x%i==0 for x in b):
            ans+=1
    return ans

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # first_multiple_input = input().rstrip().split()

    # n = int(first_multiple_input[0])

    # m = int(first_multiple_input[1])

    # arr = list(map(int, input().rstrip().split()))

    # brr = list(map(int, input().rstrip().split()))
    arr = [2, 4]
    brr = [16, 32, 96]
    total = getTotalX(arr, brr)

    print(total)

    # fptr.write(str(total) + '\n')

    # fptr.close()
