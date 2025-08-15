#include <iostream>
using namespace std;

class queImp{
    private:
        int start = -1;
        int end = -1;
        int size = 4;
        int currSize = 0;
        int q[4];

    public:

        void push(int n){
            if(currSize == size){
                cout << "The queue is full !";
                return;
            }
            if(currSize == 0){
                start = 0;end = 0;
            }
            else{
                end = (end+1)%size;
            }
            q[end] = n;
            currSize++;
        }

        int pop(){
            if(currSize == 0){
                cout << "The queue is already empty !";
                return 0;
            }
            int el = q[start];
            if(currSize == -1){
                start = -1;
                end = -1;
            }
            else{
                start = (start+1)%size;
            }
            currSize--;
            return el;
        }

        int top(){
            if(currSize != 0){
                return q[start];
            }
            else{
                cout << "The queue is empty !";
                return 0;
            }
        }

        int size(){
            return currSize;
        }

};

int main(){
    return 0;
}