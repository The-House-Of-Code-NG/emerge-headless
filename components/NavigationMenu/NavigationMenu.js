import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./Dropdown";
import Button from "@material-ui/core/Button";
import { Box } from '@mui/material';

export default function NavigationMenu({ menuItems, className }) {
  const router = useRouter()

  if (!menuItems) {
    return <></>;
  }

  const navigateUrl = (url) => {
    return void router.push(url)
  };


  return (
    <nav
      role="navigation"
      className='w-full'
      aria-label={`${menuItems[0]?.menu?.node?.name} menu`}
    >
      <Box className="flex w-full flex-col lg:flex-row items-center lg:ml-[2.25rem]">
       {menuItems.map((item) => (
        <Dropdown
        trigger={<Button className='w-full lg:justify-normal !px-[1.25rem] lg:!px-2 !justify-between !flex gap-2  py-[6px] text-[15px] !capitalize !font-Inter font-[500]'><div onClick={() => navigateUrl(item.uri)}>{item.label}</div> {item.childItems?.nodes?.length > 0 ? <img src='/chevronDown.svg' className='w-5' alt='Arrow' /> : null}</Button>}
        menu={item.childItems.nodes.map((i) => (
          <DropdownNestedMenuItem
          label={i.label}
          rightIcon={i.childItems?.nodes?.length > 0 ? <img src='/chevronRight.svg' className='w-5' alt='Arrow' /> : null}
          onClick={() => navigateUrl(i.uri)}
          menu={i.childItems?.nodes?.length > 0 && i.childItems.nodes.map((subitem) => (
            <DropdownMenuItem
              onClick={() => navigateUrl(subitem.uri)}
            >
              {subitem.label}
            </DropdownMenuItem>
          ))}
        />
        ))
         }
      />
       ))}
    </Box>
    </nav>
  );
}


NavigationMenu.fragments = {
  entry: gql`
    fragment NavigationMenuItemFragment on MenuItem {
      id
      label
      uri
      childItems {
        nodes {
          id
          uri
          label
          childItems {
            nodes {
              id
              uri
              label
            }
          }
        }
      }
    }
  `,
};
