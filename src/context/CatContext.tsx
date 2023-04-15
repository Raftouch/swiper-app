import { createContext } from "react";
import { Animal } from "../models/Animal";

type CatContextType = {
  cats: Animal[];
};

export const CatContext = createContext({} as CatContextType);
