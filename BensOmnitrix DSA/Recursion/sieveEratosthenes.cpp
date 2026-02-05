#include <bits/stdc++.h>
using namespace std;

void masttii(vector<int>& nums){
    int n = nums.size();
    for(int i=2;i*i<=n;i++){ // This has done as in for when you see and calculate the 
        // divisors we see that it goes till the square part and then it returns 
        // but it covers all the part as in for let say 15
        // i = 2 and 2*2 <= 15 => 2*2, 2*3, 2*4, 2*5, 2*6, 2*7
        // i = 3 and 3*3 <= 15 => 3*3, 3*4, 3*5
        // i = 5 and 5*5 > 15 so it will not go further but here we see that 5*3 is already covered and 5*5 was going above
        // also while prime factorisation we see that we either return on square or the reverse comes in
        if(nums[i] == 0) continue;
        for(int j=i*i;j<=n;j+=i){
            if(j%i == 0){
                nums[j] = 0;
            }
        }
    }
    for(int i=2;i<n;i++){
        cout << i << "->" << nums[i] << endl;
    }
}

int main(){
    int n;
    cin >> n;
    vector<int> nums(n+1,1);
    masttii(nums);
    return 0;
}