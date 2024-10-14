import { Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
    family: "Roboto",
    fonts: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
        fontWeight: 'bold',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
        fontWeight: 'light',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-black-webfont.ttf',
        fontWeight: 'ultrabold'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.woff',
        fontWeight: 'medium'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
        fontWeight: 'normal'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.0.1/fonts/Roboto/roboto-bolditalic-webfont.ttf',
        fontStyle: 'italic',
        fontWeight: 'bold'
      }
    ]  
  });

export const styles = StyleSheet.create({
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
      width: '90%',
    },
    deliveryChargeWrapper: {
      width: '95%',
      height: '380px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    deliveryChargeTable: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px black solid'
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
    complaintRegulationsBottom: {
      width: '100%',
      height: '90%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    textComplaint: {
      width: '100%',
      fontWeight: 'ultrabold',
      marginTop: '4px',
      marginBottom: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    mediumText: {
      fontSize: '12px'
    },
    mediumTextBold: {
      fontSize: '12px',
      fontWeight: 'black'
    },
    mediumTextBoldUnderline: {
      fontSize: '12px',
      fontWeight: 'black',
      textDecoration: 'underline'
    },
    complaintContent: {
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: '14px'
    },
    textTitle: {
      textDecoration: 'underline',
      width: '100%',
      fontWeight: 'ultrabold',
      fontSize: '12px',
      marginBottom: '10px'
    },
    images1: {
      width: '90%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
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
      justifyContent: 'space-between',
      marginBottom: '12px'
    },
    imageRowGroup: {
      width: '80%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    imageRow2: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageCol: {
      width: '49%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image1: {
      width: '180px',
      height: '135px',
      objectFit: 'contain'
    },
    image2: {
      width: '102px',
      height: '135px',
      objectFit: 'contain'
    },
    boldText: {
      color: '#960018',
      fontWeight: 'ultrabold',
      fontSize: '12px'
    },
    blackBoldText: {
      color: 'black',
      fontWeight: 'ultrabold',
      fontSize: '11px'
    },
    smallText: {
      width: '80%',
      fontSize: '10px'
    },
    smallTextImage: {
      textAlign: 'center',
      width: '80%',
      fontSize: '10px',
      marginTop: '6px'
    },
    dcHeader: {
      width: '100%',
      height: '30px',
      // fontSize: '14px',
      textAlign: 'center',
      // fontWeight: 'ultrabold',
      border: '0.5px black solid',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dcRow: {
      width: '100%',
      minHeight: '25px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      fontSize: '11px'
    },
    dcRowTitle: {
      width: '100%',
      minHeight: '55px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      fontSize: '11px'
    },
    dcRowLast: {
      width: '100%',
      minHeight: '75px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      fontSize: '11px'
    },
    dcColTitle: {
      width: '32%',
      height: '100%',
      border: '0.5px black solid',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingLeft: '10px',
      paddingRight: '10px'
    },
    dcCol: {
      width: '17%',
      height: '100%',
      border: '0.5px black solid',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dcColHeader: {
      width: '17%',
      height: '100%',
      border: '0.5px black solid',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '5px',
      paddingRight: '5px',
      textAlign: 'center'
    },
    dcColWide: {
      width: '68%',
      height: '100%',
      border: '0.5px black solid',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dcColWideTall: {
      width: '68%',
      height: '100%',
      border: '0.5px black solid',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    note: {
      fontSize: '11px'
    },
    docNote: {
      color: '#960018',
      fontWeight: 'bold'
    },
    flowerCareWrapper: {
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    flowerCareTitle: {
      fontSize: '16px',
      fontWeight: 'black'
    },
    flowerCareNote: {
      fontSize: '14px',
      fontWeight: 'ultrabold',
      paddingTop: '20px',
      paddingBottom: '20px'
    },
    flowerCareContent: {
      display: 'flex',
      flexDirection: 'column'
    },
    flowerCareLine: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: '10px'
    },
    flowerCareBullet: {
      fontSize: '12px',
      width: '5%'
    },
    flowerCareText: {
      fontSize: '12px',
      width: '95%'
    },
    flowerCareWrapperBottomFullpage:{
      width: '100%',
      height: '90%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    firstPageNoti: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '80%',
      width: '100%'
    },
    docNoti: {
      color: '#960018',
      fontSize: '16px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      width: '90%',
      height: '20%'
    }
  });