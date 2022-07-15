import { TCountryData } from "../models/models";

export const countryData = {
    countries: [
        {
            name: "India",
            states: [
                { name: "Kolkata", cities: ["Haora", "South Dum Dum", "Rajarhat Gopalpur", "Bhatpara"] },
                { name: "Delhi", cities: ["Ali Pur", "New Delhi", "rajiv chowk", "rajiv chowk", "dwarka", "Aya Nagar", "Shakarpur Baramad"] },
            ]
        },
        {
            name: "USA",
            states: [
                { name: "Alabama", cities: ["	Birmingham", "Huntsville", "Montgomery", "Hoover", "Madison"] },
                { name: "Alaska", cities: ["Adak", "Akiak", "Alakanuk", "Aleknagik", "Ambler"] },
                { name: "California", cities: ["Los Angeles", "	San Diego", "San Francisco", "Oakland"] },
                { name: "Georgia", cities: ["Atlanta", "	Athens", "Sandy Springs", "South Fulton", "	Valdosta", "	Newnan"] }
            ]
        },
        {
            name: "Russia",
            states: [
                { name: "Adygea", cities: ["	Adygeysk Federal", "Giaginsky District", "Koshekhablsky Distric", "Krasny Pakhar", "Smolchev-Malinovsky"] },
                { name: "Moscow", cities: ["Dmitriyevsky", "Druzhba", "Alakanuk", "Karmolino-Gidroitsky", "Krasny"] },
                { name: "Buryatia", cities: ["Krasnogvardeyskoye", "Kamennomostsky", "Mirny", "Michurina"] },
                { name: "Dagestan", cities: ["Shovgenovsky District", "	Chikalov", "Doroshenko", "Mamatsev", "	Pikalin", "	Pentyukhov"] },
                { name: "Dagestan", cities: ["Buynaksk", "	Gamsutl", "Izberbash", "Kizlyar", "Yuzhno-Sukhokumsk", "	Derbent", "Khasavyurt"] }
            ]
        },
    ],

};

// export const countryData:any = {
//     countries:["None","India","USA","Russia"],
//     India: [
//         {
//             name: "India",
//             states: ["None","Kolkata", "Delhi"],
//             None:[],
//             Kolkata: ["Haora", "South Dum Dum", "Rajarhat Gopalpur", "Bhatpara"],
//             Delhi: ["Ali Pur", "New Delhi", "rajiv chowk", "rajiv chowk", "dwarka", "Aya Nagar", "Shakarpur Baramad"]
//         }],
//     USA:[
//             {
//                 name: "USA",
//                 states: ["None","Alabama", "Alaska", "California", "Georgia"],
//                 None:[],
//                 Alabama: ["Birmingham", "Huntsville", "Montgomery", "Hoover", "Madison"],
//                 Alaska: ["Adak", "Akiak", "Alakanuk", "Aleknagik", "Ambler"],
//                 Georgia: ["Atlanta", "Athens", "Sandy Springs", "South Fulton", "	Valdosta", "Newnan"],
//                 California: ["Los Angeles", "	San Diego", "San Francisco", "Oakland"]
                
//             }
//         ],
//     Russia:[
//         {
//             name: "Russia",
//             states: ["None","Adygea", "Moscow", "Buryatia", "Dagestan"],
//             None:[],
//             Adygea: ["None","Adygeysk Federal", "Giaginsky District", "Koshekhablsky Distric", "Krasny Pakhar", "Smolchev - Malinovsky"],
//             Moscow: ["None","Dmitriyevsky", "Druzhba", "Alakanuk", "Karmolino - Gidroitsky", "Krasny"],
//             Buryatia : ["None","Krasnogvardeyskoye", "Kamennomostsky", "Mirny", "Michurina"],
//             Dagestan: ["None","Shovgenovsky District", "	Chikalov", "Doroshenko", "Mamatsev", "	Pikalin", "	Pentyukhov"]
//         }
//     ]
// };

// export const state=["None","Punjab","Haryana","Rajasthan","Himachal"]

// export const dist: IndexSignature ={
//     "Punjab":["None","Bathinda","SAS Nagar","Amritsar"],
//     "Haryana": ["None","Kaethal", "Fatehabad", "Gurugram"],
//     "Rajasthan": ["None","Ajmer", "Banswara", "Bikaner"],
//     "Himachal": ["None","Bilaspur", "Chamba", "Kullu"]
// }

// export const city: IndexSignature ={
//     "Bathinda":["Rampura Phul","Mehraj","Bhucho","Lehra"],
//     "SAS Nagar": ["Zirakpur", "Kharar", "Kurali","Banur"],
//     "Amritsar": ["Harike", "Attari","Khem Karn","Beas"],
//     "Kaethal": ["Cheeka", "Pundri","Rajound"],
//     "Fatehabad": ["Rajound", "Panjola", "Cheeka"],
//     "Gurugram": ["Wazirabad","Badshahpur","Kadipur","Garhi Harsaru"],
//     "Ajmer": ["Aradka","Banseli","Haera"],
//     "Banswara": ["Aradka", "Banseli", "Haera"],
//     "Bikaner": ["Wazirabad", "Badshahpur", "Kadipur"],
//     "Bilaspur":["Shinj","Balasar","Hemderpur"],
//     "Chamba": ["Khajjiar","Killar"],
//     "Kullu": ["Bajaura","Fojal","Gragram"]
// }