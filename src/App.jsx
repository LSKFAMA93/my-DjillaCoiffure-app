import { useEffect, useState } from 'react'
import './App.css'

const services = [
  {
    name: 'Tresses & nattes',
    detail: 'Des tresses protectrices et des créations soignées, adaptées à votre style.',
    price: 'À partir de 5 000 FCFA',
    image: '/images/coiffure-1.jpg',
    value: 'tresses',
  },
  {
    name: 'Locks & dreadlocks',
    detail: 'Création, entretien et retwist de locks avec soins hydratants et conseils personnalisés.',
    price: 'À partir de 10 000 FCFA',
    image: '/images/coiffure-2.jpg',
    value: 'locks',
  },
  {
    name: 'Tissage & perruques',
    detail: 'Une pose professionnelle, avec un choix de textures pour composer le style qui vous ressemble.',
    price: 'À partir de 15 000 FCFA',
    image: '/images/coiffure-3.jpg',
    value: 'tissage',
  },
  {
    name: 'Soins capillaires',
    detail: 'Un diagnostic personnalisé et des soins nourrissants pour vos cheveux.',
    price: 'À partir de 3 000 FCFA',
    image: '/images/salon.jpg',
    value: 'soins',
  },
  {
    name: 'Henné traditionnel',
    detail: 'Des motifs dessinés à la main, inspirés des traditions et de vos envies.',
    price: 'Sur devis',
    image: '/images/tatouage-1.jpg',
    value: 'henne',
  },
]

const gallery = [
  { title: 'Tresses africaines', type: 'coiffure', image: '/images/coiffure-1.jpg', service: 'tresses' },
  { title: 'Boucles naturelles', type: 'coiffure', image: '/images/coiffure-2.jpg', service: 'locks' },
  { title: 'Coupe courte', type: 'coiffure', image: '/images/coiffure-3.jpg', service: 'tissage' },
  { title: 'Chignon tressé', type: 'coiffure', image: '/images/m.jpg', service: 'tresses' },
  { title: 'Henné floral', type: 'henne', image: '/images/qq.jpg', service: 'henne' },
  { title: 'Motifs traditionnels', type: 'henne', image: '/images/lllll.jpg', service: 'henne' },
]

const serviceOptions = [
  { value: 'tresses', label: 'Tresses africaines' },
  { value: 'locks', label: 'Locks & dreadlocks' },
  { value: 'tissage', label: 'Tissage & perruques' },
  { value: 'soins', label: 'Soins capillaires' },
  { value: 'coupe', label: 'Coupe & brushing' },
  { value: 'henne', label: 'Tatouage au henné' },
  { value: 'henne-personnalise', label: 'Motif au henné personnalisé' },
]

const filters = [
  { label: 'Tout voir', value: 'all' },
  { label: 'Coiffure', value: 'coiffure' },
  { label: 'Henné', value: 'henne' },
]

