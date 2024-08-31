class Solution:
    def countEven(self, num: int) -> int:
        temp = num//20
        count = 0
        print(temp)
        for i in range((temp*20), num+1):
            if(checkSum(i)):
                count+=1
        count+=(temp*10)-1
        return count
    
def checkSum(num):
    print(num)
    sum = 0
    while num > 0:
        sum+=num%10
        num = num//10
    return sum%2 == 0