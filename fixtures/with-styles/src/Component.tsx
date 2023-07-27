import '@crackle-fixtures/package-with-styles/styles.css';

import './thirdparty.css';

import * as styles from './Component.css';

export default () => (
  <div className={styles.redBorder}>
    <span className="external" />
  </div>
);
