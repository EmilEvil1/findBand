import React from 'react'
import {Box, Button, Typography} from "@material-ui/core"
import {useStyles} from "../style";
import Layout from "../../components/common/Layout/Layout";
import BandsList from "../../components/common/BandsList/BandsList";

const BandsInformation = () => {
    const classes = useStyles()

    // TODO: написать API

    const mockData = [
        {
            bandName: 'Группа 1',
            memberCount: 2,
            createData: '1/01/2000',
            bandId: 123,
            bandPhoto: ''
        },
        {
            bandName: 'Группа 2',
            memberCount: 3,
            createData: '1/01/2001',
            bandId: 321,
            bandPhoto: ''
        }
    ]

    return (
        <Box className={classes.contentDark}>
            <Layout>
                <Typography className={classes.marginValue} color='primary' variant='h4'>Список групп</Typography>
                <BandsList list={mockData} />
                <Button>Создать</Button>
            </Layout>
        </Box>
    )
}

export default BandsInformation