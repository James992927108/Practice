
def sum_N(N):
    str_N = str(N)
    sum = 0
    for element in str_N:
        sum += int(element)
    return sum

def solution(N):
    target_sum = sum_N(N)
    # for codilty
    for i in range(N+1,50000):
        if sum_N(i) == target_sum:
            # print(i,sum_N(i))
            break
    return i

if __name__ == '__main__':
    # N = 1000
    N = 28
    result = solution(N)
    print(result)
