
def longestCommonPrefix(strs):
    for i in range(len(strs) - 1):
        str1 = strs[i]
        str2 = strs[i+1]
        if len(str1) < len(str2)
            if str1 in str2:
                common = str1
        else:
            if str2 in str1:
                common = str2
        # str_len = len(str1) if len(str1) < len(str2) else len(str2)
        # common = []
        # for i in range(str_len):
        #     if str1[i] == str2[i]:
        #         common.append(str1[i])

        print str1, str2

    

if __name__ == '__main__':
    x = ["flower","flow","flight"]
    # x = ["dog","racecar","car"]
    y = longestCommonPrefix(x)
    print y 