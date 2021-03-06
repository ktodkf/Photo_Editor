import {insertText} from '../function';
import {Editor, text} from '../type';

describe('insertText function', () => {
    test('returns Editor', () => {
        const editor: Editor = {
            canvas: {
                filter: null,
                width: 100,
                height: 100,
                data: {
                    width: 100,
                    height: 100
                }
            },
            state: null,
            selectedObject: {
                position: {
                    x: 10,
                    y: 50
                },
                size: {
                    width: 10,
                    height: 10
                },
                color: {
                    r: 1,
                    g: 20,
                    b: 150,
                    a: 1
                }
            }
        };
        const text: text = {
            position: {
                x: 10,
                y: 20
            },
            size: {
                width: 20,
                height: 10
            },
            color: {
                r: 10,
                g: 30,
                b: 20,
                a: 1
            }
        };
        const lastEditor: Editor = {
            canvas: {
                filter: null,
                height: 100,
                width: 100,
                data: {
                    width: 100,
                    height: 100
                }
            },
            selectedObject: {
                position: {
                    x:10,
                    y:20
                },
                size: {
                    width: 20,
                    height: 10
                },
                color:{
                    r: 10,
                    g: 30,
                    b: 20,
                    a: 1
                }
            },
            state:null
        };
        // @ts-ignore
        expect(insertText(editor, text)).toStrictEqual(lastEditor);
    });
})