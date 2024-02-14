import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import image from "./occupied.png" 
import image1 from "./initial.png"
import image2 from "./warning.png"
import axios from 'axios';
import  { useState, useEffect } from 'react'; 
const API_URL = 'https://libapps.tamucc.edu/api-staging/liblayout/read_Avail_Angular.php?param=ER';

const ReactGridLayout = WidthProvider(RGL);

export default class GridsterExample extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    // items: 20,
    minCols: 56,
    maxCols: 56,
    minRows: 30,
    maxRows: 40,
    fixedColWidth: 25,
    fixedRowHeight: 35,
    // onLayoutChange: function() {},
    // cols: 12
  };

  constructor(props) {
    super(props);
    this.state = {
        posts: []
      };
    const layout = this.generateLayout();
    this.state = { layout };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(API_URL);
      const { data } = response;
      this.setState({ posts: data.data });
      console.log(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  generateLayout() {
    const p = this.props;
    console.log(p);
    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString()
      };
    });
  }

//   onLayoutChange(layout) {
//     this.props.onLayoutChange(layout);
//   }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

if (process.env.STATIC_EXAMPLES === true) {
  import("./test-hook.jsx").then(fn => fn.default(GridsterExample));
}