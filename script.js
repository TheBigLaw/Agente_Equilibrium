/* ══════════════════════════════════════════
   NeuroEquilíbrio — Agente Clínico
   app.js  —  versão corrigida
   ══════════════════════════════════════════ */

/* ─── SYSTEM PROMPT ─────────────────────────────────────────────────────────── */
const SYSTEM = `Você é o Dr. NeuroEquilíbrio, um neuropsicólogo clínico sênior com 28 anos de experiência e especialização avançada em avaliação neuropsicológica pediátrica, escolar e de adultos. Você foi treinado na bateria completa utilizada pela clínica NeuroEquilíbrio e domina profundamente todos os instrumentos listados abaixo, suas normas brasileiras, suas regras de pontuação e, principalmente, como eles se interconectam clinicamente para formar perfis diagnósticos.

══════════════════════════════════════════════════
DOMÍNIO COMPLETO DOS INSTRUMENTOS — BATERIA NEUROEQUILÍBRIO
══════════════════════════════════════════════════

━━━ INTELIGÊNCIA GERAL ━━━
• WAIS-III (16-89a): QI Verbal + QI Execução + QI Total. PP média=10 DP=3; QI média=100 DP=15. Scatter VIQ-PIQ >15 = significativo.
• WISC-IV (6-16a): 4 Índices — ICV, IRP, IMO, IVP. Perfis: TDAH (IVP/IMO baixos), Dislexia (IVP baixo, ICV preservado), TEA (IRP elevado, ICV rebaixado).
• WMT-2 Matrizes de Viena (7-80+a): Inteligência geral não-verbal. Ideal para TEA, DI, limitações linguísticas.
• CPM-Raven (5-11a): Percentis A/B/C. PC<25 = limitação não-verbal.
• SON-R 2½-7 e SON-R 6-40: QI Não-Verbal. Fundamental para TEA e comprometimentos de linguagem.
• BETA-III (14-88a): QI Não-Verbal para adultos com baixa escolaridade.
• Escala Columbia (3-9a 11m): Maturidade mental por classificação de figuras.
• Escala BINAUT (3-7a): Maturidade cognitiva e prontidão escolar.
• TIAH/S (9-15a): Inteligência + habilidades sociais integradas.

━━━ DESENVOLVIMENTO INFANTIL ━━━
• Bayley-III (1-42 meses): Cognitiva, Linguagem (Receptiva+Expressiva), Motor (Grosso+Fino), Socioemocional, Comportamento Adaptativo. Média=100 DP=15. Atraso: ≥2 DP.
• IDADI (4-72 meses): 7 áreas — Motora Grossa, Fina, Ling. Receptiva, Expressiva, Pessoal-Social, Cognitiva, Autocuidado.
• Vineland-3 (0-90a): Comunicação, Vida Diária, Socialização, Habilidades Motoras. ICAG médio=100. Mede funcionamento real vs capacidade (WISC/WAIS).
• EFA (6-15a): Funcionamento adaptativo escolar.

━━━ LEITURA / ESCRITA / LINGUAGEM ━━━
• ANELE Vol.1 PCFO (3-9a): Consciência Fonológica — Rima, Aliteração, Síntese, Segmentação, Exclusão, Transposição. PC<25 = déficit fonológico = risco de dislexia.
• ANELE Vol.2 T-NAR (6-14a): Nomeação Automática Rápida. Lentidão + déficit fonológico = duplo-déficit de dislexia.
• ANELE Vol.3 TEPPE (1º-9º): Escrita de palavras/pseudopalavras. Análise de tipos de erros.
• ANELE Vol.4 TLPP (6-85a): Leitura cronometrada. Dislexia fonológica: pseudopalavras >> piores que palavras.
• PROLEC Fund. (2º-5º): Reconhecimento de Letras, Processos Léxicos, Sintáticos, Semânticos.
• PROLEC-SE-R (6º-Médio): Velocidade de Leitura, Estruturas Sintáticas, Compreensão.
• TDE-II (1º-9º): Leitura + Escrita + Aritmética. Permite comparação intraindividual.
• PRONUMERO (2º-5º): Senso numérico, operações. Discalculia vs déficit geral.
• TISD (6-11a): Rastreio de dislexia em 6 dimensões.
CONVERGÊNCIA DISLEXIA: ANELE1(PC<25) + TLPP lento + TEPPE erros fonológicos + PROLEC déficit léxico + TDE-II leitura baixa/aritmética preservada + TISD positivo + WISC IVP baixo.

━━━ MEMÓRIA ━━━
• RAVLT (6-92a): Curva de aprendizagem T1-T5, interferência proativa/retroativa, retenção T7/T5, reconhecimento. Demência→perda severa T7+reconhecimento comprometido. TDAH→curva variável. Depressão→curva plana.
• TEPIC-M-2 (15-92a): Memória Visual imediata, tardia e reconhecimento. Dissociação RAVLT/TEPIC = lateralidade.
• TIME-R (3-6a 11m): Memória de curto prazo pré-escolar.

━━━ ATENÇÃO ━━━
• BPA-2 (6-94a): Atenção Sustentada, Dividida, Alternada, Concentrada. TDAH: AS e AD rebaixadas > AA.
• TAVIS-4 (6-17a): Omissões↑=déficit atencional, Comissões↑=impulsividade, Variabilidade↑=instabilidade (TDAH).
• D2-R (9-60a): BZO, E%>10%=impulsividade, IC.
• TEACO/TEADI/TEALT (18-72a): Atenção Concentrada, Dividida e Alternada em adultos.

━━━ FUNÇÕES EXECUTIVAS ━━━
• FDT Cinco Dígitos (6-90a): Leitura→Contagem→Escolha→Alternância. Inibição = Contagem-Leitura. Alternância = custo de flexibilidade.
• Torre de Londres (10-59a): Planejamento prospectivo. Impulsividade = início rápido + muitos movimentos extras.
• BDEFS Barkley (18-70a): 5 domínios executivos. T>65 = clinicamente significativo.

━━━ TEA / AUTISMO ━━━
• M-CHAT (16-30m): ≥3 falhas (triagem) ou ≥2 itens críticos → encaminhamento. Itens críticos: apontar, resposta ao nome, contato visual, interesse em outras crianças.
• PROTEA-R-NV (2-5a): Avaliação não-verbal de TEA pré-escolar.
• ADOS-2 M2/M3/M4: Gold standard. Afeto Social + CRR. Autismo≥7, Espectro≥4.
• SRS-2 (2,5a-adulto): T<60=normal, 60-65=leve, 66-75=moderado, >75=grave.
• ATA (2-18a): Rastreio de traços autísticos.
• ASSQ (7-16a): Asperger/TEA alto funcionamento. Corte ≥19 pais / ≥22 professores.
• AQ Adolescente (12-15a): Corte >32.
• RAADS-R-BR Screen (16+a): Corte ≥65 = positivo. Subescalas: Comportamento Social, Linguagem, Interesses Circunscritos, Sensoriomotor.
• CAT-Q (16+a): Camuflagem — Assimilação, Compensação, Mascaramento. Fundamental no diagnóstico feminino tardio.
• QA16+: Rastreio adicional adultos.
• Cambridge EQ/SQ: EQ baixo + SQ alto = perfil TEA.
• ABC-ICA (3-14a): Comportamentos externalizantes e internalizantes.
CONVERGÊNCIA TEA: ADOS-2 positivo + rastreio positivo (SRS/ATA/ASSQ/RAADS) + Vineland comprometida + perfil cognitivo compatível + Perfil Sensorial.

━━━ TDAH ━━━
• SNAP-IV (1-17a): Desatenção≥2.0 ou H-I≥2.0 por informante. Pais vs professores: discordância = situacional.
• ETDAH-PAIS (2-17a): T>65 = significativo.
• ETDAH-AD (12-87a): Autoavaliação. Comparar com heteroavaliação.
• ASQ (7-12a): Contexto escolar.
• ASRS-18 (18+a): Parte A ≥4 positivos = alta sensibilidade.
• BAARS-IV Barkley (18+a): TDAH Atual + Infância (retrospectivo). T>65.
CONVERGÊNCIA TDAH ESCOLAR: SNAP-IV positivo + WISC IMO/IVP baixos + BPA-2 rebaixada + TAVIS-4 + FDT + RAVLT curva variável.
CONVERGÊNCIA TDAH ADULTO: ASRS-18 + BAARS-IV + BDEFS + WAIS-III scatter + D2-R + TEACO/TEADI + RAVLT.

━━━ EMOCIONAL / HUMOR / ANSIEDADE ━━━
• BAI (17-80a): Mínima 0-7, Leve 8-15, Moderada 16-25, Grave 26-63.
• BDI-II (13-80a): Mínima 0-13, Leve 14-19, Moderada 20-28, Grave 29-63.
• SCARED Auto/Hetero (7-18a): Pânico, Ansiedade Generalizada, Separação, Fobia Social, Escola Recusa.
• EBADEP-IJ (7-18a) e EBADEP-A: Depressão validada para população brasileira.
• HUMOR-IJ (8-19a) e HUMOR-U (18-29a): Avaliação dimensional do humor.

━━━ PERSONALIDADE ━━━
• BFP (16+a): Big Five — Neuroticismo, Extroversão, Socialização, Realização, Abertura.
• EPQ-IJ (10-16a): Psicoticismo, Extroversão, Neuroticismo, Mentira.
• PFISTER (18-66a): Projetivo por escolha de cores.
• QCP/PBQ (15-94a): Crenças disfuncionais centrais. Fundamental em planejamento TCC.

━━━ PROCESSAMENTO SENSORIAL ━━━
• Perfil Sensorial 2 (0-adulto): Evitação, Sensível, Observador, Buscador × 8 sistemas sensoriais. Fundamental no TEA, TDAH, ansiedade sensorial.

━━━ HABILIDADES SOCIAIS ━━━
• IHS-2 (16+a): Enfrentamento com Risco, Auto-afirmação, Conversação, Auto-exposição, Auto-controle Agressividade.

══════════════════════════════════════════════════
REGRAS DE PONTUAÇÃO
══════════════════════════════════════════════════
• Pontuações Ponderadas: média=10 DP=3. ≥17=Muito Superior, 15-16=Superior, 13-14=Médio-Alto, 8-12=Médio, 6-7=Médio-Baixo, 4-5=Limítrofe, ≤3=Deficiente.
• QI/Compostos: média=100 DP=15. ≥130=Muito Superior, 120-129=Superior, 110-119=Médio-Superior, 90-109=Médio, 80-89=Médio-Inferior, 70-79=Limítrofe, ≤69=Extremamente Baixo.
• Escores T: média=50 DP=10. T>65=clinicamente significativo, T>70=muito significativo.
• Percentis: <5=Muito Baixo, 5-9=Baixo, 10-25=Médio-Baixo, 26-74=Médio, 75-90=Médio-Alto, 91-95=Alto, >95=Muito Alto.
• Discrepâncias críticas WISC-IV (p<0.05): ICV-IRP>23, ICV-IMO>21, ICV-IVP>22, IRP-IMO>20, IRP-IVP>21, IMO-IVP>20.

══════════════════════════════════════════════════
COMO VOCÊ RESPONDE
══════════════════════════════════════════════════
1. Identifique instrumentos e normalize os dados
2. Analise instrumento por instrumento com interpretação de cada subteste/subescala
3. Analise padrões e convergências entre múltiplos testes
4. Identifique dissociações clínicas relevantes
5. Formule perfil cognitivo-comportamental integrado
6. Apresente hipóteses diagnósticas com CID-11 / DSM-5-TR
7. Elabore anamnese funcional — impacto no cotidiano, escola, trabalho, relações
8. Faça recomendações de intervenção e encaminhamentos

Se receber arquivo PDF ou Word, extraia e analise todos os dados com o mesmo rigor. Seja preciso, ancore sempre nos escores específicos. Nunca generalize — o laudo é sempre individualizado.`;

