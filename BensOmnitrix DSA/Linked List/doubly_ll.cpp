#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
    Node* back;
    int data;
    Node* next;

    public:
    Node(int data1,Node* next1, Node* back1){
        data = data1;
        next = next1;
        back = back1;
    }

    Node(int data1){
        data = data1;
        next = nullptr;
        back = nullptr;
    }

};

Node* createNode(int data){
    Node* newNode = new Node(data);
    return newNode;
}

Node* array_to_doublyll(vector<int> arr){
    Node* head = createNode(arr[0]);
    Node* temp = head;
    int n = arr.size();
    for(int i=1;i<n;i++){
        Node* newNode = createNode(arr[i]);
        newNode->back = temp;
        temp->next = newNode;
        temp = temp->next;
    }
    return head;
}

void print_forward(Node* head){
    Node* temp = head;
    while(temp != nullptr){
        cout << temp->data << " " ;
        temp = temp->next;
    }
}

void print_backward(Node* head){
    Node* temp = head;
    while(temp->next != nullptr){
        temp = temp->next;
    }
    while(temp != nullptr) {
        cout << temp->data << " "; 
        temp = temp->back;
    }
}

int main(){
    vector<int> a = {1,2,3,4,5,6};
    Node* head = array_to_doublyll(a);
    print_forward(head);
    cout << endl;
    print_backward(head);
    cout << endl;
    return 0;
}