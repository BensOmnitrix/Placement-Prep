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
    int a,b,c,d;
    cin >> a >> b >> c >> d;
    int k = 1;
    while(true){
        if(k%2 != 0){
            if(c > 0){
                int min_ = min(d,b);
                if(min_ == d){
                    d = d - 1;
                }
                else{
                    b = b - 1;
                    if(b <= 0){
                        cout << "Gellyfish" << endl;
                        return;
                    }
                }
            }
            else{
                cout << "Flower" << endl;
                return;
            }
        }
        else{
            if(d > 0){
                int min_ = min(a,c);
                if(min_ == a){
                    a = a - 1;
                    if(a <= 0){
                        cout << "Flower" << endl;
                        return;
                    }
                }
                else{
                    c = c - 1;
                }
            }
            else{
                cout << "Gellyfish" << endl;
                return;
            }
        }
        k++;
    }
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