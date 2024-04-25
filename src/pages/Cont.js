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

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		task1: "",
		message1: ""
	});

	const [formSuccess, setFormSuccess] = useState(false)
	const [formSuccessMessage, setFormSuccessMessage] = useState(" ")

	const handleInput = (e) => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;

		setFormData((prevState) => ({
			...prevState,
			[fieldName]: fieldValue
		}));
	}

	const submitForm = (e) => {

		e.preventDefault()

		const formURL = e.target.action
		const data = new FormData()

		Object.entries(formData).forEach(([key, value]) => {
			data.append(key, value);
		})


		fetch(formURL, {
			method: "POST",
			body: data,
			headers: {
				'accept': 'application/json',
			},
		}).then((response) => response.json())
			.then((data) => {
				setFormData({
					name: "",
					email: "",
					task1: "",
					message1: ""
				})
				setFormSuccess(true)
				setFormSuccessMessage(data.submission_text)
			})
	}
	return (
		<>
			<Head>

				<title>Contact US</title>
				<script src="assets/js/jquery.min.js"></script>
				<script src="assets/js/browser.min.js"></script>
				<script src="assets/js/breakpoints.min.js"></script>
				<script src="assets/js/util.js"></script>
				<script src="assets/js/main.js"></script>
				<meta charSet="UTF-8" />
			</Head>

			<main className="invert" style={backgroundStyle}>
				<div id="wrapper" className="invert">
						<article id="contact">
							<div className="text-box">
								<p className="arabic-text" style={{ margin: '2px', fontFamily: 'Cairo', color: 'white', fontSize: '40px', fontWeight: 'bold' }}>
									مـرحبــاً بــك فــي صـــفــــحــــة تـــواصـــــل مـــعانــا
								</p>
								<p id="description" style={{ textAlign: 'right' }} >....الرجاء التواصل معانا وسيتم الرد عليك بأقرب فرصة ممكنة</p>
							</div>
							{formSuccess ?
								<div>
									<p style={{ margin: '20px', backgroundColor: 'white', Color: 'white', margin: '10px', textAlign: 'left' }}>Form submitted, Thank you for your message..!</p>
								</div>
								:
								<div className="container">
									<form method="POST" action="https://www.formbackend.com/f/752a54b1d0f138c8" onSubmit={submitForm}>
										<div className="fields">
											<div className="field half">
												<label htmlFor="name"><p style={{ margin: '0px', backgroundColor: 'white', color: 'black', margin: '0px', textAlign: 'right' }}>الايميل</p></label>
												<input className="input-field" type="text" name="name" style={{ textAlign: 'right' }} onChange={handleInput} value={formData.name} placeholder="الرجاء كتابة الايميل" />
											</div>
											<div className="field half">
												<label htmlFor="email"><p style={{ margin: '0px', backgroundColor: 'white', color: 'black', margin: '0px', textAlign: 'right' }}>الاسم</p></label>
												<input className="input-field" type="text" name="email" style={{ textAlign: 'right' }} onChange={handleInput} value={formData.email} placeholder="الرجاء كتابة الاسم" />
											</div>
											<div className="field">
												<label htmlFor="message"><p style={{ margin: '0px', backgroundColor: 'white', color: 'black', margin: '0px', textAlign: 'right' }}>الرسالة</p></label>
												<textarea className="input-field" style={{ textAlign: 'right' }} type="text" name="message1" onChange={handleInput} value={formData.message1} rows="5" cols="40" placeholder="رسالتك" />
											</div>
										</div>
										<ul className="actions">
											<li><input type="submit" value="إرسال" className="primary" /></li>
											<li><input type="reset" value="إعادة الضبط" /></li>
										</ul>
									</form>
								</div>
							}
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