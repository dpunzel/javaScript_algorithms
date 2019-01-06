// pivotSwap helper
function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;
    
    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

// pivot([4,8,2,1,5,7,6,3])

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left side sort
        quickSort(arr, left, pivotIndex - 1);
        // right side sort
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([100,-3,2,4,6,9,2,5,3]));