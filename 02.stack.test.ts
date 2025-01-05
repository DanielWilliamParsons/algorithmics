import StackClass from './02.stack';

describe('StackClass', () => {
    it('should add a new item to the stack', () => {
        const stack = new StackClass<number>(1, undefined);
        stack.pushNewValue(2);
        expect(stack.getTopValue()).toEqual(2);
    });

    it('should have the previous value as undefined after instantiation', () => {
        const stack = new StackClass<number>(1, undefined);
        expect(stack.getPreviousValue()).toBeUndefined();
    });

    it('should have a previous value as a StackClass after instantiation and one new item pushed', () => {
        const stack = new StackClass<number>(1, undefined);
        stack.pushNewValue(2);
        expect(stack.getPreviousValue()).toBeInstanceOf(StackClass);
    });

    it('should return undefined when all items are popped', () => {
        const stack= new StackClass<number>(1, undefined);
        stack.popValue();
        expect(stack.popValue()).toBeUndefined();
        expect(stack.popValue()).toBeUndefined();
    });
});