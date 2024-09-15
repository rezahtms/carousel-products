import cx from 'classnames';

export const Dot = () => {
    return (
        <button className={cx('dot-btn', 'bg-white  w-[6px] h-[6px] rounded-full opacity-[0.5]   cursor-pointer outline-none border-none hover:opacity-100', 'md:w-[9px] md:h-[9px]')}>&ensp;</button>
    )
}