import { createContext } from "react";
import {appState} from './states';

export const context = createContext(appState);

export function getContext() {
  return context;
}
