import React from 'react'

const Modalss = (props) => {
  return (
    <div
          className={`modal fade ${props.isModalOpenforBuystocks ? 'show' : ''}`}
          id="exampleModals"

          aria-labelledby="exampleModalLabel"
          aria-hidden={!props.isModalOpenforBuystocks }
          style={{ display: props.isModalOpenforBuystocks  ? 'block' : 'none' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: 'black' }}>
                  {this.state.qty ? `Buy ${this.state.sharedetails.name} * ${this.state.qty} qty` : `Buy ${this.state.sharedetails.name} * 1 qty`}
                </h5>
                <a style={{ backgroundColor: 'white', color: 'black' }}>{this.state.sharedetails.currentprice}</a>
                <button
                  type="button"
                  className="btn-close"
                  onClick={this.closeModals}
                  aria-label="Close"
                  style={{ color: 'black' }}
                ></button>
              </div>
              <div className="modal-body">

                <div className='row'>
                  <div className='col-6' style={{ backgroundColor: 'white', color: 'black' }}>
                    <input type="number" className="form-control" placeholder="Quantity" onChange={this.handleInputChangebuyQty} />
                  </div>
                  <div className='col-6' style={{ backgroundColor: 'white', color: 'black' }}> <input type="number" className="form-control" placeholder="Price" value={this.state.sharedetails.currentprice} /></div>

                </div>

              </div>
              <div className="modal-footer">

                <a style={{ backgroundColor: 'white', color: 'black' }}>Margin</a>
                <a style={{ backgroundColor: 'white', color: 'black' }}>{this.state.qty ? `${this.state.sharedetails.currentprice}` * `${this.state.qty}` : ""}</a>
                <button type="button" className="btn btn-success" onClick={this.Buyshare}>
                  buy
                </button>
                <button type="button" className="btn btn-danger" onClick={this.closeModals}>
                  sell
                </button>

              </div>
            </div>
          </div>
        </div>
  )
}

export default Modalss