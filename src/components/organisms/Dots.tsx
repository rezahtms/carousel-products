import cx from 'classnames';
import { Dot } from '@/components';
import { v4 as uuidv4 } from 'uuid';
export const Dots = () => {
    return (
        <div className={cx('control-dots',
            'flex items-center gap-[8px]  w-fit px-[10px] absolute bottom-3 left-1/2 right-1/2 transform -translate-x-1/2 z-100')}>
            {Array.from({ length: 15 }, (_, i) => <Dot key={uuidv4()} ind={i+1} />)}
        </div>
    );
}