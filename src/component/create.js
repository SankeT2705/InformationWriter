import React from "react";
const Create = ({ status }) => {
    return (
        <div className="container my-2 d-flex justify-content-center">
            <input type="button" className="button btn btn-outline-primary" onClick={e => {
                status(true)
            }} value="Create New" />
        </div>
    )
}
export default Create;