/* ─── ESTADO GLOBAL ─────────────────────────────────────────────────────────── */
var msgs          = [];
var busy          = false;
var currentPop    = 'todos';
var attachedFiles = [];

/* ─── PDF.JS CONFIG ─────────────────────────────────────────────────────────── */
window.addEventListener('load', function () {
  if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }
});

/* ══════════════════════════════════════════
   SIDEBAR
   ══════════════════════════════════════════ */
function toggleCat(hdr) {
  hdr.classList.toggle('open');
  hdr.nextElementSibling.classList.toggle('open');
}

function setPopulation(pop, btn) {
  currentPop = pop;
  document.querySelectorAll('.pop-btn').forEach(function (b) { b.classList.remove('on'); });
  btn.classList.add('on');
  filterTests(document.getElementById('sbSearch').value);
}

function filterTests(q) {
  var query = q.toLowerCase();
  document.querySelectorAll('.sb-item').forEach(function (item) {
    var name   = item.querySelector('.sb-item-name').textContent.toLowerCase();
    var sub    = item.querySelector('.sb-item-sub').textContent.toLowerCase();
    var pop    = item.dataset.pop || '';
    var matchQ = !q || name.includes(query) || sub.includes(query);
    var matchP = currentPop === 'todos' || pop.includes(currentPop.substring(0, 3));
    item.style.display = (matchQ && matchP) ? '' : 'none';
  });
}

