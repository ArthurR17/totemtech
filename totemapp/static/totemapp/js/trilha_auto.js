// Variáveis para rastrear a posição da imagem e seus limites
let img = document.getElementById('trilha');
let isDragging = false;
let startX, startY, currentX = 0, currentY = 0;
//Oi
// Função para centralizar a imagem na tela
function resetImagePosition() {
    img.style.transition = 'transform 0.3s ease';
    img.style.transform = 'translate(0, 0)';
    currentX = 0;
    currentY = 0;
    setTimeout(() => {
        img.style.transition = ''; // Remove a transição após centralizar
    }, 300);
}

// Função para limitar o movimento da imagem
function limitImagePosition() {
    const imgRect = img.getBoundingClientRect();

    // Define os limites da tela
    const maxLeft = 0;  // Borda esquerda da tela
    const maxRight = window.innerWidth - imgRect.width;  // Borda direita da tela
    const maxTop = 0;  // Borda superior da tela
    const maxBottom = window.innerHeight - imgRect.height;  // Borda inferior da tela

    // Verifica se a imagem ultrapassa os limites da tela
    if (currentX < maxLeft || currentX > maxRight || currentY < maxTop || currentY > maxBottom) {
        resetImagePosition();
    }
}

// Eventos para arrastar a imagem
img.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    img.style.cursor = 'move';
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        img.style.cursor = 'default';
        limitImagePosition(); // Limita a posição ao soltar o mouse
    }
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        img.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
});
