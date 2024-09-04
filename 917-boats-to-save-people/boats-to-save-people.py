class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        count, l, r = 0, 0, len(people) - 1
        while l!=r and r > l:
            if people[l] + people[r] <= limit:
                l+=1
                r-=1
                count+=1
            else:
                r-=1
                count+=1
        if(l == r): count+=1
        return count
        