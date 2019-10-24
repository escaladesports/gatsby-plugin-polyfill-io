import React from 'react'

const defaultOptions = {
	minified: true
}

export function onRenderBody({ setPostBodyComponents }, pluginOptions){
	const { minified, plugins, ...options } = Object.assign(pluginOptions, defaultOptions)

	const args = []

	for (let i in options) {
		let opt = options[i]
		if (Array.isArray(opt)) {
			opt = opt.join(`,`)
		}
		args.push(`${i}=${opt}`)
	}

	if (args.length) {
		args = `?${args.join(`&`)}`
	} else {
		args = ``
	}

	setPostBodyComponents([
		<script
			key='polyfill-io'
			src={`https://cdn.polyfill.io/v3/polyfill${minified ? '.min' : ''}.js${args}`}
		/>
	])
}
