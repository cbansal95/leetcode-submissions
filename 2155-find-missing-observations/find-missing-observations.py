class Solution:
    def missingRolls(self, rolls: List[int], mean: int, n: int) -> List[int]:
        total = mean * (len(rolls) + n)
        target = total - sum(rolls)
        if target > n*6 or target < n:
            return []
        meand = target // n
        modd = target % n
        out = [meand] * n
        for i in range(0,modd):
            out[i]+=1

        return out