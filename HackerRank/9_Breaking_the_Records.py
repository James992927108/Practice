#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'breakingRecords' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY scores as parameter.
#

def breakingRecords(scores):
    # Write your code here
    most_count = 0
    least_count = 0
    temp_max = -1
    temp_min = 100000001
    for source in scores:
        if source > temp_max:
            temp_max = source
            print("max {}".format(temp_max))
            most_count += 1
        if source < temp_min:
            temp_min = source
            print("min {}".format(temp_min))
            least_count += 1
    return most_count - 1, least_count - 1

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # n = int(input().strip())

    # scores = list(map(int, input().rstrip().split()))

    # scores = [12, 24, 10, 24]
    # scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
    scores = [0, 9, 3, 10, 2, 20]
    # scores = [100000000, 100000000, 10000000, 10000000, 1000000]
    result = breakingRecords(scores)
    print(result)
    # fptr.write(' '.join(map(str, result)))
    # fptr.write('\n')

    # fptr.close()
