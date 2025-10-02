#include <bits/stdc++.h>
using namespace std;

class Node{
    public: 
        int data;
        Node* left;
        Node* right;
        Node(int data1, Node* left1, Node* right1){
            data = data1;
            left = left1;
            right = right1;
        }
        
        Node(int data1){
            data = data1;
            left = nullptr;
            right = nullptr;
        }
        Node(int data1, Node* left1){
            data = data1;
            left = left1;
            right = nullptr;
        }

        Node(int data1, Node* right1){
            data = data1;
            left = nullptr;
            right = right1;
        }

};

Node* createNode(int data){
    Node* newNode = new Node(data);
    return newNode;
}

int main(){
    Node* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left->right = createNode(4);
    return 0;
}