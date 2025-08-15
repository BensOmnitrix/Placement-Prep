#include <bits/stdc++.h>
using namespace std;

#define FAST_IO ios::sync_with_stdio(false); cin.tie(nullptr);
typedef long long ll;
typedef pair<int, int> pii;
typedef vector<int> vi;
const int MOD = 1e9 + 7;
const int INF = 1e9;
const ll LLINF = 1e18;

#ifdef DEBUG
#define dbg(x) cerr << #x << " = " << x << "\n"
#else
#define dbg(x)
#endif

#define all(x) (x).begin(), (x).end()
#define pb push_back
#define mp make_pair
#define fi first
#define se second
#define rep(i, a, b) for (int i = a; i < (b); ++i)
#define rrep(i, a, b) for (int i = a; i >= (b); --i)

void solve() {
    // Your logic here
    string a;
    cin >> a;
    int n = stoi(a);
    int sqrt_n = sqrt(n);
    if(sqrt_n == 0){
        cout << 0 << " " << 0 << endl;
        return;
    }
    if(sqrt_n * sqrt_n != n){
        cout << -1 << endl;
        return;
    }
    cout << sqrt_n - 1 << " " << 1 << endl;
}

int main() {
    FAST_IO
    int T = 1;
    cin >> T;
    cin.ignore();
    while (T--) {
        solve();
    }
    return 0;
}