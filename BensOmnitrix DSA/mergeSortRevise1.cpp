#include <bits/stdc++.h>
using namespace std;

void merge(int a[],int low,int mid, int high){
    vector<int> result;
    int i = low, j = mid + 1;
    while(i <= mid && j <= high){
        if(a[i] <= a[j]){
            result.push_back(a[i]);
            i++;
        }
        else{
            result.push_back(a[j]);
            j++;
        }
    }
    while(i <= mid){
        result.push_back(a[i]);
        i++;
    }
    while(j <= high){
        result.push_back(a[j]);
        j++;
    }
    for(int i=low;i<=high;i++){
        a[i] = result[i - low];
    }
}

void mergeSort(int a[],int low, int high){
    if(low >= high) return;
    int mid = (low+high) / 2;
    mergeSort(a,low,mid);
    mergeSort(a,mid+1,high);
    merge(a,low,mid,high);
}

int main(){
    int a[] = {3,6,5,4,7,8,5,4,2,3,6,5,2,1,4,0,2,5};
    mergeSort(a,0,17);
    for(int i=0;i<=17;i++){
        cout << a[i] << " ";
    }
}