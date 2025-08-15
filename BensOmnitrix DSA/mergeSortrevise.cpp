#include <bits/stdc++.h>
using namespace std;

void merge(int a[],int low,int mid,int high){
    vector<int> temp;
    int left = low,right = mid+1;
    while(left <= mid && right <= high){
        if(a[left] <= a[right]){
            temp.push_back(a[left]);
            left++;
        }
        else if(a[left] > a[right]){
            temp.push_back(a[right]);
            right++;
        }
    }
    while(left <= mid){
        temp.push_back(a[left++]);
    }
    while(right <= high){
        temp.push_back(a[right++]);
    }
    for(int i=low;i<=high;i++){
        a[i] = temp[i-low];
    }
    return;
}
void mergeSort(int a[],int low,int high){
    if(low >= high) return;
    int mid = (low+high)/2;
    mergeSort(a,low,mid);
    mergeSort(a,mid+1,high);
    merge(a,low,mid,high);
}

int main(){
    int a[5] = {1,2,3,4,2};
    mergeSort(a,0,4);
    for(int i=0;i<5;i++){
        cout << a[i] << " ";
    }
}