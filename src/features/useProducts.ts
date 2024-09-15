import { getProducts } from "@/services"
import { useQuery } from "react-query"



export const useGetProducts=()=>{
    const {isLoading,data:products}=useQuery({
        queryKey:['products'],
        queryFn:getProducts,
    });
    return {isLoading,products}
}