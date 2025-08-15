#include <bits/stdc++.h>
using namespace std;

bool func(string s,int low,int high){
    if(high <= low) return true;
    if(s[low] != s[high]) return false;
    return func(s,low+1,high-1);
}

int main(){
    string s = "madam";
    cout << func(s,0,s.size()-1);
}