'use client'

import React from "react"
import Typed from "typed.js"

export const AutoTyping = () => {
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Welcome to my world of creative innovation.",
			"Discover my unique, professionally crafted projects.",
			"Dive into designs that inspire and captivate.",],
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
	return <div className="type-wrap">
		<span ref={el} />
	</div>
}
