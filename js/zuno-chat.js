(function () {
  'use strict';

  // ============================================================
  // BASE DE CONHECIMENTO POR SERVIÇO
  // ============================================================
  var SERVICES = {
    'avcb-clcb': {
      id: 'avcb-clcb',
      name: 'AVCB e CLCB',
      emoji: '🔥',
      intro: 'O <strong>AVCB (Auto de Vistoria do Corpo de Bombeiros)</strong> e o <strong>CLCB (Certificado de Licença do Corpo de Bombeiros)</strong> são documentos obrigatórios para estabelecimentos comerciais, industriais e de uso público em São Paulo.<br><br>Sem esses documentos, seu negócio fica sujeito a <strong>embargo, multas de R$5.000 a R$50.000</strong> e até interdição pelo Corpo de Bombeiros.<br><br>A Fazun cuida de todo o processo: projeto de prevenção de incêndio, hidrantes, iluminação de emergência, sinalização, extintores e aprovação no CBPMESP.',
      extraQuestion: 'Qual é o tipo e uso do estabelecimento? <em>(ex: restaurante, academia, escritório, loja, galpão, clínica...)</em>',
      extraLabel: 'Tipo de uso',
      waQuestion: 'Tipo/uso do estabelecimento'
    },
    'regularizacao-imobiliaria': {
      id: 'regularizacao-imobiliaria',
      name: 'Regularização Imobiliária',
      emoji: '🏠',
      intro: 'A <strong>Regularização Imobiliária</strong> trata de imóveis com construção não averbada, plantas em desacordo com o executado, documentação irregular, casos de usucapião, desmembramento ou unificação de matrículas.<br><br>Um imóvel irregular <strong>não pode ser vendido, financiado no banco, inventariado ou ter sua escritura lavrada</strong>. A Fazun realiza o levantamento técnico, laudo, ART e protocola toda a documentação em cartório e prefeitura.',
      extraQuestion: 'Qual é a situação do imóvel? <em>(ex: construção sem alvará, área não averbada, usucapião, documentação desatualizada, outro)</em>',
      extraLabel: 'Situação do imóvel',
      waQuestion: 'Situação do imóvel'
    },
    'lta-afe-anvisa': {
      id: 'lta-afe-anvisa',
      name: 'LTA / AFE – Anvisa',
      emoji: '⚕️',
      intro: 'A <strong>LTA (Licença da Vigilância Sanitária Municipal)</strong> e a <strong>AFE (Autorização de Funcionamento de Empresa – Anvisa Federal)</strong> são obrigatórias para farmácias, drogarias, distribuidoras, clínicas, laboratórios, empresas de alimentos, cosméticos, saneantes e produtos médicos.<br><br>Sem essas licenças, o estabelecimento pode ser <strong>autuado, interditado e multado</strong>. A Fazun elabora o projeto arquitetônico adequado às normas sanitárias vigentes, memorial descritivo, RRT/ART e acompanha todo o processo junto à Vigilância e à Anvisa.',
      extraQuestion: 'Qual é o tipo de estabelecimento ou atividade? <em>(ex: farmácia, distribuidora de medicamentos, clínica médica, indústria de alimentos, laboratório de análises...)</em>',
      extraLabel: 'Tipo de estabelecimento',
      waQuestion: 'Tipo de estabelecimento/atividade'
    },
    'construcao-reforma': {
      id: 'construcao-reforma',
      name: 'Construção e Reforma',
      emoji: '🏗️',
      intro: 'A Fazun realiza projetos e acompanhamento técnico de <strong>obras residenciais e comerciais</strong>: projeto arquitetônico, estrutural, hidrossanitário, elétrico, aprovação na Prefeitura e obtenção do Habite-se.<br><br>Obras sem <strong>ART (Anotação de Responsabilidade Técnica)</strong> de engenheiro responsável são ilegais, podem ser embargadas e impossibilitam a regularização futura do imóvel.',
      extraQuestion: 'É uma obra residencial ou comercial? O que deseja fazer? <em>(ex: construir casa, ampliar imóvel, reformar apartamento, construir galpão...)</em>',
      extraLabel: 'Tipo de obra',
      waQuestion: 'Tipo de obra pretendida'
    },
    'projetos-especialidades': {
      id: 'projetos-especialidades',
      name: 'Projetos e Especialidades',
      emoji: '📐',
      intro: 'A Fazun elabora <strong>projetos estruturais, cálculo estrutural, laudos técnicos, projetos em BIM (Building Information Modeling), PPCI</strong> e projetos de instalações hidrossanitárias e elétricas.<br><br>Atendemos obras novas, reformas e adaptações, sempre com emissão de ART e total conformidade técnica e legal.',
      extraQuestion: 'Qual tipo de projeto ou serviço você precisa? <em>(ex: cálculo estrutural, laudo técnico, projeto hidrossanitário, BIM, PPCI, projeto elétrico...)</em>',
      extraLabel: 'Tipo de projeto',
      waQuestion: 'Tipo de projeto/serviço'
    },
    'inspecao-predial-drone': {
      id: 'inspecao-predial-drone',
      name: 'Inspeção Predial com Drone',
      emoji: '🚁',
      intro: 'A <strong>Inspeção Predial com Drone</strong> da Fazun realiza a vistoria técnica de fachadas, telhados, coberturas e estruturas elevadas com precisão e segurança — <strong>sem andaimes, sem interrupção da rotina do prédio</strong>.<br><br>Entregamos um <strong>laudo técnico completo com relatório fotográfico e ART</strong>, atendendo às normas ABNT NBR 16747 e NBR 15575. Ideal para condomínios, galpões industriais, torres e edificações acima de 3 pavimentos.',
      extraQuestion: 'Quantos pavimentos tem a edificação? E o que motivou a inspeção? <em>(ex: 5 andares, infiltração na fachada / 10 andares, vistoria de rotina)</em>',
      extraLabel: 'Pavimentos e motivo',
      waQuestion: 'Pavimentos e motivo da inspeção'
    }
  };

  // Detecta o serviço atual pelo pathname
  function detectPageService() {
    var path = window.location.pathname;
    for (var id in SERVICES) {
      if (path.indexOf(id) !== -1) return id;
    }
    return null;
  }

  // ============================================================
  // ESTADO
  // ============================================================
  var state = {
    step: 'init',
    selectedService: null,
    address: '',
    extraInfo: '',
    pageService: detectPageService(),
    opened: false
  };

  // ============================================================
  // UTILS
  // ============================================================
  function $(id) { return document.getElementById(id); }

  function scrollToBottom() {
    var msgs = $('zuno-messages');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  }

  function addBotMessage(html, callback) {
    var msgs = $('zuno-messages');
    var div = document.createElement('div');
    div.className = 'zuno-msg zuno-bot';
    div.innerHTML = '<div class="zuno-avatar">Z</div><div class="zuno-bubble">' + html + '</div>';
    msgs.appendChild(div);
    scrollToBottom();
    if (callback) callback();
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
    var div = document.createElement('div');
    div.className = 'zuno-msg zuno-bot zuno-typing-msg';
    div.innerHTML = '<div class="zuno-avatar">Z</div><div class="zuno-bubble"><span class="zuno-typing"><span></span><span></span><span></span></span></div>';
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

  function disableServiceButtons() {
    var btns = document.querySelectorAll('.zuno-service-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
      btns[i].style.opacity = '0.5';
      btns[i].style.cursor = 'default';
    }
  }

  // ============================================================
  // WHATSAPP
  // ============================================================
  function openWhatsApp() {
    var svc = SERVICES[state.selectedService];
    var msg = 'Olá! Vim pelo site da Fazun e gostaria de um atendimento sobre *' + svc.name + '*.\n\n'
      + '📍 Endereço: ' + state.address + '\n'
      + '📋 ' + svc.waQuestion + ': ' + state.extraInfo + '\n\n'
      + 'Gostaria de receber uma proposta personalizada.';
    var encoded = encodeURIComponent(msg);
    window.open('https://api.whatsapp.com/send/?phone=5511971123379&text=' + encoded + '&type=phone_number&app_absent=0', '_blank');
  }

  // ============================================================
  // FLUXO DO BOT
  // ============================================================
  function startWithService(serviceId) {
    state.selectedService = serviceId;
    state.step = 'address';
    var svc = SERVICES[serviceId];

    showTyping(900, function () {
      addBotMessage(svc.intro);
      showTyping(700, function () {
        addBotMessage('Para avaliarmos seu caso com precisão, preciso de algumas informações.<br><br>📍 <strong>Qual o endereço completo do imóvel ou estabelecimento?</strong> <em>(logradouro, número, bairro, cidade)</em>');
        showInput('Ex: Rua das Flores, 123, Centro, São Paulo - SP');
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
      addBotMessage(
        'Perfeito! 🎉 Já tenho tudo o que preciso para o Eng. Jéferson avaliar seu caso e montar uma <strong>proposta personalizada</strong>.<br><br>' +
        'Clique abaixo para ser atendido agora pelo WhatsApp:'
      );

      var msgs = $('zuno-messages');
      var div = document.createElement('div');
      div.className = 'zuno-msg zuno-bot';
      div.innerHTML = '<div class="zuno-avatar">Z</div><div class="zuno-bubble" style="padding:8px;max-width:90%"><button class="zuno-wa-btn" id="zuno-wa-final">💬 Falar com o Engenheiro</button></div>';
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

    if (state.step === 'address') {
      handleAddress(text);
    } else if (state.step === 'extra') {
      handleExtra(text);
    }
  }

  // ============================================================
  // INICIALIZAÇÃO DO CHAT
  // ============================================================
  function initChat() {
    state.step = 'init';
    state.selectedService = null;
    state.address = '';
    state.extraInfo = '';

    var msgs = $('zuno-messages');
    msgs.innerHTML = '';
    hideInput();

    var pageService = state.pageService;

    showTyping(500, function () {
      addBotMessage(
        'Olá! 👋 Sou o <strong>Zuno</strong>, assistente virtual da <strong>Fazun Engenharia</strong>.<br><br>' +
        'Posso te explicar nossos serviços e coletar as informações para o <strong>Eng. Jéferson Santana (CREA-SP)</strong> te dar um atendimento personalizado e uma proposta sob medida.'
      );

      showTyping(600, function () {
        if (pageService && SERVICES[pageService]) {
          // Página de serviço específico
          var svc = SERVICES[pageService];
          addBotMessage('Você está na página de <strong>' + svc.name + '</strong>. Clique abaixo para iniciarmos:');

          var msgs2 = $('zuno-messages');
          var div = document.createElement('div');
          div.className = 'zuno-msg zuno-bot';
          div.innerHTML = '<div class="zuno-avatar">Z</div><div class="zuno-bubble zuno-services"><button class="zuno-service-btn" data-service="' + svc.id + '">' + svc.emoji + ' Quero saber sobre ' + svc.name + '</button></div>';
          msgs2.appendChild(div);
          scrollToBottom();
          state.step = 'welcome';
        } else {
          // Página principal — todos os serviços
          addBotMessage('Sobre qual serviço você gostaria de saber mais?');

          var allBtns = Object.values(SERVICES).map(function (s) {
            return '<button class="zuno-service-btn" data-service="' + s.id + '">' + s.emoji + ' ' + s.name + '</button>';
          }).join('');

          var msgs3 = $('zuno-messages');
          var div2 = document.createElement('div');
          div2.className = 'zuno-msg zuno-bot';
          div2.innerHTML = '<div class="zuno-avatar">Z</div><div class="zuno-bubble zuno-services">' + allBtns + '</div>';
          msgs3.appendChild(div2);
          scrollToBottom();
          state.step = 'welcome';
        }
      });
    });
  }

  // ============================================================
  // CSS
  // ============================================================
  function injectCSS() {
    var style = document.createElement('style');
    style.textContent = [
      '#zuno-fab{position:fixed;bottom:85px;right:18px;width:54px;height:54px;background:linear-gradient(135deg,#0a2d5a 0%,#1a4a8a 100%);border-radius:50%;cursor:pointer;z-index:99998;box-shadow:0 4px 16px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;border:none;outline:none;transition:transform 0.2s,box-shadow 0.2s}',
      '#zuno-fab:hover{transform:scale(1.08);box-shadow:0 6px 22px rgba(0,0,0,0.45)}',
      '#zuno-fab svg{width:26px;height:26px}',
      '#zuno-badge{position:absolute;top:-4px;right:-4px;width:18px;height:18px;background:#e63946;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:bold;color:#fff;font-family:Arial,sans-serif;pointer-events:none}',
      '#zuno-panel{position:fixed;bottom:150px;right:18px;width:340px;max-width:calc(100vw - 36px);height:500px;max-height:calc(100vh - 170px);background:#fff;border-radius:18px;box-shadow:0 10px 40px rgba(0,0,0,0.22);z-index:99999;display:none;flex-direction:column;overflow:hidden;font-family:Arial,sans-serif;font-size:14px;line-height:1.5}',
      '#zuno-panel.zuno-open{display:flex}',
      '#zuno-header{background:linear-gradient(135deg,#0a2d5a 0%,#1a4a8a 100%);color:#fff;padding:13px 14px;display:flex;align-items:center;gap:10px;flex-shrink:0}',
      '#zuno-hav{width:38px;height:38px;background:rgba(255,255,255,0.18);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:bold;flex-shrink:0}',
      '#zuno-hinfo{flex:1;min-width:0}',
      '#zuno-hname{font-weight:bold;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '#zuno-hstatus{font-size:11px;opacity:.82;display:flex;align-items:center;gap:4px}',
      '#zuno-hstatus::before{content:"";width:7px;height:7px;background:#4dff91;border-radius:50%;display:inline-block}',
      '#zuno-xbtn{cursor:pointer;opacity:.7;background:none;border:none;color:#fff;font-size:20px;padding:0;line-height:1;flex-shrink:0}',
      '#zuno-xbtn:hover{opacity:1}',
      '#zuno-messages{flex:1;overflow-y:auto;padding:12px 10px;display:flex;flex-direction:column;gap:8px;background:#f4f6fb}',
      '#zuno-messages::-webkit-scrollbar{width:4px}',
      '#zuno-messages::-webkit-scrollbar-thumb{background:#ccc;border-radius:2px}',
      '.zuno-msg{display:flex;align-items:flex-end;gap:6px;animation:zunofade .2s ease}',
      '@keyframes zunofade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}',
      '.zuno-user{flex-direction:row-reverse}',
      '.zuno-avatar{width:28px;height:28px;background:#0a2d5a;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;flex-shrink:0;align-self:flex-end}',
      '.zuno-bubble{background:#fff;border-radius:12px 12px 12px 2px;padding:9px 11px;max-width:82%;box-shadow:0 1px 4px rgba(0,0,0,0.09);color:#222;word-wrap:break-word}',
      '.zuno-user .zuno-bubble{background:#0a2d5a;color:#fff;border-radius:12px 12px 2px 12px}',
      '.zuno-bubble.zuno-services{display:flex;flex-direction:column;gap:6px;padding:8px;max-width:96%;background:transparent;box-shadow:none}',
      '.zuno-service-btn{background:#fff;border:1.5px solid #0a2d5a;color:#0a2d5a;border-radius:9px;padding:9px 12px;cursor:pointer;font-size:13px;font-weight:600;text-align:left;transition:background .15s,color .15s;font-family:Arial,sans-serif;line-height:1.3}',
      '.zuno-service-btn:hover:not(:disabled){background:#0a2d5a;color:#fff}',
      '.zuno-service-btn:disabled{cursor:default}',
      '.zuno-wa-btn{background:#25d366;color:#fff;border:none;border-radius:9px;padding:12px 16px;cursor:pointer;font-size:14px;font-weight:bold;width:100%;transition:background .15s;font-family:Arial,sans-serif}',
      '.zuno-wa-btn:hover{background:#1aab54}',
      '.zuno-typing span{display:inline-block;width:6px;height:6px;background:#aaa;border-radius:50%;margin:0 2px;animation:zunobounce 1.1s infinite}',
      '.zuno-typing span:nth-child(2){animation-delay:.2s}',
      '.zuno-typing span:nth-child(3){animation-delay:.4s}',
      '@keyframes zunobounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}',
      '#zuno-input-area{display:none;padding:9px 10px;background:#fff;border-top:1px solid #eee;gap:7px;align-items:center;flex-shrink:0}',
      '#zuno-text-input{flex:1;border:1.5px solid #ddd;border-radius:20px;padding:8px 14px;font-size:13px;outline:none;font-family:Arial,sans-serif;transition:border-color .15s;min-width:0}',
      '#zuno-text-input:focus{border-color:#0a2d5a}',
      '#zuno-send-btn{width:36px;height:36px;background:#0a2d5a;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s}',
      '#zuno-send-btn:hover{background:#1a4a8a}',
      '#zuno-send-btn svg{width:15px;height:15px}',
      '#zuno-footer{text-align:center;padding:6px 8px;background:#fff;border-top:1px solid #f0f0f0;flex-shrink:0}',
      '#zuno-footer button{background:none;border:none;color:#aaa;font-size:11px;cursor:pointer;font-family:Arial,sans-serif}',
      '#zuno-footer button:hover{color:#0a2d5a}'
    ].join('');
    document.head.appendChild(style);
  }

  // ============================================================
  // CRIA O WIDGET
  // ============================================================
  function createWidget() {
    injectCSS();

    var container = document.createElement('div');
    container.innerHTML =
      '<button id="zuno-fab" title="Falar com o Zuno — Fazun Engenharia">' +
        '<div id="zuno-badge">1</div>' +
        '<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z"/></svg>' +
      '</button>' +
      '<div id="zuno-panel">' +
        '<div id="zuno-header">' +
          '<div id="zuno-hav">Z</div>' +
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

    // Abrir/fechar painel
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

    // Envio de mensagem
    $('zuno-send-btn').addEventListener('click', handleUserInput);
    $('zuno-text-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleUserInput();
    });

    // Clique nos botões de serviço (delegação)
    $('zuno-messages').addEventListener('click', function (e) {
      var btn = e.target;
      while (btn && btn !== this) {
        if (btn.classList && btn.classList.contains('zuno-service-btn')) break;
        btn = btn.parentNode;
      }
      if (btn && btn.classList && btn.classList.contains('zuno-service-btn') && !btn.disabled && state.step === 'welcome') {
        disableServiceButtons();
        var serviceId = btn.getAttribute('data-service');
        addUserMessage(SERVICES[serviceId].emoji + ' ' + SERVICES[serviceId].name);
        startWithService(serviceId);
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
