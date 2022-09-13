import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cover: {
        backgroundColor: '#F1F5F8',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        boxShadow: '0 5px 15px rgb(0 0 0 / 10%)',
        padding: '20px',
        margin: '0px 15px'
    },
    link: {
        marginTop: '10px',
        cursor: 'pointer'
    },
    grid: {
        margin: '0px -8px'
    },
    heading:{
        marginBottom:'15px'
    },
    button:{
        marginTop:'20px'
    }
}));
export default useStyles