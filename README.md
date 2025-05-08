# Color Picker Tool for Editor.js

https://github.com/user-attachments/assets/c22b0e96-a0a2-4187-ba7a-0e8be3cfe9d1

## Installation

You can install the package via npm or yarn:

```shell
yarn add editorjs-color-picker
```

Alternatively, you can use the CDN version.

```html
<script src="https://cdn.jsdelivr.net/npm/editorjs-color-picker@1.0.8/dist/index.umd.js"></script>
```

## Usage

### Using with a Package

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
import ColorPicker from 'editorjs-color-picker';

const editor = new EditorJS({
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

If you don't want the text to retain its colors every time you copy and paste it into the editor, you can use the `ColorPickerWithoutSanitize` class.

```javascript
import { ColorPickerWithoutSanitize } from 'editorjs-color-picker';

const editor = new EditorJS({
  ...

  tools: {
    ...
    ColorPicker: {
      class: ColorPickerWithoutSanitize,
    },
  }

  ...
});
```

### Using with CDN

If you're using the CDN, you can access the tool via `window.ColorPicker.default` or `window.ColorPicker.ColorPickerWithoutSanitize`.

```html
<script src="https://cdn.jsdelivr.net/npm/editorjs-color-picker@1.0.8/dist/index.umd.js"></script>

<script>
	const { ColorPicker } = window;
	const editor = new EditorJS({
	  ...

	  tools: {
	    ...
	    ColorPicker: {
	      class: ColorPicker.default,  // or ColorPicker.ColorPickerWithoutSanitize
	    },
	  }

	  ...
	});
</script>
```

## Config Params

The Paragraph Tool supports these configuration parameters:

| Field   | Type       | Description                                         |
| ------- | ---------- | --------------------------------------------------- |
| colors  | `string[]` | (there are default colors) Array of colors you want |
| columns | `number`   | (default: `7`) Number of columns to display         |

## Issues with Copy and Paste

If you copy and paste text with a different background color, it adopts the style of the `<span>`.  
The only solution I’ve found so far, without modifying the paragraph component and its onPaste handler, is to apply this style.  
For now, I’m only attaching it here without adding it to the library, as it might interfere with other plugins.  
So, anyone interested should try applying this style:

```css
.ce-paragraph span {
	background-color: unset !important;
}
```

If anyone finds a more elegant solution, can open a PR, and we’ll fix it.
