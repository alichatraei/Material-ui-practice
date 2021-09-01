import React from 'react'
import { Grid } from '@material-ui/core'
import CardItem from '../CardItem/CardItem'

const CardsContainer = () => {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item md={4}>
                <CardItem />
            </Grid>
            <Grid item md={4}>
                <CardItem />
            </Grid>
            <Grid item md={4}>
                <CardItem />
            </Grid>
        </Grid>
    )
}

export default CardsContainer
