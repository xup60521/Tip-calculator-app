import { createContext, useContext, useState } from "react";
import { type TipType } from "./utils";
import { unknown } from "zod";

const context = createContext({
    tip: "5%" as TipType,
    setTip: unknown as React.Dispatch<React.SetStateAction<TipType>>,
    bill: "",
    setBill: unknown as React.Dispatch<React.SetStateAction<string>>,
    customTip: "",
    setCustomTip: unknown as React.Dispatch<React.SetStateAction<string>>,
    numberOfPeople: "",
    setNumberOfPeople: unknown as React.Dispatch<React.SetStateAction<string>>,
});

export function ContextProvider({ children }: { children: React.ReactNode }) {
    const [bill, setBill] = useState("");
    const [tip, setTip] = useState<TipType>("5%");
    const [customTip, setCustomTip] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    return (
        <context.Provider
            value={{
                bill,
                setBill,
                tip,
                setTip,
                customTip,
                setCustomTip,
                numberOfPeople,
                setNumberOfPeople,
            }}
        >
            {children}
        </context.Provider>
    );
}

export const useStateContext = () => useContext(context)