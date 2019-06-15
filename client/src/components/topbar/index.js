import React from 'react';
import { Link } from 'react-router-dom';
import {
    MdLaunch,
    MdComment,
    MdAdd,
    MdHeadsetMic,
    MdAccountCircle,
    MdNotificationsNone
} from 'react-icons/md';
import topbarStyles from './topbar.module.scss';

export default class Topbar extends React.Component {
    render() {
        return (
            <div className="db__header">
                <div className={topbarStyles.headerLinks}>
                    <span className={topbarStyles.innerContent}>
                        <MdLaunch className="icon" />
                        <Link to="/admin">Test Site</Link>
                        <MdAdd className="icon" />
                        <Link to="/admin">New</Link>
                        <MdComment className="icon" />
                        <Link to="/admin">Comments</Link>
                        <MdHeadsetMic className="icon" />
                        <Link to="/admin">Help</Link>
                    </span>
                    <span className={topbarStyles.not}>
                        <MdNotificationsNone className="icon" />
                        <i className={topbarStyles.notification} />
                        <span>Marvin, Admin</span>
                        <MdAccountCircle className="icon" />
                    </span>
                </div>
            </div>
        );
    }
}
