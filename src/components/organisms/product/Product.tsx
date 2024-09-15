import {  ProductUrl, Spinner, SvgCity, SvgPresenter, SvgPrice, SvgRate, SvgRuntime } from '@/components';
import { useGetProducts } from '@/features';
import cx from 'classnames';
import { useParams } from 'react-router-dom';
import { ProductDetailGroup } from './ProductDetailGroup';

export const Product = () => {
  const { isLoading, products } = useGetProducts();
  const { id } = useParams();
  const product = products?.find(product => product.id === id);

  if (isLoading) return <Spinner />
  if (!product) return <p>not fount Product</p>

  return (
    <div className={cx('product', 'w-[60vw] mx-auto flex flex-col rounded-lg shadow-xl overflow-hidden bg-white transition-transform cursor-pointer text-nowrap hover:scale-105', 'md:flex-row md:w-[70vw]', )}>
      <div className={cx('product-image-wrapper', "flex justify-center items-stretch relative  transition-transform duration-300 group ",'md:w-[50%]')}>
        <img
          className="w-full h-full max-w-auto object-cover transition duration-300 group-hover:blur-sm"
          src={`${product?.image}`}
          alt={`${product?.title} image`}
          loading='lazy'
        />
        <p className="absolute top-0 right-0 px-2 py-1 bg-gray-800 text-white text-[13px] font-bold rounded-bl-md">
          {product?.type}
        </p>
      </div>
      <div className={cx('product-details p-2 space-y-2','md:w-[50%]')}>
        <h2 className="text-[16px] font-bold  text-gray-800 mb-3">{product?.title}</h2>
        <ProductDetailGroup icon={<SvgPrice />} title='Price' value={`$ ${product?.price}`} />
        <ProductDetailGroup icon={<SvgRate />} title='Rating' value={product?.rate} />
        <ProductDetailGroup icon={<SvgCity />} title='City' value={product?.city} />
        <ProductDetailGroup icon={<SvgPresenter />} title='Presenter' value={product?.presenter} />
        <ProductDetailGroup icon={<SvgRuntime />} title='Runtime' value={product?.runtime} />
        <div className={cx('product-buttons-wrapper', ' flex items-center gap-2 mt-auto')}>  
          <ProductUrl href={product?.url} title={`View ${product?.type}`} target='_blank' />  
          <ProductUrl title=' Home' href={`/#${product?.id}`} />  
        </div> 
      </div>
    </div>
  )
}