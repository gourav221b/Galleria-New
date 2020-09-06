const navbar = document.querySelector('.navbar');
const active = document.querySelector('.active');
const navContainer = document.querySelector('#navbar');
navContainer.innerHTML = ' <div class="hamburger-menu" id="ham"><span class="bars"></span></div><div class="brand" ><span><a href="/index.html">Galleria De Artiste</a></span></div><div class="menu"><ul class="menu_items"><li><a class="nav_li" href="/index.html" id="home">HOME</a></li><li><a class="nav_li" href="/path/catalogue.html" id="Catalogue">CATALOGUE</a></li><li><a class="nav_li" href="/path/about.html" id="about">ABOUT</a></li><li><a class="nav_li " href="/path/contact.html" id="contact">CONTACT</a></li><li><a class="nav_li " href="/path/getfeatured.html" id="featured">GET FEATURED</a></li><li class="social"><a href="https://www.facebook.com/GalleriadeArtiste"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="https://www.instagram.com/galleria_de_artiste/"><i class="fa fa-instagram" aria-hidden="true"></i></a><a href="https://www.reddit.com/r/Galleria_de_artiste/"><i class="fa fa-reddit-alien" aria-hidden="true"></i></a><span id="copyright">&copy; GALLERIA-DE-ARTISTE 2020</span></li></ul></div>';


const footer = document.querySelector('.footerContainer');
footer.innerHTML = ' <div id="shareit"></div> <hr><footer><section class="left_footer"><p id="first">GALLERIA-DE-ARTISTE</p><p>Galleria de artiste is an open platform, multi talent platform featuring Art, Photography, Creative Writings and Music. It is more than just a website featuring art. It is a community, a child born out of the grievances of many new creators        over the unavailability of exclusive platforms for their work.</p></section><section class="middle_footer"><p id="first">Quick Links</p><p><ul class="middle_ul"><li><a href="index.html" class="yellow">Home</a></li>            <li><a class="yellow" href="/path/catalogue.html">Catalogue</a><ol class="middle_ul"><li><a class="red" href="/path/catalog/art.html">Art</a></li><li><a class="red" href="/path/catalog/photography.html">Photography</a></li><li><a class="red" href="/path/catalog/literature.html">Literature</a></li><li><a class="red"href="/path/catalog/music.html">Music</a></li></ol></li><li><a href="/path/about.html" class="yellow">About</a></li><li><a href="/path/contact.html" class="yellow">Contact</a></li><li><a href="/path/getfeatured.html" class="yellow"> Get Featured</a></li></ul></p></section><section class="right_footer"><p id="first">Follow Us on</p><p class="social_media"><div class="social_icon facebook"><a target="_blank" href="https://www.facebook.com/GalleriadeArtiste"><i class="fa fa-facebook" aria-hidden="true"></i></a></div>  <div class="social_icon instagram"><a target="_blank" href="https://www.instagram.com/galleria_de_artiste/"><i class="fa fa-instagram" aria-hidden="true"></i></a></div><div class="social_icon reddit"><a target="_blank" href="https://www.reddit.com/r/Galleria_de_artiste/"><i class="fa fa-reddit-alien" aria-hidden="true"></i></a></div><div class="social_icon twitter"><a><i class="fa fa-twitter" aria-hidden="true"></i></a></div></p><p id="copyright">© Galleria-De-Artiste 2020</p></section></footer>';

const share = document.querySelector('#shareit');
share.innerHTML = '<h2 class="shareText">Recommend us to your friends and family 😀</h2><div class="a2a_kit a2a_kit_size_32 a2a_default_style sharediv" data-a2a-url="https://www.gallerianew.netlify.app" data-a2a-title="Galleria De Artiste"><a class="a2a_dd" href="https://www.addtoany.com/share"></a><a class="a2a_button_copy_link"></a><a class="a2a_button_facebook"></a><a class="a2a_button_twitter"></a><a class="a2a_button_reddit"></a><a class="a2a_button_linkedin"></a><a class="a2a_button_whatsapp"></a><a class="a2a_button_telegram"></a></div>';

window.onscroll = function() { scrollFunction() };

const goto = document.querySelector(".goto");

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.background = "#000000e5";
        // active.style.color = "#f51707d2";
        // active.style.border = "2px solid transparent";
        goto.style.display = "inline-block";
    } else {
        document.getElementById("navbar").style.background = "transparent";
        // active.style.color = "#ffffff";
        // active.style.border = "2px solid #ffffff";
        goto.style.display = "none";
    }
}
const menuBtn = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu_items');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menu.style.width = "100%";
        document.getElementById("navbar").style.background = "#000000e5";
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menu.style.width = "0";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function() {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
});
var a2a_config = a2a_config || {};
a2a_config.onclick = 1;