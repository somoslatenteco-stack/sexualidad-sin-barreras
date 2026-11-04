import React, { useState } from 'react';
import { Heart, ShieldCheck, Accessibility, BookOpen, Users, Brain, CheckCircle2, Menu, X, ArrowRight, ChevronLeft, RotateCcw } from 'lucide-react';

const modules = [
  { id:'derechos', icon:ShieldCheck, number:'01', title:'Conoce tus derechos', desc:'Información para reconocer y ejercer tus derechos sexuales y reproductivos.', color:'mint',
    intro:'Todas las personas tienen derecho a recibir información clara, suficiente y accesible sobre su salud sexual y reproductiva. La discapacidad no elimina estos derechos.',
    points:['Recibir información comprensible y accesible.','Tomar decisiones libres e informadas sobre el propio cuerpo.','Recibir atención en salud sin discriminación.','Que se respete la privacidad, la dignidad y la autonomía.'],
    reflection:'La información debe adaptarse a tus necesidades de comunicación, no al contrario.' },
  { id:'cuerpo', icon:Accessibility, number:'02', title:'Conoce tu cuerpo', desc:'Explora el autocuidado, la imagen corporal y la diversidad.', color:'peach',
    intro:'Cada cuerpo es distinto y merece respeto. Conocer el propio cuerpo puede ayudar a identificar necesidades, expresar preferencias y comunicar inquietudes en salud.',
    points:['No existe una única forma válida de vivir la corporalidad.','Puedes preguntar al personal de salud sobre cambios, cuidados y adaptaciones.','La intimidad y el autocuidado deben respetar tus decisiones.','La información debe ser adecuada para tu edad y contexto.'],
    reflection:'Tu cuerpo no define tu valor, tu identidad ni tu posibilidad de construir relaciones.' },
  { id:'autonomia', icon:Heart, number:'03', title:'Autonomía y consentimiento', desc:'Reconoce tus límites, expresa decisiones y respeta los de otras personas.', color:'lavender',
    intro:'La autonomía significa participar en las decisiones que afectan tu vida. El consentimiento es una decisión libre, informada, específica y reversible.',
    points:['Puedes decir sí, no o cambiar de opinión.','El silencio o la ausencia de resistencia no significan consentimiento.','Nadie debe presionarte, amenazarte ni decidir por ti.','El consentimiento debe existir en cada situación y puede retirarse.'],
    reflection:'Pedir apoyo no significa perder el derecho a decidir.' },
  { id:'relaciones', icon:Users, number:'04', title:'Relaciones y afectividad', desc:'Construye vínculos basados en el respeto, la comunicación y la igualdad.', color:'blue',
    intro:'Las personas con discapacidad física tienen derecho a establecer relaciones afectivas, íntimas y sociales de acuerdo con sus deseos y decisiones.',
    points:['Una relación saludable reconoce la igualdad y la autonomía.','La comunicación permite expresar deseos, límites y necesidades.','El apoyo de familiares o cuidadores no debe convertirse en control.','No hay una sola manera correcta de vivir el afecto y la sexualidad.'],
    reflection:'El respeto se demuestra escuchando y reconociendo las decisiones de cada persona.' },
  { id:'mitos', icon:Brain, number:'05', title:'Rompe los mitos', desc:'Cuestiona ideas falsas y prejuicios sobre discapacidad y sexualidad.', color:'yellow',
    intro:'Los prejuicios pueden limitar el acceso a información, servicios y relaciones. Revisar estas creencias ayuda a construir entornos más respetuosos.',
    points:['Mito: las personas con discapacidad no tienen sexualidad. Realidad: la sexualidad forma parte de la vida de todas las personas.','Mito: siempre necesitan que alguien decida por ellas. Realidad: deben recibir apoyos para ejercer su autonomía.','Mito: no pueden tener pareja o formar una familia. Realidad: tienen derecho a decidir sobre sus relaciones y proyecto de vida.'],
    reflection:'Una creencia repetida no se convierte por eso en una verdad.' }
];

