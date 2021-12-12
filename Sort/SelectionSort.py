def swap(data, x, y):
    temp = data[x]
    data[x] = data[y]
    data[y] = temp

def main():
    input_str = "43,19,90,19,19,87,42,42,21,22"
    data = input_str.split(",")
    print(data)
    for i in range(len(data)):
        min_index = i
        for j in range(i + 1, len(data)):
            if data[j] < data[min_index]:
                min_index = j
        if i != min_index:
            swap(data, i, min_index)
    print(data)    

if __name__ == '__main__':
    main()