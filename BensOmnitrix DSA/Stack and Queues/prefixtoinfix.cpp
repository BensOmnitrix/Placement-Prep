#include <bits/stdc++.h>
using namespace std;

string prefixtoinfix(string s){
    int n = s.size();
    stack<string> st;
    for(int i=n-1;i>=0;i--){
        if((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= '0' && s[i] <= '9') || (s[i] >= 'a' && s[i] <= 'z')){
            st.push(string(1,s[i]));
        }
        else{
            string top1 = st.top();
            st.pop();
            string top2 = st.top();
            st.pop();
            string result = "(" + top1 + string(1,s[i]) + top2 + ")";
            st.push(result);
        }
    }
    return st.top();
}

int main(){
    string s = "*+PQ-MN";
    cout << prefixtoinfix(s);
    return 0;
}