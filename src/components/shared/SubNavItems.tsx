
import Link from 'next/link'
import React from 'react'
import { subheaderLinks } from '../../../constants';


const SubNavItems = () => {
  
  return (
    <ul className="flex md:w-full flex-col items-start gap-5 lg:flex-row ">
      {subheaderLinks.map((link) => {  
        return (
          <li
            key={link.route}
            className="p-small-10 whitespace-nowrap border-r-2 px-2"
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SubNavItems