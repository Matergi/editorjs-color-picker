import { API } from '@editorjs/editorjs';
import { IconColor } from '@codexteam/icons';

import './styles.css';

type ColorPickerConfig = {
	colors: string[];
	columns: number;
};

interface ConstructorArgs {
	api: API;
	config: ColorPickerConfig;
}

export default class ColorPicker implements EditorJS.InlineTool {
	private api: API;

	tag = 'SPAN';
	class = 'cdx-text-color';
	defaultColor = '#2644FF';

	lastRange: Range | null = null;

	colors: string[] = [
		'#182a4e',
		'#0055cc',
		'#1f6a83',
		'#206e4e',
		'#e56910',
		'#ae2e24',
		'#5e4db2',
		'#758195',
		'#1e7afd',
		'#2998bd',
		'#23a06b',
		'#fea363',
		'#c9372c',
		'#8270db',
	];
	columns = 7;

	static get title() {
		return 'Color';
	}

	static get isInline() {
		return true;
	}

	constructor(args: ConstructorArgs) {
		const { api, config } = args;
		this.api = api;

		if (config.colors) {
			this.colors = config.colors;
		}
		if (config.columns) {
			this.columns = config.columns;
		}
	}

	render() {
		const button = document.createElement('button');

		button.type = 'button';
		button.innerHTML = IconColor;
		button.classList.add(this.api.styles.inlineToolButton);

		button.addEventListener('mousedown', (e) => {
			// prevent text deselection when clicking the button
			e.preventDefault();
		});

		return button;
	}

	surround(range: Range | null) {
		this.lastRange = range;
	}

	wrapAndColor(range: Range | null, color: string) {
		if (!range) {
			return;
		}
		const selectedText = range.extractContents();
		const span = document.createElement(this.tag);
		span.classList.add(this.class);
		span.appendChild(selectedText);
		span.style.color = color;
		span.innerHTML = span.textContent || '';
		range.insertNode(span);

		this.api.selection.expandToTag(span);
	}

	renderActions() {
		const container = document.createElement('div');
		container.classList.add('editorjs__color-selector-container');
		container.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;

		this.colors.forEach((colorValue) => {
			const color = document.createElement('div');
			color.classList.add('editorjs__color-selector__container-item');
			color.style.backgroundColor = colorValue;
			color.onclick = () => {
				this.wrapAndColor(this.lastRange, colorValue);
			};
			container.append(color);
		});

		return container;
	}

	/**
	 * Sanitizer rules
	 *
	 * @returns {object}
	 */
	static get sanitize(): any {
		return {
			span: {
				style: {
					color: true,
				},
			},
		};
	}
}

export class ColorPickerWithoutSanitize extends ColorPicker {
	static override get sanitize() {
		return undefined;
	}
}
