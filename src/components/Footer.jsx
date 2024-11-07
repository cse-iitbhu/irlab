import React, {useEffect} from 'react'
import { FiArrowUpCircle } from "react-icons/fi"
import AOS from 'aos'
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin-logo.png"

export const Footer = () => {
    
    
    return (
        <div className='flex flex-col bg-[#67b0d1] text-white px-[3%] py-[2%]'>
            
            <div className='footer flex  my-[2%]'>
                <div className='w-full '>
                    <div className='footer-heading font-mono  text-[120%] font-bold'>Research Groups</div>
                    <div className='flex mt-[2%] footer-divv flex-wrap w-[99%]'>
                        <a  className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800   ' href="https://www.gla.ac.uk/schools/computing/research/researchsections/ida-section/informationretrieval/" target='__blank' >University of Glasgow</a>
                        <a  className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800   ' href="https://www.lti.cs.cmu.edu/" target='__blank' >LTI, CMU</a>
                        <a  className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800   ' href="https://nlp.stanford.edu/" target='__blank' >Stanford</a>
                    </div>
                </div>
                <div className='w-full '>
                    <div className='footer-heading font-mono  text-[120%] font-bold'>Conference</div>
                    <div className='flex mt-[2%] footer-divv flex-wrap w-[99%] '>
                        <a target='__blank' className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800  ' href="https://trec.nist.gov/">TREC</a>
                        <a target='__blank' className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800  ' href="https://www.kdd.org/">KDD</a>
                        <a target='__blank' className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800  ' href="https://www.wsdm-conference.org/">WSDM</a>
                        <a target='__blank' className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800  ' href="http://fire.irsi.res.in/fire/2023/home">FIRE</a>
                        <a target='__blank' className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800  ' href="https://cods-comad.in/">Cods-COMAD</a>
                        <a target='__blank' className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800  ' href="https://indoml.in/">IndoML</a>                    
                    </div>
                </div>
                <div className='w-full '>
                    <div className='footer-heading font-mono text-[120%] font-bold'>Software Resources</div>
                    <div className='flex  mt-[2%] footer-divv flex-wrap w-[99%]'>
                        <a target='__blank' className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800  ' href="http://terrier.org/">Terrier</a>
                        <a target='__blank' className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800  ' href="http://www.lemurproject.org/">Lemur</a>
                    </div>
                </div>
                <div className='w-full '>
                <div className='footer-heading font-mono text-[120%] font-bold'>Miscellaneous </div>
                    <div className='flex  mt-[2%] footer-divv flex-wrap w-[99%]'>
                        <a target="__blank" className='footer-link hvr-shutter-out-horizontal border-2 p-[2%] m-[2%] hover:text-sky-800  ' href="https://nlp.stanford.edu/IR-book/information-retrieval-book.html">Introduction to IR</a>
                        
                    </div>
                </div>
            </div>
            <div className=' flex flex-col justify-center items-center font-serif'>
                
                <div className='text-center'>
                    <p className='footer-text '> &copy; 2023-24 | <a href="https://www.iitbhu.ac.in/" target='__blank' >Indian Institute of Technology (Banaras Hindu University), Varanasi.</a> All Rights Reserved.</p>
                    <a className='footer-text ' href="https://www.iitbhu.ac.in/dept/cse" target='__blank' >Department of Computer Science and Engineering IIT-BHU</a>
                    <div className='flex justify-center items-center space-x-2 mt-2'>
                        <a className='footer-text' href='https://www.linkedin.com/company/irel-information-retrieval-lab-iit-bhu-varanasi/' target='__blank'>
                            <img src={linkedin} className='items-center' class="u-max-full-width" border="0" alt="Twitter" width="20" height="20"/>
                        </a>
                        <a className='footer-text' href='https://x.com/IReL_iitbhu' target='__blank'>
                            <img src={twitter} className='items-center' class="u-max-full-width" border="0" alt="Twitter" width="20" height="20"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
