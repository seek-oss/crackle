Call site or Central
Central could be in or out of Link Component

# This needs to exist

```tsx


export type LinkToPage = {pageName: 'profile'} | {pageName: 'jobDetails', id: string}

// React Wrapper
export links {
  myProfile: string,
  userProfile: (id: string) => string
  jobSearch: (keywords, location) => string
}


export const Urls = {
  profile: {
    stringify: ({ brand, country, language }) => {
      if (brand === 'seek') {
        return `/profile/me`;
      }
      return `${lang}/profile`;
    },
    parse: (href: string) => {
      return { brand, country, language };
    },
  },
  jobDetails: {
    stringify: ({ brand, country, language, id }) => {
      return `foo/${id}`
    },
    parse: (href: string) => {
      return { brand, country, language };
    },

  },
  jobSearch: {
    stringify: ({ brand, country, language }) => {
      if (brand === 'seek') {
        return `/profile/me`;
      }
      return `${lang}/profile`;
    },
    parse: (href: string) => {
      return { brand, country, language, keywords, location };
    },
  },
};
```

# Name

```tsx

import {links} from '@seek/seo';

const App = () => (<div><Link key="profile">My Profile</Link><Link to={{pageName: 'jobDetails', jobId: '1234'}} /></div>)

const Link = ({key, values}) => {
  const language = useLanguage();
  return (<a href={Urls[key](...values, language, brand)} />);
}
}

```

We are going to go through a phrase, that may last forever with mixed URL patterns

We are already going to have complex urls even if we basename language,

We need a centralized package for all the links, AKA "SEO Module".
It used to just be for SEO Urls as they were the only complex URLs.
But now that we want to support multiple sites the chance that an otherwise 'simple' url such as '/profile'

We will build

Because of Legacy, but also SEEK's value in local optimizations (Certsy) we can not architect around expecting simple URLs.

Languages
Translations
Locationalization

Matt and I have been going through multi-lingual support. Adding a summary below:

Creating the demo app, https://github.com/SEEK-Jobs/demo-candidate-app, has been very valuable already. We'll likely spend more time on it.

As part of language selection we looked at how urls are built. Depending on the implementation language selection may require more complexity in creating hrefs.

One idea we played with was leaning into the idea that with unification comes complex URLs (A URL that can't be expressed as a static string), whether it's because for legacy reasons a URL is different on one site, or language is in the URL. This would mean that it would make sense to treat all URLs as complex and creating a central tool, much like the seo-module to parsing and creating url strings. This would then become a first class tool in apps for being able to express a URL, with the default tooling automatically adding in language to the URL when appropriate.

As this moves into the more general space of locaitonalization we may be suggesting to increase the scope of the project.

- There is an existing #apac-localisation slack channel.
- Caitlin Blackwell has also emailed regarding locaitonalization.

Next steps is likely:

- to book a meeting with relevant stakeholders to clarify the scope and intentions to proceed aswell as how we'll collaborate, communicate and include stakeholders.
- to continue fleshing out the above mentioned demo app, likely to include a version of the above mentioned url module.

### To Prove Out

- Using shared components
- Loading only current pages translations: Out of scope
- Loading only current language's translations
