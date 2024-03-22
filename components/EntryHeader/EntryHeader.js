import className from 'classnames/bind';
import {  FeaturedImage } from '../../components';
import {Container} from "../Container";


export default function EntryHeader({  image}) {
  console.log(image)
  return (
    <Container>
      <div className={'mt-16'}>
        {image && (
            <FeaturedImage
                image={image}
                className="relative"
                priority
            />
        )}
      </div>
    </Container>
  );
}
