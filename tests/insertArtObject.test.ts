import {insertArtObject} from '../function';
import {Editor, artObject} from '../type';

describe('insertArtObject function', () => {
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
        const artObject: artObject = {
            image: {
                width: 30,
                height: 40
            },
            position: {
                x: 20,
                y: 10
            },
            size: {
                width: 40,
                height: 50
            }
        }
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
            selectedObject: {...artObject},
            state: null
        };
        // @ts-ignore
        expect(insertArtObject(editor, artObject)).toStrictEqual(lastEditor);
    });
})