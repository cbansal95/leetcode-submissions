class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        counter = 1
        while counter <= len(s)//2:
            if s == s[counter:] + s[:counter]:
                return True
            counter+=1
        return False