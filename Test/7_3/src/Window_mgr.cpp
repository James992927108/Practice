#include "Window_mgr.h"

void Window::clear(ScreenIndex i){
    Screen &s = screens_[i];
    s.contents_ = std::string(s.height_ * s.width_ , ' ');
}