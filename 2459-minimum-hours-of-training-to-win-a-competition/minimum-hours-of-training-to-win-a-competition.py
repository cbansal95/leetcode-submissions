class Solution:
    def minNumberOfHours(self, initialEnergy: int, initialExperience: int, energy: List[int], experience: List[int]) -> int:
        neededExpHours = 0
        out = 0
        for e in experience:
            if e >= initialExperience:
                delta = (e - initialExperience) + 1
                neededExpHours+=delta
                initialExperience+=delta
            initialExperience+=(e)
        
        neededEnergyHours = (sum(energy) + 1) - initialEnergy
        
        if neededExpHours > 0:
            out+=neededExpHours
        if neededEnergyHours > 0:
            out+=neededEnergyHours
        return out