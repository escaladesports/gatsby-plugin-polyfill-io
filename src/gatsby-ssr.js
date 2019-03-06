import React from 'react'

export function onRenderBody({ setPostBodyComponents }, options){
	let args = []
	for (let i in options) {
		if (i === 'plugins') continue
		let opt = options[i]
		if (Array.isArray(opt)) {
			opt = opt.join(`,`)
		}
		args.push(`${i}=${opt}`)
	}
	if (args.length) {
		args = `?${args.join(`&`)}`
	}
	else {
		args = ``
	}
	setPostBodyComponents([
		<script
			key='polyfill-io'
			src={`https://cdn.polyfill.io/v3/polyfill.min.js${args}`}
		/>
	])
}
