#include <bits/stdc++.h>
using namespace std;

string postfixToinfix(string s)
{
    int n = s.size();
    stack<string> st;
    for (int i = 0; i < n; i++)
    {
        if ((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9'))
        {
            st.push(string(1,s[i]));
        }
        else
        {
            string second = st.top();
            st.pop();
            string one = st.top();
            st.pop();
            string result = "(" + one + string(1,s[i]) + second + ")";
            st.push(result);
        }
    }
    return st.top();
}

int main()
{
    string s = "AB-DE+F*/";
    cout << postfixToinfix(s) << endl;
    return 0;
}
