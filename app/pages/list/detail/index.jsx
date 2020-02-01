/**
 * @desc 页面 - Detail
 * @author rgy
 * @date 2019-08-09 16:21:02
 */

import "./index.less";
import React from "react";
import { fetch } from "@nice/nice-ui";

export default class Detail extends React.Component {

  constructor(props) {
    super(props);

    const {
      match: {
        params: { email }
      }
    } = props;

    this.state = {
      data: {},
      email,
    }
  }

  componentDidMount() {
    this.dataLoad();
  }

  dataLoad = async () => {
    let result = await fetch("/yapi/detail");
    this.setState({ data: result.data });
  }

  render() {
    const { data, email } = this.state;
    return (
      <div className="page-detail-wrapper">
        <h1>Detail</h1>
        <div>
          <div>email: {email}</div>
          <div>name: {data.name}</div>
          <div>age: {data.age}</div>
          <div>content: {data.content}</div>
        </div>
      </div>
    )
  }
}
