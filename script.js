//---------------------------------------------------------------------//
                            // ANIMATIONS //
//---------------------------------------------------------------------//
// Selecteurs //
//gsap.from()    Anime DEPUIS l’état spécifié vers son état CSS actuel (l’état initial du HTML/CSS).
//gsap.to()    Anime VERS l’état spécifié à partir de son état CSS initial.
// gsap.fromTo() : animation avec départ et arrivée personnalisés
// https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration
// https://developer.mozilla.org/fr/docs/Web/CSS/transition
// https://developer.mozilla.org/en-US/docs/Web/CSS/animation
//-------------//
//--- 1ER ANIMATION 
document.getElementById("btn").addEventListener("click", function(){

    gsap.to(".box",{
        duration: 1,
        y: 0,
        opacity: 1,
        rotation: 360,
        scale: 1.2,
        ease: "bounce.inout"
    });
});

//--- 2EME ANIMATION 
window.addEventListener("DOMContentLoaded", function(){

    gsap.from("#title", {
        duration : 1.5,
        opacity : 0,
        y: -50,
        ease : "power2out"
    });
});

//--- 4EME ANIMATION
document.getElementById("showCard").addEventListener("click", function(){

    gsap.fromTo(".card-carre",

        { y : -100, opacity : 0},
        {y : 0, opacity: 1, duration : 1, ease:"elastic.out/(1, 0.4)"}

    )
});
//---------------------------------------------------------------------//


gsap.set(".information", { yPercent: 100 });

gsap.utils.toArray(".container").forEach((container) => {
  let info = container.querySelector(".information"),
    silhouette = container.querySelector(".silhouette .cover"),
    tl = gsap.timeline({ paused: true });

  tl.to(info, { yPercent: 0 }).to(silhouette, { opacity: 0 }, 0);

  container.addEventListener("mouseenter", () => tl.timeScale(1).play());
  container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
});



//---------------------------------------------------------------------//