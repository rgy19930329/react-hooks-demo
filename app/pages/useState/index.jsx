/**
 * @desc useState
 * @author ranguangyu
 * @date 2020-2-1
 */

import React, { useState } from "react";
import { Section } from "@nice/nice-ui";
import { Button } from "antd";
 
function Counter({ initialCount }) {
	const [count, setCount] = useState(initialCount);
	return (
		<React.Fragment>
			<div>Count: {count}</div>
			<Button onClick={() => setCount(initialCount)}>Reset</Button>
			<Button onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
			<Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
		</React.Fragment>
	);
}

export default class Demo extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h1>useState</h1>

				<Section>
					<Counter initialCount={100} />
				</Section>
			</React.Fragment>
		)
	}
}
