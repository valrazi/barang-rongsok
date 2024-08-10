import {Products, products} from './index'
export type User = {
    id: string;
    email: string;
    password: string;
    fullName: string;
    gender:string;
    birthDate:string;
    photo:string;
    address:string;
    products: Products[]
}
export const users: User[] = [
    {
      id: "user1",
      email: "john.doe@example.com",
      password: "password123",
      fullName: "John Doe",
      gender: "Male",
      birthDate: "1990-01-01",
      products: [products[0], products[2], products[1], products[3]],
      photo: "https://placehold.co/600x400/png",
      address:'Jl. Komjen.Pol.M.Jasin No.9, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451'
    },
    {
      id: "user2",
      email: "jane.smith@example.com",
      password: "password456",
      fullName: "Jane Smith",
      gender: "Female",
      birthDate: "1992-03-15",
      products: [products[1], products[3]],
      photo: "https://placehold.co/600x400/png",
      address:'Jl. Komjen.Pol.M.Jasin No.9, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451'
    },
    {
      id: "user3",
      email: "michael.johnson@example.com",
      password: "password789",
      fullName: "Michael Johnson",
      gender: "Male",
      birthDate: "1988-07-28",
      products: [products[4], products[5]],
      photo: "https://placehold.co/600x400/png",
      address:'Jl. Komjen.Pol.M.Jasin No.9, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451'
    },
    {
      id: "user4",
      email: "emily.brown@example.com",
      password: "password101",
      fullName: "Emily Brown",
      gender: "Female",
      birthDate: "1995-11-12",
      products: [products[6], products[7]],
      photo: "https://placehold.co/600x400/png",
      address:'Jl. Komjen.Pol.M.Jasin No.9, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451'
    },
    {
      id: "user5",
      email: "david.miller@example.com",
      password: "password111",
      fullName: "David Miller",
      gender: "Male",
      birthDate: "1985-04-05",
      products: [products[8], products[9]],
      photo: "https://placehold.co/600x400/png",
      address:'Jl. Komjen.Pol.M.Jasin No.9, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451'
    }
  ];