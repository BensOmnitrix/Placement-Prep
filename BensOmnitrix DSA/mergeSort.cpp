#include <bits/stdc++.h>
using namespace std;

void merge(int arr[],int low,int mid, int high){
    vector<int> result;
    int i = low,j=mid+1;
    while(i < mid+1 && j < high + 1){
        if(arr[i] > arr[j]){
            result.push_back(arr[j]);
            j++;
        }
        else if(arr[i] <= arr[j]){
            result.push_back(arr[i]);
            i++;
        }
    }
    while(i < mid + 1){
        result.push_back(arr[i]);
        i++;
    }
    while(j < high + 1){
        result.push_back(arr[j]);
        j++;
    }
    for(int i=low;i<=high;i++){
        arr[i] = result[i-low];
    }
    return;
}

void mergeSort(int arr[], int low, int high)
{
    if (low >= high)
        return;
    int mid = (low + high) / 2;
    mergeSort(arr, 0, mid);
    mergeSort(arr, mid+1, high);
    merge(arr,low,mid,high);
}

int main()
{
    int arr[10] = {3, 5, 6, 9, 1, 8, 7, 1, 2, 5};
    mergeSort(arr, 0, 9);
    for(int i=0;i<10;i++){
        cout << arr[i] << " ";
    }
}