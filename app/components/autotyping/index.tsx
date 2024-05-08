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
			strings: ["Hi! Welcome to My Portfolio.",
				"I'm Bowornthat Chiangthong.",
				"I'm 2nd Year Student.",
				"I'm a Developer.",],
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
			showCursor: true,
			cursorChar: "_",
		}
		)
		return () => {
			typed.destroy()
		};

	}, [])
	return <div className="flex-wrap">
		<h1 className='text-2xl sm:text-4xl font-semibold font-satoshi'><span ref={el} /></h1>
	</div>
}