/* ══════════════════════════════════════════
   TEST TEMPLATES (sidebar)
   ══════════════════════════════════════════ */
var TEST_TEMPLATES = {
  'WAIS-III':
    'Analise os resultados do WAIS-III:\n\nESCALA VERBAL (PP):\n' +
    '• Vocabulário: \n• Semelhanças: \n• Aritmética: \n• Compreensão: \n' +
    '• Dígitos (Direto: | Inverso: ): \n• Sequências Letras-Números: \n\n' +
    'ESCALA DE EXECUÇÃO (PP):\n• Completar Figuras: \n• Cubos: \n• Raciocínio Matricial: \n' +
    '• Arranjo de Figuras: \n• Código: \n\nÍNDICES:\n• QI Verbal: \n• QI Execução: \n• QI Total: \n\n' +
    'Paciente: Idade: | Escolaridade: | Motivo: ',

  'WISC-IV':
    'Analise os resultados do WISC-IV:\n\nSUBTESTES (PP):\n' +
    '• Semelhanças: \n• Vocabulário: \n• Compreensão: \n• Cubos: \n' +
    '• Conceitos Figurativos: \n• Raciocínio com Matrizes: \n' +
    '• Dígitos (Direto: | Inverso: ): \n• Sequência Letras-Números: \n' +
    '• Aritmética: \n• Código: \n• Procurar Símbolos: \n\n' +
    'ÍNDICES:\n• ICV: \n• IRP: \n• IMO: \n• IVP: \n• QIT: \n\n' +
    'Paciente: Idade: anos meses | Série: | Motivo: ',

  'RAVLT':
    'Analise o perfil de memória RAVLT:\n\nAPRENDIZAGEM Lista A:\n' +
    '• T1: /15 | T2: /15 | T3: /15 | T4: /15 | T5: /15\n' +
    '• Total T1-T5: /75\n\nINTERFERÊNCIA:\n• Lista B: /15\n• T6 pós-interferência: /15\n\n' +
    'MEMÓRIA TARDIA:\n• T7 (30 min): /15 | Retenção T7/T5: %\n\n' +
    'RECONHECIMENTO:\n• Acertos: /30 | Falsos Alarmes: | Discriminação: \n\n' +
    'Paciente: Idade: | Escolaridade: | Motivo: ',

  'BPA-2':
    'Analise os resultados da BPA-2:\n\nSUBTESTES (Escore Padrão | Percentil | Classificação):\n' +
    '• Atenção Concentrada: | | \n• Atenção Dividida: | | \n' +
    '• Atenção Alternada: | | \n• Atenção Sustentada: | | \n\n' +
    'ESCORE GLOBAL:\n• Atenção Geral: | | \n\nPaciente: Idade: | Queixas: ',

  'ANELE1':
    'Analise os resultados do ANELE Vol.1 — PCFO:\n\nSUBTESTES (bruto):\n' +
    '• Julgamento de Rima: / | Produção de Rima: /\n' +
    '• Julgamento de Aliteração: /\n• Síntese Silábica: / | Síntese Fonêmica: /\n' +
    '• Segmentação Silábica: / | Segmentação Fonêmica: /\n' +
    '• Exclusão Silábica: / | Exclusão Fonêmica: /\n' +
    '• Transposição Silábica: / | Transposição Fonêmica: /\n\n' +
    'TOTAL: / | Percentil: | Classificação: \n\nPaciente: Idade: | Série: | Queixas: ',

  'TDE-II':
    'Analise os resultados do TDE-II:\n\nSUBTESTES (Bruto | EP | Percentil | Classificação):\n' +
    '• Leitura: / | | | \n• Escrita: / | | | \n  Tipos de erros: \n• Aritmética: / | | | \n\n' +
    'Paciente: Série: | Idade: | Queixas: ',

  'SNAP-IV':
    'Analise os resultados do SNAP-IV:\n\nPAIS:\n' +
    '• Desatenção (média): /3.0\n• Hiper-Impulsividade (média): /3.0\n• TOD (média): /3.0\n\n' +
    'PROFESSORES:\n• Desatenção (média): /3.0\n• Hiper-Impulsividade (média): /3.0\n• TOD (média): /3.0\n\n' +
    'Paciente: Idade: | Série: | Queixas: ',

  'VINELAND-3':
    'Analise os resultados do Vineland-3:\n\nDOMÍNIOS (EP, média=100):\n' +
    '• Comunicação: (Receptiva: | Expressiva: | Escrita: )\n' +
    '• Vida Diária: (Pessoal: | Doméstica: | Comunitária: )\n' +
    '• Socialização: (Relações Interp.: | Lazer: | Regras Sociais: )\n' +
    '• Habilidades Motoras: (Grossa: | Fina: )\n\nICAG: \n\nPaciente: Idade: | Informante: | Motivo: ',

  'SRS2':
    'Analise os resultados do SRS-2:\n\nVERSÃO: □ Pré-Escolar □ Escolar □ Adulto | INFORMANTE: □ Pais □ Prof □ Auto\n\n' +
    'ESCORES T:\n• Consciência Social: \n• Cognição Social: \n• Comunicação Social: \n' +
    '• Motivação Social: \n• Maneirismos (RRB): \n• TOTAL SRS: \n\nPaciente: Idade: | Queixas: ',

  'RAADS':
    'Analise os resultados do RAADS-R-BR Screen:\n\nTOTAL: /240 (corte ≥65)\n\nSUBESCALAS:\n' +
    '• Comportamento Social: /\n• Linguagem: /\n• Interesses Circunscritos: /\n• Sensório-Motor: /\n\n' +
    'Paciente: Idade: | Sexo: | Queixas: ',

  'BAI':
    'Analise os resultados do BAI + BDI-II:\n\nBAI:\n• Total: /63\n' +
    '• Classificação: □ Mínima(0-7) □ Leve(8-15) □ Moderada(16-25) □ Grave(26-63)\n' +
    '• Sintomas mais endossados: \n\nBDI-II:\n• Total: /63\n' +
    '• Classificação: □ Mínima(0-13) □ Leve(14-19) □ Moderada(20-28) □ Grave(29-63)\n' +
    '• Sintomas mais endossados: \n• Item 9 (ideação suicida): \n\nHistórico: | Medicações: ',

  'FDT':
    'Analise os resultados do FDT (Cinco Dígitos):\n\nTEMPOS (segundos | erros | percentil):\n' +
    '• Tarefa 1 Leitura: seg | erros | P=\n• Tarefa 2 Contagem: seg | erros | P=\n' +
    '• Tarefa 3 Escolha (Inibição): seg | erros | P=\n• Tarefa 4 Alternância: seg | erros | P=\n\n' +
    'Paciente: Idade: | Escolaridade: | Queixas executivas: ',

  'BAARS-IV':
    'Analise o protocolo TDAH Adulto — Barkley:\n\nBAARSIV ATUAL:\n' +
    '• Desatenção: /27 | T=\n• Hiper-Impulsividade: /27 | T=\n\n' +
    'BAARSIV INFÂNCIA (retrospectivo):\n• Desatenção: | T=\n• H-I: | T=\n\n' +
    'BDEFS (Escore T):\n• Inibição: | Auto-Organização: | Autorregulação Emocional: | Auto-Motivação: | Planejamento: \n\n' +
    'ASRS-18 Parte A: /6 positivos\n\nPaciente: Idade: | Escolaridade: | Profissão: ',
};

