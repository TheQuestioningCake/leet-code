// Easy leet-code problems


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


// function to convert roman to integer

function romanToInteger(s) {
    romanSymbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    value = 0

    for( let i = 0; i < s.length;  i += 1) {
        if (i < s.length - 1 && romanSymbols[s[i]] < romanSymbols[s[i + 1]]) {
            value -= romanSymbols[s[i]];
        } else {
            value += romanSymbols[s[i]];
        }
    }

    return value
    
}