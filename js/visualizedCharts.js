 //定义图表对象
 var myChart1 = null;
 var myChart2 = null;
 var myChart3 = null;
 var myChart4 = null;
 var myChart5 = null;
 var myChart6 = null;
 var myChart7 = null;
 $(function(){
	 industryBar();
	 changeChart();
	 ageTrendPie();
	 skillAcquisitionChart();
	 playCounts();
	 roseChart();
	 moveMapChart();
	 clocknum(12588,'requiredPeoples'); //执行
	 clocknum(104532,'supplyPeoples'); 
	window.addEventListener("resize", () => { 
		myChart1.resize();  
		myChart2.resize();  
		myChart3.resize();
		myChart4.resize();  
		myChart5.resize();  
		myChart6.resize();
		myChart7.resize();
	});
 });
 /**
 *	就业行业柱形图
 */
 function industryBar(){
	myChart1 =  echarts.init(document.getElementById('industryBar'));	// 基于准备好的dom，初始化echarts实例
	var option = {
		title: {
			text: '柱形图-就业行业',
			left: 'center',
			textStyle:{color:'#fff'},
			top:'4%',
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '2%',
			right: '4%',
			top:'20%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				data: ['旅游行业', '电竞行业', '游戏行业', '影视行业', '电商行业', '医疗行业', '金融行业'],
				axisTick: {
					alignWithLabel: true
				},
				axisLabel: {		//x轴文字颜色
					color: '#fff'
				},
				axisLine: {		    //x轴线的颜色
					lineStyle:{
						 color: ['#fff'],
						 width: 1,
						 type: 'solid',
						 opacity: 0.1
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel: {		//y轴文字颜色
					color: '#fff'
				},
				axisLine: {		    //y轴线的颜色
					lineStyle:{
						 color: ['#fff'],
						 width: 1,
						 type: 'solid',
						 opacity: 0.1
					}
				},
				splitLine: {        //网格样式
					show: true,
					lineStyle:{
						 color: 'rgba(255,255,255,0.1)',
						 width: 1,
						 type: 'dashed'
					}
				}
			}
		],
		series: [
			{
				name: '直接访问',
				type: 'bar',
				barWidth: '50%',
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#248ff7'
						}, {
							offset: 1,
							color: '#6851f1'
						}]),
					barBorderRadius: 11,
				}
			  },
				data: [200, 300, 300, 900, 1500, 1200, 600]
			}
		]
	};
	myChart1.setOption(option,true);	    // 使用刚指定的配置项和数据显示图表。
   var app = {
	currentIndex: -1,
  };
 setInterval(function () {
	var dataLen = option.series[0].data.length;

	// 取消之前高亮的图形
	myChart1.dispatchAction({
	  type: 'downplay',
	  seriesIndex: 0,
	  dataIndex: app.currentIndex
	});
	app.currentIndex = (app.currentIndex + 1) % dataLen;
	//console.log(app.currentIndex);
	// 高亮当前图形
	myChart1.dispatchAction({
	  type: 'highlight',
	  seriesIndex: 0,
	  dataIndex: app.currentIndex,
	});
	// 显示 tooltip
	myChart1.dispatchAction({
	  type: 'showTip',
	  seriesIndex: 0,
	  dataIndex: app.currentIndex
	});
  }, 1000);
}

