import { nanoid } from "nanoid";
//50 us states array
export const bdDistricts = [
    "Barguna",
    "Barisal",
    "Bhola",
    "Jhalokati",
    "Patuakhali",
    "Pirojpur",
    "Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chittagong",
    "Comilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachhari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Rajbari",
    "Shariatpur",
    "Tangail",
    "Bagerhat",
    "Chuadanga",
    "Jessore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
    "Jamalpur",
    "Mymensingh",
    "Netrokona",
    "Sherpur",
    "Bogra",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Chapai Nawabganj",
    "Pabna",
    "Rajshahi",
    "Sirajganj",
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",
    "Habiganj",
    "Moulvibazar",
    "Sunamganj",
    "Sylhet",
];
const randEl = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randKey = () => {
    const length = 15;
    const key = nanoid();
    return key;
};
/**
 * @typedef {Object} User
 * @property {string} id - The unique identifier of the user.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} state - The state where the user resides.
 */
/** @type {User[]} */
export const fakeData2 = [
    {
        id: "9s41rp",
        firstName: "Kelvin",
        lastName: "Langosh",
        email: "Jerod14@hotmail.com",
        state: randEl(bdDistricts),
    },
    {
        id: "08m6rx",
        firstName: "Molly",
        lastName: "Purdy",
        email: "Hugh.Dach79@hotmail.com",
        state: randEl(bdDistricts),
    },
    {
        id: "5ymtrc",
        firstName: "Henry",
        lastName: "Lynch",
        email: "Camden.Macejkovic@yahoo.com",
        state: randEl(bdDistricts),
    },
    {
        id: "ek5b97",
        firstName: "Glenda",
        lastName: "Douglas",
        email: "Eric0@yahoo.com",
        state: randEl(bdDistricts),
    },
    {
        id: "xxtydd",
        firstName: "Leone",
        lastName: "Williamson",
        email: "Ericka_Mueller52@yahoo.com",
        state: randEl(bdDistricts),
    },
    {
        id: "wzxj9m",
        firstName: "Mckenna",
        lastName: "Friesen",
        email: "Veda_Feeney@yahoo.com",
        state: randEl(bdDistricts),
    },
    {
        id: "21dwtz",
        firstName: "Wyman",
        lastName: "Jast",
        email: "Melvin.Pacocha@yahoo.com",
        state: randEl(bdDistricts),
    },
    {
        id: "o8oe4k",
        firstName: "Janick",
        lastName: "Willms",
        email: "Delfina12@gmail.com",
        state: randEl(bdDistricts),
    },
];

/**
 * @typedef {Object} User
 * @property {string} id - The unique identifier of the user.
 * @property {string} service_id - The unique identifier of the service.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} state - The state where the user resides.
 */
/** @type {User[]} */
export const fakeData = [
    {
        firstName: "Kelvin",
        lastName: "Langosh",
        email: "Jerod14@hotmail.com",
        state: randEl(bdDistricts),
    },
    {
        firstName: "Molly",
        lastName: "Purdy",
        email: "Hugh.Dach79@hotmail.com",
        state: randEl(bdDistricts),
    },
    {
        firstName: "Henry",
        lastName: "Lynch",
        email: "Camden.Macejkovic@yahoo.com",
        state: randEl(bdDistricts),
    },
    {
        firstName: "Glenda",
        lastName: "Douglas",
        email: "Eric0@yahoo.com",
        state: randEl(bdDistricts),
    },
    {
        firstName: "Leone",
        lastName: "Williamson",
        email: "Ericka_Mueller52@yahoo.com",
        state: randEl(bdDistricts),
    },
    {
        firstName: "Mckenna",
        lastName: "Friesen",
        email: "Veda_Feeney@yahoo.com",
        state: randEl(bdDistricts),
    },
    {
        firstName: "Wyman",
        lastName: "Jast",
        email: "Melvin.Pacocha@yahoo.com",
        state: randEl(bdDistricts),
    },
    {
        firstName: "Janick",
        lastName: "Willms",
        email: "Delfina12@gmail.com",
        state: randEl(bdDistricts),
    },
]
    .flatMap((item, idx, arr) => [...arr])
    .map((row) => {
        row.id = randKey();
        row.service_id = `service-${randKey()}`;
        return { ...row };
    });

console.log({ fakeData });