function pickTest(el) {
  document.querySelectorAll('.sb-item').forEach(function (i) { i.classList.remove('sel'); });
  el.classList.add('sel');
  var test = el.dataset.test;
  var tpl  = TEST_TEMPLATES[test];
  var inp  = document.getElementById('inp');
  if (tpl) {
    inp.value = tpl;
  } else {
    var name = el.querySelector('.sb-item-name').textContent;
    var sub  = el.querySelector('.sb-item-sub').textContent;
    inp.value = 'Analise os resultados do ' + name + ' (' + sub + '):\n\nForneça os escores ou pontuações disponíveis:\n\n\nPaciente: Idade: | ';
  }
  autoResize(inp);
  inp.focus();
}

/* ══════════════════════════════════════════
   CLINICAL TEMPLATES (modal)
   ══════════════════════════════════════════ */
var TPLS = {
  tdah_escolar: 'Analise o perfil neuropsicológico completo para TDAH Escolar:\n\nWISC-IV — Criança, 9 anos, 3º ano EF:\n• ICV: 107 | IRP: 103 | IMO: 76 | IVP: 72 | QIT: 88\n• Semelhanças: 11 | Vocabulário: 12 | Compreensão: 10\n• Cubos: 11 | Conceitos Fig.: 10 | Matrizes: 10\n• Dígitos (Direto=9/Inverso=4) PP=7 | Seq.Letras-Nº PP=6 | Aritmética PP=7\n• Código PP=6 | Procurar Símbolos PP=7\n\nSNAP-IV:\n• Desatenção Pais: 2.6/3.0 | Professores: 2.8/3.0\n• H-I Pais: 2.2/3.0 | Professores: 1.8/3.0\n\nBPA-2:\n• Concentrada P=12 | Dividida P=10 | Alternada P=20 | Sustentada P=8\n\nTAVIS-4:\n• Omissões: +2,1 DP | Comissões: +1,8 DP | Variabilidade RT: +2,0 DP\n\nFDT:\n• Leitura: 28seg (P=55) | Contagem: 48seg (P=35) | Escolha: 82seg (P=20) | Alternância: 115seg (P=12)\n\nETDAH-PAIS: Desatenção T=72 | H-I T=65\n\nSexo: Masculino | Queixas: não termina tarefas, perde materiais, agitação em sala',

  tea_infantil: 'Analise o perfil diagnóstico TEA Infantil:\n\nCRIANÇA: 4 anos 2 meses, sexo feminino\n\nM-CHAT-R/F: 7/20 falhas — Apontar protodeclarativo, Resposta ao nome, Contato visual, Interesse em outras crianças\n\nSON-R 2½-7:\n• Categorias PP=7 | Analogias PP=5 | Mosaicos PP=8 | Situações PP=4 | QI Total: 82\n\nADOS-2 Módulo 2:\n• Afeto Social (AS): 13 | CRR: 4 | Total: 17 → Autismo\n\nSRS-2 Pré-Escolar (mãe): Total SRS T=82 → Grave\n\nVINELAND-3: Comunicação 68 | HVD 72 | Socialização 61 | Motor 85 | ICAG 68\n\nPERFIL SENSORIAL 2: Evitação +2,8 DP | Sensível +2,2 DP | Observador +1,5 DP\n\nQueixas: atraso de linguagem, não aponta, enfileira objetos, birras intensas a mudanças, hipersensibilidade auditiva',

  dislexia: 'Analise a bateria de dislexia:\n\nCRIANÇA: 8 anos 3 meses, 3º ano EF, sexo masculino\n\nWISC-IV: ICV 110 | IRP 108 | IMO 88 | IVP 72 | QIT 97\n• Vocabulário 13 | Semelhanças 12 | Código 6 | Procurar Símbolos 7\n\nANELE Vol.1 PCFO: Total P=8 — déficit em síntese e exclusão fonêmica\n\nANELE Vol.2 T-NAR: Letras 78seg (P=8) | Números 71seg (P=12) | Total P=10\n\nANELE Vol.4 TLPP: Regulares 82% | Irregulares 68% | Pseudopalavras 41% | +2,3 DP lento\n\nANELE Vol.3 TEPPE: Pseudopalavras 35% | Erros: omissão de fonemas, trocas surda/sonora\n\nPROLEC: Leitura Palavras P=10 | Pseudopalavras P=5\n\nTDE-II: Leitura P=8 | Escrita P=10 | Aritmética P=48\n\nTISD: Positivo 5/6 dimensões | BPA-2 Concentrada P=42 (preservada)\n\nQueixas: lê devagar com muitos erros, escrita com trocas, evita leitura em voz alta, bom raciocínio oral',

  tea_adulto: 'Analise o perfil TEA adulto com camuflagem:\n\nPACIENTE: Mulher, 34 anos, psicóloga\n\nRAADS-R-BR Screen: Total 142/240 → FORTEMENTE POSITIVO\n• Comportamento Social 48 | Interesses Circunscritos 36 | Sensório-Motor 50\n\nCAT-Q: Compensação 72/84 | Mascaramento 68/77 | Assimilação 55/77 | Total 195/240\n\nADOS-2 Módulo 4: AS=9 | CRR=2 | Total=11 → Autismo\n\nSRS-2 Adulto (auto): Total T=68 (Moderado)\n\nCambridge: EQ=22/80 (P<10) | SQ=71/80 (P>95)\n\nIHS-2: Total P=28 (Médio-Baixo)\n\nWAIS-III: QIV=118, QIE=108, QIT=115 | Vocab PP=17, Semes PP=16, Compreen PP=11, Dígitos PP=8\n\nPERFIL SENSORIAL 2: Evitação +3,1 DP | Sensível +2,8 DP\n\nQueixas: esgotamento social, dificuldade de leitura de contexto não-verbal, hiperfoco, hipersensibilidade, burnout recorrente',

  tdah_adulto: 'Analise o protocolo TDAH adulto completo:\n\nPACIENTE: Homem, 41 anos, engenheiro de TI\n\nWAIS-III: QIV=112, QIE=98, QIT=106\n• Dígitos PP=6 | Seq.Letras-Nº PP=7 | Vocabulário PP=14 | Código PP=7\n\nASRS-18 (OMS): Parte A: 5/6 positivos | Total: 52/72\n\nBAARSIV: Desatenção T=74 | H-I T=62 | Combinado T=71\nInfância: Desatenção T=68 | H-I T=66\n\nBDEFS: Inibição T=72 | Auto-Organização T=78 | Autorregulação T=65 | Auto-Motivação T=74 | Planejamento T=80\n\nBPA-2: Concentrada P=18 | Dividida P=14 | Alternada P=22 | Sustentada P=10\n\nD2-R: BZO P=20 | E%=12,4% | IC P=15\n\nRAVLT: T1=5 T2=8 T3=9 T4=10 T5=11 | T6=6 | T7=5 | Reconhecimento 22/30 (FA=5)\n\nQueixas: procrastinação severa, não termina projetos, hiperfoco, impulsividade verbal',

  preescolar_global: 'Analise a avaliação global pré-escolar:\n\nCRIANÇA: Menino, 3 anos 8 meses\n\nBAYLEY-III: Cognitiva EC=78 (P=7) | Linguagem EC=74 (P=4) | Motor EC=82 (P=12)\n• Receptiva Escore=8 | Expressiva Escore=6\n\nIDADI: Ling. Receptiva 55% (equiv. 2a6m) | Expressiva 48% (equiv. 2a2m)\nMotora Grossa 70% | Cognitivo 68%\n\nVINELAND-3: Comunicação 72 | HVD 78 | Socialização 70 | Motor 85 | ICAG 74\n\nPERFIL SENSORIAL 2: Buscador +2,2 DP | Evitação +1,8 DP\n\nTIME-R: Memória Verbal CP P=15 | Memória Visual CP P=22\n\nQueixas: atraso na fala, birras intensas, movimentos estereotipados, histórico familiar de TEA',

  depressao_ansiedade: 'Analise o perfil emocional adulto integrado:\n\nPACIENTE: Mulher, 28 anos, estudante universitária\n\nWAIS-III: QIV=122, QIE=115, QIT=120 | Dígitos PP=9 | Vocabulário PP=17\n\nBDI-II: Total=24 (Moderada) | Item 9 (ideação): 1 passivo\nSintomas: Tristeza, Perda de prazer, Fadiga, Pessimismo, Concentração\n\nBAI: Total=28 (Grave)\nSintomas: Coração acelerado, Tontura, Medo de perder o controle\n\nEBADEP-A: Afeto Negativo elevado | Anedonia moderada | Somatização elevada\n\nBFP: Neuroticismo P=94 | Extroversão P=22 | Realização P=18 | Abertura P=78\n\nQCP/PBQ: Crenças Evitativas elevado | Desamparo muito elevado\n\nRAVLT: Curva plana T1=5→T5=8 | T7=5 | Reconhecimento 27/30\n\nHistórico: 2 episódios depressivos anteriores, perdeu o pai há 1 ano, escitalopram 10mg/dia',

  escolar_global: 'Analise a avaliação neuropsicológica escolar global:\n\nCRIANÇA: Menina, 10 anos 5 meses, 5º ano EF, escola particular\n\nWISC-IV: ICV=98 | IRP=101 | IMO=85 | IVP=88 | QIT=93\n• Semelhanças=10 | Vocabulário=10 | Cubos=10 | Conceitos=11\n• Dígitos(D=8/I=6) PP=8 | Seq.Letras-Nº PP=7 | Código PP=8\n\nTDE-II: Leitura P=42 | Escrita P=30 | Aritmética P=22\n\nBPA-2: Concentrada P=45 | Dividida P=38 | Alternada P=42 | Sustentada P=35\n\nRAVLT: T1=6 T2=9 T3=10 T4=11 T5=12 | T7=9 | Reconhecimento 28/30 (FA=2)\n\nSCARED Auto: Total=32 | Pânico=8 | Ansiedade Generalizada=12 | Fobia Social=7\n\nVINELAND-3: Comunicação 97 | HVD 95 | Socialização 82 | ICAG 91\n\nPERFIL SENSORIAL 2: Evitação +1,2 DP | Sensível +1,8 DP\n\nQueixas: queda de notas, chora antes de provas, dificuldade em matemática, muito perfeccionista',
};

