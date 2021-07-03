import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primaryColor: string;
            primaryColorContrast: string;
            primaryColorLight: string;
            primaryColorLightContrast: string;
            primaryColorDark: string;
            primaryColorDarkContrast: string;

            secondaryColor: string;
            secondaryColorContrast: string;
            secondaryColorLight: string;
            secondaryColorLightContrast: string;
            secondaryColorDark: string;
            secondaryColorDarkContrast: string;

            errorColor: string;
            errorColorLight: string;
            errorColorDark: string;
            warningColor: string;
            warningColorLight: string;
            warningColorDark: string;
            infoColor: string;
            infoColorLight: string;
            infoColorDark: string;
            successColor: string;
            successColorLight: string;
            successColorDark: string;

            primaryText: string;
            secondaryText: string;
            disabledText: string;

            enabled: string;
            hovered: string;
            focused: string;
            selected: string;
            activated: string;
            pressed: string;
            dragged: string;

            enabledPrimary: string;
            hoveredPrimary: string;
            focusedPrimary: string;
            selectedPrimary: string;
            activatedPrimary: string;
            pressedPrimary: string;
            draggedPrimary: string;

            enabledSecondary: string;
            hoveredSecondary: string;
            focusedSecondary: string;
            selectedSecondary: string;
            activatedSecondary: string;
            pressedSecondary: string;
            draggedSecondary: string;

            red: string;
            pink: string;
            purple: string;
            deepPurple: string;
            indigo: string;
            blue: string;
            lightBlue: string;
            cyan: string;
            teal: string;
            green: string;
            lightGreen: string;
            Lime: string;
            yellow: string;
            amber: string;
            orange: string;
            deepOrange: string;
            brown: string;
            gray: string;
            blueGray: string;

            box: string;
            boxHovered: string;
            boxFocused: string;
            boxDragged: string;

            navBar: string;
            onNavBar: string;
            sideNav: string;
            footer: string;
            onFooter: string;
            footerCopyright: string;
            onFooterCopyright: string;
            btnOutlined: string;
            btnOutlinedPrimary: string;
            btnOutlinedSecondary: string;
            btnDisabled: string;
            onBtnDisabled: string;
            icon: string;
            background: string;
            paper: string;
            divider: string;
            border: string;
            thumb: string;
            thumbText: string;
            striped: string;
            
            waves: string;
            wavesOnPrimary: string;
            wavesOnSecondary: string;
            wavesOnRaised: string;
            wavesOnRaisedPrimary: string;
            wavesOnRaisedSecondary: string;
        }
    }
}