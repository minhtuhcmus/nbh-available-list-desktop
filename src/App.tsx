import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import ItemCard from "./components/item-card/ItemCard";
import {IItemDetail} from "./interface/item/item";
// import { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx";
import logo_img from "../src/assets/logo.png";
import { PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
// import MyDoc from './components/item-doc/ItemDoc';

import MyDocP from './components/item-doc/ItemDocP';
// import MyDoc from './components/item-doc/ItemDoc';
import MyDocEng from './components/item-doc/ItemEngDoc';
import * as lodash from "lodash";

function Page({itemDetails, index, date}: {itemDetails:IItemDetail[], index: number, date: string}) {
  return (
    <div className="page">
      <div className="page-header">
        <img className="logo" src={logo_img} alt="logo"/>
        <div className="date">BẢNG GIÁ HOA SỈ {date}</div>
      </div>
      <div className="page-content">
        {
          itemDetails.map(info => <ItemCard itemDetail={info}/>)
        }
      </div>
      <div className="page-footer">{index+1}</div>
    </div>
  )
}

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

function App() {

  const componentRef = useRef(null);
  const [itemDetails, setItemDetails] = useState<IItemDetail[]>([]);
  const [date, setDate] = useState('');
  const [imageFolder, setImageFolder] = useState<null|string>(null);

  const [prepareVie, setPrepareVie] = useState(false);
  const [prepareEng, setPrepareEng] = useState(false);

  const [imageMap, setImageMap] = useState<Map<string, string>>();
  const [imageDeliveryChargeVie, setImageDeliveryChargeVie] = useState('');
  const [imageDeliveryChargeEng, setImageDeliveryChargeEng] = useState('');
  const [canGenDoc, setCanGenDoc] = useState(false);
  const [isGenActive, setIsGenActive] = useState(false);
  useEffect(()=>{
    if (typeof(imageMap) !== 'undefined' && 
    imageMap.size > 0 && 
    date !== '' && 
    itemDetails.length > 0) {
      setIsGenActive(true);
    }
  }, [imageMap])

  // useEffect(() => {
  //   try {
  //     const imgDelCharVie = require('./assets/delivery-charge/vie.png');
  //     const imgDelCharEng = require('./assets/delivery-charge/eng.png');
  //     setImageDeliveryChargeVie(imgDelCharVie);
  //     setImageDeliveryChargeEng(imgDelCharEng)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [])

  // const [instanceVie, updateInstanceVie] = usePDF({ document: <MyDoc itemDetails={itemDetails} date={date}/>});
  // const [instanceEng, updateInstanceEng] = usePDF({ document: <MyDocEng itemDetails={itemDetails} date={date}/>});


  // const handleAfterPrint = React.useCallback(() => {
  //   console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  // }, []);
  //
  // const handleBeforePrint = React.useCallback(() => {
  //   console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  // }, []);

  // const handleOnBeforeGetContent = React.useCallback(() => {
  //   console.log("`onBeforeGetContent` called"); // tslint:disable-line no-console
  //   setLoading(true);
  //   setText("Loading new text...");
  //
  //   return new Promise<void>((resolve) => {
  //     // @ts-ignore
  //     onBeforeGetContentResolve.current = resolve;
  //
  //     setTimeout(() => {
  //       setLoading(false);
  //       setText("New, Updated Text!");
  //       resolve();
  //     }, 2000);
  //   });
  // }, [setLoading, setText]);

  // const reactToPrintContent = React.useCallback(() => {
  //   return componentRef.current;
  // }, []);

  // const handlePrint = useReactToPrint({
  //   content: reactToPrintContent,
  //   documentTitle: "AwesomeFileName",
  //   onBeforePrint: handleBeforePrint,
  //   onAfterPrint: handleAfterPrint,
  //   removeAfterPrint: true
  // });

  const perPage = 9

  const getPageContent = () => {
    let pageNum = Math.ceil(itemDetails.length/perPage);
    let pagesData = new Array(pageNum);
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
    return pagesData.map((pageData, index) => <Page itemDetails={pageData} index={index} date={date}/>)
  }

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
        const json:IItemDetail[] = XLSX.utils.sheet_to_json(worksheet);
        console.log(json);
        setItemDetails(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  function updateItemDetails() {
    if (imageMap && imageMap.size > 0) {
      let temp : IItemDetail[] = lodash.cloneDeep(itemDetails);
      temp.forEach((item: IItemDetail) => {
        if (typeof(item.images) != 'undefined')
        {
          item.images = imageMap.get(item.images);
        }
      })
      setItemDetails(temp);
    }
  }

  useEffect(() => {
    updateItemDetails()
  }, [imageMap])

  // function EngVer(doc: React.ReactElement<ReactPDF.DocumentProps, string | React.JSXElementConstructor<any>>) {
  //   <PDFDownloadLink document={doc} fileName="EngVer.pdf">
  //     {({ blob, url, loading, error }) =>
  //       loading ? 'Loading document...' : 'Download EngVer now!'
  //     }
  //   </PDFDownloadLink>
  // }
  
  // function VieVer(doc: React.ReactElement<ReactPDF.DocumentProps, string | React.JSXElementConstructor<any>>) {
  //   <PDFDownloadLink document={doc} fileName="somename.pdf">
  //     {({ blob, url, loading, error }) =>
  //       loading ? 'Loading document...' : 'Download VieVer now!'
  //     }
  //   </PDFDownloadLink>
  // }

  return (
    <div className="App">
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
          }}/>
        </div>
        <button style={{marginTop: '12px'}} disabled={!isGenActive} onClick={() => {

          setCanGenDoc(true)}}>Gen Doc</button>
      </div>
      {/* {!prepareEng ? <button onClick={() => setPrepareEng(true)}>Soạn EngVer</button> : <PDFDownloadLink document={<MyDocEng itemDetails={itemDetails} date={date}/>} fileName="EngVer.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download EngVer now!'
      }
    </PDFDownloadLink>}
      {!prepareVie ? <button onClick={() => setPrepareVie(true)}>Soạn VieVer</button> : <PDFDownloadLink document={<MyDocP itemDetails={itemDetails} date={date}/>} fileName="VieVer.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download VieVer now!'
      }
    </PDFDownloadLink>} */}

    <div className='pdf-content'>
      <div className='doc-ver'>
        {/* <PDFDownloadLink document={<MyDocEng itemDetails={itemDetails} date={date}/>} fileName="EngVer.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download EngVer now!'
          }
        </PDFDownloadLink> */}
        <div className='ver-name'>English Version</div>
          <div className='delivery-charge'>
            Hình ảnh phí vận chuyển(Tiếng Anh)
            <input type='file' onChange={e => {
              let files = e.target.files;
              if (files != null) {
                setImageDeliveryChargeEng(URL.createObjectURL(files[0]))
              }
            }}/>
          </div>
          {canGenDoc && <PDFViewer width={'95%'} height={800}><MyDocEng itemDetails={itemDetails} date={date} imageDeliveryCharge={imageDeliveryChargeEng}/></PDFViewer>}
      </div>
      

      <div className='doc-ver'>
        {/* <PDFDownloadLink document={<MyDocP itemDetails={itemDetails} date={date}/>} fileName="VieVer.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download VieVer now!'
          }
        </PDFDownloadLink> */}
        <div className='ver-name'>Bản Tiếng Việt</div>
        <div className='delivery-charge'>
          Hình ảnh phí vận chuyển(Tiếng Việt)
          <input type='file' onChange={e => {
            let files = e.target.files;
            if (files != null) {
              setImageDeliveryChargeVie(URL.createObjectURL(files[0]))
            }
          }}/>
        </div>
        
        {canGenDoc && <PDFViewer width={'90%'} height={800}><MyDocP itemDetails={itemDetails} date={date} imageDeliveryCharge={imageDeliveryChargeVie}/></PDFViewer>}
      </div>
    </div>
    
    

      {/* <button onClick={() => {renderToFile(<MyDocEng itemDetails={itemDetails} date={date}/>, 'EngVer.pdf')}}>Soạn EngVer</button>
      <button onClick={() => {renderToFile(<MyDoc itemDetails={itemDetails} date={date}/>, 'VieVer.pdf')}}>Soạn VieVer</button> */}
      {/* {instanceVie.loading ? <a href={instanceVie.url!} download="VieVer.pdf">Tải Tiếng Việt</a> : 'Loading Tiếng Việt...'}
      {instanceEng.loading ? <a href={instanceEng.url!} download="EngVer.pdf">Tải Tiếng Việt</a> : 'Loading Tiếng Anh...'} */}

      {/* <div className="viewer" ref={componentRef}>
        {getPageContent()}
      </div> */}
      {/*<PDFDownloadLink document={<MyDoc  itemDetails={itemDetails}/>} fileName="somename.pdf">*/}
      {/*  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}*/}
      {/*</PDFDownloadLink>*/}
    </div>
  );
}

export default App;
