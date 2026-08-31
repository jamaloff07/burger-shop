export type Product = {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
  };
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Classic Cheese Burger",
      description: "Juicy beef with melted cheese",
      price: "$8.99",
      category: "Burgers",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      id: 2,
      name: "Crispy Chicken Burger",
      description: "Golden fried chicken fillet",
      price: "$9.99",
      category: "Burgers",
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
    },
    {
      id: 3,
      name: "Double Cheese Delight",
      description: "Double beef, double cheese",
      price: "$11.99",
      category: "Burgers",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      id: 4,
      name: "Spicy Chicken",
      description: "Hot & spicy fried chicken",
      price: "$9.49",
      category: "Chicken",
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
    },
    {
      id: 5,
      name: "BBQ Bacon Burger",
      description: "Smoky BBQ with crispy bacon",
      price: "$10.99",
      category: "Burgers",
      image:
        "https://images.unsplash.com/photo-1550317138-10000687a72b",
    },
    {
      id: 6,
      name: "Chicken Nuggets",
      description: "10 pieces golden nuggets",
      price: "$6.99",
      category: "Chicken",
      image:
        "https://images.unsplash.com/photo-1562967914-608f82629710",
    },
    {
      id: 7,
      name: "Crispy Fried Chicken",
      description: "2 pieces with fries",
      price: "$8.99",
      category: "Chicken",
      image:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58",
    },
    {
      id: 8,
      name: "Spicy Wings",
      description: "6 pieces hot wings",
      price: "$7.99",
      category: "Chicken",
      image:
        "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f",
    },
  ];