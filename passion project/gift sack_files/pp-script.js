const gifts = document.querySelectorAll('.gift');
 const infoBox = document.createElement('div');
 infoBox.id = 'info-box';
 document.body.appendChild(infoBox);

 gifts.forEach(gift => {
     gift.addEventListener('click', (event) => {
         const infoText = gift.getAttribute('data-info');

         infoBox.style.opacity = '0';
         infoBox.style.transform = 'scale(0.9)';

         setTimeout(() => {
             infoBox.textContent = infoText;
             infoBox.style.top = `${event.clientY + 10}px`;
             infoBox.style.left = `${event.clientX + 10}px`;

             infoBox.classList.add('visible');
             infoBox.style.opacity = '1';
             infoBox.style.transform = 'scale(1)';
         }, 100); 
     });
 });

 document.addEventListener('click', (event) => {
     if (!event.target.classList.contains('gift')) {
         infoBox.classList.remove('visible');
         infoBox.style.opacity = '0';
         infoBox.style.transform = 'scale(0.9)';
     }
 });
