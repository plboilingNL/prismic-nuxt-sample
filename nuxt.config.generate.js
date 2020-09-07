import Prismic from 'prismic-javascript'
import dotenv from 'dotenv'
dotenv.config()

const prismic = process.env.PRISMIC_URL

const routes = async function() {
  try {
    const api = await Prismic.getApi(prismic)
    const response = await api.query(Prismic.Predicates.at('document.type', 'post'), { lang: '*' })
    return response.results.map((post) => {
      if (post.lang === 'pl-pl') return '/blog/' + post.uid
      return `/${post.lang.split('-')[0]}/blog/${post.uid}`
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Something went wrong: ', err)
    return []
  }
}

export { routes }
