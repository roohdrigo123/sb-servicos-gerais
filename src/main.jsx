import React from 'react'
import { createRoot } from 'react-dom/client'
import { Phone, MessageCircle, Wrench, Zap, Droplets, Paintbrush, Wind, Home, Building2, ShieldCheck, Star, CheckCircle2, Clock, MapPin, CreditCard, ClipboardCheck, Hammer, Sparkles, Menu, X } from 'lucide-react'
import './style.css'

import logo from './assets/logo-sb.jpg'
import img1 from './assets/1002384115.jpg'
import img2 from './assets/1002384110.jpg'
import img3 from './assets/1002384103.jpg'
import img4 from './assets/1002384104.jpg'
import img5 from './assets/1002384116.jpg'
import img6 from './assets/1002362548.jpg'
import img7 from './assets/1002333577.jpg'
import img8 from './assets/1002333570.jpg'
import img9 from './assets/1002333576.jpg'
import img10 from './assets/1002245258.jpg'
import img11 from './assets/1002201265.jpg'
import img12 from './assets/1002201263.jpg'
import img13 from './assets/1002195303.jpg'
import img14 from './assets/1002195306.jpg'
import img15 from './assets/1002195302.jpg'
import img16 from './assets/1002089174.jpg'
import img17 from './assets/1002089175.jpg'
import img18 from './assets/1002089178.jpg'

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const whatsapp = 'https://wa.me/5545984270537'
  const instagram = 'https://www.instagram.com/sb_servicos_gerais?igsh=aGZ6aGdrNWF2Zm8y'

  const services = [
    { icon: <Droplets />, title: 'Desentupimento e Hidráulica', text: 'Ralos, vasos, pias, vazamentos, encanamentos e manutenções emergenciais.' },
    { icon: <Zap />, title: 'Elétrica', text: 'Instalações, reparos, tomadas, iluminação e manutenção elétrica residencial e empresarial.' },
    { icon: <Wind />, title: 'Ar-condicionado', text: 'Instalação, limpeza, manutenção preventiva e corretiva de aparelhos.' },
    { icon: <Paintbrush />, title: 'Pintura e Reformas', text: 'Pinturas, pequenos reparos, reformas completas e acabamentos.' },
    { icon: <Home />, title: 'Jardinagem e Limpeza de Terrenos', text: 'Corte de grama, poda, limpeza de pátios, terrenos e manutenção externa.' },
    { icon: <Sparkles />, title: 'Limpezas Técnicas', text: 'Limpeza pós-obra, limpeza geral, placas solares e estofados.' },
    { icon: <Hammer />, title: 'Construções e Manutenções', text: 'Pequenas e grandes construções, consertos, telhados e manutenção geral.' },
    { icon: <Building2 />, title: 'Atendimento para Empresas', text: 'Soluções para imobiliárias, comércios, condomínios e indústrias.' },
  ]

  const benefits = ['Atendimento residencial e empresarial','Orçamento grátis','Atendimento emergencial 24h','Parcelamento no cartão','Equipe para vários tipos de serviço','Atuação em Medianeira e região']
  const reviews = [
    { name: 'Cliente residencial', text: 'Atendimento rápido, serviço bem feito e preço justo. Resolveram o problema no mesmo dia.' },
    { name: 'Imobiliária parceira', text: 'A SB facilita muito nossa rotina. Uma empresa para vários tipos de manutenção.' },
    { name: 'Empresa local', text: 'Profissionais responsáveis, organizados e com boa comunicação do início ao fim.' },
  ]
  const gallery = [
    { src: img1, title: 'Manutenção externa', category: 'Reparos e obra' },
    { src: img2, title: 'Correção de calçada', category: 'Manutenção predial' },
    { src: img3, title: 'Reparo em piso', category: 'Serviço externo' },
    { src: img4, title: 'Serviço em entrada', category: 'Reparos gerais' },
    { src: img5, title: 'Limpeza e remoção', category: 'Área externa' },
    { src: img6, title: 'Desentupimento', category: 'Hidráulica emergencial' },
    { src: img7, title: 'Vedação em telhado', category: 'Conserto de telhado' },
    { src: img8, title: 'Reparo de cobertura', category: 'Telhados' },
    { src: img9, title: 'Manutenção em telha', category: 'Infiltração e vedação' },
    { src: img10, title: 'Colocação de grama', category: 'Jardinagem' },
    { src: img11, title: 'Limpeza de estofado', category: 'Estofados' },
    { src: img12, title: 'Higienização de sofá', category: 'Limpeza profissional' },
    { src: img13, title: 'Perfurador de solo', category: 'Equipamentos' },
    { src: img14, title: 'Equipamento profissional', category: 'Serviços externos' },
    { src: img15, title: 'Perfuração de solo', category: 'Ferramentas profissionais' },
    { src: img16, title: 'Limpeza de sofá retrátil', category: 'Estofados' },
    { src: img17, title: 'Higienização residencial', category: 'Limpeza de estofados' },
    { src: img18, title: 'Serviço de limpeza', category: 'Residencial' },
  ]

  return <div className="site">
    <header className="topbar">
      <div className="container nav">
        <a className="brand" href="#"><img src={logo} alt="Logo SB Serviços Gerais" /><div><strong>SB Serviços Gerais</strong><span>Medianeira e região</span></div></a>
        <nav className="desktop"><a href="#servicos">Serviços</a><a href="#galeria">Serviços realizados</a><a href="#empresas">Empresas</a><a href="#avaliacoes">Avaliações</a><a href="#contato">Contato</a></nav>
        <a className="btn blue desktopBtn" href={whatsapp} target="_blank"><MessageCircle /> WhatsApp</a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <div className="mobile"><a href="#servicos">Serviços</a><a href="#galeria">Serviços realizados</a><a href="#empresas">Empresas</a><a href="#avaliacoes">Avaliações</a><a href="#contato">Contato</a></div>}
    </header>

    <main>
      <section className="hero">
        <div className="glow"></div>
        <div className="container heroGrid">
          <div className="heroText">
            <div className="tag"><ShieldCheck/> Empresa completa para manutenção e serviços gerais</div>
            <h1>Soluções rápidas para sua casa ou empresa.</h1>
            <p>A SB Serviços Gerais atende Medianeira e região com manutenção, elétrica, hidráulica, desentupimento, reformas, limpeza técnica, jardinagem, ar-condicionado e muito mais.</p>
            <div className="actions"><a href={whatsapp} target="_blank" className="btn red"><MessageCircle/> Solicitar orçamento grátis</a><a href="tel:+5545984270537" className="btn outline"><Phone/> 45 98427-0537</a><a href={instagram} target="_blank" className="btn outline">◎ Instagram</a></div>
            <div className="badges"><span><Clock/> Atendimento 24h</span><span><CreditCard/> Parcelamos</span><span><MapPin/> Medianeira/PR</span></div>
          </div>
          <div className="heroCard"><img src={logo} alt="SB Serviços Gerais"/><h2>Serviços Gerais</h2><p>Manutenção • Reformas • Limpezas • Emergências</p><div className="chips"><span>Imobiliárias</span><span>Empresas</span><span>Residências</span><span>Condomínios</span></div></div>
        </div>
      </section>

      <section id="servicos" className="section container"><div className="sectionTitle"><span>Nossos serviços</span><h2>Uma empresa para resolver tudo.</h2><p>Você não precisa procurar vários profissionais. A SB centraliza as principais soluções para manutenção, limpeza, reformas e emergências.</p></div><div className="cards">{services.map(s => <article className="card" key={s.title}><div className="icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></section>

      <section className="why"><div className="container whyGrid"><div><span>Por que escolher a SB?</span><h2>Atendimento rápido, completo e profissional.</h2><p>Nosso objetivo é simplificar a vida do cliente: você chama uma empresa e recebe solução para diferentes tipos de serviços.</p></div><div className="benefits">{benefits.map(b => <div key={b}><CheckCircle2/> {b}</div>)}</div></div></section>

      <section id="galeria" className="section container"><div className="sectionTitle"><span>Serviços realizados</span><h2>Trabalhos reais da SB Serviços Gerais.</h2><p>Registros de manutenção, reparos, desentupimento, telhado, área externa, limpeza de estofados e jardinagem.</p></div><div className="gallery">{gallery.map(g => <article className="photo" key={g.title}><img src={g.src} alt={g.title}/><div><span>{g.category}</span><h3>{g.title}</h3></div></article>)}</div></section>

      <section id="empresas" className="section container"><div className="business"><article><Building2/><h2>Parcerias para empresas e imobiliárias</h2><p>A SB atende demandas recorrentes de manutenção, reparos e serviços gerais para imobiliárias, comércios, condomínios e empresas que precisam de agilidade.</p><ul><li><ClipboardCheck/> Manutenções em imóveis alugados</li><li><ClipboardCheck/> Serviços avulsos ou recorrentes</li><li><ClipboardCheck/> Atendimento residencial, comercial e empresarial</li></ul></article><article className="redBox"><Wrench/><h2>Contrate com segurança</h2><p>Do orçamento até a finalização, buscamos comunicação clara, organização, responsabilidade e entrega profissional.</p><div><strong>Orçamento gratuito</strong><p>Chame agora e explique o serviço que precisa.</p></div></article></div></section>

      <section id="avaliacoes" className="reviews"><div className="container"><div className="sectionTitle center"><span>Confiança</span><h2>O que clientes dizem</h2></div><div className="reviewGrid">{reviews.map(r => <article className="review" key={r.name}><div>{[1,2,3,4,5].map(i => <Star key={i} className="star"/>)}</div><p>“{r.text}”</p><strong>{r.name}</strong></article>)}</div></div></section>

      <section id="contato" className="cta"><div className="container"><h2>Precisa de um serviço?</h2><p>Fale com a SB Serviços Gerais e solicite um orçamento gratuito. Atendimento em Medianeira e região.</p><div className="actions centerActions"><a href={whatsapp} target="_blank" className="btn blue"><MessageCircle/> Chamar no WhatsApp</a><a href="tel:+5545984270537" className="btn outline"><Phone/> Ligar agora</a><a href={instagram} target="_blank" className="btn outline">◎ Ver Instagram</a></div></div></section>
    </main>
    <footer><div className="container foot"><p>© 2026 SB Serviços Gerais. Todos os direitos reservados.</p><p>Medianeira/PR e região • WhatsApp: 45 98427-0537 • Instagram: @sb_servicos_gerais</p></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
