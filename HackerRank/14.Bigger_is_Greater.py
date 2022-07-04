w = 'acdb'
n = len(w)
w = list(w)

i = n - 2
while i >= 0 and w[i] >= w[i + 1]:
    i -= 1
    print("1: {}".format(w))
if i == -1:
    print("no")
else:
    j = n - 1
    while j >= i and w[j] <= w[i]:
        j -= 1
        print(w)
    w[i], w[j] = w[j], w[i]
    w = "".join(w)
    print(w[:i + 1] + w[i+1:])
    print(w)
    