'use strict'

const chart = require('..')
const tape = require('tape')

const expected = require('./data/four-parties-seatcount')

const parliament = {
	'party1': {
		'seats': 1,
		'colour': '#000'
	},
	'party2': {
		'seats': 1,
		'colour': '#fff'
	},
	'party3': {
		'seats': 1,
		'colour': '#abc'
	},
	'party4': {
		'seats': 1,
		'colour': '#def'
	}
}
const seatCount = true

tape('Four parties with 1 seat each, seatCount true', t => {
	const svg = chart(parliament, seatCount)
	t.deepEqual(svg, expected, 'Generated virtual dom SVG and expected output are the same')
	t.end()
})
