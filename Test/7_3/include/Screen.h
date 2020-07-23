#include <iostream>
#include "Window_mgr.h"
class Screen
{
    friend void Window_mgr::clear(ScreenIndex);

public:
    using pos = std::string::size_type;
    Screen() = default;
    ~Screen();

    Screen(pos ht, pos wd, char c) : cursor_(ht), width_(wd), contents_(ht * wd, c)
    {
    }

    void some_member() const;

    char get() const;

    char get(pos r, pos c) const;

    Screen &move(pos r, pos c);

    Screen &set(char ch);

    Screen &set(pos r, pos c, char ch);

private:
    mutable size_t access_ctr;

    pos cursor_ = 0;

    pos height_ = 0;

    pos width_ = 0;

    std::string contents_;
};
