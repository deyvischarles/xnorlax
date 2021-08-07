import { createGlobalStyle, css } from 'styled-components'

const Breakpoints = {
    xs: '(min-width : 0px)',
    sm: '(min-width : 600px)',
    md: '(min-width : 960px)',
    lg: '(min-width : 1280px)',
    xl: '(min-width : 1920px)'
}

function createStyles(prefix: string, amount: number, style1: string, style2?: string) {
    let styles = '';

    for (let i = 1; i <= amount; i += 1) {
        styles += `
            .${prefix}${i} {
                ${style1}: ${i * 8}px;
                ${style2 ? `${style2}: ${i * 8}px;` : ''}
            }
        `
    }

    return css`${styles}`;
}

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;
    }

    html {
        font-family: 'Segoe UI', -apple-system, Roboto, Ubuntu, sans-serif;
        font-weight: normal;
        line-height: 1.43;
        -webkit-font-smoothing: antialiased;
        color: ${props => props.theme.colors.primaryText};
    }
      
    button,
    input,
    select,
    textarea,
    optgroup {
        font-family: 'Segoe UI', -apple-system, Roboto, Ubuntu, sans-serif;
    }
      
    body {
        height: 100%;
        overflow-y: auto;
        background-color: ${props => props.theme.colors.background};
    }

    main {
        padding-top: 1rem;
    }
    
    a {
        color: ${props => props.theme.colors.lightBlue};
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
        width: 6px !important;
        background: rgba(244, 244, 244, 0) !important;
    }
    
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.striped} !important;
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.divider} !important;
    }

    .container {
        margin: 0 auto;
        padding: 0 1rem;
        width: 100%;
        max-width: 1280px;

        @media ${Breakpoints.md} {
            width: 90%;
        }

        @media ${Breakpoints.lg} {
            width: 80%;
        }
    }

    section {
        padding-top: 1rem;
        padding-bottom: 1rem;
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

    .box {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.colors.box};
        border-radius: 4px;
        outline: 0;
        overflow-x: hidden;
      
        &.outlined {
          border: 1px solid ${props => props.theme.colors.divider};
        }
      
        &.transparent {
          background-color: transparent !important;
        }

        .spacer {
          flex-grow: 1;
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

    .m1 {margin: 8px;}
    .m2 {margin: 16px;}
    .m3 {margin: 24px;}
    .m4 {margin: 32px;}
    .m5 {margin: 40px;}

    ${createStyles('mt', 5, 'margin-top')}
    ${createStyles('mr', 5, 'margin-right')}
    ${createStyles('mb', 5, 'margin-bottom')}
    ${createStyles('ml', 5, 'margin-left')}
    ${createStyles('mx', 5, 'margin-left', 'margin-right')}
    ${createStyles('my', 5, 'margin-top', 'margin-bottom')}

    .gutterBottom { margin-bottom: 0.35em;}
    
    .p1 {padding: 8px;}
    .p2 {padding: 16px;}
    .p3 {padding: 24px;}
    .p4 {padding: 32px;}
    .p5 {padding: 40px;}

    ${createStyles('pt', 5, 'padding-top')}
    ${createStyles('pr', 5, 'padding-right')}
    ${createStyles('pb', 5, 'padding-bottom')}
    ${createStyles('pl', 5, 'padding-left')}
    ${createStyles('px', 5, 'padding-left', 'padding-right')}
    ${createStyles('py', 5, 'padding-top', 'padding-bottom')}

    .no-p {padding: 0;}
    .no-pt {padding-top: 0;}
    .no-pb {padding-bottom: 0;}

    pre {
        display: block;
        font-family: monospace;
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
        color: ${props => props.theme.colors.lightBlue};
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
        color: ${props => props.theme.colors.lightBlue};
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