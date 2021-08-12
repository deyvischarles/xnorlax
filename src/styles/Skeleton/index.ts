import styled, { css } from "styled-components"

interface ISkeleton {
    variant: 'text' | 'circle' | 'rect';
    width?: number | string;
    height?: number | string;
    animation?: 'pulse' | 'wave' | false;
    className?: string;
}

const Skeleton = styled.span<ISkeleton>`
    display: block;
    background-color: ${props => props.theme.colors.skeleton};
    animation: skeleton-pulse 1.5s ease-in-out 0.5s infinite;

    ${props => props.width !== undefined ? (
        typeof props.width === 'string' ? `width: ${props.width};` : `width: ${props.width}px;`
    ) : ''}

    ${props => props.height !== undefined ? (
        typeof props.height === 'string' ? `height: ${props.height};` : `height: ${props.height}px;`
    ) : ''}

    @keyframes skeleton-pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.4;
        }
        100% {
            opacity: 1;
        }
    };

    @keyframes skeleton-wave {
        0% {
            transform: translateX(-100%);
        }
        50% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(100%);
        }
    };

    ${props => props.variant === "text" && css `
        height: auto;
        transform: scale(1, 0.60);
        margin-top: 0;
        border-radius: 4px;
        margin-bottom: 0;
        transform-origin: 0 60%;

        &:empty::before {
            content: '\\00a0';
        }
    `}

    ${props => props.variant === "circle" && css `
        border-radius: 50%;
    `}

    ${props => props.variant === "rect" && css `
        border-radius: 0;
    `}

    ${props => props.animation === false && css `
        animation: none;
    `}

    ${props => props.animation === "wave" && css `
        overflow: hidden;
        position: relative;

        &:after {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: "";
            position: absolute;
            animation: skeleton-wave 1.6s linear 0.5s infinite;
            transform: translateX(-100%);
            background: linear-gradient(90deg, transparent, ${props => props.theme.colors.hovered}, transparent);
        }
    `}
`

export default Skeleton