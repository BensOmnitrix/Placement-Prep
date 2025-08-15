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
	string s;
	cin >> s;
	int n  = s.size();
	unordered_map<char,int> m;
	for(int i=0;i<n;i++){
		m[s[i]]++;
	}
	if(m.find('r') == m.end() || m.find('u') == m.end() || m.find('b') == m.end() || m.find('y') == m.end()){
        cout << 0 << endl;
		return;
	}
    int r = m['r'];
    int u = m['u'];
    int b = m['b'];
    int y = m['y'];
	cout << min({r,u,b,y}) << endl;
}

int main() {
    FAST_IO
    int T = 1;
    cin >> T;
    while (T--) {
        solve();
    }
    return 0;
}