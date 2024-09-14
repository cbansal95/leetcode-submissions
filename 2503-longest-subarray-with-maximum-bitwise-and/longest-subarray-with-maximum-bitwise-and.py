class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        maxVal = max(nums)
        maxCount = 0
        i = 0
        while i < len(nums):
            if nums[i] == maxVal:
                j = i
                count = 0
                while j < len(nums) and nums[j] == maxVal:
                    count+=1
                    j+=1
                i = j
                maxCount = max(count, maxCount)
            else:
                i+=1


        return maxCount