export default {
	baseStyle: {
		fontFamily: 'Button',
		lineHeight: '0px',
		borderRadius: '4px',
		_focus: {
			boxShadow: '0 0 0 3px rgba(206, 150, 0, 0.6)',
		},
	},
	variants: {
		solid: () => ({
			color: 'rgb(17, 13, 1)',
			bg: '#ffbf00',
			_hover: {
				bg: '#fcc41c',
			},
			_active: {
				bg: '#ffcf40',
			},
			_disabled: {
				bg: 'transparent',
			},
		}),
		outline: () => ({
			color: '#ffbf00',
			borderColor: '#ffbf00',
			_hover: {
				color: 'rgb(17, 13, 1)',
				bg: '#ffbf00',
			},
			_active: {
				bg: '#ffcf40',
			},
			_disabled: {
				bg: 'transparent',
			},
		}),
	},
}