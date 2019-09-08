import React from 'react';
import { Link } from 'react-router-dom';
import { MdLaunch, MdHeadsetMic, MdAccountCircle, MdNotificationsNone } from 'react-icons/md';
import './topbar.scss';

export default class Topbar extends React.Component {
    render() {
        return (
            <div className="db__header">
                <div className="header-links">
                    <div className="inner-content">
                        <Link to="/admin" className="item">
                            <MdLaunch className="icon" />
                            Visit Site
                        </Link>

                        <Link to="/admin" className="item">
                            <MdHeadsetMic className="icon" />
                            Help
                        </Link>
                    </div>

                    <div className="notif-content">
                        <a className="notif-box" href="/">
                            <MdNotificationsNone className="icon" />
                            <i className="notif-icon" />
                        </a>

                        <Link className="profile-link" to="/admin">
                            Howdy, Marvin
                        </Link>
                        <MdAccountCircle className="icon" />
                    </div>
                </div>
            </div>
        );
    }
}
