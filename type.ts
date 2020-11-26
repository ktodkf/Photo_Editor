type Editor = 
{
    canvas: canvas;
    style: style;
    object: selectedObject;
    state: state;
}
    
type canvas = ImageData;
    
type size =
 {
    height: number;
    width: number;
}
    
type position =
 {
    x: number;
    y: number;
}
    
type style = 
{
    textStyle: textStyle;
    primitiveStyle: primitiveStyle;
    filterColor: filterColor;
}
    
type filterColor = "gray" | "red" | "blue" | "green";
    
type state = 
{
    redo: Array<Editor>;
    undo: Array<Editor>;
}
    
type selectedObject = artObject | area | text | primitive;
    
type artObject =
 {
    size: size;
    position: position;
    image: ImageData;
}
    
type area =
{
    size: size;
    position: position;
}
    
type text = 
{
    textValue: string;
    position: position;
    style: textStyle;
}
 
type image  = {
    coordinates: position,
    size: size,
  }

type textStyle = 
{
    size: size;
    color: color;
    fontFamily: string;
}
    
type primitive = 
{
    primitive: triagle | rectangle | circle;
    style: primitiveStyle;
}
    
type triagle = 
{
    point1: position;
    point2: position;
    point3: position;
}
    
type rectangle = 
{
    point: position;
    size: size;
}
    
type circle = 
{
    point: position;
    radius: number;
}
    
type primitiveStyle = 
{
    borderColor: color;
    borderSize: number;
}
    
type color = "gray" | "red" | "blue" | "green";

export type {
    Editor,
    selectedObject,
    state,
    canvas,
    primitive,
    artObject,
    circle,
    rectangle,
    triagle,
    area,
    text,
    position,
    size,
    color,
    image,
    filterColor
  }