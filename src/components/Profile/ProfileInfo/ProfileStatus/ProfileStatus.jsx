import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    onActiveMode  = () => {
        this.setState({
            editMode: true
        });
    }

    onDeactivation = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div>

            {!this.state.editMode &&
            <div>
                <span onDoubleClick={() => {this.onActiveMode()}}>{this.props.status}</span>
            </div>}
            {this.state.editMode &&
            <div>
                    <input onBlur={()=> {this.onDeactivation()}} autoFocus={true} value={this.props.status}/>
            </div>}

        </div>
    }
}

export default ProfileStatus;
