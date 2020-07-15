#include "MySqrt.h"

int Solution::mySqrt(int x)
{
    long long l = 1, r = x, m;
    while (l <= r)
    {
        m = (l + r) >> 1;
        if (x < m * m)
        {
            r = m - 1;
        }
        else
        {
            l = m + 1;
        }
    }
    return l - 1;
}