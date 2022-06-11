import React from "react";
import Link from "next/link";

import Text from '../Core/Text';
const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`d-block ${className}`} {...rest}>
        {white ? (
          <Text variant={'lg'} key={'logoTextKias'} style={{
            fontWeight: 'bold',
            marginTop: '15px',
            color: 'green'
          }}>
            Kias Design Interior
          </Text>
        ) : (
          <Text variant={'lg'} key={'logoTextKias'} style={{
            fontWeight: 'bold',
            marginTop: '15px',
            color: 'green'
          }}>
            Kias Design Interior
          </Text>
        )}
      </a>
    </Link>
  );
};

export default Logo;
