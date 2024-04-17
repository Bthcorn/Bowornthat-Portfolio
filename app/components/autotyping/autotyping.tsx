"use client"

import React from "react"
import Typed from "typed.js"

export const AutoTyping = () => {
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ['These are the default values...',
				'You know what you should do?',
				'Use your own!',
				'Have a great day!',],
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
