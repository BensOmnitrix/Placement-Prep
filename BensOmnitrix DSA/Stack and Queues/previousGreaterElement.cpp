#include <bits/stdc++.h>
using namespace std;

vector<int> pse(int a[],int n){
    stack<int> st;
    vector<int> result;
    for(int i=0;i<n;i++){
        if(st.empty()){
            result.push_back(-1);
            st.push(a[i]);
        }
        else if(st.top() <= a[i]){
            while(!st.empty() && st.top() <= a[i]){
                st.pop();
            }
            if(!st.empty()){
                result.push_back(st.top());
            }
            else{
                result.push_back(-1);
            }
            st.push(a[i]);
        }
        else if(st.top() > a[i]){
            result.push_back(st.top());
            st.push(a[i]);
        }
    }
    return result;
}

int main(){
    int arr[10] = {1,5,4,6,9,8,2,7,5,2};
    vector<int> result = pse(arr,10);
    for(int i=0;i<10;i++){
        cout << result[i] << " " ;
    }
    return 0;
}