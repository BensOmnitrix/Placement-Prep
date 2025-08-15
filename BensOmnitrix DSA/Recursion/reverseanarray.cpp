#include <bits/stdc++.h>
using namespace std;

void reverse(int a[],int n,int i){
    if(i >= n/2) return;
    swap(a[i],a[n-i-1]);
    reverse(a,n,i+1);
}

int main(){
    int a[5] = {1,2,3,5,4};
    reverse(a,4,0);
    for(int i=0;i<5;i++){
        cout << a[i] << " ";
    }
}