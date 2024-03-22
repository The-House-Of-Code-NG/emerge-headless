import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import {
  FeaturedImage, Footer, Header, NavigationMenu,
} from '../components';
import Blocks from '../wp-blocks/index'

import {flatListToHierarchical} from "@faustwp/core";
import {WordPressBlocksViewer} from "@faustwp/blocks";
import {BlogInfoFragment} from "../fragments/GeneralSettings";
export default function Component(props) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
      props?.data?.generalSettings;


  const { editorBlocks } = props.data.page;
  const blocks = flatListToHierarchical(editorBlocks);
  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];

  return (
    <>
      <Header description={siteDescription} title={siteTitle} menuItems={primaryMenu} />
      <WordPressBlocksViewer blocks={blocks} />
      <Footer description={siteDescription} title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${FeaturedImage.fragments.entry}
  ${Blocks.EmergeServiceHeading.fragments.entry}
  ${Blocks.EmergeServiceHero.fragments.entry}
  ${Blocks.EmergeServiceBenefits.fragments.entry}
  ${Blocks.EmergeServicesSlider.fragments.entry}
  ${Blocks.EmergeServiceServices.fragments.entry}
  ${Blocks.EmergeServiceStages.fragments.entry}
  ${Blocks.EmergeCoreFaq.fragments.entry}
  ${Blocks.EmergeCaseStudy.fragments.entry}
  ${Blocks.EmergeCoreNewsletter.fragments.entry}
  query GetPageData(
    $databaseId: ID!
    $asPreview: Boolean = false
  ) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      ...FeaturedImageFragment
      editorBlocks(flat: false) {
      __typename
      renderedHtml
      id: clientId
      parentClientId
      ...${Blocks.EmergeServiceHeading.fragments.key}
      ...${Blocks.EmergeServiceHero.fragments.key}
      ...${Blocks.EmergeServiceBenefits.fragments.key}
      ...${Blocks.EmergeServicesSlider.fragments.key}
      ...${Blocks.EmergeServiceServices.fragments.key}
      ...${Blocks.EmergeServiceStages.fragments.key}
      ...${Blocks.EmergeCoreFaq.fragments.key}
      ...${Blocks.EmergeCaseStudy.fragments.key}
      ...${Blocks.EmergeCoreNewsletter.fragments.key}
    }
      
    }
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

// generalSettings {
// ...BlogInfoFragment
// }
// footerMenuItems: menuItems(where: { location: $footerLocation }) {
//   nodes {
//   ...NavigationMenuItemFragment
//   }
// }
// headerMenuItems: menuItems(where: { location: $headerLocation }) {
//   nodes {
//   ...NavigationMenuItemFragment
//   }
// }
