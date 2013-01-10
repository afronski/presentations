import unittest

def hanoi(n):
    return 0

class TestGame(unittest.TestCase):
    def setUp(self):
        pass

    def testSimple(self):
        assert hanoi(3) == 7, "3 krążki hanoi da się przenieść w 7 ruchach"

if __name__ == "__main__":
    unittest.main()
