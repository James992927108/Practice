
def solution(A):
    if len(A) == 0:
        return 0
    else:
        # head = A[0]
        # tail = A[head]
        # beans_list.append(tail)
        # while head != tail:
        #     tail = A[tail]
        #     beans_list.append(tail)
        all_beans_list = []
        for index in range(len(A)):
            beans_list = []
            head = A[index]
            tail = A[head]
            if head not in beans_list:
                beans_list.append(tail)
                while head != tail:
                    tail = A[tail]
                    beans_list.append(tail)
            all_beans_list.append(beans_list)
            max_list = len(max(all_beans_list))

        return max_list

if __name__ == '__main__':
    A = [5,4,0,3,1,6,2]
    result = solution(A)
    print(result)
