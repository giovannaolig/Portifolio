// idiomas.js - Sistema de troca de idioma PERSISTENTE
// Coloque este arquivo na MESMA PASTA que seus arquivos HTML

document.addEventListener('DOMContentLoaded', function() {
    // 1. Aplicar idioma salvo ao carregar
    const idiomaSalvo = localStorage.getItem('idiomaPortfolio') || 'pt';
    aplicarIdioma(idiomaSalvo);
    
    // 2. Configurar clique nos botões
    document.querySelectorAll('.lang-btn').forEach(botao => {
        botao.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            trocarIdioma(lang);
        });
    });
    
    console.log('✅ Sistema de idiomas carregado! Idioma atual:', idiomaSalvo);
});

function aplicarIdioma(lang) {
    // Esconder/Mostrar elementos
    document.querySelectorAll('.pt').forEach(el => {
        el.style.display = lang === 'pt' ? 'block' : 'none';
    });
    document.querySelectorAll('.en').forEach(el => {
        el.style.display = lang === 'en' ? 'block' : 'none';
    });
    
    // Destacar botão ativo
    document.querySelectorAll('.lang-btn').forEach(botao => {
        if (botao.getAttribute('data-lang') === lang) {
            botao.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            botao.style.border = '2px solid white';
        } else {
            botao.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            botao.style.border = '2px solid transparent';
        }
    });
}

function trocarIdioma(lang) {
    // Salvar preferência
    localStorage.setItem('idiomaPortfolio', lang);
    
    // Aplicar mudanças
    aplicarIdioma(lang);
    
    console.log('🔄 Idioma alterado para:', lang);
}

// Função para debug (opcional)
function verificarIdiomas() {
    console.log('🔍 Verificando elementos de idioma:');
    console.log('Elementos .pt:', document.querySelectorAll('.pt').length);
    console.log('Elementos .en:', document.querySelectorAll('.en').length);
}