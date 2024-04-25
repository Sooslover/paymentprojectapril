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
				<title>Cryptocurrency adoption as a Payment Method</title>
				<script src="assets/js/jquery.min.js"></script>
				<script src="assets/js/browser.min.js"></script>
				<script src="assets/js/breakpoints.min.js"></script>
				<script src="assets/js/util.js"></script>
				<script src="assets/js/main.js"></script>
				<meta charSet="UTF-8" />
			</Head>
			<main className="invert" style={backgroundStyle}>
				<div id="wrapper" className="invert">
					<header>
						<p className="arabic-text" style={{ margin: '2px', fontFamily: 'Cairo', fontSize: '49px', fontWeight: 'bold', color: 'MediumTurquoise', margin: '1px', textAlign: 'center' }}>  تجربة العملات الرقمية القائمة على تقنية البلوكشين </p>
					</header>
					<header id="header">
						<div className="logo">
							<span className="icon fa-gem"></span>
						</div>

						<div>
							<p className="arabic-text" style={{ margin: '2px', fontFamily: 'Cairo', color: '#F57F17', fontSize: '40px', fontWeight: 'bold' }}> تـبـنــي الــعــمـــلات الـرقــمــيــة كــطــريــقـــة دفـــع للــســـلـــع والـــخـــدمـــات</p>
							<div style={{ margin: '20px', backgroundColor: 'darkslategray', color: 'blue', margin: '10px', textAlign: 'center' }}>
								<p className="arabic-text" style={{ margin: '2px', fontFamily: 'Cairo', fontSize: '18px', fontWeight: 'bold', backgroundColor: 'black', color: 'snow', margin: '1px', textAlign: 'center' }}>
									نرحب بكم في موقعنا للتحقق من قبول العملات الرقمية كوسيلة للدفع عن السلع والخدمات
									<br></br>
									يرجى الاطلاع على هذه الأقسام بالترتيب  بدءاً من قسم المقدمة، ثم الانتقال الى الحزمة التعليمية ، ثم الانتقال الى الاستبيان والسيناريوهات
								</p>
							</div>
						</div>
						<nav>
							<ul>
								<li className="arabic-text" style={{ backgroundColor: 'MediumTurquoise', fontFamily: 'Cairo', color: 'black', margin: '10px', fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }}>
									<Link href="Cont">
										<img src="images/contactpic.png" alt="Contact image" style={{ maxwidth: '80%', maxHeight: '80%' }} />
									</Link>
								</li>
								<li className="arabic-text" style={{ backgroundColor: 'MediumTurquoise', fontFamily: 'Cairo', color: 'black', margin: '10px', fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }}>
									<Link href="https://universityofsussex.eu.qualtrics.com/jfe/form/SV_ebPcCT2KTPTs7Ou" target="_blank">
										<img src="images/surpic.png" alt="Ques image" style={{ maxwidth: '80%', maxHeight: '80%' }} />
									</Link>
								</li>
								<li className="arabic-text" style={{ backgroundColor: 'MediumTurquoise', fontFamily: 'Cairo', color: 'black', margin: '10px', fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }}>
									<Link href="/Educ" >
										<img src="images/edupic.png" alt="Education image" style={{ maxwidth: '80%', maxHeight: '80%' }} />
									</Link>
								</li>
								<li style={{ backgroundColor: 'MediumTurquoise', fontFamily: 'Cairo', color: 'black', margin: '10px', fontWeight: 'bold', textAlign: 'center' }}>
									<Link href="/Intro" >
										<img src="images/intropic.png" alt="Introduction image" style={{ maxwidth: '80%', maxHeight: '80%' }} />
									</Link>
								</li>
							</ul>
						</nav>
					</header>

					<div id="main">
					</div>
					<footer id="footer">
						<h5 style={{ color: "snow" }}>Ahmed Alrehaili</h5>
					</footer>
				</div>
			</main>
		</>
	)
}