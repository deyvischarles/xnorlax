import styled, {css} from 'styled-components'

interface IIconButton {
    variant?: string,
    color?: string,
    disabled?: boolean
}

const IconButton = styled.button<IIconButton>`
    position: relative;
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
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &.edgeStart {
        margin-left: -12px;
    }

    &.edgeEnd {
        margin-right: -12px;
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.waves};
        transform: scale(1);
        opacity: 0;
        transition: 550ms cubic-bezier(0.4, 0, 0.2, 1);
        user-select: none;
    }

    &:hover {
        background-color: ${props => props.theme.colors.hovered};
        box-shadow: none;
    }

    &:active:before {
        transition: 0s;
        transform: scale(0);
        opacity: 1;
    }
    
    ${props => props.color === "primary" && css`
        svg {
            color: ${props => props.theme.colors.primaryColor};
        }

        &:hover {
            background-color: ${props => props.theme.colors.hoveredPrimary};
        }
    `}

    ${props => props.color === "secondary" && css`
        svg {
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

        svg {
            color: ${props => props.theme.colors.disabledText} !important;
        }
    `}
`

export default IconButton