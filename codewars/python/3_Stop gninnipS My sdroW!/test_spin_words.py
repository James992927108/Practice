import sys
sys.dont_write_bytecode = True

import unittest
import spin_words


"""
Write a function that takes in a string of one or more words, and returns the
same string, but with all five or more letter words reversed (Just like the name
of this Kata). Strings passed in will consist of only letters and spaces. Spaces
will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test
"""

class Test_spin_words(unittest.TestCase):
    def test_spin_words_1(self):
        self.assertEquals(spin_words.spin_words("Welcome"), "emocleW")
    def test_spin_words_2(self):
        self.assertEquals(spin_words.spin_words("This is a test"), "This is a test")
    def test_spin_words_3(self):
        self.assertEquals(spin_words.spin_words("Hey fellow warriors"), "Hey wollef sroirraw")


if __name__ == '__main__':
    unittest.main()        