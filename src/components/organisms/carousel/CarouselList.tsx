import cx from 'classnames';  
import { useGetProducts } from '@/features';  
import { useStore } from '@/stores';
import { CarouselItem, Spinner } from '@/components';


export const CarouselList = () => {  
    const { products, isLoading } = useGetProducts();  
    const carouselInd = useStore(state => state.carouselInd);  
    if (isLoading) return <Spinner />;  
    return (  
        <ul className={cx('carousel-list flex transition-transform duration-500 ease-in-out', 'w-full')}   
            style={{ transform: `translateX(-${carouselInd * 100}%)` }}>  
            {products?.map(product => (  
                <CarouselItem key={product.id} {...product} />  
            ))}  
        </ul>  
    );  
}