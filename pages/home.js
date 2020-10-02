import React, {Component, Fragment} from 'react';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Link from "next/link";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className='home background'>
                    <div className='notifications'><NotificationsNoneOutlinedIcon fontSize="large"/></div>
                    <div className='line'></div>
                    <div className='icon'></div>
                    <div className='name'><p>Иванова А.</p></div>
                </div>
                <Link href="/">
                    <a className='profile'>Личный профиль</a>
                </Link>
                <span className='nav'>Главная/Личный профиль</span>
                <div>
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default Home;