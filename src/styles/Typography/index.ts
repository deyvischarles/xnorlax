import styled, { css, ThemeProvider } from "styled-components"

interface ITypography {
    variant:
    'h1' | 
    'h2' | 
    'h3' | 
    'h4' | 
    'h5' | 
    'h6' | 
    'subtitle1' | 
    'subtitle2' |
    'body1' |
    'body2' |
    'button' |
    'caption' |
    'overline'
    component?: string
    weight?: 'light' | 'regular' | 'bold'
    className?: string
}

const Typography = styled('div').attrs<ITypography>(({component, variant}) => (
    { as: `${component ?? (variant !== 'button' ? variant : 'span')}` }
    ))<ITypography>`
    
    ${props => props.variant === "h1" && css`
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.167;
        letter-spacing: -0.01562em;
    `}

    ${props => props.variant === "h2" && css`
        font-size: 3.75rem;
        font-weight: 300;
        line-height: 1.2;
        letter-spacing: -0.00833em;
    `}

    ${props => props.variant === "h3" && css`
        font-size: 3rem;
        font-weight: 400;
        line-height: 1.167;
        letter-spacing: 0em;
    `}

    ${props => props.variant === "h4" && css`
        font-size: 2.125rem;
        font-weight: 400;
        line-height: 1.235;
        letter-spacing: 0.00735em;
    `}

    ${props => props.variant === "h5" && css`
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.334;
        letter-spacing: 0em;
    `}

    ${props => props.variant === "h6" && css`
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.6;
        letter-spacing: 0.0075em;
    `}

    ${props => props.variant === "subtitle1" && css`
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.75;
        letter-spacing: 0.00938em;
    `}

    ${props => props.variant === "subtitle2" && css`
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.57;
        letter-spacing: 0.00714em;
    `}

    ${props => props.variant === "body1" && css`
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.00938em;
    `}

    ${props => props.variant === "body2" && css`
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.43;
        letter-spacing: 0.01071em;
    `}

    ${props => props.variant === "button" && css`
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.75;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
    `}

    ${props => props.variant === "caption" && css`
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.66;
        letter-spacing: 0.03333em;
    `}

    ${props => props.variant === "overline" && css`
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 2.66;
        letter-spacing: 0.08333em;
        text-transform: uppercase;
    `}

    ${props => props.weight === "light" && css`
        font-weight: 300;
    `}

    ${props => props.weight === "regular" && css`
        font-weight: 400;
    `}

    ${props => props.weight === "bold" && css`
        font-weight: 700;
    `}
`

export default Typography