class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        odds = []
        evens = []
        output = []
        for value in nums:
            if value%2 == 0:
                evens.append(value)
            else:
                odds.append(value)
        
        odds.sort()
        evens.sort()

        for i in range(0,len(nums)//2):
            output.append(evens[i])
            output.append(odds[i])
        
        return output