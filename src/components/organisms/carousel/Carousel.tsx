import cx from 'classnames';
import { CarouselList, Dots } from '@/components';

export const Carousel = () => {
    return (
        <div
            className={cx('carousel', 'w-[70vw] h-[70vh] relative border rounded-md  overflow-hidden ')}>
            <CarouselList />
            <Dots />
        </div>
    )
}

