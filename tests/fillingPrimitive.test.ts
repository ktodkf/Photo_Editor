import {fillingPrimitive} from '../function';
import {Editor, rectangle, color} from '../type';


describe('fillingPrimitive function', () => {
    test('returns Editor', () => {
        const editor: Editor = {
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
                    y: 20
                },
                size: {
                    height: 10,
                    width: 10
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
        const color: color = {
            r: 150,
            g: 255,
            b: 140,
            a: 1
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
                    y: 20
                },
                size: {
                    width: 10,
                    height: 10
                },
                color : {...color}
            },
            state: null
        };

        // @ts-ignore
        expect(fillingPrimitive(editor, color)).toStrictEqual(lastEditor);
    });
})