import { Document, Page, StyleSheet, View, Text, Image, Font } from "@react-pdf/renderer";
import { IItemDetail } from "../../interface/item/item";
import logo_img from "../../assets/logo.png";
import { ReactNode } from "react";
import { util } from "prettier";
import { getFlags } from "../../utils/GetFlag";
import watermark from "../../assets/logo_grayscale.png";
import { relative } from "path";
// import { countries, flags } from "../../const/flag";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import { styles } from "./style";
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";
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
      <Text style={styles.name}>{itemDetail.name?.toLocaleUpperCase("vn")}</Text>
      <Image style={styles.watermark} src={watermark}></Image>
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
            {itemDetail.price && <Text style={[styles.detail, { fontWeight: 'black', fontSize: itemDetail.price?.length > 16 ? 8 : 11 }]}>{itemDetail.price}</Text>}
          </View>
          <View style={styles.infoDetail}>
            <View style={styles.title}>
              <Text>Xuất xứ</Text>
              <Text>{`: `}</Text>
            </View>
            {itemDetail.origin && <View style={[styles.orgDetail, { position: 'relative' }]}>
              <Text style={styles.org}>{itemDetail.origin}</Text>
              <Image style={styles.flag} src={getFlags(itemDetail.origin)}></Image>
            </View>}
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
            {itemDetail.note && <Text style={[
              styles.detail,
              {
                color: itemDetail.highlight_note === 1 ? '#98300e' : 'black',
                backgroundColor: itemDetail.highlight_note === 1 ? '#FEFE00' : '',
                fontWeight: itemDetail.highlight_note === 1 ? 'bold' : 'normal'
              }]}>{itemDetail.note}</Text>}
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
        <Text style={styles.mediumText}>QUY ĐỊNH VỀ KHIẾU NẠI HOA HƯ HỎNG</Text>
      </View>

      <View>
        <Text>------------------------------------------------------------------</Text>
      </View>

      <View style={styles.complaintContent}>
        <Text style={styles.textTitle}>1.THỜI GIAN KHIẾU NẠI :</Text>
        <Text style={styles.mediumText}>- Đối với khách giao hàng ở <Text style={styles.boldText}>TP.HCM, Biên Hoà, Bình Dương, Cần Giuộc - Long An</Text>: báo cho NBH ngay lập tức khi nhận hàng, kiểm tra và muộn nhất sau <Text style={styles.boldText}>6 tiếng</Text> kể từ lúc giao hàng.</Text>
        <Text style={styles.mediumText}>- Đối với khách <Text style={styles.boldText}>tỉnh/thành khác</Text>: báo cho NBH ngay lập tức khi nhận hàng, kiểm tra và muộn nhất sau <Text style={styles.boldText}>24 tiếng</Text> kể từ lúc NBH gửi hình kiện hàng gửi đi.</Text>
      </View>

      <View style={styles.complaintContent}>
        <Text style={styles.textTitle}>2.NẾU CÓ SAI XÓT VỀ SAI MÀU HOA, LOẠI HOA, KÍCH THƯỚC … VUI LÒNG GIỮ NGUYÊN HIỆN TRẠNG HOA, KHÔNG TUỐT LÁ, KHÔNG LẶT CÁNH HOA</Text>
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
      <Text style={styles.textTitle}>3.CUNG CẤP HÌNH ẢNH / VIDEO CLIP THỂ HIỆN HOA HƯ HỎNG:</Text>
      <View style={styles.images2}>
        <View style={styles.imageRow1}>
          <View style={styles.imageCol}>
            <Image src={p3} style={styles.image1}></Image>
            <Text style={styles.smallTextImage}>Hình ảnh tổng thể chụp các cành hoa chung 1 tấm hình, dễ thấy</Text>
          </View>
          <View style={styles.imageCol}>
            <Image src={p4} style={styles.image1}></Image>
            <Text style={styles.smallTextImage}>Hình ảnh cận cảnh thấy được tình trạng hoa hư hỏng chi tiết</Text>
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
          <Text style={styles.smallTextImage}>Đối với hoa hồng , chụp các cành hoa lỗi chung với bao bì nhà cung cấp và tem barcode</Text>
        </View>
      </View>
    </View>
  )
}

