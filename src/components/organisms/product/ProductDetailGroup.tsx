import cx from 'classnames';
import { FC, ReactElement } from "react"


interface ProductDetailGroupProps {
    icon: ReactElement;
    title: string;
    value: string
}
export const ProductDetailGroup: FC<ProductDetailGroupProps> = ({ icon, title, value }) => {
    return (
        <div className={cx('product-group', "flex items-center")}>
            {icon}
            <span className={cx('product-title', "text-md text-gray-600")}>{title} : 
                <span className={cx('product-value', "font-bold text-gray-800 text-md")}> {value}
                </span>
            </span>
        </div>
    )
}


