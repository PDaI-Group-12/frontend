import {createContext, useContext} from "react";
import {LabelContent} from "./types.ts";

export const LabelContext = createContext<LabelContent>({
    label: "",
    setLabel: () => {
    }
});

export const useLabel = () => useContext(LabelContext);