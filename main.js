//scroll reveal
const revealElements = document.querySelectorAll(".fade-up");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("fade-up--visible");
            observer.unobserve(entry.target);
        });
    },

    {
        threshold: 0.15,
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});





















// Smooth reveal on scroll interaction
    // const observerOptions = {
    //     threshold: 0.1
    // };

    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('opacity-100');
    //             entry.target.classList.remove(
    //                 'translate-y-10', 
    //                 'opacity-0'
    //             );
    //         }
    //     });
    // }, observerOptions);

    // document.querySelectorAll('section > div').forEach(el => {
    //     el.classList.add(
    //         'transition-all', 
    //         'duration-1000', 
    //         'translate-y-10', 
    //         'opacity-0'
    //     );
    //     observer.observe(el);
    // });