import React , {useState , useEffect} from 'react';
import useFetch from "../../Hooks/useFetch";
import CardProduct from '../../Components/CardProduct/CardProduct'
import { Container, Grid } from '@material-ui/core';
import Header from '../../Components/Header/Header';
import Title from '../../Components/Title/Title';
import Sidebar from '../../Components/Sidebar/Sidebar';

function OurProducts() {
    const {data} = useFetch();
    const [pasteDishes, setPasteDishes] = useState([]);

    useEffect(() => {
        setPasteDishes(data)  
    },[data])

    // filter data 
    const filterData = (type) => {
        const dishes = data.filter(item => item.category === type);
        setPasteDishes(dishes)
    }
    
    return (
        <>
            <Header title="our products"/>
            <Container>
                <Title title="our products" />
                <Grid container spacing={3}>
                    <Grid item  md={4}>
                        <Sidebar filterData={filterData}/>
                    </Grid>
                    <Grid item xs={12} md={8} container spacing={1}>
                        {
                            pasteDishes?.map(item => (
                                <Grid item xs={12} sm={6} md={4} key={item.id}>
                                    <CardProduct product={item} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default OurProducts
