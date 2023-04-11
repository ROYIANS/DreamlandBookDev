/**
 * Butterfly
 * for aside categories
 */

'use strict'

hexo.extend.helper.register('aside_categories', function (categories, options) {
  if (!options && (!categories || !Object.prototype.hasOwnProperty.call(categories, 'length'))
  ) {
    options = categories
    categories = this.site.categories
  }

  if (!categories || !categories.length) return ''
  options = options || {}
  const { config } = this
  const showCount = Object.prototype.hasOwnProperty.call(options, 'show_count')
    ? options.show_count
    : true
  const depth = options.depth ? parseInt(options.depth, 10) : 0
  const orderby = options.orderby || 'name'
  const order = options.order || 1
  const categoryDir = this.url_for(config.category_dir)
  const limit = options.limit === 0 ? categories.length : options.limit
  const isExpand = options.expand !== 'none'
  const expandClass = isExpand && options.expand === true ? 'expand' : ''
  const buttonLabel = this._p('aside.more_button')
  const prepareQuery = (parent) => {
    const query = {}
    if (parent) { query.parent = parent } else { query.parent = { $exists: false } }
    return categories.find(query).sort(orderby, order).filter((cat) => cat.length)
  }

  const hierarchicalList = (limit, level) => {
    let result = ''
    if (limit > 0) {
      prepareQuery().forEach((cat, i) => {
        if (i <= limit - 1) {
          const hexColor = hexo.extend.helper.get('random_chinese_color')()
          result += `<li class="dreamland-header__bookmark__tab heti--vertical" style="--random-color: ${hexColor.hex}; ${hexColor.fontColor ? `--text-color: ${hexColor.fontColor};` : '--text-color: #fff;'}">`
          result += `<a href="${this.url_for(cat.path)}">`
          result += `<span class="dreamland-header__bookmark-tab-name">${cat.name}</span>`
          if (showCount) {
            result += `<span class="dreamland-header__bookmark-tab-count">${cat.length}</span>`
          }
          result += '</a></li>'
        }
      })
    }

    return result
  }

  const list = hierarchicalList(limit, 0)

  const moreButton = function () {
    if (categories.length <= limit) return ''
    const hexColor = hexo.extend.helper.get('random_chinese_color')()
    const moreHtml = `
        <li class="dreamland-header__bookmark__tab heti--vertical" style="--random-color: ${hexColor.hex}; ${hexColor.fontColor ? `--text-color: ${hexColor.fontColor};` : '--text-color: #fff;'}">
          <a href="${categoryDir}/" title="${buttonLabel}">
            <span class="dreamland-header__bookmark-tab-name">${buttonLabel}</span>
          </a>
        </li>
    `

    return moreHtml
  }

  return `${list}${moreButton()}`
})
