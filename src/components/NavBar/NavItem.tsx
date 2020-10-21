import React from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  text: string;
}

const NavItem: React.FC<Props> = ({ href, text }) => {
  return (
    <li>
      <Link href={href} as={href}>
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
