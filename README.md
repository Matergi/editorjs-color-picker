# Color Picker Tool for Editor.js

https://github.com/user-attachments/assets/780b3856-26d8-44af-95d7-9c703211fcd4

## Installation

Get the package

```shell
yarn add editorjs-color-picker
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
import ColorPicker from 'editorjs-color-picker';

var editor = new EditorJS({
  ...

  tools: {
    ...
    ColorPicker: {
      class: ColorPicker,
    },
  }

  ...
});
```

If you don't want the text to retain its colors every time you copy and paste it into the editor, you can use the ColorPickerWithoutSanitize class.

```javascript
import { ColorPickerWithoutSanitize } from 'editorjs-color-picker';

var editor = new EditorJS({
  ...

  tools: {
    ...
    ColorPicker: {
      class: ColorPickerWithoutSanitize,
    },
  }

  ...
});

## Config Params

The Paragraph Tool supports these configuration parameters:

| Field   | Type       | Description                                         |
| ------- | ---------- | --------------------------------------------------- |
| colors  | `string[]` | (there are default colors) Array of colors you want |
| columns | `number`   | (default: `7`) Number of columns to display         |
```
