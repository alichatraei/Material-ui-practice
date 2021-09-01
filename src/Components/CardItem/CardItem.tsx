import React from 'react'
import { Card, Typography, CardActions, CardContent, Button, makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
    root: {
        marginTop: '1rem'
    },
    title: {},
    pos: {}
})
const CardItem = (): JSX.Element => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    Something test
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CardItem
