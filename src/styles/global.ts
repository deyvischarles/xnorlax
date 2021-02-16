import { createGlobalStyle } from 'styled-components'

const Breakpoints = {
    xs: '(min-width : 0px)',
    sm: '(min-width : 600px)',
    md: '(min-width : 960px)',
    lg: '(min-width : 1280px)',
    xl: '(min-width : 1920px)'
}

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        -webkit-font-smoothing: antialiased;
    }
      
    body {
        height: 100%;
        overflow-y: auto;
        background-color: ${props => props.theme.colors.background};
    }
    
    a {
        color: ${props => props.theme.colors.link};
        outline: none;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
    }
    
    p {
        color: ${props => props.theme.colors.primaryText};
    }

    span {
        display: inline;
    }
    
    ul:not(.browser-default) {
        list-style-type: none;
    }
    
    img {
        border-style: none;
    }
    
    img, video {
        max-width: 100%;
        height: auto;
    }
    
    button {
        -webkit-tap-highlight-color: transparent;
        outline: none;
        user-select: none;
    }
    
    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    
    ::-webkit-scrollbar {
        width: 8px !important;
        background: rgba(244, 244, 244, 0) !important;
    }
    
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.striped} !important;
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.divider} !important;
    }

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/roboto-400.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/roboto-700.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/roboto-mono-400.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/roboto-mono-700.woff2) format('woff2');
    }

    html {
        font-family: 'Roboto', monospace;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.43;
        color: ${props => props.theme.colors.primaryText};

        @media ${Breakpoints.md} {
            font-size: 15px;
        }
    
        @media ${Breakpoints.lg} {
            font-size: 16px;
        }
    }
      
    button,
    input,
    select,
    textarea,
    optgroup {
        font-family: 'Roboto', monospace;
    }
      
    h1 {
        font-size: 96px;
        font-weight: 300;
        letter-spacing: -1.5px;
        line-height: 110%;
        margin: 64px 0 38.4px 0;
    }
      
    h2 {
        font-size: 60px;
        font-weight: 300;
        letter-spacing: -0.5px;
        line-height: 110%;
        margin: 40px 0 24px 0;
    }
      
    h3 {
        font-size: 48px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 110%;
        margin: 32px 0 19.2px 0;
    }
      
    h4 {
        font-size: 34px;
        font-weight: 400;
        letter-spacing: 0.25px;
        line-height: 110%;
        margin: 22.6666666667px 0 13.6px 0;
    }
      
    h5 {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 110%;
        margin: 16px 0 9.6px 0;
    }
      
    h6 {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.15px;
        line-height: 110%;
        margin: 13.3333333333px 0 8px 0;
    }
      
    .headline1 {
        font-size: 96px;
        font-weight: 300;
        letter-spacing: -1.5px;
    }
      
    .headline2 {
        font-size: 60px;
        font-weight: 300;
        letter-spacing: -0.5px;
    }
      
    .headline3 {
        font-size: 48px;
        font-weight: 400;
        letter-spacing: 0px;
    }
      
    .headline4 {
        font-size: 34px;
        font-weight: 400;
        letter-spacing: 0.25px;
    }
      
    .headline5 {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0px;
    }
      
    .headline6 {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.15px;
    }
      
    .subtitle1 {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.15px;
    }
      
    .subtitle2 {
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.1px;
    }
      
    .body1 {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.5px;
    }
      
    .body2 {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.25px;
    }
      
    .description {
        margin: 0 0 40px;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.334;
        letter-spacing: 0em;
    }
      
    .caption {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.4px;
    }
      
    .overline {
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }
      
    .light {
        font-weight: 300 !important;
    }
      
    .bold {
        font-weight: 700 !important;
    }

    .txt-center {
        text-align: center;
    }
      
    .text-shadow {
        text-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
    }

    .container {
        margin: 0 auto;
        max-width: 1280px;
        width: 90%;

        @media ${Breakpoints.md} {
            width: 85%;
        }

        @media ${Breakpoints.lg} {
            width: 80%;
        }
    }

    .section {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    section {
        padding-top: 1rem;
        padding-bottom: 1rem;
    
        &.no-pad {
            padding: 0;
        }

        &.no-pad-top {
            padding-top: 0;
        }
        
        &.no-pad-bottom {
            padding-bottom: 0;
        }
    }

    .hide-xs {
        @media ${Breakpoints.xs} {
            display: none !important;
        }
    }

    .hide-sm {
        @media ${Breakpoints.sm} {
            display: none !important;
        }
    }

    .hide-md {
        @media ${Breakpoints.md} {
            display: none !important;
        }
    }

    .hide-lg {
        @media ${Breakpoints.lg} {
            display: none !important;
        }
    }

    .hide-xl {
        @media ${Breakpoints.xl} {
            display: none !important;
        }
    }

    .show-xs {
        @media ${Breakpoints.xs} {
            display: block !important;
        }
    }

    .show-sm {
        @media ${Breakpoints.sm} {
            display: block !important;
        }
    }

    .show-md {
        @media ${Breakpoints.md} {
            display: block !important;
        }
    }

    .show-lg {
        @media ${Breakpoints.lg} {
            display: block !important;
        }
    }

    .show-xl {
        @media ${Breakpoints.xl} {
            display: block !important;
        }
    }

    .row {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 16px;

        &:after {
            content: "";
            display: table;
            clear: both;
        }

        .col {
            float: left;
            min-height: 1px;

            &.pad-6 {
                padding: 6px;
            }
        
            &.pad-8 {
                padding: 8px;
            }
        
            &.pad-12 {
                padding: 12px;
            }
        
            &.pad-16 {
                padding: 16px;
            }
        
            &.pad-24 {
                padding: 24px;
            }
        
            &.pad-32 {
                padding: 32px;
            }

            &.pad-48 {
                padding: 48px;
            }

            &.sm1 {
                width: 8.3333333333%;
            }
              
            &.sm2 {
                width: 16.6666666667%;
            }

            &.sm3 {
                width: 25%;
            }

            &.sm4 {
                width: 33.3333333333%;
            }

            &.sm5 {
                width: 41.6666666667%;
            }

            &.sm6 {
                width: 50%;
            }

            &.sm7 {
                width: 58.3333333333%;
            }

            &.sm8 {
                width: 66.6666666667%;
            }

            &.sm9 {
                width: 75%;
            }

            &.sm10 {
                width: 83.3333333333%;
            }

            &.sm11 {
                width: 91.6666666667%;
            }

            &.sm12 {
                width: 100%;
            }

            @media ${Breakpoints.md} {
                &.md1 {
                    width: 8.3333333333%;
                }

                &.md2 {
                    width: 16.6666666667%;
                }

                &.md3 {
                    width: 25%;
                }

                &.md4 {
                    width: 33.3333333333%;
                }

                &.md5 {
                    width: 41.6666666667%;
                }

                &.md6 {
                    width: 50%;
                }

                &.md7 {
                    width: 58.3333333333%;
                }

                &.md8 {
                    width: 66.6666666667%;
                }

                &.md9 {
                    width: 75%;
                }

                &.md10 {
                    width: 83.3333333333%;
                }

                &.md11 {
                    width: 91.6666666667%;
                }

                &.md12 {
                    width: 100%;
                }
            }

            @media ${Breakpoints.lg} {
                &.lg1 {
                    width: 8.3333333333%;
                }

                &.lg2 {
                    width: 16.6666666667%;
                }

                &.lg3 {
                    width: 25%;
                }

                &.lg4 {
                    width: 33.3333333333%;
                }

                &.lg5 {
                    width: 41.6666666667%;
                }

                &.lg6 {
                    width: 50%;
                }

                &.lg7 {
                    width: 58.3333333333%;
                }

                &.lg8 {
                    width: 66.6666666667%;
                }

                &.lg9 {
                    width: 75%;
                }

                &.lg10 {
                    width: 83.3333333333%;
                }

                &.lg11 {
                    width: 91.6666666667%;
                }

                &.lg12 {
                    width: 100%;
                }
            }

            @media ${Breakpoints.xl} {
                &.xl1 {
                    width: 8.3333333333%;
                }

                &.xl2 {
                    width: 16.6666666667%;
                }

                &.xl3 {
                    width: 25%;
                }

                &.xl4 {
                    width: 33.3333333333%;
                }

                &.xl5 {
                    width: 41.6666666667%;
                }

                &.xl6 {
                    width: 50%;
                }

                &.xl7 {
                    width: 58.3333333333%;
                }

                &.xl8 {
                    width: 66.6666666667%;
                }

                &.xl9 {
                    width: 75%;
                }

                &.xl10 {
                    width: 83.3333333333%;
                }

                &.xl11 {
                    width: 91.6666666667%;
                }

                &.xl12 {
                    width: 100%;
                }
            }
        }
    }

    .flex-box {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.colors.box};
        border-radius: 4px;
        outline: 0;
      
        .spacer {
          flex-grow: 1;
        }

      
        &.outlined {
          border: 1px solid ${props => props.theme.colors.divider};
        }
      
        &.transparent {
          background-color: transparent !important;
        }

      
        &.pad-6 {
          padding: 6px;
        }
      
        &.pad-8 {
          padding: 8px;
        }
      
        &.pad-12 {
          padding: 12px;
        }
      
        &.pad-16 {
          padding: 16px;
        }
      
        &.pad-24 {
          padding: 24px;
        }
      
        &.pad-32 {
          padding: 32px;
        }

        &.pad-48 {
          padding: 48px;
        }

      
        &.nowrap {
          flex-wrap: nowrap;
        }
      
        &.flex-col {
          flex-direction: column;
        }

      
        &.content-start {
          justify-content: flex-start;
        }
      
        &.content-end {
          justify-content: flex-end;
        }
      
        &.content-between {
          justify-content: space-between;
        }
      
        &.content-around {
          justify-content: space-around;
        }
      
        &.content-evenly {
          justify-content: space-evenly;
        }

      
        &.items-start {
          align-items: flex-start;
        }
      
        &.items-end {
          align-items: flex-end;
        }
      
        &.items-baseline {
          align-items: baseline;
        }

      
        &.items-stretch {
          align-items: stretch;
        }
    }

    .divider {
        height: 1px;
        overflow: hidden;
        background-color: ${props => props.theme.colors.divider};
        margin: 16px 0;
    }

    .space {
        margin: 0 8px;
    }
    
    .space-left {
        margin-left: 8px;
    }

    .space-right {
        margin-right: 8px;
    }

    .space-top {
        margin-top: 8px;
    }

    .space-botton {
        margin-bottom: 8px;
    }
    
    &.marg-6 {
        margin: 6px;
    }

    &.marg-8 {
        margin: 8px;
    }

    &.marg-12 {
        margin: 12px;
    }

    &.marg-16 {
        margin: 16px;
    }

    &.marg-24 {
        margin: 24px;
    }

    &.marg-32 {
        margin: 32px;
    }

    &.marg-48 {
        margin: 48px;
    }

    pre {
        display: block;
        font-family: 'Roboto Mono', monospace;
        white-space: pre-wrap;
        margin: 24px auto;
        padding: 16px;
        overflow: auto;
        direction: ltr;
        max-width: calc(100vw - 32px);
        border-radius: 4px;
        background-color: ${props => props.theme.colors.box} !important;
    }

    code[class*="language-"] {
        display: inline-block;
        font-family: inherit;
        line-height: 1.5;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        tab-size: 4;
    }

    :not(pre) > code[class*="language-"] {
        background-color: ${props => props.theme.colors.box};
        color: ${props => props.theme.colors.pink};
        display: inline-block;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: ${props => props.theme.colors.blueGray};
    }

    .token.operator {
        color: ${props => props.theme.colors.purple};
    }

    .token.namespace {
        opacity: .7;
    }

    .token.constant,
    .token.symbol,
    .token.deleted {
        color: ${props => props.theme.colors.blue};
    }

    .token.property {
        color: ${props => props.theme.colors.cyan};
    }

    .token.boolean,
    .token.number {
        color: ${props => props.theme.colors.purple};
    }

    .token.tag {
        color: ${props => props.theme.colors.indigo};
    }

    .token.punctuation,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable,
    .token.spread {
        color: ${props => props.theme.colors.blueGray};
    }

    .token.selector,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted,
    .token.attr-value {
        color: ${props => props.theme.colors.orange};
    }

    .token.attr-equals {
        color: ${props => props.theme.colors.blueGray};
    }

    .token.atrule,
    .token.function {
        color: ${props => props.theme.colors.blue};
    }

    .token.keyword {
        color: ${props => props.theme.colors.pink};
    }

    .token.class-name,
    .maybe-class-name {
        color: ${props => props.theme.colors.green};
    }

    .token.attr-name,
    .token.parameter {
        color: ${props => props.theme.colors.cyan};
    }

    .token.regex,
    .token.important {
        color: ${props => props.theme.colors.orange};
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }

    .token.entity {
        cursor: help;
    }
`