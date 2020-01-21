
def reverse(x):
    """
    :type x: int
    :rtype: int
    """
    if x < 0:
        x = str(x)[:0:-1]
        x = int("-" + x)
    else:
        x = str(x)[::-1]
    x = int(x)
    if x > 2**31 - 1 or x < -2**31:
        return 0
    return x

if __name__ == '__main__':
    x = 1534236469
    y = reverse(x)
    print y 