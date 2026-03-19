export const profile = {
	fullName: 'Victoria Mummelthei',
	title: 'undisciplined explorer',
	institute: 'Freie Universität Berlin',
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
  {
    title: 'water and oceanic worlds',
    description: 'How games and other media imagine oceans, flooding worlds, and underwater environments, and how these stories shape environmental imagination.',
    field: 'water'
  },
  {
    title: 'environmental storytelling',
    description: 'How landscapes, ruins, and ecosystems tell stories in games, film, and literature.',
    field: 'environment'
  },
  {
    title: 'stories across media',
    description: 'How narratives travel between games, film, literature, and visual culture, and how meaning changes across media.',
    field: 'media'
  },
  {
    title: 'virtual photography',
    description: 'Photography inside virtual worlds as both a creative practice and a research method.',
    field: 'virtual-photography'
  },
  {
    title: 'bodies, horror, and strange ecologies',
    description: 'Moments where bodies, environments, and non-human life blur together in virtual worlds.',
    field: 'horror'
  },
  {
    title: 'images, colour, and visual atmospheres',
    description: 'How colour, light, and visual aesthetics shape how we experience environments across media.',
    field: 'visual-culture'
  }
],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'victoria.mummelthei@fu-berlin.de',
	linkedin: '',
	x: 'https://nodiscipline42.substack.com/',
	bluesky: '',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: 'https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Mummelthei%2C%20Victoria%22&l=list&p=1&s=10&sort=bestmatch',
	orcid: '',
}

export const template = {
	website_url: 'https://www.nodiscipline.de', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
