import React from 'react'
import { Document, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'
import IID from '../PDF_Pages/iidLogo.png'
const Page1 = () => {
  return (
    <>
                        {/* page-1 */}
                          <View style={{
                            // display:'flex',
                            fontSize:'24px',
                            // margin:100,
                            // flexDirection: 'row',
                            // justifyContent:'center',
                            alignItems:'center',
                            // marginTop:50,
                            border:3,
                            margin:15,
                            height:'95%',
                            width:'',
                            boxSizing:'border-box',
                            
                            
                          }}>
                             <View style={{
                                fontWeight: 700,
                                marginBottom:30,
                                marginTop:90,
                                textAlign:'left'
                             }}>
                                <Text>Project Report</Text>
                            </View>
                            <View style={{
                                marginBottom:'30'
                            }}>
                                <Text>of</Text>
                            </View>
                            <View style={{
                                marginBottom:'50'
                            }}>
                                <Text>Potato Frozen French Fries</Text>
                            </View>
                            <View style={{
                                marginBottom:20
                            }}>
                                <Text>Purpose of the Document</Text>
                            </View>
                            <View style={{
                                fontSize:'16px',
                                margin:'2 18'
                            }}>
                                <Text>
                                This particular pre-feasibility is regarding Potato Frozen French Fries
        
                                </Text>
                            </View>
                            <View style={{
                                fontSize:'15px',
                                margin:'2 18',
                                marginTop:'15'
                            }}>
                                <Text>
                                The objective of the pre-feasibility report is primarily to facilitate potential entrepreneurs in project 
                       identification for investment and in order to serve his objective; the document covers various aspects 
                       of the project concept development, start-up, marketing, finance and management. 
                       
                                </Text>
                            </View>
                            <View style={{
                                fontSize:'15px',
                                margin:'2 18',
                                marginTop:'15'
                            }}>
                                <Text>
                                [We can modify the project capacity and project cost as per your requirement. We can also prepare
                                    project report on any subject as per your requirement.]
                                </Text>
                            </View>
                            <View style={{
                                flexDirection:'row',
                                marginTop:40,
                            }}>
                            <View>
                            <Image
                            src={IID}
                            style={{
                           width:'110px',
                           height:'50px'
                             }}
                            />
                            </View>
                            {/* <View>
                            <Image
                            src={IID}
                            style={{
                           width:'110px',
                           height:'50px'
                             }}
                            />
                            </View> */}
                            </View>
                            <View style={{
                                fontSize:'15px',
                                margin:'2 18',
                                marginTop:'15'
                            }}>
                                <Text>
                                 M/S Insitute of Industrial Development
                                </Text>
                            </View>
                            <View style={{
                                fontSize:'15px',
                                margin:'2 18',
                                marginTop:'1'
                            }}>
                                <Text>
                                 A Unit of M/s SAMADHAN Samiti
                                </Text>
                            </View>
                            <View style={{
                                fontSize:'15px',
                                margin:'2 18',
                                marginTop:'1'
                            }}>
                                <Text>
                                 KVIC Pavilion,Gandhi Darshan
                                </Text>
                            </View>
                            <View style={{
                                fontSize:'15px',
                                margin:'2 18',
                                marginTop:'2'
                            }}>
                                <Text>
                                 Raj Ghat, New Delhi 110002
                                </Text>
                            </View>
                            <View style={{
                                fontSize:'15px',
                                margin:'2 18',
                                marginTop:'10'
                            }}>
                                <Text>
                                 Website:www.iid.org.in
                                </Text>
                            </View>
                            <View style={{
                                fontSize:'15px',
                                margin:'2 18',
                                marginTop:'10'
                            }}>
                                <Text>
                                 Email:support@iid.org.in
                                </Text>
                            </View>
        
                            </View>
                        {/* page-1 ends */}
                    
    </>
  )
}

export default Page1