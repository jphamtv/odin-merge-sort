function mergeSort(array) {
  // Base case of 1
  if (array.length === 1) {
    return array;
  }

  // Recursive calling function
  const mid = Math.floor(array.length) /2;
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid, array.length));

  // Merge left and right sub-arrays
  return merge(left, right);
}  


function merge(left, right) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  // First loop - merging elements of the sub-arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArray.push(left[i]);
      i++;
    } else {
      mergedArray.push(right[j]);
      j++;
    }
  } 
  
  // Second loop - adding remaining elements from left
  while (i < left.length) {
    mergedArray.push(left[i]);
    i++;
  }

  // Third loop - adding remaining elements from right
  while (j < right.length) {
    mergedArray.push(right[j]);
    j++;
  }

  return mergedArray;
}

const unsortedArray = [3, 1, 5, 77, 3, 11, 0, -6, 26, 99, 3456, 7];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
