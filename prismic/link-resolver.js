export default function(doc) {
  // Define the url depending on the document type
  if (doc.type === 'post') {
    return '/blog/' + doc.uid
  }

  // Default to homepage
  return '/'
}
