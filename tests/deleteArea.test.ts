import {deleteArea} from '../function';
import {Editor} from '../type';

describe('deleteArea function', () => {
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
                }
            }
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
            selectedObject:null,
            state: null
        };

        // @ts-ignore
        expect(deleteArea(editor)).toStrictEqual(lastEditor);
    });
})