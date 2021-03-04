import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
         <div className="container">
            <p> 
               © 2020 Headquarter, DataVault LLC. All Rights Reserved
            </p>
         </div>
      </footer>
    );
};

export default Footer;