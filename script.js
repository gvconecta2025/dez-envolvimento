// Aguarda o DOM (estrutura HTML) carregar completamente antes de executar o código
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Capturar os elementos da página que vamos usar ---
    const searchInput = document.getElementById('search-input'); // O campo de texto da busca
    const searchForm = document.getElementById('search-form');   // O formulário da busca
    const cardGrid = document.getElementById('card-grid');       // A grade que contém todos os cards
    const articles = cardGrid.querySelectorAll('.article-card'); // Todos os cards de artigos

    // --- 2. Função principal que faz a filtragem ---
    function filterArticles() {
        // Pega o texto digitado, remove espaços extras e converte para minúsculo
        const searchTerm = searchInput.value.toLowerCase().trim();

        // Para cada card de artigo...
        articles.forEach(function(article) {
            // Pega o título e a descrição do card atual
            const title = article.querySelector('h3').textContent.toLowerCase();
            const description = article.querySelector('p').textContent.toLowerCase();

            // Verifica se o termo de busca está contido no título OU na descrição
            const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);

            // Se corresponder à busca, mostra o card. Se não, esconde.
            if (matchesSearch) {
                article.style.display = 'block'; // Mostra o card
            } else {
                article.style.display = 'none';  // Esconde o card
            }
        });
    }

    // --- 3. Conectar a função aos eventos ---

    // Evento 1: Quando o usuário digitar no campo de busca (tempo real)
    searchInput.addEventListener('input', filterArticles);

    // Evento 2: Quando o usuário enviar o formulário (clicar na lupa ou apertar Enter)
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de recarregar a página
        filterArticles();       // Executa a filtragem
    });

    // (Opcional) Mostrar uma mensagem quando nenhum resultado for encontrado
    // Vamos criar um elemento para isso
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'Nenhum artigo encontrado para esta busca.';
    noResultsMessage.style.textAlign = 'center';
    noResultsMessage.style.padding = '40px 0';
    noResultsMessage.style.fontSize = '1.2rem';
    noResultsMessage.style.color = '#5f6368';
    noResultsMessage.style.display = 'none'; // Começa invisível
    cardGrid.parentNode.insertBefore(noResultsMessage, cardGrid.nextSibling);

    // Modificar a função filterArticles para mostrar a mensagem quando necessário
    const originalFilter = filterArticles;
    filterArticles = function() {
        originalFilter(); // Executa a filtragem original

        // Verifica se algum card está visível
        let hasVisibleCards = false;
        articles.forEach(function(article) {
            if (article.style.display !== 'none') {
                hasVisibleCards = true;
            }
        });

        // Mostra ou esconde a mensagem de "nenhum resultado"
        if (hasVisibleCards) {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'block';
        }
    };

});