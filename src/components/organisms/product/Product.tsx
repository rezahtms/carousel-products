import cx from 'classnames';
import { useParams } from 'react-router-dom';
export const Product = () => {

  const { id } = useParams();
  console.log(id);
  return (
    <div className={cx('product')}>
      Product
    </div>
  )
}

