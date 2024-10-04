# Color Picker Tool for Editor.js

https://github.com/user-attachments/assets/61d6a8d5-8fd6-4066-9d7d-e8ec7015e41a

## Installation

Get the package

```shell
yarn add editorjs-color-picker
```

Include module at your application

```javascript
import ColorPicker from 'editorjs-color-picker';
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
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

## Config Params

The Paragraph Tool supports these configuration parameters:

| Field   | Type       | Description                                         |
| ------- | ---------- | --------------------------------------------------- |
| colors  | `string[]` | (there are default colors) Array of colors you want |
| columns | `number`   | (default: `7`) Number of columns to display         |
