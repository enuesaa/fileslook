import { globalStyle, style } from '@vanilla-extract/css'

const main = style({
  padding: '8px 0',
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
    background: 'rgba(1,22,39,0.8)',
    color: '#d6deeb',
    borderRadius: '5px',
  }),
  tabOpened: style({
    border: 'solid 1px #d6deeb',
    padding: '10px',
    cursor: 'pointer',
    fontWeight: '400',
    fontSize: '16px',
    background: 'rgba(1,22,39,1)',
    color: '#d6deeb',
    borderRadius: '5px',
  })
}