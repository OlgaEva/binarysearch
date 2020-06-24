/*
Dot Product
The dot product of two lists is the sum of the products of their corresponding entries.

For example, given a = [1, 2, 3] and b = [4, 5, 6], the dot product is 32, since (1 × 4) + (2 × 5) + (3 × 6) = 32.

Given two lists of integers, compute their dot product.

Example 1
Input

a = []
b = []
Output

0
Example 2
Input

a = [1, 2, 3]
b = [4, 5, 6]
Output

32
Example 3
Input

a = [1, 2, 3, 4, 5]
b = [1, 2, 3, 4, 5]
Output

55
*/

function dot(a, b) {
    let product = 0;
          for(i = 0; i < a.length; i++) {
              product += (a[i] * b[i])
          }
          
      return product;
  }