import React from 'react';
import './BlogModel.css';

const  BlogModel  = (props) => {
    return (
        <>
        <div className="modalhell">
            <header className="modalhell__header">
                <h1>{props.title}</h1>
            </header>
            <div className="modalcontent">
                <div className="form-group">
                    <label htmlFor="email" className="modelhell__label">Blog Title</label>        
                    <input type="text" className="form-control" onChange={(e) => props.inputChange(e.target.value)} defaultValue={props.title}/>                    
                </div>
                    <section className="modelhell__actions">
                        <button className="btn btn-primary   modehell__button" onClick={props.onCancel}>Cancel</button>
                        <button className="btn btn-secondary modehell__button" onClick={props.onSave}>Save</button>
                    </section>
            </div>
            
        </div>
        </>
    );
}

export default BlogModel;