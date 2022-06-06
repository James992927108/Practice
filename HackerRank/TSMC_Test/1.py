
def getcount(R,L):
    if len(R) == 0 or len(L) == 0:
        temp = 0
    elif len(R) - len(L) == 0:
        temp = min(len(R),len(L)) * 2
    else:
        temp = min(len(R),len(L)) * 2
    return temp

def getMaxDeletions(s):
    # Write your code here
    U = []
    D = []
    L = []
    R = []
    for element in s:
        if element == 'U':
            U.append(element)
        elif element == 'D':
            D.append(element)
        elif element == 'L':
            L.append(element)
        else:
            R.append(element)
    
    temp = getcount(R,L)
    print(temp)
    temp2 = getcount(U,D)
    print(temp2)
    return temp + temp2

if __name__ == '__main__':
    s = 'RUDRL'
    result = getMaxDeletions(s)