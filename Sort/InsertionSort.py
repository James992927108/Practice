
def main():
    input_str = "29,78,42,38,32,31,15,69,71,74"
    data = input_str.split(",")
    print(data)
    for i in range(1, len(data), 1):
        temp_data = data[i]
        for j in range(i, -1, -1):
            if temp_data < data[j - 1]:
                data[j] = data[j-1]
        data[j] = temp_data
    print(data)


if __name__ == '__main__':
    main()