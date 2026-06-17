(function () {
  'use strict';

  // Imagem do Zuno (coloque o arquivo em /images/zuno.png e descomente a linha abaixo)
  var ZUNO_IMG = '/images/zuno.png';

  // ============================================================
  // BASE DE CONHECIMENTO POR SERVIÇO
  // ============================================================
  var SERVICES = {
    'avcb-clcb': {
      id: 'avcb-clcb',
      name: 'AVCB e CLCB',
      emoji: '🔥',
      intro: 'O <strong>AVCB</strong> (Auto de Vistoria do Corpo de Bombeiros) e o <strong>CLCB</strong> (Certificado de Licença do Corpo de Bombeiros) são documentos obrigatórios para estabelecimentos comerciais, industriais e de uso público no estado de São Paulo.<br><br>Sem esses documentos, seu negócio fica sujeito a <strong>embargo, multas de R$ 5.000 a R$ 50.000</strong> e até interdição pelo Corpo de Bombeiros.',
      faqs: [
        {
          q: 'Qual a diferença entre AVCB e CLCB?',
          a: 'O <strong>AVCB</strong> é para edificações acima de 750 m² ou com características especiais (andares elevados, alto risco etc.). O <strong>CLCB</strong> é para estabelecimentos menores, com até 750 m². A Fazun avalia o seu caso e indica qual documento é necessário.'
        },
        {
          q: 'Meu estabelecimento está funcionando sem AVCB. É grave?',
          a: 'Sim. O Corpo de Bombeiros pode <strong>embargar o local, aplicar multas</strong> e responsabilizar civil e criminalmente o proprietário em caso de incêndio. Além disso, seguradoras podem negar sinistros sem o documento.'
        },
        {
          q: 'Quanto tempo leva para obter o AVCB?',
          a: 'Depende do município e da complexidade da edificação. Em média, <strong>60 a 120 dias</strong> após o protocolo. A Fazun agiliza o processo com toda a documentação correta desde o início, evitando indeferimentos.'
        },
        {
          q: 'O que preciso adequar no meu estabelecimento?',
          a: 'Geralmente: hidrantes, extintores, iluminação de emergência, sinalização de saída, detector de fumaça e rota de fuga. A Fazun faz um laudo de adequação e indica exatamente o que precisa ser feito.'
        }
      ],
      extraQuestion: 'Qual é o tipo e uso do estabelecimento? <em>(ex: restaurante, academia, escritório, loja, galpão, clínica...)</em>',
      extraLabel: 'Tipo de uso',
      waPrefix: 'AVCB e CLCB'
    },
    'regularizacao-imobiliaria': {
      id: 'regularizacao-imobiliaria',
      name: 'Regularização Imobiliária',
      emoji: '🏠',
      intro: 'A <strong>Regularização Imobiliária</strong> trata de imóveis com construção não averbada, plantas em desacordo com o executado, documentação irregular, usucapião, desmembramento ou unificação de matrículas.<br><br>Um imóvel irregular <strong>não pode ser vendido, financiado, inventariado ou ter escritura lavrada</strong>. A Fazun realiza o levantamento técnico, laudo, ART e protocola toda a documentação.',
      faqs: [
        {
          q: 'Como sei se meu imóvel está irregular?',
          a: 'Compare a planta registrada em cartório com o que foi construído de fato. Se houver ampliações, reformas ou construções sem aprovação na Prefeitura, o imóvel está irregular. A Fazun faz essa análise gratuitamente na consulta inicial.'
        },
        {
          q: 'Consigo vender um imóvel irregular?',
          a: '<strong>Não legalmente.</strong> O cartório exige que a matrícula esteja atualizada para lavrar escritura. Bancos também exigem regularidade para financiamento. A regularização é obrigatória antes de qualquer transação.'
        },
        {
          q: 'O que é averbação de construção?',
          a: 'É o registro no Cartório de Registro de Imóveis de que uma construção foi feita no terreno. Sem a averbação, a construção não existe juridicamente — mesmo que esteja em pé há décadas.'
        },
        {
          q: 'Quanto tempo leva a regularização?',
          a: 'Depende do município e do tipo de irregularidade. Processos simples levam <strong>2 a 4 meses</strong>. Casos complexos (usucapião, múltiplas áreas) podem levar mais. A Fazun apresenta um cronograma detalhado após análise.'
        }
      ],
      extraQuestion: 'Qual é a situação do imóvel? <em>(ex: construção sem alvará, área não averbada, usucapião, documentação desatualizada...)</em>',
      extraLabel: 'Situação do imóvel',
      waPrefix: 'Regularização Imobiliária'
    },
    'lta-afe-anvisa': {
      id: 'lta-afe-anvisa',
      name: 'LTA / AFE – Anvisa',
      emoji: '⚕️',
      intro: 'A <strong>LTA</strong> (Licença da Vigilância Sanitária Municipal) e a <strong>AFE</strong> (Autorização de Funcionamento de Empresa – Anvisa Federal) são obrigatórias para farmácias, drogarias, distribuidoras, clínicas, laboratórios, empresas de alimentos, cosméticos, saneantes e produtos médicos.<br><br>Sem essas licenças, o estabelecimento pode ser <strong>autuado, interditado e multado</strong>.',
      faqs: [
        {
          q: 'Minha empresa precisa de LTA ou AFE?',
          a: 'Depende da atividade. A <strong>LTA</strong> é municipal e exigida para qualquer estabelecimento de saúde ou alimentação. A <strong>AFE</strong> é federal (Anvisa) e exigida para empresas que fabricam, distribuem ou importam produtos regulados. A Fazun avalia qual se aplica ao seu caso.'
        },
        {
          q: 'O projeto arquitetônico influencia na aprovação?',
          a: 'Sim, <strong>decisivamente</strong>. A Vigilância Sanitária exige que o layout siga normas específicas: áreas mínimas, fluxo de trabalho, materiais de piso e parede, ventilação, etc. Um projeto inadequado resulta em reprovação. A Fazun elabora o projeto já adequado às normas.'
        },
        {
          q: 'Quanto tempo leva o processo?',
          a: 'A LTA municipal varia por cidade: em média <strong>30 a 90 dias</strong>. A AFE federal pode levar <strong>90 a 180 dias</strong> dependendo da categoria de produto. A Fazun agiliza com documentação completa desde o primeiro protocolo.'
        },
        {
          q: 'Posso funcionar enquanto espero a licença?',
          a: '<strong>Depende da atividade.</strong> Alguns municípios emitem um alvará provisório. Para atividades de risco sanitário alto, é proibido funcionar sem licença. A Fazun orienta sobre a melhor estratégia para cada caso.'
        }
      ],
      extraQuestion: 'Qual é o tipo de estabelecimento ou atividade? <em>(ex: farmácia, distribuidora de medicamentos, clínica, indústria de alimentos, laboratório...)</em>',
      extraLabel: 'Tipo de estabelecimento',
      waPrefix: 'LTA / AFE – Anvisa'
    },
    'construcao-reforma': {
      id: 'construcao-reforma',
      name: 'Construção e Reforma',
      emoji: '🏗️',
      intro: 'A Fazun realiza projetos e acompanhamento técnico de <strong>obras residenciais e comerciais</strong>: projeto arquitetônico, estrutural, hidrossanitário, elétrico, aprovação na Prefeitura e obtenção do Habite-se.<br><br>Obras sem <strong>ART (Anotação de Responsabilidade Técnica)</strong> são ilegais, podem ser embargadas e impossibilitam a regularização futura do imóvel.',
      faqs: [
        {
          q: 'Preciso de engenheiro para uma reforma pequena?',
          a: 'Para reformas simples (pintura, revestimento) não é obrigatório. Para qualquer obra que altere estrutura, amplie área, mude instalações elétricas ou hidráulicas, é <strong>obrigatória a ART de engenheiro</strong> — caso contrário, a obra é ilegal.'
        },
        {
          q: 'O que é o Habite-se e quando preciso dele?',
          a: 'O Habite-se é o documento da Prefeitura que certifica que a obra foi concluída conforme o projeto aprovado. É necessário para <strong>ligar serviços de água e luz, vender o imóvel, financiar e averbar a construção</strong> em cartório.'
        },
        {
          q: 'Quanto tempo leva a aprovação de projeto na Prefeitura?',
          a: 'Varia por município: entre <strong>30 e 90 dias</strong> em média. Com o projeto correto e documentação completa, a Fazun evita reprovações que atrasam o processo.'
        },
        {
          q: 'Qual a diferença entre projeto arquitetônico e estrutural?',
          a: 'O <strong>projeto arquitetônico</strong> define o layout, dimensões e estética da obra. O <strong>projeto estrutural</strong> calcula fundações, pilares, vigas e lajes para que a construção seja segura. Ambos são obrigatórios para obras de maior porte.'
        }
      ],
      extraQuestion: 'É uma obra residencial ou comercial? O que pretende fazer? <em>(ex: construir casa, ampliar imóvel, reformar apartamento, construir galpão...)</em>',
      extraLabel: 'Tipo de obra',
      waPrefix: 'Construção e Reforma'
    },
    'projetos-especialidades': {
      id: 'projetos-especialidades',
      name: 'Projetos e Especialidades',
      emoji: '📐',
      intro: 'A Fazun elabora <strong>projetos estruturais, cálculo estrutural, laudos técnicos, projetos em BIM, PPCI</strong> e projetos de instalações hidrossanitárias e elétricas.<br><br>Atendemos obras novas, reformas e adaptações, sempre com emissão de ART e total conformidade técnica e legal.',
      faqs: [
        {
          q: 'O que é BIM e por que é importante?',
          a: 'BIM (Building Information Modeling) é a modelagem digital 3D completa da edificação. Com BIM é possível identificar incompatibilidades entre projetos antes da obra, <strong>reduzindo custos e retrabalho</strong>. A Fazun utiliza Revit e ArchiCAD para projetos BIM.'
        },
        {
          q: 'O que é PPCI?',
          a: 'PPCI é o <strong>Projeto de Prevenção e Proteção Contra Incêndio</strong>, exigido pelo Corpo de Bombeiros para a emissão do AVCB. Inclui hidrantes, extintores, sinalização, rotas de fuga e sistemas de alarme. A Fazun elabora o PPCI conforme a IT (Instrução Técnica) aplicável.'
        },
        {
          q: 'Quando preciso de um laudo técnico?',
          a: 'Para compra e venda de imóvel, vistoria de estrutura, análise de trincas, umidade ou patologias, perícias, revisão de projetos existentes, ou quando exigido pela Prefeitura, cartório ou seguradora.'
        },
        {
          q: 'A Fazun faz projeto para imóvel fora de São Paulo?',
          a: 'Sim. A Fazun atua em <strong>todo o estado de SP</strong> e pode realizar projetos remotamente, com visita técnica quando necessário.'
        }
      ],
      extraQuestion: 'Qual tipo de projeto ou serviço você precisa? <em>(ex: cálculo estrutural, laudo técnico, projeto hidrossanitário, BIM, PPCI, projeto elétrico...)</em>',
      extraLabel: 'Tipo de projeto',
      waPrefix: 'Projetos e Especialidades'
    },
    'inspecao-predial-drone': {
      id: 'inspecao-predial-drone',
      name: 'Inspeção Predial com Drone',
      emoji: '🚁',
      intro: 'A <strong>Inspeção Predial com Drone</strong> da Fazun realiza a vistoria técnica de fachadas, telhados, coberturas e estruturas elevadas com precisão e segurança — <strong>sem andaimes, sem interrupção da rotina do prédio</strong>.<br><br>Entregamos um <strong>laudo técnico completo com relatório fotográfico e ART</strong>, conforme ABNT NBR 16747.',
      faqs: [
        {
          q: 'A inspeção com drone substitui o laudo tradicional?',
          a: 'Sim, para inspeções visuais de fachada, cobertura e telhado. O drone captura imagens em alta resolução e permite identificar trincas, infiltrações, eflorescências e deteriorações sem necessidade de andaime. O laudo emitido tem validade técnica e ART.'
        },
        {
          q: 'Para quais tipos de edificação é indicado?',
          a: 'Ideal para <strong>condomínios, galpões industriais, prédios comerciais, torres e qualquer edificação acima de 3 pavimentos</strong>. Também indicado para coberturas e telhados de difícil acesso.'
        },
        {
          q: 'A inspeção predial é obrigatória?',
          a: 'Sim, em vários municípios de SP, incluindo a capital. A Lei 16.642/17 (SP) exige inspeção periódica de edificações. Além disso, síndicos e proprietários têm responsabilidade civil sobre a manutenção da edificação.'
        },
        {
          q: 'O que está incluído no laudo?',
          a: 'Relatório fotográfico completo, identificação de anomalias e patologias, classificação de risco, recomendações de manutenção, ART do engenheiro responsável e prazo sugerido para a próxima inspeção.'
        }
      ],
      extraQuestion: 'Quantos pavimentos tem a edificação e qual o motivo da inspeção? <em>(ex: 8 andares, infiltração na fachada / vistoria de rotina)</em>',
      extraLabel: 'Pavimentos e motivo',
      waPrefix: 'Inspeção Predial com Drone'
    }
  };

  // ============================================================
  // ESTADO
  // ============================================================
  var state = {
    step: 'init',
    selectedService: null,
    address: '',
    extraInfo: '',
    pageService: null,
    opened: false
  };

  function detectPageService() {
    var path = window.location.pathname;
    for (var id in SERVICES) {
      if (path.indexOf(id) !== -1) return id;
    }
    return null;
  }

  // ============================================================
  // UTILS
  // ============================================================
  function $(id) { return document.getElementById(id); }

  function scrollToBottom() {
    var msgs = $('zuno-messages');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  }

  function addBotMessage(html) {
    var msgs = $('zuno-messages');
    var avHtml = ZUNO_IMG
      ? '<img src="' + ZUNO_IMG + '" class="zuno-avatar-img" alt="Zuno" onerror="this.outerHTML=\'<div class=\\\"zuno-avatar\\\">Z</div>\'">'
      : '<div class="zuno-avatar">Z</div>';
    var div = document.createElement('div');
    div.className = 'zuno-msg zuno-bot';
    div.innerHTML = avHtml + '<div class="zuno-bubble">' + html + '</div>';
    msgs.appendChild(div);
    scrollToBottom();
  }

  function addUserMessage(text) {
    var msgs = $('zuno-messages');
    var div = document.createElement('div');
    div.className = 'zuno-msg zuno-user';
    div.innerHTML = '<div class="zuno-bubble">' + text + '</div>';
    msgs.appendChild(div);
    scrollToBottom();
  }

  function showTyping(duration, callback) {
    var msgs = $('zuno-messages');
    var avHtml = ZUNO_IMG
      ? '<img src="' + ZUNO_IMG + '" class="zuno-avatar-img" alt="Zuno" onerror="this.outerHTML=\'<div class=\\\"zuno-avatar\\\">Z</div>\'">'
      : '<div class="zuno-avatar">Z</div>';
    var div = document.createElement('div');
    div.className = 'zuno-msg zuno-bot zuno-typing-msg';
    div.innerHTML = avHtml + '<div class="zuno-bubble"><span class="zuno-typing"><span></span><span></span><span></span></span></div>';
    msgs.appendChild(div);
    scrollToBottom();
    setTimeout(function () {
      if (div.parentNode) div.parentNode.removeChild(div);
      if (callback) callback();
    }, duration);
  }

  function showInput(placeholder) {
    var area = $('zuno-input-area');
    var input = $('zuno-text-input');
    area.style.display = 'flex';
    input.placeholder = placeholder || 'Digite aqui...';
    input.value = '';
    setTimeout(function () { input.focus(); }, 100);
  }

  function hideInput() {
    $('zuno-input-area').style.display = 'none';
  }

  function disableButtons(className) {
    var btns = document.querySelectorAll('.' + className);
    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
      btns[i].style.opacity = '0.5';
      btns[i].style.cursor = 'default';
    }
  }

  function appendButtons(btnsHtml) {
    var msgs = $('zuno-messages');
    var avHtml = ZUNO_IMG
      ? '<img src="' + ZUNO_IMG + '" class="zuno-avatar-img" alt="Zuno" onerror="this.outerHTML=\'<div class=\\\"zuno-avatar\\\">Z</div>\'">'
      : '<div class="zuno-avatar">Z</div>';
    var div = document.createElement('div');
    div.className = 'zuno-msg zuno-bot';
    div.innerHTML = avHtml + '<div class="zuno-bubble zuno-btns-wrap">' + btnsHtml + '</div>';
    msgs.appendChild(div);
    scrollToBottom();
    return div;
  }

  // ============================================================
  // WHATSAPP
  // ============================================================
  function openWhatsApp() {
    var svc = SERVICES[state.selectedService];
    var msg = 'Olá! Vim pelo site da Fazun e tenho interesse em *' + svc.waPrefix + '*.\n\n'
      + '📍 Endereço: ' + state.address + '\n'
      + '📋 ' + state.extraInfo + '\n\n'
      + 'Gostaria de receber uma proposta personalizada.';
    window.open('https://api.whatsapp.com/send/?phone=5511971123379&text=' + encodeURIComponent(msg) + '&type=phone_number&app_absent=0', '_blank');
  }

  // ============================================================
  // FLUXO DO BOT
  // ============================================================

  function showFAQ(serviceId) {
    var svc = SERVICES[serviceId];
    state.step = 'faq';
    showTyping(600, function () {
      addBotMessage('Selecione sua dúvida:');
      var btnsHtml = svc.faqs.map(function (f, i) {
        return '<button class="zuno-faq-btn zuno-opt-btn" data-faq="' + i + '">' + f.q + '</button>';
      }).join('');
      btnsHtml += '<button class="zuno-orcamento-btn zuno-opt-btn" style="background:#0a2d5a;color:#fff;border-color:#0a2d5a;">💬 Quero um orçamento</button>';
      appendButtons(btnsHtml);
    });
  }

  function showFAQAnswer(idx) {
    var svc = SERVICES[state.selectedService];
    var faq = svc.faqs[idx];
    disableButtons('zuno-faq-btn');
    disableButtons('zuno-orcamento-btn');
    addUserMessage(faq.q);
    showTyping(700, function () {
      addBotMessage(faq.a);
      showTyping(500, function () {
        addBotMessage('Posso ajudar com mais alguma dúvida?');
        var btnsHtml = svc.faqs.map(function (f, i) {
          return '<button class="zuno-faq-btn zuno-opt-btn" data-faq="' + i + '">' + f.q + '</button>';
        }).join('');
        btnsHtml += '<button class="zuno-orcamento-btn zuno-opt-btn" style="background:#0a2d5a;color:#fff;border-color:#0a2d5a;">💬 Quero um orçamento</button>';
        appendButtons(btnsHtml);
      });
    });
  }

  function startOrcamento() {
    disableButtons('zuno-faq-btn');
    disableButtons('zuno-orcamento-btn');
    state.step = 'address';
    showTyping(700, function () {
      addBotMessage('Ótimo! Para nossa equipe preparar uma <strong>proposta personalizada</strong>, preciso de algumas informações.<br><br>📍 <strong>Qual o endereço completo do imóvel ou estabelecimento?</strong> <em>(logradouro, número, bairro, cidade)</em>');
      showInput('Ex: Rua das Flores, 123, Centro, São Paulo - SP');
    });
  }

  function startWithService(serviceId) {
    state.selectedService = serviceId;
    var svc = SERVICES[serviceId];
    disableButtons('zuno-service-btn');
    addUserMessage(svc.emoji + ' ' + svc.name);

    showTyping(900, function () {
      addBotMessage(svc.intro);
      showTyping(600, function () {
        addBotMessage('O que prefere fazer agora?');
        appendButtons(
          '<button class="zuno-perguntas-btn zuno-opt-btn">❓ Tenho dúvidas sobre ' + svc.name + '</button>' +
          '<button class="zuno-orcamento-btn zuno-opt-btn" style="background:#0a2d5a;color:#fff;border-color:#0a2d5a;">💬 Quero um orçamento</button>'
        );
        state.step = 'choice';
      });
    });
  }

  function handleAddress(address) {
    state.address = address;
    state.step = 'extra';
    var svc = SERVICES[state.selectedService];
    addUserMessage(address);
    showTyping(700, function () {
      addBotMessage('Anotado! ✅<br><br>' + svc.extraQuestion);
      showInput('Sua resposta...');
    });
  }

  function handleExtra(extra) {
    state.extraInfo = extra;
    state.step = 'done';
    addUserMessage(extra);
    showTyping(1000, function () {
      addBotMessage('Perfeito! 🎉 Nossa equipe já recebeu as informações e vai preparar uma <strong>proposta sob medida</strong> para você.<br><br>Clique abaixo para ser atendido agora:');
      var avHtml = ZUNO_IMG
        ? '<img src="' + ZUNO_IMG + '" class="zuno-avatar-img" alt="Zuno" onerror="this.outerHTML=\'<div class=\\\"zuno-avatar\\\">Z</div>\'">'
        : '<div class="zuno-avatar">Z</div>';
      var msgs = $('zuno-messages');
      var div = document.createElement('div');
      div.className = 'zuno-msg zuno-bot';
      div.innerHTML = avHtml + '<div class="zuno-bubble" style="padding:8px;max-width:92%"><button class="zuno-wa-btn" id="zuno-wa-final">💬 Falar com a equipe Fazun</button></div>';
      msgs.appendChild(div);
      scrollToBottom();
      $('zuno-wa-final').addEventListener('click', openWhatsApp);
      hideInput();
    });
  }

  function handleUserInput() {
    var input = $('zuno-text-input');
    var text = (input.value || '').trim();
    if (!text) return;
    input.value = '';
    hideInput();
    if (state.step === 'address') handleAddress(text);
    else if (state.step === 'extra') handleExtra(text);
  }

  // ============================================================
  // INICIALIZAÇÃO DO CHAT
  // ============================================================
  function initChat() {
    state.step = 'init';
    state.selectedService = null;
    state.address = '';
    state.extraInfo = '';
    state.pageService = detectPageService();

    var msgs = $('zuno-messages');
    msgs.innerHTML = '';
    hideInput();

    var pageService = state.pageService;

    showTyping(500, function () {
      addBotMessage(
        'Olá! 👋 Sou o <strong>Zuno</strong>, assistente virtual da <strong>Fazun Engenharia</strong>.<br><br>' +
        'Posso explicar nossos serviços, responder suas dúvidas e conectar você com nossa equipe para um atendimento personalizado.'
      );

      showTyping(600, function () {
        if (pageService && SERVICES[pageService]) {
          var svc = SERVICES[pageService];
          addBotMessage('Você está na página de <strong>' + svc.name + '</strong>. Como posso ajudar?');
          appendButtons(
            '<button class="zuno-service-btn zuno-opt-btn" data-service="' + svc.id + '">' + svc.emoji + ' Saiba mais sobre ' + svc.name + '</button>'
          );
        } else {
          addBotMessage('Sobre qual serviço você gostaria de saber mais?');
          var allBtns = Object.keys(SERVICES).map(function (id) {
            var s = SERVICES[id];
            return '<button class="zuno-service-btn zuno-opt-btn" data-service="' + s.id + '">' + s.emoji + ' ' + s.name + '</button>';
          }).join('');
          appendButtons(allBtns);
        }
        state.step = 'welcome';
      });
    });
  }

  // ============================================================
  // CSS
  // ============================================================
  function injectCSS() {
    var css = [
      /* FAB — estilo igual ao botão WhatsApp */
      '#zuno-fab{position:fixed;bottom:18px;left:18px;width:56px;height:56px;background:#0a2d5a;border-radius:50%;cursor:pointer;z-index:999999999;box-shadow:0 4px 12px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;border:none;outline:none;transition:transform 0.2s,box-shadow 0.2s;padding:0;overflow:hidden}',
      '#zuno-fab:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,0.5)}',
      '#zuno-fab-img{width:100%;height:100%;object-fit:cover;border-radius:50%}',
      '#zuno-fab-icon{width:30px;height:30px;fill:white}',
      '#zuno-badge{position:absolute;top:-3px;right:-3px;width:18px;height:18px;background:#e63946;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:bold;color:#fff;font-family:Arial,sans-serif;pointer-events:none;border:2px solid #fff}',

      /* Painel */
      '#zuno-panel{position:fixed;bottom:85px;left:18px;width:340px;max-width:calc(100vw - 36px);height:510px;max-height:calc(100vh - 105px);background:#fff;border-radius:18px;box-shadow:0 10px 40px rgba(0,0,0,0.25);z-index:999999999;display:none;flex-direction:column;overflow:hidden;font-family:Arial,sans-serif;font-size:14px;line-height:1.5}',
      '#zuno-panel.zuno-open{display:flex}',

      /* Header */
      '#zuno-header{background:linear-gradient(135deg,#0a2d5a 0%,#1a4a8a 100%);color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px;flex-shrink:0}',
      '#zuno-hav{width:38px;height:38px;border-radius:50%;overflow:hidden;flex-shrink:0;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:bold}',
      '#zuno-hav img{width:100%;height:100%;object-fit:cover}',
      '#zuno-hinfo{flex:1;min-width:0}',
      '#zuno-hname{font-weight:bold;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '#zuno-hstatus{font-size:11px;opacity:.82;display:flex;align-items:center;gap:4px}',
      '#zuno-hstatus::before{content:"";width:7px;height:7px;background:#4dff91;border-radius:50%;display:inline-block}',
      '#zuno-xbtn{cursor:pointer;opacity:.7;background:none;border:none;color:#fff;font-size:20px;padding:0;line-height:1;flex-shrink:0}',
      '#zuno-xbtn:hover{opacity:1}',

      /* Mensagens */
      '#zuno-messages{flex:1;overflow-y:auto;padding:12px 10px;display:flex;flex-direction:column;gap:8px;background:#f4f6fb}',
      '#zuno-messages::-webkit-scrollbar{width:4px}',
      '#zuno-messages::-webkit-scrollbar-thumb{background:#ccc;border-radius:2px}',
      '.zuno-msg{display:flex;align-items:flex-end;gap:6px;animation:zunofade .2s ease}',
      '@keyframes zunofade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}',
      '.zuno-user{flex-direction:row-reverse}',
      '.zuno-avatar{width:28px;height:28px;background:#0a2d5a;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;flex-shrink:0;align-self:flex-end}',
      '.zuno-avatar-img{width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;align-self:flex-end}',
      '.zuno-bubble{background:#fff;border-radius:12px 12px 12px 2px;padding:9px 11px;max-width:82%;box-shadow:0 1px 4px rgba(0,0,0,0.09);color:#222;word-wrap:break-word}',
      '.zuno-user .zuno-bubble{background:#0a2d5a;color:#fff;border-radius:12px 12px 2px 12px}',
      '.zuno-btns-wrap{display:flex;flex-direction:column;gap:6px;padding:6px;max-width:96%;background:transparent;box-shadow:none}',

      /* Botões de opção */
      '.zuno-opt-btn{background:#fff;border:1.5px solid #0a2d5a;color:#0a2d5a;border-radius:9px;padding:9px 12px;cursor:pointer;font-size:13px;font-weight:600;text-align:left;transition:background .15s,color .15s;font-family:Arial,sans-serif;line-height:1.3;width:100%}',
      '.zuno-opt-btn:hover:not(:disabled){background:#0a2d5a;color:#fff}',
      '.zuno-opt-btn:disabled{opacity:0.5;cursor:default}',

      /* Botão WhatsApp final */
      '.zuno-wa-btn{background:#25d366;color:#fff;border:none;border-radius:9px;padding:12px 16px;cursor:pointer;font-size:14px;font-weight:bold;width:100%;transition:background .15s;font-family:Arial,sans-serif}',
      '.zuno-wa-btn:hover{background:#1aab54}',

      /* Typing */
      '.zuno-typing span{display:inline-block;width:6px;height:6px;background:#aaa;border-radius:50%;margin:0 2px;animation:zunobounce 1.1s infinite}',
      '.zuno-typing span:nth-child(2){animation-delay:.2s}',
      '.zuno-typing span:nth-child(3){animation-delay:.4s}',
      '@keyframes zunobounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}',

      /* Input */
      '#zuno-input-area{display:none;padding:9px 10px;background:#fff;border-top:1px solid #eee;gap:7px;align-items:center;flex-shrink:0}',
      '#zuno-text-input{flex:1;border:1.5px solid #ddd;border-radius:20px;padding:8px 14px;font-size:13px;outline:none;font-family:Arial,sans-serif;transition:border-color .15s;min-width:0}',
      '#zuno-text-input:focus{border-color:#0a2d5a}',
      '#zuno-send-btn{width:36px;height:36px;background:#0a2d5a;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s}',
      '#zuno-send-btn:hover{background:#1a4a8a}',
      '#zuno-send-btn svg{width:15px;height:15px}',

      /* Footer */
      '#zuno-footer{text-align:center;padding:6px 8px;background:#fff;border-top:1px solid #f0f0f0;flex-shrink:0}',
      '#zuno-restart-btn{background:none;border:none;color:#aaa;font-size:11px;cursor:pointer;font-family:Arial,sans-serif}',
      '#zuno-restart-btn:hover{color:#0a2d5a}'
    ].join('');

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ============================================================
  // CRIA O WIDGET
  // ============================================================
  function createWidget() {
    injectCSS();

    var fabContent = ZUNO_IMG
      ? '<img id="zuno-fab-img" src="' + ZUNO_IMG + '" alt="Zuno" onerror="this.style.display=\'none\';document.getElementById(\'zuno-fab-icon-wrap\').style.display=\'flex\'">' +
        '<span id="zuno-fab-icon-wrap" style="display:none"><svg id="zuno-fab-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg></span>'
      : '<svg id="zuno-fab-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>';

    var headerAv = ZUNO_IMG
      ? '<div id="zuno-hav"><img src="' + ZUNO_IMG + '" alt="Zuno" onerror="this.outerHTML=\'Z\'"></div>'
      : '<div id="zuno-hav">Z</div>';

    var container = document.createElement('div');
    container.innerHTML =
      '<button id="zuno-fab" title="Falar com o Zuno">' +
        '<div id="zuno-badge">1</div>' +
        fabContent +
      '</button>' +
      '<div id="zuno-panel">' +
        '<div id="zuno-header">' +
          headerAv +
          '<div id="zuno-hinfo">' +
            '<div id="zuno-hname">Zuno · Fazun Engenharia</div>' +
            '<div id="zuno-hstatus">Online agora</div>' +
          '</div>' +
          '<button id="zuno-xbtn" title="Fechar">✕</button>' +
        '</div>' +
        '<div id="zuno-messages"></div>' +
        '<div id="zuno-input-area">' +
          '<input type="text" id="zuno-text-input" placeholder="Digite aqui..." autocomplete="off">' +
          '<button id="zuno-send-btn" title="Enviar">' +
            '<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>' +
          '</button>' +
        '</div>' +
        '<div id="zuno-footer"><button id="zuno-restart-btn">↺ Reiniciar conversa</button></div>' +
      '</div>';

    document.body.appendChild(container);

    // Abrir/fechar
    $('zuno-fab').addEventListener('click', function () {
      var panel = $('zuno-panel');
      var badge = $('zuno-badge');
      if (panel.classList.contains('zuno-open')) {
        panel.classList.remove('zuno-open');
      } else {
        panel.classList.add('zuno-open');
        badge.style.display = 'none';
        if (!state.opened) {
          state.opened = true;
          initChat();
        }
      }
    });

    $('zuno-xbtn').addEventListener('click', function () {
      $('zuno-panel').classList.remove('zuno-open');
    });

    // Input
    $('zuno-send-btn').addEventListener('click', handleUserInput);
    $('zuno-text-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleUserInput();
    });

    // Delegação de cliques nos botões
    $('zuno-messages').addEventListener('click', function (e) {
      var btn = e.target;
      while (btn && btn !== this) {
        if (btn.tagName === 'BUTTON') break;
        btn = btn.parentNode;
      }
      if (!btn || btn.tagName !== 'BUTTON' || btn.disabled) return;

      if (btn.classList.contains('zuno-service-btn') && state.step === 'welcome') {
        startWithService(btn.getAttribute('data-service'));
      } else if (btn.classList.contains('zuno-perguntas-btn') && state.step === 'choice') {
        disableButtons('zuno-perguntas-btn');
        disableButtons('zuno-orcamento-btn');
        addUserMessage('❓ Tenho dúvidas');
        showFAQ(state.selectedService);
      } else if (btn.classList.contains('zuno-orcamento-btn') && (state.step === 'choice' || state.step === 'faq')) {
        addUserMessage('💬 Quero um orçamento');
        startOrcamento();
      } else if (btn.classList.contains('zuno-faq-btn') && state.step === 'faq') {
        showFAQAnswer(parseInt(btn.getAttribute('data-faq'), 10));
      }
    });

    // Reiniciar
    $('zuno-restart-btn').addEventListener('click', function () {
      state.opened = true;
      initChat();
    });
  }

  // ============================================================
  // INICIAR
  // ============================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }
})();
