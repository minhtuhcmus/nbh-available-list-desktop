import { ReactNode } from "react";
import { IItemDetail } from "../../interface/item/item";
import { Text, Page, View, Document } from "@react-pdf/renderer";
import { styles } from "./style";
import { ItemVieCard, getVieBottomHalfComplaintRegulations, getVieBottomHalfFlowerCare, getVieDeliveryCharge, getViePageHeader, getVieTopHalfComplaintRegulations, getVieTopHalfFlowerCare } from "./ItemDocP";
import { ItemEngCard, getEngBottomHalfComplaintRegulations, getEngBottomHalfFlowerCare, getEngDeliveryCharge, getEngPageHeader, getEngTopHalfComplaintRegulations, getEngTopHalfFlowerCare } from "./ItemEngDoc";
import Html from 'react-pdf-html';

const perPage = 8

const dumpItem: IItemDetail = {
	available: 0,
	color: "",
	images: "",
	length: "",
	name: "dump",
	note: "",
	orderBy: "",
	origin: "",
	packaging: "",
	price: ""
}

export function getPageContent(itemDetails: IItemDetail[], date: string, needDeliveryCharge: boolean, docNote: string, docNoti: string, lang: string) {
	let pageNum = 0;
	let pagesData = new Array<IItemDetail[]>(pageNum);

	let itemDetailsClone = structuredClone(itemDetails);
	if (docNoti !== "") {
		itemDetailsClone.unshift(dumpItem, dumpItem);
	}

	pageNum = Math.ceil(itemDetailsClone.length / perPage);
	for (let i = 0; i < pageNum; i++) {
		pagesData[i] = itemDetailsClone.slice(i * perPage, (i + 1) * perPage)
		if (pagesData[i].length % 2 === 1) {
			pagesData[i].push(dumpItem);
		}
	}

	if (docNoti !== "") {
		pagesData[0].shift();
		pagesData[0].shift();
	}

	return pagesData.map((pageData, index) => <MyPage itemDetails={pageData} index={index} date={date} totalPage={pageNum} needDeliveryCharge={needDeliveryCharge} docNote={docNote} docNoti={docNoti} lang={lang} />)
}

function MyPage({ itemDetails, index, date, totalPage, needDeliveryCharge, docNote, docNoti, lang }: { itemDetails: IItemDetail[], index: number, date: string, totalPage: number, needDeliveryCharge: boolean, docNote: string, docNoti: string, lang: string }) {

	console.log("MyPage", docNoti);

	function genPageContent(): ReactNode {
		if (index === 0 && docNoti !== "") {
			return (
				<View style={styles.firstPageNoti}>
					<View style={styles.docNoti}>
						<Text>
							{docNoti}
						</Text>
					</View>
					<View style={styles.pageContent}>
						{
							itemDetails.map((itemDetail: IItemDetail) => {
								if (lang === "vie") {
									return <ItemVieCard itemDetail={itemDetail} />
								} else {
									return <ItemEngCard itemDetail={itemDetail} />
								}
							})
						}
					</View>
				</View>
			)
		}
		if (index === totalPage - 1 && itemDetails.length < 5) {
			return (
				<>
					<View style={styles.pageContent}>
						{
							itemDetails.map((itemDetail: IItemDetail) => {
								if (lang === "vie") {
									return <ItemVieCard itemDetail={itemDetail} />
								} else {
									return <ItemEngCard itemDetail={itemDetail} />
								}
							})
						}
					</View>
					{
						needDeliveryCharge ? getDeliveryCharge(lang) : getTopHalfComplaintRegulations(lang)
					}
				</>
			)
		}
		return (
			<>
				<View style={styles.pageContent}>
					{
						itemDetails.map((itemDetail: IItemDetail) => {
							if (lang === "vie") {
								return <ItemVieCard itemDetail={itemDetail} />
							} else {
								return <ItemEngCard itemDetail={itemDetail} />
							}
						})
					}
				</View>
			</>
		)
	}

	return (
		<Page size="A4" orientation="portrait" style={styles.page}>
			{
				lang === "vie" ? getViePageHeader(index, totalPage, docNote, date) : getEngPageHeader(index, totalPage, docNote, date)
			}
			{
				genPageContent()
			}
		</Page>
	);
}

