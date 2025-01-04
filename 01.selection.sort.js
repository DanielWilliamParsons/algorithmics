"use strict";
// Selection sort is very simple
/**
 * A class that performs selection sort on an array
 * @template T - The type of array to be sorted (must be an array)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionSort = /** @class */ (function () {
    /**
     *
     * @param initialArray - The array to be sorted
     */
    function SelectionSort(initialArray) {
        this.toSort = initialArray;
        this.topIndex = 0;
        this.bottomIndex = 0;
        this.foundLowestIndex = 0;
        this.highestIndex = this.toSort.length - 1;
    }
    /**
     * Moves the top pointer to the next index in the array
     */
    SelectionSort.prototype.nextValueTopPointer = function () {
        this.topIndex++;
    };
    /**
     * Moves the bottom pointer to the next index in the array
     */
    SelectionSort.prototype.nextValueBottomPointer = function () {
        // Should point to the next index of the Array
        this.bottomIndex++;
    };
    /**
     * Compares the values at the bottom and the found lowest pointer,
     * updating the found lowest pointer if needed
     */
    SelectionSort.prototype.compareValues = function () {
        if (this.toSort[this.bottomIndex] < this.toSort[this.foundLowestIndex]) {
            this.foundLowestIndex = this.bottomIndex;
        }
    };
    /**
     * Swaps the value at the top pointer with the value at the found lowest index.
     */
    SelectionSort.prototype.performSwap = function () {
        if (this.toSort[this.foundLowestIndex] < this.toSort[this.topIndex]) {
            var temp = this.toSort[this.topIndex];
            this.toSort[this.topIndex] = this.toSort[this.foundLowestIndex];
            this.toSort[this.foundLowestIndex] = temp;
        }
    };
    /**
     * Performs the selection sort algorithm and returns the sorted array
     * @returns {T} - The sorted array
     */
    SelectionSort.prototype.performSort = function () {
        // Loop through the array with the top pointer
        for (var j = this.topIndex; j <= this.highestIndex; j++) {
            //console.log("The top index is: ", this.topIndex);
            // Loop through the array with the bottom pointer
            for (var i = this.bottomIndex; i <= this.highestIndex; i++) {
                //console.log("The bottom index is: ", this.bottomIndex);
                this.compareValues();
                this.nextValueBottomPointer();
            }
            // Perform a swap, increment the top pointer 
            // and reset the bottom pointer 
            // and reset the foundLowestIndex values
            this.performSwap();
            this.nextValueTopPointer();
            this.bottomIndex = this.topIndex;
            this.foundLowestIndex = this.topIndex;
        }
        return this.toSort;
    };
    return SelectionSort;
}());
exports.default = SelectionSort;
// const instance = new SelectionSort<number[]>([4, 3, 2, 1]);
// const output = instance.performSort();
// console.log(output);
// const instance2 = new SelectionSort<number[]>([4, 3, 2, 1, 5, 6, 8, 7, 10]);
// const output2 = instance2.performSort();
// console.log(output2);
// const instance3 = new SelectionSort<string[]>(["d", "c", "b", "a"]);
// const output3 = instance3.performSort();
// console.log(output3);
// const instance4 = new SelectionSort<string[]>(["ab", "cd", "ef", "ij", "kl", "mn", "op", "qr", "st", "gh"]);
// const output4 = instance4.performSort();
// console.log(output4);
