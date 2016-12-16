export interface State {
    /**
     * A state or province's 2-letter ISO abbrevation.
     */
    iso: string;
    /**
     * The state or province's full name.
     */
    name: string;
}
export declare type Region = "Asia" | "Europe" | "Africa" | "Oceania" | "Americas" | "Antarctica";
export interface Country {
    /**
     * The country's 2-letter ISO abbreviation.
     */
    iso: string;
    /**
     * The country's full name.
     */
    name: string;
    /**
     * Whether the country has postal or ZIP codes.
     */
    hasPostalCodes: boolean;
    /**
     * The country's region or continent. Values can be "Asia", "Europe", "Africa", "Oceania", "Americas" or "Antarctica".
     */
    region: Region;
    /**
     * The country's states or provinces. Note: most countries do not have any states or provinces.
     */
    states: State[];
    /**
     * A regex to check if a given ZIP or postal code is a match for the country.
     */
    zipRegex: string | number;
}
export declare const countries: Country[];
export declare const regions: Region[];
export default countries;
