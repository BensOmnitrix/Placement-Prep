#include <iostream>
using namespace std;

struct Node
{
    int data;
    Node * next;

    Node(int val){
        data = val;
        next = nullptr;
    }
};

class queuell{
    private:
        Node * head;
        Node * tail;
        int size;

    public:
        queuell(){
            head = nullptr;
            tail = nullptr;
            size = 0;
        }

        void push(int n){
            Node * temp = new Node(n);
            if(size == 0){
                head = temp;
                tail = temp;
            }
            else{
                tail->next = temp;
                tail = temp;
            }
            size++;
        }

        void pop(){
            if(size == 1){
                Node * temp = head;
                head = temp->next;
                tail = head;
                delete(temp);
            }
            else{
                Node * temp = head;
                head = head -> next;
                delete(temp);
            }
            size--;
        }

        int top(){
            if(head != nullptr){
                return head->data;
            }
        }
};


int main(){
    return 0;
}