export type TipType = "5%" | "10%" | "15%" | "25%" | "50%" | "custom";
export const TipRates = ["5%", "10%", "15%", "25%", "50%"] as TipType[];

export function isValidNumberString(str: string) {
    return !Number.isNaN(Number(str));
}

function getTipPercent({
    tip,
    customTip,
}: {
    tip: TipType;
    customTip: string;
}) {
    if (tip !== "custom") {
        switch (tip) {
            case "5%":
                return 0.05;
            case "10%":
                return 0.1;
            case "15%":
                return 0.15;
            case "25%":
                return 0.25;
            case "50%":
                return 0.5;
            default:
                return undefined;
        }
    }
    if (isValidNumberString(customTip)) {
        return 0.01 * Number(customTip);
    }
    return undefined;
}

export function calculate_tip_per_person({
    bill,
    tip,
    customTip,
    numberOfPeople,
}: {
    bill: string;
    tip: TipType;
    customTip: string;
    numberOfPeople: string;
}) {
    const percent = getTipPercent({ tip, customTip });
    if (!percent || bill === "" || numberOfPeople === "") return undefined;
    return ((Number(bill) * percent) / Number(numberOfPeople)).toFixed(2);
}

export function calculate_total_per_person({
    bill,
    tip,
    customTip,
    numberOfPeople,
}: {
    bill: string;
    tip: TipType;
    customTip: string;
    numberOfPeople: string;
}) {
    const percent = getTipPercent({ tip, customTip });
    if (!percent || bill === "" || numberOfPeople === "") return undefined;
    return ((Number(bill) * (percent + 1)) / Number(numberOfPeople)).toFixed(2);
}
