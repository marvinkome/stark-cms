import React from 'react';
import { MdPermIdentity } from 'react-icons/md';

class UserAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: <MdPermIdentity />
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        });
    }
    render() {
        return (
            <div className="usr--avatar__container">
                <label className="profile__form--label usr--avatar--label" htmlFor="profilepic">
                    Profile Photo:
                </label>
                <img
                    className="avatar avatar--150 usrPhoto"
                    src={this.state.file}
                    alt="Your Avatar"
                />
                <input className="btn" type="file" onChange={this.handleChange} id="profilepic" />
            </div>
        );
    }
}
export default UserAvatar;
