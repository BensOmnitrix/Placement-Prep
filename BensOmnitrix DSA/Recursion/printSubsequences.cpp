#include <bits/stdc++.h>
using namespace std;

void printSubsequences(vector<int> &subsequences){
    int n = subsequences.size();
    for(int i=0;i<n;i++){
        cout << subsequences[i] << " ";
    }
    cout << endl;
}

void generateSubsequences(vector<int>& nums,vector<int>& subsequences, int idx){
    if(idx >= nums.size()){
        printSubsequences(subsequences);
        return;
    }
    // take the particular element
    subsequences.push_back(nums[idx]);
    generateSubsequences(nums,subsequences,idx+1);
    // not take the particular element
    subsequences.pop_back();
    generateSubsequences(nums,subsequences,idx+1);
}

int main(){
    // Printing all subsequences => O(2^n * n(for printing))    SC => O(number of elements in the array)
    int n;
    cin >> n;
    vector<int> nums(n);
    for(int i=0;i<n;i++){
        cin >> nums[i];
    }
    vector<int> subsequences;
    generateSubsequences(nums,subsequences,0);
    return 0;
}