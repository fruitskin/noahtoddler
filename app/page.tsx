'use client'

import { FormEvent, useState } from 'react'

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

  function handleInfoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (infoEmail.trim()) setInfoSubmitted(true)
  }

  const TIKTOK_URL = 'https://www.tiktok.com/@noahtoddler'
  const INSTAGRAM_URL = 'https://www.instagram.com/noahtoddler'
  const WHATSAPP_URL = 'https://whatsapp.com/channel/0029Vb8l0X72Jl8IlvyHM60d'

  const crew = [
    { name: 'Joe Dollar-Smirnov', handle: 'joe-dollar-smirnov' },
    { name: 'Nene Parsotam', handle: 'neneparsotam' },
    { name: 'Luigi Lucarelli', handle: 'luigilucarelli' },
    { name: 'Aman Bhanot', handle: 'aman-bhanot-99370317' },
    { name: 'Lisa Graydon', handle: '4444lisagraydon' },
    { name: 'Neil Bebber', handle: 'neil-bebber' },
    { name: 'Sarah Dollar', handle: 'sarah-dollar-8a136439' },
    { name: 'Brollyman', handle: 'brolly-brollyman-5b7937b' },

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
          <p className="hero-dek">Look out the Animation Competition launching in October with fabulous prizes including exclusive physical collectables, software subscriptions and more.</p>
          <a className="arrow-link" href="#community">JOIN THE GANG</a>
        </div>
        <div className="hero-art"><img className="hero-image" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/noah_sitting-gsXkdgTE2zwn8JUtN3HUMLA2bcMnFl.png" alt="Hand-drawn Noah seated in a turquoise outfit with an oversized salmon pacifier" /><a className="hero-cta" href="#community"><strong>become a founding fan</strong><span>JOIN THE GANG</span></a></div>
      </section>

      <section className="intro section-pad" id="noah">
        <div className="section-aside"><SectionLabel>Who is Noah?</SectionLabel><ul className="social-stack"><li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><img src="/icons/instagram.svg" alt="Instagram" width={24} height={24} /><span className="sr-only">Instagram</span></a></li><li><a href={TIKTOK_URL} target="_blank" rel="noreferrer"><img src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} /><span className="sr-only">TikTok</span></a></li><li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><img src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} /><span className="sr-only">WhatsApp</span></a></li></ul></div>
        <div className="intro-content"><h2>Noah is the toddler we all love to hate.</h2><p className="large-copy">Noah's parents read all the &quot;right&quot; parenting books and he is the result. This comedy gives us all the comic relief to join in laughing at the result of well-intentioned &lpar toxically positive parenting?&rpar. Whether you are #childfree or have survived the explosion, you are our audience. </p><p>Noahs parents are competitive and secretly furious. Noah is their inevitable offspring: a toddler with adult sized opinions, a low grasp of language, and a dummy the size of a plate. Who knows where this addiction could lead.</p></div>
      </section>

      <section className="competition" id="competition">
        <div className="competition-banner">
          <p className="competition-kicker">OCTOBER 2026</p>
          <h2>Animation Competition</h2>
          <p className="competition-lead">One toddler. Eleven seconds. Launching October with awesome prizes & judges.</p>
        </div>
        <div className="comic-grid">
          <article className="comic-panel comic-why">
            <h3>Why?</h3>
            <p>We're building a new adult comedy IP and actively want to open the process up to the creative community.</p>
            <p>This will allow us to guage interest in 'Noah' but also find a short list animators who we can call on if and when Noah gets funded. We have invested time and energy in, writing, professional acting and recording, character design and rigging to provide professional assets for you to work with alongside dailies run as normal in a studio setting.</p>
          </article>
          <article className="comic-panel comic-what">
            <h3>What?</h3>
            <p>We want to you to do you best work using the assets we provide. We have deliberately designed 4 shots to be a approximately 11 seconds. Each shot is voiced by professional actors and has rough animatics but you are free to design the cinemaphotography however you like. This shot will be one for your demo reel. Play with Noah and bring him to life.</p>
          </article>
          <article className="comic-panel comic-who">
            <h3>Who?</h3>
            <p>This competition is open to all animators. 2D or 3D, student or veteran. As long as you can bring Noah to life move, you are welcome.</p>
          </article>
        </div>
        <div className="info-session" id="info-session">
          <div className="info-copy">
            <p className="info-live"><span className="info-dot" aria-hidden="true" />LIVE ON ZOOM</p>
            <h2>Come to the info session.</h2>
            <p>Late September 2026 (exact time TBC)</p>
            <p>A live Zoom call where we walk through the competition, show the Noah rigs and assets, and answer every question you throw at us — briefs, deadlines, formats, prizes, the lot. Bring your camera off and your questions on. A recording of the call will be distributed to the email list so dont worry if you can't make it.</p>
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
            {infoSubmitted ? <p className="success-message">Seat saved. The Zoom invite is on its way to your inbox.</p> : <form className="info-form" onSubmit={handleInfoSubmit}><label htmlFor="info-email">Email address:</label><input id="info-email" type="email" required value={infoEmail} onChange={(event) => setInfoEmail(event.target.value)} placeholder="you@example.com" /><button type="submit" className="info-submit"><strong>sign me up</strong></button></form>}
            <p className="fine-print">One email with the joining link. No spam, no noise.</p>
          </div>
        </div>
        <div className="competition-sponsors"><p className="sponsors-title">Big thanks to our competition sponsors</p><div className="competition-logos" aria-label="Sponsors: Marionette and Animation Mentor"><img className="comp-logo" src="/logos/marionette.png" alt="Marionette" /><img className="comp-logo" src="/logos/animation-mentor.png" alt="Animation Mentor" /></div></div>
      </section>

      <section className="rig section-pad" id="rig">
        <div className="rig-art"><img className="rig-image" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/noah_sitting-gsXkdgTE2zwn8JUtN3HUMLA2bcMnFl.png" alt="Hand-drawn Noah seated in a turquoise outfit with an oversized salmon pacifier" /></div>
        <div className="rig-copy"><SectionLabel>The Rigs</SectionLabel><h2>2D & 3D<br /><em>rigs available</em></h2><p>At the start of the competition, we will provide 3D and 2D rigs, distributed via Gumroad.</p></div>
      </section>

      <section className="team section-pad" id="team"><div className="section-aside"><SectionLabel>The crew</SectionLabel></div><div className="team-content"><h2>A small crew with<br /><em>big references.</em></h2><div className="team-grid"><div><p className="team-role">MADE BY</p><h3>Animationfolk</h3></div><div><p className="team-role">ADVISORS FROM</p><p>ex-Prime Video / Disney<br />ex-DreamWorks<br />ex-Framestore / ILM</p></div></div><p className="team-footer">As well as folk from some of the best known studios on the planet, we have a scupltor working on a real world model of Noah. Because we believe that the craftsmanship and artistry of design and animation takes a leading role!</p><div className="crew-grid">{crew.map((person) => (<a key={person.handle} className="crew-card card-lift" href={`https://www.linkedin.com/in/${person.handle}`} target="_blank" rel="noreferrer"><span className="crew-name">{person.name}</span><span className="crew-link">LinkedIn ↗</span></a>))}</div><div className="team-logos" aria-label="Companies represented across the team and advisor network"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logos-obS7ydflIxy2t5sOPVYPVhdT8rzNE5.png" alt="Grayscale logo strip featuring Microsoft, Disney, Amazon Studios, Prime Video, Paramount, Meta, Hasbro, and DreamWorks" /></div></div></section>


      <section className="community community-qr" id="community"><div className="community-copy"><SectionLabel>Community</SectionLabel><h2>Join the broadcast.<br /><em>Not a group.</em></h2><p>Updates, rig drops, competition news, and the occasional Noah-related emergency. A broadcast channel keeps the noise useful and the admin survivable.</p><a className="black-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">OPEN WHATSAPP ↗</a></div><a className="qr-card card-lift" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span className="qr-eyebrow">SCAN TO JOIN</span><span className="qr-frame"><img src="/whatsapp-qr.png" alt="Scan this QR code to join the Noah WhatsApp channel" /></span><span className="qr-hint">Point your camera here ↗</span></a></section>

      <section className="policy section-pad"><div className="section-aside"><SectionLabel>AI policy</SectionLabel></div><div className="policy-copy"><h2>We care about<br /><em>the output.</em></h2><p>Assistive AI is changing how everyone works and we know of super talented artists using AI tools to generate great content. Ultimately we want quality and our entries will be based on quality of animation, story telling and craft. Like many teams assitive AI does help expand our capabilities. For example, we can run research tasks to find sponsors for this competition. Even this website was coded with the help of a coding assistant. However, generative AI text-to-video does warrant a longer conversation. We want to be transparent and we want you to be transparent. If there is demand for entrants primarily using assitive AI tools we want to know about it and have that conversation so we can split the award categories across 3D, 2D and AI. If you are considering entering but will not because of this statement, we would also be very interested to hear about that view and have an open conversation about it. Please feel free to email us on competition@noahtoddler.com</p><p>We value the hand, the eye, the odd choice, and the person behind it. Our standard is artistic integrity, not a purity test. Make good work. Be honest about how you made it.</p></div></section>

      <footer className="site-footer"><a className="wordmark" href="#top">NOAH</a><div className="footer-bottom"><p>© 2026 Animation Folk Ltd</p><div className="footer-links"><a href={TIKTOK_URL} target="_blank" rel="noreferrer">TikTok ↗</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram ↗</a></div></div></footer>
    </main >
  )
}
