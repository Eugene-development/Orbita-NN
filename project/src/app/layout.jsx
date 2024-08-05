import '../css/globals.css'
import { Inter } from 'next/font/google'
import Banner from './layout/banner'
import Info from './layout/info'
import Menu from './layout/menu'
import Footer from './layout/footer'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
// 	title: 'Create Next App',
// 	description: 'Generated by create next app'
// }

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<head>
				<link
					rel="icon"
					href="https://storage.yandexcloud.net/brand-logo/rem-stroy/logo/favicon.svg"
					sizes="any"
				/>
				{/* <script src="//code.jivo.ru/widget/2EfbaT2QPD" async></script> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
                        (function (m, e, t, r, i, k, a) {
                          m[i] =
                            m[i] ||
                            function () {
                              (m[i].a = m[i].a || []).push(arguments);
                            };
                          m[i].l = 1 * new Date();
                          (k = e.createElement(t)),
                            (a = e.getElementsByTagName(t)[0]),
                            (k.async = 1),
                            (k.src = r),
                            a.parentNode.insertBefore(k, a);
                        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

                        ym(82181533, 'init', {
                          clickmap: true,
                          trackLinks: true,
                          accurateTrackBounce: true,
                          webvisor: true
                        });
                    `
					}}
				/>
				<noscript>
					<div>
						<img
							src="https://mc.yandex.ru/watch/93835019"
							style={{ position: 'absolute', left: '-9999px' }}
							alt=""
						/>
					</div>
				</noscript>
			</head>

			<body className={inter.className}>
				<Banner />
				<Info />
				<Menu />
				{children}
				<Footer />
			</body>
		</html>
	)
}
