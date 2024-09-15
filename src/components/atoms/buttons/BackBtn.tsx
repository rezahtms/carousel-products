import cx from 'classnames';
import { FC } from 'react';
interface BackBtnProps {
    title: string;
    onClick?:()=>void
}
export const BackBtn:FC<BackBtnProps> = ({title,onClick}) => {
    return (
        <button onClick={onClick} className={cx('back', 'inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 text-nowrap')}>
            {title}
        </button>
    )
}

