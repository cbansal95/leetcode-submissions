class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        if len(arr) < 3:
            return False
        for i in range(len(arr)):
            if i+2 < len(arr) and arr[i]%2 == 1 and arr[i+1]%2 == 1 and arr[i+2]%2==1:
                return True
            