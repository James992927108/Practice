def solution(N):
    # for codilty
    
    return len(max(str(bin(N))[2:].strip('0').split("1")))
    
    # for leetcode 

    # last = None
    # ans = 0
    # for i in range(32):
    #     if (N >> i) & 1:
    #         if last is not None:
    #             ans = max(ans, i - last)
    #         last = i
    # return ans

if __name__ == '__main__':
    N = 1041
    result = solution(N)
    print(result)
