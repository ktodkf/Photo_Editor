let Editor = {
    canvas,
    Filters,
    State,
    Area
}

let canvas = {
    Images: {FilePath:''},
    Texts: {TextSize:20, TextColor: 'blue', TextPosition: {x:0,y:0}},
    Primitive: rectangle, //circle, triangle
}

let circle = {
    radius: 10,
    x:0,
    y:0
}

let triangle = {
    point1: point,
    point2: point,
    point3: point
}

let rectangle = {
    height:20,
    width:20,
    x:0,
    y:0
}

let point = {
    x:0,
    y:0
}

let Filters = {
    gray: {color: 'gray'},
    blue: {color: 'blue'},
    red: {color: 'red'},
    green: {color: 'green'}
}

let State

let Area ={
    x:0,
    y:0,
    height:10,
    width:20
}

function ImportPhotos(Editor){
    return(canvas)
}

function SavePhotos(Editor, Images){
    return(canvas)
}

function Excretion(Editor){
    return(Editor)
}

function Moving_area(Editor){
    return(Editor)
}

function Crop_area(Editor){
    return(Editor)
}

function Delete_area(Editor){
    return(Editor)
}

function Insert_text(canvas){
    return(canvas)
}

function text_size(canvas){
    return(canvas)
}

function text_color(canvas){
    return(canvas)
}

function Moving_text(canvas){
    return(canvas)
}

function Insert_filters(Images){
    return(Images)
}

function Increase_size(Images){
    return Images
}

function Insert_image(Images){
    return Images
}

function Undo_insert(Images, canvas){
    return(canvas)
}

function Insert_primitives(canvas){
    return(canvas)
}

function Size_change(canvas, Primitive){
    return(canvas)
}

function Position_change(canvas, Primitive){
    return(canvas)
}

function Background_flood(canvas, Primitive){
    return(canvas)
}

function Insert_art_object(canvas){
    return(canvas)
}