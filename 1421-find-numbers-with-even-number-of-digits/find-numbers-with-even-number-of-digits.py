class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        count = 0
        for i in nums:
            num_str = str(i)
            if len(num_str)%2 == 0: 
                count = count + 1
        return count