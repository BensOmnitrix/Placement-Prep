#include <bits/stdc++.h>
using namespace std;

void mergeSortedArrays(int a[],int b[]){
    int a_size = 15;
    int b_size = 7;
    int i = 0, j = 0;
    vector<int> result;
    while(i < a_size && j < b_size){
        if(a[i] <= b[j]){
            result.push_back(a[i]);
            i++;
        }
        else{
            result.push_back(b[j]);
            j++;
        }
    }
    while(i < a_size){
        result.push_back(a[i]);
        i++;
    }
    while(j < b_size){
        result.push_back(b[j]);
        j++;
    }
    for(int i=0;i<result.size();i++){
        cout << result[i] << " ";
    }
    
}

int main(){
    int arr1[] = {1,2,2,2,3,3,3,4,4,5,6,7,8,9,10};
    int arr2[] = {2,3,4,5,6,7,11};
    mergeSortedArrays(arr1,arr2);
}