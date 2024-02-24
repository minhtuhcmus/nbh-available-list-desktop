import React, { useEffect, useRef, useState } from 'react';
import ItemCard from "../../item-card/ItemCard";
import { ICustomerInfo, IItemExport } from "../../../interface/item/item";
import * as XLSX from "xlsx";
import logo_img from "../../../assets/logo.png";
import { PDFViewer } from '@react-pdf/renderer';
import ItemForeignDoc from '../../item-doc/ItemForeignDoc';
import * as lodash from "lodash";

const dumpItem:IItemExport = {
	name: 'dump',
	length: '',
	weightPerUnit: '',
	pricingUnit: '',
	price: '',
	unitPerBox: '',
	weightPerBox: ''
}

function ForeignForm() {
	const [itemDetails, setItemDetails] = useState<IItemExport[][]>([]);
	const [customerInfos, setCustomerInfos] = useState<ICustomerInfo[]>([]);
	const [imageFolder, setImageFolder] = useState<null | string>(null);

	const [prepareVie, setPrepareVie] = useState(false);
	const [prepareEng, setPrepareEng] = useState(false);

	const [imageMap, setImageMap] = useState<Map<string, string>>();
	const [imageDeliveryChargeVie, setImageDeliveryChargeVie] = useState('');
	const [imageDeliveryChargeEng, setImageDeliveryChargeEng] = useState('');
	const [canGenDoc, setCanGenDoc] = useState(false);
	const [isGenActive, setIsGenActive] = useState(false);
	useEffect(() => {
		if (typeof (imageMap) !== 'undefined' &&
			imageMap.size > 0 &&
			itemDetails.length > 0) {
			setIsGenActive(true);
		}
	}, [imageMap])

	const readUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.target.files) {
			var reader = new FileReader();
			reader.onload = (e) => {
				var data = e.target?.result;
				
				// console.log(e.target?.result)
				var workbook = XLSX.read(data, { type: "array" });
				for (let i = 0; i < workbook.SheetNames.length; i++) {
					let sheetName = workbook.SheetNames[i];
					let worksheet = workbook.Sheets[sheetName];

					var customerRange = XLSX.utils.encode_range({ s: { c: 1, r: 0 }, e: { c: 1, r: 3 } })

					let info:string[] = XLSX.utils.sheet_to_json(worksheet, {range: customerRange, header: 1});
					console.log(info);

					let customerInfoTemp: ICustomerInfo = {
						customer: info[0][0],
						currency: info[1][0],
						freight: info[2][0],
						date: info[3][0]
					}

					var infoRange = XLSX.utils.encode_range({ s: { c: 0, r: 5 }, e: { c: 10, r: 200 } })
					let sheetCont: IItemExport[] = XLSX.utils.sheet_to_json(worksheet, {range: infoRange, blankrows: false});
					console.log(sheetCont);
					if (sheetCont.length % 8 != 0) {
						let need = 8 - sheetCont.length % 8;
						for (let i = 0; i < need; i++) {
							sheetCont.push(dumpItem);
						}
					}
					let itemDetailsTemp = itemDetails;
					let customerInfosTemp = customerInfos;
					itemDetailsTemp[i] = sheetCont;
					customerInfosTemp[i] = customerInfoTemp;
					setItemDetails(itemDetailsTemp);
					setCustomerInfos(customerInfosTemp);
				}
				console.log(itemDetails)
			};
			reader.readAsArrayBuffer(e.target.files[0]);
		}
	}

	function updateItemDetails() {
		if (imageMap && imageMap.size > 0) {
			let temp: IItemExport[][] = lodash.cloneDeep(itemDetails);
			temp.forEach((items: IItemExport[]) => {
				items.forEach((item: IItemExport) => {
					if (typeof (item.images) != 'undefined') {
						item.images = imageMap.get(item.images);
					}
				})
			})
			setItemDetails(temp);
		}
	}

	useEffect(() => {
		updateItemDetails()
	}, [imageMap])

	return (
		<>
			<div className="handler">
				<div className="file-upload">
					Chọn file {" "}
					<input
						type="file"
						name="upload"
						id="upload"
						onChange={(e) => readUploadFile(e)}
					/>
				</div>
				<div className="folder">
					Upload hình ảnh{" "}
					{/* @ts-expect-error */}
					<input directory="" webkitdirectory="" type="file" onChange={e => {
						let imagesMapTemp: Map<string, string> = new Map<string, string>();
						let files = e.target.files;
						if (files) {
							for (let i = 0; i < files.length; i++) {
								imagesMapTemp.set(files[i].name, URL.createObjectURL(files[i]));
							}
						}
						setImageMap(imagesMapTemp);
					}} />
				</div>
				<button style={{ marginTop: '12px' }} disabled={!isGenActive} onClick={() => {
					setCanGenDoc(true)
				}}>Gen Doc</button>
			</div>

			<div className='pdf-content-export'>
				{
					itemDetails.map((itemDetail, index) => <div className='doc-ver-export'>
					{canGenDoc && <PDFViewer width={'95%'} height={800}><ItemForeignDoc itemDetails={itemDetail} customerInfo={customerInfos[index]}/></PDFViewer>}
				</div>)
				}
			</div></>
	)
}

export default ForeignForm;