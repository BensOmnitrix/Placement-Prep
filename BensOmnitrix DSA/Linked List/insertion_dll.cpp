#include <bits/stdc++.h>
using namespace std;

class Node
{
public:
    Node *back;
    int data;
    Node *next;

public:
    Node(int data1, Node *next1, Node *back1)
    {
        data = data1;
        next = next1;
        back = back1;
    }

    Node(int data1)
    {
        data = data1;
        next = nullptr;
        back = nullptr;
    }
};

Node *createNode(int data)
{
    Node *newNode = new Node(data);
    return newNode;
}

Node *array_to_doublyll(vector<int> arr)
{
    Node *head = createNode(arr[0]);
    Node *temp = head;
    int n = arr.size();
    for (int i = 1; i < n; i++)
    {
        Node *newNode = createNode(arr[i]);
        newNode->back = temp;
        temp->next = newNode;
        temp = temp->next;
    }
    return head;
}

void print_forward(Node *head)
{
    Node *temp = head;
    while (temp != nullptr)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
}

Node *insertionHead(Node *head, int data)
{
    Node *newNode = createNode(data);
    if (head == nullptr)
    {
        head = newNode;
        return head;
    }
    newNode->next = head;
    head->back = newNode;
    head = newNode;
    return head;
}

Node *insertionTail(Node *head, int data)
{
    Node *newNode = createNode(data);
    if (head == nullptr)
    {
        head = newNode;
        return head;
    }
    Node *temp = head;
    while (temp->next != nullptr)
    {
        temp = temp->next;
    }
    temp->next = newNode;
    newNode->back = temp;
    newNode->next = nullptr;
    return head;
}

Node *insertionAtK(Node *head, int data, int k)
{
    Node *newNode = createNode(data);
    if (head == nullptr)
    {
        head = newNode;
        return head;
    }
    if (k == 1)
    {
        newNode->next = head;
        head->back = newNode;
        newNode->back = nullptr;
        head = newNode;
        return head;
    }
    Node *prev = nullptr;
    Node *temp = head;
    for (int i = 1; i < k && temp != nullptr; i++)
    {
        prev = temp;
        temp = temp->next;
    }
    if (temp == nullptr)
    {
        prev->next = newNode;
        newNode->back = prev;
        newNode->next = nullptr;
        return head;
    }
    prev->next = newNode;
    newNode->next = temp;
    temp->back = newNode;
    newNode->back = prev;
    return head;
}

Node* insertionNode(Node *head, int value, int data)
{
    Node* newNode = createNode(data);
    if (head == nullptr)
    {
        head = newNode;
        return head;
    }
    if(head->data == value){
        newNode->next = head;
        head->back = newNode;
        head = newNode;
        newNode->back = nullptr;
        return head;
    }
    Node* prev = nullptr;
    Node* temp = head;
    while(temp != nullptr && temp->data != value){
        prev = temp;
        temp = temp->next;
    }
    if(temp == nullptr){
        prev->next = newNode;
        newNode->back = prev;
        newNode->next = nullptr;
        return head;
    }
    prev->next = newNode;
    newNode->next = temp;
    temp->back = newNode;
    newNode->back = prev;
    return head;
}

int main()
{
    vector<int> a = {1, 2, 3, 4, 5, 6};
    Node *head = array_to_doublyll(a);
    print_forward(head);
    cout << endl;
    return 0;
}