import mulTwoNumbers from './mulTwoNumbers';

test('Render with correct props for Multiplication of two numbers', () => {
    expect(mulTwoNumbers(2, 3)).toBe(6);
});