import React from 'react'
import { Box, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import Logo from '../Logo/Logo'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { itemsLink, socialMediaItems } from '../../../utils/footerDetails';
import { variantsHoverIcons } from '../../../Animation';
import { motion } from 'framer-motion';

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Box display='flex' justifyContent="space-between" alignItems="center" className={classes.logoContainer}>
                    <Logo/>
                    <div className={classes.socialLink}>
                        {socialMediaItems.map((item , index)=> (
                            <motion.div key={index} whileHover={variantsHoverIcons.whileHover} whileTap={variantsHoverIcons.whileTap}>
                                <Link to={{pathname:item.pathname}} target="_blank">
                                    {item.icon}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <div>
                        <Typography className={classes.phoneNumber} variant='h6'>
                            <PhoneOutlinedIcon/>  : 
                            +555 555 5555
                        </Typography>
                    </div>
                </Box>
                <Box display='flex' justifyContent="space-between" alignItems="center" className={classes.listItems}>
                    {itemsLink.map((item , index) => (
                        <Typography component={Link} key={index} className={classes.linkItems} to={item.path}>{item.name}</Typography>
                    ))}
                </Box>
                <Box className={classes.copyRight} display='flex' justifyContent="space-between" alignItems="center" >
                    <Typography component='h3' align="center" className={classes.linkItems}>© Copy Right 2021 Mustafa Dabah</Typography>
                    <Typography component='h3' className={classes.toolsUsed}>React Redux Material UI Firebase </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default Footer
