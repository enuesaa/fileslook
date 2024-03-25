import { globalStyle, style } from '@vanilla-extract/css'

const main = style({
  border: 'solid 1px #000',
})

globalStyle(`${main} *`, {
  margin: 0,
  padding: 0,
})

export default {
  main,
  tab: style({
    border: 'solid 1px #d6deeb',
    padding: '10px',
    cursor: 'pointer',
    fontWeight: '400',
    fontSize: '16px',
    background: '#011627',
    color: '#d6deeb',
    borderRadius: '5px',
  }),
}