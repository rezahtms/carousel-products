import { ViewProductDetailLink } from "../../atoms";  
import { FC } from "react";  

interface CarouselItemProps {  
    id: string;  
    image: string;  
    title: string; 
    type:string 
}  

export const CarouselItem: FC<CarouselItemProps> = ({ id, image, title,type }) => {  
    return (  
        <li className="flex-shrink-0 w-full h-[70vh] relative">  
            <div className="absolute inset-0 flex justify-center items-center">  
                <img  
                    className="w-full h-full rounded-lg object-fit-cover"  
                    src={image}  
                    alt={`${title}-image`}  
                    width="460" height="345"  
                />  
                <ViewProductDetailLink href={id} title={type} />  
            </div>  
        </li>  
    );  
}