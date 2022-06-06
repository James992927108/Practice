import math
import os
import random
import re
import sys

#
# Complete the 'simpleArraySum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY ar as parameter.
#

def simpleArraySum(ar):
    total = 0
    for i in range(len(ar)):
        total += ar[i]
    return total
    # Write your code here
if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    ar_count = int(input().strip())

    ar = list(map(int, input().rstrip().split()))
    print(ar)

    result = simpleArraySum(ar)

    print(result)
    # fptr.write(str(result) + '\n')

    # fptr.close()
