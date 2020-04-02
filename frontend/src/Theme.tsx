import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2CCA5F',
            light: '#25CE77',
            dark: '#15B156'
        },
        secondary: {
            main: '#FF9400'
        }
    },
    overrides: {
        MuiButton: {
            contained: {
                color: 'white',
                background: 'linear-gradient(45deg, #55C89E 30%, #2DD86E 90%)'
            }
        }
    },
    props: {
        MuiButton: {
            disableRipple: true,
            disableElevation: true,
        }
    },
});

export default theme