MAX_ROLLS = 21
FRAMES = 10
STRIKE = 10
SPARE = 10


class Game:
    def __init__(self):
        self.scoreArr = []

    def roll(self, pins):
        if self.numberOfRollsTaken() > MAX_ROLLS:
            raise ValueError
        self.scoreArr.append(pins)

    def score(self):
        score = 0
        currentRoll = 0
        frame = 0

        while frame < FRAMES:
            if self.scoreArr[currentRoll] == STRIKE:
                score += self.scoreNextTwoBalls(currentRoll)
                currentRoll += 1
            elif self.frameScore(currentRoll) == SPARE:
                score += self.scoreNextTwoBalls(currentRoll)
                currentRoll += 2
            else:
                score += self.frameScore(currentRoll)
                currentRoll += 2

            frame = frame + 1
        return score

    def numberOfRollsTaken(self):
        return len(self.scoreArr) + 1

    def scoreNextTwoBalls(self, index):
        return self.scoreArr[index] + self.scoreArr[index + 1] + self.scoreArr[index + 2]

    def frameScore(self, index):
        return self.scoreArr[index] + self.scoreArr[index + 1]