function getDeliveryCharge(lang: string) {
	if (lang === "vie") {
		return getVieDeliveryCharge()
	} else {
		return getEngDeliveryCharge()
	}
}

function getTopHalfComplaintRegulations(lang: string) {
	if (lang === "vie") {
		return getVieTopHalfComplaintRegulations()
	} else {
		return getEngTopHalfComplaintRegulations()
	}
}

function genBottomHalfComplaintRegulations(lang: string): ReactNode {
	return (
		<Page size="A4" orientation="portrait" style={styles.page}>
			<View style={styles.complaintRegulationsBottom}>
				{lang === "vie" ? getVieBottomHalfComplaintRegulations() : getEngBottomHalfComplaintRegulations()}
			</View>
			{/* {lang === "vie" ? getVieTopHalfFlowerCare() : getEngTopHalfFlowerCare()} */}
		</Page>
	)
}

function genBottomHalfFlowerCare(lang: string): ReactNode {
	return (
		<Page size="A4" orientation="portrait" style={styles.page}>
			<View style={styles.flowerCareWrapperBottomFullpage}>
				{lang === "vie" ? getVieBottomHalfFlowerCare() : getEngBottomHalfFlowerCare()}
			</View>
		</Page>
	)
}

function genDeliveryChargeWithTopHalfComplaintRegulations(lang: string): ReactNode {
	return (
		<Page size="A4" orientation="portrait" style={styles.page}>
			{
				lang === "vie" ? getVieDeliveryCharge() : getEngDeliveryCharge()
			}
			{
				lang === "vie" ? getVieTopHalfComplaintRegulations() : getEngTopHalfComplaintRegulations()
			}
		</Page>
	)
}

export function MyDoc({ itemDetails, date, needDeliveryCharge, docNote, docNoti, lang }: { itemDetails: IItemDetail[], date: string, needDeliveryCharge: boolean, docNote: string, docNoti: string, lang: string }) {

	console.log("docNoti", docNoti);

	function genFullComplaintRegulations(): ReactNode {
		return (
			<>
				<Page size="A4" orientation="portrait" style={styles.page}>
					<View style={styles.complaintRegulations}>
						{
							lang === "vie" ? getVieTopHalfComplaintRegulations() : getEngTopHalfComplaintRegulations()
						}
						{
							lang === "vie" ? getVieBottomHalfComplaintRegulations() : getEngBottomHalfComplaintRegulations()
						}
					</View>
				</Page>
				{/* <Page size="A4" orientation="portrait" style={styles.page}>
					<View style={styles.complaintRegulations}>
						{
							lang === "vie" ? getVieTopHalfFlowerCare() : getEngTopHalfFlowerCare()
						}
						{
							lang === "vie" ? getVieBottomHalfFlowerCare() : getEngBottomHalfFlowerCare()
						}
					</View>
				</Page> */}

			</>

		)
	}

	function genCaseOne(): ReactNode {
		return (
			<>
				{
					genDeliveryChargeWithTopHalfComplaintRegulations(lang)
				}
				{
					genBottomHalfComplaintRegulations(lang)
				}
				{/* {
					genBottomHalfFlowerCare(lang)
				} */}
			</>
		)
	}

	function getCaseTwo(): ReactNode {
		return genFullComplaintRegulations()
	}

	function genCaseThree(): ReactNode {
		return genFullComplaintRegulations()
	}

	function getCaseFour(): ReactNode {
		return (
			<>
				{
					genBottomHalfComplaintRegulations(lang)
				}
				{/* {
					genBottomHalfFlowerCare(lang)
				} */}
			</>
		)
	}

	function genInfo(): ReactNode {
		let l = docNoti !== "" ? itemDetails.length + 2 : itemDetails.length;
		if (needDeliveryCharge) {
			if (l % 8 > 4 || l % 8 == 0) {
				return genCaseOne()
			} else {
				return getCaseTwo()
			}
		} else {
			if (l % 8 > 4 || l % 8 == 0) {
				return genCaseThree()
			} else {
				return getCaseFour()
			}
		}
	}

	return (
		<Document>
			{
				getPageContent(itemDetails, date, needDeliveryCharge, docNote, docNoti, lang)
			}
			{
				genInfo()
			}
		</Document>
	)
}
