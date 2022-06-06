#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    # Write your code here
    s_temp = s.split(":")
    if "PM" in s and int(s_temp[0]) != 12:
        s_temp[0] = str(int(s_temp[0]) + 12)
    if "AM" in s and int(s_temp[0]) == 12:
        s_temp[0] = str("00")
    s_temp[-1] = s_temp[-1][:-2]
    new_s = ":".join(s_temp)
    return new_s

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # s = input()
    # s = "07:05:45PM"
    # s = "06:40:03AM"
    # s = "12:00:00AM"
    s = "12:45:54PM"

    result = timeConversion(s)
    print(result)
    # fptr.write(result + '\n')

    # fptr.close()
