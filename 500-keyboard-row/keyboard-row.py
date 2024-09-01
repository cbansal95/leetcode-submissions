class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        out = []
        s1 = "qwertyuiop"
        s2 = "asdfghjkl"
        s3 = "zxcvbnm"
        for w in words:
            wl = w.lower()
            count = 0
            if wl[0] in s1:
                for c in wl:
                    if c in s1: count+=1
            elif wl[0] in s2:
                for c in wl:
                    if c in s2: count+=1
            elif wl[0] in s3: 
                for c in wl:
                    if c in s3: count+=1
            if count == len(wl):
                out.append(w)
        return out