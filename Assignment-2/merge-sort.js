const array = [1,6,239,34,234,35,22,66,4,65,34,22,3,5];
const array2 = [9,2,5,8,4,1,3,6,7];

function mergeSort(array)
{
    // Base case; stop dividing the array when the array length is less than 2.
    if (array.length <= 1)
    {
        return array;
    }
    else
    {
        // Divide the array in two.
        // Search the middle of the array.
        const middle = Math.floor(array.length / 2);
        const leftArray = array.slice(0, middle); // Save the first half of the array.
        const rightArray = array.slice(middle); // Save the second half of the array.

        // Make the recursive call on both arrays to keep dividing them until the base case is reached.
        mergeSort(leftArray);
        mergeSort(rightArray);
        // Call the merge function to sort the array elements in order.
        merge(leftArray, rightArray, array);
    }
}

function merge(leftArray,rightArray,array)
{
    // Get the size of both halves of the array.
    let leftSize = leftArray.length;
    let rightSize = rightArray.length;
    // Declare indices, i to keep track of the position in the original array, l to for the left array and r for the right array.
    let i = 0;
    let l = 0;
    let r = 0;
    // Check conditions for merging.
    while(l < leftSize && r < rightSize)
    {
        // Compare the numbers in both arrays and add the minor one to the array.
        if (leftArray[l] < rightArray[r])
        {
            array[i] = leftArray[l];
            i++;
            l++;
        }
        else
        {
            array[i] = rightArray[r];
            i++;
            r++;
        }
    }
    // In case there's one element remaining and can't be compared to others.
    // The left case.
     while(l < leftSize)
     {
        array[i] = leftArray[l];
        i++;
        l++;
     }
    //  The right case.
    while(r < rightSize)
    {
        array[i] = rightArray[r];
        i++;
        r++;
    }
}

mergeSort(array);
mergeSort(array2);
console.log(array);
console.log(array2);