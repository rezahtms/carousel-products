import cx from 'classnames';
import { FC } from 'react';
interface BackBtnProps {
    title: string;
    onClick?: () => void
}
export const BackBtn: FC<BackBtnProps> = ({ title, onClick }) => {
    return (
        <button onClick={onClick} className={cx('back', "mt-2 block w-full flex-grow bg-blue-600 text-white text-center py-2 px-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200 shadow-lg transform hover:scale-105")}>
            {title}
        </button>
    )
}

