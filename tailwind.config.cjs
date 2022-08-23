/**
 * @type {import("tailwindcss").Config}
 */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				nighty: ["Nighty DEMO", "serif"],
				ranille: ["Ranille Normal", "serif"],
				nunito: ["Nunito", "sans"]
			},
			colors: {
				lightblue: {
					light: "#88AEDC",
					DEFAULT: "#4079BD"
				},
				lime: {
					DEFAULT: "#ACD7A2"
				},
				green: {
					DEFAULT: "#26AF79",
					light: "#72C6A4"
				},
				yellow: {
					DEFAULT: "#FCDF98"
				},
				sky: {
					DEFAULT: "#5AC7D8",
					light: "#8AD4E0"
				},
				coral: {
					DEFAULT: "#F15F72"
				},
				purple: {
					DEFAULT: "#6F1E5E",
					light: "#BF3D96"
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
