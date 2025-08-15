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
	string s,t;
	cin >> s >> t;

	unordered_map<char,int> ms;
	unordered_map<char,int> mt;

	for(int i=0;i<s.size();i++){
		ms[s[i]]++;
	}
	for(int i=0;i<t.size();i++){
		mt[t[i]]++;
	}
	int count = 0;
	for(auto &x:ms){
		if(mt.find(x.first) == mt.end()){
			count += x.second;
		}
		else{
			count += abs(x.second - mt[x.first]);
		}
	}
	for(auto &x:mt){
		if(ms.find(x.first) == ms.end()){
			count += x.second;
		}
	}
	cout << count << endl;


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