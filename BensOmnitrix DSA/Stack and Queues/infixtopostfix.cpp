#include <bits/stdc++.h>
using namespace std;

int priority(char t){
    if(t == '^'){
        return 3;
    }
    else if(t == '*' || t == '/'){
        return 2;
    }
    else if(t == '+' || t == '-'){
        return 1;
    }
    return -1;
}

string infixTopostfix(string s){
    int n = s.size();
    stack<char> st;
    string result = "";
    for(int i=0;i<n;i++){
        if((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9')){
            result.push_back(s[i]);
        }
        else if(s[i] == '('){
            st.push(s[i]);
        }
        else if(s[i] == ')'){
            while(!st.empty() && st.top() != '('){
                result.push_back(st.top());
                st.pop();
            }
            st.pop();
        }
        else{
            int priorityOperator = priority(s[i]);
            while(!st.empty() && priority(st.top()) >= priorityOperator){
                result.push_back(st.top());
                st.pop();
            }
            st.push(s[i]);
        }
    }
    while(!st.empty()){
        result.push_back(st.top());
        st.pop();
    }
    return result;
}

int main(){
    string s = "a+b*(c^d-e)";
    cout << infixTopostfix(s) << endl;  
}