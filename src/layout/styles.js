import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
      toolbar:{
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
      },
      root:{
            width:'100%',
            overflow:'hidden',
            position:'relative'
      },
      content:{
            minHeight:'100vh'
      }
}))

export default useStyles;