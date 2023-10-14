<template>
    <!-- Preloader Start -->
    <div class="se-pre-con"></div>
    <!-- Preloader Ends -->


    <!-- Start Header Top 
    ============================================= -->
    <div class="top-bar-area bg-dark inc-shape text-light inc-pad">
        <div class="container">
            <div class="row align-center">
                <div class="col-lg-9">
                    <div class="flex-item left">
                        <p>
                            That's right, we only sell 100% organic
                        </p>
                        <ul>
                            <li>
                                <i class="fas fa-map-marker-alt"></i> California, TX 70240
                            </li>
                            <li>
                                <i class="fas fa-envelope-open"></i> Info@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 text-right">
                    <div class="social">
                        <ul>
                            <li>
                                <a href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Header Top -->

    <!-- Header 
    ============================================= -->
    <header id="home">

        <!-- Start Navigation -->
        <nav class="navbar navbar-default navbar-sticky bootsnav">

            <div class="container">

                <!-- Start Atribute Navigation -->
                <div class="attr-nav inc-border">
                    <ul>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-shopping-basket"></i>
                                <span class="badge">3</span>
                            </a>
                            <ul class="dropdown-menu cart-list">
                                <li>
                                    <a href="#" class="photo"><img src="/img/100x100.png" class="cart-thumb"
                                            alt="" /></a>
                                    <h6><a href="#">Delica omtantur </a></h6>
                                    <p>2x - <span class="price">$99.99</span></p>
                                </li>
                                <li>
                                    <a href="#" class="photo"><img src="/img/100x100.png" class="cart-thumb"
                                            alt="" /></a>
                                    <h6><a href="#">Omnes ocurreret</a></h6>
                                    <p>1x - <span class="price">$33.33</span></p>
                                </li>
                                <li>
                                    <a href="#" class="photo"><img src="/img/100x100.png" class="cart-thumb"
                                            alt="" /></a>
                                    <h6><a href="#">Agam facilisis</a></h6>
                                    <p>2x - <span class="price">$99.99</span></p>
                                </li>
                                <li class="total">
                                    <span class="pull-right"><strong>Total</strong>: $0.00</span>
                                    <a href="#" class="btn btn-default btn-cart">Cart</a>
                                </li>
                            </ul>
                        </li>
                        <li class="side-menu"><a href="#"><i class="fa fa-bars"></i></a></li>
                    </ul>
                </div>
                <!-- End Atribute Navigation -->

                <!-- Start Header Navigation -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="index.html">
                        <img src="/img/logo-green.png" class="logo" alt="Logo">
                    </a>
                </div>
                <!-- End Header Navigation -->

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Home</a>
                            <ul class="dropdown-menu">
                                <!-- <li><a href="index.html">Home Version One</a></li>
                                <li><a href="index-2.html">Home Version Two</a></li>
                                <li><a href="index-3.html">Home Version Three</a></li> -->

                                <li><router-link to="/">Home Version One</router-link></li>
                                <li><router-link to="/home-two">Home Version Two</router-link></li>
                                <li><router-link to="/home-three">Home Version Three</router-link></li>
                            </ul>
                        </li>                        

                        <li><router-link to="/about-us">About Us</router-link></li>

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/services">Services</router-link></li>
                                <li><router-link to="/team">Farmers</router-link></li>
                                <li><router-link to="/contact">Get in Touch</router-link></li>
                                <li><router-link to="/not-found">Error Page</router-link></li>
                            </ul>
                        </li>                                                
                        <li><router-link to="/gallery">Gallery</router-link></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/blog-standard">Blog Standard</router-link></li>
                                <li><router-link to="/blog-with-sidebar">Blog With Sidebar</router-link></li>
                                <li><router-link to="/blog-2-column">Blog Grid Two Column</router-link></li>
                                <li><router-link to="/blog-3-column">Blog Grid Three Column</router-link></li>
                                <li><router-link to="/blog-single">Blog Single</router-link></li>
                                <li><router-link to="/blog-single-with-sidebar">Blog Single With Sidebar</router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div>

            <!-- Start Side Menu -->
            <div class="side">
                <a href="#" class="close-side"><i class="ti-close"></i></a>
                <div class="widget">
                    <h4 class="title">Get in touch</h4>
                    <p>
                        Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat
                        hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few
                        blind.
                    </p>
                    <a href="#" class="btn btn-theme effect btn-sm" data-animation="animated slideInUp">Consultation</a>
                </div>
                <div class="widget">
                    <h4 class="title">Additional Links</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
                <div class="widget social">
                    <h4 class="title">Connect With Us</h4>
                    <ul class="link">
                        <li class="facebook"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li class="twitter"><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li class="pinterest"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                        <li class="dribbble"><a href="#"><i class="fab fa-dribbble"></i></a></li>
                    </ul>
                </div>
            </div>
            <!-- End Side Menu -->


        </nav>
        <!-- End Navigation -->

    </header>
    <!-- End Header -->
</template>

<script>
export default {
    name: "AppHeader"
}
</script>