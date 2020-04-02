import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => {
        return createStyles({
            root: {
                flexGrow: 1,
            },
            maxHeight: {
              height: '100vh'
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        });
    },
);

export const cardStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardPadding: {
            padding: 0
        }
    }),
);
