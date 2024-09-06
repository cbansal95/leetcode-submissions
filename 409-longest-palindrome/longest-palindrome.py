class Solution:
    def longestPalindrome(self, s: str) -> int:
        freq = {}
        chars = set()
        out,found = 0,False
        for char in s:
            if char not in freq:
                freq[char] = 0
            freq[char]+=1
            chars.add(char)
        print(freq)
        for char in chars:
            if freq[char]%2 == 0:
                out+=freq[char]
            else:
                out+=(freq[char]-1)
                found = True
        if found:
            out+=1
        return out