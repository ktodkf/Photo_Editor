import {selectedArea} from '../function';
import {area, Editor, position, size, canvas} from '../type';

describe('selectedArea function', () => {
    test('returns Editor', () => {
        const area:area = {
            position:{
                x:0,
                y:0
            },
            size:{
                width:100,
                height:100
            }
        }
        const editor: Editor = {
            canvas: {
                filter: null,
                width:100,
                height:100,
                data: {
                    width:100,
                    height:100
                }
            },
            selectedObject: {
                position: {
                    x: 10,
                    y: 10
                },
                size: {
                    width:100,
                    height:100
                }
            },
            state: null
        };
        const lastEditor: Editor = {
            canvas:{
                width:100,
                height:100,
                filter:null,
                data:{
                    width:100,
                    height:100
                }
            },
            selectedObject: {...area},
            state: null
        };


        // @ts-ignore
        expect(selectedArea(editor, area)).toStrictEqual(lastEditor);
    });
})