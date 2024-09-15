import cx from 'classnames';
import { CarouselItem } from './CarouselItem';
import { useGetProducts } from '@/features';


export const CarouselList = () => {
    const {isLoading,products} =useGetProducts();
    console.log(isLoading,products)
    return (
        <ul className={cx('carousel-list flex ', 'w-full')}>
            {productss?.map(product => (
            <CarouselItem key={product.id} {...product}/>
            ))}
        </ul>
    );
};
const productss = [{ title: 'hello', id: 1 }, { title: 'hello', id: 2 }]