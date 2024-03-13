import { gql, useQuery } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Hero,
  Footer,
  Main,
  Container,
  NavigationMenu,
  SEO,
} from '../components';
import { getNextStaticProps } from '@faustwp/core';
import { BlogHero, BlogList } from '../components/Blog';

export default function Page(props) {
  const { data } = useQuery(Page.query, {
    variables: Page.variables(),
  });
  const title = props.title;

  const { title: siteTitle, description: siteDescription } = data?.generalSettings || {}; // Add default in case 'generalSettings' is null

  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      

          <BlogHero />
          <BlogList posts={data?.posts?.nodes} />


      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Page.query = gql`
query GetPosts {
    posts {
      nodes {
        id
        title
        slug
        date
        excerpt
        featuredImage {
            node {
            altText
            id
            sourceUrl
            }
        }
        categories {
            nodes {
            name
            id
            }
        }
        author {
            node {
            id
            slug
            avatar {
                url
            }
            description
            name
            }
        }
        tags {
            nodes {
            name
            slug
            id
            }
        }
      } 
    }
  }
`;

Page.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION
  };
};

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {Page, props: {title: 'File Page Example'}});
}
