#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'kangaroo' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. INTEGER x1
#  2. INTEGER v1
#  3. INTEGER x2
#  4. INTEGER v2
#

def kangaroo(x1, v1, x2, v2):
    # Write your code here
    if x1 < x2 and v1 < v2:
        return "NO"
    
    if v1 - v2 == 0:
        return "NO"

    count = (x2 - x1) / (v1 - v2)

    if count >= 1:
        if count % 1 == 0: # check is integer
            count = int(count)
            return "YES"
        else:
            # maybe 2.xxx
            return "NO"
    else:
        # maybe 0.xxxx
        return "NO"




if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # first_multiple_input = input().rstrip().split()

    # x1 = int(first_multiple_input[0])

    # v1 = int(first_multiple_input[1])

    # x2 = int(first_multiple_input[2])

    # v2 = int(first_multiple_input[3])
    # x1 = 0
    # v1 = 3
    # x2 = 4
    # v2 = 2
    # x1 = 1817
    # v1 = 9931
    # x2 = 8417
    # v2 = 190
    # 21 6 47 3
    # result = kangaroo(0, 3, 4, 2)

    # result = kangaroo(21,6, 47, 3)
    result = kangaroo(43, 2, 70, 2)
    print(result)

    # fptr.write(result + '\n')

    # fptr.close()
