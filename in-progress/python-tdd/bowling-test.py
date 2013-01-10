import unittest
import bowling


class TestGame(unittest.TestCase):
    def setUp(self):
        self.game = bowling.Game()

    def testGutterGameHasZeroScore(self):
        for i in range(20):
            self.game.roll(0)
        assert self.game.score() == 0, "Score is zero"

    def testGameAllOnesHasScoreOfTwenty(self):
        for i in range(20):
            self.game.roll(1)
        assert self.game.score() == 20

    def testGameThrowsExceptionWithMoreThanTwentyOneRolls(self):
        try:
            for i in range(22):
                self.game.roll(10)
        except ValueError:
            pass
        else:
            self.fail("Expected a ValueError")

    def testGameWithOneSpare(self):
        self.game.roll(1)
        self.game.roll(9)
        self.game.roll(5)

        for i in range(17):
            self.game.roll(0)

        assert self.game.score() == 20

    def testGameWithOneStrike(self):
        self.game.roll(10)
        self.game.roll(1)
        self.game.roll(1)

        for i in range(17):
            self.game.roll(0)

        assert self.game.score() == 14

    def testPerfectGameScores300(self):
        for i in range(12):
            self.game.roll(10)
        assert self.game.score() == 300, "Perfect Game should score 300"

if __name__ == "__main__":
    unittest.main()
