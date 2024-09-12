class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        allowedSet = set(allowed)
        out = 0

        for word in words:
            counter=0
            for char in word:
                if char not in allowedSet:
                    break
                counter+=1
            if counter == len(word):
                out+=1
        
        return out