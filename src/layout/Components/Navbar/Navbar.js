import React , {useEffect , useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link , useHistory} from 'react-router-dom';
import { Box, ListItem , Typography  , Badge , Toolbar, Button } from '@material-ui/core';
import { useSelector , useDispatch } from 'react-redux';
import { auth } from '../../../API/Firebase'
import { setUserDetails } from '../../../Redux/ReduxFeatures/UserSlice';
import useStyles from './styles';
import {LOGIN_PATH, OUR_PRODUCTS_PATH, SHOPPING_CART_PATH } from '../../../constants/Routes';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Logo from '../Logo/Logo';
import { navbarLinks } from '../../../utils/navbarLinks';

function Navbar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [openNavbar, setOpenNavbar] = useState(false)
    const history = useHistory();
    const {shopCartProducts} = useSelector((state) => state.cart)
    const {user} = useSelector(state => state.user);

    // handle navbar open and close 
    const handleNavbar = () => {
      setOpenNavbar(!openNavbar);
    }

    // go to page 
    const goTo = (path) => {
      setOpenNavbar(false);
      history.push(path)
    }

    // count the number of products at shopping cart 
    const numberOfProductCart = shopCartProducts.reduce((previousValue, currentValue) => previousValue + currentValue.quantity , 0);

    // logout function 
    const logout = async () => {
      await auth.signOut();
      dispatch(setUserDetails())
    }

    // on Auth change 
    useEffect(() => {
        async function onAuthChange() {
          auth.onAuthStateChanged((user) => {
            if (user) {
              dispatch(setUserDetails(user))
            }
          })
        }
        onAuthChange()
    })

    return (
        <>
          <AppBar className={classes.root}>
              <Toolbar className={classes.container}>
                  <ListItem className={!openNavbar ? classes.listItemClose : classes.listItemOpen}>
                  {navbarLinks.map((item , index) => (
                    <Button key={index} className={classes.linkItems} onClick={() => goTo(item.path)}>{item.name}</Button>
                  ))}
                  </ListItem>
                  
                  <Logo/>
                
                  <Box display='flex' justifyContent='center' alignItems='center'>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleNavbar}
                      className={classes.menuButton}
                      >
                        <MenuIcon />
                    </IconButton>
                    {/* ---is user or not --- */}
                    {user?.email ? (
                      <IconButton onClick={logout}>
                          <Typography component={Link}  to={LOGIN_PATH} className={classes.favorite}>
                              <ExitToAppOutlinedIcon/>
                          </Typography>
                      </IconButton>
                    ) : (
                      <IconButton>
                        <Typography component={Link}  to={LOGIN_PATH} className={classes.favorite}>
                            <PermIdentityOutlinedIcon/>
                        </Typography>
                      </IconButton>
                    )}
                    <IconButton>
                      <Typography component={Link}  to={OUR_PRODUCTS_PATH} className={classes.favorite}>
                          <SearchOutlinedIcon/>
                      </Typography>
                    </IconButton>
                    <IconButton>
                      <Typography component={Link}  to={SHOPPING_CART_PATH} className={classes.favorite}>
                          <Badge badgeContent={numberOfProductCart} color="secondary">
                            <ShoppingCartOutlinedIcon/>
                          </Badge>
                      </Typography>
                    </IconButton>
                  </Box>
              </Toolbar>
          </AppBar>
        </>
    )
}

export default Navbar;
