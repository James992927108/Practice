#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* longestCommonPrefix(char** strs, int strsSize){
    // for (int i = 0; i < strsSize; i++)
    // {
    //     printf("%s\n", strs[i]);
    // }
    char *temp;
    temp = strs[0];
    // printf("-- %s\n", temp);
    int total_len = 200;
    for (int i = 1; i < strsSize; i++)
    {
        int j = 0;
        while (temp[j] && strs[i][j] && temp[j] == strs[i][j] && j < total_len){
            // printf("**%c\n", strs[i][j]);
            j++ ;
        }
        total_len = j;
        printf("%d\n", total_len);

    }
    char *ans = (char *)malloc(sizeof(char) * total_len + 1);
    strncpy(ans, strs[0], total_len);
    ans[total_len] = '\0';
    return ans;
}

int main()
{
    char* strs[] ={"flower","flow","flight"};
    // char** temp;
    // temp = &strs[0];
    // printf("%s\n", *temp);

    int strsSize = 3;
    char* result;

    result = longestCommonPrefix(strs, strsSize);

    printf("%s\n", result);
    return 0;
}