function applyTpl(key) {
  document.getElementById('inp').value = TPLS[key] || '';
  autoResize(document.getElementById('inp'));
  closeModalD();
  document.getElementById('inp').focus();
}

/* ══════════════════════════════════════════
   MODAL
   ══════════════════════════════════════════ */
function openModal()   { document.getElementById('modalBg').classList.add('open'); }
function closeModal(e) { if (e.target === document.getElementById('modalBg')) { closeModalD(); } }
function closeModalD() { document.getElementById('modalBg').classList.remove('open'); }

/* ══════════════════════════════════════════
   QUICK ACTIONS
   ══════════════════════════════════════════ */
function requestLaudo() {
  if (!msgs.length) { alert('Inicie uma análise primeiro'); return; }
  document.getElementById('inp').value = 'Com base nos dados e análise já realizada, por favor gere um LAUDO NEUROPSICOLÓGICO FORMAL completo com as seções: 1. Identificação do Paciente, 2. Motivo da Avaliação, 3. Instrumentos Utilizados, 4. Observações Comportamentais, 5. Resultados por Instrumento (tabela de escores), 6. Análise Integrada dos Resultados, 7. Hipóteses Diagnósticas (CID-11/DSM-5-TR), 8. Conclusão Clínica, 9. Recomendações.';
  autoResize(document.getElementById('inp'));
  send();
}

