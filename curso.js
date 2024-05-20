document.addEventListener('DOMContentLoaded', (event) => {
    var titulo = sessionStorage.getItem('buttonText');
    if (titulo) {
        document.getElementById('titulo').innerHTML = titulo;
    } else {
        document.getElementById('titulo').innerHTML = 'nada';
    }

    var link_video = document.getElementById('video');
    var link_video2 = document.getElementById('video2');
    novoH3=[]
    novoP=[]
    switch (titulo){
        //ADM--------------------------------

        case 'Gestão de Documentos':
            link_video.src = "https://drive.google.com/file/d/1HBYyowxnJo3UexoQHiGkYJQJAcF7yO4p/preview";
            
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`A gestão de documentos no setor administrativo envolve a organização, armazenamento, controle e recuperação de documentos e informações importantes para as operações da empresa. `

            for (i = 1; i < 5; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Armazenamento seguro`;
              novoP[1].textContent = `Implementar sistemas e procedimentos para armazenar documentos de forma segura e acessível, seja em formato físico ou digital, protegendo contra perda, roubo, danos ou acesso não autorizado.`;

              novoH3[2].textContent = `Conformidade regulatória`;
              novoP[2].textContent = `Garantir que a gestão de documentos esteja em conformidade com as leis, regulamentos e padrões do setor relevantes, minimizando o risco de não conformidade e penalidades legais.`;

              novoH3[3].textContent = `Controle de versões`;
              novoP[3].textContent = ` Manter controle sobre as diferentes versões de documentos, garantindo que apenas a versão mais recente e autorizada esteja em circulação, evitando conflitos e inconsistências de informações.`;

              novoH3[4].textContent = `Recuperação eficiente`;
              novoP[4].textContent = `Facilitar a recuperação rápida e eficiente de documentos quando necessário, seja por meio de sistemas de arquivamento físico ou digital, ou através de ferramentas de busca e recuperação.`;
            break;

        case 'Gestão de Marketing':
            link_video.src = "https://drive.google.com/file/d/11RAubEBzdaM1LCIr0EKT_DfCgUG3bLgT/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`A gestão de marketing no setor administrativo de uma empresa envolve a coordenação e implementação de estratégias e atividades de marketing para promover os produtos ou serviços da empresa e alcançar os objetivos de negócios. Algumas das principais funções da gestão de marketing incluem:`

            for (i = 1; i < 5; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Desenvolvimento de estratégias de marketing`;
              novoP[1].textContent = `Criar planos de marketing abrangentes que definam os objetivos, públicos-alvo, mensagens-chave e táticas a serem utilizadas para promover os produtos ou serviços da empresa. `;

              novoH3[2].textContent = `Pesquisa de mercado`;
              novoP[2].textContent = `Realizar pesquisas de mercado para entender as necessidades, preferências e comportamentos dos consumidores`;

              novoH3[3].textContent = `Planejamento e execução de campanhas`;
              novoP[3].textContent = `Criar e implementar campanhas de marketing integradas, que podem incluir publicidade, promoções, marketing de conteúdo, mídia social, eventos e patrocínios.`;

              novoH3[4].textContent = `Relacionamento com o cliente`;
              novoP[4].textContent = `Desenvolver e manter relacionamentos positivos com os clientes por meio de comunicação eficaz, suporte ao cliente e programas de fidelidade`;
            break;



        case 'Planejamento Estratégico':
            link_video.src = "https://drive.google.com/file/d/1qT4Fl9KwZggHjDoBw2JepnxH3vIXnPD9/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`No setor administrativo, o planejamento estratégico envolve a definição de metas e objetivos de longo prazo da empresa, bem como a formulação de estratégias e planos para alcançá-los.`

            for (i = 1; i < 5; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Definição de metas e objetivos`;
              novoP[1].textContent = `Identificar e estabelecer metas e objetivos claros e mensuráveis para a empresa, alinhados com sua missão, visão e valores`;

              novoH3[2].textContent = `Análise interna`;
              novoP[2].textContent = `Avaliar os recursos, capacidades e pontos fortes da empresa, bem como suas fraquezas e limitações, para determinar sua posição competitiva e identificar áreas de melhoria.`;

              novoH3[3].textContent = `Formulação de estratégias`;
              novoP[3].textContent = `Desenvolver estratégias abrangentes e planos de ação para alcançar as metas e objetivos estabelecidos`;


              novoH3[4].textContent = `Implementação de plano`;
              novoP[4].textContent = `Traduzir as estratégias em iniciativas e projetos específicos, atribuindo responsabilidades, definindo prazos e alocando recursos necessários para sua execução.`;
            break;


        case 'Logística':
            link_video.src = "https://drive.google.com/file/d/1kpQSHvQkkz1WuSZ3_vUfwMKf4BNtYEzU/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`A logística desempenha um papel crucial na gestão eficiente e coordenada do fluxo de materiais, produtos e informações dentro da empresa `

            for (i = 1; i < 4; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Gestão de estoque`;
              novoP[1].textContent = `Monitorar os níveis de estoque, prever demanda e planejar a reposição de materiais e produtos para garantir que haja suprimentos suficientes para atender às necessidades da empresa. `;

              novoH3[2].textContent = `Distribuição e transporte`;
              novoP[2].textContent = `Organizar o transporte de mercadorias para os clientes ou entre locais da empresa, otimizando rotas e modos de transporte para minimizar custos e tempos de entrega.`;

              novoH3[3].textContent = `Gestão de pedidos e processamento`;
              novoP[3].textContent = `Receber, processar e acompanhar pedidos de clientes, garantindo que sejam atendidos com precisão e dentro dos prazos estabelecidos.`;
              break;

        //FINANCEIRO--------------------------------


        case 'Tesouraria':
            link_video.src = "https://drive.google.com/file/d/1Vst0O3e-V7b5CAnj-DK67CQ0DSVjrvy7/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`O setor de tesouraria em uma empresa é responsável pela gestão do dinheiro e dos ativos financeiros da organização. Isso inclui atividades como gerenciamento de caixa, gestão de riscos financeiros, administração de empréstimos e financiamentos, investimentos de curto prazo e controle de fluxo de capital. Em resumo, eles lidam com todas as transações financeiras e decisões relacionadas ao dinheiro da empresa.`

            for (i = 1; i < 3; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Contas a pagar e a receber`;
              novoP[1].textContent = `O setor de contas a pagar é responsável por gerenciar e pagar todas as despesas e obrigações financeiras de uma empresa, como contas de fornecedores, aluguéis e empréstimos. Já o setor de contas a receber cuida do registro e cobrança de todas as receitas e valores devidos à empresa, como vendas a crédito e pagamentos de clientes. Ambos são fundamentais para manter a saúde financeira e o fluxo de caixa da organização.`;

              novoH3[2].textContent = `Conciliação bancária`;
              novoP[2].textContent = `O setor de conciliação bancária é responsável por comparar e reconciliar os registros financeiros de uma empresa com as informações fornecidas pelos extratos bancários. Isso ajuda a garantir que todas as transações bancárias estejam corretamente registradas no sistema contábil da empresa, identificando discrepâncias e garantindo a precisão dos dados financeiros. Em suma, o objetivo é garantir que não haja diferenças entre o que a empresa registrou em suas transações e o que realmente ocorreu nas contas bancárias.`;

              break;





            
        case 'Planejador Financeiro':
            link_video.src = "https://drive.google.com/file/d/1YU-UlRX1w0yRiVCsBZ0MNRaDhHPo5IEO/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`No planejamento financeiro está o analista financeiro é responsável por analisar os dados financeiros da empresa e fornecer informações para ajudar a tomar decisões financeiras informadas.
            O planejador financeiro atua no gerenciamento de recursos monetários de seus clientes, sejam eles de pessoas físicas, de famílias ou de empresas. A função básica desse profissional é auxiliar o seu cliente a alcançar suas metas por meio de uma boa gestão financeira.`
            break;

            
            

        case 'Gerente Financeiro':
            link_video.src = "https://drive.google.com/file/d/1iZMvb75BwKx8of8WJbho2mA6LlEeOIfx/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`Nas empresas, o gerente ou diretor financeiro é o profissional responsável por todas as atividades que envolvem a contabilidade e as finanças. Ele deve elaborar e interpretar relatórios com dados para apresentar aos seus superiores.`
            break;



        case 'Contador de Escritório':
            link_video.src = "https://drive.google.com/file/d/1E_VekFkd4lltRP5D1EryCNgbWyDYGKij/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`Nesse tipo de estabelecimento, os contadores realizam atividades como o lançamento de notas fiscais, cálculos de impostos que os clientes devem pagar, realizam o controle de receitas e despesas das empresas, etc.`
            break;

        case 'Auditoria':
            link_video.src = "https://drive.google.com/file/d/1XpL2cyT4IKHmr2DxYJpU6BynoxkWvO1a/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`A ideia é que o profissional atue como um contador interno, que trabalhe com o objetivo de tomar as melhores decisões financeiras e dar suporte à diretoria ou à presidência no que diz respeito às demonstrações e relatórios contábeis.`
            break;


        //RH--------------------------------

        case 'Recrutamento e Seleção':
            link_video.src = "https://drive.google.com/file/d/1gqq7E15OHdlYDwfqOAZ587McStxUs-dO/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`O recrutamento e seleção são processos complexos e estratégicos que exigem planejamento cuidadoso e uso eficaz de técnicas e ferramentas para identificar e contratar os melhores talentos para uma organização.`

            
            for (i = 1; i < 5; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Recrutamento`;
              novoP[1].textContent = `O recrutamento é o processo de atrair candidatos para as oportunidades de emprego em uma empresa.\n
              Pode ser feito através de diferentes canais, como anúncios de emprego em sites de carreira, redes sociais, feiras de emprego, indicações de funcionários, agências de recrutamento, entre outros.\n
              Estratégias de recrutamento podem variar de acordo com a posição e a indústria, visando alcançar o público-alvo certo.\n
              `;

              novoH3[2].textContent = `Seleção`;
              novoP[2].textContent = `A seleção é o processo de avaliar e escolher os candidatos mais adequados para preencher as vagas disponíveis. 
              Envolve diferentes etapas, como triagem de currículos, entrevistas, testes de habilidades, avaliações comportamentais e referências.
              O objetivo da seleção é identificar candidatos que possuam as habilidades, experiência e cultura que se alinhem com os objetivos e valores da empresa.
              `;

              novoH3[3].textContent = `Técnicas e Ferramentas`;
              novoP[3].textContent = `As empresas utilizam uma variedade de técnicas e ferramentas para recrutamento e seleção, incluindo entrevistas estruturadas, testes psicométricos, dinâmicas de grupo, entre outros.
              Com o avanço da tecnologia, muitas empresas estão adotando abordagens mais inovadoras, como inteligência artificial para triagem de currículos, análise de dados para identificar padrões de desempenho e recrutamento por meio de plataformas digitais.
              `;

              novoH3[4].textContent = `Importância`;
              novoP[4].textContent = `O recrutamento e seleção eficazes são fundamentais para o sucesso de uma empresa, pois garantem a contratação de funcionários talentosos e engajados. 
              Uma equipe bem selecionada pode contribuir significativamente para o crescimento e a produtividade da empresa, enquanto contratações inadequadas podem resultar em custos e impactos negativos no desempenho organizacional.
              `;

              break;




        case 'Introdução Recursos Humanos':
            link_video.src = "https://drive.google.com/file/d/15dZLJJip_KZW8HgwGMEJJYJVnRKiSK-r/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`O setor de Recursos Humanos  é crucial para o sucesso de uma organização, pois é responsável por criar a cultura da empresa, contratar as pessoas certas, treiná-las e manter um bom ambiente de trabalho. Esse setor traz beneficios como a felicidade do trabalhador, aumento do engajamento,  satisfação do colaborador, times integrados e excelentes resultados. 
            O RH também é responsavel por construir cquipes de alto desempenho e impulsionar o crescimento organizacional, por isso é essencial na resolução de conflitos e visões estratégicas.`
            
            for (i = 1; i < 5; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Quais são as principais tarefas do RH? `;
              novoP[1].textContent = `Recrutamento e seleção, integração, treinamento e desenvolvimento, avaliação de desempenho, comunicação interna, folha de pagamento, benefícios e demissão.
              `;

              novoH3[2].textContent = `Como executar as tarefas do RH com eficiência? `;
              novoP[2].textContent = `Depois de conhecer algumas das atividades de responsabilidade do setor de recursos humanos, vamos apresentar o que pode ser feito para otimizar os processos e administrar o tempo de forma mais eficaz. Veja a seguir:`;

              novoH3[3].textContent = `Planejamento `;
              novoP[3].textContent = `Com o excesso de tarefas, é normal que o profissional de RH se perca. Ele pode iniciar uma atividade e, no meio dela, precise interrompê-la para atender uma demanda urgente ou um funcionário que acabou de aparecer na porta do setor.
              Para que esses contratempos sejam evitados, procure organizar o seu dia e o da sua equipe. Um bom exemplo é criar um quadro diário de prioridades com tempo estimado de execução. Pode ser em um programa específico, uma planilha ou até mesmo um quadro interno pendurado na parede.`;

              novoH3[4].textContent = `Estabelecimento de metas`;
              novoP[4].textContent = `Ao utilizar essa tática, você e sua equipe terão a noção exata do que precisam fazer e em quanto tempo. Dessa forma, a tarefa não se perderá no meio de tantas outras e, ao finalizá-la, abrirá uma lacuna para uma nova atividade. O setor fica mais dinâmico, e a equipe comprometida com os resultados.
              Não se esqueça de estabelecer metas alcançáveis. Caso contrário o seu time ficará desmotivado por nunca conseguir atingi-las`;

              break;




        case 'Como um aprendiz contribui no RH':
            link_video.src = "https://drive.google.com/file/d/1mv-S36VnuOUwdNEzzcuudPJJO4iaGpKB/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`Um aprendiz no setor de Recursos Humanos (RH) geralmente participa de várias atividades básicas para aprender sobre a gestão de recursos humanos e adquirir habilidades práticas na área. Aqui estão algumas tarefas comuns que um aprendiz de RH pode realizar:`
            
            for (i = 1; i < 8; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Auxílio na seleção e recrutamento`;
              novoP[1].textContent = `Ajudar na triagem de currículos, agendar e organizar entrevistas, e às vezes participar de entrevistas iniciais para aprender sobre o processo de seleção.`;

              novoH3[2].textContent = `Treinamento e desenvolvimento`;
              novoP[2].textContent = `Auxiliar na organização de sessões de treinamento para os funcionários, preparar materiais de treinamento e ajudar na logística desses eventos.`;

              novoH3[3].textContent = `Administração de benefícios`;
              novoP[3].textContent = `Aprender sobre os diferentes tipos de benefícios oferecidos aos funcionários, como assistência à saúde, seguro, entre outros, e ajudar na administração desses programas.`;

              novoH3[4].textContent = `Atualização de dados`;
              novoP[4].textContent = `Manter e atualizar os registros dos funcionários, o que pode incluir dados pessoais, registros de férias, licenças médicas, e outros dados relevantes.`;
             
              novoH3[5].textContent = `Comunicação interna`;
              novoP[5].textContent = `Auxiliar na redação de comunicados internos, atualizações para funcionários e, possivelmente, contribuir para newsletters ou intranet da empresa.`;
              
              novoH3[6].textContent = `Atendimento aos funcionários`;
              novoP[6].textContent = `Aprender a responder dúvidas e preocupações dos funcionários de forma profissional, oferecendo suporte nas questões de RH.`;
              
              novoH3[7].textContent = `Participação em projetos de RH:`;
              novoP[7].textContent = `Colaborar em projetos especiais, como pesquisas de satisfação, eventos corporativos e iniciativas de bem-estar.`;

              break;





        //VENDAS--------------------------------

        case 'Como se portar ao atender o cliente':
            link_video.src = "https://drive.google.com/file/d/1l0HAhf4T3DGSrgfZySdJjfiYQqYozXJd/preview";
            for (i = 1; i < 11; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }             

              novoH3[1].textContent = `Cumprimente com um Sorriso`;
              novoP[1].textContent = `Receba o cliente com um sorriso caloroso e uma saudação amigável. Isso cria uma atmosfera acolhedora e positiva desde o início.`;

              novoH3[2].textContent = `Mantenha uma Postura Confidente`;
              novoP[2].textContent = `Mantenha-se ereto e demonstre confiança em sua linguagem corporal. Isso transmite profissionalismo e segurança ao cliente.`;

              novoH3[3].textContent = `Estabeleça Contato Visual`;
              novoP[3].textContent = `Faça contato visual ao falar com o cliente para mostrar que você está genuinamente envolvido na conversa e interessado em ajudá-lo.`;

              novoH3[4].textContent = `Escute com Atenção`;
              novoP[4].textContent = `Ouça atentamente as necessidades e preocupações do cliente, demonstrando empatia e interesse genuíno em ajudá-lo a encontrar uma solução..`;
             
              novoH3[5].textContent = `Fale de Forma Clara e Respeitosa`;
              novoP[5].textContent = `Comunique-se de maneira clara, articulada e respeitosa. Evite gírias ou linguagem inadequada, especialmente em ambientes profissionais.`;
              
              novoH3[6].textContent = `Ofereça Assistência Proativa`;
              novoP[6].textContent = `Esteja disponível para ajudar o cliente antes mesmo que ele precise pedir assistência. Esteja atento aos sinais de que o cliente pode precisar de ajuda e ofereça-se para ajudar.`;
              
              novoH3[7].textContent = `Seja Paciente e Calmo`;
              novoP[7].textContent = `Mantenha a calma e a paciência, mesmo diante de clientes exigentes ou situações desafiadoras. Resolva os problemas de forma tranquila e profissional.`;

              
              novoH3[8].textContent = `Demonstre Conhecimento`;
              novoP[8].textContent = `Demonstre familiaridade com os produtos ou serviços oferecidos pela empresa, respondendo às perguntas do cliente de maneira precisa e informativa.`;

              novoH3[9].textContent = `Respeite a Privacidade do Cliente`;
              novoP[9].textContent = `Mantenha a discrição e respeite a privacidade do cliente, especialmente ao lidar com informações confidenciais ou transações financeiras`;
              
              novoH3[10].textContent = `Agradeça e Despeça-se Cordialmente`;
              novoP[10].textContent = `Ao concluir a interação com o cliente, agradeça pela visita e despeça-se cordialmente. Deixe claro que você valoriza a presença e o negócio dele.`;


              break;



        case 'Como se comportar diante do cliente operando o caixa':
            link_video.src = "https://drive.google.com/file/d/1eq6RSm479lj2IEtiVQkhBfZYlcWuFqTI/preview";
            for (i = 1; i < 5; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }             

              novoH3[1].textContent = `Sorria e seja educado com os clientes que passarem pelo caixa`;
              novoP[1].textContent = `Se você estiver tendo um dia tenso, deixe os problemas em casa e seja educado no expediente, mesmo que os clientes não sejam. Sorria e cumprimente cada pessoa que passar pelo caixa. Não precisa forçar a barra, mas o cliente vai sair bem mais contente do mercado ou da loja se você for gentil.`;

              novoH3[2].textContent = `Peça ajuda se houver mais de seis ou sete pessoas na fila`;
              novoP[2].textContent = `A maioria dos supermercados e lojas tem um protocolo específico para quando a fila de um caixa fica longa demais. Se acontecer com você, peça ajuda ao gerente ou a a outro caixa e não tente atender a todos depressa. Por exemplo: diga algo como "Preciso de ajuda no caixa 'x'. Alguém pode abrir outro caixa?"`;

              novoH3[3].textContent = `Não fique conversando com colegas quando houver pessoas esperando atendimento.`;
              novoP[3].textContent = `Nenhum cliente gosta de ser atendido quando o caixa conversa pelos cotovelos com outros funcionários. Lembre-se de que você está no trabalho e não é certo ficar de papo furado por ai. Deixe para conversar quando for adequado. Ainda assim, você pode conversar com os colegas quando não houver clientes na fila ou durante os intervalos. Seja sempre profissional e evite falar de assuntos polêmicos ou tensos. Não reclame dos clientes enquanto você estiver no mercado ou na loja.`;

              novoH3[4].textContent = `Mantenha a calma e o profissionalismo e ajude até os clientes irritados.`;
              novoP[4].textContent = `Você certamente vai se deparar com clientes que querem devolver um produto com o qual estão insatisfeitos ou que estão de mau humor. Uma da suas funções nessa hora é manter a calma, ajudar a resolver o problema e não perder a compostura. Por exemplo: não custa dizer "Pedimos desculpas pelo inconveniente". Chame o gerente se a situação sair do controle (se o cliente ficar cada vez mais bravo e até fazer cena). Ele vai estar mais preparado para resolver tudo.`;

            break;




        case 'Treinamento Operacional':
            
            link_video.src = "https://drive.google.com/file/d/1-IG9FKP2TSMGzwJnOWwkOLuyk1mAChah/preview";
            link_video2.src = "https://drive.google.com/file/d/1CczYSkYcWRWjVlJnVHewAfhNaoJ_L_o6/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`Um bom atendimento ao cliente busca otimizar o valor e a imagem da marca, buscando caminhos para reter, fidelizar e encantar os consumidores que interagem com a marca.
            Como consequência, os clientes satisfeitos, além de comprarem novamente, tendem a atuar como promotores da marca, indicando seus produtos e serviços para amigos e familiares.`
            for (i = 1; i < 2; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                
              }             

              novoH3[1].textContent = `As 15 mais importantes dicas para um bom atendimento ao cliente:`;
              for (j = 1; j < 16; j++){
                novoP[j] = document.createElement('p');

                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoP[j]);

              }
              novoP[1].textContent = `1. Estude a jornada do consumidor;`;
              novoP[2].textContent = `2. Valorize cada cliente, seja ele pequeno ou grande; `;
              novoP[3].textContent = `3. Mantenha a transparência e a sinceridade sobre o que consegue fazer;`;
              novoP[4].textContent = `4. Ofereça um ambiente confortável;`;
              novoP[5].textContent = `5. Fale a língua do cliente;`;
              novoP[6].textContent = `6. Construa memórias positivas;`;
              novoP[7].textContent = `7. Invista na fidelização de clientes;`;
              novoP[8].textContent = `8. Priorize o atendimento humanizado e sensível ao cliente`;
              novoP[9].textContent = `9. Esteja disponível e não deixe o cliente esperando;`;
              novoP[10].textContent = `10. Tenha organização e registre tudo;`;
              novoP[11].textContent = `11. Antecipe o contato e faça o atendimento pós-venda;`;
              novoP[12].textContent = `12. Estabeleça limites e não se sacrifique;`;
              novoP[13].textContent = `13. Desenvolva sua equipe de atendimento;`;
              novoP[14].textContent = `14. Acompanhe resultados;`;
              novoP[15].textContent = `15. Aprenda com os seus erros (mas evite repeti-los).`;

            break;

        default:

    }

    if (link_video2.src!="https://drive.google.com/file/d/1CczYSkYcWRWjVlJnVHewAfhNaoJ_L_o6/preview"){
        video2.style.display = 'none';
    }

});