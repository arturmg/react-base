import React from 'react';
import { FaHome, FaSignInAlt, FaUser } from 'react-icons/fa'; // fa = font awesome
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Headers() {
  return (
    <Nav>
      <Link to="alunos">
        <FaHome size={24} />
      </Link>
      <Link to="/">
        <FaSignInAlt size={24} />
      </Link>
      <Link to="users">
        <FaUser size={24} />
      </Link>
    </Nav>
  );
}
