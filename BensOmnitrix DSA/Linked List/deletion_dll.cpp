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

Node* deleteHead(Node* head){
    if(head == nullptr){
        return nullptr;
    }
    if(head->next == nullptr){
        delete head;
        return nullptr;
    }
    Node* temp = head;
    head = temp->next;
    head->back = nullptr;
    temp->next = nullptr;
    delete temp;
    return head;
}

Node* deleteTail(Node* head){
    if(head == nullptr){
        return nullptr;
    }
    if(head->next == nullptr){
        delete head;
        return nullptr;
    }
    Node* prev = nullptr;
    Node* temp = head;
    while(temp->next != nullptr){
        prev = temp;
        temp = temp->next;
    }
    prev->next = nullptr;
    temp->back = nullptr;
    delete temp;
    return head;
}

Node* deleteAtK(Node* head,int k){
    if(head == nullptr){
        return nullptr;
    }
    if(k == 1){
        Node* temp = head;
        head = temp->next;
        head->back = nullptr;
        temp->next = nullptr;
        delete temp;
        return head;
    }
    Node* prev = nullptr;
    Node* temp = head;
    for(int i=1;i<k && temp != nullptr; i++){
        prev = temp;
        temp = temp->next;
    }
    if(temp == nullptr)
    {
        return head;
    }
    if(temp->next == nullptr){
        prev->next = nullptr;
        temp->back = nullptr;
        delete temp;
        return head;
    }
    prev->next = temp->next;
    temp->next->back = prev;
    temp->next = nullptr;
    temp->back = nullptr;
    delete temp;
    return head;
}

Node* deleteNode(Node* head,int value){
    if(head == nullptr){
        return head;
    }
    if(head->data == value){
        Node* temp = head;
        head = temp->next;
        head->back = nullptr;
        temp->next = nullptr;
        delete temp;
        return head;
    }
    Node* prev = nullptr;
    Node* temp = head;
    while(temp != nullptr && temp->data != value){
        prev = temp;
        temp = temp->next;
    }
    if(temp == nullptr){
        return head;
    }
    if(temp->next == nullptr && temp->data == value){
        prev->next = nullptr;
        temp->back = nullptr;
        delete temp;
        return head;
    }
    prev->next = temp->next;
    temp->next->back = prev;
    temp->next = temp->back = nullptr;
    delete temp;
    return head;
}

int main(){
    vector<int> a = {1,2,3,4,5,6};
    Node* head = array_to_doublyll(a);
    print_forward(head);
    cout << endl;
    return 0;
}