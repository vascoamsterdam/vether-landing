import React from 'react'
import { Flex, Heading, Box, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import defaults from '../common/defaults'

export const Hero = (props) => {

	const router = useRouter()

	const startDapp = (e) => {
		e.preventDefault()
		router.push(defaults.urlDapp)
	}


	const style = {
		w: '50%',
		minH: '615px',
		flexFlow: 'column',
		justifyContent: 'center',
	}

	return (
		<Flex {...props}>
			<Flex {...style}>
				<Heading as='h1' size='xl'>
					A strictly-scarce, decentralized, and fairly distributed Ethereum based asset
				</Heading>
				<Box as='h2' size='md' fontWeight='normal' textAlign='justify'>
				An asset that stores value created by dreamers and builders. With limited supply and with technical properties that allow for even fairer distribution and transparent costs.
				</Box>
				<Button
					size='lg'
					maxWidth='156px'
					variant='outline'
					onClick={startDapp}
				>
					Acquire now
				</Button>
			</Flex>
			<Flex {...style}>
				<img
					width='487px'
					height='486px'
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 546.6 547.7'%3E%3Cpath fill='%23ffdc73' d='M502 87l27-37-27 16z'/%3E%3Cpath fill='%23ffcd47' d='M503 61l27-16-27-13z'/%3E%3Cpath fill='%23ffdc73' d='M503 32l27 13-27-45z'/%3E%3Cpath fill='%23e0aa00' d='M502 87l-27-37 27 16zM501 61l-26-16 26-13z'/%3E%3Cpath fill='%23ffbf00' d='M501 32l-26 13 26-45z'/%3E%3Cpath fill='%23ffdc73' d='M30 540l27-38-27 16z'/%3E%3Cpath fill='%23ffcd47' d='M31 513l26-16-26-13z'/%3E%3Cpath fill='%23ffdc73' d='M31 484l26 13-26-45z'/%3E%3Cpath fill='%23e0aa00' d='M30 540L3 502l27 16zM29 513L2 497l27-13z'/%3E%3Cpath fill='%23ffbf00' d='M29 484L2 497l27-45z'/%3E%3Cg fill='none' fill-rule='evenodd' stroke-miterlimit='10' stroke-width='1.8' clip-rule='evenodd'%3E%3Cg stroke='%23ffdc73'%3E%3Cpath d='M232 291l28-18M283 8v50M51 409l110-71M440 361l75 48'/%3E%3C/g%3E%3Cpath stroke='%23ffbf00' d='M283 7l232 134v268L283 543 51 409V141z'/%3E%3Cpath stroke='%23ffdc73' d='M305 274l83 53'/%3E%3C/g%3E%3Cg fill='none' fill-rule='evenodd' stroke-miterlimit='10' stroke-width='1.9' clip-rule='evenodd'%3E%3Cg stroke='%23ffdc73'%3E%3Cpath d='M485 529l30-20M515 476v33l31 20'/%3E%3C/g%3E%3Cpath stroke='%23ffbf00' d='M515 476l31 18v35l-31 18-30-18v-35z'/%3E%3C/g%3E%3Cg fill='none' fill-rule='evenodd' stroke-miterlimit='10' stroke-width='1.9' clip-rule='evenodd'%3E%3Cg stroke='%23ffdc73'%3E%3Cpath d='M1 54l30-19M31 2v33l31 19'/%3E%3C/g%3E%3Cpath stroke='%23ffbf00' d='M31 2l31 17v35L31 72 1 54V19z'/%3E%3C/g%3E%3Cg%3E%3Cpath fill='%23ffdc73' d='M284 305l75-106-75 44z'/%3E%3Cpath fill='%23ffcd47' d='M285 229l76-45-76-34z'/%3E%3Cpath fill='%23ffdc73' d='M285 150l76 34-76-125z'/%3E%3Cpath fill='%23e0aa00' d='M282 305l-75-106 75 44zM281 229l-75-45 75-34z'/%3E%3Cpath fill='%23ffbf00' d='M281 150l-75 34 75-125z'/%3E%3C/g%3E%3Cg fill='%23ffdc73' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cpath d='M298 394l-3 35-4 27h2l6-57 1-5c0-1 3-11 0-22-3-10-11-20-12-21v5l8 18 2 20z'/%3E%3Cpath d='M291 354l-34-41-3-3-2-4-1-1h-1c-7-5-18-15-24-23-10-15-20-29-34-38v-9c-1-5-5-2-9-1l5-4c6-4 9-9 10-16 0-6-2-8-8-6l-20 7-8 3 9-34c1-5 0-9-2-14-1-3-4-3-7-3-3-1-5 0-6 2l-3 6c-1 4-3 8-7 10l-7 10c-6 16-10 33-15 49-1 4-1 7 1 10s2 5 0 7c-3 3-4 7-2 10l6 15 25 42c4 7 8 14 15 19l40 32c8 7 15 15 21 24 5 9 7 19 5 29a1644 1644 0 002-1c2-10 0-19-5-28-6-11-15-20-24-28l-38-30-5-6-24-54c-2-4-2-8 0-12l11-21c2-5 6-7 11-9l22-8h5v5c-2 10-10 15-19 18l-3 3-6 17 1 5 6 18 1 1h1l-1-3-4-12c-4-7-1-13 1-20 15 17 46 37 55 35l-2-1-7-5-5-5-17-17c-4-5-7-11-8-17l1-3 6-8 4 2c9 6 16 14 22 23 9 12 18 24 30 34 4 2 5 6 8 9 0 1 0 0 0 0l36 45 1-5zM159 219c0-7 0-15 6-21-1 8-3 15-6 21zm4-50l-8 8c2-7 3-9 8-8zm-37 76c5-16 9-33 15-49 1-4 4-6 7-9l18-18c3 4 5 9 3 14l-6 15c-4 5-6 10-6 16 0 3-1 6-4 8l-9 13-15 21c-3-4-5-7-3-11zm36-4c-5 2-10 5-12 11l-10 18c-3 6-4 11-1 17l19 42v2l-3-5-23-40-8-17 1-5a2369 2369 0 0134-43l26-10 4-1c7-2 8-1 6 6 0 5-3 9-7 12l-8 5-18 8zm37 45l11 11a107 107 0 01-40-30c-3-4-2-6 3-7l8-4c2 13 10 21 18 30z'/%3E%3C/g%3E%3Cpath fill='%23ffdc73' fill-rule='evenodd' d='M460 213l-30-57-4-4v-1h-1-2l-4 9-15-17-4-3-3 2-3 15-4 1c-5 4-7 11-5 18v1l2 3v2l1 2 1 1 5 9 7 10v2c2 2 3 3 3 5 11 16 16 34 14 54l-3-6-5-8-22-26-3-3-16-16-6 2-1 1-3 6h1c-1 8 3 13 6 19l3 3 2 2c1 3 4 5 6 7 10 10 16 22 20 36v8l-2 16c-1 8-4 14-8 21-5 8-9 17-11 27l-5 25c-1 7-5 14-12 18-6 4 3 47 3 48 6-3-8-41-2-44 6-5 10-11 12-19l5-20c2-10 3-21 9-30a317 317 0 009-17l3-17c3-10 0-19-4-29-5-12-14-22-23-32-3-4-6-9-8-15-3-6-1-11 5-15l23 24 16 20 8 12 10 28 2 3h1l-1-3-7-19v-4c3-12-1-24-3-36v-1l-21-38-9-17c-3-7 0-13 5-16 9 8 17 18 24 28a4658 4658 0 0128 46l4 48 1 4h1v-3a13221 13221 0 00-6-54l-24-38-19-25c-6-6-5-12-4-18l4-6c9 11 19 21 26 33l16 29c5 8 7 16 7 25 1 22 2 44 6 66 1 5 0 11-2 16-7 16-12 34-17 51-2 12-5 24-9 35l-15 47h3v1l15-49 11-44c4-12 7-24 12-35 3-9 5-17 3-26s-1-19 1-28l5-26c2-8 1-16-3-24zm1 23l-5 25-1 9h-1l-1-13-1-29c0-9-2-17-7-25l-19-32-3-5c-3-5-3-5 0-9 2-3 3-3 5 0l11 19 20 38c3 7 4 15 2 22z' clip-rule='evenodd'/%3E%3Cpath fill='%23ffbf00' d='M426 445c5-15-2-24 6-37 1-2-2-5-7-7 1 4-5 6-12 5l-4-1h-7-1l1 1h-3-1 1-3 1l-2 1v-1 1h-1l-2-1h-1 1l-3-1h-2-1v-1h-1 1-1-1v-1h-1l1 1h-7l-5 1-2-1-2-1h-1l-7 3-4 1c0 12 2 26 0 37l1 1a96 96 0 004 1h3l5 1 5 1h1v1l1-1h1v3l-1 1v2c-1 4-5 7-8 10-5 2-11 5-12 8l-3 8a37 37 0 00-18 11 41 41 0 00-22 0l-6-4c-4-3-7-4-11-5l-3-8-1-1-1-2a20 20 0 00-1-2h1l1 1v-2h1v0h3v-1a90 90 0 011 0h4a140 140 0 006-2c-1-13 4-25 5-38l-5-2-2-1-2-1h-2l-4-1-1 5h-3l-1 1-6 1h-11l-14 1h-4c-5 1-10 0-13-1h-1l-2-1h-1l-2-5v-2h-1l-2 1-5 1-9 4c1 13 4 27 4 40h1l17 4h5l5 1h5-1 5v0h1v1h1v3l1 3 4 7c4 5 8 8 13 10 2 3 6 7 10 9 8 5 15 6 20 5l13 2c7 0 13-2 17-4 5 0 10-2 15-5s8-6 10-9c5-2 10-7 13-13l3-13c3-3 7-7 8-11l1-2v-3-3h1a13 13 0 00-1 2l1-1v-1l1-1v1l1-1c2-1 4-2 6-1h5v-1c7 0 10 1 18-1h2zm-68 28c3-8 19-12 23-12v2l-1 1 1-2h-1v1l-1-1h-1 1v1h-1 1l-1 1h-1c-3 0-13 4-16 10s-3 11-2 14v-1 1l1 1 1 1v1l-1-2-2-1 1 2 1 1-1-1-1-2v1l-1-1 1 2h-1v-1 1c-2-4-2-10 1-17zm22-24v-1 1l1-2 1-1-1 2v0l1-1-1 2v3a52 52 0 011-5v1l-1 7-5 6h1l-4 1-1 1c2-3 6-6 6-9l2-6v-2 3zm1-3v-2 2zm6 6v4c0 2-2 3-3 5v-1h-5c1-2 3-3 3-5l1-5 3 2h1zm-5 11h-1 1v-1 1zm-5 3l-2 1v-1h2zm-19 28a28 28 0 01-11 6c0-2-2-5-5-6a28 28 0 0112-7c0 3 2 5 4 7zm-20-4l2-1a35 35 0 0112-6h-1 2v-1 1h-1l-1 1h1l1-1v1h-1l-1 1a14 14 0 002-1v1h-1v1a33 33 0 00-12 7v-1a14 14 0 002-2l-2 1-1 1 1-1 1-1-2 1v1h-1l2-1 1-2-2 1-1 2-1-1 1-1zm-13 1c8 0 15 3 18 6a16 16 0 011 4v-1l-1-2v2l1 1h-1v-1l-1-1 1 1v1h-1v-1l-1-2 1 2v1h-1 1c0-3-7-7-17-7s-16 4-16 7v2h1l-1 1v-1l-1-2v2l1 1h-1v-2l-1-1v2l1 1-1-1-1-3c0-5 9-9 19-9zm14 10h-1v-2l1 2zm-6-4h1l-1 2v-2zm-15 0a31 31 0 0113 0c-1 3-1 5 1 7v1a32 32 0 01-13 0l-1-8zm-21-12l1 1h1l-1-1 8 3 5 4-1 1-1-2-2-1 2 2 1 1-1-1-1-1v2h1v1l-1-2-2-1 1 2 2 1h-1a34 34 0 00-12-7h1l2 1-2-1-1-1v-1l1 1 1 1-1-1-1-1h1zm-2 4a29 29 0 0111 6l-2 6v2a29 29 0 01-15-10 15 15 0 001 1l1 1c3-1 4-3 4-6zm-5 3l1 1-1-1-1-1 1 1zm-1-2h1a9 9 0 001 2v1a13 13 0 00-2-3zm0 2l1 1a32 32 0 00-2-2h1v1zm1-18c4 5 4 11 3 15l-1-1 1 1v1h-1 1l-1 1v-1 2a13 13 0 00-2-3c1-2 1-8-3-13-4-7-12-10-15-8l-1 1-1-1h1l2-1h-2l-1 1v-1h1l1-1h-2l-1 1v-1h3l1-1h-1-2v1c5-3 14 0 20 8zm-12-2l-1-1 1 1 1 1-1 1v-2zm0 2l-1-1-1-1h1v1l1 1zm0-3v-1l1 2 1 1h-1l-1-2zm1 0h1v1l-1-1zm-11-7l-1-2 3 1-2 1zm20 5h2v2l-2-2zm-31 0l-1-3v-2l-1 2a18 18 0 000 3l-2-1-1-3-1 3h-2v-2-2l-1-2v2l-1 2v2h-1l-1-15-1 15-2-1-1-17-1-7v24h-2l-2-21-2-7 1 7 1 20h-3l-4-24-1-8 1 8 1 23h-1c-1-13-4-24-4-36 4 3 16 4 20 4 16 2 33 2 49-1 8-1 14-4 14-4-1 12-6 23-5 35-2-11 2-20 1-31 0 11-3 21-3 32h-1c-1-17 1-27 1-27s-4 10-3 27l-3 1-1-17-1 17-2 1v-2l-1-3v-2 2l-1 5h-1v-1-2l-1-1v3l-1 1v1h-1l1-10c-1-8-3-14-8-16l-1 2 1 1 1 2 1 1 1 1 2 9v9h1l-4-2v-6c0-5-2-9-4-11v5a24 24 0 012 8 5 5 0 00-2-1 5 5 0 002 2v1a9 9 0 00-3-3l2 2 1 1a20 20 0 010 1l-2-2-2-1 2 2 1 1h-1l-1-1-2-1 2 1v1l-1-1h-2l-2-1v-1 1a8 8 0 003 2h-3a17 17 0 00-3-2v-1l1 1 2 2a30 30 0 00-3-3v-1a19 19 0 002 2l-2-2-1-1v-1l1 1 2 1-2-2h-1v-1h1l2 1a11 11 0 00-3-2v-1l2 1a5 5 0 00-1-1v-1l1 1-1-1v-1l2-4v-3l-1 1v-1-1-1l1-1v-1c-8 1-12 9-11 19l3 9h-4zm4-10c-1-6 0-12 4-15h1l1-1-1 1-1 1-1 1 2-1 1-1v1h-2l-1 2 2-1 1-1v1h-1l-1 2 2-2v1c-2 2-4 7-3 12 1 9 6 14 10 14h1l1 2-1-2v-1h1v1l1 2h-3c-6 1-12-6-13-16zm21 26l-2 4v1l-2-2 1 2 1 1-2-1 2 1 1 1v1l-1-1-3-2 2 2 2 1-4-2-6-6c-2-3-4-7-4-10v1l1 3 2 3-1-4-1-2h1v3l2 3a78 78 0 00-1-3l2 2-1-2-1-2h1l3 6 6 7a9 9 0 011-3 21 21 0 01-6-8 8 8 0 00-1-2h1v1l1 2v-2-1l1 2v-2l1 1v-1-1h1v0h1v-1h1l1 2-1-3h1v-1 1l1 1v-1a19 19 0 015 8l-6 3zm12 19c-9-6-14-13-10-17l1-1 2-1h0l-2 1h2l1-1v1h-1l-2 1 2-1h1l-1 1-2 1a13 13 0 013-1l-2 1c-2 3 1 9 9 13s16 6 18 3l1-1v-2-1a9 9 0 00-1-1 6 6 0 001 1l1 3v-3l-1-1v-1l1 2 1 2-1-2a6 6 0 00-1-2h1a22 22 0 002 3l-1 4c-4 5-13 4-22-1zm42 4l-2 1a39 39 0 01-17 0h1l-2-1 2 1 4-1h-6l1-1 1 1h3l-3-1h-1 4a36 36 0 0010 0h-1 3l1-1 1 1h-2l-2 1 2-1h2l2 1h-1zm20-7c-9 6-19 6-22 2l-1-2 1-2v-2 3a9 9 0 001-2v1-1h1l-1 1 1 2v-1 2c2 2 10 2 18-3s11-11 9-13l-2-1v-1h1l2 2v-1l-2-1-1-1h2l2 2-2-2-2-1v-1 1h1l3 2-2-2 3 2c3 5-1 12-10 17zm12-18c-1-2-4-3-7-3l2-5 3-5c1 2 3 3 5 3h3l-2 5-3 6-1-1zm9-3c-2 5-5 8-8 11v-4a25 25 0 008-15v2l1-2 1-1-1 2-1 3 2-3v-2 1l-1 3 1-3a337 337 0 001-2c-1 3-1 7-3 10zm13-24c-2 9-13 16-18 15l-3-1v-1-1 1l1 1v-1l-1-1h1v1l1 1-1-1v-1h1v-1 1l1 1v-1-1 1h1v1c3 0 13-5 15-13s1-16-1-16h-1l1-1h1-1l-1 1a7 7 0 012-2h-1l-1 1 1-1 1-1h-1l-1 1 1-1h1c3 1 4 10 2 19zm-2-12l-1 1-1-3h1l1 2zm33-1c0-9-6-26 3-33-9 6-5 24-5 33h-4c7-15-1-26-1-26s6 10-1 26h1-4c5-12 0-20 0-20s3 7-2 20h-3c4-11 1-16 1-16s1 5-3 16h-3a39 39 0 001-9l-1 3-2 6-4 1c2-4 4-8 4-12-1-9-5-14-8-17v2a16 16 0 012 2l1 3v-1l3 11-3 10 1-2v-4l-1 4-1 2v-1l1-2 1-3-1 3-1 2v-1l1-2v-3-1 3a31 31 0 01-1 0l1-5c0-6-1-9-3-12v4a26 26 0 011 10v2l-3-2-3 1v-4l2-9v-3c-2 2-3 6-3 12 0 9 1 16 3 16l-1 1 1-1h1l-1 1h-1 2v1l-1-1h-1v1h1-1l1 1h1-2c-2 0-4-9-5-19 0-5 2-10 3-13l1-1h1v-1h1v-3c-4 1-8 9-8 18a59 59 0 001 10l-1 3v-2l-1-4v-4 4l-1 4v2h-2l-2-19v19l-2-1-2-20v20h-3v-23s1 5-1 22h-1-1c1-20-2-25-2-25s3 5 0 25l-2-1 1-34a22 22 0 009 0h15c7 1 9 2 22 1h4l19-1c-12 8-5 24-6 35l-2 1z'/%3E%3C/svg%3E%0A"
					style={{ alignSelf: 'flex-end' }}
				/>
			</Flex>
		</Flex>
	)
}
