#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
        int data;
        Node * next;
        
        Node(int data1,Node* next1){
            data = data1;
            next = next1;
        }

        // Node(int data2){
        //     data = data2;
        //     next = nullptr;
        // }
};

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* y = new Node(arr[2],nullptr);
    cout << y->data;
    // cout << y->data;
}