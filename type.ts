type Editor = 
{
    canvas: canvas;
   // style: style;
    selectedObject: selectedObject;
    state: state;
}
    
type canvas = 
{
    data: ImageData;
    filter: filterColor,
    height: number,
    width: number
}

type ImageData =
{
    width: number,
    height: number
}

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
    
/*type style = 
{
    textStyle: textStyle;
    primitiveStyle: primitiveStyle;
    filterColor: filterColor;
}*/
    
type filterColor = "gray" | "red" | "blue" | "green" | null;

//type filterColor = string

type Url = string

type state = 
{
    redo: Array<Editor>;
    undo: Array<Editor>;
}
    
type selectedObject = artObject | area | text | primitive | Image | null
    
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
 
type Image  = {
    url: Url,
    position: position,
    size: size,
  }

type textStyle = 
{
    size: size;
    color: Color;
    fontFamily: string;
}
    
type primitive = triagle | rectangle | circle; 
/*{
    primitive: triagle | rectangle | circle;
    style: primitiveStyle;
}*/
    
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
    
/*type primitiveStyle = 
{
    borderColor: Color;
    borderSize: number;
}*/
    
type Color = {
    r: number,
    g: number,
    b: number,
    a:number
}
//type Color = "gray" | "red" | "blue" | "green";

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
    Color,
    Image,
    filterColor
  }