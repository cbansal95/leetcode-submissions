class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        neg, pos = {}, {}
        maxNum = -1
        for n in nums:
            if n > 0:
                if -1*n in neg:
                    maxNum = max(maxNum, n)
                pos[n] = True
            if n < 0:
                if -1*n in pos:
                    maxNum = max(maxNum, abs(n))
                neg[n] = True
        return maxNum