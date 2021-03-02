#include <iostream>
using namespace std;
class A
{
    public:
    A(){cout << "Ain \n";}
    ~A(){cout << "Aout \n";}
};

class B : public A
{
    public:
    B(){cout << "Bin \n";}
    ~B(){cout << "Bout \n";}
};

int main()
{
    cout << "B class B object inherit A\n";
    B *b = new B();
    delete b;

    cout << "A class B object\n";
    A *a = new B();
    delete a;
    return 0;
}