// js/services.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for "Learn More" buttons
    const learnMoreButtons = document.querySelectorAll('.card-btn');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.quote-form').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple quote calculator
    const quoteCalculator = document.getElementById('quoteCalculator');
    if (quoteCalculator) {
        const roomsInput = document.getElementById('rooms');
        const distanceInput = document.getElementById('distance');
        const quoteResult = document.getElementById('quoteResult');

        function calculateQuote() {
            const rooms = parseInt(roomsInput.value) || 0;
            const distance = parseInt(distanceInput.value) || 0;
            
            let basePrice = 1500;
            let roomPrice = rooms * 500;
            let distancePrice = distance * 50;
            
            let total = basePrice + roomPrice + distancePrice;
            
            quoteResult.textContent = `Estimated Quote: R${total}`;
            quoteResult.style.display = 'block';
        }

        roomsInput.addEventListener('input', calculateQuote);
        distanceInput.addEventListener('input', calculateQuote);
    }
});