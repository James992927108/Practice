# Given an integer x, return true if x is palindrome integer.
# An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

class Solution:
    def isPalindrome(self, x: int) -> bool:
        s_str = str(x)
        print(s_str)
        loop_count = int(len(s_str)/2)
        result = True
        for i in range(loop_count):
            if s_str[i] != s_str[len(s_str) - i - 1]:
                result = False
        return result

def main():
    x = 121
    x = -121
    S = Solution()
    return S.isPalindrome(x)

if __name__ == '__main__':
    result = main()
    print(result)