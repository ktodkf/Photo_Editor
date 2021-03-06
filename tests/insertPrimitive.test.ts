import {insertPrimitive} from '../function';
import {Editor, position, triagle} from '../type';

describe('insertPrimitive function', () => {
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
            selectedObject: null,
            state: null
        };
        const triagle: triagle = {
            point1:{
                    x: 10,
                    y: 20
            },
            point2: {
                x: 20,
                y: 30
            },
            point3: {
                x: 30,
                y: 40
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
            selectedObject: {...triagle},
            state: null
        };
        // @ts-ignore
        expect(insertPrimitive(editor, triagle)).toStrictEqual(lastEditor);
    });
})