import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(_theme => ({
    main: {
        flex: 0.6,
        color: 'white'
    },
    title: {
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        display: 'inline-block',
        padding: '5px'
    }
}));

export default useStyles;