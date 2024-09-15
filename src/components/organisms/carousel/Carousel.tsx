import cx from 'classnames';
import { CarouselBtn, CarouselList, Dots, SvgArrowLeft, SvgArrowRight } from '@/components';

export const Carousel = () => {
    return (
        <div
            className={cx('carousel', 'w-[70vw] h-[70vh] relative border rounded-md overflow-hidden ')}>
            <CarouselList />
            <CarouselBtn title={<SvgArrowLeft />} className='rounded-tr-md rounded-br-md' onClick={() => console.log('prev')} />
            <CarouselBtn title={<SvgArrowRight />} className='right-0 rounded-tl-md rounded-bl-md' onClick={() => console.log('next')} />
            <Dots />
        </div>
    )
}

