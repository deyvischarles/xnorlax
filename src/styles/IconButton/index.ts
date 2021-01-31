import styled, {css} from 'styled-components'

interface IIconButton {
    variant?: string,
    color?: string,
    disabled?: boolean
}

const IconButton = styled.button<IIconButton>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${props => props.theme.colors.icon};
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-size: 24px;
    text-transform: uppercase;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &.edgeStart {
        margin-left: -12px;
    }

    &.edgeEnd {
        margin-right: -12px;
    }

    &:hover {
        background-color: ${props => props.theme.colors.hovered};
        box-shadow: none;
    }
    
    ${props => props.color === "primary" && css`
        i {
            color: ${props => props.theme.colors.primaryColor};
        }

        &:hover {
            background-color: ${props => props.theme.colors.hoveredPrimary};
        }
    `}

    ${props => props.color === "secondary" && css`
        i {
            color: ${props => props.theme.colors.secondaryColor};
        }

        &:hover {
            background-color: ${props => props.theme.colors.hoveredSecondary};
        }
    `}

    ${props => props.disabled && css`
        background-color: transparent !important;
        cursor: default;
        pointer-events: none;

        i {
            color: ${props => props.theme.colors.disabledText} !important;
        }
    `}
`

export default IconButton