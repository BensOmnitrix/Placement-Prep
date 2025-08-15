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

Node* insertionHead(Node* head,int data){
    if(head == nullptr){
        Node* newNode = createNode(data);
        head = newNode;
        return head;
    }
    Node* newNode = createNode(data);
    newNode->next = head;
    head = newNode;
    return head;
}

Node* insertionAtLast(Node* head,int data){
    Node* newNode = createNode(data);
    if(head == nullptr){
        head = newNode;
        return head;
    }
    Node* temp = head;
    while(temp->next!=nullptr){
        temp = temp->next;
    }
    temp->next = newNode;
    newNode->next = nullptr;
    return head;
}

Node* insertionatK(Node* head,int data,int k){
    Node* newNode = createNode(data);
    if(head == nullptr){
        head = newNode;
        return head;
    }
    if(k == 1){
        newNode->next = head;
        head = newNode;
        return head;
    }
    Node* prev = nullptr;
    Node* temp = head;
    for(int i=1;i<k && temp != nullptr;i++){
        prev = temp;
        temp = temp->next;
    }
    if(prev == nullptr){
        delete newNode;
        return head;
    }
    if(temp == nullptr){
        prev->next = newNode;
        newNode->next = nullptr;
        return head;
    }
    newNode->next = prev->next;
    prev->next = newNode;
    return head;
}

Node* insertionAtvalue(Node* head,int data,int value){
    Node* newNode = createNode(data);
    if(head == nullptr){
        head = newNode;
        return head;
    }
    if(head->data == value){
        newNode->next = head;
        head = newNode;
        return head;
    }
    Node* prev = nullptr;
    Node* temp = head;
    while(temp != nullptr && temp->data != value){
        prev = temp;
        temp = temp->next;
    }
    if(temp == nullptr){
        delete newNode;
        return head;
    }
    newNode->next = prev->next;
    prev->next = newNode;
    return head;
}

int main()
{
    vector<int> arr = {1,2,3,4,5,6};
    Node* head = array_to_ll(arr);
    print(head);
    cout << endl;
    head = insertionHead(head,5);
    print(head);
    cout << endl;
    head = insertionAtLast(head,2);
    print(head);
    return 0;
}