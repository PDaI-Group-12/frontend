import {DefaultProvidersProps} from "../types.ts";
import {useState} from "react";
import {LabelContext} from "../useLabel.ts";

export const LabelProvider = (props: DefaultProvidersProps) => {

    const [label, setLabel] = useState("PDaI 12");

    return (
        <LabelContext.Provider value={{label, setLabel}}>
            {props.children}
        </LabelContext.Provider>
    );
};