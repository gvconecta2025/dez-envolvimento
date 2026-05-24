<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O Terceiro Espaço - DEZ-Envolvimento</title>
    <link rel="stylesheet" href="../style.css">
    <style>
        /* =============================================
           ESTILOS ESPECÍFICOS DO ARTIGO
           ============================================= */
        
        /* Container do artigo - alinhado com o design do site */
        .article-container {
            max-width: 800px;
            margin: 0 auto;
            padding: var(--spacing-xl) var(--spacing-sm);
        }

        /* Cabeçalho do artigo */
        .article-header {
            margin-bottom: var(--spacing-2xl);
            padding-bottom: var(--spacing-xl);
            border-bottom: 1px solid var(--color-border);
        }

        .article-tag {
            display: inline-block;
            background-color: #f1f5f9;
            color: var(--color-text-dark);
            padding: 4px 12px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.8rem;
            text-transform: uppercase;
            margin-bottom: var(--spacing-md);
        }

        .article-title {
            font-family: 'Merriweather', serif;
            color: var(--color-text-dark);
            font-size: 2rem;
            line-height: 1.25;
            font-weight: 700;
            margin-bottom: var(--spacing-lg);
            letter-spacing: -0.5px;
        }

        .article-meta {
            font-size: 0.95rem;
            color: var(--color-text-light);
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
        }

        .article-meta strong {
            color: var(--color-text-dark);
        }

        /* Corpo do artigo */
        .article-body {
            font-family: 'Inter', sans-serif;
            color: #334155;
            line-height: 1.8;
            font-size: 1.1rem;
        }

        .article-body h2 {
            font-family: 'Merriweather', serif;
            color: var(--color-text-dark);
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 40px;
            margin-bottom: 15px;
            letter-spacing: -0.3px;
        }

        .article-body p {
            margin-bottom: 1.2rem;
        }

        .article-body ul {
            margin: 20px 0;
            padding-left: 25px;
        }

        .article-body li {
            margin-bottom: 10px;
        }

        .article-bold {
            font-weight: 600;
            color: var(--color-text-dark);
        }

        .article-italic {
            font-style: italic;
        }

        /* Container de imagem editorial */
        .article-image-box {
            margin: 35px 0;
            background: #f8fafc;
            border-radius: var(--border-radius);
            overflow: hidden;
            border: 1px solid var(--color-border);
        }

        .article-caption {
            font-size: 0.85rem;
            color: var(--color-text-light);
            text-align: center;
            padding: 10px 15px;
            background: #fafafa;
            border-top: 1px solid var(--color-border);
            font-style: italic;
        }

        /* Citação em destaque */
        .article-quote {
            font-family: 'Merriweather', serif;
            font-style: italic;
            font-size: 1.2rem;
            color: var(--color-text-dark);
            border-left: 4px solid #db2777;
            padding-left: 20px;
            margin: 35px 0;
            line-height: 1.6;
        }

        /* Navegação do artigo */
        .article-navigation {
            margin-top: 50px;
            padding-top: var(--spacing-xl);
            border-top: 1px solid var(--color-border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: var(--spacing-md);
        }

        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-light);
            font-weight: 500;
            transition: color var(--transition-speed);
        }

        .back-link:hover {
            color: var(--color-text-dark);
        }

        .share-buttons {
            display: flex;
            gap: var(--spacing-sm);
        }

        .share-btn {
            padding: 8px 16px;
            border-radius: var(--border-radius);
            font-size: 0.9rem;
            font-weight: 500;
            transition: all var(--transition-speed);
            border: 1px solid var(--color-border);
            background-color: var(--color-white);
            color: var(--color-text-light);
        }

        .share-btn:hover {
            background-color: var(--color-bg);
            color: var(--color-text-dark);
            border-color: var(--color-text-light);
        }

        /* Responsividade */
        @media (min-width: 768px) {
            .article-container {
                padding: var(--spacing-3xl) var(--spacing-xl);
            }

            .article-title {
                font-size: 2.5rem;
            }

            .article-body {
                font-size: 1.15rem;
            }
        }

        @media (min-width: 1024px) {
            .article-title {
                font-size: 2.8rem;
            }
        }
    </style>
