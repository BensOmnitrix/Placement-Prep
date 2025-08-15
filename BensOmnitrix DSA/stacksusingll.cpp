#include <iostream>
using namespace std;

struct Node{
    int data;
    Node * next;

    Node(int val){
        data = val;
        next = nullptr;
    }
};

class stackll{
    private:
        Node * top;
        int size;
    
    public:

        stackll(){
            top = nullptr;
            size = 0;
        }

        void push(int n){
            Node * head = new Node(n);
            head -> next = top;
            top = head;
            size++;
        }

        void pop(){
            Node * temp = top;
            top = top -> next;
            delete(temp);
            size--;
        }

        int top(){
            return top->data;
        }

        int size(){
            return size;
        }

};

int main(){
    return 0;
}