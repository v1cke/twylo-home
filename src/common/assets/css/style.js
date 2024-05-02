import { createGlobalStyle } from 'styled-components'

const ResetCSS = createGlobalStyle`
  ::selection {
    background: #333333;
    color: #ffffff;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    scroll-behavior: smooth
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }
  
  @font-face {
    font-family: 'righteous';
    src: url('/fonts/righteous-v17-latin-regular.woff2') format('woff2');
  }

  
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/space-grotesk-v16-latin_latin-ext-300.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/space-grotesk-v16-latin_latin-ext-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/space-grotesk-v16-latin_latin-ext-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/space-grotesk-v16-latin_latin-ext-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/space-grotesk-v16-latin_latin-ext-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
  
  .logoFont {
    font-family: 'righteous', sans-serif;
  }
  

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .reuseModalHolder {
    padding: 0 !important;
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.9) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
  }

  button.modalCloseBtn {
    position: fixed !important;
    z-index: 999991 !important;
    background-color: transparent !important;
    top: 10px !important;
    right: 10px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    span.btn-icon {
      font-size: 22px !important;
      transform: rotate(45deg) !important;
    }

    &.alt {
      border-radius: 50% !important;
      z-index: 999999 !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
      top: 25px !important;
      right: 30px !important;
      min-width: 40px !important;
      min-height: 40px !important;

      span.btn-icon {
        font-size: 20px !important;
      }

      &:hover {
        opacity: 0.88 !important;
      }
    }
  }

  .nextui-modal-close-icon {
    border-radius: 50% !important;
    z-index: 999999 !important;
    padding: 0px !important;
    transition: all 0.3s ease 0s !important;
    top: 25px !important;
    right: 30px !important;
    min-width: 40px !important;
    min-height: 40px !important;
    color: rgb(255, 255, 255) !important;
    background-color: rgba(0, 146, 202, 1) !important;
    box-shadow: rgba(0, 146, 202, 0.5) 0px 8px 38px !important;

    svg {
      margin: auto;
    }
  }
`
export default ResetCSS
