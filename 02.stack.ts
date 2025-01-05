class StackClass<T> {
    private value: T | undefined;
    private previousValue: StackClass<T> | undefined;

    constructor(value: T, previousValue: StackClass<T> | undefined) {
        this.value = value;
        this.previousValue = previousValue;
    }

    public getTopValue(): T | undefined {
        return this.value;
    }

    public getPreviousValue(): StackClass<T> | undefined {
        return this.previousValue;
    }

    public pushNewValue(newTopValue: T): void {
        if(this.value !== undefined) {
            this.previousValue = new StackClass<T>(this.value, this.previousValue);
            this.value = newTopValue;
        } else {
            this.value = newTopValue;
        }
        
    }

    public popValue(): T | undefined {
        const temp = this.value;
        if (this.value !== undefined) {
            this.value = this.previousValue?.getTopValue();
            this.previousValue = this.previousValue?.getPreviousValue();
            return temp;
        } else {
            return temp;
        }
    }
}

// const stack1 = new StackClass<number>(1, undefined);
// console.log(stack1.getTopValue());
// stack1.pushNewValue(2);
// stack1.pushNewValue(3);
// stack1.pushNewValue(4);
// stack1.pushNewValue(5);
// console.log("Stack1 is: ", stack1);
// console.log(stack1.popValue());
// console.log("Stack1 is: ", stack1);
// console.log(stack1.popValue());
// console.log("Stack1 is: ", stack1);
// console.log(stack1.popValue());
// console.log("Stack1 is: ", stack1);

export default StackClass;