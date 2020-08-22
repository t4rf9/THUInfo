import Svg, {Path} from "react-native-svg";
import React from "react";
import {svgGenerator} from "../../utils/svgGenerator";

export default svgGenerator((width, height, colors) => (
	<Svg viewBox="0 0 1024 1024" width={width} height={height}>
		<Path
			d="M1014.27,943.62L898.05,824.32c33.79,-39.42 54.27,-92.16 54.27,-149.5 0.51,-124.93 -98.3,-226.82 -219.65,-226.82s-220.16,101.89 -220.16,226.82 98.3,226.82 220.16,226.82c43.01,0 83.97,-13.31 118.27,-35.84 0,0 0.51,0.51 0.51,1.54l118.78,122.37c12.29,12.29 32.77,12.29 44.54,0 12.29,-13.31 12.29,-33.79 -0.51,-46.08zM730.11,854.53c-119.3,0 -210.43,-116.74 -165.89,-242.69 16.38,-46.59 54.27,-84.48 100.86,-100.86 125.44,-44.54 242.69,46.59 242.69,165.89 0.51,97.79 -79.36,177.66 -177.66,177.66z"
			fill={colors.blue}
		/>
		<Path
			d="M476.16,909.82H129.54c-71.68,0 -129.54,-58.37 -129.54,-129.54V194.56c0,-71.68 58.37,-129.54 129.54,-129.54h698.88c71.68,0 129.54,58.37 129.54,129.54v194.05c0,19.46 -9.73,36.86 -26.62,47.1 -16.38,10.24 -36.35,10.24 -53.25,1.54 -63.49,-33.79 -138.24,-41.47 -210.43,-22.02 -91.14,25.09 -162.82,96.26 -187.9,186.37 -23.04,82.94 -10.75,166.4 34.82,234.5 9.73,14.85 10.75,33.79 2.56,49.66 -8.19,14.85 -23.55,24.06 -40.96,24.06zM129.54,107.52C81.92,107.52 43.01,146.43 43.01,194.56v585.73c0,47.62 38.91,86.53 86.53,86.53H476.16c3.58,-2.56 4.61,-4.61 3.07,-7.17 -52.22,-78.85 -66.56,-174.59 -40.45,-269.82 29.18,-104.45 112.64,-187.39 218.11,-216.58 82.94,-22.53 168.96,-13.82 241.66,25.6 5.12,2.56 9.22,1.02 11.26,-0.51 1.54,-1.02 5.63,-4.1 5.63,-10.24V194.56c0,-47.62 -38.91,-86.53 -86.53,-86.53H129.54z"
			fill={colors.dark}
		/>
		<Path
			d="M429.57,306.18H160.26c-18.43,0 -33.79,-15.36 -33.79,-33.79 0,-18.43 15.36,-33.79 33.79,-33.79h269.31c18.43,0 33.79,15.36 33.79,33.79 0,18.43 -15.36,33.79 -33.79,33.79z"
			fill={colors.dark}
		/>
		<Path
			d="M272.9,429.06h-112.64c-18.43,0 -33.79,-15.36 -33.79,-33.79 0,-18.43 15.36,-33.79 33.79,-33.79h112.13c18.43,0 33.79,15.36 33.79,33.79 0.51,18.43 -14.85,33.79 -33.28,33.79z"
			fill={colors.dark}
		/>
	</Svg>
));
