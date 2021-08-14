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
                ${style1}: ${i * 8}px !important;
                ${style2 ? `${style2}: ${i * 8}px !important;` : ''}
            }
        `
    }

    return css`${styles}`;
}

function createCols(prefix: string, amount: number) {
    let styles = '';

    for (let i = 1; i <= amount; i += 1) {
        styles += `
            &.${prefix}${i} {
                flex-basis: ${100 / 12 * i}%;
                max-width: ${100 / 12 * i}%;
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

    html, body {
        width: 100%;
        height: auto;
        overflow: hidden auto;
    }

    body {
        background-color: ${props => props.theme.colors.background};
    }

    main {
        padding-top: 1rem;
    }
      
    button,
    input,
    select,
    textarea,
    optgroup {
        font-family: 'Segoe UI', -apple-system, Roboto, Ubuntu, sans-serif;
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
    
    ul {
        list-style-type: disc;
        padding-left: 1.875rem;
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

    .grid {
        display: grid;
        width: 100%;
        height: auto;
        overflow: hidden;

        &.circle { border-radius: 50%; }

        &.row {grid-auto-flow: row; }
        &.col { grid-auto-flow: column; }

        &.spacex1 { column-gap: 8px; }
        &.spacey1 { row-gap: 8px; }
    }

    .row {
        display: flex;
        flex: 0 1 auto;
        flex-direction: row;
        flex-wrap: wrap;
        margin-right: 0;
        margin-left: 0;

        .col {
            flex: 0 0 auto;

            &:last-of-type { margin-right: 0 !important; }
            &:first-of-type { margin-left: 0 !important; }

            ${createCols('sm', 12)}

            @media ${Breakpoints.md} {
                ${createCols('md', 12)} 
            }

            @media ${Breakpoints.lg} {
                ${createCols('lg', 12)}
            }
            
            @media ${Breakpoints.xl} {
                ${createCols('xl', 12)}
            }
        }
    }

    .box {
        display: flex;
        flex: 0 1 auto;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        outline: 0;
        overflow-x: hidden;
      
        &.nowrap {
          flex-wrap: nowrap;
        }
      
        &.col {
          flex-direction: column;
        }
      
        &.start {
          justify-content: flex-start;
        }
      
        &.end {
          justify-content: flex-end;
        }
      
        &.between {
          justify-content: space-between;
        }
      
        &.around {
          justify-content: space-around;
        }
      
        &.evenly {
          justify-content: space-evenly;
        }
      
        &.top {
          align-items: flex-start;
        }
      
        &.bottom {
          align-items: flex-end;
        }
      
        &.baseline {
          align-items: baseline;
        }
      
        &.stretch {
          align-items: stretch;
        }

        .item {
            flex: 0 0 auto;
            &:last-of-type { margin-right: 0 !important; }
            &:first-of-type { margin-left: 0 !important; }
        }

        .spacer {
          flex-grow: 1;
        }
    }

    .divider {
        height: 1px;
        overflow: hidden;
        background-color: ${props => props.theme.colors.divider};
        margin: 16px 0;
    }

    .m1 {margin: 8px !important;}
    .m2 {margin: 16px !important;}
    .m3 {margin: 24px !important;}
    .m4 {margin: 32px !important;}
    .m5 {margin: 40px !important;}

    ${createStyles('mt', 5, 'margin-top')}
    ${createStyles('mr', 5, 'margin-right')}
    ${createStyles('mb', 5, 'margin-bottom')}
    ${createStyles('ml', 5, 'margin-left')}
    ${createStyles('mx', 5, 'margin-left', 'margin-right')}
    ${createStyles('my', 5, 'margin-top', 'margin-bottom')}

    .gutterBottom { margin-bottom: 0.35em;}
    
    .p1 {padding: 8px !important;}
    .p2 {padding: 16px !important;}
    .p3 {padding: 24px !important;}
    .p4 {padding: 32px !important;}
    .p5 {padding: 40px !important;}

    ${createStyles('pt', 5, 'padding-top')}
    ${createStyles('pr', 5, 'padding-right')}
    ${createStyles('pb', 5, 'padding-bottom')}
    ${createStyles('pl', 5, 'padding-left')}
    ${createStyles('px', 5, 'padding-left', 'padding-right')}
    ${createStyles('py', 5, 'padding-top', 'padding-bottom')}

    .no-p {padding: 0 !important;}
    .no-pt {padding-top: 0 !important;}
    .no-pr {padding-right: 0 !important;}
    .no-pb {padding-bottom: 0 !important;}
    .no-pl {padding-left: 0 !important;}
    .no-px {padding-left: 0 !important; padding-right: 0 !important;}
    .np-py {padding-top: 0 !important; padding-bottom: 0 !important;}

    .surface  {
        background-color: ${props => props.theme.colors.box};
    }

    .outlined {
        border: 1px solid ${props => props.theme.colors.divider};
    }

    .r1 { border-radius: 2px; }
    .r2 { border-radius: 4px; }
    .r3 { border-radius: 6px; }
    .r4 { border-radius: 8px; }
    .r5 { border-radius: 10px; }
    .r6 { border-radius: 12px; }
    .r7 { border-radius: 16px; }

    pre {
        display: flex;
        font-family: monospace;
        white-space: pre-wrap;
        margin: 24px auto;
        padding: 16px;
        overflow: auto;
        direction: ltr;
        width: 100%;
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

    :not(pre) > code {
        color: ${props => props.theme.colors.pink};
        background-color: ${props => props.theme.colors.box};
        border-radius: 2px;
        padding: 0 4px;
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