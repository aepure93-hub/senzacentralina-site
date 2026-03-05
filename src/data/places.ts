export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  phone?: string;
  email?: string;
  website?: string;
}

export const museiItalia: Place[] = [
  { id: 1, name: "Museo Ducati", lat: 44.4725, lng: 11.3119, address: "Via Antonio Cavalieri Ducati 3", city: "Bologna", phone: "+39 051 6413111", website: "https://www.ducati.com/it/it/museo" },
  { id: 2, name: "Museo Piaggio", lat: 43.6837, lng: 10.5108, address: "Viale Rinaldo Piaggio 7", city: "Pontedera", phone: "+39 0587 27171", website: "https://www.museopiaggio.it" },
  { id: 3, name: "Museo Moto Guzzi", lat: 45.8527, lng: 9.3963, address: "Via Parodi 57", city: "Mandello del Lario", phone: "+39 0341 709111", website: "https://www.motoguzzi.com/it_IT/museo/" },
  { id: 4, name: "Museo MV Agusta", lat: 45.6334, lng: 9.2821, address: "Via Giovanni Macchi 144", city: "Schiranna", website: "https://www.mvagusta.com" },
  { id: 5, name: "Collezione Museo Fisogni", lat: 45.5856, lng: 8.8833, address: "Via Bianchi 25", city: "Tradate", phone: "+39 0331 841760", website: "https://www.museofisogni.org" },
  { id: 6, name: "Museo Nazionale della Scienza e della Tecnologia", lat: 45.4628, lng: 9.1706, address: "Via San Vittore 21", city: "Milano", phone: "+39 02 48555 1", website: "https://www.museoscienza.org" },
  { id: 7, name: "Museo dell'Automobile di Torino", lat: 45.0322, lng: 7.6734, address: "Corso Unità d'Italia 40", city: "Torino", phone: "+39 011 677666", website: "https://www.museoauto.com" },
  { id: 8, name: "Museo Bimota", lat: 44.1483, lng: 12.2356, address: "Via Giaccaglia 38", city: "Rimini", website: "https://www.bimota.it" },
  { id: 9, name: "Museo Benelli", lat: 43.7174, lng: 13.2187, address: "Via Mameli 22", city: "Pesaro", website: "https://www.benelli.com" },
  { id: 10, name: "Museo Morbidelli", lat: 43.7174, lng: 13.2187, address: "Via Morbidelli", city: "Pesaro", website: "https://www.morbidelli.info" },
  { id: 11, name: "Museo della Motocicletta Frera", lat: 45.6193, lng: 8.8502, address: "Via Frera", city: "Tradate" },
  { id: 12, name: "Museo Agusta", lat: 45.5944, lng: 8.9094, address: "Via Giovanni Agusta 520", city: "Cascina Costa di Samarate" },
  { id: 13, name: "Museo Storico Alfa Romeo", lat: 45.5133, lng: 9.0088, address: "Viale Alfa Romeo", city: "Arese", phone: "+39 02 4442 5418", website: "https://www.museoalfaromeo.com" },
  { id: 14, name: "Museo Tazio Nuvolari", lat: 45.1564, lng: 10.7915, address: "Piazza Broletto 9", city: "Mantova" },
  { id: 15, name: "Museo del Sidecar", lat: 43.8341, lng: 12.7835, address: "Via della Repubblica", city: "Cingoli" },
  { id: 16, name: "Museo della Moto e del Ciclismo", lat: 42.5558, lng: 12.6426, address: "Via Roma", city: "Ferentillo" },
  { id: 17, name: "Museo del Motorino", lat: 40.8518, lng: 14.2681, address: "Via dei Mille", city: "Napoli" },
  { id: 18, name: "Museo Nicolis", lat: 45.4382, lng: 10.9981, address: "Via Postumia", city: "Villafranca di Verona", phone: "+39 045 6303289", website: "https://www.museonicolis.com" },
  { id: 19, name: "Museo della Moto Morbidelli", lat: 43.7174, lng: 13.2187, address: "Via Morbidelli", city: "Pesaro" },
  { id: 20, name: "Museo Rimessa delle Moto", lat: 44.0605, lng: 12.5653, address: "Via della Rimessa", city: "Rimini" },
  { id: 21, name: "Museo Cagiva", lat: 45.6193, lng: 8.8502, address: "Via Cagiva", city: "Schiranna" },
];

