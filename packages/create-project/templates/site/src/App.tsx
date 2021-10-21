import type { AppShell } from '@crackle/core';
import { Link } from '@crackle/router';
import React from 'react';

const App: AppShell = ({ children }) => (
  <div>
    <p>Crackle</p>
    <p>Pages:</p>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>

    <div>{children}</div>
  </div>
);

export default App;
