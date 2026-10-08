/**
 * =========================================================================
 * ARLLON FERNANDES BARBEARIA - CONFIGURAÇÃO CENTRALIZADA (CONFIG)
 * =========================================================================
 * Todos os textos, links, dados de Wi-Fi e informações da barbearia estão
 * reunidos neste objeto. Altere os valores abaixo conforme sua necessidade.
 * =========================================================================
 */

export const CONFIG = {
  // 1. Identidade e Apresentação
  brand: {
    name: "Arllon Fernandes Barbearia",
    tagline: "Tradição, cuidado e estilo em cada detalhe.",
    subTagline: "Sua imagem, nosso compromisso",
    logoUrl: "https://i.postimg.cc/9f9gyfcT/Emblema-Azul-com-Navalha-Branca.png",
    logoAlt: "Emblema Oficial Arllon Fernandes Barbearia",
  },

  // 2. Agendamento Online (Botão de Destaque Máximo)
  booking: {
    title: "Agendar horário",
    subtitle: "Corte, barba e tratamentos exclusivos",
    badge: "Disponibilidade em tempo real",
    url: "https://sites.appbarber.com.br/arllonfernandesbarbeariao?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAachB_VDveTB78O-0_afcGQUGfpLSDUB7o7S-JQQWVRN1X78SdbSwG5JyTt0GQ_aem_lbWSWM9Xk6IuavenbLUKEA",
  },

  // 3. Botões de Contato (Ordem oficial)
  contacts: {
    whatsapp: {
      title: "Chamar no WhatsApp",
      subtitle: "Atendimento rápido & agendamento direto",
      url: "https://wa.link/b6b88i",
    },
    instagram: {
      title: "Siga no Instagram",
      subtitle: "@arllonfernandesbarbearia",
      url: "https://www.instagram.com/arllonfernandesbarbearia?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    },
    googleReviews: {
      title: "Avalie-nos no Google",
      subtitle: "Avaliações 5 estrelas dos nossos clientes",
      url: "https://search.google.com/local/writereview?placeid=ChIJ57LeZEB_mQAR_BxLhX7Qivo",
    },
    wifi: {
      title: "Wi-Fi para clientes",
      subtitle: "Conecte-se gratuitamente na barbearia",
    },
  },

  // 4. Dados do Wi-Fi para Clientes (Edite aqui o nome e a senha da sua rede)
  wifiName: "NOME_DA_REDE",
  wifiPassword: "SENHA_DA_REDE",
  wifiHelpText: "Copie a senha e cole nas configurações de Wi-Fi do seu celular.",

  // 5. Onde Estamos & Rotas de Transporte
  location: {
    title: "Onde estamos",
    addressFull: "Rua Campos da Paz, 46, Rio Comprido, Rio de Janeiro - RJ, CEP 20250-460",
    addressShort: "Rua Campos da Paz, 46 - Rio Comprido, Rio de Janeiro - RJ",
    addressForClipboard: "Rua Campos da Paz, 46, Rio Comprido, Rio de Janeiro - RJ",
    neighborhood: "Rio Comprido, Rio de Janeiro",
    
    // Links oficiais de mapas e navegação
    googleMapsUrl: "https://maps.app.goo.gl/cZwtinJrbxXNQ1tx7",
    googleMapsRouteUrl: "https://www.google.com/maps/dir/?api=1&destination=Rua+Campos+da+Paz+46+Rio+Comprido+Rio+de+Janeiro+RJ",
    wazeUrl: "https://waze.com/ul?q=Rua%20Campos%20da%20Paz%2046%20Rio%20Comprido%20Rio%20de%20Janeiro&navigate=yes",
    uberUrl: "https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[nickname]=Arllon%20Fernandes%20Barbearia&dropoff[formatted_address]=Rua%20Campos%20da%20Paz%2C%2046%2C%20Rio%20Comprido%2C%20Rio%20de%20Janeiro",
    app99Url: "https://99app.com",
  },

  // 6. Rodapé
  footer: {
    copyright: "© Arllon Fernandes Barbearia",
    allRights: "Todos os direitos reservados.",
    taglineShort: "Excelência e tradição em corte e barba.",
  },
};
