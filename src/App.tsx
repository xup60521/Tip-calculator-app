import DollarIcon from "@/images/icon-dollar.svg";
import PersonIcon from "@/images/icon-person.svg";
import Logo from "@/images/logo.svg"
import {
    calculate_tip_per_person,
    calculate_total_per_person,
    isValidNumberString,
    TipRates,
} from "./utils";
import { useStateContext } from "./ContextProvider";

export default function App() {
    return (
        <main className="flex flex-col font-space_mono font-bold items-center gap-12 bg-c_Light_grayish_cyan min-h-screen justify-center">
            <img src={Logo} alt="logo" className="md:py-0 pt-16" />
            <div className="rounded-2xl bg-white md:grid flex flex-col grid-cols-2 gap-12 p-8 md:w-[58rem]">
                <Left />
                <Right />
            </div>
        </main>
    );
}

function Left() {
    const {
        bill,
        setBill,
        tip,
        setTip,
        customTip,
        setCustomTip,
        numberOfPeople,
        setNumberOfPeople,
    } = useStateContext();
    return (
        <div className="flex flex-col gap-10 relative py-2">
            <div className="flex flex-col relative gap-2">
                <span className="text-c_Very_dark_cyan">Bill</span>
                <input
                    data-testid="bill"
                    value={bill}
                    onChange={(e) => {
                        if (isValidNumberString(e.target.value)) {
                            setBill(e.target.value);
                        }
                    }}
                    type="text"
                    className="text-right min-w-0 bg-c_Very_light_grayish_cyan text-2xl text-c_Very_dark_cyan px-4 py-2 tracking-tighter outline-none"
                />
                <img
                    src={DollarIcon}
                    alt="dollar icon"
                    className="absolute bottom-4 left-5"
                />
            </div>
            <div className="flex flex-col relative gap-2">
                <span className="text-c_Very_dark_cyan">Select Tip %</span>
                <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                    {TipRates.map((item) => {
                        const testid = `tip${item.replace("%", "")}`;
                        return (
                            <button
                                data-testid={testid}
                                onClick={() => setTip(item)}
                                className={`text-2xl rounded-md py-[0.7rem] transition hover:bg-c_Strong_cyan hover:bg-opacity-50 hover:text-c_Very_dark_cyan ${
                                    tip === item
                                        ? "bg-c_Strong_cyan text-c_Very_dark_cyan"
                                        : "bg-c_Very_dark_cyan text-white"
                                }`}
                                key={item}
                            >
                                {item}
                            </button>
                        );
                    })}
                    {
                        <input
                            value={customTip}
                            onChange={(e) => {
                                if (isValidNumberString(e.target.value)) {
                                    setCustomTip(e.target.value);
                                }
                            }}
                            onClick={() => setTip("custom")}
                            className={`bg-c_Very_light_grayish_cyan placeholder:text-c_Very_dark_cyan cursor-pointer text-right px-4 text-c_Very_dark_cyan text-2xl rounded-md py-[0.7rem] placeholder:text-center outline-c_Strong_cyan ${
                                tip === "custom" && "ring-2 ring-c_Strong_cyan"
                            }`}
                            placeholder="Custom"
                        />
                    }
                </div>
            </div>
            <div className="flex flex-col relative gap-2">
                <span className="text-c_Very_dark_cyan">Number of People</span>
                <input
                    data-testid="people"
                    value={numberOfPeople}
                    onChange={(e) => {
                        if (isValidNumberString(e.target.value)) {
                            setNumberOfPeople(e.target.value);
                        }
                    }}
                    type="text"
                    className="text-right min-w-0 bg-c_Very_light_grayish_cyan text-2xl text-c_Very_dark_cyan px-4 py-2 tracking-tighter outline-none"
                />
                <img
                    src={PersonIcon}
                    alt="dollar icon"
                    className="absolute bottom-4 left-5"
                />
            </div>
        </div>
    );
}

function Right() {
    const { bill, setBill, tip, customTip, numberOfPeople, setNumberOfPeople } =
        useStateContext();
    return (
        <div className="rounded-xl bg-c_Very_dark_cyan flex flex-col px-12 py-8 pt-12 gap-12">
            <div className="flex items-center justify-between">
                <p className="flex flex-col gap-1">
                    <span className="text-white">Tip Amount</span>
                    <span className="text-sm text-c_Dark_grayish_cyan">
                        / person
                    </span>
                </p>
                <span data-testid="tip-per-person" className="md:text-[3rem] text-3xl text-c_Strong_cyan">
                    $
                    {calculate_tip_per_person({
                        bill,
                        tip,
                        customTip,
                        numberOfPeople,
                    })}
                </span>
            </div>
            <div className="flex items-center justify-between">
                <p className="flex flex-col gap-1">
                    <span className="text-white">Total</span>
                    <span className="text-sm text-c_Dark_grayish_cyan">
                        / person
                    </span>
                </p>
                <span data-testid="total-per-person" className="md:text-[3rem] text-3xl text-c_Strong_cyan">
                    $
                    {calculate_total_per_person({
                        bill,
                        tip,
                        customTip,
                        numberOfPeople,
                    })}
                </span>
            </div>
            <div className="flex-grow"></div>
            <div className="rounded-md overflow-hidden bg-c_Strong_cyan ">
                <button
                    onClick={() => {
                        setBill("");
                        setNumberOfPeople("");
                    }}
                    className="w-full py-2 text-xl text-c_Very_dark_cyan bg-opacity-50 hover:bg-white bg-transparent transition hover:bg-opacity-50"
                >
                    RESET
                </button>
            </div>
        </div>
    );
}

