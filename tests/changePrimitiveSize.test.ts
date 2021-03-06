import {changePrimitiveSize} from '../function';
import {Editor, size} from '../type';

describe('changePrimitiveSize function', () => {
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
        const size: size = {
            width: 50,
            height: 30
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
                    x: 10,
                    y: 20,
                },
                size: {...size},
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
        expect(changePrimitiveSize(editor, size)).toStrictEqual(lastEditor);
    });
})