function floodFillUtil(screen,x,y,prevC,newC){
	
	let m=screen[0].length;
	let n=screen.length;
	
	if(x<0 || x>=m || y<0 || y>=n){
		return;
	}
	
	if(screen[x][y]!=prevC){
		return;
	}
	
	screen[x][y]=newC;
	
	
	floodFillUtil(screen,x+1,y,prevC,newC);
	floodFillUtil(screen,x-1,y,prevC,newC);
	floodFillUtil(screen,x,y+1,prevC,newC);
	floodFillUtil(screen,x,y-1,prevC,newC);
}

function floodFill(screen,x,y,newC){
	let prevC=screen[x][y];
	floodFillUtil(screen,x,y,prevC,newC);
}

let screen=[
[1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,0,0],
[1,0,0,1,1,0,1,1],
[1,2,2,2,2,0,1,0],
[1,1,1,2,2,0,1,0],
[1,1,1,2,2,2,2,0],
[1,1,1,1,1,2,1,1],
[1,1,1,1,1,2,2,1]
];

let x=4,y=4,newC=3;

floodFill(screen,x,y,newC);


console.log(screen);
