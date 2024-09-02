class Solution:
    def chalkReplacer(self, chalk: List[int], k: int) -> int:
        total = sum(chalk)
        k = k%total
        print(k)
        for i,c in enumerate(chalk):
            if k >= c:
                k=k-c
            else:
                return i