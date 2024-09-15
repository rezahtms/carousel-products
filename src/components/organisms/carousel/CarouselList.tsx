import cx from 'classnames';  
import { useGetProducts } from '@/features';  
import { useStore } from '@/stores';  
import { CarouselItem, Spinner } from '@/components';  
import { useLocation } from 'react-router-dom';  

export const CarouselList = () => {  
    const { products, isLoading } = useGetProducts();  
    const carouselInd = useStore(state => state.carouselInd);  
    const params = useLocation();  
    const hash = params.hash ? params.hash.substring(1) : null;  
    const sortedProducts = products!.sort((a) => {  
        if (hash && a.id === hash) {  
            return -1;   
        }  
        return 0; 
    });  
    
    if (isLoading) return <Spinner />;  
    return (  
        <ul className={cx('carousel-list flex transition-transform duration-500 ease-in-out', 'w-full')}  
            style={{ transform: `translateX(-${carouselInd * 100}%)` }}>  
            {sortedProducts.map(product => (  
                <CarouselItem key={product.id} {...product} />  
            ))}  
        </ul>  
    );  
}