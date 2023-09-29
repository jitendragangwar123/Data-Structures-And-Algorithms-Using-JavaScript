/*
Input:
n = 5
arr[] = {1,2,3,4,5}
Output: 2 1 4 3 5
*/


class Solution {
    // arr: input array
    // n: size of array
    //Function to sort the array into a wave-like array.
    convertToWave(n, arr)
    {
        //your code here
        for(let i=0;i<arr.length-1;i+=2){
            if(arr[i]<arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            }
        }
        return arr;
    }
}
