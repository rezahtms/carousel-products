import { useStore } from '@/stores';
import cx from 'classnames';
import { FC, useCallback } from 'react';

interface DotProps {
    ind: number;
}
export const Dot: FC<DotProps> = ({ ind }) => {

    const setCarouselInd = useStore(state => state.setCarouselInd);
    const carouselInd = useStore(state => state.carouselInd);
    const handleSetCarouselInd = useCallback(() => {
        setCarouselInd(ind)
    }, [ind, setCarouselInd]);
    console.log(carouselInd);
    return (
        <button
            onClick={handleSetCarouselInd}
            className={cx('dot-btn', 'bg-white  w-[6px] h-[6px] rounded-full cursor-pointer outline-none border-none hover:opacity-100', 'md:w-[9px] md:h-[9px]', `${carouselInd === ind ? 'opacity-1' : 'opacity-[0.5]'}`)}>&ensp;</button>
    )
}