'use client'

import { FormEvent, useState, useTransition } from 'react'
import { sendInfoSignup } from './actions/send-info-signup'

const navItems = [
  ['NOAH', '#noah'],
  ['COMPETITION', '#competition'],
  ['THE RIGS', '#rig'],
  ['THE CREW', '#team'],
]

function NoahCharacter() {
  return (
    <div className="noah-stage" aria-label="Illustration of Noah with an oversized pacifier" role="img">
      <div className="scribble scribble-top">NO<br />PE</div>
      <div className="scribble scribble-side">LOUD<br />BABY</div>
      <div className="noah-shadow" />
      <div className="noah-head">
        <div className="ear ear-left" />
        <div className="ear ear-right" />
        <div className="eye eye-left" />
        <div className="eye eye-right" />
        <div className="brow brow-left" />
        <div className="brow brow-right" />
        <div className="nose"><span /></div>
        <div className="cheek cheek-left" />
        <div className="cheek cheek-right" />
        <div className="mouth" />
        <div className="pacifier">
          <div className="pacifier-handle" />
          <div className="pacifier-shield" />
          <div className="pacifier-nipple" />
        </div>
      </div>
      <div className="noah-neck" />
      <div className="noah-shirt"><span>NOAH</span></div>
      <div className="star star-one">✳</div>
      <div className="star star-two">✳</div>
    </div>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="scribble-label">
      <span>{children}</span>
      <svg aria-hidden="true" viewBox="0 0 200 64" preserveAspectRatio="none">
        <path d="M52 7C92 1 170 4 189 24c11 19-45 34-105 35C33 58 4 49 7 28 9 14 27 8 62 5" vectorEffect="non-scaling-stroke" />
        <path d="M74 60c-32-2-58-11-61-27C11 18 30 10 66 7" vectorEffect="non-scaling-stroke" opacity=".75" />
      </svg>
    </p>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [infoEmail, setInfoEmail] = useState('')
  const [infoSubmitted, setInfoSubmitted] = useState(false)
  const [infoError, setInfoError] = useState<string | null>(null)
  const [isSending, startSending] = useTransition()

  function handleInfoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = infoEmail.trim()
    if (!value) return
    setInfoError(null)
    startSending(async () => {
      const result = await sendInfoSignup(value)
      if (result.ok) {
        setInfoSubmitted(true)
      } else {
        setInfoError(result.error)
      }
    })
  }

  const TIKTOK_URL = 'https://www.tiktok.com/@noahtoddler'
  const INSTAGRAM_URL = 'https://www.instagram.com/noahtoddler'
  const WHATSAPP_URL = 'https://whatsapp.com/channel/0029Vb8l0X72Jl8IlvyHM60d'

  const crew = [
    { name: 'Joe Dollar-Smirnov', role: 'Creative / Producer', handle: 'joe-dollar-smirnov' },
    { name: 'Nene Parsotam', role: 'ECD / Advisor / Judge', handle: 'neneparsotam' },
    { name: 'Sam Cundall', role: 'Judge', handle: 'samcundall' },
    { name: 'Luigi Lucarelli', role: 'Character Designer', handle: 'luigilucarelli' },
    { name: 'Aman Bhanot', role: 'Advisor', handle: 'aman-bhanot-99370317' },
    { name: 'Lisa Graydon', role: 'Actress', handle: '4444lisagraydon' },
    { name: 'Neil Bebber', role: 'Writer', handle: 'neil-bebber' },
    { name: 'Sarah Dollar', role: 'Writer', handle: 'sarah-dollar-8a136439' },
    { name: 'Brollyman', role: 'Composer', handle: 'brolly-brollyman-5b7937b' },
    { name: 'Tom', role: 'Sculptor / Artist', handle: 'thomas-ridley-a79b4286' },

  ]

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Noah home">NOAH</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-nav">MENU <span>{menuOpen ? '×' : '＋'}</span></button>
        <nav id="site-nav" className={menuOpen ? 'site-nav open' : 'site-nav'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-sticker" href="#community" onClick={() => setMenuOpen(false)}>JOIN THE GANG ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>INTRODUCING<br /><em>NOAH</em><br />TO YOU</h1>
          <p className="hero-dek">Noah is a new adult comedy about a young toddler and his adoring parents, his dog and his punk baby sitter. Think Family Guy’s Stewie, with hints Maggie Simpson and Boss Baby! Noah is the first new character we're exploring in his world. He's an annoying toddler who is endured by everybody and loved only by his not-so-long-suffering mum and dad. We&apos;re building a funny but edgy world based around Noah, and we&apos;d love you to join us. Help shape Noah&apos;s destiny by becoming a founding fan, and watch him grow!</p>
          <p className="hero-dek">Look out for the Animation Competition launching October 31st with fabulous prizes including exclusive physical collectables and scholarships to online courses with Animation Mentor and New York University. Open to animators of all levels!</p>
          <a className="arrow-link" href="#community">JOIN THE GANG</a>
        </div>
        <div className="hero-art"><img className="hero-image" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/noah_sitting-gsXkdgTE2zwn8JUtN3HUMLA2bcMnFl.png" alt="Hand-drawn Noah seated in a turquoise outfit with an oversized salmon pacifier" /><a className="hero-cta" href="#community"><strong>become a founding fan</strong><span>JOIN THE GANG</span></a></div>
      </section>

      <section className="intro section-pad" id="noah">
        <div className="section-aside"><SectionLabel>Who is Noah?</SectionLabel><ul className="social-stack"><li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><img src="/icons/instagram.svg" alt="Instagram" width={24} height={24} /><span className="sr-only">Instagram</span></a></li><li><a href={TIKTOK_URL} target="_blank" rel="noreferrer"><img src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} /><span className="sr-only">TikTok</span></a></li><li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><img src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} /><span className="sr-only">WhatsApp</span></a></li></ul></div>
        <div className="intro-content"><h2>Noah is too cute.</h2><p className="large-copy">Noah's parents read all the &quot;right&quot; parenting books and he is the result. This comedy gives us all the comic relief to join in laughing at the result of well-intentioned (toxically positive parenting?). </p><p>Noah's parents are competitive and secretly furious. Noah is their inevitable offspring: a toddler with adult-sized opinions, a seeming poor grasp of language, and a dummy the size of a plate, which he sucks like a tragically dependent vaper.</p></div>
      </section>

      <section className="competition" id="competition">
        <div className="competition-banner">
          <p className="competition-kicker">OCTOBER 2026</p>
          <h2>Animation Competition</h2>
          <p className="competition-lead">One toddler. Eleven seconds. Launching end of October with awesome prizes & judges.</p>
        </div>
        <div className="comic-grid">
          <article className="comic-panel comic-why">
            <h3>Why?</h3>
            <p>We're building a new adult comedy IP and actively want to open the process up to the creative community.</p>
            <p>This will allow us to develop 'Noah' in collaboration with the best animators and find a shortlist animators who we can call on if and when Noah gets funded. We have seriously invested time and energy in, writing, voice acting and recording, character design, modelling and rigging to provide professional assets for you to work with alongside dailies run as normal in a remote studio setting.</p>
          </article>
          <article className="comic-panel comic-what">
            <h3>What?</h3>
            <p>We want to you to do you best work using the assets we provide. We have designed 4 shorts, to run at approximately 11 seconds. Each shot is voiced by professional actors. You are free to design the cinemaphotography however you like. This shot will be one for your demo reel. Play with Noah and bring him to life, using your own unique style.</p>
          </article>
          <article className="comic-panel comic-who">
            <h3>Who?</h3>
            <p>This competition is open to all animators. 2D or 3D, student or veteran. As long as you can bring Noah to life, you are welcome.</p>
          </article>
          <article className="comic-panel comic-judge">
            <div className="judge-photo">
              <img src="/judges/nene-parsotam.jpeg" alt="Nene Parsotam" />
            </div>
            <div className="judge-copy">
              <p className="judge-kicker">Meet the judge</p>
              <h3>Nene Parsotam</h3>
              <p>Nene is a creative leader, podcaster, problem solver, storyteller, collaborator, hyper nerd, and polymath. For two decades Nene has shaped creative work for some of the world&apos;s most demanding and well known brands including HBO, Amazon, Disney, Dove, Shea Moisture, Dior, Sony, Cadbury&apos;s, Jaguar, Sky, Lloyds, HP and many more.</p>
              <p>Besides being just an absolute legend, she has a ton of industry recognition behind her and we&apos;re so proud that she has agreed to be part of this project. Thank you Nene!</p>
              <p className="judge-recognition-title">Some of her industry recognition includes:</p>
              <ul className="judge-recognition">
                <li>Cannes Lions Industry Craft Jury Member: 2025, 2019</li>
                <li>Adobe Firefly / Boards Consultancy Focus Group: 2025</li>
                <li>D&amp;AD Professional Awards, Direct/Digital Judge: 2024, 2018</li>
                <li>Executive Creative Director, D&amp;AD Shift London: 2025, 2024, 2023</li>
                <li>Ad Week, Profiles in Black Creativity: 2022</li>
                <li>D&amp;AD New Blood Jury President, 21 Grams: 2021</li>
                <li>Dubai Lynx Outdoor &amp; Direct Jury: 2021</li>
                <li>United Nations Women Unstereotype Alliance Speaker: 2021</li>
                <li>Eurobest Industry Design, Print &amp; Outdoor Craft Jury: 2018</li>
                <li>Tech Nation, Top 50 Influential Black Voices in Tech: 2020</li>
              </ul>
            </div>
          </article>
          <article className="comic-panel comic-judge comic-judge-alt">
            <div className="judge-photo">
              <img src="/judges/sam-cundall.png" alt="Sam Cundall" />
            </div>
            <div className="judge-copy">
              <p className="judge-kicker">Meet the judge</p>
              <h3>Sam Cundall</h3>
              <p>The &lsquo;emoji guy&rsquo;. Yes, Sam leads the team for some of the world&apos;s most well known animated emojis and to add him to our judges panel is fantastic.</p>
              <p>Sam is currently Principal Creative Design for Microsoft Teams where he specialises in design, animation, motion, visual language and marketing. He&apos;s an animator and creative director, leading emotions, reactions, and other personal expression content. 😉</p>
              <p>Sam is always looking at creating experiences that are more relevant, appealing and fun! for customers.</p>
            </div>
          </article>
        </div>
        <div className="info-session" id="info-session">
          <div className="info-copy">
            <p className="info-live"><span className="info-dot" aria-hidden="true" />LIVE ON ZOOM</p>
            <h2>Come to the info session.</h2>
            <p>Friday 23rd October</p>
            <ul className="info-times">
              <li>7:00 PM UTC (Coordinated Universal Time)</li>
              <li>9:00 PM CEST (Central European Summer Time)</li>
              <li>12:00 PM PDT (Pacific Daylight Time / Los Angeles)</li>
            </ul>
            <p>A live Zoom call, where we walk through the competition, show the Noah rigs and assets, and answer every question you throw at us; briefs, deadlines, formats, prizes, the lot. A recording of the call will be distributed to the email list so dont worry if you can't make it.</p>
            <ul className="info-points">
              <li>Full competition walkthrough</li>
              <li>Live Q&amp;A with the crew</li>
              <li>Rig &amp; asset demo</li>
            </ul>
          </div>
          <div className="signup-card info-card">
            <p className="eyebrow">SAVE YOUR SEAT</p>
            <h3>Get the Zoom invite</h3>
            <p className="cta-subcopy">(we&apos;ll email you the link and a calendar hold)</p>
            {infoSubmitted ? <p className="success-message">Seat saved. The Zoom invite is on its way to your inbox.</p> : <form className="info-form" onSubmit={handleInfoSubmit}><label htmlFor="info-email">Email address:</label><input id="info-email" type="email" required value={infoEmail} onChange={(event) => setInfoEmail(event.target.value)} placeholder="you@example.com" /><button type="submit" className="info-submit" disabled={isSending}><strong>{isSending ? 'sending…' : 'sign me up'}</strong></button>{infoError ? <p className="form-error" role="alert">{infoError}</p> : null}</form>}
            <p className="fine-print">One email with the joining link. No spam, no noise.</p>
          </div>
        </div>
        <div className="competition-sponsors"><p className="sponsors-title">Big thanks to our competition sponsor</p><div className="competition-logos" aria-label="Sponsor: Animation Mentor"><a href="https://www.animationmentor.com" target="_blank" rel="noopener noreferrer" className="comp-logo-link"><img className="comp-logo" src="/logos/animation-mentor.png" alt="Animation Mentor - A Yellowbrick Learning Brand" /></a></div></div>
      </section>

      <section className="rig section-pad" id="rig">
        <div className="rig-art"><img className="rig-image" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/noah_sitting-gsXkdgTE2zwn8JUtN3HUMLA2bcMnFl.png" alt="Hand-drawn Noah seated in a turquoise outfit with an oversized salmon pacifier" /></div>
        <div className="rig-copy"><SectionLabel>The Rigs</SectionLabel><h2>2D & 3D<br /><em>rigs available</em></h2><p>At the start of the competition, we will provide 3D and 2D rigs, distributed via Gumroad.</p></div>
      </section>

      <section className="team section-pad" id="team"><div className="section-aside"><SectionLabel>The crew</SectionLabel></div><div className="team-content"><h2>A small crew with<br /><em>big references.</em></h2><div className="team-grid"><div><p className="team-role">MADE BY</p><h3>Animationfolk</h3></div><div><p className="team-role">ADVISORS FROM</p><p>ex-Prime Video / Disney<br />ex-DreamWorks<br />ex-Framestore / ILM</p></div></div><p className="team-footer">As well as folk from some of the best known studios on the planet, we have a scupltor working on a real world model of Noah. Because we believe that the craftsmanship and artistry of design and animation takes a leading role!</p><div className="crew-grid">{crew.map((person) => (<a key={person.handle} className="crew-card card-lift" href={`https://www.linkedin.com/in/${person.handle}`} target="_blank" rel="noreferrer"><span className="crew-name">{person.name}</span><span className="crew-role">{person.role}</span><span className="crew-link">LinkedIn ↗</span></a>))}</div><div className="team-logos" aria-label="Companies represented across the team and advisor network"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logos-obS7ydflIxy2t5sOPVYPVhdT8rzNE5.png" alt="Grayscale logo strip featuring Microsoft, Disney, Amazon Studios, Prime Video, Paramount, Meta, Hasbro, and DreamWorks" /></div></div></section>


      <section className="community community-qr" id="community"><div className="community-copy"><SectionLabel>Community</SectionLabel><h2>Join the broadcast.<br /><em>Not a group.</em></h2><p>Updates, rig drops, competition news, and the occasional Noah-related emergency. A broadcast channel keeps the noise useful and the admin survivable.</p><a className="black-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">OPEN WHATSAPP ↗</a></div><a className="qr-card card-lift" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span className="qr-eyebrow">SCAN TO JOIN</span><span className="qr-frame"><img src="/whatsapp-qr.png" alt="Scan this QR code to join the Noah WhatsApp channel" /></span><span className="qr-hint">Point your camera here ↗</span></a></section>

      <section className="policy section-pad"><div className="section-aside"><SectionLabel>AI policy</SectionLabel></div><div className="policy-copy"><h2>We care about<br /><em>the output.</em></h2><p>Assistive AI is changing how everyone works and we know of super talented artists using AI tools to generate great content. Ultimately, we’re interested in quality, and our decisions will be based on quality of animation, storytelling and craft. Like many teams, we’re exploring assistive AI to help expand our capabilities. For example, we can run research tasks to find sponsors for this competition. Even this website was coded with the help of a coding assistant.. However, generative AI text-to-video does warrant a longer conversation. We want to be transparent and we want you to be transparent. If there is demand for entrants primarily using assitive AI tools we want to know about it and have that conversation so we can split the award categories across 3D, 2D and AI. If you are considering entering but will not because of this statement, we would also be very interested to hear about that view and have an open conversation about it. Please feel free to email us on competition@noahtoddler.com</p><p>We value the hand, the eye, the odd choice, and the person behind it. Our standard is artistic integrity, not a purity test. Make good work. Be honest about how you made it.</p></div></section>

      <footer className="site-footer"><a className="wordmark" href="#top">NOAH</a><div className="footer-bottom"><p>© 2026 Animation Folk Ltd</p><div className="footer-links"><a href={TIKTOK_URL} target="_blank" rel="noreferrer">TikTok ↗</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram ↗</a></div></div></footer>
    </main >
  )
}
