class Solution:
    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:
        for i in range(1,len(arr)):
            arr[i]^=arr[i-1]
        
        return [arr[end] ^ arr[start - 1] if start > 0 else arr[end]
            for start,end in queries]