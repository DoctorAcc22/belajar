<template>
    <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="container-fluid d-flex align-items-center justify-content-between">

            <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
                <!-- Uncomment the line below if you also wish to use an image logo -->
                <!-- <img src="assets/img/logo.png" alt=""> -->
                <h1>Doctor Accounting</h1>
                <span>.</span>
            </a>

            <!-- Nav Menu -->
            <nav id="navmenu" class="navmenu">
                <ul>
                    <li>
                        <!-- <a href="index.html#hero" class="active">Home</a> -->
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/signin" class="nav-link">Sign In</router-link>
                    </li>
                </ul>

                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <a class="btn-getstarted" href="index.html#about">Get Started</a>

        </div>
    </header>
</template>

<script>
import "../../../assets/landing-page/vendor/bootstrap/css/bootstrap.min.css"
import "../../../assets/landing-page/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../../assets/landing-page/vendor/glightbox/css/glightbox.min.css"
import "../../../assets/landing-page/vendor/aos/aos.css"
import "../../../assets/landing-page/css/main.css"

export default {
    name: "AppHeader"
}
</script>