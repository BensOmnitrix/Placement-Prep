#include <bits/stdc++.h>
using namespace std;

int main(){
    int x,n;
    cin >> x >> n;
    long long ans = 1;
    long long power = n;
    while(n != 0){
        if(n%2 == 0){
            int temp = x*1LL*x;
            x = temp;
            n = n/2;
        }
        else{
            n = n-1;
            ans = ans*1LL*x;
        }
    } 
    return ans;
}