    #include <bits/stdc++.h>
    using namespace std;

    class QueueUsingArrays{
        private: 
            int queue[4];
            int size = 4;
            int currSize = 0;
            int start = -1;
            int end = -1;
        public:
            void push(int x){
                if(currSize >= size){
                    cout << "Stack OverFlow" << endl;
                    return;
                }
                if(start == -1 && end == -1){
                    start = 0;
                    end = 0;
                }
                else{
                    end = (end+1)%size;
                }
                queue[end] = x;
                currSize++;
            }
            void pop(){
                if(currSize == 0){
                    cout << "Stack is Empty" << endl;
                    return;
                }
                else if(currSize == 1){
                    start = -1;
                    end = -1;
                    currSize = 0;
                    return;
                }
                start = (start+1)%size;
                currSize--;
            }
            int top(){
                if(start == -1 || end == -1){
                    cout << "Stack is empty" << endl;
                    return INT_MIN;
                }
                return queue[start];
            }
            int queueSize(){
                return currSize;
            }
    };

    int main(){

    }