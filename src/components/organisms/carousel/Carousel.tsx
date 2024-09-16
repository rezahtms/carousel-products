import cx from 'classnames';
import { CarouselBtn, CarouselList, Dots, SvgArrowLeft, SvgArrowRight } from '@/components';
import { useStore } from '@/stores';
import { useCallback } from 'react';

export const Carousel = () => {
    const prevItem = useStore(state => state.prevItem);
    const nextItem = useStore(state => state.nextItem);
    const handlePrevItem = useCallback(() => { prevItem() }, [prevItem])
    const handleNextItem = useCallback(() => { nextItem() }, [nextItem])
    return (
        <div
            className={cx('carousel', 'w-[70vw] h-[70vh] relative border rounded-md overflow-hidden ')}>
            <CarouselList />
            <CarouselBtn title={<SvgArrowLeft />} className='rounded-tr-md rounded-br-md' onClick={handlePrevItem} />
            <CarouselBtn title={<SvgArrowRight />} className='right-0 rounded-tl-md rounded-bl-md' onClick={handleNextItem} />
            <Dots />
        </div>
    )
}

