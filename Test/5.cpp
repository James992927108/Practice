#include <iostream>
class Base
{
    public:
        Base()
        {
            std::cout << "Calling Base()\n";
        }
        ~Base()
        {
            std::cout << "Calling ~Base()\n";
        }
};

class Derived : public Base
{
    private:
        int *m_array;

    public:
        Derived(int length)
        {
            std::cout << "Calling Derived()\n";
            m_array = new int[length];
        }

        ~Derived()
        {
            std::cout << "Calling ~Derived()\n";
            delete[] m_array;
        }
};

int main()
{
    Derived *derived = new Derived(5);
    
    // Derived *derived
    // {
    //     new Derived(5)
    // };

    // Base *base{derived};
    Base *base = derived;
    delete derived;
    // delete base;

    return 0;
}