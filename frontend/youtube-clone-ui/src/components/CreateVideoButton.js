import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const CreateVideoButton = () => {
    const {isAuthenticated} = useAuth0();

    return (
        !isAuthenticated && (
            <Link to={`/upload-video`}>
                <FontAwesomeIcon icon={faVideo}/>
            </Link>
        )
    )
}

export default CreateVideoButton
