import className from 'classnames/bind';
import styles from './ContentWrapper.module.scss';

let cx = className.bind(styles);

export default function ContentWrapper({ content, children, className }) {
  return (
    <article className="px-5 md:px-80">
      <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      {children}
    </article>
  );
}
