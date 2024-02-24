import React from 'react';
import "./style.css";
import {IItemExport} from "../../interface/item/item";
// import { countries, flags } from '../../const/flag';

function ExportCard({itemDetail}: { itemDetail: IItemExport }) {
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
              <span>Price</span>
              <span>:</span>
            </div>
            { itemDetail.price && <div className="info-detail">{` ${itemDetail.price}`}</div>}
          </div>
          <div className="item-length item-detail">
            <div className="info-title">
              <span>Length</span>
              <span>:</span>
            </div>
            { itemDetail.length &&<div className="info-detail">{` ${itemDetail.length}`}</div>}
          </div>
          <div className="item-pricing-unit item-detail">
            <div className="info-title">
              <span>Pricing Unit</span>
              <span>:</span>
            </div>
            { itemDetail.pricingUnit &&<div className="info-detail">{` ${itemDetail.pricingUnit}`}</div>}
          </div>
          <div className="item-unit-per-box item-detail">
            <div className="info-title">
              <span>Unit per Box</span>
              <span>:</span>
            </div>
            { itemDetail.unitPerBox &&<div className="info-detail">{` ${itemDetail.unitPerBox}`}</div>}
          </div>
          <div className="item-weight-per-box item-detail">
            <div className="info-title">
              <span>Weight per box</span>
              <span>:</span>
            </div>
            { itemDetail.weightPerBox &&<div className="info-detail">{` ${itemDetail.weightPerBox}`}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExportCard;