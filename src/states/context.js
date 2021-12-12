import { createContext } from "react";
import {appState} from './state';

export let context;

export function getContext() {
  if(!context) context = createContext(appState);
  return context;
}
