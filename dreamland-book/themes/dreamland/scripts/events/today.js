/**
 * Dreamland Book
 * 404 error page
 */

'use strict'

hexo.extend.generator.register('today', function (locals) {
  const data = hexo.locals.get('data')
  return {
    path: 'today.json',
    data: {
      data: data.today
    }
  }
})
