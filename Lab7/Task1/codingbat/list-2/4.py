def sum67(nums):
    nums=nums[:]
    i=nums.index(6)
    j=nums.index(7,i)
    del nums[i:j+1]
    return sum(nums)
nums = [1, 2, 2, 6, 99, 99, 7]
print(sum67(nums))