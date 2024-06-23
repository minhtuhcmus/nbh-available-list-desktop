import {Document, Page, StyleSheet, View, Text, Image, Font } from "@react-pdf/renderer";
import {IItemDetail} from "../../interface/item/item";
import logo_img from "../../assets/logo.png";

// Font.register({
//   family: "Roboto",
//   fonts: [
//     {
//       src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
//       fontWeight: 'bold'
//     },
//     {
//       src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
//       fontWeight: 'light'
//     },
//     {
//       src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-black-webfont.ttf',
//       fontWeight: 'black'
//     },
//     {
//       src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.woff',
//       fontWeight: 'medium'
//     },
//     {
//       src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
//       fontWeight: 'normal'
//     }
//   ]  
// });

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
    fontSize: 8
  },
  card: {
    width: '9.5cm',
    height: '6cm',
    flexDirection: 'column',
    border: '0.5 solid black'
  },
  name:{
    fontSize: '12',
    padding: '6px',
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
    fontSize: '11',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  detail: {
    width: '60%',
    textAlign: 'left',
    fontSize: '11'
  },
  logo: {
    width: '2.5cm',
    height: '2.5cm',
    objectFit: 'contain',
    marginLeft: '2cm'
  },
  date: {
    fontSize: '14',
    fontWeight: 'bold',
    marginLeft: '2cm'
  },
  company: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: '2cm',
    textAlign: 'right'
  }
});

function ItemCard({itemDetail}: {itemDetail:IItemDetail}) {
  return (
    <View style={[styles.card, {opacity: itemDetail.name !== 'dump' ? 1 : 0}]}>
      <Text style={styles.name}>{itemDetail.name.toLocaleUpperCase("vn")}</Text>
      <View style={styles.imageAndInfo}>
        <View style={styles.image}>
          {itemDetail.images && <Image style={styles.img} src={itemDetail.images}></Image>}
        </View>
        <View style={styles.info}>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Giá</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={[styles.detail, {fontWeight: 'black', fontSize: itemDetail.price.length > 16 ? 8 : 11}]}>{itemDetail.price}</Text>
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Xuất xứ</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{itemDetail.origin}</Text>
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Chiều dài</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{itemDetail.length}</Text>
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Quy cách</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{itemDetail.packaging}</Text>
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>SL đặt</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{itemDetail.orderBy}</Text>
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Ghi chú</Text>
              <Text>{`: `}</Text>
            </View>
            <Text style={styles.detail}>{itemDetail.note}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function MyPage({itemDetails, index, date, totalPage}: {itemDetails: IItemDetail[], index: number, date: string, totalPage: number}) {
  return (
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.pageHeader}>
        <Image style={styles.logo} src={logo_img}/>
        <Text style={styles.date}>{`BẢNG GIÁ HOA SỈ NGÀY ${date}`}</Text>
        <View style={styles.company}>
          <Text style={{fontWeight: 'bold'}}>CÔNG TY TNHH NHÀ BÁN HOA</Text>
          <Text>Kho hàng: 45 đường số 29, P. An Khánh, Quận 2, TP Thủ Đức</Text>
          <Text>Hotline đặt hàng: (028)7300 7299 - 0935 177701 (Zalo/Viber)</Text>
          <Text>Hotline giao nhận: 078 229 7799</Text>
          <Text>Email: sales1@nhabanhoa.com</Text>
        </View>
      </View>
      <View style={styles.pageContent}>
        {
          itemDetails.map((itemDetail: IItemDetail) => <ItemCard itemDetail={itemDetail}/>)
        }
      </View>
      <Text style={styles.pageFooter}>
        {index+1}/{totalPage}
      </Text>
    </Page>
  );
}

const perPage = 9

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
  price: "",
  engName: "",
  engNote: ""
}

function getPageContent(itemDetails: IItemDetail[], date: string) {
  let pageNum = Math.ceil(itemDetails.length/perPage);
  let pagesData = new Array<IItemDetail[]>(pageNum);
  for (let i = 0; i < pageNum; i++) {
    pagesData[i] = itemDetails.slice(i*perPage, (i+1)*perPage)
    if (pagesData[i].length < perPage) {
      let needed = perPage - pagesData[i].length;
      for (let j = 0; j < needed; j++){
        pagesData[i].push(dumpItem)
      }
    }
    // console.log(i, pagesData)
  }
  return pagesData.map((pageData, index) => <MyPage itemDetails={pageData} index={index} date={date} totalPage={pageNum}/>)
}

function MyDoc ({itemDetails, date}: {itemDetails: IItemDetail[], date: string}) {
  return (
    <Document>
      {
        getPageContent(itemDetails, date)
      }
    </Document>
  )
}

export default MyDoc;