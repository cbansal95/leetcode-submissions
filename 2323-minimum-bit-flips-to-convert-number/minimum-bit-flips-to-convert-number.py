class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        if start == goal:
            return 0
        else:
            diff = bin(start^goal)
            count = 0
            for c in diff:
                if c == '1':
                    count+=1
            return count