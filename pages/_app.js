import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import { WordPressBlocksProvider } from '@faustwp/blocks';
import blocks from '../wp-blocks'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your theme

import '@faustwp/core/dist/css/toolbar.css';

import '../styles/global.scss';


import 'swiper/css';
import 'swiper/css/pagination';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <WordPressBlocksProvider config={{blocks, theme: null }}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} key={router.asPath} />
        </ThemeProvider>
      </WordPressBlocksProvider>
    </FaustProvider>
  );
}
