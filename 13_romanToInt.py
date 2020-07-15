def romanToInt(s):
    sum=0        
    convert = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    } 

    for i in range(len(s)-1):            
        if convert[s[i]] < convert[s[i+1]]:                
            sum -= convert[s[i]]            
        else:                
            sum += convert[s[i]]        
    sum += convert[s[-1]]        
    return sum
    

if __name__ == '__main__':
    # x = "III"
    # x = "IX"
    # x = "LVIII"
    x = "MCMXCIV"
    y = romanToInt(x)
    print(y)