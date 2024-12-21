import { Page, View, Text, Image, Font } from "@react-pdf/renderer";
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

export function ItemEngCard({ itemDetail }: { itemDetail: IItemDetail }) {
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

export function getEngTopHalfComplaintRegulations(): ReactNode {
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
        <Text style={styles.mediumText}>- For <Text style={styles.boldText}>HCM City, Bien Hoa, Binh Duong, Can Giuoc - Long An</Text>: please notify us immediately when you receive the flowers , and no later than <Text style={styles.boldText}>3 hours</Text> upon arrival.</Text>
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

export function getEngBottomHalfComplaintRegulations(): ReactNode {
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

export function getEngDeliveryCharge(): ReactNode {
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

export function getEngTopHalfFlowerCare(): ReactNode {
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

export function getEngBottomHalfFlowerCare(): ReactNode {
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

export function getEngPageHeader(index:number, totalPage:number, docNote:string, date:string): ReactNode {
  return (
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
  )
}
