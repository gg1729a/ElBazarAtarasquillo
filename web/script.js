document.addEventListener('DOMContentLoaded', () => {
    // Inicializar los números de artículo al cargar la página
    initializeArticleNumbers();
});

/**
 * Agrega dinámicamente el número de artículo a cada tarjeta
 * basado en su orden en el HTML.
 */
function initializeArticleNumbers() {
    const articleCards = document.querySelectorAll('.article-card');
    
    articleCards.forEach((card, index) => {
        const articleNumber = index + 1;
        
        // Crear el elemento span para el número
        const numberSpan = document.createElement('span');
        numberSpan.classList.add('article-number');
        numberSpan.textContent = articleNumber;
        
        // Insertar el span dentro del contenedor de la imagen
        const imageContainer = card.querySelector('.image-container');
        if (imageContainer) {
            imageContainer.prepend(numberSpan);
        }
    });
}

/**
 * Filtra los artículos basándose en el texto introducido en la barra de búsqueda 
 * (número o descripción).
 */
function filterArticles() {
    const input = document.getElementById('searchInput');
    const filterText = input.value.toUpperCase();
    
    // Obtener la categoría activa para aplicarla como filtro secundario
    const activeCategoryButton = document.querySelector('.category-menu .active');
    const activeCategory = activeCategoryButton ? activeCategoryButton.getAttribute('onclick').match(/'(.*?)'/)[1] : 'all';

    const articleCards = document.querySelectorAll('.article-card');

    articleCards.forEach(card => {
        const descriptionElement = card.querySelector('.description');
        const numberElement = card.querySelector('.article-number');
        const cardCategory = card.getAttribute('data-category');
        
        // Obtener el texto de la descripción y el número para la búsqueda
        const descriptionText = descriptionElement ? descriptionElement.textContent.toUpperCase() : '';
        const numberText = numberElement ? numberElement.textContent.toUpperCase() : '';
        
        // 1. Filtrado por texto (búsqueda)
        const textMatch = descriptionText.includes(filterText) || numberText.includes(filterText);

        // 2. Filtrado por categoría
        const categoryMatch = activeCategory === 'all' || cardCategory === activeCategory;

        // Mostrar solo si cumple con AMBOS filtros
        if (textMatch && categoryMatch) {
            card.style.display = 'flex'; // Usamos 'flex' porque el CSS original tiene 'display: flex'
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Filtra los artículos al hacer clic en un botón de categoría.
 * @param {string} category - La categoría a filtrar ('electronica', 'hogar', 'ropa', 'all').
 * @param {HTMLElement} element - El botón que fue clicado.
 */
function filterByCategory(category, element) {
    // 1. Quitar la clase 'active' de todos los botones y añadirla al botón clicado
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    // 2. Aplicar el filtro a las tarjetas
    const articleCards = document.querySelectorAll('.article-card');
    const filterText = document.getElementById('searchInput').value.toUpperCase();

    articleCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        // Comprobar la categoría
        const categoryMatch = category === 'all' || cardCategory === category;
        
        // Comprobar también el filtro de texto (para que el filtro de categoría no borre la búsqueda)
        const descriptionElement = card.querySelector('.description');
        const numberElement = card.querySelector('.article-number');
        const descriptionText = descriptionElement ? descriptionElement.textContent.toUpperCase() : '';
        const numberText = numberElement ? numberElement.textContent.toUpperCase() : '';
        const textMatch = descriptionText.includes(filterText) || numberText.includes(filterText);

        if (categoryMatch && textMatch) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}