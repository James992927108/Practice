#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeInWords' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. INTEGER h
#  2. INTEGER m
#

def IntNumToString(x):
    return {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
    }[x]

def timeInWords(h, m):
    # Write your code here
    new_h = IntNumToString(h)
    
    if m == 30:
        return "half past {}".format(new_h)
    elif  m > 0 and m < 30:
        if m == 1:
            return "{} minute past {}".format(IntNumToString(m), new_h)
        if m < 15:
            return "{} minutes past {}".format(IntNumToString(m), new_h)
        elif m == 15:
            return "quarter past {}".format(new_h)
        elif m > 15 and m <= 20:
            return "{} minutes past {}".format(new_h)
        elif m > 20 and m < 30:
            return "{} {} minutes past {}".format(IntNumToString(20), IntNumToString(m - 20), new_h)
    elif m > 30 and m < 60:
        new_h = IntNumToString(h + 1)
        if m == 45:
            return "quarter to {}".format(new_h)
        elif (m < 45 and m > 30) or (m > 45 and m < 60) :
            if 60 - m > 20:
                return "{} {} minutes to {}".format(IntNumToString(20) , IntNumToString(60 - 20 - m), new_h)
            else:
                return "{} minutes to {}".format(IntNumToString(60 - m), new_h)
    elif m == 0:
        return "{} o' clock".format(new_h)

    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    h = int(input().strip())

    m = int(input().strip())

    result = timeInWords(h, m)

    fptr.write(result + '\n')

    fptr.close()
