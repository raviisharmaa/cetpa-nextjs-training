import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
              <h6>In case of any concern, Contact Us</h6>
          </div>
          <div class="col-sm-6">
              <h6 className={styles.reserve}>© 2022 www.myntra.com. All rights reserved.</h6>
          </div>
        </div>
      </div>        
    </div>
  )
}

export default Footer
