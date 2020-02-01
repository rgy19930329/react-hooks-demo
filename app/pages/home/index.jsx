/**
 * @desc home
 * @author ranguangyu
 * @date 2020-2-1
 */

import "./index.less";
import React from "react";
import { Section } from "@nice/nice-ui";

let list = [];
const req = require.context("@pages", true, /^\.\/[^_][\w-]+\/index\.jsx?$/);
req.keys().forEach(mod => {
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.jsx?$/);
	match && list.push(match[1]);
});

export default class Home extends React.Component {
	render() {
		return (
			<div className="page-home">
				<h1>Welcome to Home</h1>

				<Section title="routes">
					{list.map(item => {
						return (
							<div key={item}><a href={`#/${item}`}>{item}</a></div>
						)
					})}
				</Section>
			</div>
		)
	}
}
