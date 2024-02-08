import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {

    NavigationMenu,
    FeaturedImage,
} from '../components';
import Blocks from '../wp-blocks/index'
import {WordPressBlocksViewer} from "@faustwp/blocks";
import {flatListToHierarchical} from "@faustwp/core";
import Header from "../components/Header/Header";


export default function Component(props) {
    if (props.loading) {
        return <>Loading...</>;
    }

    const { title: siteTitle, description: siteDescription } =
        props?.data?.generalSettings;
    const { editorBlocks } = props.data.page;
    const blocks = flatListToHierarchical(editorBlocks);
    return (
        <>
            <Header />
            <WordPressBlocksViewer blocks={blocks} />
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
  query GetPageData(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
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
    }
      ...FeaturedImageFragment
    }
    generalSettings {
      ...BlogInfoFragment
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
