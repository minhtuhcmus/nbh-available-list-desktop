import { Document, Page, StyleSheet, View, Text, Image, Font } from "@react-pdf/renderer";
import { IItemDetail } from "../../interface/item/item";
import logo_img from "../../assets/logo.png";
import { ToEngOrigin, ToEngPackaging } from "../../utils/ToEng";
import { ReactNode } from "react";
import { getFlags } from "../../utils/GetFlag";
// import { countries, flags } from "../../const/flag";
import watermark from "../../assets/logo_grayscale.png";

import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14
  },
  card: {
    position: 'relative',
    width: '10cm',
    height: '6cm',
    flexDirection: 'column',
    border: '0.5 solid black'
  },
  name: {
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
  infoDetail: {
    display: 'flex',
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
  companyInfo: {
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
  deliveryChargeWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px black solid',
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
  },
  complaintRegulations: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textComplaint: {
    width: '100%',
    fontWeight: 'black',
    fontSize: '20px',
    marginTop: '4px',
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  complaintContent: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textTitle: {
    textDecoration: 'underline',
    width: '80%',
    fontWeight: 'black',
    fontSize: '16px'
  },
  images1: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  images2: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageRow1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imageRow2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px black solid'
  },
  imageCol: {
    width: '49%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px black solid'
  },
  image1: {
    width: '180px',
    height: '135px',
    objectFit: 'contain'
  },
  image2: {
    width: '120px',
    height: '90px',
    objectFit: 'contain'
  },
  boldText: {
    color: 'red',
    fontWeight: 'black',
    fontSize: '18px'
  },
  blackBoldText: {
    color: 'black',
    fontWeight: 'black',
    fontSize: '14px'
  },
  smallText: {
    fontSize: '14px'
  },
  dcHeader: {
    width: '98%',
    // fontSize: '14px',
    textAlign: 'center',
    // fontWeight: 'black',
    border: '1px black solid'
  },
  dcRow: {
    width: '98%',
    minHeight: '30px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    fontSize: '14px'
  },
  dcColTitle: {
    width: '40%',
    height: '100%',
    border: '1px black solid',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dcCol: {
    width: '15%',
    height: '100%',
    border: '1px black solid',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dcColWide: {
    width: '60%',
    height: '100%',
    border: '1px black solid',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dcColWideTall: {
    width: '60%',
    height: '100%',
    border: '1px black solid',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function ItemCard({ itemDetail }: { itemDetail: IItemDetail }) {
  return (
    <View style={[styles.card, { opacity: itemDetail.name !== 'dump' ? 1 : 0 }]}>
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
            {itemDetail.price && <Text style={[styles.detail, { fontWeight: 'black', fontSize: itemDetail.price?.length > 16 ? 8 : 11 }]}>{ToEngPackaging(itemDetail.price)}</Text>}
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Origin</Text>
              <Text>{`: `}</Text>
            </View>
            {itemDetail.origin && <View style={[styles.orgDetail, { position: 'relative' }]}>
              <Text style={styles.org}>{ToEngOrigin(itemDetail.origin)}</Text>
              <Image style={styles.flag} src={getFlags(itemDetail.origin)}></Image>
            </View>}
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

function MyPage({ itemDetails, index, date, totalPage }: { itemDetails: IItemDetail[], index: number, date: string, totalPage: number }) {
  function genPageContent(): ReactNode {
    if (index === totalPage - 1 && itemDetails.length < 5) {
      return (
        <>
          <View style={styles.pageContent}>
            {
              itemDetails.map((itemDetail: IItemDetail) => <ItemCard itemDetail={itemDetail} />)
            }
          </View>
          <View style={styles.deliveryChargeWrapper}>
            <View style={styles.dcHeader}>
              <Text style={[styles.blackBoldText]}>Delivery Charge</Text>
            </View>

            <View style={styles.dcRow}>
              <View style={styles.dcColTitle}>
                <Text style={[styles.blackBoldText]}>DESTINATION</Text>
              </View>
              <View style={styles.dcCol}>
                <Text style={[styles.blackBoldText]}>Invoice below 1.500.000đ</Text>
              </View>
              <View style={styles.dcCol}>
                <Text style={[styles.blackBoldText]}>Invoice from 1.500.000đ to {`<`} 3.000.000đ</Text>
              </View>
              <View style={styles.dcCol}>
                <Text style={[styles.blackBoldText]}>Invoice from 3.000.000đ to {`<`} 4.500.000đ</Text>
              </View>
              <View style={styles.dcCol}>
                <Text style={[styles.blackBoldText]}>Invoice obove 4.500.000đ</Text>
              </View>
            </View>

            <View style={styles.dcRow}>
              <View style={styles.dcColTitle}>
                <Text>District 2</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>30.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>free of charge</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>free of charge</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>free of charge</Text>
              </View>
            </View>

            <View style={styles.dcRow}>
              <View style={styles.dcColTitle}>
                <Text>District 1, 4, Binh Thanh</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>50.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>25.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>free of charge</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>free of charge</Text>
              </View>
            </View>

            <View style={styles.dcRow}>
              <View style={styles.dcColTitle}>
                <Text>District 3, 5, 10, Phu Nhuan, Thu Duc</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>60.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>30.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>free of charge</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>free of charge</Text>
              </View>
            </View>

            <View style={styles.dcRow}>
              <View style={styles.dcColTitle}>
                <Text>District 7, 8</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>70.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>35.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>free of charge</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>free of charge</Text>
              </View>
            </View>


            <View style={styles.dcRow}>
              <View style={styles.dcColTitle}>
                <Text>District Tan Binh, Go Vap</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>80.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>60.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>40.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>free of charge</Text>
              </View>
            </View>

            <View style={styles.dcRow}>
              <View style={styles.dcColTitle}>
                <Text>District 6, 11</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>90.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>70.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>50.000đ</Text>
              </View>

              <View style={styles.dcCol}>
                <Text>free of charge</Text>
              </View>
            </View>


            <View style={styles.dcRow}>
              <View style={styles.dcColTitle}>
                <Text>Tan Son Nhat Airport</Text>
              </View>

              <View style={styles.dcColWide}>
                <Text>100.000đ / trip</Text>
              </View>
            </View>

            <View style={styles.dcRow}>
              <View style={styles.dcColTitle}>
                <Text>District 9, 12, Tan Phu, Nha Be, Binh Chanh, Binh Tan, Can Gio, Hoc Mon, Cu Chi, Binh Duong, Bien Hoa, Long An</Text>
              </View>

              <View style={styles.dcColWideTall}>
                <Text>same as Grabike</Text>
              </View>
            </View>
          </View>

          {/* <Text style={styles.pageFooter}>
            {index + 1}/{totalPage}
          </Text> */}
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
        {/* <Text style={styles.pageFooter}>
          {index + 1}/{totalPage}
        </Text> */}
      </>
    )
  }

  return (
    <Page size="A4" orientation="portrait" style={styles.page}>
      <View style={styles.pageHeader}>
        <View style={styles.companyInfo}>
          <Image style={styles.logo} src={logo_img} />
          <View style={styles.company}>
            <Text style={{ fontWeight: 'bold' }}>NHA BAN HOA LTD VIETNAM</Text>
            <Text>Address : 45 – No.29 Street, An Khanh Ward, District 2, Ho Chi Minh City , Vietnam</Text>
            <Text>Hotline for ordering: (028) 7300 7299 - 0935 17 77 01 - 079 529 7799</Text>
            <Text>Hotline for handling: 078 229 7799</Text>
            <Text>Email : sales1@nhabanhoa.com</Text>
          </View>
          <Text style={styles.pageFooter}>
            {index + 1}/{totalPage}
          </Text>
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

function getPageContent(itemDetails: IItemDetail[], date: string) {
  console.log(itemDetails);
  let pageNum = Math.ceil(itemDetails.length / perPage);
  let pagesData = new Array<IItemDetail[]>(pageNum);
  for (let i = 0; i < pageNum; i++) {
    pagesData[i] = itemDetails.slice(i * perPage, (i + 1) * perPage)
    if (pagesData[i].length % 2 === 1) {
      pagesData[i].push(dumpItem);
    }
  }
  return pagesData.map((pageData, index) => <MyPage itemDetails={pageData} index={index} date={date} totalPage={pageNum} />)
}

function MyDocEng({ itemDetails, date }: { itemDetails: IItemDetail[], date: string }) {
  function genDeliveryCharge(): ReactNode {
    if (itemDetails.length % 8 < 5 && itemDetails.length % 8 !== 0) {
      return null
    }
    return (
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.deliveryChargeWrapper}>
          <View style={styles.dcHeader}>
            <Text style={[styles.blackBoldText]}>Delivery Charge</Text>
          </View>

          <View style={styles.dcRow}>
            <View style={styles.dcColTitle}>
              <Text style={[styles.blackBoldText]}>DESTINATION</Text>
            </View>
            <View style={styles.dcCol}>
              <Text style={[styles.blackBoldText]}>Invoice below 1.500.000đ</Text>
            </View>
            <View style={styles.dcCol}>
              <Text style={[styles.blackBoldText]}>Invoice from 1.500.000đ to {`<`} 3.000.000đ</Text>
            </View>
            <View style={styles.dcCol}>
              <Text style={[styles.blackBoldText]}>Invoice from 3.000.000đ to {`<`} 4.500.000đ</Text>
            </View>
            <View style={styles.dcCol}>
              <Text style={[styles.blackBoldText]}>Invoice obove 4.500.000đ</Text>
            </View>
          </View>

          <View style={styles.dcRow}>
            <View style={styles.dcColTitle}>
              <Text>District 2</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>30.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>free of charge</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>free of charge</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>free of charge</Text>
            </View>
          </View>

          <View style={styles.dcRow}>
            <View style={styles.dcColTitle}>
              <Text>District 1, 4, Binh Thanh</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>50.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>25.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>free of charge</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>free of charge</Text>
            </View>
          </View>

          <View style={styles.dcRow}>
            <View style={styles.dcColTitle}>
              <Text>District 3, 5, 10, Phu Nhuan, Thu Duc</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>60.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>30.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>free of charge</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>free of charge</Text>
            </View>
          </View>

          <View style={styles.dcRow}>
            <View style={styles.dcColTitle}>
              <Text>District 7, 8</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>70.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>35.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>free of charge</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>free of charge</Text>
            </View>
          </View>


          <View style={styles.dcRow}>
            <View style={styles.dcColTitle}>
              <Text>District Tan Binh, Go Vap</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>80.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>60.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>40.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>free of charge</Text>
            </View>
          </View>

          <View style={styles.dcRow}>
            <View style={styles.dcColTitle}>
              <Text>District 6, 11</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>90.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>70.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>50.000đ</Text>
            </View>

            <View style={styles.dcCol}>
              <Text>free of charge</Text>
            </View>
          </View>


          <View style={styles.dcRow}>
            <View style={styles.dcColTitle}>
              <Text>Tan Son Nhat Airport</Text>
            </View>

            <View style={styles.dcColWide}>
              <Text>100.000đ / trip</Text>
            </View>
          </View>

          <View style={styles.dcRow}>
            <View style={styles.dcColTitle}>
              <Text>District 9, 12, Tan Phu, Nha Be, Binh Chanh, Binh Tan, Can Gio, Hoc Mon, Cu Chi, Binh Duong, Bien Hoa, Long An</Text>
            </View>

            <View style={styles.dcColWideTall}>
              <Text>same as Grabike</Text>
            </View>
          </View>
        </View>
        <View style={styles.complaintRegulations}>
          <View style={styles.textComplaint}>
            <Text>REGULATIONS ON CLAIMS OF DAMAGED PRODUCTS</Text>
          </View>

          <View>
            <Text>------------------------------------------------------------------</Text>
          </View>

          <View style={styles.complaintContent}>
            <Text style={styles.textTitle}>1.APPEAL PERIOD :</Text>
            <Text>- For delivery customers in <Text style={styles.boldText}>HCMCity, Bien Hoa, Binh Duong, Can Giuoc - Long An</Text>: notice NBH immediately upon received package, check and no later than <Text style={styles.boldText}>6 hours</Text> from the time of delivery.</Text>
            <Text>- For delivery customers in <Text style={styles.boldText}>other cities</Text>: notice NBH immediately upon received package, check and no later than <Text style={styles.boldText}>24 hours</Text> from the time NBH send package image.</Text>
          </View>
        </View>
      </Page>
    )
  }

  function genComplaintRegulations(): ReactNode {
    if (itemDetails.length % 8 > 5) {
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.complaintRegulations}>
          <View style={styles.complaintContent}>
            <Text style={styles.textTitle}>2.IF THERE ARE ERRORS IN FLOWER COLOR, FLOWER TYPE, SIZE... PLEASE KEEP THE FLOWERS IN THEIR STATUS, DO NOT PLUCK THE LEAVES, DO NOT REMOVE THE FLOWERS' PETALS</Text>
            <View style={styles.images1}>
              <Image src={p1} style={styles.image1}></Image>
              <Image src={p2} style={styles.image1}></Image>
            </View>
          </View>

          <View style={styles.complaintContent}>
            <Text style={styles.textTitle}>3.PROVIDE PHOTOS/VIDEO CLIPS SHOWING DAMAGED PRODUCTS:</Text>
            <View style={styles.images2}>
              <View style={styles.imageRow1}>
                <View style={styles.imageCol}>
                  <Image src={p3} style={styles.image1}></Image>
                  <Text style={styles.smallText}>The overall image captures the flower branches in one photo, easy to see</Text>
                </View>
                <View style={styles.imageCol}>
                  <Image src={p4} style={styles.image1}></Image>
                  <Text style={styles.smallText}>Close-up images show detailed damage of the flowers</Text>
                </View>
              </View>

              <View style={styles.imageRow2}>
                <View style={styles.images1}>
                  <Image src={p5} style={styles.image1}></Image>
                  <Image src={p6} style={styles.image1}></Image>
                </View>
                <Text style={styles.smallText}>For roses, take pictures of defective flower stems along with the supplier's packaging and barcode stamp</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    }
    return (
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.complaintRegulations}>
          <View style={styles.textComplaint}>
            <Text>REGULATIONS ON CLAIMS OF DAMAGED PRODUCTS</Text>
          </View>

          <View>
            <Text>------------------------------------------------------------------</Text>
          </View>

          <View style={styles.complaintContent}>
            <Text style={styles.textTitle}>1.APPEAL PERIOD :</Text>
            <Text>- For delivery customers in <Text style={styles.boldText}>HCMCity, Bien Hoa, Binh Duong, Can Giuoc - Long An</Text>: notice NBH immediately upon received package, check and no later than <Text style={styles.boldText}>6 hours</Text> from the time of delivery.</Text>
            <Text>- For delivery customers in <Text style={styles.boldText}>other cities</Text>: notice NBH immediately upon received package, check and no later than <Text style={styles.boldText}>24 hours</Text> from the time of delivery.</Text>
          </View>

          <View style={styles.complaintContent}>
            <Text style={styles.textTitle}>2.IF THERE ARE ERRORS IN FLOWER COLOR, FLOWER TYPE, SIZE... PLEASE KEEP THE FLOWERS IN THEIR STATUS, DO NOT PLUCK THE LEAVES, DO NOT REMOVE THE FLOWERS' PETALS</Text>
            <View style={styles.images1}>
              <Image src={p1} style={styles.image1}></Image>
              <Image src={p2} style={styles.image1}></Image>
            </View>
          </View>

          <View style={styles.complaintContent}>
            <Text style={styles.textTitle}>3.PROVIDE PHOTOS/VIDEO CLIPS SHOWING DAMAGED PRODUCTS:</Text>
            <View style={styles.images2}>
              <View style={styles.imageRow1}>
                <View style={styles.imageCol}>
                  <Image src={p3} style={styles.image1}></Image>
                  <Text style={styles.smallText}>The overall image captures the flower branches in one photo, easy to see</Text>
                </View>
                <View style={styles.imageCol}>
                  <Image src={p4} style={styles.image1}></Image>
                  <Text style={styles.smallText}>Close-up images show detailed damage of the flowers</Text>
                </View>
              </View>

              <View style={styles.imageRow2}>
                <View style={styles.images1}>
                  <Image src={p5} style={styles.image1}></Image>
                  <Image src={p6} style={styles.image1}></Image>
                </View>
                <Text style={styles.smallText}>For roses, take pictures of defective flower stems along with the supplier's packaging and barcode stamp</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    )
  }

  return (
    <Document>
      {
        getPageContent(itemDetails, date)
      }
      {
        genDeliveryCharge()
      }
      {
        genComplaintRegulations()
      }
    </Document>
  )
}

export default MyDocEng;