class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count,maxN = 0,0
        for i in nums:
            if i == 1:
                count+=1
                maxN = max(count,maxN)
            else:
                count = 0
        return maxN