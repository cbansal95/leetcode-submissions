class Solution:
    def getLucky(self, s: str, k: int) -> int:
        s1 = ""
        for c in s:
            s1+=str(ord(c)-96)
        for i in range(0,k):
            temp = 0
            for c in s1:
                temp+=int(c)
            s1=str(temp)
        return int(s1)