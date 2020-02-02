/**
 * @desc useState
 * @author ranguangyu
 * @date 2020-2-1
 */

import React, { useState, useEffect } from "react";
import { Section, HOCDebounce } from "ky-nice-ui";
import { fetch } from "ky-nice-utils";
import { Button, Spin, Input } from "antd";
import debounce from "lodash.debounce";

const DebounceInput = HOCDebounce(Input);

export default function List() {
	const [loaded, setLoaded] = useState(false);
	const [list, setList] = useState([]);

	/**
	 * 第二个参数传空数组时，与componentDidMount等价；
	 * 不传第二个参数，等价于componentDidMount和componentDidUpdate
	 */
	useEffect(() => {
		dataLoad();
	}, []);

	async function dataLoad() {
		let result = await fetch.get("/example/todolist");
		if (result.code === "0000") {
			setList(result.data.list || []);
			setLoaded(true);
		}
	}

	const [state, setState] = useState({
		suggests: [],
		value: "",
		searching: false,
	});

	/**
	 * 第二个参数不传空数组时，useEffect中的回调方法将会在第二个参数数组中的元素发生变化时执行
	 * 类似于componentDidUpdate的作用
	 */
	useEffect(() => {
		doSearch(state.value);
	}, [state.value]);

	async function doSearch(value) {
		if (!value) {
			setState(prevState => ({ ...prevState, suggests: [] }));
			return;
		}
		setState(prevState => ({ ...prevState, searching: true }));
		let result = await fetch.get("/sug", { code: "utf-8", q: value });
		setState(prevState => ({
			...prevState,
			suggests: result.result || [],
			searching: false,
		}));
	}

	return (
		<React.Fragment>
			<h1>useEffect</h1>

			<Section>
				<div>Count: {list.length}</div>
				{loaded
					? list.map((item, index) => {
						return (
							<div key={index}>{item.desc}</div>
						)
					})
					: <Spin />
				}
			</Section>

			<Section>
				<div>
					<DebounceInput
						style={{ width: 300 }}
						placeholder="请输入关键字进行搜索"
						value={state.value}
						onChange={value => {
							setState(prevState => ({ ...prevState, value }));
						}}
						debounceTime={1000}
					/>
				</div>
				<div>Count: {state.suggests.length}</div>
				{state.suggests.map((item, index) => {
					return (
						<div key={index}>{item[0]}</div>
					)
				})}
			</Section>
		</React.Fragment>
	);
}
