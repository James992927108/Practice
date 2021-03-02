import sys

sys.dont_write_bytecode = True

import unittest

import bool_to_word

class Test_bool_to_word(unittest.TestCase):
    def test_true(self):
        self.assertEquals(bool_to_word.bool_to_word(True), 'Yes')

    def test_false(self):
        self.assertEquals(bool_to_word.bool_to_word(False), 'No')

if __name__ == '__main__':
    unittest.main()
