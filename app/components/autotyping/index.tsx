'use client'

import { Roboto_Serif } from "next/font/google"
import React from "react"
import Typed from "typed.js"

// const robotoSerif = Roboto_Serif({
// 	subsets: ["latin"],
// 	display: "swap",
// 	variable: "--font-roboto-serif",
// })

export const AutoTyping = () => {
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Welcome to My Portfolio.",
				"I'm Bowornthat Chiangthong.",
				"I'm 2nd Year Student.",
				"I'm a Developer.",],
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
			showCursor: true,
			cursorChar: "_",
			backDelay: 2000,
		}
		)
		return () => {
			typed.destroy()
		};

	}, [])
	return <div className="text-wrap text-center sm:text-left">
		<h1 className='text-3xl sm:text-7xl  font-semibold font-satoshi'><span ref={el} /></h1>
	</div>
}