const questions = [
  {q:'¿Una persona con discapacidad física tiene derecho a recibir información sobre salud sexual y reproductiva?', a:['Sí, en formatos y condiciones accesibles.','No, depende de su discapacidad.','Solo si un familiar lo solicita.'], correct:0, why:'El derecho a la información corresponde a todas las personas y debe garantizarse sin discriminación.'},
  {q:'¿Qué significa consentimiento?', a:['Aceptar para evitar un conflicto.','Una decisión libre, informada y que puede cambiarse.','No expresar ninguna opinión.'], correct:1, why:'El consentimiento debe ser libre, informado, específico y reversible.'},
  {q:'¿Quién debe tomar las decisiones sobre el cuerpo y la vida íntima de una persona adulta?', a:['Siempre su familia.','El profesional de salud sin consultarle.','La propia persona, con los apoyos que necesite.'], correct:2, why:'Los apoyos facilitan la toma de decisiones; no sustituyen automáticamente la voluntad de la persona.'},
  {q:'¿La discapacidad elimina el derecho a establecer relaciones afectivas?', a:['Sí.','No.','Solo en algunos casos.'], correct:1, why:'Las personas con discapacidad tienen derecho a la vida afectiva y a decidir sobre sus relaciones.'}
];

function App(){
  const [active,setActive] = useState('inicio');
  const [menu,setMenu] = useState(false);
  const [answers,setAnswers] = useState({});
  const [submitted,setSubmitted] = useState(false);
  const selected = modules.find(m=>m.id===active);
  const score = questions.reduce((n,q,i)=>n+(answers[i]===q.correct?1:0),0);
  const go = id => {setActive(id);setMenu(false);window.scrollTo({top:0,behavior:'smooth'});};

  return <div className="app-shell">
    <a className="skip-link" href="#main">Saltar al contenido principal</a>
    <header className="topbar">
      <button className="brand" onClick={()=>go('inicio')} aria-label="Ir al inicio">
        <span className="brand-mark"><Heart size={20}/></span>
        <span>SEXUALIDAD <b>SIN BARRERAS</b></span>
      </button>
      <button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label={menu?'Cerrar menú':'Abrir menú'}>{menu?<X/>:<Menu/>}</button>
      <nav className={menu?'nav open':'nav'} aria-label="Navegación principal">
        <button onClick={()=>go('inicio')} className={active==='inicio'?'nav-active':''}>Inicio</button>
        {modules.map(m=><button key={m.id} onClick={()=>go(m.id)} className={active===m.id?'nav-active':''}>{m.title}</button>)}
        <button onClick={()=>go('evaluacion')} className={active==='evaluacion'?'nav-active':''}>Evaluación</button>
      </nav>
    </header>

    <main id="main">
      {active==='inicio' && <>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow"><span className="dot"></span> EDUCACIÓN · AUTONOMÍA · DERECHOS</span>
            <h1>Tu cuerpo.<br/><em>Tus decisiones.</em><br/>Tus derechos.</h1>
            <p>Un espacio para aprender sobre sexualidad y salud sexual y reproductiva desde el respeto, la autonomía y la inclusión.</p>
            <button className="primary-btn" onClick={()=>go('derechos')}>Comenzar recorrido <ArrowRight size={18}/></button>
            <div className="hero-note"><ShieldCheck size={17}/> Información clara, accesible y sin prejuicios.</div>
          </div>
          <div className="hero-art" aria-label="Ilustración abstracta de inclusión y diversidad" role="img">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="art-center"><Heart size={58} strokeWidth={1.3}/></div>
            <span className="art-tag tag-one">DIGNIDAD</span><span className="art-tag tag-two">AUTONOMÍA</span><span className="art-tag tag-three">INCLUSIÓN</span>
          </div>
        </section>
        <section className="intro-strip">
          <div><span className="mini-label">ESTE RECURSO ES PARA</span><h2>Personas adultas con discapacidad física, sus familias y quienes acompañan sus procesos.</h2></div>
          <p>La discapacidad no elimina los derechos sexuales y reproductivos. La información accesible ayuda a tomar decisiones y participar en ellas.</p>
        </section>
        <section className="module-section">
          <div className="section-heading"><div><span className="mini-label">EXPLORA A TU RITMO</span><h2>Un recorrido por tus derechos</h2></div><span className="module-count">05 MÓDULOS + 01 ACTIVIDAD</span></div>
          <div className="module-grid">{modules.map(m=><ModuleCard key={m.id} m={m} onClick={()=>go(m.id)}/>)}
            <button className="quiz-card" onClick={()=>go('evaluacion')}><span className="card-number">06 / ACTIVIDAD</span><span className="quiz-icon"><BookOpen size={27}/></span><h3>Pon a prueba lo aprendido</h3><p>Responde preguntas y recibe explicaciones para reforzar tus conocimientos.</p><span className="card-link">Iniciar actividad <ArrowRight size={16}/></span></button>
          </div>
        </section>
      </>}
      {selected && <section className="content-page">
        <button className="back-link" onClick={()=>go('inicio')}><ChevronLeft size={17}/> Volver al inicio</button>
        <div className="content-hero"><span className="mini-label">MÓDULO {selected.number}</span><div className={'big-icon '+selected.color}><selected.icon size={32}/></div><h1>{selected.title}</h1><p>{selected.desc}</p></div>
        <article className="lesson-card"><h2>Para comenzar</h2><p className="lead">{selected.intro}</p><h2>Ideas clave</h2><ul className="idea-list">{selected.points.map((p,i)=><li key={i}><CheckCircle2 size={19}/><span>{p}</span></li>)}</ul><div className="reflection"><span className="mini-label">PARA RECORDAR</span><p>{selected.reflection}</p></div></article>
        <div className="next-row"><span>Continúa explorando los demás módulos.</span><button className="primary-btn" onClick={()=>go(modules[(modules.findIndex(m=>m.id===active)+1)%modules.length].id)}>Siguiente módulo <ArrowRight size={17}/></button></div>
      </section>}
      {active==='evaluacion' && <section className="content-page quiz-page">
        <button className="back-link" onClick={()=>go('inicio')}><ChevronLeft size={17}/> Volver al inicio</button>
        <div className="content-hero"><span className="mini-label">ACTIVIDAD INTERACTIVA</span><div className="big-icon lavender"><BookOpen size={32}/></div><h1>¿Qué aprendiste?</h1><p>Selecciona una respuesta en cada pregunta. Al finalizar podrás revisar tus resultados y las explicaciones.</p></div>
        <div className="quiz-list">{questions.map((q,i)=><fieldset className="question" key={i}><legend><span>Pregunta {i+1} de {questions.length}</span>{q.q}</legend>{q.a.map((a,j)=><label className="answer" key={j}><input type="radio" name={'q'+i} checked={answers[i]===j} disabled={submitted} onChange={()=>setAnswers({...answers,[i]:j})}/><span>{a}</span></label>)}{submitted && <div className={answers[i]===q.correct?'feedback correct':'feedback'}>{answers[i]===q.correct?'¡Correcto!':'Revisa esta idea.'} {q.why}</div>}</fieldset>)}</div>
        {!submitted?<button className="primary-btn" disabled={Object.keys(answers).length!==questions.length} onClick={()=>setSubmitted(true)}>Ver mis resultados <ArrowRight size={17}/></button>:<div className="result-box"><CheckCircle2 size={27}/><div><h2>Obtuviste {score} de {questions.length} respuestas correctas</h2><p>{score===questions.length?'¡Excelente! Has identificado las ideas principales.':'Repasa las explicaciones y vuelve a intentarlo cuando quieras.'}</p></div><button className="secondary-btn" onClick={()=>{setAnswers({});setSubmitted(false)}}><RotateCcw size={16}/> Repetir actividad</button></div>}
      </section>}
    </main>
    <footer><div className="footer-brand">SEXUALIDAD <b>SIN BARRERAS</b></div><p>Información · Autonomía · Derechos</p><small>Recurso educativo en desarrollo. Su contenido no reemplaza la orientación profesional ni la atención en salud.</small></footer>
  </div>
}

function ModuleCard({m,onClick}){const Icon=m.icon;return <button className="module-card" onClick={onClick}><span className="card-number">{m.number} / MÓDULO</span><span className={'module-icon '+m.color}><Icon size={24}/></span><h3>{m.title}</h3><p>{m.desc}</p><span className="card-link">Explorar módulo <ArrowRight size={16}/></span></button>}

export default App;
