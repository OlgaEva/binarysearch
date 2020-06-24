/*
Numeronym
Given a string s with length greater than 2, 
return a new string where the first and last 
letter are the same, but the letters in between 
are replaced by their length.

Example 1
Input

s = "croneberry"
Output

"c8y"
Example 2
Input

s = "extracurricular"
Output

"e13r"
*/

function numeronym(s) {
      return s[0] + (s.length - 2) + s[s.length-1]
}