/**
 * LittleDreamland
 * generate colors for main color
 */

'use strict'

const pick_color = require('../../source/js/pick_color')

hexo.extend.helper.register('theme_main_color_set', function () {
  const themeMainColor = hexo.theme && hexo.theme.config && hexo.theme.config.theme_color && hexo.theme.config.theme_color.main
  if (!themeMainColor) {
    return '<!- no color set ->'
  }
  let colorSet = pick_color.getThemeCluster(themeMainColor.replace('#', ''))
  return `<style>:root{${colorSet.join('\n')}}</style>`
})
