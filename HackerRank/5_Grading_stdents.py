#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'gradingStudents' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY grades as parameter.
#

def gradingStudents(grades):
    # Write your code here
    for index, grade in enumerate(grades):
        base = math.floor(grade / 5)
        mod = grade % 5
        # print(base, mod)
        if mod > 5:
            nearest_multiple = 5 * base
        elif mod <= 5:
            nearest_multiple = 5 * (base + 1)
        print(nearest_multiple)
        if nearest_multiple - grade < 3:
            if nearest_multiple < 40:
                continue
            grades[index] = nearest_multiple
    
    return grades

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # grades_count = 4

    grades = [73, 67, 38, 33, 36, 37, 38]

    # for _ in range(grades_count):
    #     grades_item = int(input().strip())
    #     grades.append(grades_item)

    result = gradingStudents(grades)

    print(result)

    # fptr.write('\n'.join(map(str, result)))
    # fptr.write('\n')

    # fptr.close()