function getLocalDate() {
  const date = new Date()
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  return date.toISOString().slice(0, 10)
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedService, setSelectedService] = useState('')
  const [minimumDate] = useState(getLocalDate)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  function chooseService(service, style) {
    setSelectedService(service)
    if (style) {
      const notes = document.getElementById('notes')
      if (notes) notes.value = style
    }
    setMenuOpen(false)
  }

  function handleBooking(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const serviceLabel = serviceOptions.find((service) => service.value === formData.get('service'))?.label
    const message = [
      'Bonjour 223Djilla-Coiffure, je souhaite réserver :',
      `Nom : ${formData.get('name')}`,
      `Téléphone : ${formData.get('phone')}`,
      `Service : ${serviceLabel}`,
      `Date : ${formData.get('date')}`,
      `Heure : ${formData.get('time')}`,
      formData.get('notes') ? `Notes : ${formData.get('notes')}` : '',
    ].filter(Boolean).join('\n')

    window.location.assign(`https://wa.me/22374743763?text=${encodeURIComponent(message)}`)
  }

  const visibleGallery = gallery.filter((item) => activeFilter === 'all' || item.type === activeFilter)

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#accueil" onClick={() => setMenuOpen(false)} aria-label="223 Djilla Coiffure, accueil">
            <span className="brand-mark" aria-hidden="true">D<span>.</span></span>
            <span className="brand-copy">
              <strong>223 Djilla</strong>
              <small>COIFFURE & BEAUTÉ</small>
            </span>
          </a>

          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav id="primary-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navigation principale">
            <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
            <a href="#prestations" onClick={() => setMenuOpen(false)}>Prestations</a>
            <a href="#galerie" onClick={() => setMenuOpen(false)}>Galerie</a>
            <a href="#salon" onClick={() => setMenuOpen(false)}>Le salon</a>
            <a className="nav-cta" href="#reservation" onClick={() => setMenuOpen(false)}>Prendre rendez-vous <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> L'ART DE LA BEAUTÉ À KALABAN-CORO</p>
            <h1>Votre beauté,<br />notre <em>savoir-faire.</em></h1>
            <p className="hero-description">
              Coiffure, soins capillaires et henné traditionnel — une parenthèse beauté pensée pour vous.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#reservation">Réserver ma visite <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#prestations">Découvrir nos prestations <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero-note">
              <span className="note-stars" aria-hidden="true">✦ ✦ ✦</span>
              <span>Un salon accueillant, des gestes maîtrisés,<br />et un résultat qui vous ressemble.</span>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/1791372553065.jpg" alt="Portrait d'une cliente après sa coiffure" fetchPriority="high" />
            <div className="hero-photo-caption"><span>223</span><span>Votre moment beauté</span></div>
            <div className="hero-location"><span aria-hidden="true">⌖</span> KALABAN-CORO · MALI</div>
          </div>
          <a className="hero-scroll" href="#prestations" aria-label="Faire défiler vers les prestations"><span /> DÉFILER</a>
        </section>

        <section className="intro-band" aria-label="Présentation du salon">
          <p>La beauté dans le détail.</p>
          <span className="intro-divider" aria-hidden="true">✳</span>
          <p>La tradition avec une touche moderne.</p>
          <span className="intro-divider" aria-hidden="true">✳</span>
          <p>Votre rendez-vous à Kalaban-Coro.</p>
        </section>

        <section className="section services-section" id="prestations">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> CE QUE NOUS FAISONS</p>
              <h2>Des soins faits<br />pour <em>vous révéler.</em></h2>
            </div>
            <p className="section-lead">De la coiffure au henné, chaque prestation commence par l'écoute et se termine par le souci du détail.</p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.value}>
                <a className="service-image" href="#reservation" onClick={() => chooseService(service.value)}>
                  <img src={service.image} alt={service.name} loading="lazy" />
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </a>
                <div className="service-content">
                  <div className="service-title-row">
                    <h3>{service.name}</h3>
                    <span>{service.price}</span>
                  </div>
                  <p>{service.detail}</p>
                  <a href="#reservation" onClick={() => chooseService(service.value)} className="service-link">Choisir cette prestation <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="craft-section" aria-label="Notre approche">
          <div className="craft-image">
            <img src="/images/equipe.jpg" alt="Une cliente accueillie au salon" loading="lazy" />
            <div className="craft-image-tag">LE GESTE JUSTE, LE SOIN EN PLUS</div>
          </div>
          <div className="craft-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> L'ESPRIT DJILLA</p>
            <h2>Un savoir-faire<br />qui a du <em>cœur.</em></h2>
            <p>Depuis 2014, notre salon célèbre les cheveux, les traditions et les histoires de celles et ceux qui nous font confiance. Ici, on prend le temps de vous écouter et de créer un style qui vous ressemble.</p>
            <a className="button button-outline" href="#salon">Rencontrer le salon <span aria-hidden="true">↗</span></a>
            <div className="craft-stamp" aria-hidden="true"><span>BEAUTÉ</span><strong>223</strong><span>DEPUIS 2014</span></div>
          </div>
        </section>

        <section className="section gallery-section" id="galerie">
          <div className="section-heading gallery-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> INSPIRATION</p>
              <h2>Nos dernières<br /><em>créations.</em></h2>
            </div>
            <div className="gallery-intro">
              <p>Chaque création est unique. Découvrez quelques idées et choisissez celle qui vous inspire.</p>
              <a className="text-link" href="#reservation">Parlons de votre projet <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="gallery-filters" role="group" aria-label="Filtrer les créations">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter.value}
                className={activeFilter === filter.value ? 'is-active' : ''}
                aria-pressed={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {visibleGallery.map((item) => (
              <article className="gallery-card" key={item.title}>
                <a href="#reservation" onClick={() => chooseService(item.service, item.title)}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="gallery-overlay"><span>{item.title}</span><span aria-hidden="true">↗</span></span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="booking-section" id="reservation">
          <div className="booking-inner">
            <div className="booking-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> PRENONS RENDEZ-VOUS</p>
              <h2>Un instant<br />rien qu'à <em>vous.</em></h2>
              <p>Choisissez votre prestation et votre créneau. Votre demande sera préparée dans WhatsApp pour une confirmation rapide par notre équipe.</p>
              <div className="booking-contact">
                <span className="contact-icon" aria-hidden="true">↗</span>
                <span><small>UNE QUESTION ? APPELEZ-NOUS</small><a href="tel:+22374743763">+223 74 74 37 63</a></span>
              </div>
              <div className="booking-hours">
                <h3>Horaires du salon</h3>
                <p>Mardi – samedi <span>08:00 – 20:00</span></p>
                <p>Dimanche <span>09:00 – 18:00</span></p>
                <p>Lundi <span>Sur rendez-vous</span></p>
              </div>
            </div>
            <form className="booking-form" onSubmit={handleBooking}>
              <p className="form-kicker">RÉSERVATION EN LIGNE</p>
              <h3>Votre prochain rendez-vous</h3>
              <div className="form-row">
                <label>Nom complet<input name="name" type="text" placeholder="Ex. Aïssata Traoré" autoComplete="name" required /></label>
                <label>Téléphone<input name="phone" type="tel" placeholder="+223 XX XX XX XX" autoComplete="tel" required /></label>
              </div>
              <label>Prestation souhaitée
                <select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required>
                  <option value="" disabled>Choisir une prestation</option>
                  {serviceOptions.map((service) => <option value={service.value} key={service.value}>{service.label}</option>)}
                </select>
              </label>
              <div className="form-row">
                <label>Date souhaitée<input name="date" type="date" min={minimumDate} required /></label>
                <label>Heure souhaitée
                  <select name="time" defaultValue="" required>
                    <option value="" disabled>Choisir une heure</option>
                    {['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map((time) => (
                      <option value={time} key={time}>{time.replace(':', 'h')}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label>Une précision à nous donner ? <span className="optional">(facultatif)</span>
                <textarea id="notes" name="notes" rows="3" placeholder="Style souhaité, longueur, allergies…"></textarea>
              </label>
              <button className="button button-dark booking-submit" type="submit">Continuer sur WhatsApp <span aria-hidden="true">↗</span></button>
              <p className="form-privacy">Votre demande n'est pas enregistrée en ligne. Elle sera envoyée à notre équipe via WhatsApp.</p>
            </form>
          </div>
        </section>

        <section className="about-section section" id="salon">
          <div className="about-image">
            <img src="/images/1791372533785.jpg" alt="Coiffure réalisée avec soin dans notre salon" loading="lazy" />
            <span className="about-image-note">TRADITION · CRÉATIVITÉ · SOIN</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> BIENVENUE CHEZ DJILLA</p>
            <h2>La beauté est<br />une <em>histoire à partager.</em></h2>
            <p>Fondé en 2014 à Kalaban-Coro, 223 Djilla Coiffure est né d'une passion pour l'art capillaire africain et l'envie de sublimer la beauté naturelle de chaque personne.</p>
            <p>Notre équipe associe techniques actuelles et gestes traditionnels dans une ambiance chaleureuse, pour que vous vous sentiez bien dès votre arrivée.</p>
            <div className="about-values">
              <div><span>01</span><strong>À votre écoute</strong><p>Un conseil adapté à vos envies.</p></div>
              <div><span>02</span><strong>Le goût du détail</strong><p>Un travail soigné, à chaque étape.</p></div>
            </div>
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div>
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> VOTRE SALON À KALABAN-CORO</p>
            <h2>On se retrouve <em>bientôt ?</em></h2>
          </div>
          <a className="button button-outline" href="https://wa.me/22374743763?text=Bonjour%20223Djilla-Coiffure%2C%20je%20souhaite%20prendre%20rendez-vous" target="_blank" rel="noreferrer">Écrire sur WhatsApp <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#accueil" aria-label="223 Djilla Coiffure, retour à l'accueil">
          <span className="brand-mark" aria-hidden="true">D<span>.</span></span>
          <span className="brand-copy"><strong>223 Djilla</strong><small>COIFFURE & BEAUTÉ</small></span>
        </a>
        <p>Kalaban-Coro, Mali</p>
        <a href="mailto:contact@223djilla.ml">contact@223djilla.ml</a>
        <span className="footer-copy">© {new Date().getFullYear()} 223 Djilla Coiffure</span>
      </footer>
    </>
  )
}

export default App
