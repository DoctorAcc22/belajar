<template>
    <section id="hero" class="hero">

    <img src="../assets/img/hero-bg.jpg" alt="">
    <!-- <img :src="require('@/assets/my-image.jpg')" alt="" data-aos="fade-in"> -->
    <!-- <img :src="require('@/assets/img/hero-bg.jpg')" alt="" data-aos="fade-in"> -->

    <div class="container">
    <div class="row">
        <div class="col-lg-10">
        <h2>Welcome to Our Website</h2>
        <p>We are team of talented designers making websites with Bootstrap</p>
        </div>
        <div class="col-lg-5">
        <form action="#" class="sign-up-form d-flex">
            <input type="text" class="form-control" placeholder="Enter email address">
            <input type="submit" class="btn btn-primary" value="Sign up">
        </form>
        </div>
    </div>
    </div>

    </section>
</template>

<script>
export default {
    name: 'BannerComponent'
}
</script>