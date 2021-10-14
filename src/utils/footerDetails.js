import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {ABOUT_PATH, HOME_PATH, LOGIN_PATH, OUR_PRODUCTS_PATH, SIGNUP_PATH} from '../constants/Routes'

export const socialMediaItems = [
    {pathname : "https://web.facebook.com/mostafa.dabah.9/?_rdc=1&_rdr" , icon: <FacebookIcon/>},
    {pathname : "https://twitter.com/MustafaDabah" , icon: <TwitterIcon/>},
    {pathname : "https://www.linkedin.com/in/mustafa-dabah-ab58661a3/" , icon: <LinkedInIcon/>},
    {pathname : "https://github.com/mustafaDabah" , icon: <GitHubIcon/>},
]

export const itemsLink = [
    {name:'Home' , path:HOME_PATH},
    {name:'About' , path:ABOUT_PATH},
    {name:'Sign in ' , path:LOGIN_PATH},
    {name:'Sign up ' , path:SIGNUP_PATH},
    {name:'Our Products' , path:OUR_PRODUCTS_PATH},
    {name:'Service' , path:OUR_PRODUCTS_PATH},
]