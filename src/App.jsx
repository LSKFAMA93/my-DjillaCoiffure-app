import { useEffect, useState, useMemo } from 'react'
import './App.css'

// Services proposés avec tarifs et détails professionnels
const services = [
  {
    id: 'tresses',
    name: 'Tresses & Nattes Protectrices',
    category: 'Coiffure Protectrice',
    detail: 'Box braids, knotless, nattes collées artistiques et fulani braids. Réalisées avec précision et respect de la fibre capillaire.',
    price: 'À partir de 5 000 FCFA',
    duration: '2h - 4h',
    image: '/images/coiffure-1.jpg',
    value: 'tresses',
    badge: 'Populaire',
  },
  {
    id: 'tissage',
    name: 'Tissages, Perruques & Lace',
    category: 'Pose & Stylisme',
    detail: 'Pose lace frontal indétectable, closure, piqué-lâché, tissage fermé ou ouvert avec baby hair ciselés et finitions lisses.',
    price: 'À partir de 12 000 FCFA',
    duration: '1h30 - 3h',
    image: '/images/IMG-20261003-WA0008.jpg',
    value: 'tissage',
    badge: 'Tendance',
  },
  {
    id: 'locks',
    name: 'Locks & Passion Twists',
    category: 'Entretien & Création',
    detail: 'Départ de locks, retwist, interlock, coiffures sur locks et twists protecteurs hydratés avec des produits naturels.',
    price: 'À partir de 10 000 FCFA',
    duration: '2h - 3h30',
    image: '/images/coiffure-2.jpg',
    value: 'locks',
    badge: 'Expertise',
  },
  {
    id: 'coupes',
    name: 'Coupes, Brushing & Fingerwaves',
    category: 'Coupe & Coiffage',
    detail: 'Sculpture fingerwaves signature, coupes courtes pixie, tapered cut afro bouclé, traçage net et mise en plis soignée.',
    price: 'À partir de 4 000 FCFA',
    duration: '45m - 1h30',
    image: '/images/1791372561825.jpg',
    value: 'coupe',
    badge: 'Signature',
  },
  {
    id: 'ceremonie',
    name: 'Mariage & Grandes Cérémonies',
    category: 'Haute Couture',
    detail: 'Chignons haute couture, coiffures d’apparat florales pour mariée, baptême et réceptions avec pose d’accessoires.',
    price: 'À partir de 20 000 FCFA',
    duration: '3h - 4h',
    image: '/images/1791372533785.jpg',
    value: 'ceremonie',
    badge: 'Événement',
  },
  {
    id: 'henne',
    name: 'Henné Traditionnel & Moderne',
    category: 'Art Corporel',
    detail: 'Dentelles au henné noir et rouge, arabesques mandingues, motifs nuptiaux mains et pieds réalisés à main levée par nos artistes.',
    price: 'À partir de 4 000 FCFA',
    duration: '45m - 2h',
    image: '/images/IMG-20230128-WA0006.jpg',
    value: 'henne',
    badge: 'Tradition',
  },
  {
    id: 'soins',
    name: 'Soins Profonds & Spa Capillaire',
    category: 'Santé Capillaire',
    detail: 'Bain d’huiles précieuses, masques nutritifs pour cheveux texturés, porosité haute/basse, démêlage doux et revitalisation.',
    price: 'À partir de 3 000 FCFA',
    duration: '45m - 1h',
    image: '/images/3.jpg',
    value: 'soins',
    badge: 'Bien-être',
  },
  {
    id: 'manucure',
    name: 'Manucure & Onglerie',
    category: 'Beauté des Mains',
    detail: 'Mise en beauté des ongles, pose vernis, faux ongles et finitions impeccables pour compléter votre séance de henné.',
    price: 'À partir de 3 500 FCFA',
    duration: '45m',
    image: '/images/salon.jpg',
    value: 'manucure',
    badge: 'Esthétique',
  },
]

