import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const ModalFeatureStyle = styled.div`
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${themeGet('colors.white', '#ffffff')};
  .col {
    position: relative;
    .patternImage {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
      &.imageCol {
        display: none;
      }
    }
  }
  .reusecore__button {
    background-color: transparent;
    &.default {
      background-color: ${themeGet('colors.primary', '#0092CA')};
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 0px 9px 20px -5px '#0092CA';
      }
    }
  }
`

export default ModalFeatureStyle
