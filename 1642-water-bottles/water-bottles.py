class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        filledBottles = numBottles
        emptyBottles = 0

        bottlesDrank = 0

        while filledBottles:
            #drink bottles
            #update bottles drank

            bottlesDrank+=filledBottles
            emptyBottles+=filledBottles
            filledBottles = 0
            #exchange exmpty bottles
            filledBottles+=emptyBottles//numExchange
            emptyBottles = emptyBottles%numExchange
        
        #print(filledBottles, emptyBottles)

        return bottlesDrank

