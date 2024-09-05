class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        for i,c in enumerate(haystack):
            if c == needle[0]:
                if haystack[i:i+len(needle)] == needle:
                    return i
        return -1 
        