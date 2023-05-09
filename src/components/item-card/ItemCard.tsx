import React from 'react';
import "./style.css";
import {IItemDetail} from "../../interface/item/item";
// import { countries, flags } from '../../const/flag';

function ItemCard({itemDetail}: { itemDetail: IItemDetail }) {
  return (
    <div className={`item-card-wrapper ${itemDetail.name === 'dump' ? 'hide' : ''}`}>
      <div className="item-name">
        {itemDetail.name?.toLocaleUpperCase("vn")}
      </div>
      <div className="item-detail-info">
        <div className="item-image">
          <img src={itemDetail.images} alt="item-avatar"/>
        </div>
        <div className="item-info">
          <div className="item-price item-detail">
            <div className="info-title">
              <span>Giá</span>
              <span>:</span>
            </div>
            { itemDetail.price && <div className="info-detail">{` ${itemDetail.price}`}</div>}
          </div>
          <div className="item-origin item-detail">
            <div className="info-title">
              <span>Xuất xứ</span>
              <span>:</span>
            </div>
            { itemDetail.origin && <div className="info-detail">{` ${itemDetail.origin}`}</div>}
          </div>
          <div className="item-length item-detail">
            <div className="info-title">
              <span>Chiều dài</span>
              <span>:</span>
            </div>
            { itemDetail.length &&<div className="info-detail">{` ${itemDetail.length}`}</div>}
          </div>
          <div className="item-packaging item-detail">
            <div className="info-title">
              <span>Quy cách</span>
              <span>:</span>
            </div>
            { itemDetail.packaging && <div className="info-detail">{` ${itemDetail.packaging}`}</div>}
          </div>
          <div className="item-orderby item-detail">
            <div className="info-title">
              <span>SL đặt</span>
              <span>:</span>
            </div>
            { itemDetail.orderBy && <div className="info-detail">{` ${itemDetail.orderBy}`}</div>}
          </div>
          <div className="item-note item-detail">
            <div className="info-title">
              <span>Ghi chú</span>
              <span>:</span>
            </div>
            { itemDetail.note &&
            <div 
              className="info-detail"
              style={{
                color: itemDetail.note?.includes('BUY 1 GET 1') ? '#98300e' : 'black', 
                backgroundColor: itemDetail.note?.includes('BUY 1 GET 1') ? '#F5e7a2' : 'white',
                fontWeight: itemDetail.note?.includes('BUY 1 GET 1') ? 'bold' : 'normal'
              }}>{` ${itemDetail.note}`}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;