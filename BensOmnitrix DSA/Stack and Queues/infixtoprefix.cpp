#include <bits/stdc++.h>
using namespace std;

int priority(char t)
{
    if (t == '^')
    {
        return 3;
    }
    else if (t == '*' || t == '/')
    {
        return 2;
    }
    else if (t == '+' || t == '-')
    {
        return 1;
    }
    else
    {
        return -1;
    }
}

string infixToprefix(string s)
{
    reverse(s.begin(), s.end());
    int n = s.size();
    for (int i = 0; i < n; i++)
    {
        if (s[i] == ')')
        {
            s[i] = '(';
        }
        else if (s[i] == '(')
        {
            s[i] = ')';
        }
    }

    stack<char> st;
    string result = "";
    for (int i = 0; i < n; i++)
    {
        if ((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9'))
        {
            result.push_back(s[i]);
        }
        else if (s[i] == '(')
        {
            st.push(s[i]);
        }
        else if (s[i] == ')')
        {
            while (!st.empty() && st.top() != '(')
            {
                result.push_back(st.top());
                st.pop();
            }
            st.pop();
        }
        else
        {
            int priorityOperator = priority(s[i]);
            if(s[i] == '^'){
                while(!st.empty() && priority(st.top()) >= priorityOperator){
                    result.push_back(st.top());
                    st.pop();
                }
            }
            else{
                while (!st.empty() && (priority(st.top()) > priorityOperator))
                {
                    result.push_back(st.top());
                    st.pop();
                }
            }
            st.push(s[i]);
        }
    }
    while (!st.empty())
    {
        result.push_back(st.top());
        st.pop();
    }
    reverse(result.begin(), result.end());
    return result;
}

int main()
{
    string s = "(A+B)*C-D+F";
    cout << infixToprefix(s) << endl;
}