</head>
<body>

    <!-- =============================================
         CABEÇALHO (mesmo da página inicial)
         ============================================= -->
    <header class="main-header">
        <div class="container">
            <div class="header-menu">
                <button class="menu-btn" aria-label="Abrir menu">☰</button>
                <a href="../index.html" class="logo-text">DEZ-Envolvimento</a>
            </div>
            <div class="header-actions">
                <div class="font-controls">
                    <button id="decrease-font" class="font-btn" aria-label="Diminuir fonte">A-</button>
                    <button id="increase-font" class="font-btn" aria-label="Aumentar fonte">A+</button>
                </div>
                <button class="account-btn" aria-label="Acessar perfil">👤</button>
            </div>
        </div>
    </header>

    <!-- =============================================
         CONTEÚDO PRINCIPAL
         ============================================= -->
    <main class="main-content">
        <div class="container">
            <article class="article-container">
                
                <!-- Cabeçalho do Artigo -->
                <header class="article-header">
                    <span class="article-tag">C9 - Autoconhecimento e Direção</span>
                    <h1 class="article-title">O Terceiro Espaço: O Que Fazer Quando Seu Filho Não Souber O Que Fazer</h1>
                    <div class="article-meta">
                        <span>Por <strong>Prof. Luiz Henrique Magalhães</strong></span>
                        <span>•</span>
                        <span>24 de Maio, 2026</span>
                    </div>
                </header>

                <!-- Corpo do Artigo -->
                <div class="article-body">
                    <p>Há um descompasso silencioso na criação e formação da nova geração. Se você observar atentamente a rotina de um adolescente hoje, perceberá que ele passa a maior parte do seu dia oscilando entre dois polos muito bem definidos: a <span class="article-bold">escola</span> e a <span class="article-bold">casa</span>. No entanto, quando as pressões do mundo real batem à porta, muitos colapsam.</p>

                    <p>O diagnóstico desse problema não está na falta de capacidade deles, mas sim na ausência de uma engrenagem intermediária de desenvolvimento. É aqui que entra o conceito que muda as regras do jogo: o <span class="article-bold">Terceiro Espaço</span>.</p>

                    <!-- Imagem 1: Tripé da Formação -->
                    <div class="article-image-box">
                        <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a; width:100%; display:block;">
                            <defs>
                                <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#db2777" />
                                    <stop offset="100%" stop-color="#9d174d" />
                                </linearGradient>
                            </defs>
                            <text x="400" y="50" text-anchor="middle" fill="#f8fafc" font-family="'Merriweather', serif" font-size="24" font-weight="bold">O Tripé da Formação Sistêmica</text>
                            <line x1="150" y1="200" x2="650" y2="200" stroke="#334155" stroke-width="4" stroke-dasharray="8"/>
                            <circle cx="150" cy="200" r="60" fill="#1e293b" stroke="#475569" stroke-width="2"/>
                            <text x="150" y="195" text-anchor="middle" fill="#cbd5e1" font-family="'Inter', sans-serif" font-size="16" font-weight="bold">A ESCOLA</text>
                            <text x="150" y="215" text-anchor="middle" fill="#64748b" font-family="'Inter', sans-serif" font-size="12">"O que pensar"</text>
                            <circle cx="650" cy="200" r="60" fill="#1e293b" stroke="#475569" stroke-width="2"/>
                            <text x="650" y="195" text-anchor="middle" fill="#cbd5e1" font-family="'Inter', sans-serif" font-size="16" font-weight="bold">A CASA</text>
                            <text x="650" y="215" text-anchor="middle" fill="#64748b" font-family="'Inter', sans-serif" font-size="12">"Quem ser"</text>
                            <circle cx="400" cy="200" r="75" fill="url(#pinkGrad)" stroke="#f472b6" stroke-width="3"/>
                            <text x="400" y="195" text-anchor="middle" fill="#ffffff" font-family="'Merriweather', serif" font-size="16" font-weight="bold">TERCEIRO ESPAÇO</text>
                            <text x="400" y="218" text-anchor="middle" fill="#fbcfe8" font-family="'Inter', sans-serif" font-size="13" font-weight="500">"Como fazer"</text>
                        </svg>
                        <div class="article-caption">Figura 1: A arquitetura do desenvolvimento sistêmico equilibrada entre os três pilares essenciais.</div>
                    </div>

                    <h2>A divisão invisível das responsabilidades</h2>

                    <p>Para entender o porquê de os jovens estarem tão perdidos na gestão do tempo, na disciplina e nas decisões financeiras, precisamos olhar para as atribuições de cada ambiente tradicional:</p>

                    <ul>
                        <li><span class="article-bold">A escola ensina o "o que" pensar:</span> Ela entrega a base programática histórica. Transmite conteúdos, fórmulas e teorias necessárias para o cumprimento do currículo acadêmico e boletins.</li>
                        <li><span class="article-bold">A casa ensina "quem" ser:</span> É o berço dos valores eternos, da moralidade, do caráter e da integridade espiritual e familiar.</li>
                    </ul>

                    <p>Mas diante dessas duas frentes cruciais, surge um abismo prático no cotidiano: <span class="article-italic">Quem ensina o "como" fazer?</span> Quem treina o jovem para agir com resiliência estruturada quando o plano falha? Quem ensina inteligência lógica voltada ao uso da tecnologia e controle do dinheiro?</p>

                    <!-- Citação em destaque -->
                    <div class="article-quote">
                        "A escola ensina o 'que' pensar, a casa ensina 'quem' ser, e o seu Terceiro Espaço ensina o 'como' fazer. Nós ensinamos o que fazer quando não se sabe o que fazer."
                    </div>

                    <h2>Construção precoce e Recuperação tardia</h2>

                    <p>O Desenvolvimento Sistemático opera em duas frentes urgentes da nossa sociedade atual:</p>
                    
                    <p>A primeira delas é a <span class="article-bold">Construção</span>. Trata-se de pavimentar o caminho para os novos, blindando adolescentes de 9 a 17 anos contra o improviso crônico. Ensinar gestão de rotina e leitura crítica antes que os maus hábitos se consolidem é garantir uma vantagem competitiva madura para o futuro deles.</p>

                    <p>A segunda vertente é a <span class="article-bold">Recuperação</span>. Destina-se aos próprios pais ou adultos que nunca receberam esse tipo de treinamento e base na juventude e que, hoje, sofrem com o sangramento invisível da desordem financeira ou da falta de constância. Não se trata apenas de educar o jovem, mas de fornecer um manual prático de comandos que reestrutura a dinâmica e a paz de todo o lar.</p>

                    <!-- Imagem 2: Linhas de Ação -->
                    <div class="article-image-box">
                        <svg viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; width:100%; display:block;">
                            <text x="400" y="45" text-anchor="middle" fill="#0f172a" font-family="'Merriweather', serif" font-size="20" font-weight="bold">As Duas Linhas de Ação Estratégica</text>
                            <rect x="80" y="90" width="300" height="100" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
                            <path d="M 110,140 L 140,115 L 170,140" stroke="#22c55e" stroke-width="4" fill="none"/>
                            <text x="240" y="135" fill="#0f172a" font-family="'Inter', sans-serif" font-size="16" font-weight="bold">CONSTRUÇÃO</text>
                            <text x="240" y="155" fill="#64748b" font-family="'Inter', sans-serif" font-size="13">Treinamento Base para Jovens</text>
                            <rect x="420" y="90" width="300" height="100" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
                            <path d="M 450,120 L 450,150 L 480,150" stroke="#db2777" stroke-width="4" fill="none"/>
                            <circle cx="450" cy="120" r="5" fill="#db2777"/>
                            <text x="580" y="135" fill="#0f172a" font-family="'Inter', sans-serif" font-size="16" font-weight="bold">RECUPERAÇÃO</text>
                            <text x="580" y="155" fill="#64748b" font-family="'Inter', sans-serif" font-size="13">Conserto de Linhas para Pais</text>
                        </svg>
                        <div class="article-caption">Figura 2: Alinhamento das duas vertentes operacionais para a estabilização familiar.</div>
                    </div>

                    <h2>O Próximo Passo Prático</h2>

                    <p>Saber o que fazer quando não se sabe o que fazer não é um dom místico ou um traço biológico que surge por mágica com o envelhecimento; é um processo puramente sistemático. Quando tiramos o desenvolvimento do campo das sensações e o trazemos para o campo da consciência técnica, a desordem recua e a clareza assume o comando.</p>

                    <p>Se você quer dar esse respiro e comando para a sua história e para os seus filhos, o ambiente e as ferramentas estão prontos. O movimento seguinte não precisa ser brusco, ele só precisa ter a direção correta.</p>
                </div>

                <!-- Navegação do Artigo -->
                <footer class="article-navigation">
                    <a href="../index.html" class="back-link">← Voltar para artigos</a>
                    <div class="share-buttons">
                        <button class="share-btn" onclick="alert('Compartilhar link copiado!')">📤 Compartilhar</button>
                    </div>
                </footer>

            </article>
        </div>
    </main>

    <!-- =============================================
         SCRIPTS
         ============================================= -->
    <script src="../script.js"></script>
</body>
</html>