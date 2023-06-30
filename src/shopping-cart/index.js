import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";
export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      productDetail: data[0],
    }
  }
  handleDetailProduct = (product) => {
    //nhận product từ DSSP <= SP
    //console.log(product);
    this.setState ({
      productDetail:product,
    })
  }
  render() {
    const {productDetail} = this.state;
    return (
      <div>
        <h3 className="title">Shopping Cart</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng (0)
          </button>
        </div>
        <DanhSachSanPham listProduct ={this.state.listProduct} getDetailProduct ={this.handleDetailProduct}/>
        <Modal />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={productDetail.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{productDetail.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{productDetail.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{productDetail.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{productDetail.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{productDetail.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{productDetail.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
