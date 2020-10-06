import React from 'react'



const Ad_Coupon = () => {

    return(

        <div className="container">
            <div className="row it">
            <div className="col-sm-offset-1 col-sm-10" id="one">
                <p>
                    Please upload documents only in 'pdf', 'docx', 'rtf', 'jpg', 'jpeg', 'png' & 'text' format.
                </p><br/>
                <div className="row">
                    <div className="col-sm-offset-4 col-sm-4 form-group">
                        <h3 className="text-center">My Documents</h3>
                    </div>
                </div>
            <div id="uploader">
                <div className="row uploadDoc">
                <div className="col-sm-3">
                    <div className="docErr">Please upload valid file</div>
                    <div className="fileUpload btn btn-orange">
                        <img src="https://image.flaticon.com/icons/svg/136/136549.svg" className="icon" />
                        <span className="upl" id="upload">Upload document</span>
                        <input type="file" className="upload up" id="up" onchange="readURL(this);" />
                    </div>
                </div>
                <div className="col-sm-8">
                    <input type="text" className="form-control" name="" placeholder="Note" />
                </div>
                <div className="col-sm-1"><a className="btn-check"><i className="fa fa-times"></i></a></div>
            </div>
            </div>
            <div className="text-center">
                    <a className="btn btn-new"><i className="fa fa-plus"></i> Add new</a>
                    <a className="btn btn-next"><i className="fa fa-paper-plane"></i> Submit</a>
            </div>
        </div>
        </div>
        </div>

    )




}

export default Ad_Coupon;


