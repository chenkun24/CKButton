# CKButton

A button component looks like native UIButton for React Native.

## Usage

```
var CKButton = require('./CKButton');

var Example = React.createClass({

    render: function() {
      return(
        <CKButton onPress = {()=>{console.log('Pressed.')}}/>
      );
    }
});

module.exports = Example;
```

## Props

It supports:

- disabled
- title
- titleHighlighted
- titleStyle
- titleStyleHighlighted
- titleStyleDisabled
- imageSource
- imageSourceHighlighted
- imageSourceDisabled
- onPress

And every properties are optional.

## Feedback

Every feedbacks are welcome.