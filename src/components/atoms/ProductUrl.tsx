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
            className={cx('product-url', " block min-w-[48%] flex-1 bg-blue-600 text-white text-center py-2 px-3 font-semibold rounded-md hover:bg-blue-700  shadow-lg outline-none "
            )}
            target={target}>
            {title}
        </Link>
    )
}

