import { style } from '@vanilla-extract/css'

export default {
  label: style({
    position: 'absolute',
    top: '5px',
    right: '5px',
    color: '#aaaaaa',
    userSelect: 'none',
  }),
  copyButton: style({
    position: 'absolute',
    bottom: '3px',
    right: '5px',
    color: '#aaaaaa',
    fontSize: '16px',
    cursor: 'pointer',
  }),
}