// Catalogue complet de modèles pour le choix des clientes
const catalogModels = [
  // --- TRESSES & NATTES ---
  {
    id: 'mod-1',
    title: 'Box Braids Tracés Diamant',
    category: 'tresses',
    categoryLabel: 'Tresses & Nattes',
    detail: 'Tresses longues avec séparations nettes en losanges/diamants. Texture douce et maintien longue durée.',
    duration: '3h30',
    price: '10 000 FCFA',
    image: '/images/coiffure-1.jpg',
    serviceValue: 'tresses',
    tags: ['Tresses', 'Box Braids', 'Long', 'Protectrice'],
  },
  {
    id: 'mod-2',
    title: 'Tresses Plaquées & Queue Bouclée',
    category: 'tresses',
    categoryLabel: 'Tresses & Nattes',
    detail: 'Nattes collées vers le sommet avec cascade de boucles volumineuses et baby hair sculptés.',
    duration: '2h30',
    price: '8 000 FCFA',
    image: '/images/s.jpg',
    serviceValue: 'tresses',
    tags: ['Tresses collées', 'Queue de cheval', 'Boucles'],
  },
  {
    id: 'mod-3',
    title: 'Chignon Haut Tressé Haute Couture',
    category: 'tresses',
    categoryLabel: 'Tresses & Nattes',
    detail: 'Chignon haut sophistiqué composé de tresses entrelacées. Idéal pour cérémonies et sorties élégantes.',
    duration: '2h00',
    price: '7 000 FCFA',
    image: '/images/m.jpg',
    serviceValue: 'tresses',
    tags: ['Chignon', 'Tresses', 'Chic', 'Soirée'],
  },
  {
    id: 'mod-4',
    title: 'High Afro Puff & Tresse Couronne',
    category: 'tresses',
    categoryLabel: 'Tresses & Nattes',
    detail: 'Puff volumineux naturel sublimé par une natte plaquée fine en bandeau frontal.',
    duration: '1h30',
    price: '6 000 FCFA',
    image: '/images/n.jpg',
    serviceValue: 'tresses',
    tags: ['Afro', 'Naturel', 'Tresse bandeau', 'Puff'],
  },

  // --- TISSAGES & PERRUQUES ---
  {
    id: 'mod-5',
    title: 'Carré Lisse Frontal & Baby Hair',
    category: 'tissage',
    categoryLabel: 'Tissages & Perruques',
    detail: 'Pose lace frontal ultra-plate avec coupe carrée lisse effet miroir et tempe adoucie.',
    duration: '2h00',
    price: '15 000 FCFA',
    image: '/images/IMG-20261003-WA0008.jpg',
    serviceValue: 'tissage',
    tags: ['Lace wig', 'Carré lisse', 'Frontal', 'Tendance'],
  },
  {
    id: 'mod-6',
    title: 'Lace Plongeante Brillance Intense',
    category: 'tissage',
    categoryLabel: 'Tissages & Perruques',
    detail: 'Carré plongeant soyeux avec tracé latéral net et fixation longue tenue confortable.',
    duration: '2h30',
    price: '18 000 FCFA',
    image: '/images/1791372715152.jpg',
    serviceValue: 'tissage',
    tags: ['Lace wig', 'Carré plongeant', 'Soyeux'],
  },
  {
    id: 'mod-7',
    title: 'Perruque Bouclée Deep Wave',
    category: 'tissage',
    categoryLabel: 'Tissages & Perruques',
    detail: 'Ondulations profondes souples et denses pour un volume glamour et naturel sans effort.',
    duration: '2h30',
    price: '15 000 FCFA',
    image: '/images/p.jpg',
    serviceValue: 'tissage',
    tags: ['Deep Wave', 'Boucles', 'Volume', 'Wig'],
  },

  // --- COUPES & CHEVEUX NATURELS ---
  {
    id: 'mod-8',
    title: 'Fingerwaves Sculptées Signature Djilla',
    category: 'coupes',
    categoryLabel: 'Coupes & Naturel',
    detail: 'Notre modèle signature : vagues crantées à la cire brillante et nuque effilée. L’élégance absolue.',
    duration: '1h30',
    price: '7 000 FCFA',
    image: '/images/1791372561825.jpg',
    serviceValue: 'coupe',
    tags: ['Fingerwaves', 'Coupe courte', 'Signature', 'Vagues'],
  },
  {
    id: 'mod-9',
    title: 'Profil Sculpté & Dégradé Fin',
    category: 'coupes',
    categoryLabel: 'Coupes & Naturel',
    detail: 'Vue de profil travaillée au peigne fin et gel nourrissant, soulignant les contours du visage.',
    duration: '1h30',
    price: '7 000 FCFA',
    image: '/images/1791372553065.jpg',
    serviceValue: 'coupe',
    tags: ['Sculpture', 'Contours', 'Profil', 'Élégant'],
  },
  {
    id: 'mod-10',
    title: 'Tapered Cut Afro & Boucles Définies',
    category: 'coupes',
    categoryLabel: 'Coupes & Naturel',
    detail: 'Coupe courte dégradée sur les côtés mettant en valeur des boucles texturées hydratées et brillantes.',
    duration: '1h00',
    price: '5 000 FCFA',
    image: '/images/ss.jpg',
    serviceValue: 'coupe',
    tags: ['Tapered cut', 'Boucles', 'Afro', 'Naturel'],
  },
  {
    id: 'mod-11',
    title: 'Coupe Pixie Chic & Frange Lisse',
    category: 'coupes',
    categoryLabel: 'Coupes & Naturel',
    detail: 'Coupe courte asymétrique avec frange balayée sur le front. Moderne et facile à entretenir.',
    duration: '1h00',
    price: '6 000 FCFA',
    image: '/images/kkk.jpg',
    serviceValue: 'coupe',
    tags: ['Pixie', 'Frange', 'Asymétrique', 'Tendance'],
  },
  {
    id: 'mod-12',
    title: 'Boucles Texturées & Mèches Dessinées',
    category: 'coupes',
    categoryLabel: 'Coupes & Naturel',
    detail: 'Mise en forme douce des boucles avec définition mèche par mèche et brillance légère.',
    duration: '1h00',
    price: '5 000 FCFA',
    image: '/images/coiffure-3.jpg',
    serviceValue: 'coupe',
    tags: ['Boucles courtes', 'Définition', 'Brushing'],
  },
  {
    id: 'mod-13',
    title: 'Coupe Barber & Traçage Texturé',
    category: 'coupes',
    categoryLabel: 'Coupes & Naturel',
    detail: 'Coupe à la tondeuse professionnelle, contours au millimètre et égalisation nette du volume.',
    duration: '45m',
    price: '3 000 FCFA',
    image: '/images/1.jpg',
    serviceValue: 'coupe',
    tags: ['Tondeuse', 'Barber', 'Traçage', 'Contours'],
  },

  // --- LOCKS & DREADLOCKS ---
  {
    id: 'mod-14',
    title: 'Passion Twists & Retwist Locks',
    category: 'locks',
    categoryLabel: 'Locks & Dreads',
    detail: 'Reprise soignée des racines au gel d’aloe vera et mise en forme en torsades courtes et souples.',
    duration: '3h00',
    price: '12 000 FCFA',
    image: '/images/coiffure-2.jpg',
    serviceValue: 'locks',
    tags: ['Locks', 'Retwist', 'Passion Twists', 'Soin'],
  },

  // --- MARIAGE & CÉRÉMONIE ---
  {
    id: 'mod-15',
    title: 'Chignon Sculptural Roses Cérémonie',
    category: 'ceremonie',
    categoryLabel: 'Mariage & Cérémonie',
    detail: 'Coiffure de mariée d’exception façonnée en pétales de roses lustrés, avec sérum nutritif.',
    duration: '3h30',
    price: '25 000 FCFA',
    image: '/images/1791372533785.jpg',
    serviceValue: 'ceremonie',
    tags: ['Mariée', 'Haute coiffure', 'Chignon roses', 'Prestige'],
  },

  // --- HENNÉ & TATOUAGE TRADITIONNEL ---
  {
    id: 'mod-16',
    title: 'Henné Nuptial Pieds & Dentelle',
    category: 'henne',
    categoryLabel: 'Henné & Tatouage',
    detail: 'Grand motif nuptial sur le pied avec trames en résille, rosaces et finitions fines à la cheville.',
    duration: '1h30',
    price: '10 000 FCFA',
    image: '/images/7726F365-CC18-49CA-AF1C-0C978F9A9360L0001.jpeg',
    serviceValue: 'henne',
    tags: ['Henné pied', 'Mariage', 'Dentelle', 'Résille'],
  },
  {
    id: 'mod-17',
    title: 'Henné d’Apparat Mains & Rubis Royal',
    category: 'henne',
    categoryLabel: 'Henné & Tatouage',
    detail: 'Henné noir profond orné d’incrustations traditionnelles couleur rubis sur le dos de la main.',
    duration: '1h30',
    price: '8 000 FCFA',
    image: '/images/B2A5C737-9AA8-4D62-B199-5EAE7EA6501AL0001.jpeg',
    serviceValue: 'henne',
    tags: ['Henné noir', 'Rubis', 'Mains', 'Royauté'],
  },
  {
    id: 'mod-18',
    title: 'Henné Nuptial Personnalisé "Mme Goïta"',
    category: 'henne',
    categoryLabel: 'Henné & Tatouage',
    detail: 'Tracé personnalisé avec calligraphie du nom, dentelle perlée et motifs délicats pour mariage.',
    duration: '2h00',
    price: '10 000 FCFA',
    image: '/images/IMG_20231001_125536.jpg',
    serviceValue: 'henne',
    tags: ['Personnalisé', 'Mariage', 'Calligraphie', 'Perles'],
  },
  {
    id: 'mod-19',
    title: 'Henné Noir Dentelle Florale',
    category: 'henne',
    categoryLabel: 'Henné & Tatouage',
    detail: 'Roses épanouies, arabesques et bagues de henné noir haute précision sur doigts et poignet.',
    duration: '1h00',
    price: '6 000 FCFA',
    image: '/images/IMG_20240302_122937.jpg',
    serviceValue: 'henne',
    tags: ['Fleurs', 'Dentelle', 'Henné noir', 'Mains'],
  },
  {
    id: 'mod-20',
    title: 'Henné Bicolore Mandingue Traditionnel',
    category: 'henne',
    categoryLabel: 'Henné & Tatouage',
    detail: 'Contraste saisissant entre noir de fumée et rouge chaud, inspiré des parures traditionnelles du Mali.',
    duration: '1h30',
    price: '8 000 FCFA',
    image: '/images/IMG-20230128-WA0006.jpg',
    serviceValue: 'henne',
    tags: ['Bicolore', 'Mandingue', 'Traditionnel', 'Prestige'],
  },
  {
    id: 'mod-21',
    title: 'Henné Rouge Floral & Initiale',
    category: 'henne',
    categoryLabel: 'Henné & Tatouage',
    detail: 'Bouquet floral au henné rouge bordeaux avec arabesque monogramme et quadrillage fin.',
    duration: '45m',
    price: '5 000 FCFA',
    image: '/images/IMG-20240119-WA0003.jpg',
    serviceValue: 'henne',
    tags: ['Henné rouge', 'Initiale', 'Fleurs', 'Fin'],
  },
  {
    id: 'mod-22',
    title: 'Henné Rosaces & Plume Poignet',
    category: 'henne',
    categoryLabel: 'Henné & Tatouage',
    detail: 'Motifs légers et aérés rappelant les bijoux de poignet et anneaux royaux.',
    duration: '40m',
    price: '4 000 FCFA',
    image: '/images/IMG-20230702-WA0023.jpg',
    serviceValue: 'henne',
    tags: ['Rosace', 'Plume', 'Poignet', 'Délicat'],
  },
  {
    id: 'mod-23',
    title: 'Henné Géométrique Pieds & Mains Mandingue',
    category: 'henne',
    categoryLabel: 'Henné & Tatouage',
    detail: 'Pointes de doigts noires unies et chevrons graphiques sur le coup de pied selon la tradition.',
    duration: '1h15',
    price: '7 000 FCFA',
    image: '/images/11.jpg',
    serviceValue: 'henne',
    tags: ['Pieds et mains', 'Géométrique', 'Noir', 'Tradition'],
  },
  {
    id: 'mod-24',
    title: 'Henné Végétal Arabesques & Chevrons',
    category: 'henne',
    categoryLabel: 'Henné & Tatouage',
    detail: 'Palmettes raffinées sur l’avant-bras et bagues géométriques sur les phalangettes.',
    duration: '45m',
    price: '5 000 FCFA',
    image: '/images/2.jpg',
    serviceValue: 'henne',
    tags: ['Arabesques', 'Chevrons', 'Élégance'],
  },
  {
    id: 'mod-25',
    title: 'Henné Rouge Fleurs de Lotus & Pieds',
    category: 'henne',
    categoryLabel: 'Henné & Tatouage',
    detail: 'Fleurs pleines au henné rouge vif avec résille sur doigts et orteils pour les grandes fêtes.',
    duration: '1h00',
    price: '6 000 FCFA',
    image: '/images/lllll.jpg',
    serviceValue: 'henne',
    tags: ['Lotus', 'Henné rouge', 'Fête', 'Mains et pieds'],
  },
  {
    id: 'mod-26',
    title: 'Henné Noir Feuilles Délicates Duo',
    category: 'henne',
    categoryLabel: 'Henné & Tatouage',
    detail: 'Motif végétal asymétrique étalé sur les deux mains avec liserés ombrés.',
    duration: '50m',
    price: '6 000 FCFA',
    image: '/images/qqqq.jpg',
    serviceValue: 'henne',
    tags: ['Feuilles', 'Duo mains', 'Ombré', 'Moderne'],
  },

  // --- SOINS & TRAITEMENTS ---
  {
    id: 'mod-27',
    title: 'Masque Hydratant Profond Haute Porosité',
    category: 'soins',
    categoryLabel: 'Soins & Traitements',
    detail: 'Application d’un soin riche beurre de karité et aloe vera pour sceller l’hydratation et fortifier le cheveu crépu.',
    duration: '1h00',
    price: '4 000 FCFA',
    image: '/images/3.jpg',
    serviceValue: 'soins',
    tags: ['Masque', 'Hydratation', 'Cheveux afros', 'Soin profond'],
  },
  {
    id: 'mod-28',
    title: 'Bain Nutritif & Shampoing Traitant',
    category: 'soins',
    categoryLabel: 'Soins & Traitements',
    detail: 'Lavage délicat, massage du cuir chevelu et rinçage soigné pour purifier et redonner éclat.',
    duration: '45m',
    price: '3 000 FCFA',
    image: '/images/XW.jpg',
    serviceValue: 'soins',
    tags: ['Shampoing', 'Massage', 'Purification'],
  },
  {
    id: 'mod-29',
    title: 'Manucure Salon & Beauté des Ongles',
    category: 'soins',
    categoryLabel: 'Soins & Traitements',
    detail: 'Nettoyage des cuticules, limage, pose de capsules ou vernis pour sublimer vos mains après le henné.',
    duration: '45m',
    price: '4 000 FCFA',
    image: '/images/salon.jpg',
    serviceValue: 'manucure',
    tags: ['Manucure', 'Ongles', 'Soin mains', 'Salon'],
  },
]

