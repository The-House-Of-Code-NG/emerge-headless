import { gql } from '@apollo/client';
import Link from 'next/link';
export default function NavigationMenu({ menuItems, className }) {
  if(!menuItems) {
    return <></>
  }

  console.log(menuItems)
    return (
    <nav
      role="navigation"
      aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
      <ul className="flex flex-row items-center space-x-8 ml-[2.25rem]">
        {menuItems && menuItems?.length && menuItems.map((item, index) => (
            <li className="group py-2 px-2.5 mega-menu " key={index}>
              <Link href={item.uri} className="cursor-pointer relative flex items-center text-sm xl:text-base text-current transition-all duration-300 group-hover:text-blue-500 font-medium after:absolute after:-bottom-2.5 after:-left-2.5 after:w-0 group-hover:after:w-[calc(100%_+_20px)] after:transition-all after:h-0.5 after:bg-blue-400">
                {item.label}
              </Link>
              {item?.childItems?.nodes?.length > 0 && (
                  <div className="w-full max-w-[40rem] w-full absolute  mx-auto mt-2.5 px-6  bg-white p-4 space-y-4 shadow-lg opacity-0 invisible pointer-events-none group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 transition-all duration-300">
                    <ul className="flex flex-col space-y-4 list-disc">
                      {item?.childItems?.nodes.map((child, index) => (
                         <li key={index}>
                           <Link href={child.url ?? ''} className="" >
                             {child.label}
                           </Link>
                         </li>
                      ))}
                    </ul>
                  </div>
              )}
            </li>
        ))}
      </ul>
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
          uri
          label
        }
      }
    }
  `,
};
