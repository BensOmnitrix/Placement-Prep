#include <bits/stdc++.h>
using namespace std;

class StackUsingArrays{
    private:
        int st[10];
        int top = -1;
    public:
        void push(int x){
            if(top == 9){
                cout << "Stack Overflow" << endl;
                return;
            }
            top++;
            st[top] = x;
        }
        int pop(){
            if(top == -1){
                cout << "Stack is empty" << endl;
                return INT_MIN;
            }
            int popElement = st[top];
            st[top] = 0;
            top--;
            return popElement;
        }
        int topElement(){
            if(top != -1){
                return st[top];
            }
            cout << "The Stack is empty";
            return INT_MIN;
        }
        int size(){
            return top+1;
        }
};


int main(){
    StackUsingArrays st;
    st.push(5);
    st.push(6);
    st.push(7);
    st.push(8);
    cout << st.pop() << endl;
    cout << st.pop() << endl;
    cout << st.size() << endl;
    cout << st.topElement() << endl;
    return 0;
}
