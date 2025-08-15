#include <bits/stdc++.h>
using namespace std;

// void reverse_(vector<int> &a,int start){
//     if(start >= a.size()/2) return;
//     swap(a[start],a[a.size() - 1 - start]);
//     reverse_(a,start + 1);
// }
// vector<int> a = {1,2,3,4,2};
// reverse_(a,0);
// cout << "end" << endl;
// for(auto &x:a){
//     cout << x << " ";
// }

bool palindrome(string s,int start,int end){
    if(start >= end) return true;
    if(s[start] != s[end]){
        return false;
    }
    return palindrome(s,start + 1,end - 1);
}

int main(){
    string s = "abbad";
    bool ans = palindrome(s,0,s.size()-1);
    if(ans){
        cout << "YEs";
    }
    else{
        cout << "NO";
    }
}
