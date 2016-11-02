function Coin(type){
		this.type=type;
		this.x=0;
		this.y=0;
		this.rotate=0;
		this.cur=0;
		this.move();
	}
	Coin.prototype.draw=function(gd){
		gd.save();
		gd.translate(this.x,this.y);
		//gd.rotate(d2a(this.rotate));
		switch (this.type){
			case 1:
			case 2:
			gd.drawImage(JSON['coinAni1'],
				0,60*this.cur,60,60,
				-30,-30,60,60
			);
			break;
			case 3:
			case 4:
			case 5:
			gd.drawImage(JSON['coinAni2'],
				0,60*this.cur,60,60,
				-30,-30,60,60
			);
			break;	
		}
		
		gd.restore();
	};
	Coin.prototype.move=function(){
		var _this=this;
		
		setInterval(function(){
			_this.x+=-_this.x/10;
			_this.y+=(650-_this.y)/10;
			_this.cur++;
			if(_this.cur==10){
				_this.cur=0;
			}
		},30);
	};