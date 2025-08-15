#include <bits/stdc++.h>
using namespace std;

// void name(int count){
//     if(count == 5) return;
//     cout << "Lakshay Batra" << endl;
//     name(count+1);
// }
// int count = 0;
// name(count);

// void print(int i,int n){
//     if(i < 1) return;
//     cout << i << endl;
//     print(i-1,n);
// }
// int n;
// cin >> n;
// print(n,n);

// void print(int i,int n){
//     if(i > n) return;
//     print(i+1,n);
//     cout << i << endl;
// }
// int n;
// cin >> n;
// print(1,n);

void result(int i, int sum)
{
    if (i < 1)
    {
        cout << sum << endl;
        return;
    }
    result(i-1,sum+i);
}

void result1(int i,int n,int sum){
    if(i > n){
        cout << sum << endl;
        return;
    }
    result1(i+1,n,sum + i);
}

int functionalresult(int n){
    if(n == 0){
        return 0;
    }
    return n + functionalresult(n-1);
}

int factorial(int n){
    if(n == 0 || n==1) return 1;
    return n*factorial(n-1);
}

int main()
{
    int n;
    cin >> n;
    int x = factorial(n);
    cout << x;
}