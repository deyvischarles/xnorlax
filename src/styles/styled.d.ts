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
            link: string;
            thumb: string;
            thumbText: string;
            box: string;
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