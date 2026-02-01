#include <bits/stdc++.h>
using namespace std;

void printSubsequences(vector<int> &subsequences)
{
    int n = subsequences.size();
    for (int i = 0; i < n; i++)
    {
        cout << subsequences[i] << " ";
    }
    cout << endl;
}

int generateSubsequences(vector<int> &nums, vector<int> &subsequences, int idx, int sum, int k)
{
    if (idx >= nums.size())
    {
        if (sum == k)
        {
            printSubsequences(subsequences);
            return 1;
        }
        return 0;
    }
    subsequences.push_back(nums[idx]);
    sum += nums[idx];
    int l = generateSubsequences(nums, subsequences, idx + 1, sum, k);
    sum -= nums[idx];
    subsequences.pop_back();
    int r = generateSubsequences(nums, subsequences, idx + 1, sum, k);
    return l + r;
}

int main()
{
    // Printing all subsequences
    int n;
    cin >> n;
    int k;
    cin >> k;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
    {
        cin >> nums[i];
    }
    vector<int> subsequences;
    cout << generateSubsequences(nums, subsequences, 0, 0, k); // Could also remove subsequence data structure as it is of no use as only sum is been counted and it will be automatically managed when we add or subtract from the same
    return 0;
}