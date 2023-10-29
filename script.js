document.addEventListener('DOMContentLoaded', function() {

    // adjust values of header and nav on resize

    let {
        navElement,
        logoElement,
        scrollThreshold
    } = updateVariables();

    function updateVariables() {
        const headerElement = document.getElementById('header');
        const navElement = document.getElementById('nav');
        const logoElement = document.getElementById('logo');
        const scrollThreshold = headerElement.offsetHeight;

        return {
            headerElement,
            navElement,
            logoElement,
            scrollThreshold
        };
    }

    window.addEventListener('resize', function() {
        ({
            headerElement,
            navElement,
            logoElement,
            scrollThreshold
        } = updateVariables());
        
    });

    // nav visibility

    window.addEventListener('scroll', function() {
        const scrollPosition = document.documentElement.scrollTop + navElement.offsetHeight;

        if (scrollPosition >= scrollThreshold) {

            navElement.style.position = 'fixed';
            navElement.style.top = '0';
            nav.classList.add('visibleNav');
            logoElement.style.visibility = 'visible';

        } else {
            navElement.style.position = 'absolute';
            navElement.style.top = '0';
            nav.classList.remove('visibleNav');
            logoElement.style.visibility = 'hidden';
        }
    });

    // changing images in main

    const mainImageElement = document.getElementById('aboutImage');

    function changeMainImage() {
        mainImageElement.src = 'assets/About us 2.webp';

        setTimeout(function() {
            mainImageElement.src = 'assets/About us 3.webp';
        }, 2500);

        setTimeout(function() {
            mainImageElement.src = 'assets/About us.webp';
        }, 5000);
    }

    changeMainImage();

    setInterval(changeMainImage, 7500);

    // scroll adjustment

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                const targetOffset = targetElement.offsetTop - navElement.offsetHeight;
    
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // year on copyright

    const currentYear = new Date().getFullYear();
    const copyrightYear = document.getElementById('copyrightYear');

    copyrightYear.innerText= currentYear;
});