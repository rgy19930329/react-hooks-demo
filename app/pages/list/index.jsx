/**
 * @desc 页面 - List
 * @author rgy
 * @date 2019-07-25 11:21:40
 */

import React from "react";
import { Section, fetch } from "@nice/nice-ui";

export default class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    this.dataLoad();
  }

  dataLoad = async () => {
    let result = await fetch("/yapi/list");
    const list = result.data || [];
    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="page-list-wrapper">
        <h1>List</h1>
        <Section title="系统配置-列表">
          {list.map(item => {
            return (
              <div key={item.email}>
                <a href={`#/list/detail/${item.email}`}>{item.email}</a>
              </div>
            )
          })}
        </Section>
      </div>
    )
  }
}
