import {Document, Page, StyleSheet, View, Text, Image, Font } from "@react-pdf/renderer";
import {ICustomerInfo, IItemExport} from "../../interface/item/item";
import logo_img from "../../assets/logo.png";
import { ToEngOrigin, ToEngPackaging } from "../../utils/ToEng";
import { ReactNode, useEffect } from "react";
import { getFlags } from "../../utils/GetFlag";
// import { countries, flags } from "../../const/flag";
import watermark from "../../assets/logo_grayscale.png";
import getSymbolFromCurrency from 'currency-symbol-map';

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
      fontWeight: 'bold'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
      fontWeight: 'light'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-black-webfont.ttf',
      fontWeight: 'black'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.woff',
      fontWeight: 'medium'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
      fontWeight: 'normal'
    }
  ]  
});

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Roboto',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pageHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pageFooter: {
    fontSize: 10
  },
  card: {
    position: 'relative',
    width: '10cm',
    height: '6cm',
    flexDirection: 'column',
    border: '0.5 solid black'
  },
  name:{
    fontSize: '14',
    paddingTop: '6px',
    textAlign: 'center',
    fontWeight: 'bold',
    height: '1cm'
  },
  imageAndInfo: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '5cm'
  },
  image: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: '4.5cm',
    height: '4.5cm',
    objectFit: 'contain'
  },
  info: {
    flexDirection: 'column',
    width: '50%',
    marginBottom: '6'
  },
  infoDetail:{
    display:'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: '2'
  },
  title: {
    width: '60%',
    textAlign: 'left',
    fontSize: 11,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  detail: {
    width: '40%',
    textAlign: 'left',
    fontSize: 11,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  logo: {
    width: '2.5cm',
    height: '2.5cm',
    objectFit: 'contain'
  },
  logo_cont: {
    marginRight: '2cm'
  },
  date: {
    fontSize: '16',
    fontWeight: 'bold',
    marginTop: '0.5cm'
  },
  companyInfo:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  company: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '2cm'
  },
  companyDetail: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '2cm'
  },
  deliveryCharge: {
    width: '95%',
  },
  deliveryChargeWrapper:{
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  orgDetail: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  org: {
    textAlign: 'left',
    fontSize: 11,
  },
  flag: {
    position: 'absolute',
    right: '5px',
    top: '5px',
    border: '2px solid black',
    width: '14px'
  },
  watermark: {
    position: 'absolute',
    top: '12px',
    width: '100%',
    opacity: 0.05
  }
});

function ItemCard({itemDetail, currency}: {itemDetail:IItemExport, currency:string}) {
  return (
    <View style={[styles.card, {opacity: itemDetail.name !== 'dump' ? 1 : 0}]}>
      <Text style={styles.name}>{itemDetail.name?.toLocaleUpperCase("en")}</Text>
      <Image style={styles.watermark} src={watermark}></Image>
      <View style={styles.imageAndInfo}>
        <View style={styles.image}>
          {itemDetail.images && <Image style={styles.img} src={itemDetail.images}></Image>}
        </View>
        <View style={styles.info}>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Price</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{getSymbolFromCurrency(currency)} {itemDetail.price}</Text>
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Length</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{itemDetail.length}</Text>
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Weight per Unit</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{itemDetail.weightPerUnit}</Text>
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Pricing Unit</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{itemDetail.pricingUnit}</Text>
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Unit per Box</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{itemDetail.unitPerBox}</Text>
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Weight per Box</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{itemDetail.weightPerBox}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function MyPage({itemDetails, index, totalPage, customerInfo}: {itemDetails: IItemExport[], index: number, totalPage: number, customerInfo: ICustomerInfo}) {
  function genPageContent() : ReactNode {
    if (index === totalPage - 1 && itemDetails.length < 3) {
      return (
        <>
          <View style={styles.pageContent}>
            {
              itemDetails.map((itemDetail: IItemExport) => <ItemCard itemDetail={itemDetail} currency={customerInfo.currency}/>)
            }
          </View>
        </>
      )
    }
    return (
      <>
        <View style={styles.pageContent}>
          {
            itemDetails.map((itemDetail: IItemExport) => <ItemCard itemDetail={itemDetail} currency={customerInfo.currency}/>)
          }
        </View>
        <Text style={styles.pageFooter}>
          {index+1}/{totalPage}
        </Text>
      </>
    )
  }

  return (
    <Page size="A4" orientation="portrait" style={styles.page}>
      <View style={styles.pageHeader}>
        <View style={styles.companyInfo}>
          <View style={styles.company}>
            <Text>Price list prepared for: </Text>
            <Text>Currency: </Text>
            <Text>Freight: </Text>
            <Text>Date: </Text>
          </View>
          <View style={styles.companyDetail}>
            <Text>{customerInfo.customer}</Text>
            <Text>{customerInfo.currency}</Text>
            <Text>{customerInfo.freight}</Text>
            <Text>{customerInfo.date}</Text>
          </View>
        </View>
        <View style={styles.logo_cont}>
          <Image style={styles.logo} src={logo_img}/>
        </View>
      </View>
      {
        genPageContent()
      }
    </Page>
  );
}

const perPage = 8

const dumpItem:IItemExport = {
  images: "",
  length: "",
  name: "dump",
  weightPerBox: "0",
  unitPerBox: "0",
  price: "0",
  weightPerUnit: "",
  pricingUnit: ""
}

function getPageContent(itemDetails: IItemExport[], customerInfo: ICustomerInfo) {
  let pageNum = Math.ceil(itemDetails.length/perPage);
  let pagesData = new Array<IItemExport[]>(pageNum);
  for (let i = 0; i < pageNum; i++) {
    pagesData[i] = itemDetails.slice(i*perPage, (i+1)*perPage)
    if (i === pageNum - 1 && pagesData[i].length % 2 === 1) {
      pagesData[i].push(dumpItem)
    }
    // console.log(i, pagesData)
  }
  return pagesData.map((pageData, index) => <MyPage itemDetails={pageData} index={index} totalPage={pageNum} customerInfo={customerInfo}/>)
}

function ItemForeignDoc({itemDetails, customerInfo}: {itemDetails: IItemExport[], customerInfo: ICustomerInfo}) {
  return (
    <Document>
      {
        getPageContent(itemDetails, customerInfo)
      }
    </Document>
  )
}

export default ItemForeignDoc;