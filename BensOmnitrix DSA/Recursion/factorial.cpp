#include <bits/stdc++.h>
using namespace std;

// void func(int n, int result)
// {
//     if (n == 1 || n == 0){
//         cout << result << " ";
//         return;
//     }
//     func(n - 1, result * n);
// }

int func(int n){
    if(n == 1 || n == 0){
        return 1;
    }
    return n*func(n-1);
}

int main()
{
    int n;
    cin >> n;
    // func(n, 1);
    cout << func(n);
    return 0;
}