function requestDiag() {
  if (!msgs.length) { alert('Inicie uma análise primeiro'); return; }
  document.getElementById('inp').value = 'Elabore um DIAGNÓSTICO DIFERENCIAL detalhado. Para cada hipótese: justifique com os dados específicos, indique os critérios DSM-5-TR ou CID-11 atendidos, discuta o que confirma e o que enfraquece essa hipótese. Indique também diagnósticos que devem ser excluídos e por quê.';
  autoResize(document.getElementById('inp'));
  send();
}

function requestAnamnese() {
  if (!msgs.length) { alert('Inicie uma análise primeiro'); return; }
  document.getElementById('inp').value = 'Elabore uma ANAMNESE FUNCIONAL detalhada: 1) Como o perfil se manifesta no cotidiano, 2) Impacto acadêmico/profissional, 3) Impacto nas relações sociais e familiares, 4) Pontos de força para intervenção, 5) Estratégias compensatórias que o paciente provavelmente já desenvolveu, 6) Áreas prioritárias para intervenção.';
  autoResize(document.getElementById('inp'));
  send();
}

/* ══════════════════════════════════════════
   WELCOME / CLEAR
   ══════════════════════════════════════════ */
function setChip(el) {
  var t = el.textContent.replace(/^[^\s]+\s/, '').trim();
  document.getElementById('inp').value = 'Quero analisar o seguinte: ' + t;
  document.getElementById('inp').focus();
}

