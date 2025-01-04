import SelectionSort from './01.selection.sort';

describe('SelectionSort', () => {
    it('should sort a numeric array in ascending order', () => {
        const sorter = new SelectionSort<number[]>([4, 3, 2, 1]);
        const result = sorter.performSort();
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should handle an already sorted numeric array', () => {
        const sorter = new SelectionSort<number[]>([1, 2, 3, 4]);
        const result = sorter.performSort();
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should sort a string array in alphabetical order', () => {
        const sorter = new SelectionSort<string[]>(["d", "c", "b", "a"]);
        const result = sorter.performSort();
        expect(result).toEqual(["a", "b", "c", "d"]);
    });

    it('should sort a string array with mixed-length strings', () => {
        const sorter = new SelectionSort<string[]>(["dog", "cat", "bird", "ant"]);
        const result = sorter.performSort();
        expect(result).toEqual(["ant", "bird", "cat", "dog"]);
    });

    it('should handle an empty array', () => {
        const sorter = new SelectionSort<number[]>([]);
        const result = sorter.performSort();
        expect(result).toEqual([]);
    });

    it('should handle a single-element array', () => {
        const sorter = new SelectionSort<number[]>([1]);
        const result = sorter.performSort();
        expect(result).toEqual([1]);
    });

    it('should handle duplicate values in the array', () => {
        const sorter = new SelectionSort<number[]>([4, 2, 2, 1]);
        const result = sorter.performSort();
        expect(result).toEqual([1, 2, 2, 4]);
    });
});