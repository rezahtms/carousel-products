
import { FC } from "react";

interface CarouselItemProps {
    id: number;
    title: string;
}

export const CarouselItem: FC<CarouselItemProps> = ({ id, title }) => {
    return (
        <li >
            <li key={id}>
                <p>{title} - {id}</p>
            </li>
        </li>
    );
}