export const museiEstero: Place[] = [
  { id: 101, name: "Barber Vintage Motorsports Museum", lat: 33.4484, lng: -86.7286, address: "6030 Barber Motorsports Pkwy", city: "Birmingham, Alabama, USA", website: "https://www.barbermuseum.org" },
  { id: 102, name: "The Motorcycle Museum", lat: 52.4862, lng: -1.9254, address: "Coventry Road", city: "Birmingham, UK", website: "https://www.nationalmotorcyclemuseum.co.uk" },
  { id: 103, name: "Deutsches Zweirad- und NSU-Museum", lat: 49.1322, lng: 9.2113, address: "Urbanstraße 11", city: "Neckarsulm, Germany", website: "https://www.zweirad-museum.de" },
  { id: 104, name: "Museo de la Moto de Barcelona", lat: 41.3851, lng: 2.1734, address: "Carrer de la Palla 10", city: "Barcelona, Spain" },
  { id: 105, name: "Petersen Automotive Museum", lat: 34.0622, lng: -118.3614, address: "6060 Wilshire Blvd", city: "Los Angeles, USA", website: "https://www.petersen.org" },
  { id: 106, name: "Top Mountain Motorcycle Museum", lat: 46.9019, lng: 10.6836, address: "Timmelsjoch Hochalpenstraße", city: "Hochgurgl, Austria", website: "https://www.crosspoint.tirol" },
  { id: 107, name: "Solvang Vintage Motorcycle Museum", lat: 34.5958, lng: -120.1376, address: "320 Alisal Rd", city: "Solvang, California, USA", website: "https://www.motosolvang.com" },
  { id: 108, name: "Sammy Miller Motorcycle Museum", lat: 50.8125, lng: -1.5660, address: "Bashley Cross Road", city: "New Milton, UK", website: "https://www.sammymiller.co.uk" },
  { id: 109, name: "Moto Museum", lat: 38.6270, lng: -90.1994, address: "3441 Olive St", city: "St. Louis, Missouri, USA" },
  { id: 110, name: "Autoworld Brussels", lat: 50.8389, lng: 4.3936, address: "Parc du Cinquantenaire 11", city: "Brussels, Belgium", website: "https://www.autoworld.be" },
];

export const registri: Place[] = [
  { id: 201, name: "ASI - Automotoclub Storico Italiano", lat: 45.0703, lng: 7.6869, address: "Corso Moncalieri 381/14", city: "Torino", phone: "+39 011 6680547", website: "https://www.asifed.it" },
  { id: 202, name: "Registro Storico FMI", lat: 41.9028, lng: 12.4964, address: "Via Flaminia 388", city: "Roma", phone: "+39 06 32488", website: "https://www.federmoto.it" },
  { id: 203, name: "Registro Storico Ducati", lat: 44.4725, lng: 11.3119, address: "Via A. C. Ducati 3", city: "Bologna", website: "https://www.ducati.com" },
  { id: 204, name: "Registro Storico Moto Guzzi", lat: 45.8527, lng: 9.3963, address: "Via Parodi 57", city: "Mandello del Lario", website: "https://www.motoguzzi.com" },
  { id: 205, name: "Registro Storico Gilera", lat: 45.5311, lng: 9.1527, address: "Via Gilera", city: "Arcore" },
];

export const ricambisti: Place[] = [
  { id: 301, name: "Emporio Elaborazioni", lat: 41.8902, lng: 12.4922, address: "Via Appia Nuova 123", city: "Roma", phone: "+39 06 1234567", email: "info@emporioelaborazioni.it" },
  { id: 302, name: "Ricambi Moto Storiche", lat: 45.4642, lng: 9.1900, address: "Via Mecenate 76", city: "Milano", phone: "+39 02 9876543", email: "info@ricambimotostoriche.it" },
  { id: 303, name: "Vintage Parts Italia", lat: 44.4949, lng: 11.3426, address: "Via Emilia Levante 42", city: "Bologna", phone: "+39 051 555666", website: "https://www.vintagepartsitalia.it" },
  { id: 304, name: "Moto d'Epoca Ricambi", lat: 43.7696, lng: 11.2558, address: "Via Senese 55", city: "Firenze", phone: "+39 055 222333" },
  { id: 305, name: "Classicar Moto", lat: 45.0703, lng: 7.6869, address: "Corso Re Umberto 80", city: "Torino", phone: "+39 011 444555", email: "info@classicarmoto.it" },
];

export interface Section {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const sections: Section[] = [
  { id: "musei", title: "MUSEI", description: "Discover motorcycle museums in Italy and abroad", image: "/images/MUSEI.jpg", href: "/musei" },
  { id: "ricambi", title: "RICAMBI", description: "Find spare parts for your classic motorcycle", image: "/images/RICAMBI.jpg", href: "/ricambi" },
  { id: "registro", title: "REGISTRO STORICO", description: "Historical registers and certifications", image: "/images/REGISTRO STORICO.jpeg", href: "/registro" },
  { id: "marketplace", title: "MARKETPLACE", description: "Buy and sell vintage motorcycles and parts", image: "/images/MOTO GUZZI.jpeg", href: "/marketplace" },
  { id: "club", title: "CLUB", description: "Join clubs and attend events", image: "/images/CLUB.jpg", href: "/club" },
  { id: "manuali", title: "MANUALI", description: "Technical manuals and documentation", image: "/images/MANUALI.jpg", href: "/manuali" },
  { id: "restauro", title: "RESTAURO", description: "Restoration resources and professionals", image: "/images/RESTAURO.jpg", href: "/restauro" },
  { id: "persone", title: "PERSONE", description: "Stories from the community", image: "/images/PERSONE.jpeg", href: "/persone" },
];
