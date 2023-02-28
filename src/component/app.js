import React, { useState } from 'react'
import Form from './form';
import Create from './create';
import Card from './card';

const App = () => {
    const [Check, setCheck] = useState(false);
    const [data, setData] = useState([]);

    const addContent = (n) => {
        const update = [...data, n]
        setData(update)
    }


    const card = data.map((d) => {
        return <Card key={d.id} title={d.t} domain={d.domain} />
    })


    let form = "";


    const handleCreate = (n) => {
        setCheck(n);
    }
    if (Check === true) {
        form = <Form status={handleCreate} handleAdd={addContent} />
    }
    else {
        form = <Create status={handleCreate} />
    }

    return (
        <div className='container'>
            <div className='container' style={{ backgroundColor: "#eeee" }}>
                <div className='text-center'>
                    <h1>Content Writer</h1>
                </div>
                {form}
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {card}
            </div>

        </div>

    )
}

export default App;