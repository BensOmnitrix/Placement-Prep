#include <bits/stdc++.h>
using namespace std;

string postfixToprefix(string s){
    int n = s.size();
    stack<string> st;
    for(int i=0;i<n;i++){
        if((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9')){
            st.push(string(1,s[i]));
        }
        else{
            string top1 = st.top();
            st.pop();
            string top2 = st.top();
            st.pop();
            string result = string(1,s[i]) + top2 + top1;
            st.push(result);
        }
    }
    return st.top();
}

int main(){
    string s = "AB-DE+F*/";
    cout << postfixToprefix(s) << endl;
    return 0;
}