import React from "react";

export class Filter extends React.Component {
  render() {
    return (
      <>
        <p>Find contact by name</p>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </>
    );
  }
}
