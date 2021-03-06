import {useFilter} from '../function';
import {Editor, filterColor} from '../type';

describe('useFilter function', () => {
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
        const filter: filterColor = "gray";
        const lastEditor: Editor = {
            canvas: {
                filter: "gray",
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
        // @ts-ignore
        expect(useFilter(editor, filter)).toStrictEqual(lastEditor);
    });
})