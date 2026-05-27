import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Wrench, Zap, Droplets, Paintbrush, Wind, Home, Building2, ShieldCheck, Star, CheckCircle2, Clock, MapPin, CreditCard, ClipboardCheck, Hammer, Sparkles, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function SiteSBServicosGerais() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsapp = 'https://wa.me/5545984270537';
  const instagram = 'https://www.instagram.com/sb_servicos_gerais?igsh=aGZ6aGdrNWF2Zm8y';

  const services = [
    { icon: <Droplets className="h-7 w-7" />, title: 'Desentupimento e Hidráulica', text: 'Ralos, vasos, pias, vazamentos, encanamentos e manutenções emergenciais.' },
    { icon: <Zap className="h-7 w-7" />, title: 'Elétrica', text: 'Instalações, reparos, tomadas, iluminação e manutenção elétrica residencial e empresarial.' },
    { icon: <Wind className="h-7 w-7" />, title: 'Ar-condicionado', text: 'Instalação, limpeza, manutenção preventiva e corretiva de aparelhos.' },
    { icon: <Paintbrush className="h-7 w-7" />, title: 'Pintura e Reformas', text: 'Pinturas, pequenos reparos, reformas completas e acabamentos.' },
    { icon: <Home className="h-7 w-7" />, title: 'Jardinagem e Limpeza de Terrenos', text: 'Corte de grama, poda, limpeza de pátios, terrenos e manutenção externa.' },
    { icon: <Sparkles className="h-7 w-7" />, title: 'Limpezas Técnicas', text: 'Limpeza pós-obra, limpeza geral, placas solares e estofados.' },
    { icon: <Hammer className="h-7 w-7" />, title: 'Construções e Manutenções', text: 'Pequenas e grandes construções, consertos, telhados e manutenção geral.' },
    { icon: <Building2 className="h-7 w-7" />, title: 'Atendimento para Empresas', text: 'Soluções completas para imobiliárias, comércios, condomínios e indústrias.' },
  ];

  const benefits = [
    'Atendimento residencial e empresarial',
    'Orçamento grátis',
    'Atendimento emergencial 24h',
    'Parcelamento no cartão',
    'Equipe para vários tipos de serviço',
    'Atuação em Medianeira e região',
  ];

  const reviews = [
    { name: 'Cliente residencial', text: 'Atendimento rápido, serviço bem feito e preço justo. Resolveram o problema no mesmo dia.' },
    { name: 'Imobiliária parceira', text: 'A SB facilita muito nossa rotina. Uma empresa para vários tipos de manutenção.' },
    { name: 'Empresa local', text: 'Profissionais responsáveis, organizados e com boa comunicação do início ao fim.' },
  ];

  const gallery = [
    {
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
      title: 'Manutenção e reparos',
      category: 'Serviços gerais'
    },
    {
      src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop',
      title: 'Desentupimento profissional',
      category: 'Hidráulica'
    },
    {
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
      title: 'Construção e reformas',
      category: 'Obras'
    },
    {
      src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
      title: 'Limpeza de estofados',
      category: 'Higienização'
    },
    {
      src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop',
      title: 'Serviços externos',
      category: 'Área externa'
    },
    {
      src: 'https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=1200&auto=format&fit=crop',
      title: 'Equipe especializada',
      category: 'Atendimento profissional'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-16 items-center justify-center rounded-2xl bg-white text-xl font-black tracking-tighter shadow-lg">
              <span className="text-red-600">S</span><span className="text-blue-600">B</span>
            </div>
            <div>
              <p className="text-lg font-black leading-none">SB Serviços Gerais</p>
              <p className="text-xs text-zinc-400">Medianeira e região</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#empresas" className="hover:text-white">Empresas</a>
            <a href="#galeria" className="hover:text-white">Serviços realizados</a>
            <a href="#avaliacoes" className="hover:text-white">Avaliações</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>

          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hidden items-center rounded-2xl bg-blue-600 px-5 py-4 font-bold text-white hover:bg-blue-500 md:flex">
            <MessageCircle className="mr-2 h-5 w-5" /> Chamar no WhatsApp
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-4 pb-4 md:hidden">
            <div className="flex flex-col gap-3 text-zinc-300">
              <a href="#servicos">Serviços</a>
              <a href="#empresas">Empresas</a>
              <a href="#galeria">Serviços realizados</a>
              <a href="#avaliacoes">Avaliações</a>
              <a href="#contato">Contato</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,.35),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
                <ShieldCheck className="mr-2 h-4 w-4 text-blue-400" /> Empresa completa para manutenção e serviços gerais
              </div>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                Soluções rápidas para sua casa ou empresa.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                A SB Serviços Gerais atende Medianeira e região com manutenção, elétrica, hidráulica, desentupimento, reformas, limpeza técnica, jardinagem, ar-condicionado e muito mais.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-black text-white hover:bg-red-500 sm:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" /> Solicitar orçamento grátis
                </a>
                <a href="tel:+5545984270537">
                  <Button variant="outline" className="w-full rounded-2xl border-white/20 bg-white/5 px-7 py-7 text-base font-bold text-white hover:bg-white/10 sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" /> 45 98427-0537
                  </Button>
                </a>
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-base font-bold text-white hover:bg-white/10 sm:w-auto">
                  <span className="mr-2 text-lg font-black">◎</span> Instagram
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-zinc-300 sm:grid-cols-3">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-blue-400" /> Atendimento 24h</div>
                <div className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-blue-400" /> Parcelamos</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-400" /> Medianeira/PR</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center justify-center">
              <Card className="w-full rounded-[2rem] border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                <CardContent className="p-6">
                  <div className="rounded-[1.5rem] bg-white p-8 text-center shadow-xl">
                    <div className="mx-auto mb-4 flex h-28 w-44 items-center justify-center rounded-3xl border-4 border-zinc-900 bg-white text-7xl font-black italic tracking-tighter">
                      <span className="text-red-600">S</span><span className="text-blue-600">B</span>
                    </div>
                    <h2 className="text-3xl font-black text-zinc-950">Serviços Gerais</h2>
                    <p className="mt-3 text-zinc-600">Manutenção • Reformas • Limpezas • Emergências</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {['Imobiliárias', 'Empresas', 'Residências', 'Condomínios'].map((item) => (
                      <div key={item} className="rounded-2xl bg-zinc-950/80 p-4 text-center text-sm font-bold text-zinc-200">{item}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-blue-400">Nossos serviços</p>
            <h2 className="text-3xl font-black md:text-5xl">Uma empresa para resolver tudo.</h2>
            <p className="mt-4 text-zinc-400">Você não precisa procurar vários profissionais. A SB centraliza as principais soluções para manutenção, limpeza, reformas e emergências.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="rounded-3xl border-white/10 bg-white/[0.04] text-white transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400">{service.icon}</div>
                  <h3 className="mb-3 text-lg font-black">{service.title}</h3>
                  <p className="text-sm leading-6 text-zinc-400">{service.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white py-20 text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-red-600">Por que escolher a SB?</p>
              <h2 className="text-3xl font-black md:text-5xl">Atendimento rápido, completo e profissional.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">Nosso objetivo é simplificar a vida do cliente: você chama uma empresa e recebe solução para diferentes tipos de serviços.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 font-bold">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-blue-400">Serviços realizados</p>
            <h2 className="text-3xl font-black md:text-5xl">Trabalhos reais da SB Serviços Gerais.</h2>
            <p className="mt-4 text-zinc-400">Alguns registros de manutenção, reparos, desentupimento, telhado, área externa e jardinagem realizados pela nossa equipe.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo, index) => (
              <Card key={photo.src} className="group overflow-hidden rounded-3xl border-white/10 bg-white/[0.04] text-white">
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden bg-zinc-900">
                    <img src={photo.src} alt={photo.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5">
                      <p className="mb-2 inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-black uppercase tracking-wide">{photo.category}</p>
                      <h3 className="text-xl font-black">{photo.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="empresas" className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="rounded-[2rem] border-white/10 bg-gradient-to-br from-blue-600 to-blue-900 text-white">
              <CardContent className="p-8 md:p-10">
                <Building2 className="mb-6 h-12 w-12" />
                <h2 className="text-3xl font-black md:text-4xl">Parcerias para empresas e imobiliárias</h2>
                <p className="mt-5 leading-8 text-blue-50">A SB atende demandas recorrentes de manutenção, reparos e serviços gerais para imobiliárias, comércios, condomínios e empresas que precisam de agilidade.</p>
                <ul className="mt-6 space-y-3 text-blue-50">
                  <li className="flex gap-3"><ClipboardCheck className="h-5 w-5 shrink-0" /> Manutenções em imóveis alugados</li>
                  <li className="flex gap-3"><ClipboardCheck className="h-5 w-5 shrink-0" /> Serviços avulsos ou recorrentes</li>
                  <li className="flex gap-3"><ClipboardCheck className="h-5 w-5 shrink-0" /> Atendimento residencial, comercial e empresarial</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-[2rem] border-white/10 bg-gradient-to-br from-red-600 to-red-900 text-white">
              <CardContent className="p-8 md:p-10">
                <Wrench className="mb-6 h-12 w-12" />
                <h2 className="text-3xl font-black md:text-4xl">Contrate com segurança</h2>
                <p className="mt-5 leading-8 text-red-50">Do orçamento até a finalização, buscamos comunicação clara, organização, responsabilidade e entrega profissional.</p>
                <div className="mt-8 rounded-3xl bg-white/10 p-6">
                  <p className="text-2xl font-black">Orçamento gratuito</p>
                  <p className="mt-2 text-red-50">Chame agora e explique o serviço que precisa. Nossa equipe retorna com a melhor solução.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="avaliacoes" className="bg-zinc-900 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-blue-400">Confiança</p>
              <h2 className="text-3xl font-black md:text-5xl">O que clientes dizem</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map((review) => (
                <Card key={review.name} className="rounded-3xl border-white/10 bg-white/[0.05] text-white">
                  <CardContent className="p-6">
                    <div className="mb-4 flex gap-1 text-yellow-400">
                      {[1,2,3,4,5].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                    </div>
                    <p className="leading-7 text-zinc-300">“{review.text}”</p>
                    <p className="mt-5 font-black">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,.28),transparent_40%)]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-4xl font-black md:text-6xl">Precisa de um serviço?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">Fale com a SB Serviços Gerais e solicite um orçamento gratuito. Atendimento em Medianeira e região.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-base font-black text-white hover:bg-blue-500 sm:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chamar no WhatsApp
                </a>
              <a href="tel:+5545984270537">
                <Button variant="outline" className="w-full rounded-2xl border-white/20 bg-white/5 px-8 py-7 text-base font-bold text-white hover:bg-white/10 sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" /> Ligar agora
                </Button>
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white hover:bg-white/10 sm:w-auto">
                <span className="mr-2 text-lg font-black">◎</span> Ver Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-zinc-950 px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-400 md:flex-row">
          <p>© 2026 SB Serviços Gerais. Todos os direitos reservados.</p>
          <p>Medianeira/PR e região • WhatsApp: 45 98427-0537 • Instagram: @sb_servicos_gerais</p>
        </div>
      </footer>
    </div>
  );
}
