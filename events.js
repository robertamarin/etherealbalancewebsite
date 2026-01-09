// Update the event details here to keep the website current.
// Replace the image files in /assets or update the paths below.
window.eventsData = [
  {
    type: 'community',
    typeLabel: 'Community',
    location: 'beach',
    title: 'Sunrise Flow at the Beach',
    modalTitle: 'Sunrise Flow at the Beach',
    modalDate: 'Jan 18, 2026',
    date: {
      month: 'Jan',
      day: '18',
      year: '2026'
    },
    venue: 'Venice Beach Pavilion',
    time: '7:00 AM - 8:30 AM',
    description: 'Start your weekend with an energizing Pilates flow as the sun rises over the ocean.',
    spots: '12 spots left',
    image: 'assets/event-beach.svg'
  },
  {
    type: 'corporate',
    typeLabel: 'Corporate',
    location: 'downtown',
    title: 'Tech Company Wellness Day',
    modalTitle: 'Tech Company Wellness Day',
    modalDate: 'Jan 24, 2026',
    date: {
      month: 'Jan',
      day: '24',
      year: '2026'
    },
    venue: 'Innovation Hub, DTLA',
    time: '12:00 PM - 2:00 PM',
    description: 'A rejuvenating midday break featuring mat Pilates, breathwork, and stress-relief techniques.',
    spots: 'Private Event',
    image: 'assets/event-downtown.svg'
  },
  {
    type: 'retreat',
    typeLabel: 'Retreat',
    location: 'hotel',
    title: 'Desert Wellness Weekend',
    modalTitle: 'Desert Wellness Weekend',
    modalDate: 'Feb 7-9, 2026',
    date: {
      month: 'Feb',
      day: '7',
      year: '2026'
    },
    venue: 'Joshua Tree Resort',
    time: '3-Day Retreat',
    description: 'An immersive weekend of Pilates, meditation, sound healing, and connection under the desert stars.',
    spots: '8 spots left',
    image: 'assets/event-desert.svg'
  },
  {
    type: 'community',
    typeLabel: 'Community',
    location: 'downtown',
    title: "Valentine's Partner Pilates",
    modalTitle: "Valentine's Partner Pilates",
    modalDate: 'Feb 14, 2026',
    date: {
      month: 'Feb',
      day: '14',
      year: '2026'
    },
    venue: 'Ethereal Studio',
    time: '6:00 PM - 8:00 PM',
    description: 'A special evening of partner exercises, connection, and champagne. Bring your favorite person!',
    spots: '20 spots left',
    image: 'assets/event-studio.svg'
  },
  {
    type: 'corporate',
    typeLabel: 'Corporate',
    location: 'hotel',
    title: 'Executive Retreat: The Ritz-Carlton',
    modalTitle: 'Executive Retreat: The Ritz-Carlton',
    modalDate: 'Feb 21, 2026',
    date: {
      month: 'Feb',
      day: '21',
      year: '2026'
    },
    venue: 'Ritz-Carlton Marina del Rey',
    time: 'Full Day Program',
    description: 'An exclusive wellness experience for leadership teams featuring private sessions, spa treatments, and mindfulness training.',
    spots: 'Inquiry Required',
    image: 'assets/event-hotel.svg'
  },
  {
    type: 'community',
    typeLabel: 'Community',
    location: 'downtown',
    title: 'Spring Renewal Workshop',
    modalTitle: 'Spring Renewal Workshop',
    modalDate: 'Mar 1, 2026',
    date: {
      month: 'Mar',
      day: '1',
      year: '2026'
    },
    venue: 'Botanical Gardens',
    time: '9:00 AM - 12:00 PM',
    description: 'Welcome spring with an outdoor workshop combining Pilates, breathwork, and intention-setting surrounded by nature.',
    spots: '35 spots left',
    image: 'assets/event-garden.svg'
  }
];

// Past events gallery data
// Update image paths below to point to files in /assets.
window.pastEventsData = [
  {
    title: 'Sunrise Flow @ Venice Beach',
    date: 'January 2025 • 45 Attendees',
    coverLabel: 'Sunrise Beach Session',
    coverImage: 'assets/event-beach.svg',
    photos: [
      { src: 'assets/event-beach.svg', label: 'Beach Setup' },
      { src: 'assets/event-garden.svg', label: 'Morning Flow' },
      { src: 'assets/event-studio.svg', label: 'Group Session' }
    ]
  },
  {
    title: 'Google LA Wellness Week',
    date: 'December 2024 • Corporate Partner',
    coverLabel: 'Corporate Wellness Day',
    coverImage: 'assets/event-downtown.svg',
    photos: [
      { src: 'assets/event-downtown.svg', label: 'Office Setup' },
      { src: 'assets/event-hotel.svg', label: 'Team Session' },
      { src: 'assets/event-beach.svg', label: 'Breathwork' }
    ]
  },
  {
    title: 'Joshua Tree Wellness Weekend',
    date: 'November 2024 • 3-Day Retreat',
    coverLabel: 'Desert Retreat',
    coverImage: 'assets/event-desert.svg',
    photos: [
      { src: 'assets/event-desert.svg', label: 'Desert Arrival' },
      { src: 'assets/event-garden.svg', label: 'Morning Practice' },
      { src: 'assets/event-hotel.svg', label: 'Sound Healing' }
    ]
  },
  {
    title: 'Four Seasons Beverly Hills',
    date: 'October 2024 • Hotel Partner',
    coverLabel: 'Hotel Partnership Launch',
    coverImage: 'assets/event-hotel.svg',
    photos: [
      { src: 'assets/event-hotel.svg', label: 'Luxury Setting' },
      { src: 'assets/event-studio.svg', label: 'Private Session' },
      { src: 'assets/event-downtown.svg', label: 'Guest Experience' }
    ]
  },
  {
    title: 'Summer Solstice Celebration',
    date: 'June 2024 • 80+ Attendees',
    coverLabel: 'Community Gathering',
    coverImage: 'assets/event-garden.svg',
    photos: [
      { src: 'assets/event-garden.svg', label: 'Golden Hour' },
      { src: 'assets/event-beach.svg', label: 'Community Circle' },
      { src: 'assets/event-studio.svg', label: 'Movement Flow' }
    ]
  },
  {
    title: 'DTLA Rooftop Series',
    date: 'September 2024 • Monthly Event',
    coverLabel: 'Rooftop Session',
    coverImage: 'assets/event-downtown.svg',
    photos: [
      { src: 'assets/event-downtown.svg', label: 'City Views' },
      { src: 'assets/event-studio.svg', label: 'Rooftop Setup' },
      { src: 'assets/event-hotel.svg', label: 'Urban Wellness' }
    ]
  },
  {
    title: 'Breathwork & Movement',
    date: 'August 2024 • Workshop Series',
    coverLabel: 'Wellness Workshop',
    coverImage: 'assets/event-studio.svg',
    photos: [
      { src: 'assets/event-studio.svg', label: 'Workshop Intro' },
      { src: 'assets/event-garden.svg', label: 'Breathwork Circle' },
      { src: 'assets/event-beach.svg', label: 'Movement Flow' }
    ]
  },
  {
    title: 'Ethereal Balance Launch',
    date: 'March 2024 • Where It All Began',
    coverLabel: 'Launch Event',
    coverImage: 'assets/event-beach.svg',
    photos: [
      { src: 'assets/event-beach.svg', label: 'The Beginning' },
      { src: 'assets/event-downtown.svg', label: 'First Session' },
      { src: 'assets/event-hotel.svg', label: 'Launch Day' }
    ]
  }
];