const filterTabs = [
  { value: 'all', label: 'Toutes les créations', icon: '✦' },
  { value: 'tresses', label: 'Tresses & Nattes', icon: '🧵' },
  { value: 'tissage', label: 'Tissages & Wigs', icon: '✨' },
  { value: 'coupes', label: 'Coupes & Naturel', icon: '✂️' },
  { value: 'locks', label: 'Locks & Twists', icon: '➰' },
  { value: 'ceremonie', label: 'Mariage & Prestige', icon: '👑' },
  { value: 'henne', label: 'Henné Traditionnel', icon: '🌿' },
  { value: 'soins', label: 'Soins & Manucure', icon: '💆🏾‍♀️' },
]

const serviceOptions = [
  { value: 'tresses', label: 'Tresses & Nattes africaines' },
  { value: 'tissage', label: 'Tissages, Perruques & Lace Wig' },
  { value: 'locks', label: 'Locks, Dreadlocks & Retwist' },
  { value: 'coupe', label: 'Coupes modernes, Barber & Fingerwaves' },
  { value: 'ceremonie', label: 'Coiffure de Mariage & Cérémonie' },
  { value: 'henne', label: 'Tatouage au Henné (Mains / Pieds)' },
  { value: 'soins', label: 'Soins capillaires profonds & Traitements' },
  { value: 'manucure', label: 'Manucure & Soins des ongles' },
]

