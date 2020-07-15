#include <iostream>
#include <vector>
 
class CBuilderA
{
public:
    int DoSomething() const { return 10; }
};
 
class CBuilderB
{
public:
    float DoSomething() const { return 10.2f; }
};
 
template<typename B>
void Foo(const B& builder)
{
    decltype(builder.DoSomething()) val = builder.DoSomething();
     
    //You can use auto to do the same thing
    auto val2 = builder.DoSomething();
 
    //That's why we need decltype 
    std::vector<decltype(val)> vec;
    vec.push_back(val);
    vec.push_back(val2);
 
    std::cout << vec[0]  << ", " << vec[1] << std::endl;
}
 
int main(){
    CBuilderA a;
    Foo(a);
     
    CBuilderB b;
    Foo(b);
    
    return 0;
}

