import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    let [editMode, setMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const saveStatus = () => {
        setMode(false);
        props.updateStatus(status);
    };

    const cancelStatus = ()=> {
        setMode(false);
        setStatus(props.status);
    };

        return <div>

            {!editMode &&
            <div>
                <span onDoubleClick={() => {setMode(true)}}>{props.status}</span>
            </div>}
            {editMode &&
            <div>
                    <input autoFocus={true} value={status} onChange={(e) => {setStatus(e.target.value)}}/>
                    <button onClick={saveStatus}> Save </button>
                    <button onClick={cancelStatus}> Cancel </button>
            </div>}

        </div>
}

export default ProfileStatus;
