<template>
    <section id="hero" class="hero">

    <img src="../assets/img/hero-bg.jpg" alt="">
    <!-- <img :src="require('@/assets/my-image.jpg')" alt="" data-aos="fade-in"> -->
    <!-- <img :src="require('@/assets/img/hero-bg.jpg')" alt="" data-aos="fade-in"> -->

    <div class="container">
    <div class="row">
        <div class="col-lg-10">
        <h2>Solusi bagi UMKM & perusahaan di Indonesia</h2>
        <p>Lebih dari 100 UMKM hingga perusahaan  telah menggunakan Doctor Accounting</p>
        </div>
        <div class="col-lg-5 mt-3">
            <!-- <form action="#" class="sign-up-form d-flex">
                <input type="text" class="form-control" placeholder="Enter email address">
                <input type="submit" class="btn btn-primary" value="Sign up">
            </form> -->
            <input type="button" class="btn btn-primary" value="Download">
        </div>
    </div>
    </div>

    </section>
</template>

<script>
export default {
    name: 'HeroSection'
}
</script>