'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  PropTypes,
  Text,
  Image,
} = React;

var CKButton = React.createClass({
  propTypes: {

    disabled: PropTypes.bool,

    title: PropTypes.string,
    titleHighlighted: PropTypes.string,
    titleDisabled: PropTypes.string,

    titleStyle: PropTypes.style,
    titleStyleHighlighted: PropTypes.style,
    titleStyleDisabled: PropTypes.style,

    imageSource: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string,
      }),
      // Opaque type returned by require('./image.jpg')
      PropTypes.number,
    ]),

    imageSourceHighlighted: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string,
      }),
      // Opaque type returned by require('./image.jpg')
      PropTypes.number,
    ]),

    imageSourceDisabled: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string,
      }),
      // Opaque type returned by require('./image.jpg')
      PropTypes.number,
    ]),

    onPress: PropTypes.func,
  },

  getDefaultProps: function() {
    return {

      disabled: false,

      title: 'CKButton',

      titleStyle: {color:'#0077ff'},
      titleStyleHighlighted: {color:'#c5e5fa'},
      titleStyleDisabled: {color:'#c5e5fa'},
    };
  },

  getInitialState: function() {
    return {
      highlighted: false,
    };
  },

  _onPressIn: function() {
    this.setState({highlighted:true});
  },
  _onPressOut: function() {
    this.setState({highlighted:false});
  },
  
  render: function() {

    var titleHighlighted = this.props.titleHighlighted || this.props.title;
    var titleDisabled = this.props.titleDisabled || this.props.title;

    var title, titleStyle, imageSource;

    if (this.props.disabled) {
      title = titleDisabled;
      titleStyle = this.props.titleStyleDisabled;
      imageSource = this.props.imageSourceDisabled;
    } else {
      title = this.state.highlighted ? titleHighlighted : this.props.title;
      titleStyle = this.state.highlighted ? this.props.titleStyleHighlighted : this.props.titleStyle;
      imageSource = this.state.highlighted ? this.props.imageSourceHighlighted : this.props.imageSource;
    }

    imageSource = imageSource || this.props.imageSource;

    var touchableOpacityProps = {
      activeOpacity: 1,
    };
    if (!this.props.disabled) {
      touchableOpacityProps.onPressIn = this._onPressIn;
      touchableOpacityProps.onPressOut = this._onPressOut;
      if (this.props.onPress)
        touchableOpacityProps.onPress = this.props.onPress;
    }

    return(
      <TouchableOpacity {...touchableOpacityProps} style={[styles.container, this.props.style]}>
        <Image source={imageSource} style={styles.image} resizeMode={Image.resizeMode.stretch}>
          <Text suppressHighlighting={false} style={[styles.text, titleStyle]} numberOfLines={1}>
            {title}
          </Text>
        </Image>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    height: 36,
    flex:1,
  },
  text: {
    fontSize:24,
    backgroundColor:'rgba(0,0,0,0)',
  },
  image: {
    flex:1,
    resizeMode: 'stretch',
    width:null,
    height:null,
    alignItems:'center',
    justifyContent:'center',
  },
});

module.exports = CKButton;
