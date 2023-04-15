import { createContext } from "react";
import { Animal } from "../models/Animal";

type DogContextType = {
  dogs: Animal[];
};

export const DogContext = createContext({} as DogContextType);
