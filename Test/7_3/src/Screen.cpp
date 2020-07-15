#include "Screen.h"

Screen::~Screen()
{
}

void Screen::some_member() const
{
    ++access_ctr;
}

char Screen::get() const
{
    return contents_[cursor_];
}

char Screen::get(pos r, pos c) const
{
    pos row = r * width_;
    return contents_[row + c];
}

Screen &Screen::move(pos r, pos c)
{
    pos row = r * width_;
    cursor_ = row + c;
    return *this;
}

Screen &Screen::set(char ch)
{
    contents_[cursor_] = ch;
    return *this;
}

Screen &Screen::set(pos r, pos c, char ch)
{
    pos row = r * width_;
    contents_[row + c] = ch;
    return *this;
}