/**
*折线图-人员变化
*/
function changeChart(){
	myChart2 =  echarts.init(document.getElementById('changeLine'));
	var option = {
    title: {
        text: '折线图-人员变化',
        left: 'center',
		textStyle: {color: '#fff'},
		top:'4%',
    },
    grid: {
			left: '2%',
			right: '4%',
			top:'25%',
			bottom: '3%',
			containLabel: true
	},
     legend: {
        data: ['新增粉丝', '新增游客'],
     	textStyle: {color: '#fff'},
		right: '4%',
		top:'3%',
		bottom: '5%',
    },
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
		axisLabel: {		//x轴文字颜色
				color: '#fff'
		},
		axisLine: {		    //x轴线的颜色
			lineStyle:{
				 color: ['#fff'],
				 width: 1,
				 type: 'solid',
				 opacity: 0.1
			}
		}
    },
    yAxis: {
        type: 'value',
		axisLabel: {		//x轴文字颜色
				color: '#fff'
		},
		axisLine: {		    //x轴线的颜色
			lineStyle:{
				 color: ['#fff'],
				 width: 1,
				 type: 'solid',
				 opacity: 0.1
			}
		},
		splitLine: {        //网格样式
			show: true,
			lineStyle:{
				 color: 'rgba(255,255,255,0.1)',
				 width: 1,
				 type: 'dashed'
			}
		}
    },
    color:['#01dee1',"#ed3f35"],        //曲线颜色
    series: [ {
            name: '新增粉丝',
            type: 'line',
            data: [47, 50,100, 140, 95, 220, 201,240,230,125,245,202,125],
            smooth: true,//平滑曲线
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        },{
            name: '新增游客',
            type: 'line',
            data: [149, 138, 160, 130, 180, 28, 90,60,49,54,28,45],
            smooth: true,               //平滑曲线
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        }]
	};
	myChart2.setOption(option,true);	    // 使用刚指定的配置项和数据显示图表。
}
 /**
 *饼形图-年龄分布
 */
 function ageTrendPie(){
	myChart3 = echarts.init(document.getElementById('agePie'));
	var option = {
		title: {
			text: '饼形图-年龄分析',
			left: 'center',
			textStyle: {color: '#fff'},
			top:'4%',
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		grid: {
			left: '3%',
			right: '4%',
			top:'35%',
			bottom: '3%'
		},
		/*legend: {
			orient: 'vertical',
			left: 10,
			data: ['0-12岁', '13-18岁','19-30岁','31-40岁','41-50岁','50岁以上']
		},*/
		series: [
			{
				name: '年龄占比',
				type: 'pie',
				radius: ['50%', '70%'],
				avoidLabelOverlap: true,
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '30',
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				itemStyle: {
					normal: {
						label:{
							show: true,
							formatter: '{b} \n ({d}%)'
						}
					}
				},
				color:['#10606b','#0696ab','#06a0ab','#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97'],
				data: [
					{value: 999, name: '0-12岁'},
					{value: 2000, name: '13-18岁'},
					{value: 1548, name: '19-30岁'},
					{value: 1548, name: '31-40岁'},
					{value: 1548, name: '41-50岁'},
					{value: 1548, name: '50岁以'}
				]
			}
		]
	};
	myChart3.setOption(option,true);	    // 使用刚指定的配置项和数据显示图表。
 }
 
 /**
 *柱形图-技能掌握
 */
 function  skillAcquisitionChart(){
	var cost = [69, 78, 60,34, 70]//本期比上期（大于1按1处理）
	var totalCost = [ 100,100, 100, 100,100]//比例综合
	var visits = [ 664,793, 610, 350,702]//本期占总的百分比*100
	var grade = ['Node','VUE','Javascript','CSS3','HTML5' ]
	var myColor = ['#21BF57','#56D0E3',  '#1089E7', '#F8B448','#F57474', ];
	var data = {
		grade: grade,
		cost: cost,
		totalCost: totalCost,
		visits: visits
	};
	var option = {
		title: {
			top: '4%',
			left: 'center',
			text: '柱形图-技能掌握',
			textStyle: {
				align: 'center',
				color:'#fff'
			}
		},
		grid: {
			left: '130',
			right: '100',
			bottom: '20'
		},
		xAxis: {
			show: false,
		},
		yAxis: {
			type: 'category',
			axisLabel: {
				margin:30,
				show: true,
				color: '#4DCEF8',
				fontSize: 14
			},
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			data: data.grade
		},
		series: [{//外层边框
			type: 'bar',
			barGap: '-65%',
			label: {
				normal: {
					show: true,
					position: 'right',
					color: '#fff',
					fontSize: 14,
					formatter: 
					function(param) {
						return data.visits[param.dataIndex];
					},
				}
			},
			barWidth: '30%',
			itemStyle: {
				normal: {
					borderColor: '#4DCEF8',
					borderWidth: 2,
					barBorderRadius: 15,
					color: 'rgba(102, 102, 102,0)'
				},
			},
			z: 1,
			data: data.totalCost,
			// data: da
		}, {//柱形图占比
			type: 'bar',
			barGap: '-85%',
			barWidth: '21%',
			itemStyle: {
				 normal: {
					barBorderRadius: 16,
					color: function(params) {
						var num = myColor.length;
						return myColor[params.dataIndex % num]
					},
				}
			},
			max: 1,
			label: {
				normal: {
					show: true,
					position: 'inside',
					formatter: '{c}%'
				}
			},
			labelLine: {
				show: true,
			},
			z: 2,
			data: data.cost,
		}]
	}
	myChart4 = echarts.init(document.getElementById('skillAcquisitionBar'));
	myChart4.setOption(option,true);
}

/**
*折线图-用电量
*/
function playCounts(){
	let bgColor = "#fff";
	let color = [
		"#0090FF",
		"#36CE9E",
		"#FFC005",
		"#FF515A",
		"#8B5CFF",
		"#00CA69"
	];
	let echartData = [{
			name: "1",
			value1: 100,
			value2: 233
		},
		{
			name: "2",
			value1: 138,
			value2: 233
		},
		{
			name: "3",
			value1: 280,
			value2: 200
		},
		{
			name: "4",
			value1: 173,
			value2: 180
		},
		{
			name: "5",
			value1: 180,
			value2: 199
		},
		{
			name: "6",
			value1: 180,
			value2: 133
		},
		{
			name: "7",
			value1: 180,
			value2: 210
		},
		{
			name: "8",
			value1: 190,
			value2: 150
		},
		{
			name: "9",
			value1: 160,
			value2: 180
		}, 
		{
			name: "10",
			value1: 230,
			value2: 180
		},
		{
			name: "11",
			value1: 130,
			value2: 100
		},
		{
			name: "12",
			value1: 80,
			value2: 180
		},
	];

	let xAxisData = echartData.map(v => v.name);
	//  ["1", "2", "3", "4", "5", "6", "7", "8"]
	let yAxisData1 = echartData.map(v => v.value1);
	// [100, 138, 350, 173, 180, 150, 180, 230]
	let yAxisData2 = echartData.map(v => v.value2);
	// [233, 233, 200, 180, 199, 233, 210, 180]
	const hexToRgba = (hex, opacity) => {
		let rgbaColor = "";
		let reg = /^#[\da-f]{6}$/i;
		if (reg.test(hex)) {
			rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
		  "0x" + hex.slice(3, 5)
		)},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
		}
		return rgbaColor;
	}

	var option = {
		title: {
			top: '4%',
			left: 'center',
			text: '柱形图-电量统计图',
			textStyle: {
				align: 'center',
				color:'#fff'
			}
		},
		legend: {
			right: 10,
			top: 10,
			textStyle: {
				color: "#fff"
			}
		},
		tooltip: {
			trigger: "axis",
			formatter: function(params) {
				let html = '';
				params.forEach(v => {
					console.log(v)
					html += `<div style="color: #666;font-size: 14px;line-height: 24px">
					<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
					${v.seriesName}.${v.name}
					<span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
					万元`;
				})
				return html
			},
			extraCssText: 'border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
			axisPointer: {
				type: 'shadow',
				shadowStyle: {
					color: '#ffffff',
					shadowColor: 'rgba(225,225,225,1)',
					shadowBlur: 5
				}
			}
		},
		grid: {
			top: 70,
			bottom:10,
			containLabel: true
		},
		xAxis: [{
			type: "category",
			boundaryGap: false,
			axisLabel: {
				formatter: '{value}月',
				textStyle: {
					color: "#fff",
					opacity: 1
				}
			},
			axisLine: {
				lineStyle: {
					color: "#D9D9D9"
				}
			},
			data: xAxisData
		}],
		yAxis: [{
			type: "value",
			name: '单位：万千瓦时',
			axisLabel: {
				textStyle: {
					color: "#fff"
				}
			},
			nameTextStyle: {
				color: "#fff",
				fontSize: 12,
				lineHeight: 40
			},
			splitLine: {        //网格样式
				show: true,
				lineStyle:{
					 color: 'rgba(255,255,255,0.1)',
					 width: 1,
					 type: 'dashed'
				}
			},
			
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		}],
		series: [{
			name: "2018",
			type: "line",
			smooth: true,
			// showSymbol: false,/
			symbolSize: 8,
			zlevel: 3,
			lineStyle: {
				normal: {
					color: color[0],
					shadowBlur: 3,
					shadowColor: hexToRgba(color[0], 0.5),
					shadowOffsetY: 8
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[{
								offset: 0,
								color: hexToRgba(color[0], 0.3)
							},
							{
								offset: 1,
								color: hexToRgba(color[0], 0.1)
							}
						],
						false
					),
					shadowColor: hexToRgba(color[0], 0.1),
					shadowBlur: 10
				}
			},
			data: yAxisData1
		}, {
			name: "2019",
			type: "line",
			smooth: true,
			// showSymbol: false,
			symbolSize: 8,
			zlevel: 3,
			lineStyle: {
				normal: {
					color: color[1],
					shadowBlur: 3,
					shadowColor: hexToRgba(color[1], 0.5),
					shadowOffsetY: 8
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[{
								offset: 0,
								color: hexToRgba(color[1], 0.3)
							},
							{
								offset: 1,
								color: hexToRgba(color[1], 0.1)
							}
						],
						false
					),
					shadowColor: hexToRgba(color[1], 0.1),
					shadowBlur: 10
				}
			},
			data: yAxisData2
		}]
	};
	myChart5 = echarts.init(document.getElementById('playCounts'));
	myChart5.setOption(option,true);
}    

