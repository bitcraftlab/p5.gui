# p5.gui

**p5.gui** magically generates a graphical user interface (sliders, color selector, etc) for each of your variables. Behind the scenes it uses other libraries such as Quicksettings (and in the future also DAT.GUI) to do all the hard work.

You currently need to include both `p5.gui.js` and `quicksettings.js` in your p5.js sketch.

## Usage

See the examples for how to use it!

Create a new GUI:

	var gui = createGui('Label');

Add gui elements for your variables:  

	gui.addGlobals('my_variable','my_other_variable', ...);

You can also use the `colorMode()` functions to change the default color mode used to interpret colors and `sliderRange()` to change the default range used when creating sliders.

## Examples

* [Quicksettings 1](https://bitcraftlab.github.io/p5.gui/examples/quicksettings-1/)
* [Quicksettings 2](https://bitcraftlab.github.io/p5.gui/examples/quicksettings-2/)


## Licensing

`p5.gui` is licensed under the MIT License.

This repo also includes code from other libraries:  
* [p5.js](https://github.com/processing/p5.js) is licensed under LGPL 2.1
* [DAT.GUI](https://github.com/dataarts/dat.gui) is licensed under Apache 2.0
* [Quicksettings.js](https://github.com/bit101/quicksettings) is licensed under MIT
