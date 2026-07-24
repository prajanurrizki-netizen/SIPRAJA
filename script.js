/* =====================================================
   PUSKESMAS WANAREJA 2
   script.js
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       MENU MOBILE
    ========================================== */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.querySelector("nav");

    if (menuBtn) {

        menuBtn.addEventListener("click", function () {

            nav.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (nav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");

            } else {

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        });

    }

    // Tutup menu ketika menu diklik
    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            const icon = menuBtn.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        });

    });




    /* ==========================================
       MODAL PENDAFTARAN
    ========================================== */

    const modal = document.getElementById("modalDaftar");
    const btnDaftar = document.getElementById("btnDaftar");
    const btnClose = document.querySelector(".close");

    if (btnDaftar) {

        btnDaftar.onclick = function () {

            modal.style.display = "flex";

        };

    }

    if (btnClose) {

        btnClose.onclick = function () {

            modal.style.display = "none";

        };

    }

    window.onclick = function (e) {

        if (e.target == modal) {

            modal.style.display = "none";

        }

    };




    /* ==========================================
       FORM PENDAFTARAN
    ========================================== */

    const form = document.querySelector("#modalDaftar form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Pendaftaran berhasil.\n\nSilakan datang sesuai jadwal pelayanan.");

            form.reset();

            modal.style.display = "none";

        });

    }




    /* ==========================================
       BACK TO TOP
    ========================================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });




    /* ==========================================
       HEADER EFFECT
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.background = "#ffffff";

            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.10)";

        } else {

            header.style.background = "rgba(255,255,255,.95)";

            header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

        }

    });




    /* ==========================================
       ANIMASI SCROLL
    ========================================== */

    const elements = document.querySelectorAll(

        ".service-card, .doctor-card, .contact-card, .section-title, table"

    );

    elements.forEach(el => {

        el.classList.add("fade-up");

    });

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    elements.forEach(el => {

        observer.observe(el);

    });




    /* ==========================================
       SMOOTH SCROLL MENU
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const tujuan = document.querySelector(this.getAttribute("href"));

            if (tujuan) {

                tujuan.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});