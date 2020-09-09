export default async (ctx, inject) => {
  const asyncData = ctx.route.matched[0].components.default.options.asyncData
  if (typeof asyncData === 'function') {
    inject('asyncData', await asyncData(ctx))
  }
}
