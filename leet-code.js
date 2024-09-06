// @param {number []} nums
// @param {number} target
// @return {number[]}

function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

// Example
const nums = [9, 13, 5, 16];
const target = 14
const result = twoSum(nums, target);
console.log(result);


// function to see if a number is a palindrome
function isNumPalindrome (num) {
    var strNum = num.toString();
    var reversedNum = strNum
    .split('')
    .reverse()
    .join('');

    if (reversedNum === strNum) {
        return true;
    } else {
        return false
    }
};