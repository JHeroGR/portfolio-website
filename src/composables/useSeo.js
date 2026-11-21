export function useSeo() {
  const applySeo = ({ title, description, image = '' }) => {
    const appTitle = 'Joel Gutierrez'
    const pageTitle = title ? `${title} · ${appTitle}` : appTitle
    document.title = pageTitle

    const descriptionMeta = document.querySelector('meta[name="description"]')
    const fallbackDescription = 'Portfolio, blog, and product design notes from Joel Gutierrez.'
    const nextDescription = description || fallbackDescription

    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', nextDescription)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = nextDescription
      document.head.appendChild(meta)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle)
    } else {
      const meta = document.createElement('meta')
      meta.property = 'og:title'
      meta.content = pageTitle
      document.head.appendChild(meta)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', nextDescription)
    } else {
      const meta = document.createElement('meta')
      meta.property = 'og:description'
      meta.content = nextDescription
      document.head.appendChild(meta)
    }

    if (image) {
      const ogImage = document.querySelector('meta[property="og:image"]')
      if (ogImage) {
        ogImage.setAttribute('content', image)
      } else {
        const meta = document.createElement('meta')
        meta.property = 'og:image'
        meta.content = image
        document.head.appendChild(meta)
      }
    }
  }

  return { applySeo }
}
