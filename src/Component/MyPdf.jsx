import React from 'react'
import { Document, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'
// import IID from '../assets/iidLogo.png'
import Step1 from './Step1'
import Page1 from './PDF_Pages/Page1'
import Page2 from './PDF_Pages/Page2'
const MyPdf = () => {
    const styleObj = StyleSheet.create({
            Page1:{
                
            }
    })
  return (
    <>
        <PDFViewer style={{
            height:"100vh",
            width:'100%'
        }}>
           <Document>
            <Page size={'A4'}>
                {/* page-1 */}
                  <Page1/>
                {/* page-1 ends */}
                {/* Page-2 Starts */}
                 <Page2/>
                {/* Page-2 Ends */}
                {/*<Text break>
                    Page 3
                </Text>
                <Text break>
                    Page 4
                </Text> */}
            </Page>
           </Document>
        </PDFViewer>
    </>
  )
}

export default MyPdf