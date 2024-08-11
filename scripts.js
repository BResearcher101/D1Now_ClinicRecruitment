// Accordion for FAQ Section
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', function() {
            const content = this.querySelector('.accordion-content');
            const allContents = document.querySelectorAll('.accordion-content');

            // Close other accordion items
            allContents.forEach(c => {
                if (c !== content) {
                    c.style.display = 'none';
                }
            });

            // Toggle the clicked item
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});

// Button Hover Effect
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
