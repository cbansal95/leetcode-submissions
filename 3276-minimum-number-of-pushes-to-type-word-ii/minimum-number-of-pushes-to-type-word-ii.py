class Solution:
    def minimumPushes(self, word: str) -> int:
        obj = {}
        temp = []
        operations = 0
        for c in word:
            if c in obj:
                obj[c]+=1
            else:
                obj[c]=1
        for c in list(obj.keys()):
            to = {}
            to["char"] = c
            to["freq"] = obj[c]
            temp.append(to)
        temp.sort(key=lambda character: character["freq"], reverse=True)
        for i,to in enumerate(temp):
            operations = operations + ((i//8)+1) * to["freq"]
        return operations