import React, {useContext} from 'react';
import {createContext} from 'react';

export function makeProvider<T>(useHook: () => T) {
  const ctx = createContext<any>({});

  function Provider({children}: any) {
    const hookResult = useHook();
    return <ctx.Provider value={hookResult}>{children}</ctx.Provider>;
  }

  function useProvider(): T {
    const content = useContext(ctx);
    return content;
  }
  return {Provider, useProvider};
}
