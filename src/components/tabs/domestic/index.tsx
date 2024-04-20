import React, { useEffect, useRef, useState } from 'react';
import ItemCard from "../../item-card/ItemCard";
import { IItemDetail } from "../../../interface/item/item";
import * as XLSX from "xlsx";
import logo_img from "../../../assets/logo.png";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocP from '../../item-doc/ItemDocP';
import MyDocEng from '../../item-doc/ItemEngDoc';
import * as lodash from "lodash";

function DomesticForm() {
	const [itemDetails, setItemDetails] = useState<IItemDetail[]>([]);
	const [date, setDate] = useState('');
	const [docNoteEng, setDocNoteEng] = useState('');
	const [docNoteVie, setDocNoteVie] = useState('');

	const [imageMap, setImageMap] = useState<Map<string, string>>();
	// const [imageDeliveryChargeVie, setImageDeliveryChargeVie] = useState('');
	// const [imageDeliveryChargeEng, setImageDeliveryChargeEng] = useState('');
	const [canGenDoc, setCanGenDoc] = useState(false);
	const [isGenActive, setIsGenActive] = useState(false);
	const [needDeliveryCharge, setNeedDeliveryCharge] = useState(true);
	useEffect(() => {
		if (typeof (imageMap) !== 'undefined' &&
			imageMap.size > 0 &&
			date !== '' &&
			itemDetails.length > 0) {
			setIsGenActive(true);
		}
	}, [imageMap])

	const readUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.target.files) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const data = e.target?.result;
				// console.log(e.target?.result)
				const workbook = XLSX.read(data, { type: "array" });
				const sheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[sheetName];
				const json: IItemDetail[] = XLSX.utils.sheet_to_json(worksheet);
				console.log(json);
				setItemDetails(json);
			};
			reader.readAsArrayBuffer(e.target.files[0]);
		}
	}

	function updateItemDetails() {
		if (imageMap && imageMap.size > 0) {
			let temp: IItemDetail[] = lodash.cloneDeep(itemDetails);
			temp.forEach((item: IItemDetail) => {
				if (typeof (item.images) != 'undefined') {
					item.images = imageMap.get(item.images);
				}
			})
			setItemDetails(temp);
		}
	}

	useEffect(() => {
		updateItemDetails()
	}, [imageMap])

	return (
		<div className='dosmetic-wrapper'>
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
				<div className="date-input">
					Nhập ngày tháng làm báo giá{" "}
					<input
						type="text"
						onChange={e => setDate(e.target.value)}
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
				<div className='delivery-charge'>
					Phí vận chuyển
					<input
						type='checkbox'
						checked={needDeliveryCharge}
						onChange={() => {
							setNeedDeliveryCharge(!needDeliveryCharge)
						}}
					/>
				</div>
				<button style={{ marginTop: '12px' }} disabled={!isGenActive} onClick={() => {

					setCanGenDoc(true)
				}}>Gen Doc</button>
			</div>

			<div className='pdf-content'>
				<div className='doc-ver'>
					<div className='ver-name'>English Version</div>
					<div>
						Note for Doc: <input
							type="text"
							onChange={e => setDocNoteEng(e.target.value)}
						/>
					</div>

					{canGenDoc && <PDFViewer width={'90%'} height={800}><MyDocEng itemDetails={itemDetails} date={date} needDeliveryCharge={needDeliveryCharge} docNote={docNoteEng} /></PDFViewer>}
				</div>


				<div className='doc-ver'>
					<div className='ver-name'>Bản Tiếng Việt</div>
					<div>
						Ghi chú tài liệu: <input
							type="text"
							onChange={e => setDocNoteVie(e.target.value)}
						/>
					</div>
					{canGenDoc && <PDFViewer width={'90%'} height={800}><MyDocP itemDetails={itemDetails} date={date} needDeliveryCharge={needDeliveryCharge} docNote={docNoteVie} /></PDFViewer>}
				</div>
			</div>
		</div>
	)
}

export default DomesticForm;