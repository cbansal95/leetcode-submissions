class Solution:
    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
        dirs = ['N','E','S','W']
        dir = 'N'
        curr = [0,0]
        maxDist = 0
        obsDict = {}
        for obstacle in obstacles:
            obsDict[f"{obstacle[0]}_{obstacle[1]}"] = True
        #print(obsDict)
        for c in commands:
            #print(dir, curr)
            if c == -1:
                temp = dirs.index(dir)
                dir = dirs[(temp+1)%len(dirs)]
                continue
            if c == -2:
                temp = dirs.index(dir)
                dir = dirs[temp-1]
                continue
            match dir:
                case 'N': 
                    #curr[1]+=c
                    for i in range(curr[1]+1,curr[1]+1+c):
                        if f"{curr[0]}_{i}" in obsDict:
                            break
                        else:
                            curr[1] = i
                case 'E': 
                    #curr[0]+=c
                    for i in range(curr[0]+1,curr[0]+1+c):
                        if f"{i}_{curr[1]}" in obsDict:
                            break
                        else:
                            curr[0] = i
                case 'S': 
                    #curr[1]-=c
                    for i in range(curr[1]-1,curr[1]-1-c,-1):
                        if f"{curr[0]}_{i}" in obsDict:
                            break
                        else:
                            curr[1] = i
                case 'W': 
                    #curr[0]-=c
                    for i in range(curr[0]-1,curr[0]-1-c,-1):
                        if f"{i}_{curr[1]}" in obsDict:
                            break
                        else:
                            curr[0] = i
            maxDist = max(maxDist, curr[0]**2+curr[1]**2)
        #print(dir,curr)
        return maxDist
