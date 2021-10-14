import React , {useState} from 'react'
import { Button, ListItem, Typography } from '@material-ui/core';
import useStyles from './styles';
import TuneIcon from '@material-ui/icons/Tune';
import { motion } from "framer-motion"
import { variantsSidebar } from '../../Animation';
import { categoriesItems } from '../../utils/categoriesItems';


function Sidebar({filterData}) {
    const classes = useStyles();
    const [openFilter, setOpenFilter] = useState(true);

    const openSidebar = () => {
        setOpenFilter(!openFilter);
    }

    return (
        <>
            <div className={classes.icon} onClick={openSidebar}>
                <TuneIcon/>
            </div>
            <motion.div animate={openFilter ? "open" : "closed"} variants={variantsSidebar}>
                <Typography variant="h6" className={classes.title} align="center" >Categories</Typography>
                <ListItem className={classes.list}>
                    {categoriesItems.map((item , index) => (
                        <Button onClick={() => filterData(item)} key={index}>{item}</Button>
                    ))}
                 </ListItem>
            </motion.div>
        </>
        
    )
}

export default Sidebar
