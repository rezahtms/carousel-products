import cx from 'classnames';
export const Spinner = () => {
    return (
        <div className={cx('spinner', ' flex space-x-2 justify-center items-center bg-[#111827] h-full ')}>
            <span className='sr-only'>Loading...</span>
            <div className='h-4 w-4 opacity-[0.5] bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-4 w-4 opacity-[0.5] bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-4 w-4 opacity-[0.5] bg-white rounded-full animate-bounce'></div>
        </div>
    )
}

