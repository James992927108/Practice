#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'birthdayCakeCandles' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY candles as parameter.
#


def birthdayCakeCandles(candles):
    # Write your code here
    max = 0
    max_count = 0
    for i in candles:
        if i > max:
            max = i
            max_count = 1
        elif i == max:
            max_count += 1
    return max_count

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # candles_count = int(input().strip())
    input_arr = [3, 2, 1, 3]

    candles = list(map(int, input_arr))

    result = birthdayCakeCandles(candles)

    print(result)

    # fptr.write(str(result) + '\n')

    # fptr.close()
