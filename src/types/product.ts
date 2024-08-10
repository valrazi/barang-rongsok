export type Products = {
    id: string;
    name: string;
    price:number;
    isAvailable:boolean;
    thumbnail:string;
}
export const products: Products[] = [
    {
      id: "product1",
      name: "Laptop",
      price: 1299,
      isAvailable: true,
      thumbnail: "https://placehold.co/600x400/png"
    },
    {
      id: "product2",
      name: "Smartphone",
      price: 799,
      isAvailable: true,
      thumbnail: "https://placehold.co/600x400/png"
    },
    {
      id: "product3",
      name: "Headphones",
      price: 199,
      isAvailable: true,
      thumbnail: "https://placehold.co/600x400/png"
    },
    {
      id: "product4",
      name: "Smartwatch",
      price: 299,
      isAvailable: true,
      thumbnail: "https://placehold.co/600x400/png"
    },
    {
      id: "product5",
      name: "T-Shirt",
      price: 25,
      isAvailable: true,
      thumbnail: "https://placehold.co/600x400/png"
    },
    {
      id: "product6",
      name: "Jeans",
      price: 59,
      isAvailable: true,
      thumbnail: "https://placehold.co/600x400/png"
    },
    {
      id: "product7",
      name: "Sneakers",
      price: 99,
      isAvailable: true,
      thumbnail: "https://placehold.co/600x400/png"
    },
    {
      id: "product8",
      name: "Book",
      price: 15,
      isAvailable: true,
      thumbnail: "https://placehold.co/600x400/png"
    },
    {
      id: "product9",
      name: "Game Console",
      price: 399,
      isAvailable: true,
      thumbnail: "https://placehold.co/600x400/png"
    },
    {
      id: "product10",
      name: "TV",
      price: 599,
      isAvailable: true,
      thumbnail: "https://placehold.co/600x400/png"
    }
  ];