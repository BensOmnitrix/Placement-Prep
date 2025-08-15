#include <iostream>
using namespace std;

class stImp{
    private:
        int top = -1;
        int st[10];

    public:
        void push(int n){
            if(top == 9){
                cout << "The stack size is full...Pop some elements!";
                return;
            }
            top++;
            st[top] = n;
        }
        void pop(){
            if(top == -1){
                cout << "The stack is already empty!";
                return;
            }
            // I will win no lose OM Namoh Shivaay
            top--;
        }
        int topp(){
            if(top == -1){
                cout << "The stack is empty!";
                return -1;
            }
            return st[top];
        }
        int size(){
            return top + 1;
        }
};

int main(){
    stImp stack;
    if(stack.topp() != -1)
    stack.push(1);   
    stack.push(2);   
    stack.push(3);   
    stack.push(4);   
    stack.push(5);
    cout << stack.topp() <<endl;   
    stack.pop();   
    cout << stack.topp() << endl;
    cout << stack.size() << endl;
}