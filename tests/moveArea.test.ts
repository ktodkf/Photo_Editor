import {moveArea} from '../function';
import {area, Editor, position} from '../type';

describe('moveArea function', () => {
    test('returns Editor', () => {
        const area: area = {
            position: {
                x: 0,
                y: 0
            },
            size: {
                width: 10,
                height: 10
            }
        }
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
            selectedObject: {...area}
        };
        const position: position = {
            x: 15,
            y: 20
        };
        const lastEditor: Editor = {
            canvas: {
                filter: null,
                width: 100,
                height: 100,
                data: {
                    width: 100,
                    height: 100
                }
            },
            selectedObject:{
                position:{
                    x:15,
                    y:20
                },
                size:{
                    width:10,
                    height:10
                }
            },
            state: null
        };
        // @ts-ignore
        expect(moveArea(editor, position)).toStrictEqual(lastEditor);
    });
})