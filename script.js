/**
 * DEZ-Envolvimento - Script Principal
 * Funcionalidades: Busca de artigos e controle de tamanho de fonte
 */

// =============================================
// 1. AGUARDAR CARREGAMENTO DO DOM
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // =============================================
    // 2. ELEMENTOS DO DOM
    // =============================================
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const cardGrid = document.getElementById('card-grid');
    const articleCards = document.querySelectorAll('.article-card');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const increaseFontBtn = document.getElementById('increase-font');
    const htmlElement = document.documentElement;

    // =============================================
    // 3. CONFIGURAÇÕES DE FONTE
    // =============================================
    const FONT_CONFIG = {
        minSize: 14,    // Tamanho mínimo em pixels
        maxSize: 22,    // Tamanho máximo em pixels
        defaultSize: 16, // Tamanho padrão
        step: 2         // Incremento/decremento
    };

    // =============================================
    // 4. FUNÇÕES DE CONTROLE DE FONTE
    // =============================================

    /**
     * Obtém o tamanho atual da fonte do HTML
     * @returns {number} Tamanho da fonte em pixels
     */
    function getCurrentFontSize() {
        const computedStyle = getComputedStyle(htmlElement);
        return parseInt(computedStyle.fontSize) || FONT_CONFIG.defaultSize;
    }

    /**
     * Aplica o tamanho da fonte ao elemento HTML
     * @param {number} size - Tamanho em pixels
     */
    function setFontSize(size) {
        // Garantir que o tamanho está dentro dos limites
        const clampedSize = Math.max(
            FONT_CONFIG.minSize,
            Math.min(FONT_CONFIG.maxSize, size)
        );
        
        htmlElement.style.fontSize = clampedSize + 'px';
        
        // Salvar preferência no localStorage
        try {
            localStorage.setItem('dez-font-size', clampedSize);
        } catch (e) {
            // localStorage não disponível, ignorar
            console.warn('Não foi possível salvar a preferência de fonte:', e);
        }

        // Atualizar estado dos botões
        updateFontButtonsState(clampedSize);
    }

    /**
     * Atualiza o estado dos botões (desabilitar se atingir limites)
     * @param {number} currentSize - Tamanho atual
     */
    function updateFontButtonsState(currentSize) {
        decreaseFontBtn.disabled = currentSize <= FONT_CONFIG.minSize;
        increaseFontBtn.disabled = currentSize >= FONT_CONFIG.maxSize;
        
        // Feedback visual para botões desabilitados
        decreaseFontBtn.style.opacity = decreaseFontBtn.disabled ? '0.5' : '1';
        increaseFontBtn.style.opacity = increaseFontBtn.disabled ? '0.5' : '1';
    }

    /**
     * Aumenta o tamanho da fonte
     */
    function increaseFontSize() {
        const currentSize = getCurrentFontSize();
        const newSize = currentSize + FONT_CONFIG.step;
        setFontSize(newSize);
    }

    /**
     * Diminui o tamanho da fonte
     */
    function decreaseFontSize() {
        const currentSize = getCurrentFontSize();
        const newSize = currentSize - FONT_CONFIG.step;
        setFontSize(newSize);
    }

    /**
     * Carrega a preferência de fonte salva
     */
    function loadFontPreference() {
        try {
            const savedSize = localStorage.getItem('dez-font-size');
            if (savedSize) {
                const size = parseInt(savedSize);
                if (!isNaN(size) && size >= FONT_CONFIG.minSize && size <= FONT_CONFIG.maxSize) {
                    setFontSize(size);
                    return;
                }
            }
        } catch (e) {
            console.warn('Não foi possível carregar a preferência de fonte:', e);
        }
        
        // Se não houver preferência salva, usar o padrão
        setFontSize(FONT_CONFIG.defaultSize);
    }

    // =============================================
    // 5. FUNÇÃO DE BUSCA
    // =============================================

    /**
     * Filtra os artigos com base no termo de busca
     * @param {string} searchTerm - Termo digitado pelo usuário
     */
    function filterArticles(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
        articleCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            // Verificar se o termo está no título ou na descrição
            const matches = title.includes(term) || description.includes(term);
            
            // Mostrar ou esconder o card com animação suave
            if (matches) {
                card.style.display = '';
                card.style.opacity = '1';
            } else {
                card.style.opacity = '0';
                // Pequeno delay para a animação de fade out
                setTimeout(() => {
                    card.style.display = 'none';
                }, 200);
            }
        });

        // Mostrar mensagem se nenhum resultado for encontrado
        const visibleCards = document.querySelectorAll('.article-card[style*="display: none"]');
        const existingMessage = document.querySelector('.no-results-message');
        
        if (visibleCards.length === articleCards.length && term !== '') {
            // Nenhum resultado encontrado
            if (!existingMessage) {
                const message = document.createElement('p');
                message.className = 'no-results-message';
                message.textContent = 'Nenhum artigo encontrado para "' + searchTerm + '"';
                message.style.cssText = `
                    text-align: center;
                    color: var(--color-text-light);
                    font-size: 1.1rem;
                    padding: var(--spacing-3xl) 0;
                    grid-column: 1 / -1;
                `;
                cardGrid.appendChild(message);
            }
        } else {
            // Remover mensagem se existir
            if (existingMessage) {
                existingMessage.remove();
            }
        }
    }

    // =============================================
    // 6. EVENT LISTENERS
    // =============================================

    // 6.1. Evento de busca (submit do formulário)
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        filterArticles(searchInput.value);
    });

    // 6.2. Evento de busca (digitação - para busca em tempo real)
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        // Debounce para evitar muitas operações durante a digitação
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            filterArticles(this.value);
        }, 300);
    });

    // 6.3. Botão de aumentar fonte
    increaseFontBtn.addEventListener('click', increaseFontSize);

    // 6.4. Botão de diminuir fonte
    decreaseFontBtn.addEventListener('click', decreaseFontSize);

    // 6.5. Atalhos de teclado
    document.addEventListener('keydown', function(event) {
        // Ctrl + + para aumentar
        if (event.ctrlKey && event.key === '=') {
            event.preventDefault();
            increaseFontSize();
        }
        // Ctrl + - para diminuir
        if (event.ctrlKey && event.key === '-') {
            event.preventDefault();
            decreaseFontSize();
        }
        // Ctrl + 0 para resetar
        if (event.ctrlKey && event.key === '0') {
            event.preventDefault();
            setFontSize(FONT_CONFIG.defaultSize);
        }
    });

    // =============================================
    // 7. INICIALIZAÇÃO
    // =============================================
    
    // Carregar preferência de fonte
    loadFontPreference();

    // Inicializar estado dos botões
    updateFontButtonsState(getCurrentFontSize());

    // Log de inicialização
    console.log('DEZ-Envolvimento inicializado com sucesso!');
    console.log('Tamanho da fonte atual:', getCurrentFontSize() + 'px');
});
