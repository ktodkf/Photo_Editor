import {changePrimitivePosition} from '../function';
import {Editor, triagle, position} from '../type';

describe('changePrimitivePosition function', () => {
    test('returns Editor', () => {
        const position: position = {
            x: 30,
            y: 50
        };
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
            selectedObject : {
                position: {
                    x: 10,
                    y: 20
                },
                size: {
                    width: 10,
                    height: 10
                },
                color: {
                    r: 40,
                    g: 50,
                    b: 60,
                    a: 1
                }
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
                position: {...position},
                size: {
                    width: 10,
                    height: 10
                },
                color: {
                    r: 40,
                    g: 50,
                    b: 60,
                    a: 1
                }
            },
            state: null
        };

        // @ts-ignore
        expect(changePrimitivePosition(editor, position)).toStrictEqual(lastEditor);
    });
})