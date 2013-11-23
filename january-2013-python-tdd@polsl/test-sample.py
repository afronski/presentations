import unittest

def hanoi(n):
    return 2 ** n - 1

class TestGame(unittest.TestCase):
    def setUp(self):
        pass

    def testBasicCase(self):
        assert hanoi(3) == 7, "3 krążki hanoi da się przenieść w 7 ruchach"

    def testLowerEdgeCase(self):
        assert hanoi(0) == 0, "0 krążków = 0 ruchów"

    def testTrivialCase(self):
        assert hanoi(1) == 1, "1 krążek = 1 ruch"

    def testAnotherCase(self):
        assert hanoi(2) == 3, "2 krążki = 3 ruchy"

if __name__ == "__main__":
    unittest.main()
