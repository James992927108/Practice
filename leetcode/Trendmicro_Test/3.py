
def getbinary(N):
    return int(str(bin(N))[2:])
def solution(A):
    
    for index, element in enumerate(A):
        if index == 0:
            sum = getbinary(element)
        else:
            sum = sum & getbinary(element)
    sum = getbinary(sum)
    num = int(str(sum),2)
    if num == 0:
        return 1
    elif num == getbinary(A[0]):
        return 2
    else:
        return 3

if __name__ == '__main__':
    # A = [13,7,2,8,3]
    # A = [1, 2, 4, 8]
    A = [16, 16]
    result = solution(A)
    print(result)
