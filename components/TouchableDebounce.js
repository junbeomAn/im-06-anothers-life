import React from 'react';
import { TouchableHighlight, Text, View } from "react-native";
import { debounce } from "./debounceFunction";

class TouchableDebounce extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        style={this.props.style}
        //activeOpacity={this.props.activeOpacity}
        onPress={debounce(() => {
          this.props.onPress();
        }, 500)} //wait period in miliseconds
      >
        {this.props.children}
      </TouchableHighlight>
    );
  }
}

export default TouchableDebounce;