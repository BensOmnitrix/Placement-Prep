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
    int n,k;
    cin >> n >> k;
    vi a;
    rep(i,0,n){
        cin >> a[i];
    }
    int i=0,j=0;
    int maxLen = 0;
    int sum  = 0;
    while(j < n){
        if(sum < k){
            sum += a[j];
            j++;
        }
        else if(sum == k){
            maxLen = max(maxLen,j-i+1);
        }
        else if(sum > k && j >= i){
            sum -= a[i];
            i++;
        }
    }
}

int main() {
    FAST_IO
    int T = 1;
    // cin >> T;
    while (T--) {
        solve();
    }
    return 0;
}