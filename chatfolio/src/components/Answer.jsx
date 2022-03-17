import React from "react";
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => (
    createStyles({
        "button": {
            backgroundColor: "#00B900",
            borderColor: "#00B900",
            color: "#fff",
            fontWeight: 600,
            marginBottom: '8px',
            "&:hover": {
                backgroundColor: "#fff",
                color: "#00B900"
            }
        }
    })
));

const Answer = (props) => {

    const classes = useStyles();

    return (
            <Button
                className={classes.button}
                variant="outlined" 
                onClick={() => props.select(props.content, props.nextId)} 
            >
            {props.content}
            </Button>
    )
}

export default Answer;