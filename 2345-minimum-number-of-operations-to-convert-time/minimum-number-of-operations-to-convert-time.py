class Solution:
    def convertTime(self, current: str, correct: str) -> int:
        currentMin = int(current.split(":")[0])*60 + int(current.split(":")[1])
        correctMin =  int(correct.split(":")[0])*60 + int(correct.split(":")[1])
        diff = correctMin - currentMin
        operations = 0
        operations+=diff//60
        diff = diff%60
        operations+=diff//15
        diff = diff%15
        operations+=diff//5
        diff = diff%5
        operations+=diff//1
        diff = diff%1
        return operations