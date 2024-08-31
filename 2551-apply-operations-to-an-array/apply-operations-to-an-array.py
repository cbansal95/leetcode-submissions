class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        for i in range(0,len(nums) - 1):
            if nums[i] == nums[i+1]:
                nums[i] = nums[i] * 2
                nums[i+1] = 0
        out = []
        for i in nums:
            if i != 0:
                out.append(i)
        return out + (len(nums) - len(out))*[0]    
