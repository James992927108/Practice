#include <iostream>
using namespace std;
int main(void)
    {
    int i,j,k;
    for(i=0;i<3;++i)
    {
        for(j=1;j<=3;++j)
        {
            for(k=1;k<=9;++k)
            {
                cout<<(i*3+j)<<"*"<<k<<"="<<(i*3+j)*k<<(k<9?'\t':'\n');
            }
        }
        cout << endl;
    }
    return 0;
}