import React, { useEffect, useRef } from 'react';
import { CONFIG } from '../config';

export type LegalModalType = 'privacy' | 'terms' | 'cookies' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Trap focus and handle ESC key
  useEffect(() => {
    if (!type) return;

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl bg-[#091733] border-2 border-cyan-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,210,255,0.2)] text-white overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-cyan-400/20 bg-[#050E22]/90">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
            <h2 id="legal-modal-title" className="text-base sm:text-lg font-bold font-serif text-white tracking-wide">
              {type === 'privacy' && 'Política de Privacidade (LGPD)'}
              {type === 'terms' && 'Termos de Uso do Biosite'}
              {type === 'cookies' && 'Política de Cookies & Rastreamento'}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 text-[#C9CED6] hover:text-white border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label="Fechar janela de termos legais"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-6 text-sm text-[#C9CED6] leading-relaxed space-y-5 selection:bg-cyan-400 selection:text-black">
          
          {/* Metadata Stamp */}
          <div className="p-3.5 rounded-xl bg-[#050E22] border border-cyan-400/20 text-xs font-mono text-cyan-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span>Última atualização: {CONFIG.legal.lastUpdated}</span>
            <span>Versão: 1.2 (Conforme Lei nº 13.709/2018 - LGPD)</span>
          </div>

          {/* =========================================================================
              1. POLÍTICA DE PRIVACIDADE
              ========================================================================= */}
          {type === 'privacy' && (
            <div className="space-y-4">
              <section className="space-y-2">
                <h3 className="text-base font-bold text-white font-serif">1. Identificação do Controlador de Dados</h3>
                <p>
                  Esta Política de Privacidade aplica-se ao biosite oficial da <strong>{CONFIG.brand.name}</strong>, disponibilizado para facilitar o acesso do público e dos clientes aos canais de contato, localização e agendamento.
                </p>
                <div className="p-3 rounded-lg bg-[#050E22]/80 border border-white/10 text-xs space-y-1">
                  <p><strong>Razão Social / Nome:</strong> {CONFIG.legal.companyName}</p>
                  <p><strong>CNPJ / CPF:</strong> {CONFIG.legal.document}</p>
                  <p><strong>Endereço físico:</strong> {CONFIG.legal.address}</p>
                  <p><strong>Canal de Contato do Titular / DPO:</strong> <a href={`mailto:${CONFIG.legal.contactEmail}`} className="text-cyan-300 underline">{CONFIG.legal.contactEmail}</a></p>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white font-serif">2. Princípio da Minimização & Dados Coletados</h3>
                <p>
                  Este site opera de forma <strong>estática e estritamente informativa</strong>. Nós <strong>não</strong> coletamos formulários com dados pessoais invasivos, nomes de cartão de crédito, senhas pessoais ou dados sensíveis através desta página.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>Dados de Conexão Técnicos:</strong> Registros padrão de rede (endereço IP e data/hora) gerados na camada de hospedagem estática (Vercel) exclusivamente para fins de integridade de segurança, mitigação de ataques DDoS e conformidade legal (Marco Civil da Internet, Lei nº 12.965/2014).</li>
                  <li><strong>Armazenamento Local (localStorage):</strong> Apenas a preferência do usuário sobre o aceite do aviso de privacidade (chave <code>af_cookie_consent</code>), armazenada exclusivamente no seu próprio navegador.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white font-serif">3. Serviços de Terceiros e Links Externos</h3>
                <p>
                  Ao clicar em nossos botões, você é direcionado diretamente para plataformas externas de terceiros, que possuem suas próprias políticas de privacidade e termos de serviço:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#050E22] border border-white/10">
                    <strong className="text-white">AppBarber (Agendamento):</strong> Plataforma especializada onde você agenda seus serviços com profissionais, escolhe horários e efetua o gerenciamento do seu atendimento.
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#050E22] border border-white/10">
                    <strong className="text-white">WhatsApp (Meta Inc.):</strong> Abertura de conversa direta no aplicativo para mensagens voluntárias e atendimento ao cliente.
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#050E22] border border-white/10">
                    <strong className="text-white">Instagram (Meta Inc.):</strong> Visualização de fotos de cortes, cortes em alta e novidades do perfil oficial.
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#050E22] border border-white/10">
                    <strong className="text-white">Google Maps & Google Reviews (Google LLC):</strong> Traçado de rotas e consulta/publicação de opiniões de clientes.
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#050E22] border border-white/10">
                    <strong className="text-white">Waze, Uber & 99:</strong> Aplicativos de mobilidade urbana abertos para traçar rota ou solicitar transporte até o nosso endereço físico.
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white font-serif">4. Canal para Exercício dos Direitos do Titular (Art. 18 da LGPD)</h3>
                <p>
                  Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), todo titular de dados tem o direito de solicitar: confirmação da existência de tratamento, acesso, correção de dados incompletos ou inexatos, eliminação ou revogação de consentimento.
                </p>
                <p>
                  Para exercer qualquer desses direitos ou esclarecer dúvidas sobre privacidade, envie um e-mail para: <strong className="text-white">{CONFIG.legal.contactEmail}</strong> com o assunto "Direitos do Titular - LGPD". Responderemos sem custos no prazo legal estabelecido pela ANPD.
                </p>
              </section>
            </div>
          )}

          {/* =========================================================================
              2. TERMOS DE USO
              ========================================================================= */}
          {type === 'terms' && (
            <div className="space-y-4">
              <section className="space-y-2">
                <h3 className="text-base font-bold text-white font-serif">1. Objeto & Finalidade do Biosite</h3>
                <p>
                  Este site tem por finalidade disponibilizar um diretório digital oficial e prático com os links de contato, redes sociais, endereço físico e agendamento da <strong>{CONFIG.brand.name}</strong>.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white font-serif">2. Caráter Informativo de Horários e Preços</h3>
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs leading-relaxed">
                  <strong>Aviso Importante:</strong> Todos os horários de atendimento, disponibilidades de vagas de profissionais, preços e pacotes exibidos ou citados neste biosite possuem <strong>caráter estritamente informativo</strong>. O agendamento formal, bem como valores vigentes e confirmação de reserva, são processados e confirmados exclusivamente através da plataforma parceira oficial (AppBarber) ou confirmação direta via WhatsApp.
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white font-serif">3. Propriedade Intelectual & Marcas</h3>
                <p>
                  A marca, logotipo, emblema com navalha e identidade visual da barbearia são de uso exclusivo da {CONFIG.brand.name}. Os logotipos de plataformas parceiras (WhatsApp, Instagram, Google, Waze, Uber, 99 e AppBarber) pertencem aos seus respectivos titulares de direitos e são aqui citados apenas para identificação dos canais oficiais de comunicação e transporte.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white font-serif">4. Conexão Wi-Fi para Clientes</h3>
                <p>
                  As credenciais de Wi-Fi exibidas destinam-se ao uso de cortesia por clientes presentes nas dependências físicas da barbearia, ficando expressamente vedada sua utilização para atividades ilegais ou em desacordo com as leis vigentes.
                </p>
              </section>
            </div>
          )}

          {/* =========================================================================
              3. POLÍTICA DE COOKIES & RASTREADORES
              ========================================================================= */}
          {type === 'cookies' && (
            <div className="space-y-4">
              <section className="space-y-2">
                <h3 className="text-base font-bold text-white font-serif">1. O que são Cookies?</h3>
                <p>
                  Cookies são pequenos arquivos de texto enviados pelo servidor ao navegador do seu dispositivo para permitir a navegação correta e lembrar certas preferências de uso.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white font-serif">2. Auditoria de Scripts e Rastreadores Deste Site</h3>
                <p>
                  Em conformidade com a transparência da LGPD, realizamos uma revisão completa do código-fonte deste site. <strong>Não utilizamos</strong> cookies de publicidade direcionada, Meta Pixel ou ferramentas intrusivas de fingerprinting:
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-lg bg-[#050E22] border border-cyan-400/20">
                    <div className="flex items-center justify-between pb-1 border-b border-white/10 mb-1.5">
                      <strong className="text-white">localStorage: af_cookie_consent</strong>
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">Essencial / Técnico</span>
                    </div>
                    <p><strong>Finalidade:</strong> Memorizar se o visitante já aceitou ou recusou o aviso de cookies para não reabrir o aviso a cada carregamento de página.</p>
                    <p><strong>Dados coletados:</strong> String ('accepted' ou 'rejected') e timestamp ISO.</p>
                    <p><strong>Duração:</strong> Permanente até a limpeza manual do cache pelo usuário.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#050E22] border border-white/10">
                    <div className="flex items-center justify-between pb-1 border-b border-white/10 mb-1.5">
                      <strong className="text-white">Fontes & Ícones</strong>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">Livre de Rastreamento</span>
                    </div>
                    <p><strong>Finalidade:</strong> Todos os ícones 3D (WhatsApp, Instagram, Google, Calendário, Wi-Fi, etc.) são componentes vetoriais SVG renderizados localmente no código cliente, sem qualquer comunicação externa ou envio de dados.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white font-serif">3. Como Gerenciar ou Excluir Cookies</h3>
                <p>
                  Você pode a qualquer momento apagar os cookies e armazenamentos locais através das opções de privacidade e histórico nas configurações do seu navegador (Google Chrome, Safari, Firefox, Edge, etc.).
                </p>
              </section>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 border-t border-cyan-400/20 bg-[#050E22]/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-[#C9CED6]/80">
            Dúvidas legais? Fale com <span className="text-white font-mono">{CONFIG.legal.contactEmail}</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Entendido e fechar
          </button>
        </div>

      </div>
    </div>
  );
};
