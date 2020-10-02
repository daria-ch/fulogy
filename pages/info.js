import React, {Fragment} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    main: {
        background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px'
    },
    edit: {
        textTransform: 'uppercase',
        paddingRight: '5px'
    },
    icon: {
        color: '#2196F3',
    }
}));


export default function Info() {
    const classes = useStyles();

    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('')

    React.useEffect(() => {
        setName(localStorage.getItem('name'));
        setNumber(localStorage.getItem('number'));
    })

    return (
        <Fragment>
            <div className='panel'>
                <AppBar position="static" className={classes.main}>
                    <Toolbar>
                        <div className='icon-large'></div>
                        <Typography variant="h6" className={classes.title}>
                            Иванова Анна Михайловна
                        </Typography>
                        <Link href="/edit">
                            <a className={classes.edit}>Редактировать</a>
                        </Link>
                        <EditIcon/>
                    </Toolbar>
                </AppBar>
            </div>
            <div className='content'>
                <List className='list' component="nav">
                    <ListItem className='listItem' button>
                        <ListItemIcon>
                            <AlternateEmailOutlinedIcon className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={name}/>
                    </ListItem>
                    <Divider/>
                    <ListItem className='listItem' button>
                        <ListItemIcon>
                            <PhoneOutlinedIcon className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText primary={number}/>
                    </ListItem>
                </List>
            </div>
        </Fragment>
    );
}





