import cx from 'classnames';  
import { useGetProducts } from '@/features';  
import { Spinner,CarouselItem } from '@/components';  

export const CarouselList = () => {  
    const { products, isLoading } = useGetProducts();  
    if (isLoading) return <Spinner />;  
    return (  
        <ul className={cx('carousel-list flex transition-transform duration-1000 ease-in-out', 'w-full')}   
            style={{ transform: `translateX(-${100}%)` }}>  
            {products?.map(product => (  
                <CarouselItem key={product.id} {...product} />  
            ))}  
        </ul>  
    );  
}