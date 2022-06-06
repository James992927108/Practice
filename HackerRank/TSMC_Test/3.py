#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'largestArea' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY samples as parameter.
#

def largestArea(samples):
    # Write your code here
    square_len = len(samples)
    for i in range(1, square_len):
        for j in range(1, square_len):
            if samples[i][j] == 1:
                samples[i][j] = min(samples[i-1][j],samples[i][j-1], samples[i-1][j-1]) + 1
            else:
                samples[i][j] = 0
    return max([max(row) for row in samples])
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    samples_rows = int(input().strip())
    samples_columns = int(input().strip())

    samples = []

    for _ in range(samples_rows):
        samples.append(list(map(int, input().rstrip().split())))

    result = largestArea(samples)

    fptr.write(str(result) + '\n')

    fptr.close()
