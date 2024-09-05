def mergeSort(a):
    if len(a) > 2:
        mid = len(a)//2
        return mergeSorted(a[0:mid], a[mid:])
    if len(a) == 2 and a[0]["freq"] > a[1]["freq"]:
        a.reverse() 
    return a

def mergeSorted(a1,a2):
    out = []
    c1,c2 = 0,0
    while c1 < len(a1) and c2 < len(a2):
        if a1[c1]["freq"] < a2[c2]["freq"]:
            out.append(a1[c1])
            c1+=1
        elif a1[c1]["freq"] > a2[c2]["freq"]:
            out.append(a2[c2])
            c2+=1
        else:
            out.append(a1[c1])
            out.append(a2[c2])
            c1+=1
            c2+=1
    while c1 < len(a1):
        out.append(a1[c1])
        c1+=1
    while c2 < len(a2):
        out.append(a2[c2])
        c2+=1
    return out

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

        # temp = mergeSort(temp)
        temp.sort(key=lambda character: character["freq"], reverse=True)
        print(temp)
        for i,to in enumerate(temp):
            operations = operations + ((i//8)+1) * to["freq"]
        return operations