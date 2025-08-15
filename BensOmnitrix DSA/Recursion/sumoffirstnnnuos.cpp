#include <bits/stdc++.h>
using namespace std;

// void func(int i,int sum){
//     if(i < 1){
//         cout << sum << " ";
//         return;
//     }
//     func(i-1,sum + i);
// }

int func(int n){
    if(n == 0) return 0;
    return n + func(n-1);
}

int main(){
    int n;
    cin >> n;
    cout << func(n);
}