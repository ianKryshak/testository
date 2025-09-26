let index = 0; 
//alles gpt
document.addEventListener('DOMContentLoaded', function() {
    // Buttons
    document.getElementById('prev').addEventListener('click', function() {
        show_slide(-1);
    });

    document.getElementById('next').addEventListener('click', function() {
        show_slide(1);
    });

    // Show first slide
    show_slide(index);

    // --- Swipe mode for mobile ---
    const slider = document.querySelector('.hero-slider');
    let startX = 0;
    let endX = 0;

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', () => {
        const swipeDistance = endX - startX;
        const minSwipe = 50;

        if (swipeDistance > minSwipe) showPrevSlide();
        else if (swipeDistance < -minSwipe) showNextSlide();

        startX = 0;
        endX = 0;
    });

    function showPrevSlide() {
        show_slide(-1);
    }

    function showNextSlide() {
        show_slide(1);
    }
});

function show_slide(i) {
    index += i;

    const images = document.querySelectorAll(".bild");
    const dots = document.querySelectorAll(".dot");

    images.forEach(img => img.style.display = "none");
    dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

    if (index > images.length - 1) index = 0;
    if (index < 0) index = images.length - 1;

    images[index].style.display = "block";
    dots[index].className += " active";
}
