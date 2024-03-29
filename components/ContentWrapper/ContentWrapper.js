import className from 'classnames/bind';
import styles from './ContentWrapper.module.scss';

let cx = className.bind(styles);

export default function ContentWrapper({ content, children, className }) {
  return (
    <article className="md:w-[720px] w-full m-auto">
      <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      {children}
    </article>
  );
}
