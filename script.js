/* ══════════════════════════════════════════
   NeuroEquilíbrio — Agente Clínico
   app.js
   ══════════════════════════════════════════ */

/* ─── SYSTEM PROMPT ─────────────────────────────────────────────────────────── */
const SYSTEM = `Você é o Dr. NeuroEquilíbrio, um neuropsicólogo clínico sênior com 28 anos de experiência e especialização avançada em avaliação neuropsicológica pediátrica, escolar e de adultos. Você foi treinado na bateria completa utilizada pela clínica NeuroEquilíbrio e domina profundamente todos os instrumentos listados abaixo, suas normas brasileiras, suas regras de pontuação e, principalmente, como eles se interconectam clinicamente para formar perfis diagnósticos.

══════════════════════════════════════════════════
DOMÍNIO COMPLETO DOS INSTRUMENTOS — BATERIA NEUROEQUILÍBRIO
══════════════════════════════════════════════════

━━━ INTELIGÊNCIA GERAL ━━━
• WAIS-III (Escolar + Adulto, 16-89a): 11 subtestes → QI Verbal (Vocab, Semes, Aritmét, Compreens, Dígitos, Seqüências), QI Execução (Compl.Figuras, Cubos, Matrizes, Arranjo Figuras, Código). QITotal=média ponderada. PP média=10 DP=3; QI média=100 DP=15. Análise de scatter: diferença VIQ-PIQ >15 = significativa. Pontos de corte: Extremamente Baixo <70, Limítrofe 70-79, Médio Inferior 80-89, Médio 90-109, Médio Superior 110-119, Superior 120-129, Muito Superior ≥130.
• WISC-IV (Escolar, 6-16a): 15 subtestes → 4 Índices: ICV (Semelh+Vocab+Compreens), IRP (Cubos+Conceit+Matrizes), IMO (Dígitos+Seq.Letras-Números+Aritmét), IVP (Código+Busca de Símbolos). Análise de discrepâncias críticas entre índices (tabelas de valores críticos). Scatter intra-índice: diferença ≥5pp entre subtestes do mesmo índice = variabilidade significativa. Perfis típicos: TDAH (IVP baixo, IMO baixo), Dislexia (IVP muito baixo, ICV preservado), TEA (IRP elevado, ICV rebaixado), Altas Habilidades (ICV/IRP muito superiores).
• WMT-2 Matrizes de Viena (7-80+a): Inteligência geral por raciocínio matricial, independente de linguagem. Escores por percentil comparados à norma brasileira. Ideal para suspeita de TEA (não-verbal), DI ou limitações linguísticas.
• CPM-Raven (5-11a): Percentis A/B/C vs norma brasileira. PC<25 sugere limitação cognitiva não-verbal; PC>75 indica capacidade não-verbal preservada. Complementa WISC/WMT.
• SON-R 2½-7 e SON-R 6-40: QI Não-Verbal sem necessidade de linguagem. Subtestes: Categorias, Analogias, Mosaicos, Situações. QI SON médio=100 DP=15. Fundamental para TEA, comprometimentos de linguagem, avaliação cross-cultural.
• BETA-III (14-88a): 6 subtestes não-verbais cronometrados → QI Não-Verbal. Útil em adultos com baixa escolaridade ou limitação linguística.
• Escala Columbia (3-9a 11m): Raciocínio por classificação de figuras. Pontuação bruta → Desvio da Idade Mental (DIM). DIM±1 DP = faixa média.
• Escala BINAUT (3-7a): Maturidade cognitiva e prontidão escolar em pré-escolares.
• TIAH/S (9-15a): Avaliação integrada de inteligência + habilidades sociais em escolares.

━━━ DESENVOLVIMENTO INFANTIL ━━━
• Bayley-III (1-42 meses): 5 escalas — Cognitiva, Linguagem (Receptiva+Expressiva), Motor (Grosso+Fino), Socioemocional, Comportamento Adaptativo. Pontuação composta média=100 DP=15; subteste médio=10 DP=3. Atraso: ≥2 DP abaixo. Indicadores precoces de TEA, DI, paralisia cerebral.
• IDADI (4-72 meses): 7 áreas do desenvolvimento: Motora Grossa, Motora Fina, Linguagem Receptiva, Linguagem Expressiva, Pessoal-Social, Cognitiva, Autocuidado. Percentis por faixa de idade. Detecta atrasos globais e específicos.
• Vineland-3 (0-90a): 4 domínios adaptativos: Comunicação (Receptiva, Expressiva, Escrita), Vida Diária (Pessoal, Doméstica, Comunitária), Socialização (Relações Interp., Tempo de Lazer, Regras Sociais), Habilidades Motoras. Escores padrão média=100 DP=15. Indispensável para DI, TEA, qualquer condição que afete funcionamento adaptativo. Diferenciação: WISC/WAIS mede capacidade; Vineland mede funcionamento real.
• EFA (6-15a): Funcionamento adaptativo escolar específico — complementa Vineland no contexto educacional.

━━━ LEITURA / ESCRITA / LINGUAGEM ━━━
• ANELE Vol.1 — PCFO (3-9a): Prova de Consciência Fonológica — subtestes: Rima, Aliteração, Síntese, Segmentação, Exclusão, Transposição silábica e fonêmica. Pontuação bruta → percentil por faixa etária. PC<25 = déficit fonológico; indica risco de dislexia.
• ANELE Vol.2 — T-NAR (6-14a): Nomeação Automática Rápida de objetos, cores, letras e números. Tempo em segundos por categoria → percentil. Lentidão na NAR (PC<25) + déficit fonológico = perfil dislexia fonológica + déficit de velocidade (duplo-déficit).
• ANELE Vol.3 — TEPPE (1º-9º ano): Escrita de palavras regulares, irregulares e pseudopalavras sob ditado. Tipos de erro: ortográfico, fonológico, visoespacial. Perfil de erros guia intervenção.
• ANELE Vol.4 — TLPP (6-85a): Leitura de palavras e pseudopalavras cronometrada. Precisão + velocidade. Dislexia fonológica: pseudopalavras muito piores que palavras. Dislexia superficial: palavras irregulares muito piores.
• PROLEC (Fund. 2º-5º ano): Avalia 4 processos: Reconhecimento de Letras, Processos Léxicos, Processos Sintáticos, Processos Semânticos. Pontuação por tarefa vs norma de série.
• PROLEC-SE-R (6º ano–Médio): Versão avançada: Velocidade de Leitura, Estruturas Sintáticas, Compreensão de Textos.
• TDE-II (1º-9º ano): 3 subtestes: Leitura (reconhecimento de palavras), Escrita (ditado), Aritmética. Pontuação bruta → escore padrão + classificação. Permite comparação intraindividual entre modalidades.
• PRONUMERO (2º-5º ano): Senso numérico, contagem, operações, resolução de problemas. Dificuldade específica em matemática (discalculia) vs déficit geral.
• TISD (6-11a): 6 dimensões de rastreio de dislexia: consciência fonológica, memória fonológica, velocidade de nomeação, processamento temporal, decodificação, fluência.

CONVERGÊNCIA CLÍNICA LEITURA/ESCRITA:
Dislexia = ANELE1(PC<25) + TLPP(lento/impreciso) + TEPPE(erros fonológicos) + PROLEC(déficit léxico-fonológico) + TDE-II(leitura baixa com aritmética preservada) + TISD(positivo) + WISC-IV IVP baixo + NAR lenta.
Discalculia = PRONUMERO(rebaixado) + TDE-II Aritmética baixa + WISC-IV IRP baixo (subteste Aritmética).

━━━ MEMÓRIA ━━━
• RAVLT (6-92a): Análise de 7 variáveis clínicas: 1) Aprendizagem Total (T1-T5): curva de aprendizagem; 2) Interferência Proativa: T1; 3) Interferência Retroativa: T6 vs T5; 4) Retenção/Consolidação: T7 vs T5; 5) Reconhecimento: acertos - falsos alarmes; 6) Efeito de Primazia/Recência; 7) Curva Plana. Padrões: Demência→queda acentuada T1-T5, perda T7, reconhecimento comprometido. TDAH→curva variável, boa consolidação. Depressão→curva plana, reconhecimento melhor que recordação.
• TEPIC-M-2 (15-92a): Memória Visual de Curto e Longo Prazo. Subtestes de recordação imediata, tardia e reconhecimento visual. Dissociação RAVLT vs TEPIC indica lateralidade de disfunção.
• TIME-R (3-6a 11m): Memória de curto prazo pré-escolar — verbal, visual e táctil.

━━━ ATENÇÃO ━━━
• BPA-2 (6-94a): Bateria de Atenção com 5 subtestes → Atenção Sustentada (AS), Dividida (AD), Alternada (AA), Concentrada. Escores padrão por faixa etária. Perfil TDAH: AS e AD mais rebaixadas que AA.
• TAVIS-4 (6-17a): Atenção Visual informatizada — Velocidade de Processamento, Omissões, Comissões, Variabilidade. Omissões↑ = déficit atencional. Comissões↑ = impulsividade. Variabilidade↑ = instabilidade (TDAH).
• D2-R (9-60a): Atenção Concentrada por cancelamento. BZO, E% (>10% = impulsividade), IC.
• TEACO/TEADI/TEALT (18-72a): Atenção Concentrada, Dividida e Alternada para adultos.

━━━ FUNÇÕES EXECUTIVAS ━━━
• FDT — Cinco Dígitos (6-90a): 4 etapas: Leitura (velocidade pura), Contagem (inibição), Escolha (automática), Alternância (flexibilidade). Velocidade de Inibição = Contagem - Leitura. Custo de Alternância = Alternância - (Contagem+Escolha)/2.
• Torre de Londres (10-59a): Planejamento, monitoramento e solução de problemas. Escore de movimentos corretos + tempo de início.
• BDEFS (Barkley, 18-70a): 89 itens / 5 domínios: Inibição Comportamental, Auto-Organização, Autorregulação das Emoções, Auto-Motivação, Planejamento/Organização. Escore T>65 = déficit clinicamente significativo.

━━━ TEA / AUTISMO ━━━
• M-CHAT (16-30 meses): 20 itens. Falhas em ≥3 itens (triagem) ou ≥2 itens críticos → encaminhamento obrigatório. Itens críticos: Apontar protodeclarativo, Interesse em outras crianças, Simulação de jogo, Mostrar objetos, Resposta ao nome, Contato visual.
• PROTEA-R-NV (2-5a): Avaliação não-verbal do TEA pré-escolar. Domínios: Reciprocidade Social Emocional, Comunicação Não-Verbal, Padrões RRB.
• ADOS-2 M2/M3/M4: Gold standard diagnóstico observacional. Algoritmo: Afeto Social (AS) + CRR. Cortes: Autismo = AS+CRR≥7; Espectro = AS+CRR≥4.
• SRS-2 (2,5-adulto): 5 subescalas: Consciência, Cognição, Comunicação, Motivação Social, Maneirismos. T: <60=normal, 60-65=leve, 66-75=moderado, >75=grave.
• ATA (2-18a): Rastreio de traços autísticos em ampla faixa.
• ASSQ (7-16a): Específico para Asperger/TEA alto funcionamento. Corte ≥19 (pais) ou ≥22 (professores).
• AQ Adolescente (12-15a): Escore >32 = traços significativos.
• RAADS-R-BR Screen (16+a): Subescalas: Comportamento Social, Linguagem, Interesses Circunscritos, Sensoriomotor. Corte ≥65 = positivo.
• CAT-Q (16+a): Assimilação, Compensação, Mascaramento. Fundamental para diagnóstico feminino tardio.
• QA16+ (16+a): Rastreio adicional para adultos.
• Escala de Cambridge: EQ baixo + SQ alto = perfil TEA.
• ABC-ICA (3-14a): Comportamentos externalizantes e internalizantes.

CONVERGÊNCIA CLÍNICA TEA:
Diagnóstico TEA = ADOS-2 (positivo) + rastreio positivo (SRS/ATA/ASSQ/RAADS) + comprometimento adaptativo (Vineland) + perfil cognitivo compatível (SON-R/WISC) + processamento sensorial (Perfil Sensorial).
Camuflagem: CAT-Q elevado + RAADS elevado + SRS moderado + ADOS borderline = suspeita diagnóstica elevada.

━━━ TDAH ━━━
• SNAP-IV (1-17a): 26 itens (18 DSM + 8 TOD). Corte: D≥2.0 ou HI≥2.0 por informante. Comparação pais vs professores: discordância = situacional vs pervasivo.
• ETDAH-PAIS (2-17a): 4 fatores — Desatenção, Hiperatividade, Oposição/Agressão, Ansiedade. Escore T>65 = significativo.
• ETDAH-AD (12-87a): Autoaplicável. Comparação autoavaliação vs heteroavaliação.
• ASQ (7-12a): TDAH no contexto escolar.
• ASRS-18 (18+a): Parte A (6 itens) — ≥4 positivos = alta sensibilidade para TDAH.
• BAARS-IV Barkley (18+a): 4 escalas — TDAH Atual, TDAH Infância (retrospectivo), ECD. Escore T>65 = clinicamente significativo.

CONVERGÊNCIA CLÍNICA TDAH:
Escolar = SNAP-IV positivo (pais+professores) + WISC-IV (IMO e/ou IVP rebaixados com ICV/IRP preservados) + BPA-2 (sustentada/dividida rebaixadas) + TAVIS-4 + FDT (custo inibição elevado) + RAVLT (curva variável).
Adulto = ASRS-18 positivo + BAARS-IV (T>65) + BDEFS + WAIS-III scatter + D2-R + TEACO/TEADI + RAVLT.

━━━ EMOCIONAL / HUMOR / ANSIEDADE ━━━
• BAI (17-80a): 21 itens. Mínima 0-7, Leve 8-15, Moderada 16-25, Grave 26-63.
• BDI-II (13-80a): 21 itens. Mínima 0-13, Leve 14-19, Moderada 20-28, Grave 29-63.
• SCARED Auto/Hetero (7-18a): 5 fatores: Pânico, Ansiedade Generalizada, Separação, Fobia Social, Escola Recusa.
• EBADEP-IJ (7-18a) e EBADEP-A: Escala Baptista de Depressão — validada para população brasileira.
• HUMOR-IJ (8-19a) e HUMOR-U (18-29a): Avaliação dimensional do humor.

━━━ PERSONALIDADE ━━━
• BFP (16+a): Big Five brasileiro — Neuroticismo, Extroversão, Socialização, Realização, Abertura. Escores em percentil.
• EPQ-IJ (10-16a): Psicoticismo, Extroversão, Neuroticismo, Mentira (validade).
• PFISTER (18-66a): Projetivo por escolha de cores. Análise de modo de colocação, estrutura, síndromes de cor.
• QCP/PBQ (15-94a): Crenças disfuncionais centrais associadas a transtornos de personalidade. Fundamental em TCC.

━━━ PROCESSAMENTO SENSORIAL ━━━
• Perfil Sensorial 2 (0-adulto): 5 quadrantes (Evitação, Sensível, Observador, Buscador) × 8 sistemas. Hiperresponsividade (Evitação+Sensível↑), Hiporresponsividade (Observador↑), Busca Sensorial (Buscador↑). Fundamental no TEA, TDAH, ansiedade sensorial.

━━━ HABILIDADES SOCIAIS ━━━
• IHS-2 (16+a): 5 fatores — Enfrentamento com Risco, Auto-afirmação Afeto Positivo, Conversação, Auto-exposição a Desconhecidos, Auto-controle Agressividade.
• SRS-2 (já descrito acima).
• TIAH/S (9-15a): Componente social integrado à inteligência.

══════════════════════════════════════════════════
REGRAS DE INTERPRETAÇÃO E PONTUAÇÃO
══════════════════════════════════════════════════
• Pontuações Ponderadas: média=10, DP=3. Muito Superior≥17, Superior=15-16, Médio-Alto=13-14, Médio=8-12, Médio-Baixo=6-7, Limítrofe=4-5, Deficiente≤3.
• Escores Compostos/QI: média=100, DP=15. Muito Superior≥130, Superior=120-129, Médio-Superior=110-119, Médio=90-109, Médio-Inferior=80-89, Limítrofe=70-79, Extremamente Baixo≤69.
• Escores T: média=50, DP=10. T>65 = clinicamente significativo; T>70 = muito significativo.
• Percentis: <5=Muito Baixo, 5-9=Baixo, 10-25=Médio-Baixo, 26-74=Médio, 75-90=Médio-Alto, 91-95=Alto, >95=Muito Alto.
• Discrepâncias críticas WISC-IV: ICV-IRP >23pts, ICV-IMO >21pts, ICV-IVP >22pts, IRP-IMO >20pts, IRP-IVP >21pts, IMO-IVP >20pts (p<0.05).
• Scatter: Diferença ≥5pts entre subtestes dentro do mesmo índice = variabilidade clinicamente relevante.

══════════════════════════════════════════════════
COMO VOCÊ ANALISA E RESPONDE
══════════════════════════════════════════════════
1. Identifique os instrumentos e normalize os dados
2. Análise instrumento por instrumento com interpretação clínica de cada subteste/subescala
3. Análise de padrões e convergências — o que múltiplos testes dizem em conjunto?
4. Análise de dissociações clínicas — onde os dados divergem?
5. Perfil cognitivo-comportamental integrado — forças e fraquezas
6. Hipóteses diagnósticas com CID-11 / DSM-5-TR — primária, diferencial e exclusão
7. Anamnese funcional — implicações práticas para o cotidiano, escola, trabalho, relações sociais
8. Recomendações — intervenções, encaminhamentos, estratégias

ESTILO CLÍNICO: Seja preciso, rico clinicamente e ancore sempre nos escores específicos. Use terminologia neuropsicológica profissional. Não generalize — o laudo é sempre individualizado. Quando dados são parciais, extraia o máximo possível e sinalize o que falta para completar a avaliação.`;

