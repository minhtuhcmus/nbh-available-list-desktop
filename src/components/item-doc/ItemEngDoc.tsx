import {Document, Page, StyleSheet, View, Text, Image, Font } from "@react-pdf/renderer";
import {IItemDetail} from "../../interface/item/item";
import logo_img from "../../assets/logo.png";
import { ToEngOrigin, ToEngPackaging } from "../../utils/ToEng";
import { ReactNode } from "react";
import { getFlags } from "../../utils/GetFlag";
// import { countries, flags } from "../../const/flag";
import watermark from "../../assets/logo_grayscale.png";

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
    justifyContent: 'space-evenly'
  },
  pageHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
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
    width: '40%',
    textAlign: 'left',
    fontSize: 11,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  detail: {
    width: '60%',
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

function ItemCard({itemDetail}: {itemDetail:IItemDetail}) {
  return (
    <View style={[styles.card, {opacity: itemDetail.name !== 'dump' ? 1 : 0}]}>
      <Text style={styles.name}>{itemDetail.engName?.toLocaleUpperCase("en")}</Text>
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
            {itemDetail.price && <Text style={[styles.detail, {fontWeight: 'black', fontSize: itemDetail.price?.length > 16 ? 8 : 11}]}>{ToEngPackaging(itemDetail.price)}</Text>}
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Origin</Text>
              <Text>{`: `}</Text>
            </View>
            <View style={[styles.orgDetail, {position: 'relative'}]}>
              <Text style={styles.org}>{ToEngOrigin(itemDetail.origin)}</Text>
              <Image style={styles.flag} src={getFlags(itemDetail.origin)}></Image>
            </View>
            {/* {itemDetail.origin && <Text style={styles.detail}>{ToEngOrigin(itemDetail.origin)}</Text>} */}
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
              <Text>Packaging</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{ToEngPackaging(itemDetail.packaging ? itemDetail.packaging : "")}</Text>
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>MOQ</Text>
              <Text>{`: `}</Text>
            </View>
            {itemDetail.orderBy && <Text style={styles.detail}>{ToEngPackaging(itemDetail.orderBy)}</Text>}
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Note</Text>
              <Text>{`: `}</Text>
            </View>
            {itemDetail.engNote && <Text style={[
              styles.detail, 
              {
                color: itemDetail.highlight_note === 1 ? '#98300e' : 'black', 
                backgroundColor: itemDetail.highlight_note === 1 ? '#FEFE00' : '',
                fontWeight: itemDetail.highlight_note === 1 ? 'bold' : 'normal'
              }]}>{itemDetail.engNote}</Text>}
          </View>
        </View>
      </View>
    </View>
  );
}

function MyPage({itemDetails, index, date, totalPage, imageDeliveryCharge}: {itemDetails: IItemDetail[], index: number, date: string, totalPage: number, imageDeliveryCharge: string}) {
  function genPageContent() : ReactNode {
    if (index === totalPage - 1 && itemDetails.length < 3) {
      return (
        <>
          <View style={styles.pageContent}>
            {
              itemDetails.map((itemDetail: IItemDetail) => <ItemCard itemDetail={itemDetail} />)
            }
          </View>
          <View style={styles.deliveryChargeWrapper}>
            {imageDeliveryCharge && <Image style={styles.deliveryCharge} src={imageDeliveryCharge}></Image>}
          </View>
        </>
      )
    }
    return (
      <>
        <View style={styles.pageContent}>
          {
            itemDetails.map((itemDetail: IItemDetail) => <ItemCard itemDetail={itemDetail} />)
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
          <Image style={styles.logo} src={logo_img}/>
          <View style={styles.company}>
            <Text style={{fontWeight: 'bold'}}>NHA BAN HOA LTD VIETNAM</Text>
            <Text>Address : 45 – No.29 Street, An Khanh Ward, District 2, Ho Chi Minh City , Vietnam</Text>
            <Text>Hotline for ordering: (028) 7300 7299 - 0935 17 77 01 - 079 529 7799</Text>
            <Text>Hotline for handling: 078 229 7799</Text>
            <Text>Email : sales1@nhabanhoa.com</Text>
          </View>
        </View>
        <Text style={styles.date}>{`FLOWERS AVAILABILITY ON ${date}`}</Text>
      </View>
      {
        genPageContent()
      }
    </Page>
  );
}

const perPage = 8

const dumpItem:IItemDetail = {
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

function getPageContent(itemDetails: IItemDetail[], date: string, imageDeliveryCharge: string) {
  let pageNum = Math.ceil(itemDetails.length/perPage);
  let pagesData = new Array<IItemDetail[]>(pageNum);
  for (let i = 0; i < pageNum; i++) {
    pagesData[i] = itemDetails.slice(i*perPage, (i+1)*perPage)
    if (i === pageNum - 1 && pagesData[i].length % 2 === 1) {
      pagesData[i].push(dumpItem)
    }
    // console.log(i, pagesData)
  }
  return pagesData.map((pageData, index) => <MyPage itemDetails={pageData} index={index} date={date} totalPage={pageNum} imageDeliveryCharge={imageDeliveryCharge}/>)
}

function MyDocEng ({itemDetails, date, imageDeliveryCharge}: {itemDetails: IItemDetail[], date: string, imageDeliveryCharge: string}) {
  function genDeliveryCharge() : ReactNode {
    console.log(itemDetails.length%perPage)
    if (itemDetails.length % perPage > 2 || itemDetails.length % perPage === 0) {
      return (
        <Page size="A4" orientation="portrait" style={styles.page}>
          <View style={styles.deliveryChargeWrapper}>
            {imageDeliveryCharge && <Image style={styles.deliveryCharge} src={imageDeliveryCharge}></Image>}
          </View>
        </Page>
      )
    } else {
      return null
    }
  }
  return (
    <Document>
      {
        getPageContent(itemDetails, date, imageDeliveryCharge)
      }
      {
        genDeliveryCharge()
      }
    </Document>
  )
}

export default MyDocEng;