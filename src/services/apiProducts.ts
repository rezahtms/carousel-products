import { ProductType } from "@/types";

const API_URL = `https://66e20997c831c8811b57050e.mockapi.io/api/v1/home/items`;

export const getProducts = async (): Promise<ProductType[]> => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json() as ProductType[];
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Failed to fetch products: ${error.message}`);
            throw new Error(`Failed to fetch products:${error.message} `);
        } else {
            console.error(`Unexpected error: ${error}`);
            throw new Error(`Unexpected error occurred ${error}`);
        }
    }
};
