#include <iostream>
#include <string>

char &get_val(std::string &str,const std::string::size_type ix){
    return str[ix];
}

int main()
{
    std::string s("a value");
    std::cout << s << std::endl;
    get_val(s, 0) = 'A';
    // s[0] = 'A';
    std::cout << s << std::endl;

    return 0;
}