function clearChat() {
  msgs = [];
  clearAttachments();
  document.getElementById('chat').innerHTML =
    '<div class="welcome" id="welcome">' +
    '<div class="w-orb">🧠</div>' +
    '<h1 class="w-title">Agente Clínico<br><span>NeuroEquilíbrio</span></h1>' +
    '<p class="w-sub">Especializado em todos os instrumentos da bateria NeuroEquilíbrio. Forneça os dados de um ou múltiplos testes e receba análise clínica integrada, diagnóstico diferencial e laudo estruturado.</p>' +
    '<div class="w-badges">' +
    '<div class="w-badge" onclick="setChip(this)">⚡ Perfil TDAH completo</div>' +
    '<div class="w-badge" onclick="setChip(this)">🌈 Avaliação TEA infantil</div>' +
    '<div class="w-badge" onclick="setChip(this)">📖 Bateria de dislexia</div>' +
    '<div class="w-badge" onclick="setChip(this)">🧩 WAIS-III + BPA-2 + RAVLT</div>' +
    '<div class="w-badge" onclick="setChip(this)">👶 Avaliação pré-escolar global</div>' +
    '<div class="w-badge" onclick="setChip(this)">🎭 TEA adulto — RAADS + CAT-Q</div>' +
    '</div></div>';
}

/* ══════════════════════════════════════════
   CHAT RENDERING
   ══════════════════════════════════════════ */
function ts() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function addMsg(role, text) {
  var w = document.getElementById('welcome');
  if (w) { w.remove(); }

  var chat = document.getElementById('chat');
  var d    = document.createElement('div');
  d.className = 'msg ' + role;

  var av  = role === 'user' ? '👤' : '🧠';
  var who = role === 'user' ? 'Você' : 'Dr. NeuroEquilíbrio';

  d.innerHTML =
    '<div class="msg-av">' + av + '</div>' +
    '<div class="msg-body">' +
      '<div class="msg-hdr">' +
        '<span class="msg-who">' + who + '</span>' +
        '<span class="msg-ts">' + ts() + '</span>' +
      '</div>' +
      '<div class="bubble">' + fmt(text) + '</div>' +
    '</div>';

  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
  return d.querySelector('.bubble');
}

function addMsgWithAttachments(role, text, fileNames) {
  var w = document.getElementById('welcome');
  if (w) { w.remove(); }

  var chat   = document.getElementById('chat');
  var d      = document.createElement('div');
  d.className = 'msg ' + role;

  var badges = fileNames.map(function (name) {
    var icon = name.toLowerCase().endsWith('.pdf') ? '📄' : '📝';
    return '<div class="msg-attachment">' + icon + ' ' + name + '</div>';
  }).join('');

  d.innerHTML =
    '<div class="msg-av">👤</div>' +
    '<div class="msg-body">' +
      '<div class="msg-hdr">' +
        '<span class="msg-who">Você</span>' +
        '<span class="msg-ts">' + ts() + '</span>' +
      '</div>' +
      badges +
      (text ? '<div class="bubble">' + fmt(text) + '</div>' : '') +
    '</div>';

  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
}

function showThink() {
  var w = document.getElementById('welcome');
  if (w) { w.remove(); }

  var chat = document.getElementById('chat');
  var d    = document.createElement('div');
  d.className = 'msg ai';
  d.id        = 'think';

  d.innerHTML =
    '<div class="msg-av">🧠</div>' +
    '<div class="msg-body">' +
      '<div class="msg-hdr">' +
        '<span class="msg-who">Dr. NeuroEquilíbrio</span>' +
        '<span class="msg-ts">' + ts() + '</span>' +
      '</div>' +
      '<div class="thinking">' +
        '<div class="dots"><span></span><span></span><span></span></div>' +
        'Analisando dados clínicos e cruzando instrumentos...' +
      '</div>' +
    '</div>';

  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
}

function rmThink() {
  var t = document.getElementById('think');
  if (t) { t.remove(); }
}

/* ══════════════════════════════════════════
   MARKDOWN → HTML
   ══════════════════════════════════════════ */
function fmt(t) {
  return t
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g,     '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,          '<em>$1</em>')
    .replace(/^#### (.+)$/gm,       '<h4>$1</h4>')
    .replace(/^### (.+)$/gm,        '<h3>$1</h3>')
    .replace(/^## (.+)$/gm,         '<h2>$1</h2>')
    .replace(/^---+$/gm,            '<hr>')
    .replace(/^&gt; (.+)$/gm,       '<blockquote>$1</blockquote>')
    .replace(/`(.+?)`/g,            '<code>$1</code>')
    .replace(/^• (.+)$/gm,          '<li>$1</li>')
    .replace(/^- (.+)$/gm,          '<li>$1</li>')
    .replace(/^(\d+)\. (.+)$/gm,    '<li>$2</li>')
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, function (m) { return '<ul>' + m + '</ul>'; })
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g,   '<br>');
}

/* ══════════════════════════════════════════
   INPUT HELPERS
   ══════════════════════════════════════════ */
function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 180) + 'px';
}

/* ══════════════════════════════════════════
   FILE ATTACHMENT
   ══════════════════════════════════════════ */
function formatBytes(bytes) {
  if (bytes < 1024)    { return bytes + ' B'; }
  if (bytes < 1048576) { return (bytes / 1024).toFixed(1) + ' KB'; }
  return (bytes / 1048576).toFixed(1) + ' MB';
}

function getFileIcon(filename) {
  return filename.toLowerCase().endsWith('.pdf') ? '📄' : '📝';
}

function handleFileSelect(event) {
  var files = Array.from(event.target.files);
  event.target.value = '';
  files.forEach(function (file) { processFile(file); });
}

async function processFile(file) {
  var id    = 'f' + Date.now() + Math.floor(Math.random() * 10000);
  var icon  = getFileIcon(file.name);
  var isPDF = file.type === 'application/pdf';
  var name  = file.name.toLowerCase();
  var isDoc = name.endsWith('.docx') || name.endsWith('.doc');

  if (!isPDF && !isDoc) {
    showFileChip(id, file.name, file.size, '⚠️', 'error', 'Formato não suportado (.pdf, .doc, .docx)');
    return;
  }

  showFileChip(id, file.name, file.size, icon, 'loading', 'Lendo arquivo...');

  try {
    var text = '';
    if (isPDF) {
      text = await extractPDF(file);
    } else {
      text = await extractDocx(file);
    }

    if (!text.trim()) { throw new Error('Nenhum texto encontrado no arquivo'); }
    if (text.length > 15000) {
      text = text.substring(0, 15000) + '\n\n[... conteúdo truncado ...]';
    }

    attachedFiles.push({ id: id, name: file.name, size: file.size, text: text });
    updateFileChip(id, file.name, file.size, icon, 'ready');

  } catch (err) {
    updateFileChip(id, file.name, file.size, '⚠️', 'error', err.message);
  }
}

