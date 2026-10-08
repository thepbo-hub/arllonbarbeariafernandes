import React, { useState, useRef } from 'react';
import {
  WhatsApp3DIcon,
  Instagram3DIcon,
  Google3DIcon,
  Calendar3DIcon,
  Wifi3DIcon,
  Maps3DIcon,
  Waze3DIcon,
  Uber3DIcon,
  App993DIcon,
  Copy3DIcon,
} from './components/3DIcons';
import { ScrollReveal } from './components/ScrollReveal';
import { Toast } from './components/Toast';
import { TechLogoWithGlow } from './components/TechLogoWithGlow';
import { copyToClipboard } from './utils/clipboard';

/**
 * =========================================================================
 * OBJETO DE CONFIGURAÇÃO CENTRALIZADO (CONFIG)
 * =========================================================================
 * Altere facilmente qualquer texto, link, dados do Wi-Fi ou endereço abaixo.
 * Todos os elementos do biosite são gerados a partir deste objeto.
 * =========================================================================
 */
export const CONFIG = {
  // 1. Informações da Barbearia & Topo
  brandName: "Arllon Fernandes Barbearia",
  tagline: "Tradição, cuidado e estilo em cada detalhe.",
  subTagline: "Sua imagem, nosso compromisso",
  logoUrl: "https://i.postimg.cc/9f9gyfcT/Emblema-Azul-com-Navalha-Branca.png",

  // 2. Agendamento (Botão de Destaque Máximo)
  booking: {
    title: "Agendar horário",
    subtitle: "Escolha seu profissional e horário em poucos cliques",
    badge: "HORÁRIOS DISPONÍVEIS EM TEMPO REAL",
    url: "https://sites.appbarber.com.br/arllonfernandesbarbeariao?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAachB_VDveTB78O-0_afcGQUGfpLSDUB7o7S-JQQWVRN1X78SdbSwG5JyTt0GQ_aem_lbWSWM9Xk6IuavenbLUKEA",
  },

  // 3. Botões de Contato (Nesta ordem exata)
  contacts: {
    whatsapp: {
      title: "Chamar no WhatsApp",
      subtitle: "Atendimento direto com a equipe",
      tag: "ONLINE",
      url: "https://wa.link/b6b88i",
    },
    instagram: {
      title: "Siga no Instagram",
      subtitle: "@arllonfernandesbarbearia",
      tag: "OFICIAL",
      url: "https://www.instagram.com/arllonfernandesbarbearia?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    },
    googleReviews: {
      title: "Avalie-nos no Google",
      subtitle: "5.0 ★ Avaliações verificadas de clientes",
      tag: "5.0 ★★★★★",
      url: "https://search.google.com/local/writereview?placeid=ChIJ57LeZEB_mQAR_BxLhX7Qivo",
    },
    wifi: {
      title: "Wi-Fi para clientes",
      subtitle: "Rede 5G ultrarrápida gratuita",
      tag: "ACESSO LIVRE",
    },
  },

  // 4. Dados do Wi-Fi para Clientes (Edite aqui)
  wifiName: "NOME_DA_REDE",
  wifiPassword: "SENHA_DA_REDE",
  wifiInstructions: "Copie a senha e cole nas configurações de Wi-Fi do seu celular.",

  // 5. Localização & Rotas de Transporte
  location: {
    title: "Onde estamos",
    coordinates: "RIO COMPRIDO • 22°55'17\"S 43°12'29\"W",
    addressFull: "Rua Campos da Paz, 46, Rio Comprido, Rio de Janeiro - RJ, CEP 20250-460",
    addressShort: "Rua Campos da Paz, 46 - Rio Comprido, Rio de Janeiro - RJ",
    addressForCopy: "Rua Campos da Paz, 46, Rio Comprido, Rio de Janeiro - RJ",
    
    // Links de navegação e transporte
    googleMapsUrl: "https://maps.app.goo.gl/cZwtinJrbxXNQ1tx7",
    googleMapsRouteUrl: "https://www.google.com/maps/dir/?api=1&destination=Rua+Campos+da+Paz+46+Rio+Comprido+Rio+de+Janeiro+RJ",
    wazeUrl: "https://waze.com/ul?q=Rua%20Campos%20da%20Paz%2046%20Rio%20Comprido%20Rio%20de%20Janeiro&navigate=yes",
    uberUrl: "https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[nickname]=Arllon%20Fernandes%20Barbearia&dropoff[formatted_address]=Rua%20Campos%20da%20Paz%2C%2046%2C%20Rio%20Comprido%2C%20Rio%20de%20Janeiro",
    app99Url: "https://99app.com",
  },

  // 6. Rodapé
  footer: {
    copyright: "© Arllon Fernandes Barbearia",
    rights: "Todos os direitos reservados.",
    taglineShort: "Precisão cirúrgica, estética masculina refinada.",
  },
};

export default function App() {
  const [wifiExpanded, setWifiExpanded] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger copy feedback toast
  const handleCopy = async (text: string, label: string, key: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedKey(key);
      setToastMessage(`${label} copiada com sucesso!`);

      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }

      toastTimeoutRef.current = setTimeout(() => {
        setCopiedKey(null);
        setToastMessage(null);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-tech-grid text-white flex flex-col items-center justify-start px-4 py-6 sm:py-10 relative selection:bg-[#00D2FF] selection:text-[#050B17] overflow-x-hidden">
      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Cybernetic High-Tech Ambient Beam Highlights */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[480px] bg-gradient-to-b from-[#00D2FF]/20 via-[#1E4FA3]/25 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-[#00D2FF]/10 blur-[120px] pointer-events-none -z-10" />

      {/* Tech Top Accent Bar (Laser Hairline) */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D2FF]/80 to-transparent z-40 pointer-events-none" />

      {/* Main Single Vertical Column Container (Mobile-first, max-w-md on mobile/desktop) */}
      <main className="w-full max-w-md mx-auto flex flex-col gap-6 sm:gap-7 z-10">

        {/* =========================================================================
            1. TOPO / APRESENTAÇÃO (Com Luz Volumétrica, Brilho de Lâmina e Aura Neon)
            ========================================================================= */}
        <header className="flex flex-col items-center text-center pt-1 pb-1">
          
          {/* Logo COM LUZ / BRILHO / EFEITO DE NAVALHA TECNOLÓGICA */}
          <ScrollReveal delay={0}>
            <TechLogoWithGlow
              logoUrl={CONFIG.logoUrl}
              brandName={CONFIG.brandName}
            />
          </ScrollReveal>

          {/* Nome da Barbearia & Frases de Apresentação */}
          <ScrollReveal delay={100}>
            <div className="mt-2 space-y-2.5">
              
              {/* Micro Status Chip Tecnológico */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2857]/60 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-cyan-200">
                  EXCELÊNCIA & ALTA PERFORMANCE
                </span>
              </div>

              {/* Título com Gradiente Metálico Platina / Safira */}
              <h1 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight bg-gradient-to-b from-white via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                {CONFIG.brandName}
              </h1>
              
              {/* Hairline Divider com Marcadores Cibernéticos */}
              <div className="flex items-center justify-center gap-3 py-1">
                <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                <div className="w-1.5 h-1.5 rotate-45 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              </div>

              {/* Frases Oficiais */}
              <p className="text-sm sm:text-base text-[#E2E8F0] font-medium leading-relaxed max-w-xs mx-auto drop-shadow-sm">
                {CONFIG.tagline}
              </p>
              <p className="text-xs sm:text-sm text-cyan-200/90 font-mono tracking-wide">
                "{CONFIG.subTagline}"
              </p>
            </div>
          </ScrollReveal>
        </header>


        {/* =========================================================================
            2. AGENDAMENTO (BOTÃO DE DESTAQUE MÁXIMO - CYBER-LUXURY)
            ========================================================================= */}
        <section className="w-full">
          <ScrollReveal delay={180}>
            <a
              href={CONFIG.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar horário na Arllon Fernandes Barbearia"
              className="group relative flex items-center justify-between w-full min-h-[82px] sm:min-h-[88px] p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(0,210,255,0.45)] hover:shadow-[0_0_45px_rgba(0,210,255,0.75)] animate-luxury-pulse transition-all duration-300 hover:scale-[1.025] active:scale-[0.98] focus:outline-none"
            >
              {/* Inner High-Tech Button Surface */}
              <div className="relative flex items-center justify-between w-full h-full px-5 sm:px-6 py-4 rounded-[14px] bg-gradient-to-r from-[#0d2757] via-[#103375] to-[#0d2757] overflow-hidden">
                
                {/* Shimmer Light Reflection Sweep */}
                <div 
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-shimmer"
                  aria-hidden="true"
                />

                {/* Laser Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-300 rounded-tl-md pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-300 rounded-br-md pointer-events-none" />

                {/* Left Side: 3D Calendar Icon with Glowing Hologram Time */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative">
                    <Calendar3DIcon
                      size={56}
                      className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_0_18px_rgba(0,210,255,0.6)]"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0A1F44] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl font-bold font-serif tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {CONFIG.booking.title}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-cyan-200 font-medium block">
                      {CONFIG.booking.subtitle}
                    </span>
                    <span className="text-[10px] text-emerald-300 font-mono tracking-wider uppercase block mt-0.5">
                      ● {CONFIG.booking.badge}
                    </span>
                  </div>
                </div>

                {/* Right Side: High-Voltage Arrow Orb */}
                <div className="relative z-10 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-blue-600/30 backdrop-blur-md border border-cyan-300/60 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-400 group-hover:text-[#050B17]">
                  <svg
                    className="w-5 h-5 text-cyan-200 group-hover:text-[#050B17] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

              </div>
            </a>
          </ScrollReveal>
        </section>


        {/* =========================================================================
            3. BOTÕES DE CONTATO (ESTILO CYBER-MASCULINO)
            Ordem exata: WhatsApp, Instagram, Google Avaliações, Wi-Fi
            ========================================================================= */}
        <section className="flex flex-col gap-3.5 w-full">

          {/* a) WhatsApp */}
          <ScrollReveal delay={260}>
            <a
              href={CONFIG.contacts.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chamar no WhatsApp"
              className="group tech-card tech-corner flex items-center justify-between w-full min-h-[66px] px-4 sm:px-5 py-3.5 rounded-2xl cursor-pointer focus:outline-none hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(37,211,102,0.35)]"
            >
              <div className="flex items-center gap-3.5">
                <WhatsApp3DIcon
                  size={48}
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors block">
                      {CONFIG.contacts.whatsapp.title}
                    </span>
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                      {CONFIG.contacts.whatsapp.tag}
                    </span>
                  </div>
                  <span className="text-xs text-[#C9CED6] font-normal block">
                    {CONFIG.contacts.whatsapp.subtitle}
                  </span>
                </div>
              </div>

              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-emerald-500/30 group-hover:border-emerald-400 group-hover:translate-x-1">
                <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </ScrollReveal>

          {/* b) Instagram */}
          <ScrollReveal delay={340}>
            <a
              href={CONFIG.contacts.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga no Instagram"
              className="group tech-card tech-corner flex items-center justify-between w-full min-h-[66px] px-4 sm:px-5 py-3.5 rounded-2xl cursor-pointer focus:outline-none hover:border-pink-400/60 hover:shadow-[0_0_25px_rgba(225,48,108,0.35)]"
            >
              <div className="flex items-center gap-3.5">
                <Instagram3DIcon
                  size={48}
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_0_15px_rgba(225,48,108,0.4)]"
                />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white group-hover:text-pink-300 transition-colors block">
                      {CONFIG.contacts.instagram.title}
                    </span>
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-400/40">
                      {CONFIG.contacts.instagram.tag}
                    </span>
                  </div>
                  <span className="text-xs text-[#C9CED6] font-normal block">
                    {CONFIG.contacts.instagram.subtitle}
                  </span>
                </div>
              </div>

              <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-400/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-pink-500/30 group-hover:border-pink-400 group-hover:translate-x-1">
                <svg className="w-4 h-4 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </ScrollReveal>

          {/* c) Google Avaliações */}
          <ScrollReveal delay={420}>
            <a
              href={CONFIG.contacts.googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Avalie-nos no Google"
              className="group tech-card tech-corner flex items-center justify-between w-full min-h-[66px] px-4 sm:px-5 py-3.5 rounded-2xl cursor-pointer focus:outline-none hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(251,188,4,0.3)]"
            >
              <div className="flex items-center gap-3.5">
                <Google3DIcon
                  size={48}
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white group-hover:text-amber-300 transition-colors block">
                      {CONFIG.contacts.googleReviews.title}
                    </span>
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40">
                      {CONFIG.contacts.googleReviews.tag}
                    </span>
                  </div>
                  <span className="text-xs text-[#C9CED6] font-normal block">
                    {CONFIG.contacts.googleReviews.subtitle}
                  </span>
                </div>
              </div>

              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-400/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-amber-500/30 group-hover:border-amber-400 group-hover:translate-x-1">
                <svg className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </ScrollReveal>

          {/* d) Wi-Fi para clientes (ao clicar, expande o cartão abaixo) */}
          <ScrollReveal delay={500}>
            <button
              type="button"
              onClick={() => setWifiExpanded((prev) => !prev)}
              aria-expanded={wifiExpanded}
              aria-controls="wifi-details-card"
              className={`group tech-card tech-corner flex items-center justify-between w-full min-h-[66px] px-4 sm:px-5 py-3.5 rounded-2xl cursor-pointer transition-all duration-300 ${
                wifiExpanded
                  ? 'border-cyan-400 bg-[#0d2a5c] shadow-[0_0_30px_rgba(0,210,255,0.45)]'
                  : 'hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(0,210,255,0.35)]'
              } focus:outline-none`}
            >
              <div className="flex items-center gap-3.5">
                <Wifi3DIcon
                  size={48}
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_0_15px_rgba(0,210,255,0.5)]"
                />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors block">
                      {CONFIG.contacts.wifi.title}
                    </span>
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                      {CONFIG.contacts.wifi.tag}
                    </span>
                  </div>
                  <span className="text-xs text-[#C9CED6] font-normal block">
                    {wifiExpanded ? 'Toque para recolher chave de rede' : CONFIG.contacts.wifi.subtitle}
                  </span>
                </div>
              </div>

              {/* Expand / Collapse Indicator with Cyber Glow */}
              <div className={`w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                wifiExpanded ? 'rotate-180 bg-cyan-500/30 border-cyan-400 shadow-[0_0_12px_#22d3ee]' : 'group-hover:bg-cyan-500/20'
              }`}>
                <svg className="w-4 h-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
          </ScrollReveal>


          {/* =========================================================================
              4. WI-FI CARD (EXPANDÍVEL COM VISUAL CYBER-TERMINAL)
              ========================================================================= */}
          {wifiExpanded && (
            <div
              id="wifi-details-card"
              className="overflow-hidden transition-all duration-400 ease-out"
            >
              <div className="p-4 sm:p-5 rounded-2xl bg-[#091733]/95 border-2 border-cyan-400/40 shadow-[0_0_35px_rgba(0,210,255,0.25),inset_0_1px_2px_rgba(255,255,255,0.2)] backdrop-blur-xl space-y-3.5 animate-in fade-in slide-in-from-top-3 duration-300 relative">
                
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between pb-2 border-b border-cyan-400/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">
                      TERMINAL DE ACESSO WI-FI
                    </span>
                  </div>
                  
                  {/* Signal Strength Indicator */}
                  <div className="flex items-end gap-1 h-3.5" title="Sinal 100%">
                    <div className="w-1 h-1.5 rounded-xs bg-cyan-400" />
                    <div className="w-1 h-2 rounded-xs bg-cyan-400" />
                    <div className="w-1 h-2.5 rounded-xs bg-cyan-400" />
                    <div className="w-1 h-3.5 rounded-xs bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                  </div>
                </div>

                {/* Rede */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#050E22] border border-cyan-400/25 shadow-inner">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-cyan-300 font-mono tracking-wider uppercase">SSID / REDE</span>
                    <span className="text-sm sm:text-base font-bold text-white font-mono tracking-wide">
                      {CONFIG.wifiName}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(CONFIG.wifiName, 'Nome da rede', 'wifi-name')}
                    aria-label="Copiar nome da rede Wi-Fi"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white border border-cyan-300/40 text-xs font-semibold transition-all duration-200 active:scale-95 shadow-[0_0_12px_rgba(0,210,255,0.25)]"
                  >
                    <Copy3DIcon size={15} copied={copiedKey === 'wifi-name'} />
                    <span>{copiedKey === 'wifi-name' ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>

                {/* Senha */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#050E22] border border-cyan-400/25 shadow-inner">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-cyan-300 font-mono tracking-wider uppercase">PASSWORD / SENHA</span>
                    <span className="text-sm sm:text-base font-bold text-white font-mono tracking-wide">
                      {CONFIG.wifiPassword}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(CONFIG.wifiPassword, 'Senha do Wi-Fi', 'wifi-pass')}
                    aria-label="Copiar senha da rede Wi-Fi"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white border border-emerald-300/50 text-xs font-semibold transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                  >
                    <Copy3DIcon size={15} copied={copiedKey === 'wifi-pass'} />
                    <span>{copiedKey === 'wifi-pass' ? 'Copiada!' : 'Copiar'}</span>
                  </button>
                </div>

                {/* Texto de apoio */}
                <p className="text-xs text-[#C9CED6] text-center pt-1 leading-relaxed font-sans">
                  {CONFIG.wifiInstructions}
                </p>
              </div>
            </div>
          )}

        </section>


        {/* =========================================================================
            5. LOCALIZAÇÃO (RADAR HUD & ROTAS DE TRANSPORTE - SEM MAPA EMBUTIDO)
            ========================================================================= */}
        <section className="w-full pt-2">
          <ScrollReveal delay={180}>
            <div className="p-5 sm:p-6 rounded-2xl tech-card tech-corner border-cyan-400/25 space-y-5">
              
              {/* Radar HUD Header */}
              <div className="text-center space-y-2 relative">
                
                {/* HUD Coordenadas */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#050E22] border border-cyan-400/30 font-mono text-[10px] text-cyan-300 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>{CONFIG.location.coordinates}</span>
                </div>

                <div className="flex items-center justify-center gap-2 pt-1">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                    {CONFIG.location.title}
                  </h2>
                </div>

                <p className="text-sm text-[#C9CED6] leading-relaxed max-w-xs mx-auto">
                  {CONFIG.location.addressFull}
                </p>
              </div>

              {/* Botão Principal: Ver no Google Maps com Laser Border */}
              <a
                href={CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver barbearia no Google Maps"
                className="group relative flex items-center justify-center gap-3 w-full min-h-[52px] px-4 py-3 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 border-2 border-cyan-400/50 text-white font-bold text-sm sm:text-base shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,210,255,0.6)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Maps3DIcon size={30} />
                <span>Ver no Google Maps</span>
              </a>

              {/* Botão: Traçar rota no Google Maps */}
              <a
                href={CONFIG.location.googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Traçar rota no Google Maps"
                className="group flex items-center justify-center gap-2.5 w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-[#091733] hover:bg-[#0d2757] border border-cyan-400/30 text-white font-medium text-xs sm:text-sm transition-all duration-200 hover:border-cyan-400/60 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <svg className="w-4 h-4 text-cyan-300 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Traçar rota no Google Maps</span>
              </a>

              {/* Divisória para os Apps de Transporte */}
              <div className="pt-1">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-400/30" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-semibold px-2">
                    ROTEAMENTO & APPS
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-400/30" />
                </div>

                {/* Grade 2x2 no Celular para Apps de Transporte */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Ir com Waze */}
                  <a
                    href={CONFIG.location.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ir com aplicativo Waze"
                    className="group flex items-center gap-2.5 p-3 rounded-xl bg-[#050E22]/90 hover:bg-[#0d2757] border border-cyan-400/20 hover:border-cyan-400 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
                  >
                    <Waze3DIcon size={32} />
                    <div className="text-left leading-tight">
                      <span className="text-[10px] text-[#C9CED6] font-mono block">NAVEGAR COM</span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        Waze
                      </span>
                    </div>
                  </a>

                  {/* Ir com Uber */}
                  <a
                    href={CONFIG.location.uberUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pedir Uber com destino à barbearia"
                    className="group flex items-center gap-2.5 p-3 rounded-xl bg-[#050E22]/90 hover:bg-[#0d2757] border border-slate-700 hover:border-slate-400 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
                  >
                    <Uber3DIcon size={32} />
                    <div className="text-left leading-tight">
                      <span className="text-[10px] text-[#C9CED6] font-mono block">CHAMAR</span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-slate-200 transition-colors">
                        Uber
                      </span>
                    </div>
                  </a>

                  {/* Ir com 99 */}
                  <a
                    href={CONFIG.location.app99Url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir aplicativo 99"
                    className="group flex items-center gap-2.5 p-3 rounded-xl bg-[#050E22]/90 hover:bg-[#0d2757] border border-amber-500/20 hover:border-amber-400 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
                  >
                    <App993DIcon size={32} />
                    <div className="text-left leading-tight">
                      <span className="text-[10px] text-[#C9CED6] font-mono block">PEDIR NO</span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        App 99
                      </span>
                    </div>
                  </a>

                  {/* Copiar Endereço (ao lado da 99 para colar no app) */}
                  <button
                    type="button"
                    onClick={() => handleCopy(CONFIG.location.addressForCopy, 'Endereço', 'location-address')}
                    aria-label="Copiar endereço completo da barbearia"
                    className={`group flex items-center gap-2.5 p-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${
                      copiedKey === 'location-address'
                        ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        : 'bg-[#050E22]/90 hover:bg-[#0d2757] border-cyan-400/20 hover:border-cyan-400 text-white'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0">
                      <Copy3DIcon size={18} copied={copiedKey === 'location-address'} />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="text-[10px] text-[#C9CED6] font-mono block">PARA O APP</span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {copiedKey === 'location-address' ? 'Copiado!' : 'Copiar local'}
                      </span>
                    </div>
                  </button>

                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>


        {/* =========================================================================
            6. RODAPÉ (CYBER-MASCULINO)
            ========================================================================= */}
        <footer className="w-full pt-4 pb-10 text-center">
          <ScrollReveal delay={120}>
            <div className="flex flex-col items-center gap-3">
              {/* Logo pequena com leve brilho */}
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/30 blur-lg rounded-full" />
                <img
                  src={CONFIG.logoUrl}
                  alt="Logo Rodapé"
                  className="w-14 h-auto object-contain opacity-85 hover:opacity-100 transition-opacity relative z-10"
                  loading="lazy"
                />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-serif font-bold tracking-wide text-white">
                  {CONFIG.brandName}
                </p>
                <p className="text-xs font-mono text-cyan-200/70">
                  {CONFIG.footer.taglineShort}
                </p>
                <p className="text-xs text-[#C9CED6]/70">
                  {CONFIG.location.addressShort}
                </p>
              </div>

              <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent my-1" />

              <p className="text-[11px] font-mono text-[#C9CED6]/50">
                {CONFIG.footer.copyright} • {CONFIG.footer.rights}
              </p>
            </div>
          </ScrollReveal>
        </footer>

      </main>
    </div>
  );
}
