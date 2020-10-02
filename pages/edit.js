import React, {Fragment} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

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
    exit: {
        textTransform: 'uppercase',
        paddingRight: '5px'
    },
    form: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px'
    },
    input: {
        marginLeft: '50px'
    },
    icon: {
        position: 'absolute',
        top: '25%',
        left: '10px',
        color: '#00BFA5'
    },
    item: {
        position: 'relative'
    },
    button: {
        background: '#01BDA7',
        borderRadius: '36px',
        color: '#fff',
        textTransform: 'none',
        position: 'absolute',
        bottom: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        marginTop: '15px'
    },
    saveButton: {
        width: '202px',
        height: '50px',
        background: ' #01BDA7',
        borderRadius: '41px',
        position: 'absolute',
        left: '200px',
        top: '35%'
    },
    cancelButton: {
        width: '202px',
        height: ' 50px',
        background: '#FFFFFF',
        color: '#00BFA5',
        border: '1px solid #00BFA5',
        boxSizing: 'border-box',
        borderRadius: '41px',
        position: 'absolute',
        left: '200px',
        top: '60%'
    },
    dialog: {
        width: '600px',
        height: '318px',
        borderRadius: '10px',
    },
    dialogTitle: {
        textAlign: 'center',
        paddingTop: '50px',
        color: 'rgba(49, 49, 49, 0.7)',
        fontWeight: '600',
        fontSize: '24px'
    }
}));


function SaveDialog(props) {
    const classes = useStyles();
    const {onClose, save, open} = props;

    const handleClose = () => {
        onClose(save);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open}
                PaperProps={{
                    classes: {
                        root: classes.dialog
                    }
                }}>
            <DialogTitle className={classes.dialogTitle} id="dialog-title">Сохранить изменения?</DialogTitle>
            <Button variant="contained" className={classes.saveButton} onClick={save}>
                Сохранить
            </Button>
            <Button variant="outlined" className={classes.cancelButton} onClick={handleClose}>
                Не сохранять
            </Button>

        </Dialog>
    );
}

SaveDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    save: PropTypes.func.isRequired,
};


export default function Edit() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [number, setNumber] = React.useState('')


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const saveInfo = () => {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('number', number);
        setOpen(false);
    }

    return (
        <Fragment>
            <div className='panel'>
                <AppBar position="static" className={classes.main}>
                    <Toolbar>
                        <div className='icon-large'></div>
                        <Typography variant="h6" className={classes.title}>
                            Иванова Анна Михайловна
                        </Typography>
                        <Link href="/">
                            <a className={classes.exit}>Закрыть</a>
                        </Link>
                        <CloseOutlinedIcon/>
                    </Toolbar>
                </AppBar>
            </div>
            <div className='content'>
                <div className='list'>
                    <form noValidate autoComplete="off">
                        <div className={classes.form}>
                            <div className={classes.item}>
                                <PermContactCalendarIcon className={classes.icon}/>
                                <TextField className={classes.input} type="text" id="name" label="Фамилия и имя"
                                           variant="outlined"
                                           value={name}
                                           onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className={classes.item}>
                                <AlternateEmailOutlinedIcon className={classes.icon}/>
                                <TextField className={classes.input} type="email" id="email" label="E-mail"
                                           variant="outlined"
                                           value={email}
                                           onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className={classes.item}>
                                <PhoneOutlinedIcon className={classes.icon}/>
                                <TextField className={classes.input} type="text" id="number" label="Номер телефона"
                                           variant="outlined"
                                           value={number}
                                           onChange={e => setNumber(e.target.value)}/>
                            </div>
                        </div>
                        <Button variant="contained" className={classes.button} onClick={handleClickOpen}>
                            Сохранить ихменения
                        </Button>
                    </form>
                </div>
            </div>
            <SaveDialog open={open} onClose={handleClose} save={saveInfo}/>
        </Fragment>
    );
}


