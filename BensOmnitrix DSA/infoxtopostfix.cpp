#include <bits/stdc++.h>
using namespace std;

int priority(char s)
{
    if (s == '^')
    {
        return 3;
    }
    else if (s == '*' || s == '/')
    {
        return 2;
    }
    else if (s == '+' || s == '-')
    {
        return 1;
    }
    else
    {
        return -1;
    }
}

string infixToPostfix(string s)
{
    int n = s.size();
    int i = 0;
    string ans = "";
    stack<char> st;

    while (i < n)
    {
        if ((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9'))
        {
            ans.push_back(s[i]);
        }
        else if (s[i] == '(')
        {
            st.push(s[i]);
        }
        else if (s[i] == ')')
        {
            while (!st.empty() && st.top() != '(')
            {
                ans.push_back(st.top());
                st.pop();
            }
            st.pop();
        }
        else
        {
            while (!st.empty() && priority(s[i]) <= priority(st.top()))
            {
                ans.push_back(st.top());
                st.pop();
            }
            st.push(s[i]);
        }
        i++;
    }
    while (!st.empty())
    {
        ans.push_back(st.top());
        st.pop();
    }
    return ans;
}

string infixToPrefix(string s)
{
    reverse(s.begin(), s.end());
    int n = s.size();
    for (int i = 0; i < n; i++)
    {
        if (s[i] == ')')
            s[i] = '(';
        else if (s[i] == '(')
            s[i] = ')';
    }
    int i = 0;
    string ans = "";
    stack<char> st;

    while (i < n)
    {
        if ((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9'))
        {
            ans.push_back(s[i]);
        }
        else if (s[i] == '(')
        {
            st.push(s[i]);
        }
        else if (s[i] == ')')
        {
            while (!st.empty() && st.top() != '(')
            {
                ans.push_back(st.top());
                st.pop();
            }
            st.pop();
        }
        else
        {
            if (s[i] == '^')
            {
                while (!st.empty() && priority(s[i]) <= priority(st.top()))
                {
                    ans.push_back(st.top());
                    st.pop();
                }
            }
            else
            {
                while (!st.empty() && priority(s[i]) < priority(st.top()))
                {
                    ans.push_back(st.top());
                    st.pop();
                }
            }
            st.push(s[i]);
        }
        i++;
    }
    while (!st.empty())
    {
        ans.push_back(st.top());
        st.pop();
    }
    reverse(ans.begin(), ans.end());
    return ans;
}

string postfixToInfix(string s)
{
    stack<string> st;
    int n = s.size();
    int i = 0;

    while (i < n)
    {
        if ((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9'))
        {
            string temp = "";
            temp.push_back(s[i]);
            st.push(temp);
        }
        else
        {
            string start = st.top();
            st.pop();
            string end = st.top();
            st.pop();
            string temp = "(" + end + s[i] + start + ")";
            st.push(temp);
        }
        i++;
    }
    return st.top();
}
string prefixToInfix(string s)
{
    stack<string> st;
    int n = s.size();
    int i = n - 1;

    while (i >= 0)
    {
        if ((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9'))
        {
            string temp = "";
            temp.push_back(s[i]);
            st.push(temp);
        }
        else
        {
            string start = st.top();
            st.pop();
            string end = st.top();
            st.pop();
            string temp = "(" + start + s[i] + end + ")";
            st.push(temp);
        }
        i--;
    }
    return st.top();
}

string postfixToprefix(string s)
{
    stack<string> st;
    int i = 0;
    int n = s.size();
    while (i < n)
    {
        if ((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9'))
        {
            string temp = "";
            temp.push_back(s[i]);
            st.push(temp);
        }
        else
        {
            string start = st.top();
            st.pop();
            string end = st.top();
            st.pop();
            string temp = s[i] + end + start;
            st.push(temp);
        }
        i++;
    }
    return st.top();
}

string prefixTopostfix(string s)
{
    stack<string> st;
    int n = s.size();
    int i = n-1;
    while (i >= 0)
    {
        if ((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9'))
        {
            string temp = "";
            temp.push_back(s[i]);
            st.push(temp);
        }
        else
        {
            string start = st.top();
            st.pop();
            string end = st.top();
            st.pop();
            string temp = start + end + s[i] ;
            st.push(temp);
        }
        i--;
    }
    return st.top();
}

int main()
{
    string s = "(a-b/c)*(a/k-l)";
    cout << infixToPostfix(s) << endl;
    cout << infixToPrefix(s) << endl;
    cout << postfixToInfix("ab-de+f*/") << endl;
    cout << prefixToInfix("*+pq-mn") << endl;
    cout << postfixToprefix("ab-de+f*/") << endl;
    cout << prefixTopostfix("/-ab*+def") << endl;
}