const faqs = [
  {
    q: 'Dois-je apporter mes propres mèches ou extensions ?',
    a: 'Vous êtes libre d’apporter vos propres mèches, ou d’en acheter directement au salon. Nous disposons de mèches pour tresses de haute qualité, ainsi que de mèches bouclées et lisses adaptées.',
  },
  {
    q: 'Combien de temps à l’avance dois-je réserver ?',
    a: 'Pour une prestation courante (tresses, coupe, soin, henné), nous conseillons de réserver 24h à 48h à l’avance. Pour les coiffures de mariée ou grands événements, prévoyez 1 à 2 semaines pour bloquer le créneau idéal.',
  },
  {
    q: 'Le henné utilisé est-il sûr et naturel ?',
    a: 'Absolument ! Nos artistes utilisent des mélanges traditionnels préparés avec soin, assurant une belle couleur intense (noir profond ou rouge royal) qui tient plusieurs semaines tout en respectant votre peau.',
  },
  {
    q: 'Où se situe exactement le salon à Kalaban-Coro ?',
    a: 'Nous sommes idéalement situés à Kalaban-Coro (Bamako, Mali), facilement accessibles depuis la route principale. Dès votre réservation sur WhatsApp, nous vous envoyons la géolocalisation exacte.',
  },
  {
    q: 'Comment confirmer mon rendez-vous ?',
    a: 'Il vous suffit de remplir le formulaire ci-dessous avec le modèle choisi. Un message pré-rempli s’ouvre directement sur WhatsApp (+223 74 74 37 63) : notre équipe vous répond en quelques minutes pour valider.',
  },
]

