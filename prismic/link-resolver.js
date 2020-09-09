export default function(doc) {
  // Define the url depending on the document type
  if (doc.type === 'post') {
    return '/blog/' + doc.uid
  }
  if (doc.type === 'landing') return '/sample/landing'
  if (doc.type === 'saas') return '/saas'
  // Default to homepage
  return '/'
}
