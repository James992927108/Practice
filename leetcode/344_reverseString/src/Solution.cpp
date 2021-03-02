# include "Solution.h"

std::vector<char> Solution::reverseString(std::vector<char>& s){
    std::vector<char>::reverse_iterator it;
    for(it = s.rbegin(); it != s.end(); it++){
        std::cout << *it << " ";
    }
    std::cout << std::endl;
    return ;
}
