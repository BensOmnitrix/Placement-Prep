#include <bits/stdc++.h>
using namespace std;

const int N = 1e6 + 5;
int nums[N];

void sieveEratosthenes() {
    for(int i = 0; i < N; i++)
        nums[i] = 1;

    nums[0] = nums[1] = 0;

    for(int i = 2; i * i < N; i++) {
        if(nums[i] == 0) continue;
        for(int j = i * i; j < N; j += i) {
            nums[j] = 0;
        }
    }

    // prefix sum: count of primes ≤ i
    for(int i = 1; i < N; i++) {
        nums[i] += nums[i - 1];
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    sieveEratosthenes();

    int t;
    cin >> t;
    while(t--) {
        int l, r;
        cin >> l >> r;
        cout << nums[r] - nums[l - 1] << "\n";
    }
    return 0;
}
