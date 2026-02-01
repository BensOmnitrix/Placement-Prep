#include <bits/stdc++.h>
using namespace std;

void printSubsequences(vector<int> &subsequences){
    int n = subsequences.size();
    for(int i=0;i<n;i++){
        cout << subsequences[i] << " ";
    }
    cout << endl;
}

bool generateSubsequences(vector<int>& nums,vector<int>& subsequences, int idx, int sum,int k){
    if(idx >= nums.size()){
        if(sum == k){
            printSubsequences(subsequences);
            return true;
        }
        return false;
    }
    subsequences.push_back(nums[idx]);
    sum += nums[idx];
    if(generateSubsequences(nums,subsequences,idx+1, sum,k)){
        return true;
    }
    sum -= nums[idx];
    subsequences.pop_back();
    if(generateSubsequences(nums,subsequences,idx+1, sum,k)){
        return true;
    }
    return false;
}

int main(){
    // Printing all subsequences
    int n;
    cin >> n;
    int k;
    cin >> k;
    vector<int> nums(n);
    for(int i=0;i<n;i++){
        cin >> nums[i];
    }
    vector<int> subsequences;
    generateSubsequences(nums,subsequences,0,0,k);
    return 0;
}