function getLocalDate() {
  const date = new Date()
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  return date.toISOString().slice(0, 10)
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [selectedModel, setSelectedModel] = useState(null)
  const [quickViewModel, setQuickViewModel] = useState(null)
  const [toastMessage, setToastMessage] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [minimumDate] = useState(getLocalDate)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  // Fermer la modal avec Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setQuickViewModel(null)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function showToast(message) {
    setToastMessage(message)
    setTimeout(() => {
      setToastMessage('')
    }, 4000)
  }

  // Sélectionner un modèle précis
  function handleSelectModel(model) {
    setSelectedModel(model)
    setSelectedService(model.serviceValue)
    setQuickViewModel(null)
    setMenuOpen(false)

    // Pré-remplir les notes si disponibles
    const notesInput = document.getElementById('notes')
    if (notesInput) {
      notesInput.value = `Modèle choisi : ${model.title} (${model.price})`
    }

    showToast(`✓ Modèle « ${model.title} » ajouté à votre réservation !`)

    // Défiler en douceur jusqu'au formulaire
    const bookingSection = document.getElementById('reservation')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Choisir un service général
  function chooseService(serviceValue, customNote = '') {
    setSelectedService(serviceValue)
    if (customNote) {
      const notesInput = document.getElementById('notes')
      if (notesInput) notesInput.value = customNote
    }
    setMenuOpen(false)
    const bookingSection = document.getElementById('reservation')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function handleBooking(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const serviceLabel = serviceOptions.find((s) => s.value === formData.get('service'))?.label || formData.get('service')
    
    const messageParts = [
      '✨ *NOUVELLE RÉSERVATION - 223 DJILLA COIFFURE* ✨',
      '──────────────────────────',
      `👤 *Nom complet* : ${formData.get('name')}`,
      `📱 *Téléphone* : ${formData.get('phone')}`,
      `💇 *Prestation* : ${serviceLabel}`,
      selectedModel ? `🎯 *Modèle sélectionné* : ${selectedModel.title} (${selectedModel.price})` : '',
      `📅 *Date souhaitée* : ${formData.get('date')}`,
      `⏰ *Heure souhaitée* : ${formData.get('time')}`,
      formData.get('notes') ? `📝 *Précisions / Style* : ${formData.get('notes')}` : '',
      '──────────────────────────',
      'Merci de bien vouloir me confirmer la disponibilité. À très vite au salon !',
    ].filter(Boolean)

    const whatsappUrl = `https://wa.me/22374743763?text=${encodeURIComponent(messageParts.join('\n'))}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  // Filtrage combiné par onglet et recherche textuelle
  const filteredCatalog = useMemo(() => {
    return catalogModels.filter((item) => {
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter
      const query = searchQuery.trim().toLowerCase()
      if (!query) return matchesFilter

      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.detail.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query))

      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery])

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification" role="status" aria-live="polite">
          <span className="toast-icon">✨</span>
          <span>{toastMessage}</span>
          <button type="button" onClick={() => setToastMessage('')} aria-label="Fermer la notification">×</button>
        </div>
      )}

      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <span>✨ <strong>Salon ouvert du mardi au dimanche</strong> à Kalaban-Coro · Bamako</span>
          <span className="announcement-sep">•</span>
          <a href="tel:+22374743763" className="announcement-link">Appel direct : +223 74 74 37 63</a>
        </div>
      </div>

      {/* Header avec logo officiel */}
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#accueil" onClick={() => setMenuOpen(false)} aria-label="223 Djilla Coiffure, accueil">
            <div className="brand-avatar-wrap">
              <img src="/icon-192.png" alt="Logo 223 Djilla Coiffure" className="brand-avatar-img" />
              <span className="brand-crown-badge">👑</span>
            </div>
            <span className="brand-copy">
              <strong>223 Djilla Coiffure</strong>
              <small>LA BEAUTÉ, NOTRE PASSION · KALABAN-CORO</small>
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
            <a href="#catalogue" onClick={() => setMenuOpen(false)}>
              Modèles & Galerie <span className="nav-badge">{catalogModels.length}</span>
            </a>
            <a href="#salon" onClick={() => setMenuOpen(false)}>Le Salon</a>
            <a href="#avis" onClick={() => setMenuOpen(false)}>Avis</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a className="nav-cta" href="#reservation" onClick={() => setMenuOpen(false)}>
              Prendre rendez-vous <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <div className="hero-status-pill">
              <span className="pulsing-dot" />
              <span>Salon Ouvert · Kalaban-Coro, Bamako</span>
            </div>
            <p className="eyebrow"><span className="eyebrow-line" /> L'ART DE LA BEAUTÉ & DU SAVOIR-FAIRE</p>
            <h1>Votre beauté,<br />notre <em>passion.</em></h1>
            <p className="hero-description">
              Tresses protectrices, pose de perruques & lace wig, locks, coupes texturées et henné traditionnel mandingue. Une expérience sur-mesure entre tradition et haute élégance.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#catalogue">
                Choisir mon modèle ({catalogModels.length}+) <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-outline" href="#reservation">
                Prendre rendez-vous <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <strong>10+</strong>
                <span>Ans d’expertise</span>
              </div>
              <div className="stat-sep" />
              <div className="stat-item">
                <strong>2 500+</strong>
                <span>Clientes sublimées</span>
              </div>
              <div className="stat-sep" />
              <div className="stat-item">
                <strong>4.9 ★</strong>
                <span>Note d’excellence</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="/images/1791372553065.jpg"
                alt="Modèle coiffure courte sculptée élégante - Djilla Coiffure"
                fetchPriority="high"
                className="hero-main-img"
              />
              <div className="hero-floating-card">
                <span className="card-stars">★★★★★</span>
                <strong>Finition Haute Couture</strong>
                <small>Kalaban-Coro · Bamako</small>
              </div>
            </div>
          </div>
        </section>

        {/* BANDEAU SERVICES PHARES */}
        <section className="intro-band" aria-label="Présentation rapide">
          <div className="intro-band-inner">
            <div className="intro-item"><span className="intro-icon">👑</span> <strong>Coiffure Sur-Mesure</strong> (Tresses, Lace, Locks)</div>
            <span className="intro-divider">✳</span>
            <div className="intro-item"><span className="intro-icon">🌿</span> <strong>Henné Traditionnel</strong> (Noir, Rouge & Nuptial)</div>
            <span className="intro-divider">✳</span>
            <div className="intro-item"><span className="intro-icon">💆🏾‍♀️</span> <strong>Soins Capillaires Naturels</strong></div>
            <span className="intro-divider">✳</span>
            <div className="intro-item"><span className="intro-icon">📍</span> <strong>Kalaban-Coro, Mali</strong></div>
          </div>
        </section>

        {/* SECTION PRESTATIONS */}
        <section className="section services-section" id="prestations">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> NOS SERVICES</p>
              <h2>Des soins pensés<br />pour <em>vous révéler.</em></h2>
            </div>
            <p className="section-lead">
              Chaque cheveu est unique. Nos coiffeurs et artistes vous accompagnent avec écoute, douceur et un geste maîtrisé.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.id}>
                <div className="service-card-top">
                  <span className="service-badge">{service.badge}</span>
                  <span className="service-number">0{index + 1}</span>
                </div>
                <div className="service-image-container">
                  <img src={service.image} alt={service.name} loading="lazy" />
                  <span className="service-duration-pill">{service.duration}</span>
                </div>
                <div className="service-content">
                  <span className="service-category">{service.category}</span>
                  <div className="service-title-row">
                    <h3>{service.name}</h3>
                  </div>
                  <p>{service.detail}</p>
                  <div className="service-footer-row">
                    <span className="service-price-tag">{service.price}</span>
                    <button
                      type="button"
                      className="button-link"
                      onClick={() => chooseService(service.value, `Prestation choisie : ${service.name}`)}
                    >
                      Réserver <span>↗</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CATALOGUE RICHE DE MODÈLES AVEC RECHERCHE & FILTRES */}
        <section className="section gallery-section" id="catalogue">
          <div className="section-heading gallery-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> CATALOGUE CLIENTS</p>
              <h2>Choisissez votre<br /><em>modèle préféré.</em></h2>
            </div>
            <div className="gallery-intro">
              <p>
                Explorez notre collection exclusive de <strong>{catalogModels.length} modèles</strong> de tresses, perruques, coupes et henné. Cliquez sur un modèle pour l’examiner et le réserver directement !
              </p>
              {selectedModel && (
                <div className="active-model-alert">
                  <span>Modèle sélectionné : <strong>{selectedModel.title}</strong></span>
                  <button type="button" onClick={() => setSelectedModel(null)}>Changer</button>
                </div>
              )}
            </div>
          </div>

          {/* Barre de recherche interactive */}
          <div className="catalog-search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Rechercher par style (ex: tresses, carré lisse, henné noir, boucles, mariage...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Rechercher un modèle de coiffure ou henné"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Effacer la recherche"
              >
                ×
              </button>
            )}
          </div>

          {/* Filtres par catégorie */}
          <div className="gallery-filters" role="tablist" aria-label="Filtrer les créations">
            {filterTabs.map((filter) => {
              const count = filter.value === 'all'
                ? catalogModels.length
                : catalogModels.filter((m) => m.category === filter.value).length
              return (
                <button
                  type="button"
                  key={filter.value}
                  role="tab"
                  className={activeFilter === filter.value ? 'is-active' : ''}
                  aria-selected={activeFilter === filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  <span className="tab-icon">{filter.icon}</span>
                  <span>{filter.label}</span>
                  <span className="tab-count">({count})</span>
                </button>
              )
            })}
          </div>

          {/* Grille des modèles */}
          {filteredCatalog.length === 0 ? (
            <div className="empty-catalog-state">
              <span className="empty-icon">✂️</span>
              <h3>Aucun modèle ne correspond à votre recherche</h3>
              <p>Essayez un autre mot-clé ou réinitialisez les filtres.</p>
              <button
                type="button"
                className="button button-outline"
                onClick={() => { setActiveFilter('all'); setSearchQuery('') }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="gallery-grid">
              {filteredCatalog.map((item) => {
                const isSelected = selectedModel?.id === item.id
                return (
                  <article className={`gallery-card${isSelected ? ' is-selected' : ''}`} key={item.id}>
                    <div className="gallery-card-media" onClick={() => setQuickViewModel(item)}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                      <span className="gallery-category-pill">{item.categoryLabel}</span>
                      <span className="gallery-zoom-prompt">Aperçu rapide 🔍</span>
                      {isSelected && <span className="selected-ribbon">✓ Sélectionné</span>}
                    </div>
                    <div className="gallery-card-info">
                      <div className="gallery-title-price">
                        <h4>{item.title}</h4>
                        <span className="model-price">{item.price}</span>
                      </div>
                      <p className="model-detail">{item.detail}</p>
                      <div className="gallery-card-meta">
                        <span className="meta-time">⏱ {item.duration}</span>
                        <div className="model-tags">
                          {item.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="tag-pill">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="gallery-action-buttons">
                        <button
                          type="button"
                          className="button button-card-view"
                          onClick={() => setQuickViewModel(item)}
                        >
                          Détails
                        </button>
                        <button
                          type="button"
                          className={`button ${isSelected ? 'button-card-chosen' : 'button-card-book'}`}
                          onClick={() => handleSelectModel(item)}
                        >
                          {isSelected ? '✓ Choisi' : 'Choisir ce modèle →'}
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </section>

        {/* MODAL APERÇU RAPIDE / LIGHTBOX DU MODÈLE */}
        {quickViewModel && (
          <div className="modal-backdrop" onClick={() => setQuickViewModel(null)} role="dialog" aria-modal="true">
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="modal-close"
                onClick={() => setQuickViewModel(null)}
                aria-label="Fermer la boîte de dialogue"
              >
                ✕
              </button>
              <div className="modal-body">
                <div className="modal-media">
                  <img src={quickViewModel.image} alt={quickViewModel.title} />
                  <span className="modal-category-badge">{quickViewModel.categoryLabel}</span>
                </div>
                <div className="modal-details">
                  <span className="modal-eyebrow">MODÈLE DISPONIBLE AU SALON</span>
                  <h3>{quickViewModel.title}</h3>
                  <div className="modal-price-time">
                    <span className="modal-price">{quickViewModel.price}</span>
                    <span className="modal-time">⏱ Durée estimée : {quickViewModel.duration}</span>
                  </div>
                  <p className="modal-description">{quickViewModel.detail}</p>
                  <div className="modal-tags-list">
                    <strong>Styles associés :</strong>
                    <div className="tags-flex">
                      {quickViewModel.tags.map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="modal-benefits">
                    <div>✓ Réalisation soignée par nos expertes</div>
                    <div>✓ Produits de finition et fixateur inclus</div>
                    <div>✓ Conseils personnalisés d'entretien à la maison</div>
                  </div>
                  <div className="modal-actions">
                    <button
                      type="button"
                      className="button button-gold modal-submit-btn"
                      onClick={() => handleSelectModel(quickViewModel)}
                    >
                      Prendre rendez-vous avec ce modèle <span>↗</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION LE SALON & L'ÉQUIPE AUTHENTIQUE */}
        <section className="craft-section" id="salon" aria-label="Notre approche et le salon">
          <div className="craft-image">
            <img
              src="/images/equipe.jpg"
              alt="Salon Djilla Coiffure avec l'enseigne néon dorée 'La beauté, notre passion'"
              loading="lazy"
            />
            <div className="craft-image-tag">📍 KALABAN-CORO · ENSEIGNE OFFICIELLE</div>
          </div>
          <div className="craft-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> L'ESPRIT DJILLA COIFFURE</p>
            <h2>Un salon chaleureux,<br />des gestes <em>d'experts.</em></h2>
            <p>
              Fondé en <strong>2014 à Kalaban-Coro</strong>, notre salon est né de l’amour pour l’art capillaire et la tradition du henné malien. Dans un cadre soigné, climatisé et équipé de miroirs de loge lumineux, nous prenons le temps de vous écouter pour concevoir la coiffure qui sublimera vos traits.
            </p>
            <div className="salon-highlights-grid">
              <div className="highlight-box">
                <span className="highlight-icon">✨</span>
                <strong>Artisans Passionnés</strong>
                <p>Spécialistes des tresses, lace wigs et henné à main levée.</p>
              </div>
              <div className="highlight-box">
                <span className="highlight-icon">🧴</span>
                <strong>Soins Protecteurs</strong>
                <p>Produits hydratants de qualité respectueux de votre cuir chevelu.</p>
              </div>
              <div className="highlight-box">
                <span className="highlight-icon">⏱️</span>
                <strong>Ponctualité & Confort</strong>
                <p>Accueil chaleureux, fauteuils confortables et respect des horaires.</p>
              </div>
              <div className="highlight-box">
                <span className="highlight-icon">👑</span>
                <strong>Finitions Impeccables</strong>
                <p>Baby hair travaillés, traçages nets et brillance durable.</p>
              </div>
            </div>
            <div className="craft-actions">
              <a className="button button-outline" href="#reservation">
                Réserver ma séance <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button-link-light"
                href="https://wa.me/22374743763?text=Bonjour%20Djilla%20Coiffure%2C%20je%20souhaite%20des%20informations%20sur%20vos%20créneaux"
                target="_blank"
                rel="noreferrer"
              >
                Discuter sur WhatsApp →
              </a>
            </div>
          </div>
        </section>

        {/* SECTION FORMULAIRE DE RÉSERVATION AVEC MODÈLE SÉLECTIONNÉ */}
        <section className="booking-section" id="reservation">
          <div className="booking-inner">
            <div className="booking-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> RÉSERVATION EN LIGNE DIRECTE</p>
              <h2>Un instant<br />rien qu'à <em>vous.</em></h2>
              <p>
                Remplissez votre demande en quelques secondes. Vos préférences (dont le modèle sélectionné) seront automatiquement préparées dans WhatsApp pour une confirmation instantanée.
              </p>

              {/* Aperçu du modèle sélectionné */}
              {selectedModel ? (
                <div className="booking-selected-model-card">
                  <img src={selectedModel.image} alt={selectedModel.title} className="selected-thumb" />
                  <div className="selected-info">
                    <span className="selected-badge">Modèle sélectionné</span>
                    <strong>{selectedModel.title}</strong>
                    <div className="selected-meta">
                      <span>{selectedModel.price}</span> • <span>⏱ {selectedModel.duration}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="selected-remove-btn"
                    onClick={() => setSelectedModel(null)}
                    title="Retirer ce modèle"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="booking-no-model-hint">
                  <span>💡 <em>Astuce :</em> Vous pouvez <a href="#catalogue">choisir un modèle précis dans la galerie</a> pour l’ajouter automatiquement à votre demande.</span>
                </div>
              )}

              <div className="booking-contact">
                <span className="contact-icon" aria-hidden="true">📞</span>
                <span>
                  <small>UNE QUESTION OU URGENCE ? APPELEZ-NOUS</small>
                  <a href="tel:+22374743763">+223 74 74 37 63</a>
                </span>
              </div>
              <div className="booking-hours">
                <h3>Horaires d’ouverture du salon</h3>
                <p>Mardi – Samedi <span>08:00 – 20:00</span></p>
                <p>Dimanche <span>09:00 – 18:00</span></p>
                <p>Lundi <span>Sur rendez-vous spécial</span></p>
              </div>
            </div>

            <form className="booking-form" onSubmit={handleBooking}>
              <p className="form-kicker">RÉSERVATION RAPIDE WHATSAPP</p>
              <h3>Planifiez votre visite</h3>

              <div className="form-row">
                <label>
                  Nom complet *
                  <input name="name" type="text" placeholder="Ex. Fatoumata Diallo" autoComplete="name" required />
                </label>
                <label>
                  Téléphone / WhatsApp *
                  <input name="phone" type="tel" placeholder="+223 74 74 37 63" autoComplete="tel" required />
                </label>
              </div>

              <label>
                Prestation souhaitée *
                <select
                  name="service"
                  value={selectedService}
                  onChange={(event) => setSelectedService(event.target.value)}
                  required
                >
                  <option value="" disabled>Choisir une prestation</option>
                  {serviceOptions.map((service) => (
                    <option value={service.value} key={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="form-row">
                <label>
                  Date souhaitée *
                  <input name="date" type="date" min={minimumDate} required />
                </label>
                <label>
                  Heure souhaitée *
                  <select name="time" defaultValue="" required>
                    <option value="" disabled>Choisir une heure</option>
                    {['08:30', '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map((time) => (
                      <option value={time} key={time}>{time.replace(':', 'h')}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Précisions, modèle ou longueur souhaitée <span className="optional">(facultatif)</span>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Ex : Mèches fournies par mes soins, longueur taille, henné sur les deux mains..."
                />
              </label>

              <button className="button button-gold booking-submit" type="submit">
                Confirmer mon rendez-vous sur WhatsApp <span>↗</span>
              </button>
              <p className="form-privacy">
                🔒 Vos informations sont directement transmises à notre salon via WhatsApp sécurisé pour bloquer votre place sans délai.
              </p>
            </form>
          </div>
        </section>

        {/* SECTION AVIS CLIENTS & TÉMOIGNAGES */}
        <section className="section reviews-section" id="avis">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> ELLES NOUS FONT CONFIANCE</p>
              <h2>Ce que disent<br />nos <em>clientes.</em></h2>
            </div>
            <div className="reviews-rating-summary">
              <span className="big-rating">4.9</span>
              <div className="rating-details">
                <span className="stars-gold">★★★★★</span>
                <small>Plus de 500 avis satisfaits à Kalaban-Coro</small>
              </div>
            </div>
          </div>

          <div className="reviews-grid">
            <article className="review-card">
              <div className="review-header">
                <span className="stars-gold">★★★★★</span>
                <span className="review-date">Il y a 3 jours</span>
              </div>
              <p className="review-text">
                « Mes tresses box braids sont juste magnifiques ! Le tracé en diamant est ultra propre, aucune douleur au cuir chevelu. L'équipe à Kalaban-Coro est douce et très accueillante. Je recommande les yeux fermés. »
              </p>
              <div className="review-author">
                <div className="author-avatar">AD</div>
                <div>
                  <strong>Aïssata D.</strong>
                  <small>Prestation : Tresses Box Braids Diamant</small>
                </div>
              </div>
            </article>

            <article className="review-card">
              <div className="review-header">
                <span className="stars-gold">★★★★★</span>
                <span className="review-date">La semaine dernière</span>
              </div>
              <p className="review-text">
                « Pour mon mariage, j'ai fait mon chignon et mon henné chez Djilla Coiffure. Le résultat était digne d’un magazine ! Le henné bicolore a tenu plus de 3 semaines avec une couleur superbe. Merci mille fois ! »
              </p>
              <div className="review-author">
                <div className="author-avatar">MK</div>
                <div>
                  <strong>Mariam K. (Mme Goïta)</strong>
                  <small>Prestation : Chignon Mariée & Henné Nuptial</small>
                </div>
              </div>
            </article>

            <article className="review-card">
              <div className="review-header">
                <span className="stars-gold">★★★★★</span>
                <span className="review-date">Il y a 2 semaines</span>
              </div>
              <p className="review-text">
                « Pose de lace wig avec carré lisse impeccable. Les baby hair sont naturels et ne bougent pas. Le salon est super propre, climatisé et on s’y sent comme une reine. Mon salon de référence à Bamako. »
              </p>
              <div className="review-author">
                <div className="author-avatar">FT</div>
                <div>
                  <strong>Fatoumata T.</strong>
                  <small>Prestation : Lace Frontal Carré Lisse</small>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* SECTION FOIRE AUX QUESTIONS (FAQ) */}
        <section className="section faq-section" id="faq">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> QUESTIONS FRÉQUENTES</p>
              <h2>Tout ce que vous<br />souhaitez <em>savoir.</em></h2>
            </div>
            <p className="section-lead">Des réponses claires pour préparer au mieux votre venue au salon.</p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.q}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* BANDEAU CONTACT & LOCALISATION */}
        <section className="contact-band" id="contact">
          <div className="contact-band-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> RENDEZ-VOUS À KALABAN-CORO</p>
            <h2>Votre nouvelle parenthèse <em>beauté.</em></h2>
            <p className="contact-band-sub">
              Venez vivre un moment d’exception chez 223 Djilla Coiffure. Notre équipe se réjouit de vous accueillir.
            </p>
          </div>
          <div className="contact-band-buttons">
            <a
              className="button button-gold"
              href="https://wa.me/22374743763?text=Bonjour%20223Djilla-Coiffure%2C%20je%20souhaite%20prendre%20rendez-vous"
              target="_blank"
              rel="noreferrer"
            >
              Écrire sur WhatsApp (+223 74 74 37 63) <span>↗</span>
            </a>
            <a className="button button-outline" href="tel:+22374743763">
              Appeler le salon <span>📞</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER PROFESSIONNEL */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <a className="brand footer-brand" href="#accueil" aria-label="223 Djilla Coiffure, retour à l'accueil">
              <img src="/icon-192.png" alt="223 Djilla Coiffure" className="footer-avatar" />
              <span className="brand-copy">
                <strong>223 Djilla Coiffure</strong>
                <small>LA BEAUTÉ, NOTRE PASSION</small>
              </span>
            </a>
            <p className="footer-desc">
              Salon de coiffure africaine moderne, spécialiste tresses protectrices, tissages, locks et henné traditionnel à Kalaban-Coro, Bamako - Mali depuis 2014.
            </p>
            <div className="footer-socials">
              <a
                href="https://wa.me/22374743763"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="WhatsApp"
              >
                💬 WhatsApp
              </a>
              <a
                href="https://www.tiktok.com/@diarradjillacoiffuremah5"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="TikTok Officiel"
              >
                🎵 TikTok
              </a>
              <a href="tel:+22374743763" className="social-btn" title="Téléphone">
                📞 +223 74 74 37 63
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Prestations</h4>
            <ul>
              <li><a href="#catalogue" onClick={() => setActiveFilter('tresses')}>Tresses & Nattes</a></li>
              <li><a href="#catalogue" onClick={() => setActiveFilter('tissage')}>Tissages & Lace Wig</a></li>
              <li><a href="#catalogue" onClick={() => setActiveFilter('locks')}>Locks & Twists</a></li>
              <li><a href="#catalogue" onClick={() => setActiveFilter('coupes')}>Coupes & Fingerwaves</a></li>
              <li><a href="#catalogue" onClick={() => setActiveFilter('ceremonie')}>Coiffures Mariage</a></li>
              <li><a href="#catalogue" onClick={() => setActiveFilter('henne')}>Henné Traditionnel</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#prestations">Services & Tarifs</a></li>
              <li><a href="#catalogue">Catalogue des Modèles</a></li>
              <li><a href="#salon">Le Salon</a></li>
              <li><a href="#avis">Témoignages</a></li>
              <li><a href="#faq">Questions Fréquentes</a></li>
              <li><a href="#reservation">Prendre Rendez-vous</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Coordonnées</h4>
            <p>📍 Kalaban-Coro, Bamako, Mali</p>
            <p>📞 <a href="tel:+22374743763">+223 74 74 37 63</a></p>
            <p>✉️ <a href="mailto:contact@223djilla.ml">contact@223djilla.ml</a></p>
            <p className="footer-hours-note">Du Mardi au Samedi : 08h - 20h<br />Dimanche : 09h - 18h</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 223 Djilla Coiffure. Tous droits réservés.</p>
          <p className="footer-credit">Conçu avec excellence pour une expérience client d’exception.</p>
        </div>
      </footer>

      {/* Floating Action Button mobile pour WhatsApp */}
      <a
        href="https://wa.me/22374743763?text=Bonjour%20223Djilla-Coiffure%2C%20je%20souhaite%20prendre%20rendez-vous"
        className="floating-whatsapp-btn"
        target="_blank"
        rel="noreferrer"
        aria-label="Contacter le salon sur WhatsApp"
      >
        <span className="floating-wa-icon">💬</span>
        <span className="floating-wa-label">Rendez-vous WhatsApp</span>
      </a>
    </>
  )
}

export default App
