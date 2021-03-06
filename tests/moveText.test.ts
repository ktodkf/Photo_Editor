import {moveText} from '../function';
import {Editor, color, text, position} from '../type';

describe('moveText function', () => {
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
                    y: 30
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
        const position: position = {
            x: 40,
            y: 50
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
                    x:40,
                    y:50
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
            },
            state:null
        };
        // @ts-ignore
        expect(moveText(editor, position)).toStrictEqual(lastEditor);
    });
})