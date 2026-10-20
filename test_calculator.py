import unittest
from calculator import calculate_discount

class TestCalculator(unittest.TestCase):
    def test_normal_discount(self):
        self.assertEqual(calculate_discount(100000, 10), 90000)

    def test_zero_discount(self):
        self.assertEqual(calculate_discount(50000, 0), 50000)

    def test_full_discount(self):
        self.assertEqual(calculate_discount(50000, 100), 0)

    def test_invalid_discount(self):
        with self.assertRaises(ValueError):
            calculate_discount(100000, -5)
        with self.assertRaises(ValueError):
            calculate_discount(100000, 105)

if __name__ == '__main__':
    unittest.main()
