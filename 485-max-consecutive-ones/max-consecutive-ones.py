class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count,maxN = 0,0
        for i in nums:
            if i == 1:
                count+=1
            else:
                maxN = max(count,maxN)
                count = 0
        
        return max(count,maxN)