async function extractPDF(file) {
  if (typeof pdfjsLib === 'undefined') { throw new Error('PDF.js não carregado. Recarregue a página.'); }
  var arrayBuffer = await file.arrayBuffer();
  var pdf         = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  var fullText    = '';
  for (var i = 1; i <= pdf.numPages; i++) {
    var page    = await pdf.getPage(i);
    var content = await page.getTextContent();
    var pageText = content.items.map(function (item) { return item.str; }).join(' ');
    fullText += '\n--- Página ' + i + ' ---\n' + pageText;
  }
  return fullText;
}

async function extractDocx(file) {
  if (typeof mammoth === 'undefined') { throw new Error('Mammoth.js não carregado. Recarregue a página.'); }
  var arrayBuffer = await file.arrayBuffer();
  var result      = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
  return result.value;
}

function showFileChip(id, name, size, icon, state, statusMsg) {
  var wrap = document.getElementById('filePreviewWrap');
  var chip = document.createElement('div');
  chip.id = 'fc-' + id;

  if (state === 'loading') {
    chip.className = 'file-chip loading';
    chip.innerHTML = '<span class="file-chip-icon">' + icon + '</span><span style="font-style:italic;font-size:0.72rem">Lendo arquivo...</span>';
  } else if (state === 'error') {
    chip.className = 'file-chip error';
    chip.innerHTML =
      '<span class="file-chip-icon">' + icon + '</span>' +
      '<span class="file-chip-name">' + name + ' — ' + statusMsg + '</span>' +
      '<button class="file-chip-remove" onclick="removeFileChip(\'' + id + '\')" title="Fechar">✕</button>';
  }

  wrap.appendChild(chip);
}

function updateFileChip(id, name, size, icon, state, statusMsg) {
  var chip = document.getElementById('fc-' + id);
  if (!chip) { return; }

  if (state === 'error') {
    chip.className = 'file-chip error';
    chip.innerHTML =
      '<span class="file-chip-icon">⚠️</span>' +
      '<span class="file-chip-name">' + name + ' — ' + statusMsg + '</span>' +
      '<button class="file-chip-remove" onclick="removeFileChip(\'' + id + '\')" title="Fechar">✕</button>';
  } else {
    chip.className = 'file-chip';
    chip.innerHTML =
      '<span class="file-chip-icon">' + icon + '</span>' +
      '<span class="file-chip-name">' + name + '</span>' +
      '<span class="file-chip-size">' + formatBytes(size) + '</span>' +
      '<button class="file-chip-remove" onclick="removeFile(\'' + id + '\')" title="Remover">✕</button>';
  }
}

function removeFile(id) {
  attachedFiles = attachedFiles.filter(function (f) { return f.id !== id; });
  removeFileChip(id);
}

function removeFileChip(id) {
  var chip = document.getElementById('fc-' + id);
  if (chip) { chip.remove(); }
}

function buildFileContext() {
  if (!attachedFiles.length) { return ''; }
  return attachedFiles.map(function (f) {
    return '\n\n════════════════════════════════\nARQUIVO ANEXADO: ' + f.name + '\n════════════════════════════════\n' + f.text;
  }).join('\n');
}

function clearAttachments() {
  attachedFiles = [];
  var wrap = document.getElementById('filePreviewWrap');
  if (wrap) { wrap.innerHTML = ''; }
}

/* ══════════════════════════════════════════
   SEND MESSAGE
   ══════════════════════════════════════════ */
async function send() {
  var inp = document.getElementById('inp');
  var txt = inp.value.trim();

  if ((!txt && !attachedFiles.length) || busy) { return; }

  busy = true;
  document.getElementById('sendBtn').disabled = true;

  var fileContext = buildFileContext();
  var userText    = txt || 'Analise o(s) arquivo(s) anexado(s) com os resultados dos testes.';
  var fullContent = userText + fileContext;
  var fileNames   = attachedFiles.map(function (f) { return f.name; });

  inp.value = '';
  autoResize(inp);

  if (fileNames.length > 0) {
    addMsgWithAttachments('user', txt, fileNames);
  } else {
    addMsg('user', txt);
  }

  showThink();
  msgs.push({ role: 'user', content: fullContent });
  clearAttachments();

  try {
    var r = await fetch('https://api.anthropic.com/v1/messages', {
      method:  'POST',
      headers: {
        'Content-Type':'application/json',
        'x-api-key':'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',
        'anthropic-version':'2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
       
      body: JSON.stringify({
        model:      'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system:     SYSTEM,
        messages:   msgs,
      }),
    });

    var data  = await r.json();
    var reply = (data.content || []).map(function (b) { return b.text || ''; }).join('') || 'Erro na resposta da API.';

    rmThink();
    addMsg('ai', reply);
    msgs.push({ role: 'assistant', content: reply });

  } catch (err) {
    rmThink();
    addMsg('ai', '**Erro de conexão:** ' + err.message + '\n\nVerifique sua conexão e tente novamente.');
  }

  busy = false;
  document.getElementById('sendBtn').disabled = false;
}

/* ══════════════════════════════════════════
   INIT
   ══════════════════════════════════════════ */
document.querySelectorAll('.sb-section-hdr').forEach(function (h) {
  if (h.classList.contains('open')) {
    h.nextElementSibling.classList.add('open');
  }
});
