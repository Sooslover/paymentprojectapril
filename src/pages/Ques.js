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
				<div>
						<article id="aboutt">
							<div className="text-box">
								<p className="arabic-text" style={{ margin: '2px', fontFamily: 'Cairo', color: 'white', fontSize: '40px', fontWeight: 'bold' }}>
									مـرحبــاً بــك فــي صـــفــــحــــة الاســـتــبــيـــان والتــجــربـة
								</p>
								<p id="description" style={{ textAlign: 'right' }} >....نريد ان نعرف وجه نظرك ورئيك في المهام والسيناريوهات التالية </p>
								
							</div>
							<span className="image main"><img src="images/pic03.jpg" width="300" height="200" alt="" /></span>

							<div>
								<div className="container" style={containerStyle}>
									<object data="https://universityofsussex.eu.qualtrics.com/jfe/form/SV_ebPcCT2KTPTs7Ou" title="Description of the PDF content" type="text/html" width="100%" height="1210">
										<p>Your browser does not support displaying this survey. Please <a href="https://universityofsussex.eu.qualtrics.com/jfe/form/SV_ebPcCT2KTPTs7Ou">click here</a> to open the survey.</p>
									</object>
								</div>
							</div>
						</article>
					</div>

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