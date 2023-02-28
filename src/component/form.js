import React, { useState } from "react";

const Form = ({ status, handleAdd }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [domain, setDomain] = useState('');
    const [disable, setDisable] = useState(false);
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const onAdd = (e) => {
        e.preventDefault()
        handleAdd({
            domain: domain,
            t: title,
            d: desc,
            id: Math.round(Math.random() * 1000),
        })
        if (domain !== "") {
            setDisable(true)
        }
        setTitle("");
        setDesc("")
    }
    return (
        <div className="container w-50 p-4 rounded" >
            <div class="form-floating m-3">
                <input type="text" class="form-control " id="floatingInput" value={domain} onChange={e => {
                    setDomain(e.target.value)
                }
                } placeholder="Python, C++....." disabled={disable} />
                <label for="floatingInput">Domain</label>
            </div>
            <div class="form-floating m-3">
                <input type="text" class="form-control" id="floatingInput" value={title} onChange={handleTitle
                } placeholder="Python, C++....." />
                <label for="floatingInput">Title</label>
            </div>
            <div class="form-floating m-3">
                <input type="text" class="form-control" id="floatingPassword" value={desc} onChange={e => {
                    setDesc(e.target.value)
                }} placeholder="Password" />
                <label for="floatingPassword">Description</label>
            </div>
            <div className="container my-2 d-flex justify-content-center">
                <button type="button" onClick={onAdd} class="btn btn-outline-success m-1">Add + </button>
                <button type="button" onClick={(e) => { status(false) }} class="btn btn-outline-success m-1">Exit</button>
            </div>
        </div>
    )
}
export default Form;