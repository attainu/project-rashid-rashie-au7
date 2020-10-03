import React from 'react'

const Wishlist = () => {

    return (
        <section className="section-content padding-y">
        <div className="container">
            <div className="row">
                <main className="col-md-10">
                    
                    <header className="section-heading heading-line">
                        <h4 className="title-section text-uppercase"><i className="fa fa-heart"></i> My Wishlist</h4>
                    </header>
                    
                    <header className="mb-3">
                        <div className="form-inline">
                            <strong className="mr-md-auto">0 items found </strong>
                        </div>
                    </header>
                    <article className="card card-product-list">
                        
                        <div className="row no-gutters">
                            <aside className="col-md-3">
                                <a href="/detailproduct/?id=<%= prdt.prdtid %>" className="img-wrap" >
                                    <img src="images/items/<%=prdt.imgpath%>" />
                                </a>
                            </aside>
                            <div className="col-md-6">
                                <div className="info-main">
                                    <p href="/detailproduct/?id=<%= prdt.prdtid %>" className="h5 title">Name </p>
                                </div>
                                <div>
                                    <small className="text-muted">descn</small>
                                </div>
                                <div className="price mt-1"> <p style={{fontSize: '24px', fontWeight: '500', display: 'inline', fontFamily:'Cochin'}}>₹ </p>      
                                    <span className="badge badge-danger" style={{marginLeft: '10px' , marginBottom:'15px'}}> % Off </span>
                                </div>
                            </div> 
    
                            <aside className="col-md-3">
                                <div className="info-aside">
                                    <div className="price-wrap">
                                        <span className="h5 price">Price<small className="text-muted">/per item</small></span>	
                                    </div>
                                    <small className="text" style={{color: "green"}}>Free delivery in 2-3 days</small>
                                    <div className="h6">brand</div>
                                    <div className="h6">catgy</div>
                                    <div className="mt-3">
                                        <a href="/removewishlist/?id=<%=prdt.prdtid%>" className="btn btn-outline-primary"> <i className="fa fa-trash"></i> Remove Item </a>
                                    </div>
                                </div>
                            </aside> 
                        </div> 	
                    </article>
                </main> 
            </div>
                <div style={{textAlign: 'center', marginTop: '40px',marginBottom: '40px'}}>
                    <img src="images/emptyicons/empty_wishlist.png" style={{justifyContent:'center'}}/>	   
                </div>  
        </div> 
    </section>
    )
    
}

export default Wishlist