/* ─── STATE ─────────────────────────────────────────────────────────────────── */
let msgs        = [];
let busy        = false;
let currentPop  = 'todos';

/* ─── SIDEBAR ────────────────────────────────────────────────────────────────── */
function toggleCat(hdr) {
  hdr.classList.toggle('open');
  hdr.nextElementSibling.classList.toggle('open');
}

function setPopulation(pop, btn) {
  currentPop = pop;
  document.querySelectorAll('.pop-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  filterTests(document.getElementById('sbSearch').value);
}

function filterTests(q) {
  const query = q.toLowerCase();
  document.querySelectorAll('.sb-item').forEach(item => {
    const name   = item.querySelector('.sb-item-name').textContent.toLowerCase();
    const sub    = item.querySelector('.sb-item-sub').textContent.toLowerCase();
    const pop    = item.dataset.pop || '';
    const matchQ = !q || name.includes(query) || sub.includes(query);
    const matchP = currentPop === 'todos' || pop.includes(currentPop.substring(0, 3));
    item.style.display = (matchQ && matchP) ? '' : 'none';
  });
}

/* ─── TEST TEMPLATES (sidebar click) ──────────────────────────────────────── */
const TEST_TEMPLATES = {
  'WAIS-III': `Analise os resultados do WAIS-III:\n\nSUBTESTES — ESCALA VERBAL (Pontuação Ponderada):\n• Vocabulário: \n• Semelhanças: \n• Aritmética: \n• Compreensão: \n• Dígitos (Direto: | Inverso: ): \n• Sequências de Letras-Números: \n\nSUBTESTES — ESCALA DE EXECUÇÃO:\n• Completar Figuras: \n• Cubos: \n• Raciocínio Matricial: \n• Arranjo de Figuras: \n• Código (Decifrar): \n\nÍNDICES:\n• QI Verbal (QIV): \n• QI de Execução (QIE): \n• QI Total (QIT): \n\nPaciente: Idade: | Escolaridade: | Motivo: `,

  'WISC-IV': `Analise os resultados do WISC-IV:\n\nSUBTESTES (Pontuação Ponderada):\n• Semelhanças: \n• Vocabulário: \n• Compreensão: \n• Informação: [complementar]\n• Palavras em Contexto: [complementar]\n• Cubos: \n• Conceitos Figurativos: \n• Raciocínio com Matrizes: \n• Completar Figuras: [complementar]\n• Dígitos (Direto: | Inverso: ): \n• Sequência de Letras-Números: \n• Aritmética: [complementar]\n• Código: \n• Cancelamento: [complementar]\n• Procurar Símbolos: \n\nÍNDICES:\n• ICV: \n• IRP: \n• IMO: \n• IVP: \n• QIT: \n\nPaciente: Idade: anos meses | Série: | Motivo: `,

  'RAVLT': `Analise o perfil de memória RAVLT:\n\nAPRENDIZAGEM — Lista A:\n• Trial I: /15\n• Trial II: /15\n• Trial III: /15\n• Trial IV: /15\n• Trial V: /15\nTotal Aprendizagem (T1-T5): /75\n\nINTERFERÊNCIA:\n• Lista B (interferência): /15\n• Trial VI pós-interferência: /15\nPerda por interferência retroativa: pts\n\nMEMÓRIA DE LONGO PRAZO:\n• Recordação Livre 30min (Trial VII): /15\nRetenção: % (T7/T5×100)\n\nRECONHECIMENTO:\n• Acertos: /30 | Falsos Alarmes: \n• Índice Discriminação (A-FA): \n\nPaciente: Idade: | Escolaridade: | Motivo: `,

  'BPA-2': `Analise os resultados da BPA-2:\n\nSUBTESTES:\n• Atenção Concentrada (AC):\n  - Acertos brutos: | Erros: \n  - Escore Padrão: | Percentil: | Classificação: \n• Atenção Dividida (AD):\n  - Acertos brutos: | Erros: \n  - Escore Padrão: | Percentil: | Classificação: \n• Atenção Alternada (AA):\n  - Acertos brutos: | Erros: \n  - Escore Padrão: | Percentil: | Classificação: \n• Atenção Sustentada (AS):\n  - Acertos brutos: | Erros: \n  - Escore Padrão: | Percentil: | Classificação: \n\nESCORE GLOBAL:\n• Atenção Geral: Escore: | Percentil: | Classificação: \n\nPaciente: Idade: | Queixas: `,

  'ANELE1': `Analise os resultados do ANELE Vol.1 — PCFO (Consciência Fonológica):\n\nSUBTESTES (Pontuação Bruta):\n• Julgamento de Rima: /\n• Produção de Rima: /\n• Julgamento de Aliteração: /\n• Síntese Silábica: /\n• Síntese Fonêmica: /\n• Segmentação Silábica: /\n• Segmentação Fonêmica: /\n• Exclusão Silábica: /\n• Exclusão Fonêmica: /\n• Transposição Silábica: /\n• Transposição Fonêmica: /\n\nPONTUAÇÃO TOTAL: /\nPercentil geral: | Classificação: \n\nPaciente: Idade: | Série: | Queixas de leitura/escrita: `,

  'TDE-II': `Analise os resultados do TDE-II:\n\nSUBTESTES:\n• Leitura (Reconhecimento de Palavras):\n  - Pontuação Bruta: /\n  - Escore Padrão: | Percentil: | Classificação: \n\n• Escrita (Ditado):\n  - Pontuação Bruta: /\n  - Tipos de erros predominantes:\n  - Escore Padrão: | Percentil: | Classificação: \n\n• Aritmética (Cálculo):\n  - Pontuação Bruta: /\n  - Escore Padrão: | Percentil: | Classificação: \n\nPaciente: Série: | Idade: | Escola: pública/particular\nHistórico de repetência: | Reforço/apoio escolar: \nQueixas específicas: `,

  'SNAP-IV': `Analise os resultados do SNAP-IV:\n\nINFORMANTE — PAIS:\nSubescala Desatenção (itens 1-9):\nIten por item (0=nunca/3=muito): \nMédia Desatenção: /3.0\n\nSubescala Hiper-Impulsividade (itens 10-18):\nMédia Hiper-Impulsividade: /3.0\n\nSubescala TOD (itens 19-26):\nMédia TOD: /3.0\n\nINFORMANTE — PROFESSORES:\nMédia Desatenção (prof): /3.0\nMédia Hiper-Impulsividade (prof): /3.0\nMédia TOD (prof): /3.0\n\nCritérios DSM atingidos:\n□ ≥6 sintomas Desatenção (pais) □ ≥6 (prof)\n□ ≥6 sintomas H-I (pais) □ ≥6 (prof)\n\nIdade início dos sintomas: \nPaciente: Idade: | Série: | Queixas: `,

  'VINELAND-3': `Analise os resultados do Vineland-3:\n\nDOMÍNIOS (Escore Padrão, média=100 DP=15):\n\nCOMUNICAÇÃO:\n• Receptiva: \n• Expressiva: \n• Escrita: \n• Escore Composto Comunicação: \n\nHABILIDADES DE VIDA DIÁRIA:\n• Pessoal: \n• Doméstica: \n• Comunitária: \n• Escore Composto HVD: \n\nSOCIALIZAÇÃO:\n• Relacionamentos Interpessoais: \n• Tempo de Lazer: \n• Regras Sociais: \n• Escore Composto Socialização: \n\nHABILIDADES MOTORAS:\n• Grossa: \n• Fina: \n• Escore Composto Motor: \n\nÍNDICE DE COMPORTAMENTO ADAPTATIVO GERAL (ICAG): \n\nPaciente: Idade: | Informante: | Motivo: `,

  'SRS2': `Analise os resultados do SRS-2:\n\nVERSÃO APLICADA: □ Pré-Escolar □ Escolar □ Adulto\n\nESCORES T POR SUBESCALA:\n• Consciência Social: T=\n• Cognição Social: T=\n• Comunicação Social: T=\n• Motivação Social: T=\n• Maneirismos Autísticos (RRB): T=\n\nESCORE TOTAL SRS: T=\nClassificação: □ Normal (<60) □ Leve (60-65) □ Moderado (66-75) □ Grave (>75)\n\nINFORMANTE: □ Pais □ Professores □ Autoaplicável\n\nPaciente: Idade: | Queixas: \nHipóteses prévias: `,

  'RAADS': `Analise os resultados do RAADS-R-BR Screen:\n\nPONTUAÇÃO TOTAL: /240\nCORTE: ≥65 = positivo para TEA\n\nSUBESCALAS:\n• Comportamento Social: /\n• Linguagem: /\n• Interesses Circunscritos/Padrões Senso-Motor: /\n• Sensório-Motor: /\n\nPaciente: Idade: | Sexo: | Profissão: \nHistórico clínico:\nQueixas que motivaram a avaliação: `,

  'BAI': `Analise os resultados do BAI + BDI-II:\n\nBAI — Inventário de Ansiedade de Beck:\nEscore Total: /63\nClassificação: □ Mínima (0-7) □ Leve (8-15) □ Moderada (16-25) □ Grave (26-63)\nSintomas mais endossados: \n\nBDI-II — Inventário de Depressão de Beck:\nEscore Total: /63\nClassificação: □ Mínima (0-13) □ Leve (14-19) □ Moderada (20-28) □ Grave (29-63)\nSintomas mais endossados: \nIdeação suicida (item 9): sim/não\n\nContexto clínico: \nHistórico de tratamentos: \nMedicações em uso: `,

  'FDT': `Analise os resultados do FDT (Cinco Dígitos):\n\nTEMPOS DE EXECUÇÃO (segundos):\n• Tarefa 1 — Leitura: seg | Erros: \n• Tarefa 2 — Contagem: seg | Erros: \n• Tarefa 3 — Escolha (Inibição): seg | Erros: \n• Tarefa 4 — Alternância: seg | Erros: \n\nESCORES DERIVADOS:\n• Velocidade de Processamento (T1): Percentil: \n• Interferência/Inibição (T3-T1): Percentil: \n• Custo de Alternância (T4): Percentil: \n• Índice de Resistência à Interferência: \n\nPaciente: Idade: | Escolaridade: | Queixas executivas: `,

  'BAARS-IV': `Analise o protocolo TDAH Adulto — Barkley:\n\nBAARSIV — ESCALA DE AVALIAÇÃO BARKLEY:\n\nSINTOMAS ATUAIS:\n• Desatenção Total (itens 1-9): /27 | Escore T: \n• Hiper-Impulsividade Total (itens 10-18): /27 | Escore T: \n• TDAH Combinado: | Escore T: \n\nSINTOMAS NA INFÂNCIA (retrospectivo):\n• Desatenção infância: | Escore T: \n• H-I infância: | Escore T: \n\nBDEFS (Funções Executivas Barkley):\n• Inibição Comportamental: Escore T: \n• Auto-Organização: Escore T: \n• Autorregulação das Emoções: Escore T: \n• Auto-Motivação: Escore T: \n• Planejamento/Organização: Escore T: \n\nASRS-18 (OMS) — Parte A: /6 positivos\nETDAH-AD: \n\nPaciente: Idade: | Escolaridade: | Profissão: \nHistórico: `,
};

function pickTest(el) {
  document.querySelectorAll('.sb-item').forEach(i => i.classList.remove('sel'));
  el.classList.add('sel');
  const test = el.dataset.test;
  const tpl  = TEST_TEMPLATES[test];
  const inp  = document.getElementById('inp');
  if (tpl) {
    inp.value = tpl;
  } else {
    const name = el.querySelector('.sb-item-name').textContent;
    const sub  = el.querySelector('.sb-item-sub').textContent;
    inp.value  = `Analise os resultados do ${name} (${sub}):\n\nForneça os escores, pontuações ou dados disponíveis:\n\n\nPaciente: Idade: | `;
  }
  autoResize(inp);
  inp.focus();
}

/* ─── CLINICAL TEMPLATES (modal) ────────────────────────────────────────────── */
const TPLS = {
  tdah_escolar: `Analise o perfil neuropsicológico completo para TDAH Escolar:

WISC-IV — Criança, 9 anos, 3º ano EF:
• ICV: 107 | IRP: 103 | IMO: 76 | IVP: 72 | QIT: 88
• Semelhanças: 11 | Vocabulário: 12 | Compreensão: 10
• Cubos: 11 | Conceitos Fig.: 10 | Matrizes: 10
• Dígitos (Direto=9 / Inverso=4): PP=7 | Seq.Letras-Nº: PP=6 | Aritmética: PP=7
• Código: PP=6 | Procurar Símbolos: PP=7

SNAP-IV:
• Desatenção Pais: 2.6/3.0 | Professores: 2.8/3.0
• H-I Pais: 2.2/3.0 | Professores: 1.8/3.0
• TOD Pais: 1.2/3.0 | Professores: 0.9/3.0

BPA-2:
• Atenção Concentrada: Percentil 12 (Médio-Baixo)
• Atenção Dividida: Percentil 10 (Baixo)
• Atenção Alternada: Percentil 20 (Médio-Baixo)
• Atenção Sustentada: Percentil 8 (Baixo)

TAVIS-4:
• Omissões: +2,1 DP | Comissões: +1,8 DP | Variabilidade RT: +2,0 DP

FDT:
• Leitura: 28seg (P=55) | Contagem: 48seg (P=35) | Escolha: 82seg (P=20) | Alternância: 115seg (P=12)

TORRE DE LONDRES:
• Acertos: 8/12 (P=25) | Tempo início médio: 3.2seg

ETDAH-PAIS: Desatenção T=72 | H-I T=65

Sexo: Masculino | Queixas: não termina tarefas, perde materiais, não segue instruções, agitação em sala`,

  tea_infantil: `Analise o perfil diagnóstico TEA Infantil:

CRIANÇA: 4 anos 2 meses, sexo feminino

M-CHAT-R/F (follow-up):
• Falhas em itens críticos: Apontar protodeclarativo, Resposta ao nome, Contato visual direcionado, Interesse em outras crianças
• Total itens falhos: 7/20

SON-R 2½-7:
• Categorias: PP=7 | Analogias: PP=5 | Mosaicos: PP=8 | Situações: PP=4
• QI Total SON: 82

ADOS-2 Módulo 2:
• Afeto Social (AS): 13 (corte autismo=7)
• Comportamento Restritivo-Repetitivo (CRR): 4
• Total: 17 → Autismo

SRS-2 Pré-Escolar (mãe):
• Total SRS: T=82 → Grave

VINELAND-3:
• Comunicação: 68 | HVD: 72 | Socialização: 61 | Motor: 85
• ICAG: 68

PERFIL SENSORIAL 2 (0-3a):
• Evitação: +2,8 DP | Sensível: +2,2 DP | Observador: +1,5 DP

Queixas: atraso de linguagem, não aponta, enfileira objetos, birras intensas a mudanças de rotina, hiperssensibilidade auditiva`,

  dislexia: `Analise a bateria de dislexia:

CRIANÇA: 8 anos 3 meses, 3º ano EF, sexo masculino

WISC-IV:
• ICV: 110 | IRP: 108 | IMO: 88 | IVP: 72 | QIT: 97
• Vocabulário: 13 | Semelhanças: 12 | Compreensão: 11
• Código: 6 | Procurar Símbolos: 7 | Dígitos: 8 | Seq.Letras-Nº: 8

ANELE Vol.1 — PCFO: Total Percentil 8 (Baixo) — déficit acentuado em síntese e exclusão fonêmica

ANELE Vol.2 — T-NAR:
• Objetos: 62seg (P=18) | Cores: 58seg (P=22) | Letras: 78seg (P=8) | Números: 71seg (P=12)
• NAR Total: Percentil 10 (Baixo)

ANELE Vol.4 — TLPP:
• Palavras regulares: 82% | Irregulares: 68% | Pseudopalavras: 41%
• Velocidade: +2,3 DP lento

ANELE Vol.3 — TEPPE:
• Pseudopalavras: 35% | Erros: omissão de fonemas, troca surda/sonora, inversão

PROLEC (3º ano):
• Leitura Palavras: P=10 | Leitura Pseudopalavras: P=5

TDE-II:
• Leitura: P=8 (Baixo) | Escrita: P=10 (Baixo) | Aritmética: P=48 (Médio)

TISD: Positivo em 5/6 dimensões

BPA-2: Atenção Concentrada P=42 (Médio) — atenção preservada

Queixas: lê muito devagar com muitos erros, escrita com trocas, evita leitura em voz alta, bom raciocínio oral`,

  tea_adulto: `Analise o perfil TEA adulto com camuflagem:

PACIENTE: Mulher, 34 anos, psicóloga, encaminhamento próprio

RAADS-R-BR Screen:
• Total: 142/240 (corte ≥65) → FORTEMENTE POSITIVO
• Comportamento Social: 48 | Linguagem: 8 | Interesses Circunscritos: 36 | Sensório-Motor: 50

CAT-Q:
• Compensação: 72/84 | Mascaramento: 68/77 | Assimilação: 55/77
• Total Camuflagem: 195/240 (muito elevado — padrão feminino)

ADOS-2 Módulo 4:
• Afeto Social: 9 (corte autismo=7) | CRR: 2 | Total: 11

SRS-2 Adulto (autoaplicável): Total SRS T=68 (Moderado)

Escala de Cambridge:
• EQ (Empatia): 22/80 (percentil <10) | SQ (Sistematização): 71/80 (percentil >95)

IHS-2: Total Percentil 28 (Médio-Baixo)

WAIS-III: QIV=118, QIE=108, QIT=115
• Vocab=17, Semes=16, Compreen=11, Dígitos=8, Aritmét=10

PERFIL SENSORIAL 2 (adulto): Evitação +3,1 DP | Sensível +2,8 DP

Queixas: esgotamento social após interações, dificuldade de leitura de contexto não-verbal, hiperfoco, hipersensibilidade auditiva/luz, burnout recorrente, sempre se sentiu "diferente"`,

  tdah_adulto: `Analise o protocolo TDAH adulto completo:

PACIENTE: Homem, 41 anos, engenheiro de TI

WAIS-III: QIV=112, QIE=98, QIT=106
• Dígitos: PP=6 | Seq.Letras-Nº: PP=7 | Aritmética: PP=9
• Vocabulário: PP=14 | Semelhanças: PP=13 | Código: PP=7

ASRS-18 (OMS): Parte A: 5/6 positivos | Total ASRS: 52/72

BAARS-IV:
• Desatenção Atual: T=74 | H-I Atual: T=62 | TDAH Combinado: T=71
• Desatenção Infância: T=68 | H-I Infância: T=66

BDEFS:
• Inibição Comportamental: T=72 | Auto-Organização: T=78
• Autorregulação Emocional: T=65 | Auto-Motivação: T=74 | Planejamento: T=80

BPA-2: Concentrada P=18 | Dividida P=14 | Alternada P=22 | Sustentada P=10

D2-R: BZO P=20 | E%=12,4% (elevado) | IC P=15

RAVLT:
• T1=5 T2=8 T3=9 T4=10 T5=11 | Lista B=4 | T6=6 | T7=5
• Reconhecimento: 22/30 (FA=5)

Queixas: procrastinação severa, não termina projetos, hiperfoco, impulsividade verbal, dificuldade de iniciar tarefas`,

  preescolar_global: `Analise a avaliação global pré-escolar:

CRIANÇA: Menino, 3 anos 8 meses

BAYLEY-III:
• Cognitiva: EC=78 (P=7) | Linguagem: EC=74 (P=4) | Motor: EC=82 (P=12)
• Receptiva: Escore=8 | Expressiva: Escore=6

IDADI:
• Linguagem Receptiva: 55% (equivalente 2a 6m) | Expressiva: 48% (2a 2m)
• Motora Grossa: 70% | Cognitivo: 68%

VINELAND-3:
• Comunicação: 72 | HVD: 78 | Socialização: 70 | Motor: 85 | ICAG: 74

PERFIL SENSORIAL 2:
• Buscador: +2,2 DP | Evitação: +1,8 DP

TIME-R:
• Memória Verbal CP: P=15 | Memória Visual CP: P=22

Queixas: atraso na fala, birras intensas, movimentos estereotipados esporádicos, histórico familiar de TEA`,

  depressao_ansiedade: `Analise o perfil emocional adulto integrado:

PACIENTE: Mulher, 28 anos, estudante universitária

WAIS-III: QIV=122, QIE=115, QIT=120
• Dígitos: PP=9 | Vocabulário: PP=17 | Semelhanças: PP=16

BDI-II: Total=24 (Depressão Moderada)
Sintomas mais endossados: Tristeza, Perda de prazer, Fadiga, Pessimismo, Dificuldade de concentração
Item 9 (Ideação suicida): 1 (pensamentos passivos)

BAI: Total=28 (Ansiedade Grave)
Sintomas: Coração acelerado, Sensação de calor, Tontura, Medo de perder o controle

EBADEP-A: Afeto Negativo elevado | Anedonia moderada | Somatização elevada

BFP: Neuroticismo P=94 | Extroversão P=22 | Realização P=18 | Abertura P=78

QCP/PBQ: Crenças Evitativas elevado | Crenças de Desamparo muito elevado

RAVLT: Curva plana (T1=5, T2=6, T3=7, T4=8, T5=8) | T7=5 | Reconhecimento: 27/30

Histórico: 2 episódios depressivos anteriores, perdeu o pai há 1 ano, escitalopram 10mg/dia`,

  escolar_global: `Analise a avaliação neuropsicológica escolar global:

CRIANÇA: Menina, 10 anos 5 meses, 5º ano EF, escola particular

WISC-IV: ICV=98 | IRP=101 | IMO=85 | IVP=88 | QIT=93
• Semelhanças=10 | Vocabulário=10 | Compreensão=10
• Cubos=10 | Conceitos=11 | Matrizes=10
• Dígitos(D=8/I=6)=PP=8 | Seq.Letras-Nº=PP=7 | Código=PP=8

TDE-II: Leitura P=42 | Escrita P=30 | Aritmética P=22

BPA-2: Concentrada P=45 | Dividida P=38 | Alternada P=42 | Sustentada P=35

RAVLT: T1=6 T2=9 T3=10 T4=11 T5=12 | T7=9 | Reconhecimento: 28/30 (FA=2)

SCARED Autoaplicável: Total=32 (corte ≥25)
• Pânico: 8 | Ansiedade Generalizada: 12 | Fobia Social: 7

VINELAND-3: Comunicação: 97 | HVD: 95 | Socialização: 82 | ICAG: 91

PERFIL SENSORIAL 2: Evitação +1,2 DP | Sensível +1,8 DP

Queixas: queda de notas, chora antes de provas, dificuldade em matemática, muito perfeccionista`
};

function applyTpl(key) {
  document.getElementById('inp').value = TPLS[key] || '';
  autoResize(document.getElementById('inp'));
  closeModalD();
  document.getElementById('inp').focus();
}

/* ─── MODAL ─────────────────────────────────────────────────────────────────── */
function openModal()  { document.getElementById('modalBg').classList.add('open'); }
function closeModal(e){ if (e.target === document.getElementById('modalBg')) closeModalD(); }
function closeModalD(){ document.getElementById('modalBg').classList.remove('open'); }

/* ─── QUICK ACTIONS ─────────────────────────────────────────────────────────── */
function requestLaudo() {
  if (!msgs.length) { alert('Inicie uma análise primeiro'); return; }
  document.getElementById('inp').value = 'Com base nos dados e análise já realizada, por favor gere um LAUDO NEUROPSICOLÓGICO FORMAL completo, estruturado com as seguintes seções: 1. Identificação do Paciente, 2. Motivo da Avaliação, 3. Instrumentos Utilizados, 4. Observações Comportamentais durante a avaliação, 5. Resultados por Instrumento (tabela de escores), 6. Análise Integrada dos Resultados, 7. Hipóteses Diagnósticas (CID-11/DSM-5-TR), 8. Conclusão Clínica, 9. Recomendações.';
  autoResize(document.getElementById('inp'));
  send();
}

function requestDiag() {
  if (!msgs.length) { alert('Inicie uma análise primeiro'); return; }
  document.getElementById('inp').value = 'Com base nos dados apresentados, elabore um DIAGNÓSTICO DIFERENCIAL detalhado. Para cada hipótese diagnóstica: justifique com os dados específicos, indique os critérios DSM-5-TR ou CID-11 atendidos, e discuta o que confirma e o que enfraquece essa hipótese. Indique também diagnósticos que devem ser excluídos e por quê.';
  autoResize(document.getElementById('inp'));
  send();
}

function requestAnamnese() {
  if (!msgs.length) { alert('Inicie uma análise primeiro'); return; }
  document.getElementById('inp').value = 'Com base no perfil identificado, elabore uma ANAMNESE FUNCIONAL detalhada descrevendo: 1) Como o perfil neuropsicológico se manifesta no cotidiano da pessoa, 2) Impacto nas atividades acadêmicas/profissionais, 3) Impacto nas relações sociais e familiares, 4) Pontos de força que podem ser aproveitados na intervenção, 5) Estratégias compensatórias que o paciente provavelmente já desenvolveu, 6) Áreas prioritárias para intervenção.';
  autoResize(document.getElementById('inp'));
  send();
}

/* ─── WELCOME SCREEN CHIPS ──────────────────────────────────────────────────── */
function setChip(el) {
  const t = el.textContent.replace(/^[^\s]+\s/, '').trim();
  document.getElementById('inp').value = 'Quero analisar o seguinte: ' + t;
  document.getElementById('inp').focus();
}

/* ─── CLEAR CHAT ────────────────────────────────────────────────────────────── */
function clearChat() {
  msgs = [];
  document.getElementById('chat').innerHTML = `
    <div class="welcome" id="welcome">
      <div class="w-orb">🧠</div>
      <h1 class="w-title">Agente Clínico<br><span>NeuroEquilíbrio</span></h1>
      <p class="w-sub">Especializado em todos os instrumentos da bateria NeuroEquilíbrio. Forneça os dados de um ou múltiplos testes e receba análise clínica integrada, diagnóstico diferencial e laudo estruturado.</p>
      <div class="w-badges">
        <div class="w-badge" onclick="setChip(this)">⚡ Perfil TDAH completo</div>
        <div class="w-badge" onclick="setChip(this)">🌈 Avaliação TEA infantil</div>
        <div class="w-badge" onclick="setChip(this)">📖 Bateria de dislexia</div>
        <div class="w-badge" onclick="setChip(this)">🧩 WAIS-III + BPA-2 + RAVLT</div>
        <div class="w-badge" onclick="setChip(this)">👶 Avaliação pré-escolar global</div>
        <div class="w-badge" onclick="setChip(this)">🎭 TEA adulto — RAADS + CAT-Q</div>
      </div>
    </div>`;
}

/* ─── CHAT RENDERING ────────────────────────────────────────────────────────── */
function ts() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function addMsg(role, text) {
  const w = document.getElementById('welcome');
  if (w) w.remove();

  const chat = document.getElementById('chat');
  const d    = document.createElement('div');
  d.className = `msg ${role}`;

  const av  = role === 'user' ? '👤' : '🧠';
  const who = role === 'user' ? 'Você' : 'Dr. NeuroEquilíbrio';

  d.innerHTML = `
    <div class="msg-av">${av}</div>
    <div class="msg-body">
      <div class="msg-hdr">
        <span class="msg-who">${who}</span>
        <span class="msg-ts">${ts()}</span>
      </div>
      <div class="bubble">${fmt(text)}</div>
    </div>`;

  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
  return d.querySelector('.bubble');
}

function showThink() {
  const w = document.getElementById('welcome');
  if (w) w.remove();

  const chat = document.getElementById('chat');
  const d    = document.createElement('div');
  d.className = 'msg ai';
  d.id        = 'think';

  d.innerHTML = `
    <div class="msg-av">🧠</div>
    <div class="msg-body">
      <div class="msg-hdr">
        <span class="msg-who">Dr. NeuroEquilíbrio</span>
        <span class="msg-ts">${ts()}</span>
      </div>
      <div class="thinking">
        <div class="dots"><span></span><span></span><span></span></div>
        Analisando dados clínicos e cruzando instrumentos...
      </div>
    </div>`;

  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
}

function rmThink() {
  const t = document.getElementById('think');
  if (t) t.remove();
}

/* ─── MARKDOWN → HTML ───────────────────────────────────────────────────────── */
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
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g,   '<br>')
    .replace(/^(?!<[hupbco])(.)/,   '<p>$&')
    .replace(/(.)(?!<\/[hup])$/,    '$&</p>');
}

