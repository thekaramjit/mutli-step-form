export interface IBasicInfo {
        name: string,
        fName: string,
        mName: string,
        email: string
        gender: string,
        age: number | undefined
}

export interface ICompanyInfo {
        companyName: string,
        profile: string,
        currentSalary: number | undefined | string,
        expectedSalary: number | undefined | string
}

export interface IPropCompanyInfo {
        getInfo:{
                companyName: string,
                profile: string,
                currentSalary: number | undefined,
                expectedSalary: number | undefined
        }
        
}

export interface IAddress {
        country: string,
        state: string,
        city: string,
        zipCode: number | undefined
}

export interface IHobbies {
        hobbies: string[],
        jsLevel: string
}

export interface IRootState {
        basicInfo: IBasicInfo,
        companyInfo: ICompanyInfo,
        addressInfo: IAddress,
        hobbiesInfo: IHobbies
}

export interface btnProps {
        nextStep: () => void
        previousStep: () => void
        setFormData: React.Dispatch<React.SetStateAction<any>>
}

export interface IndexSignature {
        [key: string]: string[],
}

export type TCountryData = {
        countries: string[];
        India: {
                name: string;
                states: {
                        name: string;
                        cities: string[];
                }[];
        }[];
        USA: {
                name: string;
                states: {
                        name: string;
                        cities: string[];
                }[];
        }[];
        Russia: {
                name: string;
                states: {
                        name: string;
                        cities: string[];
                }[];
        }[];
}

export type TCountryMapData={
        countries?: {
                name?: string;
                states?: {
                        name?: string;
                        cities?: string[];
                }[];
        }[];
}