/**
*	玫瑰图-地区分布
*/
function roseChart(){
	var option = {
		color:['#1d9dff','#006cff','#60cda0','#ed8884','#8b78f6','#3a91d2','#06a0ab','#86c9f4'],
		title: {
			text: '玫瑰图-地区分布',
			left: 'center',
			top:'4%',
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		legend: {
			left: 'center',
			top: 'bottom',
			data: ['北京', '天津', '上海', '深圳', '广州', '厦门', '珠海', '西安'],
			textStyle: {
				color: '#fff'
			}
		},
		toolbox: {
			show: true,
			feature: {
				mark: {show: true},
				dataView: {show: true, readOnly: false},
				magicType: {
					show: true,
					type: ['pie', 'funnel']
				},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
		series: [
			{
				name: '半径模式',
				type: 'pie',
				radius: [15, 90],
				center: ['50%', '50%'],
				roseType: 'radius',
				label: {
					show: true
				},
				emphasis: {
					label: {
						show: true
					}
				},
				data: [
					{value: 10, name: '北京'},
					{value: 15, name: '天津'},
					{value: 15, name: '上海'},
					{value: 25, name: '深圳'},
					{value: 20, name: '广州'},
					{value: 35, name: '厦门'},
					{value: 30, name: '珠海'},
					{value: 40, name: '西安'}
				]
			}
		]
	};
	myChart6 = echarts.init(document.getElementById('roseChart'));
	myChart6.setOption(option);
}

/**
*	迁徙图
*/
function moveMapChart(){
	var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
	};

	var BJData = [
		[{name:'北京'}, {name:'上海',value:95}],
		[{name:'北京'}, {name:'广州',value:90}],
		[{name:'北京'}, {name:'大连',value:80}],
		[{name:'北京'}, {name:'南宁',value:70}],
		[{name:'北京'}, {name:'南昌',value:60}],
		[{name:'北京'}, {name:'拉萨',value:50}],
		[{name:'北京'}, {name:'长春',value:40}],
		[{name:'北京'}, {name:'包头',value:30}],
		[{name:'北京'}, {name:'重庆',value:20}],
		[{name:'北京'}, {name:'常州',value:10}]
	];

	var SHData = [
		[{name:'上海'},{name:'包头',value:95}],
		[{name:'上海'},{name:'昆明',value:90}],
		[{name:'上海'},{name:'广州',value:80}],
		[{name:'上海'},{name:'郑州',value:70}],
		[{name:'上海'},{name:'长春',value:60}],
		[{name:'上海'},{name:'重庆',value:50}],
		[{name:'上海'},{name:'长沙',value:40}],
		[{name:'上海'},{name:'北京',value:30}],
		[{name:'上海'},{name:'丹东',value:20}],
		[{name:'上海'},{name:'大连',value:10}]
	];

	var GZData = [
		[{name:'广州'},{name:'福州',value:95}],
		[{name:'广州'},{name:'太原',value:90}],
		[{name:'广州'},{name:'长春',value:80}],
		[{name:'广州'},{name:'重庆',value:70}],
		[{name:'广州'},{name:'西安',value:60}],
		[{name:'广州'},{name:'成都',value:50}],
		[{name:'广州'},{name:'常州',value:40}],
		[{name:'广州'},{name:'北京',value:30}],
		[{name:'广州'},{name:'北海',value:20}],
		[{name:'广州'},{name:'海口',value:10}]
	];

	var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

	var convertData = function (data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
				res.push([{
					coord: fromCoord
				}, {
					coord: toCoord
				}]);
			}
		}
		return res;
	};

	var color = ['#a6c84c', '#00eaff', '#ffde00'];
	var series = [];
	[['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
		series.push({
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 1,
			effect: {//波纹点样式
				show: true,
				period: 6,
				trailLength: 0.7,
				color: '#fff',
				symbolSize: 5
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		},
		{
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 2,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: planePath,
				symbolSize: 15
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 1,
					opacity: 0.4,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		},
		{
			name: item[0] + ' Top10',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
			symbolSize: function (val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[i]
				}
			},
			data: item[1].map(function (dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});

	var option = {
		tooltip : {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			top: 'bottom',
			left: 'right',
			data:['北京 Top10', '上海 Top10', '广州 Top10'],
			textStyle: {
				color: '#fff'
			},
			selectedMode: 'single'
		},
		geo: {
			map: 'china',
			zoom:1.4,
			label: {
				emphasis: {
					show: true,
					color:'#fff'
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					borderWidth: 1,
					areaColor:'rgba(7,16,44, 0.7)',
					borderColor: 'rgba(147, 235, 248, 1)'
				},
				emphasis: {
					areaColor: '#1d83e1'
				}
			}
		},
		series: series
	};
	myChart7 = echarts.init(document.getElementById('moveMapChart'));
	myChart7.setOption(option,true);
}

/**
*LED液晶屏数字字符效果
*/
function showLEDNumber(value,id){
	var htmlArr = [];
	var len = value.length;
	for(var i=0;i<len;i++){
		var number = value.charAt(i);
		htmlArr.push('<div class="clock c'+number+'" >');
		htmlArr.push('<div class="v n1"><div class="u"></div><div class="d"></div></div>');
		htmlArr.push('<div class="v n2"><div class="u"></div><div class="d"></div></div>');
		htmlArr.push('<div class="h n3"><div class="l"></div><div class="r"></div></div>');
		htmlArr.push('<div class="v n4"><div class="u"></div><div class="d"></div></div>');
		htmlArr.push('<div class="v n5"><div class="u"></div><div class="d"></div></div>');
		htmlArr.push('<div class="h n6"><div class="l"></div><div class="r"></div></div>');
		htmlArr.push('<div class="h n7"><div class="l"></div><div class="r"></div></div>');
		htmlArr.push('</div>');
	}
	$("#"+id).html(htmlArr.join(""));
}

function clocknum(num,id) {
       $('#'+id).empty();
       var html = '';
       var strarr = num.toString().split('');
       var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');
       for(var i=0; i<strarr.length; i++){
           if(strarr[i] == '.'){
               html += '<div class="dot"></div>'
           } else {
               var clasname = digit_to_name[strarr[i]];
               html += '<div class="'+clasname+'">' +
                       '<span class="d1"></span>' +
                       '<span class="d2"></span>' +
                       '<span class="d3"></span>' +
                       '<span class="d4"></span>' +
                       '<span class="d5"></span>' +
                       '<span class="d6"></span>' +
                       '<span class="d7"></span>' +
                   '</div>';
           }
       }
       $('#'+id).append(html);
   }
