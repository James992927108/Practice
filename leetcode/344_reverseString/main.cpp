#include <vector>

#include "Solution.h"

int main()
{
    std::vector<char> s = {'h', 'e', 'l', 'l', 'o'};
    // std::vector<char> s = [ 'H', 'a', 'n', 'n', 'a', 'h' ];

    Solution result;
    std::vector<char> solution = result.reverseString(s);
    for (int i = 0; i < solution.size(); i++)
    {
        std::cout << solution[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}