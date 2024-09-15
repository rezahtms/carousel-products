import cx from 'classnames';
import { FC, ReactElement } from "react";

interface CarouselBtnProps {
    className?: string;
    title: ReactElement | string;
    onClick?: () => void;
}

export const CarouselBtn: FC<CarouselBtnProps> = ({ className, title, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={
                cx('carousel-btn', 'bg-[#121212] z-100 p-2 -translate-y-1/2  border-none outline-none cursor-pointer absolute top-1/2',
                    `${className}`
                )}>{title}</button>
    )
}
