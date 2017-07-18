import { invokeIfFunction } from './common';

let func;
const funcParams = [1, 2, 3];
const funcParamNonArr = 1;

beforeEach(() => {
  func = jest.fn();
});

test('should invoke if there is a function', () => {
  invokeIfFunction(func, funcParams);
  expect(func.mock.calls[0][0]).toBe(funcParams[0]);
  expect(func.mock.calls[0][2]).toBe(funcParams[2]);
});

test('invokeIfFunction should support params that are not an array', () => {

  invokeIfFunction(func, funcParamNonArr);
  expect(func.mock.calls[0][0]).toBe(funcParamNonArr);
});
