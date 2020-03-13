export class MockStateContext {
  getState = jest.fn();
  patchState = jest.fn();
  setState = jest.fn();
  dispatch = jest.fn();
}
