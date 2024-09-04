def mergesort(a):
    if len(a) > 2:
        mid = len(a)//2
        return mergesorted(mergesort(a[0:mid]), mergesort(a[mid:]))
    elif len(a) == 2:
        if a[0]["height"] > a[1]["height"]: return[a[1],a[0]]
        else: return a
    return a

def mergesorted(a1: list,a2: list):
    out = []
    c1,c2 = 0,0
    while c1 < len(a1) and c2 < len(a2):
        if a1[c1]["height"] < a2[c2]["height"]:
            out.append(a1[c1])
            c1+=1
        elif a1[c1]["height"] > a2[c2]["height"]:
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
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        obj = {}
        temp = []
        out = []
        for i in range(0,len(names)):
            obj = {"height": heights[i], "name": names[i]}
            temp.append(obj)
        temp = mergesort(temp)
        temp.reverse()
        for item in temp:
            out.append(item["name"])
        return out