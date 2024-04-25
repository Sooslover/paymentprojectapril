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

				<title>Inroduction</title>
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
								<p className="arabic-text" style={{ margin: '2px', fontFamily: 'Cairo', color: 'white', fontSize: '40px', fontWeight: 'bold' }}>مـرحبــاً بــك فــي مــقــدمــة التـــجـــربـة</p>
								<p id="description" style={{ textAlign: 'right' }} >فضلاً قم بالاطلاع على المعلومات التالية بعناية</p>
							</div>
							<span className="image main"><img src="images/pic01.jpg" width="300" height="200" alt="" /></span>

							<p style={{ backgroundColor: 'white', color: 'black', textIndent: '3em', textAlign: 'right' }}>
								عزيزي المشارك
								<br></br>
								يسعدني دعوتك للمشاركة في بحثي
								<br></br>
								قبل اتخاذ قرار بالمشاركة في هذا المشروع البحثي، من المهم أن تفهم خلفية هذا البحث. لأن لك الحق في معرفة الهدف والغاية من إجراء هذه التجربة ومراحلها
								<br></br>
								أنا طالب دكتوراه في قسم علوم المعلوماتية بجامعة ساسكس في المملكة المتحدة. أجري هذه التجربة لدراسة مدى تبني العملات الرقمية القائمة على تقنية البلوكشين كطريقة للدفع لسلع والخدمات.
								تلقت تقنية العملات الرقمية مؤخراً اهتماماً كبيراً من مختلف الجهات المعنية في الحكومات والشركات والباحثين حول العالم. ومع ذلك، فإن اعتمادها كطريقة رسمية لدفع من قبل مزودي الخدمات والعملاء لا يزال منخفضاً نسبياً مقارنة بالاستخدمات الاخرى لتقنية. لذلك، فإن هذا التجربة والاستبيان المصاحب تأتي ضمن مشروع بحثي لاستكشاف مدى قبول العملات الرقمية القائمة على تقنية البلوكشين كطريقة للدفع.
								<br></br>
								في هذه التجربة لقد استقصينا مجموعة من الجوانب التقنية والاقتصادية والشخصية والبيئية المحيطة بالتكنولوجيا
								لقد تمت دعوتك للمشاركة في هذه الدراسة لأننا نرغب في تغطية أنواع مختلفة من المشاركين من حيث العمر والتعليم والخلفية
								<br></br>
								للحصول على نتائج دقيقة، يجب إجراء التجربة بالترتيب بحيث ستقوم بزيارة الحزمة التعلمية بعد هذا القسم. ومن ثم بعد فهم المفاهيم المختلفة، سوف تتوجه إلى قسم التجربة والاستبيانات .
								يتألف الاستبيان من 105 سؤالاً مقسمة إلى 3 أقسام. تحتوي الأسئلة الأولى (القسم الأول) على معلومات عامة حول المشاركين. ويحتوي القسم الثاني على أسأله حول معرفة المشاركين بالعملات الرقمية واستخدام الإنترنت بشكل عام. ويحتوي القسم الثالث على أسئلة الدراسة الرئيسية. يحتوي القسم على سيناريو واحد مبني على مهمة ستقوم بها، ومن ثم تليه 11 سيناريو مستند إلى قصة تخيلية حيث يتوجب عليك اتخاذ قرار سواء بالدفع بالعملة النقدية الحكومية أو العملة الرقمية.
								المشاركة في الاستبيان تطوعية تماماً، وضمان سرية معلوماتك مضمون طوال العملية بالكامل. لن يُطلب منك أبداً تقديم أي معلومات شخصية قابلة للتعرف عليها أثناء الاستبيان. البيانات التي تقدمها لن تُستخدم لتحديد هويتك بأي شكل من الأشكال. لديك الحرية في الانسحاب من الاستبيان في أي وقت، حتى إن كنت قد بدأت فيه بالفعل، دون الحاجة إلى أي تفسير.
								المعلومات التي تقدمها ستستخدم فقط لأغراض أكاديمية وستكون محدودة بدقة إلى نطاق هذه الدراسة. لا تشارك جهات خارجية في الدراسة، ولن يتم مشاركة بياناتك مع أي جهات خارجية. سيتم الاحتفاظ بجميع البيانات المجمعة بطريقة غير معرفة باستخدام أرقام تعريف بدلاً من الأسماء. سيتم الاحتفاظ بالبيانات الإلكترونية بشكل آمن في ملف محمي بكلمة مرور على خادم قائم على السحابة في جامعة ساسكس.
								سيتم تحليل البيانات فقط لأغراض البحث. إذا كنت ترغب في الحصول على نسخة من نتائج البحث، يُرجى التواصل معي عبر البريد الإلكتروني. بمجرد معالجة طلبك، ستتلقى نسخة من نتائج هذا البحث.
								أرغب أن تكون واثقاً من النقاط التالية.

							</p>
							<ul>
								<li style={{ direction: 'rtl', paddingRight: '40px', listStylePosition: 'inside', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>جميع المهام، بما في ذلك المهمة الأولى، في هذا البحث تجريبية ومجانية لأغراض المحاكاة ولن تدفع أي شيء</li>
								<li style={{ direction: 'rtl', paddingRight: '40px', listStylePosition: 'inside', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>ستتم الاحتفاظ بجميع البيانات المجمعة في هذه التجربة بسرية تامة</li>
								<li style={{ direction: 'rtl', paddingRight: '40px', listStylePosition: 'inside', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>يتم تجريد جميع المعلومات واستخدامها فقط في شكل ملخص؛ وبالتالي، لن يتم تقديم أي معلومات فردية أو خاصة ولن يتم مشاركتها مع جهة خارجية.</li>
								<li style={{ direction: 'rtl', paddingRight: '40px', listStylePosition: 'inside', backgroundColor: 'white', color: 'black', margin: '10px', textAlign: 'right' }}>سيتم تحليل نتائج هذا البحث واستخدامها كجزء من أطروحة بحثي</li>
							</ul>
							<p style={{ backgroundColor: 'white', color: 'black', textIndent: '3em', textAlign: 'right' }}>
								جامعة ساسيكس لديها تأمين يغطي المسؤوليات القانونية المتعلقة بهذه الدراسة.
								تمت الموافقة على هذه الدراسة من قبل لجنة أخلاقيات البحوث المتقاطعة للعلوم والتكنولوجيا
								<br></br>
								الرقم المرجع للمشروع هوالرقم التالي
								<br></br>
								(ER/AA2709/2)
								<br></br>
								للمزيد من المعلومات أو في حالة وجود أي استفسارات أثناء استكمال الاستبيان، يمكنك التواصل معي عبر البريد الإلكتروني التالي
								<br></br>
								aa2709@sussex.ac.uk
								<br></br>
								إذا كان لديك أي مخاوف حول كيفية إجراء الدراسة، يُرجى التواصل مع مشرفي ولجنة الأخلاقيات
								<br></br>
								البريد الإلكتروني الخاص بالبروفيسور مارتن وايت
								<br></br>
								m.white@sussex.ac.uk
								<br></br>
								البريد الإلكتروني الخاص بلجنة الأخلاقيات
								<br></br>
								(C-REC): crecscitec@sussex.ac.uk
								<br></br>
								شكراً لمشاركتك
								<br></br>
								أحمد الرحيلي
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