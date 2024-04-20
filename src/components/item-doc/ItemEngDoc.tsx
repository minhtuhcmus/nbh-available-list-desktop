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
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";

import {styles} from "./style";
import { doc } from "prettier";

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

function getTopHalfComplaintRegulations(): ReactNode {
  return (
    <View style={styles.complaintRegulations}>
      <View style={styles.textComplaint}>
        <Text style={styles.mediumText}>CLAIMS PROCEDURE</Text>
      </View>

      <View>
        <Text>------------------------------------------------------------------</Text>
      </View>

      <View style={styles.complaintContent}>
        <Text style={styles.textTitle}>1.CLAIMING PERIOD :</Text>
        <Text style={styles.mediumText}>- For <Text style={styles.boldText}>HCM City, Bien Hoa, Binh Duong, Can Giuoc - Long An</Text>: please notify us immediately when you receive the flowers , and no later than <Text style={styles.boldText}>6 hours</Text> upon arrival.</Text>
        <Text style={styles.mediumText}>- For <Text style={styles.boldText}>others province/country</Text>: please notify us immediately when you receive the flowers, and no later than <Text style={styles.boldText}>24 hours</Text> from the time NBH sent the picture of the box.</Text>
      </View>

      <View style={styles.complaintContent}>
        <Text style={styles.textTitle}>2. IF NBH SEND WRONG COLOR, VARIETY OR SIZE, PLEASE KEEP THE ORIGINAL CONDITION. DO NOT REMOVE ANY LEAF OR OUTSIDE PETAL.</Text>
        <View style={styles.images1}>
          <Image src={p1} style={styles.image1}></Image>
          <Image src={p2} style={styles.image2}></Image>
          <Image src={p8} style={styles.image1}></Image>
        </View>
      </View>
    </View>
  )
}

function getBottomHalfComplaintRegulations(): ReactNode {
  return (
    <View style={styles.complaintContent}>
      <Text style={styles.textTitle}>3.PICTURES ARE IMPORTANT TO SUPPORT QUALITY CLAIM TO OUR SUPPLIERS. THE PICTURES MUST CLEARLY SHOW THE PROBLEM BEING CLAIMED:</Text>
      <View style={styles.images2}>
        <View style={styles.imageRow1}>
          <View style={styles.imageCol}>
            <Image src={p3} style={styles.image1}></Image>
            <Text style={styles.smallTextImage}>Picture of the group of flowers being claimed</Text>
          </View>
          <View style={styles.imageCol}>
            <Image src={p4} style={styles.image1}></Image>
            <Text style={styles.smallTextImage}>Picture clearly show the problem being claimed</Text>
          </View>
        </View>

        <View style={styles.imageRow2}>
          <View style={styles.imageRowGroup}>
            <View style={styles.imageCol}>
              <Image src={p5} style={styles.image2}></Image>
            </View>
            <View style={styles.imageCol}>
              <Image src={p6} style={styles.image2}></Image>
            </View>
            <View style={styles.imageCol}>
              <Image src={p7} style={styles.image2}></Image>
            </View>
          </View>
          <Text style={styles.smallTextImage}>For Ecuadorian Roses , please take picture of the stem being claimed include the
bar code sticked inside the carton board around the bunch.</Text>
        </View>
      </View>
    </View>
  )
}

function genBottomHalfComplaintRegulations(): ReactNode {
  return (
    <Page size="A4" orientation="portrait" style={styles.page}>
      <View style={styles.complaintRegulationsBottom}>
        {getBottomHalfComplaintRegulations()}
      </View>
    </Page>
  )
}

