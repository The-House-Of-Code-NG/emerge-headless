import styles from './Container.module.scss';
import className from 'classnames/bind';

let cx = className.bind(styles);

export default function Container({ children, className }) {
  return (
    <div className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden">
      {children}
    </div>
  );
}
