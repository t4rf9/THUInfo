import Svg, {Path} from "react-native-svg";
import React from "react";
import {svgGenerator} from "../../utils/svgGenerator";

export default svgGenerator((width, height, colors) => (
	<Svg viewBox="0 0 1024 1024" width={width} height={height}>
		<Path
			fill={colors.green}
			d="M397.76,579.5c11.55,35.01 43.63,34.98 55.15,0 3.78,-1.97 7.68,-7.9 8.3,-12.78 0.67,-5.09 0.29,-11.94 -4.86,-11.94 -1.14,-16.4 -10.13,-30.32 -30.59,-30.32 -20,0 -30.19,12.06 -31.44,30.32 -5.17,0 -5.55,6.85 -4.88,11.94 0.66,4.88 4.54,10.82 8.32,12.78z"
		/>
		<Path
			fill={colors.green}
			d="M471.89,780.32v-12.21c13.39,0 24.26,-10.86 24.26,-24.26v-0.83l94.34,-94.34a6.5,6.5 0,0 0,0 -9.22,6.46 6.46,0 0,0 -9.2,0l-85.12,85.09v-80.34c0,-17.49 -12.75,-32.59 -30.59,-36.34l-13.02,-2.69 -27.17,54.1 -27.17,-54.1 -13.02,2.69c-17.84,3.71 -30.58,18.86 -30.58,36.34v99.66c0,13.39 10.85,24.26 24.24,24.26v12.22h93.06v-0.05z"
		/>
		<Path
			fill={colors.green}
			d="M277.68,696.4a67.52,67.52 0,0 0,67.42 67.46h0.78a38.16,38.16 0,0 1,-5.68 -20v-9.23a38.67,38.67 0,0 1,-33.79 -38.26v-183.36a38.75,38.75 0,0 1,38.69 -38.7h321.97a38.75,38.75 0,0 1,38.72 38.7v183.39a38.77,38.77 0,0 1,-38.72 38.72H524.32l-14.35,14.35a39.26,39.26 0,0 1,-5.58 14.35h162.69a67.57,67.57 0,0 0,67.46 -67.47v-183.36a67.54,67.54 0,0 0,-67.46 -67.46H345.14a67.52,67.52 0,0 0,-67.44 67.46l-0.02,183.41zM372.14,803.98h-50.32a44.13,44.13 0,0 0,-44.14 44.13v58.3h138.59v-58.3a44.1,44.1 0,0 0,-44.13 -44.13zM532.05,803.98h-50.32a44.11,44.11 0,0 0,-44.14 44.13v58.3h138.61v-58.3a44.13,44.13 0,0 0,-44.14 -44.13zM691.97,803.98h-50.32a44.13,44.13 0,0 0,-44.16 44.13v58.3h138.56v-58.3a44.03,44.03 0,0 0,-44.08 -44.13z"
		/>
		<Path
			fill={colors.dark}
			d="M987.78,440.88a22.3,22.3 0,0 0,-1.86 -2l-90.86,-86.66 0.03,-0.53L532.69,6.62a23.09,23.09 0,0 0,-32.14 -0.21L36.46,438.69a21.44,21.44 0,0 0,-2.1 2.22C22.53,454.9 16,473.44 16,492.99c0,41.33 29.31,74.91 65.36,74.91L103.68,567.9v428.78c0,14.66 10.99,26.5 24.48,26.5h771.65c13.54,0 24.5,-11.84 24.5,-26.5L924.3,567.9L940.8,567.9c36.03,0 65.38,-33.6 65.38,-74.91 0.02,-19.58 -6.51,-38.1 -18.4,-52.11zM907.5,516.83h-30.08c-1.86,0 18.34,-1.71 16.51,-1.25 -1.74,-0.46 -20.54,1.78 -22.43,1.78 -13.54,0 -27.5,-0.64 -27.5,14l2,426.82h-656l-1.33,-416.82c0,-14.66 -10.99,-26.54 -24.48,-26.54L117.36,514.82c-8.9,0 -16.38,-10 -16.38,-21.84 0,-5.84 1.68,-11.22 4.78,-15.34L514,93.36 919.02,479.52c3.12,4.16 4.88,9.6 4.88,15.44 -0.03,11.87 -7.54,21.87 -16.4,21.87z"
		/>
	</Svg>
));
