import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import Button from "@material-ui/core/Button";
import { Box } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Link from 'next/link';

export default function MobileMenu({ menuItems, className }) {
  const [expandedMenus, setExpandedMenus] = useState([]); 
  const router = useRouter();

  const navigateUrl = (url) => {
    return void router.push(url);
  };

  function handleClick(id) {
    setExpandedMenus((prevExpanded) => {
      const exists = prevExpanded.find((item) => item.id === id);
      if (exists) {
        return prevExpanded.slice(0, prevExpanded.indexOf(exists));
      } else {
        return [...prevExpanded, { id, level: 1 }]; 
      }
    }); 
  }

  function handleClickNested(id) {
    setExpandedMenus((prevExpanded) => {
      const exists = prevExpanded.find((item) => item.id === id); 
      if (exists) {
        return prevExpanded.slice(0, prevExpanded.indexOf(exists));
      } else {
        return [...prevExpanded, { id, level: 2 }]; 
      }
    });
  }

  return (
    <nav role="navigation" className='w-full' aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
      <div className='w-full'>
        {menuItems.map((item, index) => (
          <div key={item.id}> 
           <div className='cursor-pointer py-3 border-b border-gray-300 flex w-full justify-between' onClick={() => handleClick(item.id)}>
           <Link href={item.uri}>{item.label}</Link>
              {item.childItems?.nodes?.length > 0 && <img src='/chevronRight.svg' className='w-5' alt='Arrow' />} 
            </div>

            {expandedMenus.some((menu) => menu.id === item.id && menu.level === 1) && (  
              <motion.div  
                initial={{ opacity: 0, y: "-10px" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              > 
                {item.childItems.nodes.map((menuItem, index) => (
                  <>
                    <div key={menuItem.id} className='px-6 cursor-pointer py-3 border-b border-gray-300 flex w-full justify-between' onClick={() => handleClickNested(menuItem.id)}>
                        <Link href={menuItem.uri}>{menuItem.label}</Link>
                        {menuItem.childItems?.nodes?.length > 0 && <img src='/chevronRight.svg' className='w-5' alt='Arrow' />}
                      </div>
                    {/* Render Second Level Submenu */}
                    {expandedMenus.some(menu => menu.id === menuItem.id && menu.level === 2) && (
                      <motion.div 
                        initial={{ opacity: 0, x: "-10px" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className='pl-12'> 
                          {/* Your second level menu items */}
                          {menuItem.childItems.nodes.map((menuNestedItem, index) => (
                            <div className='cursor-pointer py-3 border-b border-gray-300'>
                              <Link href={menuNestedItem.uri} key={menuNestedItem.id}>
                                {menuNestedItem.label}
                              </Link>
                            </div>
                          ))}  
                        </div>
                      </motion.div>
                    )}
                  </>
                ))}
              </motion.div> 
            )}

        
          </div>
        ))}
      </div>
    </nav>
  );
}

MobileMenu.fragments = {
  entry: gql`
    fragment MobileMenuItemFragment on MenuItem {
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

