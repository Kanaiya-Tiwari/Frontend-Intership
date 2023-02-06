

let str = "level";
// program to reverse a string

function reverseString(str) {

  // empty string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString =newString+ str[i];
  }
  return newString;
}

 console.log(reverseString(str))

//program to pallindrome

function palindrome(data) {
    let start = 0;
    let end = data.length - 1;
    let result = true;
    while (end > start) {
      if (data[start] != data[end]) {
        result = false;
      }
      start++;
      end--;
    }
    return result;
  }

  console.warn(palindrome(str))