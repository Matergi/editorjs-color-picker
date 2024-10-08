import { API } from '@editorjs/editorjs';
type ColorPickerConfig = {
    colors: string[];
    columns: number;
};
interface ConstructorArgs {
    api: API;
    config: ColorPickerConfig;
}
export default class ColorPicker implements EditorJS.InlineTool {
    private api;
    tag: string;
    class: string;
    defaultColor: string;
    lastRange: Range | null;
    colors: string[];
    columns: number;
    static get title(): string;
    static get isInline(): boolean;
    constructor(args: ConstructorArgs);
    render(): HTMLButtonElement;
    surround(range: Range | null): void;
    wrapAndColor(range: Range | null, color: string): void;
    renderActions(): HTMLDivElement;
    /**
     * Sanitizer rules
     *
     * @returns {object}
     */
    static get sanitize(): any;
}
export declare class ColorPickerWithoutSanitize extends ColorPicker {
    static get sanitize(): undefined;
}
export {};
