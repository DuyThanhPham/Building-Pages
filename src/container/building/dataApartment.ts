import Apartment from "../../type/apartment";
import imageApartment1 from "../../assets/images/Screen Shot 2021-03-23 at 11.20.09 AM.png";
import imageApartment2 from "../../assets/images/Screen Shot 2021-03-23 at 11.17.36 AM.png";
import imageApartment3 from "../../assets/images/Screen Shot 2021-03-22 at 5.23.38 PM.png";
import imageApartment4 from "../../assets/images/Screen Shot 2021-03-22 at 5.23.54 PM.png";
import imageApartment5 from "../../assets/images/imagereader-2.jpg";
import imageApartment6 from "../../assets/images/Screen Shot 2021-03-22 at 5.23.45 PM.png";

export const apartmentsForRent: Array<Apartment> = [
  {
    id: 1,
    image: imageApartment1,
    floor: "6F",
    price: "1.800",
    beds: 1,
    baths: 1,
    type: "Normal",
  },
  {
    id: 2,
    image: imageApartment2,
    floor: "1B",
    price: "1.675",
    beds: 0,
    baths: 1,
    type: "Studio",
  },
  {
    id: 3,
    image: imageApartment3,
    floor: "4A",
    price: "2.200",
    beds: 2,
    baths: 1,
    type: "Normal",
  },
  {
    id: 4,
    image: imageApartment4,
    floor: "3E",
    price: "1.800",
    beds: 1,
    baths: 1,
    type: "Normal",
  },
  {
    id: 5,
    image: imageApartment5,
    floor: "2C",
    price: "2125",
    beds: 1.5,
    baths: 1,
    type: "Normal",
  },
  {
    id: 6,
    image: imageApartment6,
    floor: "5D",
    price: "2400",
    beds: 2,
    baths: 1.5,
    type: "Normal",
  },
];
