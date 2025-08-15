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

const int N = 1e5+10;
long long int a[N];

void solve() {
    // Your logic here
    int n,k;
    cin >> n >> k;
    int min_ = INT_MAX;
    int x;
    while(n){
        cin >> x;
        min_ = min(min_,x);
        n--;
    }
    if(min_ >= k){
        cout << 0 << endl;
    }
    else{
        cout << abs(k-min_) << endl;
    }
}

int main() {
    FAST_IO
    int T = 1;
    int n;
    cin >> n;
    rep(i,0,n){
        cin >> a[i];
    }
    cin >> T;
    while (T--) {
        solve();
    }
    return 0;
}