import { createContext } from "react";
import { Animal } from "../models/Animal";

type AnimalContextType = {
  animals: Animal[];
};

export const AnimalContext = createContext({} as AnimalContextType);
