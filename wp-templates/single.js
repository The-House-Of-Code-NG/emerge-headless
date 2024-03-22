import { gql } from '@apollo/client';
import { useFaustQuery } from '@faustwp/core';
import {
  Container,
  ContentWrapper,
  EntryHeader,
  FeaturedImage,
  Footer,
  Header,
  Main,
  NavigationMenu,
  SEO,
} from '../components';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {ArticleBottom, BlogHero, BlogList} from "../components/SingleBlog";

const GET_LAYOUT_QUERY = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetLayout {
    generalSettings {
      ...BlogInfoFragment
    }
    
    headerMenuItems: menuItems(where: { location: PRIMARY, parentDatabaseId: 0, }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: FOOTER}) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

const GET_POST_QUERY = gql`
  ${FeaturedImage.fragments.entry}
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      excerpt
      date
      tags {
            nodes {
            name
            slug
            id
            }
        }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      ...FeaturedImageFragment
    }
    posts {
      nodes {
        title
      content
      excerpt
      date
      tags {
            nodes {
            name
            slug
            id
            }
        }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      ...FeaturedImageFragment
      }
    }
  }
`;

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { post, posts } = useFaustQuery(GET_POST_QUERY);
  const {  headerMenuItems, footerMenuItems } =
    useFaustQuery(GET_LAYOUT_QUERY);

  // const { title: siteTitle, description: siteDescription } = generalSettings;
  const primaryMenu = headerMenuItems?.nodes ?? [];
  const footerMenu = footerMenuItems?.nodes ?? [];
  const { title, content, featuredImage, date, author } = post ?? {};

  return (
    <>
      <SEO
        imageUrl={featuredImage?.node?.sourceUrl}
      />
      <main>
        <Header  menuItems={primaryMenu}/>
        <BlogHero  post={post}/>
        <EntryHeader
            image={featuredImage?.node}
        />
        <ContentWrapper content={content} />
        <Container>
        <div className='md:w-[720px] w-full m-auto'>
          <ArticleBottom article={post} />
        </div>
        </Container>
        <BlogList posts={posts.nodes} />
      </main>
      <Footer menuItems={footerMenu} />
    </>
  );
}

Component.queries = [
  {
    query: GET_LAYOUT_QUERY,
    variables: (seedNode, ctx) => ({
      headerLocation: MENUS.PRIMARY_LOCATION,
      footerLocation: MENUS.FOOTER_LOCATION,
    }),
  },
  {
    query: GET_POST_QUERY,
    variables: ({ databaseId }, ctx) => ({
      databaseId,
      asPreview: ctx?.asPreview,
    }),
  },
];
