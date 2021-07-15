import React, {useState} from "react";
import download from "../../images/Eric_Malpass_Resume.pdf"
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);}
    return (
        
        <section className="container">
        <h2 className="top-title">Resume</h2>
        <hr></hr>
        <div>
                <div>
                    <p>Email: EricMalpass@gmail.com</p>
                    <p>Phone Number: (206)920-5275</p>
                    <p>Download: <a href={download} download >Resume</a></p>
                </div>
                <div className="resume">
      <Document
        file= {download}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className= "page">
      <p>Page {pageNumber} of {numPages}</p>
      <button onClick = {() => setPageNumber(2)}> Next page </button>< button onClick = {() => setPageNumber(1)}> previous</button>
      </div>
    </div>
        </div>
    </section>      
    )};

 export default Resume;