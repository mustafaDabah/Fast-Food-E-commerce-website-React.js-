import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function CreateThemeProvider ({children}) {

  // create theme  
  const Theme = createTheme({
    palette: {
      primary: {
        main: '#e17518'  ,
      },
      secondary: {
        main:  '#FC8621'
      },
    },
    shape:{
      borderRadius:'20px'
    },
    typography:{
      caption:{
        fontFamily:'Birthstone , cursive', 
      },
    }
  });

  // theme provider 
  return (
    <ThemeProvider theme={Theme}>
      {children}
    </ThemeProvider>

  )

}

export default CreateThemeProvider