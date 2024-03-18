import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';

import {
    FeaturedImage,
    Footer,
    NavigationMenu,
    SEO
} from '../components';

import Blocks from '../wp-blocks/index';

import {WordPressBlocksViewer} from "@faustwp/blocks";
import {flatListToHierarchical} from "@faustwp/core";

import Header from "../components/Header/Header";

export default function Component(props) {
    if (props.loading) {
        return <>Loading...</>;
    }

    const { title: siteTitle, description: siteDescription } =
        props?.data?.generalSettings;

    const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
    const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];


    const { editorBlocks } = props.data.page;
    const blocks = flatListToHierarchical(editorBlocks);
    return (
        <>
            <SEO title={siteTitle} description={siteDescription} />
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
  ${Blocks.EmergeHomepage.fragments.entry}
  ${Blocks.EmergeCoreClients.fragments.entry}
  ${Blocks.EmergeWhatWeDo.fragments.entry}
  ${Blocks.EmergeHomepageCallToAction.fragments.entry}
  ${Blocks.EmergeHomepageServicesSlider.fragments.entry}
  ${Blocks.EmergeHomepagePartnership.fragments.entry}
  ${Blocks.EmergeHomepageWhyUs.fragments.entry}
  ${Blocks.EmergeCoreNewsletter.fragments.entry}
  ${Blocks.EmergeHomepageCalender.fragments.entry}
  ${Blocks.EmergeCoreFaq.fragments.entry}
  ${Blocks.EmergeHomepageReviews.fragments.entry}
  ${Blocks.EmergeHomepageTeam.fragments.entry}
  query GetPageData(
    $databaseId: ID!
    $asPreview: Boolean = false
  ) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      editorBlocks(flat: false) {
      __typename
      renderedHtml
      id: clientId
      parentClientId
    ...${Blocks.EmergeHomepage.fragments.key}
    ...${Blocks.EmergeCoreClients.fragments.key}
    ...${Blocks.EmergeWhatWeDo.fragments.key}
    ...${Blocks.EmergeHomepageCallToAction.fragments.key}
    ...${Blocks.EmergeHomepageServicesSlider.fragments.key}
    ...${Blocks.EmergeHomepagePartnership.fragments.key}
    ...${Blocks.EmergeHomepageWhyUs.fragments.key}
    ...${Blocks.EmergeCoreNewsletter.fragments.key}
    ...${Blocks.EmergeHomepageCalender.fragments.key}
    ...${Blocks.EmergeCoreFaq.fragments.key}
    ...${Blocks.EmergeHomepageReviews.fragments.key}
    ...${Blocks.EmergeHomepageTeam.fragments.key}
    }
      ...FeaturedImageFragment
    }
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: PRIMARY }) {
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
