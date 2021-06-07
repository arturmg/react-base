import React from 'react';
import { FaHome, FaSignInAlt, FaUser } from 'react-icons/fa'; // fa = font awesome

import { Nav } from './styled';

export default function Headers() {
  return (
    <Nav>
      <a href="home">
        <FaHome size={24} />
      </a>
      <a href="login">
        <FaSignInAlt size={24} />
      </a>
      <a href="users">
        <FaUser size={24} />
      </a>
    </Nav>
  );
}
