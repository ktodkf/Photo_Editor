import {changeTextColor} from '../function';
import {Editor, color, text} from '../type';

describe('changeTextColor function', () => {
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
        const color: color = {
            r: 60,
            g: 50,
            b: 10,
            a: 0.5
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
                    y:50
                },
                size: {
                    width: 10,
                    height: 10
                },
                color:{...color}
            },
            state:null
        };
        // @ts-ignore
        expect(changeTextColor(editor, color)).toStrictEqual(lastEditor);
    });
})