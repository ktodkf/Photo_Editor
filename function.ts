import {
    editor,
    primitive,
    image,
    artObject,
    area,
    text,
    position,
    size,
    color,
    filter
  } 

from './editor';

function importImages(editor: editor, image: image) {
    return {
      ...editor,
      selectedObject: {...image}
    }
}

function selectedArea(editor: editor, area: area){
    return{
        ...editor,
        selectedObject: {...area}
    }
}  

function moveArea(editor: editor,  position: position){
    return{
        ...editor.selectedObject,
        position
    }
}

function cropArea(editor: editor){
    let color = {
        r: 255,
        g: 255,
        b: 255,
        a: 1
    }
    return {
        ...editor,
        selectedObject: {
            ...editor.selectedObject,
            color
        }
    }
}

function deleteArea(editor: editor){
    return{
        ...editor,
        selectedObject: null
    }
}

function insertText(editor: editor, text: text){
    return{
        ...editor,
        selectedObject: {...text}
    }
}

function changeTextSize(editor: editor, size: size){
    return{
        ...editor,
        selectedObject: {
            ...editor.selectedObject, 
            size: {...size}    
        }
    }
}

function changeTextColor(editor: editor, color: color){
    return{
        ...editor,
        selectedObject: {
            ...editor.selectedObject, 
            color: {...color}    
        }
    }
}

function moveText(editor: editor, text: text){
    return{
        ...editor,
        selectedObject: {
            ...editor.selectedObject,
            position: {...position}
        }
    }
}

function useFilter(editor: editor, filter: filter){
    return{
        ...editor, 
        canvas: {
            ...editor.canvas,
            filter: filter
        }
    }
}

function insertPrimitive(editor: editor, primitive: primitive){
    return{
        ...editor, 
        selectedObject: {...primitive}
    }
}

function changePrimitiveSize(editor: editor, size: size){
    return{
        ...editor, 
        selectedObject: {
            ...editor.selectedObject, 
            size: {...size}    
        }
    }
}

function changePrimitivePosition(editor: editor, position: position){
    return{
        ...editor, 
        selectedObject: {
            ...editor.selectedObject, 
            position    
        }
    }
}

function insertArtObject(editor: editor, artObject: artObject){
    return{
        ...editor, 
        selectedObject: {...artObject}
    }
}

function fillingPrimitive(editor: editor, color: color){
    return{
        ...editor, 
        selectedObject: {
            ...editor.selectedObject, 
            color    
        }
    }
}

export {
    fillingPrimitive,
    insertArtObject,
    changePrimitivePosition,
    changePrimitiveSize,
    insertPrimitive,
    useFilter,
    moveText,
    changeTextColor,
    changeTextSize,
    insertText,
    deleteArea,
    cropArea,
    moveArea,
    selectedArea,
    importImages
}