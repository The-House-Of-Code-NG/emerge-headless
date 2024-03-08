import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import { WordPressBlocksProvider } from '@faustwp/blocks';
import blocks from '../wp-blocks'


import '@faustwp/core/dist/css/toolbar.css';

import '../styles/global.scss';


import 'swiper/css';
import 'swiper/css/pagination';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
        <WordPressBlocksProvider config={{blocks, theme: null }}>
            <Component {...pageProps} key={router.asPath} />
        </WordPressBlocksProvider>
    </FaustProvider>
  );
}
