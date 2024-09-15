import cx from 'classnames';
import { CarouselItem, Spinner } from '@/components';
import { useGetProducts } from '@/features';


export const CarouselList = () => {
    const { isLoading, products } = useGetProducts();
   if(isLoading) return <Spinner/>
    return (
        <ul className={cx('carousel-list flex ', 'w-full')}>
            {products ? products?.map(product => (
                <CarouselItem key={product.id} {...product} />
            )) : <p>there are not any product</p>}
        </ul>
    );
};
