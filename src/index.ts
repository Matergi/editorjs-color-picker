import { API } from '@editorjs/editorjs';
import { IconColor } from '@codexteam/icons';
import './styles.css';

type TextColorConfig = {
	colors: string[];
	columns: number;
};

/**
 * @description Constructor arguments for Header
 */
interface ConstructorArgs {
	/** Editor.js API */
	api: API;
	config: TextColorConfig;
}

/**
 * @typedef {Object} DelimiterData
 * @description Tool's input and output data format
 */
export default class TextColor implements EditorJS.InlineTool {
	/**
	 * Editor.js API
	 * @private
	 */
	private api: API;

	private button?: HTMLButtonElement = undefined;

	tag = 'SPAN';
	class = 'cdx-text-color';
	defaultColor = '#2644FF';

	changed?: boolean = false;
	lastRange: Range | null = null;

	currentSpan: HTMLElement | null = null;

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
		this.button = document.createElement('button');

		this.button.type = 'button';
		this.button.innerHTML = IconColor;
		this.button.classList.add(this.api.styles.inlineToolButton);
		// this.button?.classList.toggle(this.api.styles.inlineToolButtonActive, state);

		return this.button;
	}

	surround(range: Range | null) {
		this.lastRange = range;
		if (!this.changed) {
			return;
		}
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
		const gap = 5;
		const container = document.createElement('div');
		container.style.display = 'grid';
		container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(30px, 1fr))';
		container.style.gap = `${gap}px`;
		container.style.width =
			this.colors.length > this.columns
				? `${30 * this.columns + gap * (this.columns - 1)}px`
				: `${30 * this.colors.length + gap * (this.colors.length - 1)}px`;

		this.colors.forEach((colorValue) => {
			const color = document.createElement('div');
			color.style.width = '30px';
			color.style.height = '30px';
			color.style.cursor = 'pointer';
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
	static get sanitize() {
		return {
			span: {
				style: {
					color: true,
				},
			},
		};
	}
}
