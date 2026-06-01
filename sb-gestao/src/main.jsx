import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createClient } from '@supabase/supabase-js';
import { CalendarDays, Users, FileText, Wallet, ClipboardList, Camera, Hammer, Plus, Phone, MapPin, MessageCircle, Menu, X, Building2, LogOut } from 'lucide-react';
import './style.css';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = SUPABASE_URL && SUPABASE_ANON_KEY ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const initialData = {
  clientes: [
    { id: 1, nome: 'Cliente exemplo', telefone: '45984270537', endereco: 'Medianeira - PR', origem: 'Google', status: 'Ativo' }
  ],
  servicos: [
    { id: 1, data: '2026-05-29', hora: '08:00', cliente: 'Cliente exemplo', servico: 'Desentupimento', endereco: 'Medianeira - PR', responsavel: 'Equipe 1', valor: 250, status: 'Agendado' }
  ],
  orcamentos: [
    { id: 1, cliente: 'Cliente exemplo', servico: 'Manutenção elétrica', valor: 350, status: 'Enviado', retorno: 'Retornar amanhã' }
  ],
  financeiro: [
    { id: 1, descricao: 'Serviço exemplo', tipo: 'Entrada', valor: 250, status: 'Recebido' }
  ]
};

function money(v){ return Number(v || 0).toLocaleString('pt-BR', { style:'currency', currency:'BRL' }); }
function wa(phone){ const p=String(phone||'').replace(/\D/g,''); return `https://wa.me/55${p.startsWith('55')?p.slice(2):p}`; }
function maps(addr){ return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr||'')}`; }

function App(){
  const [active,setActive]=useState('painel');
  const [menu,setMenu]=useState(false);
  const [session,setSession]=useState(null);
  const [data,setData]=useState(initialData);

  useEffect(()=>{
    if(!supabase) return;
    supabase.auth.getSession().then(({data})=>setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session)=>setSession(session));
    return ()=>sub.subscription.unsubscribe();
  },[]);

  if(supabase && !session) return <Login />;
  return <Dashboard active={active} setActive={setActive} menu={menu} setMenu={setMenu} data={data} setData={setData} />;
}

function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [msg,setMsg]=useState('');
  async function login(){
    const {error}=await supabase.auth.signInWithPassword({email,password});
    if(error) setMsg(error.message);
  }
  return <div className="login-page"><div className="login-card"><Logo/><h1>SB Gestão</h1><p>Acesse o sistema da SB Serviços Gerais</p><input placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)}/><input placeholder="Senha" type="password" value={password} onChange={e=>setPassword(e.target.value)}/><button onClick={login}>Entrar</button>{msg && <span className="erro">{msg}</span>}<small>Configure usuários no Supabase Authentication.</small></div></div>
}

function Dashboard({active,setActive,menu,setMenu,data,setData}){
  const nav=[['painel','Painel',Building2],['agenda','Agenda',CalendarDays],['clientes','Clientes',Users],['orcamentos','Orçamentos',FileText],['os','Ordem de Serviço',ClipboardList],['financeiro','Financeiro',Wallet],['obras','Obras',Hammer],['fotos','Fotos',Camera]];
  const title=nav.find(n=>n[0]===active)?.[1]||'Painel';
  async function sair(){ if(supabase) await supabase.auth.signOut(); }
  return <div className="app"><aside className={menu?'open':''}><button className="close" onClick={()=>setMenu(false)}><X/></button><Logo/><nav>{nav.map(([id,label,Icon])=><button key={id} className={active===id?'ativo':''} onClick={()=>{setActive(id);setMenu(false)}}><Icon/> {label}</button>)}</nav></aside><main><header><button className="mobile" onClick={()=>setMenu(true)}><Menu/></button><div><h1>{title}</h1><p>Controle completo da SB no celular e no computador.</p></div><button className="sair" onClick={sair}><LogOut/> Sair</button></header><section>{active==='painel'&&<Painel data={data}/>} {active==='agenda'&&<Agenda data={data} setData={setData}/>} {active==='clientes'&&<Clientes data={data} setData={setData}/>} {active==='orcamentos'&&<Orcamentos data={data} setData={setData}/>} {active==='financeiro'&&<Financeiro data={data} setData={setData}/>} {active==='os'&&<OS/>} {active==='obras'&&<Obras/>} {active==='fotos'&&<Fotos/>}</section></main></div>
}
function Logo(){return <div className="logo"><span>S</span><b>B</b><div><strong>SB Gestão</strong><small>Serviços Gerais</small></div></div>}
function Card({children}){return <div className="card">{children}</div>}
function Badge({children}){return <span className="badge">{children}</span>}

function Painel({data}){ const entradas=data.financeiro.filter(x=>x.tipo==='Entrada').reduce((s,x)=>s+Number(x.valor||0),0); const saidas=data.financeiro.filter(x=>x.tipo==='Saída').reduce((s,x)=>s+Number(x.valor||0),0); return <><div className="grid4"><Card><p>Serviços</p><h2>{data.servicos.length}</h2></Card><Card><p>Clientes</p><h2>{data.clientes.length}</h2></Card><Card><p>Entradas</p><h2>{money(entradas)}</h2></Card><Card><p>Lucro estimado</p><h2>{money(entradas-saidas)}</h2></Card></div><h2>Próximos serviços</h2><TabelaServicos servicos={data.servicos}/></> }
function TabelaServicos({servicos}){return <div className="table"><table><thead><tr><th>Data</th><th>Hora</th><th>Cliente</th><th>Serviço</th><th>Endereço</th><th>Valor</th><th>Status</th></tr></thead><tbody>{servicos.map(s=><tr key={s.id}><td>{s.data}</td><td>{s.hora}</td><td>{s.cliente}</td><td>{s.servico}</td><td><a href={maps(s.endereco)} target="_blank">{s.endereco}</a></td><td>{money(s.valor)}</td><td><Badge>{s.status}</Badge></td></tr>)}</tbody></table></div>}

function Agenda({data,setData}){ const [f,setF]=useState({data:'',hora:'',cliente:'',servico:'',endereco:'',responsavel:'',valor:'',status:'Agendado'}); function add(){ if(!f.cliente||!f.servico)return; setData({...data,servicos:[{...f,id:Date.now(),valor:Number(f.valor||0)},...data.servicos]}); setF({data:'',hora:'',cliente:'',servico:'',endereco:'',responsavel:'',valor:'',status:'Agendado'}); } return <><Form title="Agendar serviço" f={f} setF={setF} add={add} fields={['data','hora','cliente','servico','endereco','responsavel','valor','status']}/><div className="grid3">{data.servicos.map(s=><Card key={s.id}><h2>{s.hora}</h2><Badge>{s.status}</Badge><h3>{s.servico}</h3><p>{s.cliente}</p><p>{s.endereco}</p><p>{money(s.valor)}</p><a href={maps(s.endereco)} target="_blank"><button>Ver rota</button></a></Card>)}</div></>}
function Clientes({data,setData}){ const [f,setF]=useState({nome:'',telefone:'',endereco:'',origem:'Instagram',status:'Ativo'}); function add(){ if(!f.nome||!f.telefone)return; setData({...data,clientes:[{...f,id:Date.now()},...data.clientes]}); setF({nome:'',telefone:'',endereco:'',origem:'Instagram',status:'Ativo'}); } return <><Form title="Cadastrar cliente" f={f} setF={setF} add={add} fields={['nome','telefone','endereco','origem','status']}/><div className="grid3">{data.clientes.map(c=><Card key={c.id}><h3>{c.nome}</h3><Badge>{c.status}</Badge><p><Phone size={16}/> {c.telefone}</p><p><MapPin size={16}/> {c.endereco}</p><p>Origem: {c.origem}</p><a href={wa(c.telefone)} target="_blank"><button><MessageCircle size={16}/> WhatsApp</button></a></Card>)}</div></>}
function Orcamentos({data,setData}){ const [f,setF]=useState({cliente:'',servico:'',valor:'',status:'Enviado',retorno:'Retornar em 2 dias'}); function add(){ if(!f.cliente||!f.servico)return; setData({...data,orcamentos:[{...f,id:Date.now(),valor:Number(f.valor||0)},...data.orcamentos]}); setF({cliente:'',servico:'',valor:'',status:'Enviado',retorno:'Retornar em 2 dias'}); } return <><Form title="Novo orçamento" f={f} setF={setF} add={add} fields={['cliente','servico','valor','status','retorno']}/>{data.orcamentos.map(o=><Card key={o.id}><h3>{o.cliente}</h3><p>{o.servico}</p><h2>{money(o.valor)}</h2><Badge>{o.status}</Badge><p>{o.retorno}</p></Card>)}</>}
function Financeiro({data,setData}){ const [f,setF]=useState({descricao:'',tipo:'Entrada',valor:'',status:'A receber'}); function add(){ if(!f.descricao||!f.valor)return; setData({...data,financeiro:[{...f,id:Date.now(),valor:Number(f.valor||0)},...data.financeiro]}); setF({descricao:'',tipo:'Entrada',valor:'',status:'A receber'}); } return <><Form title="Lançamento financeiro" f={f} setF={setF} add={add} fields={['descricao','tipo','valor','status']}/>{data.financeiro.map(x=><Card key={x.id}><h3>{x.descricao}</h3><p>{x.tipo}</p><h2>{money(x.valor)}</h2><Badge>{x.status}</Badge></Card>)}</>}
function Form({title,f,setF,add,fields}){return <Card><h2>{title}</h2><div className="form">{fields.map(k=><input key={k} type={k==='valor'?'number':k==='data'?'date':k==='hora'?'time':'text'} placeholder={k} value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})}/>)}</div><button onClick={add}><Plus size={16}/> Salvar</button></Card>}
function OS(){return <Card><h2>Ordem de Serviço</h2><div className="form">{['Cliente','Telefone','Endereço','Serviço','Material','Mão de obra','Valor total','Responsável'].map(x=><input key={x} placeholder={x}/>)}</div><textarea placeholder="Descrição do serviço realizado"></textarea><button>Gerar PDF</button></Card>}
function Obras(){return <div className="grid3">{['Fundação','Alvenaria','Elétrica/Hidráulica','Cobertura','Acabamento','Entrega'].map(x=><Card key={x}><Hammer/><h3>{x}</h3><p>Controle de etapa, responsável, prazo e fotos.</p></Card>)}</div>}
function Fotos(){return <div className="grid3">{['Antes','Durante','Depois'].map(x=><Card key={x}><Camera/><h3>Foto do {x}</h3><p>Salvar histórico do serviço.</p><button>Adicionar foto</button></Card>)}</div>}

createRoot(document.getElementById('root')).render(<App/>);
