#include <bits/stdc++.h>
using namespace std;

void smallestPrimeFactor(vector<int>& nums){ // So you could think around sieve for precomputation
    int n = nums.size();
    for(int i=0;i<n;i++){
        nums[i] = i;
    }
    for(int i=2;i*i<=n;i++){
        for(int j=i*i;j<=n;j+=i){
            nums[j] = min(nums[j],nums[i]);
        }
    }
} // This is done so that while prime factorization which was taking O(sqrt(n));
 // now it will take at the worst case as O(log n) for the number having power of 1 number only

int main(){
    int n;
    cin >> n;
    vector<int> nums(n+1);
    smallestPrimeFactor(nums);
    int t;
    cin >> t;
    // Prime factorization
    while(t--){
        int x;
        cin >> x;
        while(x != 1){ // O(log n)
            cout << nums[x] << " ";
            x = x/nums[x];
        }
        cout << endl;
    }
}