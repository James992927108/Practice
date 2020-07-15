#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'pthFactor' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. LONG_INTEGER n
#  2. LONG_INTEGER p
#

def pthFactor(n, p):
    # Write your code here
    factors = []
    for i in range(1, n + 1):
        if n % i == 0:
            factors.append(i)
    len_factors = len(factors)
    
    if p > len_factors:
        return 0
    else:
        return factors[p-1]

    set(reduce(list.__add__, ([i, n//i] for i in range(1, int(n**0.5) + 1) if n % i == 0)))
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    p = int(input().strip())

    result = pthFactor(n, p)

    fptr.write(str(result) + '\n')

    fptr.close()
