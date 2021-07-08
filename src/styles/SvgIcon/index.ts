import styled, {css} from 'styled-components'

interface ISvgIcon {
    color?: string,
    width?: string,
    height?: string
}

const SvgIcon = styled.svg<ISvgIcon>`
    width: ${props => props.width ?? '24px'};
    height: ${props => props.height ?? '24px'};
    color: ${props => props.theme.colors.icon};

    ${props => props.color === "primary" && css`
        color: ${props => props.theme.colors.primaryColor};
    `}

    ${props => props.color === "secondary" && css`
        color: ${props => props.theme.colors.secondaryColor};
    `}

    ${props => props.color === "disabled" && css`
        color: ${props => props.theme.colors.disabledText};
    `}
`

export default SvgIcon