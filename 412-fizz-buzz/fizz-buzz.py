class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        out = []
        for i in range(1,n+1):
            temp = ""
            if i%3 == 0: temp+="Fizz"
            if i%5 == 0: temp+="Buzz"
            if len(temp) > 1:
                out.append(temp)
            else:
                out.append(str(i))
        return out