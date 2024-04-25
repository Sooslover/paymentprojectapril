import Script from 'next/script';
import Head from 'next/head';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import Link from "next/link";
import { Html, Main, NextScript } from 'next/document';


export default function Home() {
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

				<title>Education Package</title>
				<script src="assets/js/jquery.min.js"></script>
				<script src="assets/js/browser.min.js"></script>
				<script src="assets/js/breakpoints.min.js"></script>
				<script src="assets/js/util.js"></script>
				<script src="assets/js/main.js"></script>
				<meta charSet="UTF-8" />
			</Head>

			<main className="invert" style={backgroundStyle}>
				<div id="wrapper" className="invert">
					<article id="work">
							<div className="text-box">
								<p className="arabic-text" style={{ margin: '2px', fontFamily: 'Cairo', color: 'white', fontSize: '40px', fontWeight: 'bold' }}>
									مـرحبــاً بــك فــي الـحــزمــة الـتــعــلـيــمـيـة
								</p>
								<p id="description" style={{ textAlign: 'right' }}>في هذا الجزء , سيكون لدينا حزمة تعليمية لتوضيح المفاهيم الأساسية في هذا البحث</p>
							</div>
							<span className="image main"><img src="images/pic02.jpg" width="300" height="200" alt="" /></span>
							<div className="container">
								<div className="tm-img-slider">

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'center' }}>1 قاموس الكلمات الخاص بالتجربة</p>
									<center>
										<a href="images/Slide2.SVG" className="image main" target="_blanck">
											<img src="images/Slide2.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'center' }}>قاموس الكلمات الخاص بالتجربة 2 </p>
									<center>
										<a href="images/Slide3.SVG" className="image main" target="_blanck">
											<img src="images/Slide3.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>كيفية عمل تقنية العملات المشفرة القائمة على تقنية البلوكشين ؟</p>
									<center>
										<a href="images/Slide4.SVG" className="image main" target="_blanck">
											<img src="images/Slide4.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>ماهي الفوارق بين العملات الورقية (النقد الحكومي ) والعملات النقدية ؟1</p>
									<center>
										<a href="images/Slide5.SVG" className="image main" target="_blanck">
											<img src="images/Slide5.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>ماهي الفوارق بين العملات الورقية (النقد الحكومي ) والعملات النقدية ؟2</p>
									<center>
										<a href="images/Slide6.SVG" className="image main" target="_blanck">
											<img src="images/Slide6.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>ماهي الممزات الهامة التي تتميز بها العملات الرقمية ؟</p>
									<center>
										<a href="images/Slide7.SVG" className="image main" target="_blanck">
											<img src="images/Slide7.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>ماذا تعني خاصية اللامركزية ؟</p>
									<center>
										<a href="images/Slide9.SVG" className="image main" target="_blanck">
											<img src="images/Slide9.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>ماذا تعني خاصية الشفافية ؟</p>
									<center>
										<a href="images/Slide8.SVG" className="image main" target="_blanck">
											<img src="images/Slide8.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>ماذا تعني خاصية عدم كشف الهوية ؟</p>
									<center>
										<a href="images/Slide10.SVG" className="image main" target="_blanck">
											<img src="images/Slide10.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>ماذا تعني خاصية التعقيد ؟</p>
									<center>
										<a href="images/Slide11.SVG" className="image main" target="_blanck">
											<img src="images/Slide11.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>ماذا تعني خاصية تذبذب السعر ؟</p>
									<center>
										<a href="images/Slide12.SVG" className="image main" target="_blanck">
											<img src="images/Slide12.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>

									<center><hr size="10" width="100%" color="orange"></hr></center>
									<p style={{ margin: '20px', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>ماذا تعني خاصية رسوم المعاملات المنخفضة ؟  </p>
									<center>
										<a href="images/Slide13.SVG" className="image main" target="_blanck">
											<img src="images/Slide13.SVG" alt="Image" className="image main" title="Click on the image to enlarge it" />
										</a>
									</center>
								</div>
							</div>
					</article>
					<nav>
						<ul style={{ listStyle: 'none' }}>
							<li style={{ margin: '10px' }}>
								<Link href="/">
									<img src="images/mainpic.png" alt="Contact image" style={{ maxwidth: '80%', maxHeight: '80%' }} />
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