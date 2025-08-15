#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
        int data;
        Node * next;
        
        Node(int data1){
            data = data1;
            next = nullptr;
        }
};

Node* createNode(int data){
    Node* temp = new Node(data);
    return temp;
}

Node* array_to_ll(vector<int> &arr){
    int n = arr.size();
    Node* head = new Node(arr[0]);
    Node* ptr = head;
    for(int i=1;i<n;i++){
        Node* currentNode = createNode(arr[i]);
        ptr->next = currentNode;
        ptr = currentNode;
    }
    return head;
}

int lengthOfLL(Node* head){
    Node* temp = head;
    int cnt = 0;
    while(temp){
        temp = temp->next;
        cnt++;
    }
    return cnt;
}

bool searchLL(int search,Node* head){
    Node* temp = head;
    while(temp){
        if(temp->data == search){
            return true;
        }
        temp = temp->next;
    }
    return false;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head = array_to_ll(arr);
    Node* mover = head;
    while(mover){
        cout << mover->data << " ";
        mover = mover->next;
    }
    cout << endl;
    int length = lengthOfLL(head);
    cout << length << endl;
    bool search = searchLL(4,head);
    cout << search << endl;
    return 0;
}