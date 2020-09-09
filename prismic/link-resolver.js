export default function(doc) {
  // Define the url depending on the document type
  if (doc.type === 'post') {
    return '/blog/' + doc.uid
  }
  if (doc.type === 'landing') return '/:lang/landing'
  if (doc.type === 'saas') return '/:lang/saas'
  // Default to homepage
  return '/'
}
