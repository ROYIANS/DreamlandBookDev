/*
 * @Author: ROYIANS
 * @Date: 2023/4/14 11:09
 * @Description:
 * @sign:
 * ╦═╗╔═╗╦ ╦╦╔═╗╔╗╔╔═╗
 * ╠╦╝║ ║╚╦╝║╠═╣║║║╚═╗
 * ╩╚═╚═╝ ╩ ╩╩ ╩╝╚╝╚═╝
 */
'use strict'

hexo.extend.helper.register('wavy_title', function (title = 'Today.') {
  const hexColor1 = hexo.extend.helper.get('random_chinese_color')().hex
  const hexColor2 = hexo.extend.helper.get('random_chinese_color')().hex
  return `<style>
            @grid: 5x1 / 14rem 8rem;
            @content: ${title};
            @place: center;
            @size: 100% 0;
            color:  @pn(var(--main-text), #feb944, ${hexColor1}, #df5584, ${hexColor2});
            z-index:  @I(- @i);
            font-weight: normal;
            font-size: 4rem;
            line-height: 0;
            transition: @i(*.05s);
            scale: calc(1 - .02 * @i);
            rotate: calc(2deg / @uw*( @ux - @uw/2));
            translate: 0 calc(0.2rem/@uh*(@uy - @uh/2) * @dx(-2));
          </style>`
})
