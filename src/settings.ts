export const profile = {
	fullName: 'Victoria Mummelthei',
	title: 'environmental humanist and game data analyst',
	institute: 'Freie Universität Berlin',
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
  {
    title: 'environmental imagination',
    description: 'How media – especially games – imagine oceans, flooding worlds, underwater environments, ruins, and ecosystems – and how bodies, non-human life, and strange ecologies blur into these landscapes.',
    field: 'environment'
  },
  {
    title: 'games as data',
    description: 'Using large-scale game data – ownership, tags, genres, and coded samples – to trace patterns across thousands of titles rather than relying on a handful of case studies.',
    field: 'data'
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
	lightTheme: 'nord', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dracula', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'nodiscipline',
	default_description: 'exploring stories of environments',
	default_image: './src/assets/headernodiscipline.jpg',
}
