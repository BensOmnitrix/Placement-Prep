#include <bits/stdc++.h>
using namespace std;

void printName(int n){
    if(n == 0) return;
    cout << "Lakshay Batra" << endl;
    printName(n-1);
}

int main(){
    int n;
    cin >> n;
    printName(n);
    return 0;
}