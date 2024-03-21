import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react'; // Import useState
import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./Dropdown";
import Button from "@material-ui/core/Button";

export default function NavigationMenu({ menuItems, className }) {
  const router = useRouter()

  if (!menuItems) {
    return <></>;
  }

  const [showSubmenu, setShowSubmenu] = useState(null);
  const [showNestedSubmenu, setShowNestedSubmenu] = useState(null);

  
  

  const navigateUrl = (url) => {
    console.log(url)
    return router.push(url)
  };


  return (
    <nav
      role="navigation"
      aria-label={`${menuItems[0]?.menu?.node?.name} menu`}
    >
       <ul className="flex flex-row items-center space-x-8 ml-[2.25rem]">
       {menuItems.map((item) => (
        <Dropdown
        trigger={<Button style={{ textTransform: "capitalize !important" }} className='flex gap-2 capitalize font-Inter important' onClick={() => navigateUrl(item.uri)}>{item.label} {item.childItems?.nodes?.length > 0 ? <img src='/chevronDown.svg' className='w-5' alt='Arrow' /> : null}</Button>}
        menu={item.childItems.nodes.map((i) => (
          <DropdownNestedMenuItem
          label={i.label}
          rightIcon={i.childItems?.nodes?.length > 0 ? <img src='/chevronRight.svg' className='w-5' alt='Arrow' /> : null}
          onClick={() => navigateUrl(i.uri)}
          menu={i.childItems?.nodes?.length > 0 && i.childItems.nodes.map((subitem) => (
            <DropdownMenuItem
              onClick={() => navigateUrl(i.uri)}
            >
              {subitem.label}
            </DropdownMenuItem>
          ))}
        />
        ))
         }
      />
       ))}
    </ul>
    </nav>
  );
}

function renderTrigger(menuItem) {
  return (
    <li className="group py-2 px-2.5 mega-menu w-full">
      <button  className="cursor-pointer relative flex items-center text-sm xl:text-base text-current transition-all duration-300 group-hover:text-blue-500 font-medium after:absolute after:-bottom-2.5 after:-left-2.5 after:w-0 group-hover:after:w-[calc(100%_+_20px)] after:transition-all after:h-0.5 after:bg-blue-400">
        {menuItem.label}
      </button>
    </li>
  );
}

function renderMenuItems(items) {
  return items.map((item) => (
    <DropdownNestedMenuItem 
      key={item.id} 
      label={item.label} 
      rightIcon={item.childItems?.nodes?.length > 0 ? <img src='/chevronRight.svg' alt='Arrow' /> : null}
      menu={item.childItems?.nodes ? renderMenuItems2(item.childItems.nodes) : []} 
    /> 
  ));
}

function renderMenuItems2(items) {
  return items.map((item) => (
    <DropdownMenuItem onClick={() => {}}>
      {item.label}
    </DropdownMenuItem>
  ));
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