function getTopHalfFlowerCare(): ReactNode {
  return (
    <View style={styles.flowerCareWrapper}>
      <View style={styles.flowerCareTitle}>
        <Text>THAM KHẢO HƯỚNG DẪN BẢO QUẢN HOA</Text>
      </View>
      <View style={styles.flowerCareNote}>
        <Text>Dành cho Shop Hoa</Text>
      </View>
      <View style={styles.flowerCareContent}>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>1.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Sau khi nhận hoa từ Nhà Bán Hoa , ngay lập tức mở thùng, tháo bao bì để làm thoáng hoa, tránh việc để hoa quá lâu trong thùng, trong bọc hoặc để quên ở không gian nắng , nóng , hầm sẽ làm ảnh hưởng nghiêm trọng đến chất lượng hoa.
            </Text>
          </View>
        </View>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>2.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Chọn bình / xô có chiều cao tối thiểu bằng một nửa cành hoa để giữ được cành hoa đứng tốt hơn.
            </Text>
          </View>
        </View>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>3.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Kiểm tra bình đựng hoa hoặc xô phải sạch thật kỹ vì bất kì vi khuẩn nào còn sót lại sẽ làm cho hoa héo nhanh hơn.
            </Text>
          </View>
        </View>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>4.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Đổ nước vào bình , trung bình mực nước cao khoảng 10-15cm cho phần lớn các loại hoa. Tuy nhiên, tuỳ vào loại hoa có thể gia giảm lượng nước ít hơn hoặc nhiều hơn cho phù hợp.
            </Text>
          </View>
        </View>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>5.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Lựa chọn thuốc dưỡng hoa phù hợp với từng loại hoa để được hiệu quả cao nhất.
            </Text>
          </View>
        </View>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>6.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Loại bỏ bớt các lá chân , không để bất kì lá nào nằm dưới mực nước vì lá khi phân huỷ sẽ tạo ra vi khuẩn trong nước, làm giảm độ bền hoa.
            </Text>
          </View>
        </View>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>7.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Cắt mới cành hoa , cách gốc khoảng 2-3cm. Dùng kéo sắc cắt cành hoa 45 độ với các loại hoa thân gỗ hoặc dùng dao cắt ngang những cành hoa thân mềm như tulip , dạ lan hương, rum ( loa kèn ), huệ tứ phương ..
              Lưu ý : Kéo cùn hoặc dụng cụ cùn có thể làm nát thân cây và khiến hoa không thể hấp thụ nước đúng cách.
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

function getBottomHalfFlowerCare(): ReactNode {
  return (
    <View style={styles.flowerCareWrapper}>
      <View style={styles.flowerCareContent}>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>8.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Nhiệt độ bảo quản hoa và độ ẩm cực kì quan trọng để giữ được hoa có chất lượng tốt nhất
              Các loại hoa được nhập khẩu từ các nước ôn đới như Hà Lan , Nhật Bản, Ecuador, New Zealand … cần bảo quản ở nhiệt độ đúng để được chất lượng tốt nhất.
              Đối với các shop hoa kinh doanh hoa nhập khẩu xứ ôn đới, NBH  khuyến khích khách hàng bảo quản hoa ở tủ mát chuyên dụng ở nhiệt độ từ 10-12 độ C hoặc kho lạnh chuyên dụng ở nhiệt độ 2-8 độ C. Đây là nhiệt độ lý tưởng để bảo quản các loại hoa nhập khẩu từ các nước ôn đới như tulip, mẫu đơn , linh lan, rum , dạ lan hương , đậu thơm, mao lương …
              Độ ẩm thích hợp là …
              Tip: Anh/Chị có thể mua máy đo nhiệt độ và độ ẩm đặt vào nơi bảo quản hoa để có thể theo dõi tình trạng nhiệt độ bảo quản hoa được chính xác nhất.
            </Text>
          </View>
        </View>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>9.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Luôn kiểm tra, đảm bảo hoa có đủ lượng nước , thay nước mỗi ngày hoặc thay nước nếu bạn nhận thấy nước chuyển sang màu đục vì vi khuẩn hoặc rác nhiều trong nước sẽ làm tắc nghẽn thân cây, khiến cành hoa không thể hút nước.
            </Text>
          </View>
        </View>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>10.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Để hoa tránh xa nguồn nhiệt và luồng gió, máy quạt , máy lạnh, ánh nắng mặt trời trực tiếp.
            </Text>
          </View>
        </View>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>11.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Để hoa tránh xa các loại trái cây, đặc biệt nếu trong đó có các loại thải ra khí ethylene như táo, chuối, dưa , lê , đào …
            </Text>
          </View>
        </View>
        <View style={styles.flowerCareLine}>
          <View style={styles.flowerCareBullet}>
            <Text>12.</Text>
          </View>
          <View style={styles.flowerCareText}>
            <Text>
              Sau khi hoa héo tàn , phải rửa bình hoa sạch sẽ , để loại bỏ toàn bộ vi khuẩn. Bình hoa cần sạch hoàn toàn để chuẩn bị cho lần cắm hoa tới .
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.flowerCareNote}>
        <Text>Tổng hợp và biên soạn bởi Nhà Bán Hoa</Text>
      </View>
    </View>
  )
}

function genBottomHalfFlowerCare(): ReactNode {
  return (
    <Page size="A4" orientation="portrait" style={styles.page}>
      <View style={styles.flowerCareWrapperBottomFullpage}>
        {getBottomHalfFlowerCare()}
      </View>
    </Page>
  )
}

function genBottomHalfComplaintRegulations(): ReactNode {
  return (
    <Page size="A4" orientation="portrait" style={styles.page}>
      <View style={styles.complaintRegulationsBottom}>
        {getBottomHalfComplaintRegulations()}
      </View>
      {getTopHalfFlowerCare()}
    </Page>
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
            <Text style={{ fontWeight: 'bold' }}>CÔNG TY TNHH NHÀ BÁN HOA</Text>
            <Text>Kho hàng: 45 đường số 29, P. An Khánh, Quận 2, TP Thủ Đức, TP Hồ Chí Minh</Text>
            <Text>Hotline đặt hàng: (028)7300 7299 - 0935 177701 (Zalo/Viber)</Text>
            <Text>Hotline giao nhận: 078 229 7799</Text>
            <Text>Email: sales1@nhabanhoa.com</Text>
          </View>
          <View>
            <Text style={styles.pageFooter}>
              {index + 1}/{totalPage}
            </Text>
          </View>
        </View>
        <Text style={styles.date}>{`BẢNG GIÁ HOA SỈ NGÀY ${date}`}</Text>
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

function getDeliveryCharge(): ReactNode {
  return (
    <View style={styles.deliveryChargeWrapper}>
      <View style={styles.dcHeader}>
        <Text style={[styles.blackBoldText]}>BIỂU PHÍ GIAO HÀNG</Text>
      </View>

      <View style={styles.dcRowTitle}>
        <View style={styles.dcColTitle}>
          <Text style={[styles.blackBoldText]}>ĐIỂM ĐẾN</Text>
        </View>
        <View style={styles.dcColHeader}>
          <Text style={[styles.blackBoldText]}>Hóa đơn dưới 1.5 triệu</Text>
        </View>
        <View style={styles.dcColHeader}>
          <Text style={[styles.blackBoldText]}>Hóa đơn từ 1.5 triệu đến {`<`} 3 triệu</Text>
        </View>
        <View style={styles.dcColHeader}>
          <Text style={[styles.blackBoldText]}>Hóa đơn từ 3 triệu đến {`<`} 4.5 triệu</Text>
        </View>
        <View style={styles.dcColHeader}>
          <Text style={[styles.blackBoldText]}>Hóa đơn trên 4.5 triệu</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>Quận 2</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>30.000đ</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>miễn phí</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>miễn phí</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>miễn phí</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>Quận 1, 4, Bình Thạnh</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>50.000đ</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>25.000đ</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>miễn phí</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>miễn phí</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>Quận 3, 5, 10, Phú Nhuận, Thủ Đức</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>60.000đ</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>30.000đ</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>miễn phí</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>miễn phí</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>Quận 7, 8</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>70.000đ</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>35.000đ</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>miễn phí</Text>
        </View>

        <View style={styles.dcCol}>
          <Text>miễn phí</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>Quận Tân Bình, Gò Vấp</Text>
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
          <Text>miễn phí</Text>
        </View>
      </View>

      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>Quận 6, 11</Text>
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
          <Text>miễn phí</Text>
        </View>
      </View>


      <View style={styles.dcRow}>
        <View style={styles.dcColTitle}>
          <Text>Sân Bay Tân Sơn Nhất</Text>
        </View>

        <View style={styles.dcColWide}>
          <Text>100.000đ / lượt</Text>
        </View>
      </View>

      <View style={styles.dcRowLast}>
        <View style={styles.dcColTitle}>
          <Text>Quận 9, 12, Tân Phú, Nhà Bè, Bình Chánh, Bình Tân, Cần Giờ, Hóc Môn, Củ Chi, Bình Dương, Biên Hòa, Long An</Text>
        </View>

        <View style={styles.dcColWideTall}>
          <Text>theo giá Grab</Text>
        </View>
      </View>
      <View>
        <Text style={styles.note}>**Ghi chú: Bảng giá trên chưa bao gồm VAT, quý khách có nhu cầu xuất hóa đơn, vui lòng liên hệ công ty để được tiến hành xuất hóa đơn đỏ.</Text>
      </View>
    </View>
  )
}



function MyDocP({ itemDetails, date, needDeliveryCharge, docNote }: { itemDetails: IItemDetail[], date: string, needDeliveryCharge: boolean, docNote: string }) {

  console.log("needDeliveryCharge", needDeliveryCharge);

  function genFullComplaintRegulations(): ReactNode {
    return (
      <>
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
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.complaintRegulations}>
          {
            getTopHalfFlowerCare()
          }
          {
            getBottomHalfFlowerCare()
          }
        </View>
      </Page>
      
      </>
      
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
        {
          genBottomHalfFlowerCare()
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
    return (
    <>
      {
        genBottomHalfComplaintRegulations()
      }
      {
        genBottomHalfFlowerCare()
      }
    </>
    )
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

export default MyDocP;