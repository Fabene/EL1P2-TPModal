import React from "react";
import './modal.css'



function Modal (){
    return(
                <>
                <div className="modal-wrapper">
                    <div className="modal-header">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form>
                                <input type="text" placeholder="state your Name"/>
                                <input type="text" placeholder="state your Position"/>
                                <input type="text" placeholder="state your Office"/>
                                <input type="text" placeholder="state your Age"/>
                                <input type="text" placeholder="state your Start Date"/>
                                <input type="text" placeholder="state your Salary"/>
                                <button className="btn btn-warning">Validate</button>
                                </form>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </>    
            );
        };
    
export default Modal;
