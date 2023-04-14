/*
 * @Author: ROYIANS
 * @Date: 2023/4/14 14:50
 * @Description:
 * @sign:
 * ╦═╗╔═╗╦ ╦╦╔═╗╔╗╔╔═╗
 * ╠╦╝║ ║╚╦╝║╠═╣║║║╚═╗
 * ╩╚═╚═╝ ╩ ╩╩ ╩╝╚╝╚═╝
 */
'use strict'

hexo.extend.helper.register('animation_link', function (text, href, target = '_self') {
  return `<a class="animation_link" href="${href}" target="${target}">
              <span>${text}</span>
          </a>`
})
