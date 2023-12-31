import { greet } from "../src/app";

test('handles no input', () => {
  expect(greet([])).toBe('Hello, my friend');
});

test('handles single input', () => {
  expect(greet(['Bob'])).toBe('Hello Bob!');
});


test('handles multiple inputs', () => {
  expect(greet(['Alice', 'Bob'])).toBe('Hello Alice and Bob!');
});

test('handles multiple inputs', () => {
  expect(greet(['Alice', 'Bob', 'Jerry'])).toBe('Hello Alice, Bob and Jerry!');
});

test('handles single uppercase input', () => {
  expect(greet(['BOB'])).toBe('HELLO BOB!');
});

test('handles double uppercase input', () => {
  expect(greet(['BOB', 'ALICE'])).toBe('HELLO BOB AND ALICE!');
});

test('handles multiple uppercase input', () => {
  expect(greet(['BOB', 'ALICE', 'DAN'])).toBe('HELLO BOB, ALICE AND DAN!');
});


test('handles multiple uppercase input', () => {
  expect(greet(['BOB', 'David', 'ALICE', 'Brigette', 'DAN'])).toBe('Hello David and Brigette! HELLO BOB, ALICE AND DAN!');
});

test('handles multiple uppercase input', () => {
  expect(greet(['BOB', 'David'])).toBe('Hello David! HELLO BOB!');
});

test('handles multiple uppercase input', () => {
  expect(greet(['BOB', 'David', 'ALICE', 'Brigette'])).toBe('Hello David and Brigette! HELLO BOB AND ALICE!');
});