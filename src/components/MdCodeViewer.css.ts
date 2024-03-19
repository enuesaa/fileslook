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
    border: 'none',
    padding: '3px 20px',
    cursor: 'pointer',
    fontWeight: '400',
    fontSize: '16px',
    background: '#dfdfdf',
    color: '#111111',
    borderRadius: '10px 10px 0 0',
    margin: '0 1px',
  }),
}