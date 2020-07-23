#include <iostream>
#include <vector>
#include "Screen.h"

class Window_mgr
{
public:
    using ScreenIndex = std::vector<Screen>::size_type;
    void clear(ScreenIndex);

private:
    std::vector<Screen> screens_{
        Screen(24, 80, ' ')};
}
