
def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    for i , x in enumerate(nums):
        # print i, x
        if target - x in nums[i+1:]:
            # print nums[i+1:]
            return [i, nums[i+1:].index(target - x) + i + 1]
    

if __name__ == '__main__':
    nums = [2, 7, 11, 15]
    target = 9
    x = twoSum(nums,target)
    print x 