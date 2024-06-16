import React, {useState} from 'react';

const Collapsible = (props) =>{
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
    };

    return(
        <div>
            <button onClick={toggle}>{props.label}</button>
            {open && (
                <div className={open ? "content-show" : "content-parent"}>
                    <div className='content'> {props.children} </div>
                </div>
            )}
        </div>
    )
}
export default Collapsible;