/* ─── INPUT HELPERS ─────────────────────────────────────────────────────────── */
function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 180) + 'px';
}

/* ─── SEND MESSAGE ──────────────────────────────────────────────────────────── */
async function send() {
  const inp = document.getElementById('inp');
  const txt = inp.value.trim();
  if (!txt || busy) return;

  busy = true;
  document.getElementById('sendBtn').disabled = true;
  inp.value = '';
  autoResize(inp);

  addMsg('user', txt);
  showThink();
  msgs.push({ role: 'user', content: txt });

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model:      'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system:     SYSTEM,
        messages:   msgs,
      }),
    });

    const data  = await r.json();
    const reply = data.content?.map(b => b.text || '').join('') || 'Erro na resposta da API.';

    rmThink();
    addMsg('ai', reply);
    msgs.push({ role: 'assistant', content: reply });

  } catch (err) {
    rmThink();
    addMsg('ai', `**Erro de conexão:** ${err.message}\n\nVerifique sua conexão e tente novamente.`);
  }

  busy = false;
  document.getElementById('sendBtn').disabled = false;
}

/* ─── INIT ──────────────────────────────────────────────────────────────────── */
document.querySelectorAll('.sb-section-hdr').forEach(h => {
  if (h.classList.contains('open')) {
    h.nextElementSibling.classList.add('open');
  }
});
