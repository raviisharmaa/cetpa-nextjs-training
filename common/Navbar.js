import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div>

      <div class="container">
        <div class="row">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              {/* <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button> */}
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link className={styles.navbar_link} href="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link className={styles.navbar_link} href="/about">About</Link>
                  </li>
                  <li class="nav-item">
                    <Link className={styles.navbar_link} href="/courses">Courses</Link>
                  </li>
                  <li class="nav-item">
                    <Link className={styles.navbar_link} href="/products">Products</Link>
                  </li>
                  <li class="nav-item">
                    <Link className={styles.navbar_link} href="/facilities">Facilities</Link>
                  </li>
                  <li class="nav-item">
                    <Link className={styles.navbar_link} href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>








        

        
    </div>
  )
}

export default Navbar
