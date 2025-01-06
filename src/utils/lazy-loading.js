const lazyLoading = () => {
    const lazyImgs = document.querySelectorAll('.lazy');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img); // stops observing when isIntersecting turns to true, stopping future observation
            }
        });
    }, {
        // default values, you dont actually have to define the entire second argument
        root: null,
        rootMargin: '0px',
        threshold: 0,
    });
    
    lazyImgs.forEach(img => {
        observer.observe(img);
    });
};

export default lazyLoading;