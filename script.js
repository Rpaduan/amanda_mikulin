// Smooth reveal on scroll interaction
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove(
                    'translate-y-10', 
                    'opacity-0'
                );
            }
        });
    }, observerOptions);

    document.querySelectorAll('section > div').forEach(el => {
        el.classList.add(
            'transition-all', 
            'duration-1000', 
            'translate-y-10', 
            'opacity-0'
        );
        observer.observe(el);
    });