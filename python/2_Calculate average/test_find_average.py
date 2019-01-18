import sys
sys.dont_write_bytecode = True

import unittest
import find_average

class Test_find_average(unittest.TestCase):
    def test_average_is_2(self):
        array = [ 1, 2, 3 ]
        self.assertEquals(find_average.find_average(array), 2)
    
    def test_average_is_20(self):
        array = [ 10, 20, 30 ]
        self.assertEquals(find_average.find_average(array), 20)

if __name__ == '__main__':
    unittest.main()        