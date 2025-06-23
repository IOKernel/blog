import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'IOKernel',
  description:
    'Personal blog about random tech stuff and my projects.',
  href: 'https://blog.cryptik.io',
  author: 'IOKernel',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/tags',
    label: 'tags',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/IOKernel',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/IOKernel',
    label: 'Twitter',
  },
  {
    href: 'mailto:IOKernel@cryptik.io',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
