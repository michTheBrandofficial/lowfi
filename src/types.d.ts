/// <reference types="vite/client" />

export { };

declare global {
  interface ActiveHeaderButton {
    Home: 0,
    Search: 1
  }
  namespace Utilities {
    type FunctionWithArgs = (...args: Array<any>) => void;
  }
}