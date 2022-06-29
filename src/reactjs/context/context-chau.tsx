import React, { createContext } from 'react';

interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const AppCtx = createContext<AppContextInterface | null>(null);

const sampleAppContext: AppContextInterface = {
  name: "Using React Context in Typescript App",
  author: "Byo Cáo",
  url: "fb.com/byocao",
};

export const ContextChau = () => (
  <AppCtx.Provider value={sampleAppContext}>...</AppCtx.Provider>
)
