import {importImages} from '../function';
import {Image, Editor} from '../type';

describe('ImportImage function', () => {
  test('returns Editor', () => {
    const image: Image = {
      url: '../image',
      position: {
        x: 0,
        y: 0
      },
      size: {
        width: 10,
        height: 10
      }
    };
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
    let lastEditor: Editor = {
      canvas: {
        filter: null,
        height: 100,
        width: 100,
        data: {
          width: 100,
          height: 100
        }
      },
      selectedObject: {...image},
      state: null
    };
    // @ts-ignore
    expect(importImages(editor, image)).toStrictEqual(lastEditor);
  });
})