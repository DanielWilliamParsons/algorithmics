// Selection sort is very simple
/**
 * A class that performs selection sort on an array
 * @template T - The type of array to be sorted (must be an array)
 */

class SelectionSort<T extends Array<any>> {
    private toSort: T;
    private topIndex: number;
    private bottomIndex: number;
    private foundLowestIndex: number;
    private highestIndex: number;

    /**
     * 
     * @param initialArray - The array to be sorted
     */

    constructor(initialArray: T) {
        this.toSort = initialArray;
        this.topIndex = 0;
        this.bottomIndex = 0;
        this.foundLowestIndex = 0;
        this.highestIndex = this.toSort.length - 1;
    }

    /**
     * Moves the top pointer to the next index in the array
     */
    private nextValueTopPointer(): void {
        this.topIndex++;
    }

    /**
     * Moves the bottom pointer to the next index in the array
     */
    private nextValueBottomPointer(): void {
        // Should point to the next index of the Array
        this.bottomIndex++;
    }

    /**
     * Compares the values at the bottom and the found lowest pointer, 
     * updating the found lowest pointer if needed
     */
    private compareValues(): void {
        if (this.toSort[this.bottomIndex] < this.toSort[this.foundLowestIndex]) {
            this.foundLowestIndex = this.bottomIndex;
        }
    }

    /**
     * Swaps the value at the top pointer with the value at the found lowest index.
     */
    private performSwap(): void {
        if (this.toSort[this.foundLowestIndex] < this.toSort[this.topIndex]) {
            const temp = this.toSort[this.topIndex];
            this.toSort[this.topIndex] = this.toSort[this.foundLowestIndex];
            this.toSort[this.foundLowestIndex] = temp;
        }
        
    }

    /**
     * Performs the selection sort algorithm and returns the sorted array
     * @returns {T} - The sorted array
     */
    public performSort(): T {
        // Loop through the array with the top pointer
        for(let j = this.topIndex; j <= this.highestIndex; j++) {
            //console.log("The top index is: ", this.topIndex);

            // Loop through the array with the bottom pointer
            for (let i = this.bottomIndex; i <= this.highestIndex; i++) {
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
    }
}

export default SelectionSort;