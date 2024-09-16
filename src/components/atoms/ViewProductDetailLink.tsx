import cx from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
interface ViewLinkProps {
    href: string;
    title:string
}
export const ViewProductDetailLink: FC<ViewLinkProps> = ({ href,title }) => {
    return (
        <Link to={`product/${href}`}
            className={cx('visit-product-details',
                ' block py-3 bg-black opacity-[0.7] w-full absolute bottom-10 z-50 left-1/2 right-1/2 transform -translate-x-1/2 cursor-pointer')}>
            <span className={cx('text-center text-[12px] text-white font-bold block')}>View Product {title}</span>
        </Link>

    )
}