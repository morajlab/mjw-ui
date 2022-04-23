import React from 'react';

import styles from './Topbar.module.css';

export const Topbar = () => {
  return (
    <ul className={styles.root}>
      <li>
        <button>first</button>
      </li>
      <li>
        <button>second</button>
      </li>
      <li>
        <button>third</button>
      </li>
    </ul>
  );
};

export default Topbar;
