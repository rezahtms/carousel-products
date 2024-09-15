import cx from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ProductUrlProps {
    href: string;
    title: string;
    target?: "_blank" | "_self" | "_parent" | "_top";

}
export const ProductUrl: FC<ProductUrlProps> = ({ href, title, target }) => {
    return (
        <Link to={href}
            className={cx('product-url', "mt-2 block w-full bg-blue-600 text-white text-center py-2 px-3 font-semibold rounded-md hover:bg-blue-700 transition duration-200 shadow-lg outline-none transform hover:scale-105"
            )}
            target={target}>
            {title}
        </Link>
    )
}

