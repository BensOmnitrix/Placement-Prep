#include <bits/stdc++.h>
using namespace std;

const int MOD = 998244353;
const int MAX_EXP = 200005;

vector<int> pow2(MAX_EXP);
void precompute() {
    pow2[0] = 1;
    for (int i = 1; i < MAX_EXP; ++i) {
        pow2[i] = (2LL * pow2[i - 1]) % MOD;
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    precompute();

    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<int> p(n), q(n), r(n);
        for (int i = 0; i < n; ++i) cin >> p[i];
        for (int i = 0; i < n; ++i) cin >> q[i];

        for (int i = 0; i < n; ++i) {
            int max_val = 0;
            for (int j = 0; j <= i; ++j) {
                int val = (pow2[p[j]] + pow2[q[i - j]]) % MOD;
                max_val = max(max_val, val);
            }
            r[i] = max_val;
        }

        for (int i = 0; i < n; ++i) {
            cout << r[i] << " ";
        }
        cout << endl;
    }

    return 0;
}
