#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'countApplesAndOranges' function below.
#
# The function accepts following parameters:
#  1. INTEGER s
#  2. INTEGER t
#  3. INTEGER a
#  4. INTEGER b
#  5. INTEGER_ARRAY apples
#  6. INTEGER_ARRAY oranges
#

def countApplesAndOranges(s, t, a, b, apples, oranges):
    # Write your code here
    # for index, apple in enumerate(apples):
    #     apples[index] = apple + a
    # for index, orange in enumerate(oranges):
    #     oranges[index] = orange + b
    apples = sorted(map(lambda x: x + a, apples))
    oranges = sorted(map(lambda x: x + b, oranges))
    apple_count = 0
    orange_count = 0
    for apple in apples:
        if apple >= s and apple <= t:
            apple_count += 1
    for orange in oranges:
        if orange >= s and orange <= t:
            orange_count += 1
    print(apple_count)
    print(orange_count)

if __name__ == '__main__':
    # first_multiple_input = input().rstrip().split()

    # s = int(first_multiple_input[0])

    # t = int(first_multiple_input[1])

    # second_multiple_input = input().rstrip().split()

    # a = int(second_multiple_input[0])

    # b = int(second_multiple_input[1])

    # third_multiple_input = input().rstrip().split()

    # m = int(third_multiple_input[0])

    # n = int(third_multiple_input[1])

    # apples = list(map(int, input().rstrip().split()))

    # oranges = list(map(int, input().rstrip().split()))
    s = 7
    t = 11
    a = 5
    b = 15
    apples = [-2, 2 ,1]
    oranges = [5, -6]
    countApplesAndOranges(s, t, a, b, apples, oranges)
