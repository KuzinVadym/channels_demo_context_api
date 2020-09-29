import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(_theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        width: '100%',
        height: '100%'
    }
}));

export default useStyles;