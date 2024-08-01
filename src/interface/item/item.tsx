export interface IItemDetail {
  name: string;
  available: number;
  packaging?: string;
  origin: string;
  price: string;
  length: string;
  color: string;
  images?: string;
  orderBy: string;
  note: string;
  engName?: string;
  engNote?: string;
  highlight_note?: number;
}

export interface IItemExport {
  name: string;
  length: string;
  weightPerUnit: string;
  pricingUnit: string;
  price: string;
  unitPerBox: string;
  weightPerBox: string;
  MOQ: string;
  remarks: string;
  images?: string;
}

export interface ICustomerInfo {
  customer: string;
  currency: string;
  freight: string;
  date: string;
}