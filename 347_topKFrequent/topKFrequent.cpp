#include <vector>
#include <iostream>
// for priority_queue
#include <queue>
// for sort
#include <algorithm>
// for unordered_map
#include <unordered_map>  
using namespace std;

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        // creat hash map
        unordered_map<int, int> hashmap;
        for (auto key: nums)
        {
            ++hashmap[key];
        }
        
        // creat heap struct
        priority_queue<pair<int,int>> queue_sol;
        for (auto t : hashmap)
        {
            // push value to sort
            queue_sol.push({t.second, t.first});
        }
        // showpq(queue_sol);
        vector<int> result;
        while(k)
        {
            // queue_sol the second element is key
            result.push_back(queue_sol.top().second); 
            queue_sol.pop();
            k--;
        }
        return result;
    }
    void showpq(priority_queue <pair<int,int>> gq) 
    { 
        priority_queue <pair<int,int>> g = gq; 
        while (!g.empty()) 
        {
            cout << "key: " << g.top().second << " value: " << g.top().first << endl;
            g.pop(); 
        } 
        cout << '\n'; 
    } 
};

int main()
{
    vector<int> nums = {1,1,1,2,2,3,3,3,3,5,5,4,4,4,4,4};
    int k = 2;
    Solution result;

    vector<int> solution;
    solution = result.topKFrequent(nums, k);
    for (int i = 0; i < solution.size(); i++)
    {
        cout << solution[i] <<" ";
    }
    cout << endl;
    return 0;
}

// Solution 1
// class Solution {
// public:
//     vector<int> topKFrequent(vector<int>& nums, int k) {
//         unordered_map<int, int> m;
//         priority_queue<pair<int, int>> q;
//         vector<int> res;
//         for (auto a : nums) ++m[a];
//         for (auto it : m) q.push({it.second, it.first});
//         for (int i = 0; i < k; ++i) {
//             res.push_back(q.top().second); q.pop();
//         }
//         return res;
//     }
// };

// Soltion 2
// class Solution {
//     public:
//         struct element
//         {
//             int number, frequency;
//             bool operator < (const element arg) const
//             {
//                 return frequency < arg.frequency;
//             }
//         };
//         priority_queue <element> sol;
//         vector <int> solution;
        
//         vector<int> topKFrequent(vector<int>& nums, int k) {
//             sort(nums.begin(), nums.end());
//             int i = 1;
//             for(; i < nums.size(); i++)
//             {
//                 int freq = 1;
//                 while(i < nums.size() && nums[i] == nums[i - 1])
//                 {
//                     i++;
//                     freq++;
//                 }
//                 element el;
//                 el.number = nums[i - 1];
//                 el.frequency = freq;
//                 sol.push(el);
//             }
//             if(i == nums.size())
//             {
//                 element el;
//                 el.number = nums[nums.size() - 1];
//                 el.frequency = 1;
//                 sol.push(el);
//             }
//             while(k)
//             {
//                 solution.push_back(sol.top().number);
//                 sol.pop();
//                 k--;
//             }
//             return solution;
//         }
// };