function getDeliveryCharge(): ReactNode {
  return (
    <View style={styles.deliveryChargeWrapper}>
      <View style={styles.dcHeader}>
        <Text style={[styles.blackBoldText]}>SHIPPING FEE</Text>
      </View>

      <View style={styles.dcRowTitle}>
        <View style={styles.dcColTitle}>
          <Text style={[styles.blackBoldText]}>DESTINATION</Text>
        </View>
        <View style={styles.dcColHeader}>
          <Text style={[styles.blackBoldText]}>Invoice under 1.5 mil dong</Text>
        </View>
        <View style={styles.dcColHeader}>
          <Text style={[styles.blackBoldText]}>Invoice from 1.5 mil dong to {`<`} 3 mil dong</Text>
        </View>
        <View style={styles.dcColHeader}>
          <Text style={[styles.blackBoldText]}>Invoice from 3 mil dong to {`<`} 4.5 mil dong</Text>
        </View>
        <View style={styles.dcColHeader}>
          <Text style={[styles.blackBoldText]}>Invoice above 4.5 mil dong</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>District 2</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>30.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>free</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>free</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>free</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>District 1, 4, Binh Thanh</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>50.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>25.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>free</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>free</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>District 3, 5, 10, Phu Nhuan, Thu Duc</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>60.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>30.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>free</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>free</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>District 7, 8</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>70.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>35.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>free</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>free</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>District Tan Binh, Go Vap</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>80.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>60.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>40.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>free</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>District 6, 11</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>90.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>70.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>50.000d</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>free</Text>
        </View>
      </View>


      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>Tan Son Nhat Airport</Text>
        </View>

        <View style={styles.dcColWide}>
          <Text>100.000d / order</Text>
        </View>
      </View>

      <View style={styles.dcRowLast}>
        <View style={styles.dcColTitle}>
          <Text>District 9, 12, Tan Phu, Nha Be, Binh Chanh, Binh Tan, Can Gio, Hoc Mon, Cu Chi, Binh Duong, Bien Hoa, Long An</Text>
        </View>

        <View style={styles.dcColWideTall}>
          <Text>According to Grab / Ahamove ...</Text>
        </View>
      </View>
      <View>
        <Text style={styles.note}>**Note: Any request for VAT invoice, please contact the sales department</Text>
      </View>
    </View>
  )
}


function MyPage({ itemDetails, index, date, totalPage, needDeliveryCharge, docNote }: { itemDetails: IItemDetail[], index: number, date: string, totalPage: number, needDeliveryCharge: boolean, docNote: string }) {
  function genPageContent(): ReactNode {
    if (index === totalPage - 1 && itemDetails.length < 5) {
      return (
        <>
          <View style={styles.pageContent}>
            {
              itemDetails.map((itemDetail: IItemDetail) => <ItemCard itemDetail={itemDetail} />)
            }
          </View>
          {
            needDeliveryCharge ? getDeliveryCharge() : getTopHalfComplaintRegulations()
          }
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
        {docNote && <Text style={styles.docNote}>{docNote}</Text>}
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

function getPageContent(itemDetails: IItemDetail[], date: string, needDeliveryCharge: boolean, docNote: string) {
  console.log(itemDetails);
  let pageNum = Math.ceil(itemDetails.length / perPage);
  let pagesData = new Array<IItemDetail[]>(pageNum);
  for (let i = 0; i < pageNum; i++) {
    pagesData[i] = itemDetails.slice(i * perPage, (i + 1) * perPage)
    if (pagesData[i].length % 2 === 1) {
      pagesData[i].push(dumpItem);
    }
  }
  return pagesData.map((pageData, index) => <MyPage itemDetails={pageData} index={index} date={date} totalPage={pageNum} needDeliveryCharge={needDeliveryCharge} docNote={docNote}/>)
}

function genDeliveryChargeWithTopHalfComplaintRegulations(): ReactNode {
  return (
    <Page size="A4" orientation="portrait" style={styles.page}>
      {
        getDeliveryCharge()
      }
      {
        getTopHalfComplaintRegulations()
      }
    </Page>
  )
}

function MyDocEng({ itemDetails, date, needDeliveryCharge, docNote }: { itemDetails: IItemDetail[], date: string, needDeliveryCharge: boolean, docNote: string }) {
  function genFullComplaintRegulations(): ReactNode {
    return (
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.complaintRegulations}>
          {
            getTopHalfComplaintRegulations()
          }
          {
            getBottomHalfComplaintRegulations()
          }
        </View>
      </Page>
    )
  }

  function genCaseOne(): ReactNode {
    return (
      <>
        {
          genDeliveryChargeWithTopHalfComplaintRegulations()
        }
        {
          genBottomHalfComplaintRegulations()
        }
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
    return genBottomHalfComplaintRegulations()
  }

  function genInfo(): ReactNode {
    if (needDeliveryCharge) {
      if (itemDetails.length % 8 > 4 || itemDetails.length % 8 == 0) {
        return genCaseOne()
      } else {
        return getCaseTwo()
      }
    } else {
      if (itemDetails.length % 8 > 4 || itemDetails.length % 8 == 0) {
        return genCaseThree()
      } else {
        return getCaseFour()
      }
    }
  }

  return (
    <Document>
      {
        getPageContent(itemDetails, date, needDeliveryCharge, docNote)
      }
      {
        genInfo()
      }
    </Document>
  )
}

export default MyDocEng;