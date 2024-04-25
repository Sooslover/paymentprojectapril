import Script from 'next/script';
import Head from 'next/head';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Html, Main, NextScript } from 'next/document';


export default function Home() {
	const [excelData, setExcelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/excel');
      const data = await response.json();
	  console.log(data);
      setExcelData(data);
    };
    fetchData();
  }, []);

	const backgroundStyle = {
		backgroundImage: "url('./images/overlay.png')",
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	};

	const containerStyle = {
		backgroundColor: 'rgba(22, 160, 133, 0.7)',
		borderRadius: '0px',
		margin: '0',
		width: '100%',
		height: '100%',
		padding: '0em'
	};
	return (
		<>
			<Head>
				<title>Further Studies</title>
				<script src="assets/js/jquery.min.js"></script>
				<script src="assets/js/browser.min.js"></script>
				<script src="assets/js/breakpoints.min.js"></script>
				<script src="assets/js/util.js"></script>
				<script src="assets/js/main.js"></script>
				<meta charSet="UTF-8" />
			</Head>
			<main className="invert" style={backgroundStyle}>
				<div id="wrapper" className="invert">

					<div>

						<article id="introo">
							<div className="text-box">
								<p className="arabic-text" style={{ margin: '2px', fontFamily: 'Cairo', color: 'white', fontSize: '40px', fontWeight: 'bold' }}>Further Studies to be included in our Research</p>
			
							</div>
							<span className="image main"><img src="images/pic01.jpg" width="300" height="200" alt="" /></span>


							<p style={{ backgroundColor: 'white', color: 'black', textIndent: '0em', textAlign: 'left' }}>
								
								We are already compelling a list of articles to be included in our future work. Approximately 60 articles need to be analyzed to bring the study up to date in 2024	
							</p>

							<div>
            <table style={{ width: '100%', backgroundColor: 'black' }}>
              <thead>
                <tr>
                  {excelData.length > 0 && Object.keys(excelData[0]).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {excelData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, idx) => (
                      <td key={idx}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
		  
							<p style={{ backgroundColor: 'white', color: 'black', textIndent: '0em', textAlign: 'left' }}>
								For More Information, Please contact Mr. Ahemd Alrehaili
								<br></br>
								aa2709@sussex.ac.uk
								<br></br>
							
								<br></br>
								or You can contact Prof. Martin White
								<br></br>
								m.white@sussex.ac.uk
								<br></br>
								
								<br></br>
								Best Regards
								<br></br>
								Ahmed Alrehaili
							</p>
						</article>		
					</div>
					<nav stle={{ alignContent: 'center' }} >
						<ul style={{ alignContent: 'center', listStyle: 'none'}} >
							<li style={{ margin: '10px' }}>
								<Link href="/" >
									<img src="images/mainpic.png" alt="Contact image" style={{ alignContent: 'center', maxwidth: '80%', maxHeight: '80%' }} />
								</Link>
							</li>
						</ul>
					</nav>
					<footer id="footer">
						<h5 style={{ color: "snow" }}>Ahmed Alrehaili</h5>
					</footer>
				</div>
			</main>			
		</>
	)
}