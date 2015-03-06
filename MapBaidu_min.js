// JavaScript Document  
/*
	使用方法：
	new BaiduMap(id,parameter);
	
	参数说明：
	
		id: 状态地图的标签id ，必须设置高宽
		
		parameter：显示地图的相关参数
				address：显示的正确地址，在不填写的情况下， 回去显示身份的地图			string			默认为空													建议必填
				province：省份													string			默认为空													必填
				size： 缩放比列													int				默认16，在只显示城市的地图默认为12							建议8-16之间，可填
				isControl：是否显示放大缩小空间										Boolean			默认true													可填
				info：是否显示信息，该信息可以是html标签								string			默认为null												可填
				
*/
function BaiduMap(id,parameter){this._map=null;this._id=id;this._address=this.checkObj(parameter,"address")?parameter.address:"";this._province=this.checkObj(parameter,"province")?parameter.province:"";this._size=this.checkObj(parameter,"size")?parameter.size:16;this._isControl=this.checkObj(parameter,"isControl")?parameter.isControl:true;this._info=this.checkObj(parameter,"info")?parameter.info:null;this.initMap()}BaiduMap.prototype.initMap=function(){this.createMap();this.setMapEvent();if(this._isControl){this.addMapControl()}};BaiduMap.prototype.createMap=function(){var _class=this;this._map=new BMap.Map(this._id);var myGeo=new BMap.Geocoder();if(this._address==""){this._map.centerAndZoom(this._province,12)}else{myGeo.getPoint(this._address,function(point){if(point){var marker=new BMap.Marker(point);_class._map.centerAndZoom(point,_class._size);_class._map.addOverlay(marker);if(!_class._info){marker.setAnimation(BMAP_ANIMATION_BOUNCE)}else{_class.bubbleInfo(new BMap.Point(point.lng,point.lat+0.0007));marker.addEventListener("click",function(){_class.bubbleInfo(new BMap.Point(point.lng,point.lat+0.0007))})}}},this._province)}};BaiduMap.prototype.bubbleInfo=function(point){var infoWindow=new BMap.InfoWindow(this._info);this._map.openInfoWindow(infoWindow,point)};BaiduMap.prototype.setMapEvent=function(){this._map.enableDragging();this._map.enableScrollWheelZoom();this._map.enableDoubleClickZoom();this._map.enableKeyboard()};BaiduMap.prototype.addMapControl=function(){var ctrl_nav=new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});this._map.addControl(ctrl_nav)};BaiduMap.prototype.checkObj=function(obj,key){if(!obj){return false}for(var i in obj){if(i==key){return true}}return false};BaiduMap.prototype._class=function(str){var classElements=[],allElements=document.getElementsByTagName("*");for(var i=0;i<allElements.length;i++){console.log(allElements[i].className,str,1);if(allElements[i].className==str){classElements[classElements.length]=allElements[i]}}return classElements};