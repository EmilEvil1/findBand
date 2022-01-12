import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

   content: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      width: '100vw',
      height: '100vh',
      overflow: "hidden",
      transition: 'all 1s easy'
   },
   container: {
      width: '85%',
      padding: '0 60px',
      transition: 'all 1s easy'
   }
});