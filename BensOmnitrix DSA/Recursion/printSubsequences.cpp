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
    subsequences.push_back(nums[idx]);
    generateSubsequences(nums,subsequences,idx+1);
    subsequences.pop_back();
    generateSubsequences(nums,subsequences,idx+1);
}

int main(){
    // Printing all subsequences
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