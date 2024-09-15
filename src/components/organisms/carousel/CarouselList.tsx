import cx from 'classnames';
import { CarouselItem } from './CarouselItem';


export const CarouselList = () => {
    return (
        <ul className={cx('carousel-list flex ', 'w-full')}>
            {products?.map(product => (
            <CarouselItem {...product}/>
            ))}
        </ul>
    );
};
const products = [{ title: 'hello', id: 1 }, { title: 'hello', id: 2 }]