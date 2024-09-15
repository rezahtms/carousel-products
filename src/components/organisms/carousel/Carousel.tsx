import cx from 'classnames';
import { CarouselBtn, CarouselList, Dots, SvgArrowLeft, SvgArrowRight } from '@/components';
import { useStore } from '@/stores';

export const Carousel = () => {
    const prevItem = useStore(state => state.prevItem);
    const nextItem = useStore(state => state.nextItem);
    return (
        <div
            className={cx('carousel', 'w-[70vw] h-[70vh] relative border rounded-md overflow-hidden ')}>
            <CarouselList />
            <CarouselBtn title={<SvgArrowLeft />} className='rounded-tr-md rounded-br-md' onClick={() => prevItem()} />
            <CarouselBtn title={<SvgArrowRight />} className='right-0 rounded-tl-md rounded-bl-md' onClick={() => nextItem()} />
            <Dots />
        </div>
    )
}

