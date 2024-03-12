import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import {
  FeaturedImage, Footer, Header,
} from '../components';
import Blocks from '../wp-blocks/index'

import {flatListToHierarchical} from "@faustwp/core";
import {WordPressBlocksViewer} from "@faustwp/blocks";
export default function Component(props) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const { editorBlocks } = props.data.page;
  const blocks = flatListToHierarchical(editorBlocks);

  return (
    <>
      <Header />
      <WordPressBlocksViewer blocks={blocks} />
      <Footer />
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
  ${FeaturedImage.fragments.entry}
  ${Blocks.EmergeServiceHeading.fragments.entry}
  ${Blocks.EmergeServiceHero.fragments.entry}
  ${Blocks.EmergeServiceBenefits.fragments.entry}
  ${Blocks.EmergeServicesSlider.fragments.entry}
  ${Blocks.EmergeServiceServices.fragments.entry}
  ${Blocks.EmergeServiceStages.fragments.entry}
  ${Blocks.EmergeCoreFaq.fragments.entry}
  ${Blocks.EmergeCaseStudy.fragments.entry}
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
