#include <bits/stdc++.h>
using namespace std;

class Node
{
public:
    int data;
    Node *next;

    Node(int data1)
    {
        data = data1;
        next = nullptr;
    }
};

Node *createNode(int data)
{
    Node *temp = new Node(data);
    return temp;
}

Node *array_to_ll(vector<int> &arr)
{
    int n = arr.size();
    Node *head = new Node(arr[0]);
    Node *ptr = head;
    for (int i = 1; i < n; i++)
    {
        Node *currentNode = createNode(arr[i]);
        ptr->next = currentNode;
        ptr = currentNode;
    }
    return head;
}

void print(Node *head)
{
    Node *mover = head;
    while (mover)
    {
        cout << mover->data << " ";
        mover = mover->next;
    }
}

Node* deleteHead(Node* head){
    if(head == nullptr){
        return nullptr;
    }
    Node* temp = head;
    head = head->next;
    delete temp;
    return head;
}

Node* tailDelete(Node* head){
    if(head == nullptr){
            return nullptr;
    }
    if(head->next == nullptr){
        delete head;
        return nullptr;
    }
    Node* temp = head;
    while(temp->next->next != nullptr){
        temp = temp->next;
    }
    delete temp->next;
    temp->next = nullptr;
    return head;
}

Node* deleteAtk(Node* head,int k){
    if(head == nullptr){
        return nullptr;
    }
    if(k == 1){
        Node* temp = head;
        head = head->next;
        delete temp;
        return head;
    }
    Node* temp = head;
    Node* prev = nullptr;

    for(int i=1;i<k && temp != nullptr;i++){
        prev = temp;
        temp = temp->next;
    }
    if(temp ==nullptr) return head;
    prev->next = temp->next;
    delete temp;
    return head;
}

Node* deleteAtvalue(Node* head,int value){
    if(head == nullptr){
        return head;
    }
    if(head->data == value){
        Node* temp = head;
        head = head->next;
        delete temp;
        return head;
    }
    Node* temp = head;
    Node* prev = nullptr;
    while(temp != nullptr && temp->data != value){
        prev = temp;
        temp = temp->next;
    }
    if(temp == nullptr){
        return head;
    }
    prev->next = temp->next;
    temp->next = nullptr;
    delete temp;
    return head;
}

int main()
{
    vector<int> arr = {1,2,3,4,5,6};
    Node* head = array_to_ll(arr);
    print(head);
    cout << endl;
    head = deleteHead(head);
    print(head);
    cout << endl;
    head = tailDelete(head);
    print(head);
    cout << endl;
    head = deleteAtk(head,6);
    print(head);
    cout << endl;
    head = deleteAtvalue(head,2);
    print(head);
    return 0;
}