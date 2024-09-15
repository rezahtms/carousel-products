import { FC } from "react";
import cx from 'classnames';
interface CarouselItemProps {
    id: string;
    image: string;
    title: string;
}

export const CarouselItem: FC<CarouselItemProps> = ({ image, title }) => {
    return (
        <li className={cx('carousel-item', 'flex-shrink-0 w-full h-[70vh] relative')}>
            <div className={cx('carousel-image', 'absolute inset-0 flex justify-center items-center')}>
                <img
                    className="w-full h-full rounded-lg"
                    src={image}
                    alt={`${title}-image`}
                    width="460" height="345"
                />
            </div>
        </li>
    );
}