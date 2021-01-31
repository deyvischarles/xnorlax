import styled, {css} from 'styled-components'

interface IAssistant {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    variant?: string,
    color?: string,
    disabled?: boolean
}

const Assistant = styled.div<IAssistant>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    
    :before, :after {
        content: "";
        position: absolute;
        border-radius: 50%;
        animation-timing-function: ease-in-out;
        filter: drop-shadow(0 0 0.75rem rgba(50, 159, 210, 0));
    }
    
    :before {
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 0 12px #329fd2;
    }
    
    :after {
        width: 100%;
        height: 100%;
        background: rgba(50, 159, 210, 0.4);
        box-shadow: inset 0 0 0 12px rgba(50, 159, 210, 0.5);
        transform: scale(0.5);
    }

    ${props => props.variant === "started" && css`
        :before {
            animation: b_started 1.5s linear;
        }
        :after {
            animation: a_started 1.8s linear;
        }
    `}

    ${props => props.variant === "calm" && css`
        :before {
            animation: b_calm 2s linear infinite;
        }
        :after {
            animation: a_calm 2s linear infinite;
        }
    `}

    ${props => props.variant === "waiting" && css`
        :before {
            animation: b_waiting 2s linear infinite;
        }
        :after {
            animation: a_waiting 2s linear infinite;
        }
    `}

    ${props => props.variant === "alert" && css`
        :before {
            animation: b_alert 1s linear;
        }
        :after {
            animation: a_alert 1.8s linear;
        }
    `}

    ${props => props.variant === "spy" && css`
        :before {
            animation: b_spy 1.5s linear infinite;
        }
        :after {
            animation: a_spy 1.8s linear infinite;
        }
    `}

    ${props => props.variant === "active" && css`
        :before {
            animation: b_active 1.5s linear infinite;
        }
        :after {
            animation: a_active 1.8s linear infinite;
        }
    `}

    ${props => props.disabled && css`
        cursor: default;
        pointer-events: none;

        :before {
            box-shadow: inset 0 0 0 12px ${props => props.theme.colors.activated};
        }
        
        :after {
            background: rgba(50, 159, 210, 0);
            box-shadow: inset 0 0 0 12px ${props => props.theme.colors.hovered};
        }
    `}
  
    @keyframes b_started {
        0% {
            transform: rotateY(0deg);
        }
    
        30% {
            transform: scale(0.8);
            background: rgba(50, 159, 210, 0);
        }
        50% {
            transform: rotateY(0deg) scale(0.9);
        }
        60%, 70% {
            transform: rotateY(0deg) scale(1);
        }
        80%, 100% {
            transform: rotateY(0deg) scale(1);
        }
    }

    @keyframes a_started {
        0% {
            transform: rotateY(0deg);
            background: rgba(50, 159, 210, 0.4);
        }
    
        10% {
            transform: rotate(0deg) scale(0.3);
        }
    
        20% {
            transform: rotateY(180deg) scale(0.4);
        }
    
        30%, 40% {
            transform: rotate(0deg) scale(0.6);
        }
    
        50% {
            transform: rotateY(180deg) scale(0.6);
            background: rgba(50, 159, 210, 0.2);
        }
    
        50%, 60% {
            transform: rotate(0deg) scale(1.2);
        }
    
        70% {
            transform: rotateY(0deg) scale(1.1);
        }
    
        80%, 90% {
            transform: scale(1.2);
            background: rgba(50, 159, 210, 0.2);
        }
    
        100% {
            transform: scale(0.5);
            background: rgba(50, 159, 210, 0.4);
        }
    }
  
    @keyframes b_calm {
        0%, 10% {
            transform: scale(1)
        }
    
        60%, 70%, 80% {
            transform: scale(0.75);
        }
    
        100% {
            transform: scale(1)
        }
    }

    @keyframes a_calm {
        0%, 10% {
            transform: scale(0.75);
            background: rgba(50, 159, 210, 0);
            box-shadow: inset 0 0 0 12px rgba(50, 159, 210, 0.5);
        }
    
        70%, 80% {
            transform: scale(1);
            background: rgba(50, 159, 210, 0);
            box-shadow: inset 0 0 0 14px rgba(50, 159, 210, 0.5);
        }
    
        90%, 100% {
            transform: scale(0.75);
            background: rgba(50, 159, 210, 0);
            box-shadow: inset 0 0 0 12px rgba(50, 159, 210, 0.5);
        }
    }
  
    @keyframes b_calm_old {
        0% {
            transform: scale(1);
            box-shadow: inset 0 0 0 12px #329fd2;
        }
    
        50% {
            transform: scale(0.9);
            box-shadow: inset 0 0 0 12px #329fd2;
        }
    
        100% {
            transform: scale(1);
            box-shadow: inset 0 0 0 12px #329fd2;
        }
    }

    @keyframes a_calm_old {
        0% {
            transform: scale(0.75);
            box-shadow: inset 0 0 0 12px rgba(50, 159, 210, 0.5);
            opacity: 1;
        }
    
        50% {
            transform: scale(1.2);
            box-shadow: inset 0 0 0 14px rgba(50, 159, 210, 0.5);
            opacity: 1;
        }
    
        100% {
            transform: scale(0.75);
            box-shadow: inset 0 0 0 12px rgba(50, 159, 210, 0.5);
            opacity: 1;
        }
    }
  
    @keyframes b_waiting {
        30% {
            transform: rotateY(0deg);
            background: rgba(50, 159, 210, 0);
        }
    
        65% {
            transform: rotateY(-180deg);
            background: rgba(50, 159, 210, 0);
        }
    }

    @keyframes a_waiting {
        0% {
            transform: rotateY(0deg) scale(0.75);
            background: rgba(50, 159, 210, 0);
        }
    
        40%, 50%, 60% {
            transform: rotateY(180deg) scale(0.75);
            background: rgba(50, 159, 210, 0);
        }
        90% {
            transform: rotateY(0deg) scale(0.75);
            background: rgba(50, 159, 210, 0);
        }

        100% {
            transform: scale(0.75);
            background: rgba(50, 159, 210, 0);
        }
    }
  
    @keyframes b_alert {
        0% {
            transform: rotateY(0deg) scale(1);
        }
    
        30% {
            transform: rotateY(0deg) scale(0.9);
        }
    
        50%, 100% {
            transform: rotateY(0deg) scale(1);
        }
    }

    @keyframes a_alert {
        10%, 20% {
            transform: scale(0.5) rotateX(180deg);
            background: rgba(50, 159, 210, 0.4);
        }
    
        30%, 40% {
            transform: scale(1.3);
            background: rgba(50, 159, 210, 0.2);
        }
    
        50% {
            transform: scale(0.5);
            background: rgba(50, 159, 210, 0.4);
        }
    
        60%, 70% {
            transform: scale(1.1);
            background: rgba(50, 159, 210, 0.2);
        }
    
        80%, 90%, 100% {
            transform: scale(0.5);
            background: rgba(50, 159, 210, 0.4);
        }
    }
  
    @keyframes b_spy {
        50% {
            /*transform: rotateY(180deg);*/
        }
    }

    @keyframes a_spy {
        0% {
            transform: rotateY(0deg) scale(0.5);
            background: rgba(50, 159, 210, 0.4);
        }
    
        50% {
            /*transform: scale(0.6) skew(20deg)*/
            transform: rotateY(0deg) scale(0.45);
            background: rgba(50, 159, 210, 0.4);
        }
    
        100% {
            transform: rotateY(0deg) scale(0.5);
            background: rgba(50, 159, 210, 0.4);
        }
    }
  
    @keyframes b_active {
        0% {
            transform: scale(0.4);
            background: #329fd2;
        }
    
        30% {
            transform: scale(0.5);
            background: #329fd2;
        }
        50% {
            transform: scale(0.5);
            background: #329fd2;
        }
        60%, 70% {
            transform: rotateY(0deg) scale(0.5);
            background: #329fd2;
        }
        80% {
            transform: rotateY(0deg) scale(0.45);
            background: #329fd2;
        }
        100% {
            transform: rotateY(0deg) scale(0.4);
            background: #329fd2;
        }
    }

    @keyframes a_active {
        0% {
            transform: scale(0.75);
            background: rgba(50, 159, 210, 0.2);
            box-shadow: inset 0 0 0 0 rgba(50, 159, 210, 0);
        }
        10%, 20% {
            transform: scale(1.2);
            background: rgba(50, 159, 210, 0.3);
        }
        30%, 40% {
            transform: scale(1);
            background: rgba(50, 159, 210, 0.5);
        }
        50% {
            transform: scale(1.2);
            background: rgba(50, 159, 210, 0.5);
            box-shadow: inset 0 0 0 0 rgba(50, 159, 210, 0);
        }
        60%, 70% {
            transform: scale(1);
            background: rgba(50, 159, 210, 0.5);
        }
        80%, 90% {
            transform: scale(1.2);
            background: rgba(50, 159, 210, 0.3);
        }
        100% {
            transform: scale(0.75);
            background: rgba(50, 159, 210, 0.2);
            box-shadow: inset 0 0 0 0 rgba(50, 159, 210, 0);
        }
    }
`

export default Assistant