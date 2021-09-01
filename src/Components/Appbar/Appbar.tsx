import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography, Button } from '@material-ui/core'
const useStyles = makeStyles({
    title: {
        flex: 1
    }
})
const Appbar = () => {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Welcome
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar
