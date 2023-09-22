https://www.youtube.com/watch?v=Ts3p5w0Xapc&ab_channel=WebCodeCamp

npm install -g @vue/cli

vue create landing-app
	Please pick a preset :
	-> Manually select features
	
	-> Babel
	-> TypeScript
	-> Progessive Web App (PWA) Support
	-> Router
	-> Vuex
	-> CSS Pre-processor

	Choose a version of Vue.js that you want to start the project with :
	-> 3.x
	
	Use class-style component syntax :
	-> Y
	
	Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpilling JSX)
	-> Y
	
	Use history mode for router?
	-> Yes
	
	Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default) :
	-> Sass/SCSS (with dart-sass)
	
	Where do you prefer placing config for Babel, ESLint, etc?
	-> In dedicated config files
	
	Save this as a preset for future projects?
	-> Y
	
	Save preset as :
	-> landing-app
	
di templatenya, cari folder assetsnya lalu copy seluruh folder dan file yang kira2 dipake.
di project kita, di dalem folder public bikin folder frontend
trus paste semua yang barusan di copy.

masih di templatenya, copy index.html lalu paste ke root folter frontend yang baru kita bikin

di project kita, di dalem folder src/views bikin file namanya Master.vue

di dalem file Master.vue, kan masih kosong tuh.
	-> Ketik vue jadi auto complete nya muncul nanti hasilnya default file vue kosongan (katanya namanya tu vue culture).
	-> Buka folder templatenya, trus cari file index.html trus copas semua isinya ke bagian template (masih di file Master.vue)
	-> nah di bagian script, export default nya dikasi parameter name:'Master'
	
di project kita, ke folder public. Cari file index.html trus rename jadi index.txt

di project kita, ke folder public trus bikin file kosong dinamain index.html

di folder public/frontend kan ada file index.html yang dari template tadi di copy tuh. Itu dibuka, trus dari atas sendiri sampe tutupan </head> di copy trus paste ke index.html yang barusan kita buat

di folder public/index.txt, nah ambil seluruh bagian <body> tapi baris terakhir yg </body> ga usah. Trus paste di index.html yang barusan kita buat.

di file frontend/index.html copy SCRIPT JS nya sampe </html>
lalu letakin di public/index.html posisinya dibawah yang tadi kita copas dari atasnya

di file public/index.html bagian <title> dikasi nama landing app | single page design App Html5 Landing

di file public/index.html benerin link2 cssnya disesuaikan ke patch assets kita

coba run projectnya

===================================================

di src/views bikin file Master.vue

di src/views/Master.vue bikin vue culture

di bagian export default kasi name:'Master'

buka file public/frontend/index.html 
copy mulai dari <body> sampai ke atasnya script 

paste ke src/views/Master.vue dalemnya <template>

di src/router/index.js bagian 
import Home from '../views/Home.vue'
diganti jadi
import Home from '../views/Master.vue'

buka file src/views/Master.vue hapus <body class="body-scroll">

buka file src/App.vue 
hapus seluruh <style>
remarks semua router-link

buka file public/index.html
benerin link2 javascriptnya

buka file src/views/Master.vue
benerin link2 imagesnya

cek di browser lagi (ternyata error)

bikin folder pages di src/views

di src/views/pages bikin file Home.vue
di src/views/pages bikin file About.vue
di src/views/pages bikin file Blog.vue
di src/views/pages bikin file Feature.vue
di src/views/pages bikin file Video.vue
di src/views/pages bikin file Pricing.vue

di src/views/About.vue
bikin vue culture

buka file src/views/Master.vue
copas mulai dari <div id="wrapper" class="wrapper clearfix"> sampe ke </header>

di src/views/pages bikin file Header.vue

di src/views/pages/Header.vue bikin vue culture
paste di bagian <template>

di src/views/pages/Header.vue
kasih name:'Header'
di components tambahin Header
pake <header> di template


di Master.vue ada error baris 573 karna ada </div> tapi kayaknya <div> pembukanya ke cut apa gmn gtw

di src/views/Master.vue
bagian <script> kasih import Header from './pages/Header.vue';

di src/views/pages bikin file Footer.vue

di src/views/Footer.vue
bikin vue culture

buka src/views/Master.vue
copy <footer>

di Footer.vue
paste ke <template>
kasi name:'Footer' di export default

buka src/views/Master.vue
bagian <script> kasih import Footer from './pages/Footer.vue';
di components tambahin Footer
pake <footer> di template

****************
buka src/views/Master.vue
copy <video>

di Video.vue
paste ke <template>
kasi name:'Video' di export default

buka src/views/Master.vue
bagian <script> kasih import Video from './pages/Video.vue';
di components tambahin Video
pake <video> di template

****************

buka src/views/Master.vue
copy <Feature>

di Feature.vue
paste ke <template>
kasi name:'Feature' di export default

buka src/views/Master.vue
bagian <script> kasih import Feature from './pages/Feature.vue';
di components tambahin Feature
pake <Feature> di template

===================================================