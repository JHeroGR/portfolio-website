export const posts = [
  {
    slug: 'designing-for-clarity',
    title: 'Designing for clarity in a noisy product world',
    excerpt: 'A simple framework for turning feature requests into calm, focused experiences.',
    category: 'Design',
    publishedAt: 'June 12, 2026',
    readTime: '5 min read',
    featured: true,
    sections: [
      {
        heading: 'Why clarity matters',
        content: [
          'Products become harder to use when every screen tries to do too much. The most useful interfaces create small moments of confidence by reducing decision fatigue.',
          'A strong design system helps teams align around the same language, but clarity also comes from spacing, hierarchy, and sensible defaults.'
        ]
      },
      {
        heading: 'A practical approach',
        content: [
          'Start by naming the single objective for the page. Then trim every secondary action until the primary task becomes obvious. This gives users a path that feels intentional instead of crowded.',
          'A good rule is to make each screen answer three questions quickly: what is this, why should I care, and what happens next.'
        ]
      }
    ]
  },
  {
    slug: 'shipping-with-confidence',
    title: 'Shipping with confidence through smaller loops',
    excerpt: 'Short release cycles make feedback easier to trust and changes easier to explain.',
    category: 'Product',
    publishedAt: 'May 29, 2026',
    readTime: '4 min read',
    featured: false,
    sections: [
      {
        heading: 'From big launches to small wins',
        content: [
          'Teams often treat release dates like milestones instead of checkpoints. A smaller loop encourages a healthier rhythm where learning happens before a feature grows too expensive to change.',
          'That makes it easier to launch an MVP, measure how real people respond, and adjust quickly without losing momentum.'
        ]
      }
    ]
  },
  {
    slug: 'building-a-lightweight-blog',
    title: 'Building a lightweight blog architecture that scales',
    excerpt: 'The best blog setups are simple to maintain and easy to grow with your content strategy.',
    category: 'Development',
    publishedAt: 'May 8, 2026',
    readTime: '6 min read',
    featured: false,
    sections: [
      {
        heading: 'A simple foundation',
        content: [
          'A blog does not need a large backend to feel polished. A collection of posts, a small detail view, and a thoughtful metadata layer are enough to create a reliable experience.',
          'The architecture becomes much easier to maintain when content lives in one place and the UI focuses on reading rather than configuration.'
        ]
      }
    ]
  }
]

export const featuredPost = posts.find((post) => post.featured) || posts[0]
