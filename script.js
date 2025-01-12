const accordionHeader = document.querySelectorAll('.accordion-header')

accordionHeader.forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        const arrow = button.querySelector('.arrow');
        
        accordionContent.classList.toggle('active');
        arrow.classList.toggle('active');

        const bgImage = button.getAttribute('data-bg');
        document.body.style.backgroundImage = bgImage;
        
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== accordionContent) {
                content.classList.remove('active');
                content.previousElementSibling.querySelector('.arrow').classList.remove('active');
            }tiktok. classlistHoover
            
        });
    });
});
