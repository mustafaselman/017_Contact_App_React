import { useState, useEffect } from 'react';

const initialFormValues = { fullname: "", phone_number: "" }
function Form({ setContact, contacts })
{

    const [ form, setForm ] = useState(initialFormValues);

    useEffect(() =>
    {
        setForm(initialFormValues);

    }, [ contacts ])

    const onChangeInput = (e) =>
    {
        setForm({ ...form, [ e.target.name ]: e.target.value });
    };

    const onClick = (e) =>
    {
        e.preventDefault();

        
    if(e.target.name === "add"){
        if (form.fullname === '' || form.phone_number === '')
        {
            alert("PLEASE FILL INPUTS");
            return false;
        }
        setContact([ ...contacts, form ]);
    }else if (e.target.name === "clear"){
        setContact([{}]);
    }
        

    }
    return (
        <form>
           
            <div>
                <input name="fullname" placeholder="Full Name" onChange={onChangeInput} value={form.fullname} />
            </div>
            <div>
                <input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} value={form.phone_number} />
            </div>
            <div className='btn'>
                <button onClick={onClick} name="add" value="add">Add</button>
                <button onClick={onClick} name="clear" value="clear">Clear All</button>
            </div>
        </form>
    )
}

export default Form