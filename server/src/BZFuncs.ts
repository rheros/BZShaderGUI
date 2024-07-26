import { Console } from 'console';
import { Position, TextDocument } from 'vscode-languageserver-textdocument';
import {
	CompletionItem,
	CompletionItemKind,
	ParameterInformation,
	SignatureInformation
} from 'vscode-languageserver/node';


const tgInfo=" This is a Toggle Group Tag, hide or display group content by a Toggle Property";
const fdInfo=" This is a Foldout Group Tag, hide or display group content";
const bgInfo=" This is a Box Group Tag, collect same BG group name properties together";
const sifInfo=" This is ShowIf Tag  ,control current property display or hide  by the targetproperty, work with TT Tag  which can specify target value";
const ttInfo=" This is a TagValue Tag, work with SIF together,to specify the vaule to be compared";
const Dir2Info=" This is a Drawer for 2D vector , use X and Y components ,or  X ,Y and Z components";
const stInfo="This is a Drawer for Tilling and Offset , x y as tilling ,z w as offset";
const v4sInfo="This is a Drawer for Vector , can display any component by vector component name";
const vInfo="This is a Drawer for Vector, you can specify any component in any order";
const vxyzwInfo="This is a Drawer for Vector,in a fixed combination of Component";
const mmsInfo="draw a slider use X Y component within 0 to 1";





function getBZTags():CompletionItem[]
{
	return [
		{
			label : "TG",
			kind :CompletionItemKind.Constant,
			detail:tgInfo,
			documentation:"TG(name,order=50,style=\"box\")",
			insertText:"TG(name)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "FD",
			kind :CompletionItemKind.Constant,
			detail:fdInfo,
			documentation:"FD(name,order=50,style=\"box\")",
			insertText:"FD(name)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "BG",
			kind :CompletionItemKind.Constant,
			detail:bgInfo,
			documentation:"BG(name,order=50,style=\"box\")",
			insertText:"BG(name)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "SIF",
			kind :CompletionItemKind.Constant,
			detail:sifInfo,
			documentation:"SIF(targetPropName,comFunc=\"E\",VectorCom=\"\")"+
			"\nE 等于"+
			"\nLE 小于等于"+
			"\nGE 大于等于"+
			"\nL 小于"+
			"\nG 等于"+
			"\nHT 有纹理存在，适用于目标属性为纹理属性"+
			"\nNT 没有纹理存在，适用于目标属性为纹理属性",
			insertText:"SIF(targetPropName,comFunc=E)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "TT",
			kind :CompletionItemKind.Constant,
			detail:ttInfo,
			documentation:"TT(V1)"+
			"\nTT(V1,V2,V3,V4)"+
			"\nhttp://www.bzta.top/2023/12/03/datatag/",
			insertText:"TT()",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "Dir2D",
			kind :CompletionItemKind.Constant,
			detail:Dir2Info,
			documentation:"Dir2D() 使用坐标系控制 Vector 的 X Y 分量值， X Y 组成的向量长度有效。此模式下，当标点位于圆上时，鼠标在坐标系内部邮件点击，可以让标点从圆上脱离。"+
			"\nDir2D(true) 使用坐标系控制 Vector 的 X Y Z 分量值，其中 X Y 组成单位向量，长度始终为 1 ，Z 值为实际的向量长度。此模式下标点一直位于圆上，除了 0 0 值会位于圆心。",
			insertText:"2Dir()",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		// {
		// 	label : "3Dir",
		// 	kind :CompletionItemKind.Constant,
		// 	detail:"TTd",
		// 	documentation:"doc",
		// 	insertText:"3Dir()",
		// 	filterText:"\[+\s*BZ",
		// 	textEditText:"t in t",
		// },
		// {
		// 	label : "RST",
		// 	kind :CompletionItemKind.Constant,
		// 	detail:"TTd",
		// 	documentation:"doc",
		// 	insertText:"RST()",
		// 	filterText:"\[+\s*BZ",
		// 	textEditText:"t in t",
		// },
		{
			label : "ST",
			kind :CompletionItemKind.Constant,
			detail:stInfo,
			documentation:"ST() ： 使用两行来绘制平铺与偏移"+
			"\nST(true)： 平铺与偏移绘制在同一行",
			insertText:"ST()",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "V4S",
			kind :CompletionItemKind.Constant,
			detail:v4sInfo,
			documentation:"V4S(name1) ：绘制 Vector 中的任意一个分量"+
			"\nV4S(name1,name2)：绘制 Vector 中的任意两个分量"+
			"\nV4S(name1,name2,name3)：绘制 Vector 中的任意三个分量"+
			"\nV4S(name1,name2,name3,name4)：绘制 Vector 中的任意四个分量",
			insertText:"V4S()",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "V",
			kind :CompletionItemKind.Constant,
			detail:vInfo,
			documentation:"V(coms)http://www.bzta.top/2023/12/26/vdrawer/",
			insertText:"V()",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VX_Y_ZW",
			kind :CompletionItemKind.Constant,
			detail:vxyzwInfo,
			documentation:"VX_Y_ZW(xName,yName,zwName)：需要三个参数分别对应 X 分量 Y 分量和 ZW 分量",
			insertText:"VX_Y_ZW(xName,yName,zwName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VX_YZ_W",
			kind :CompletionItemKind.Constant,
			detail:vxyzwInfo,
			documentation:"VX_YZ_W(xName,yzName,wName)：需要三个参数分别对应 X 分量 YZ 分量和 W 分量",
			insertText:"VX_YZ_W(xName,yzName,wName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VX_YZ",
			kind :CompletionItemKind.Constant,
			detail:vxyzwInfo,
			documentation:"VX_YZ(xName,yzName)：需要两个参数分别对应 X 分量 和 YZ 分量",
			insertText:"VX_YZ(xName,yzName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VX_YZW",
			kind :CompletionItemKind.Constant,
			detail:vxyzwInfo,
			documentation:"VX_YZW(xName,yzwName)：需要两个参数分别对应 X 分量 和 YZW 分量",
			insertText:"VX_YZW(xName,yzwName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VXY_Z_W",
			kind :CompletionItemKind.Constant,
			detail:vxyzwInfo,
			documentation:"VXY_Z_W(xyName,zName,wName)：需要三个参数分别对应 XY 分量 Z 分量和 W 分量",
			insertText:"VXY_Z_W(xyName,zName,wName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},		
		{
			label : "VXY_Z",
			kind :CompletionItemKind.Constant,
			detail:vxyzwInfo,
			documentation:"VXY_Z(xyName,zName)：需要两个参数分别对应 XY 分量 和 Z 分量",
			insertText:"VXY_Z(xyName,zName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VXY_ZW",
			kind :CompletionItemKind.Constant,
			detail:vxyzwInfo,
			documentation:"VXY_ZW(xyName,zwName)：需要两个参数分别对应 XY 分量 和 ZW 分量",
			insertText:"VXY_ZW(xyName,zwName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VXY",
			kind :CompletionItemKind.Constant,
			detail:vxyzwInfo,
			documentation:"VXY(xyName)：需要两个参数分别对应 XY 分量",
			insertText:"VXY(xyName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VXYZ_W",
			kind :CompletionItemKind.Constant,
			detail:vxyzwInfo,
			documentation:"VXYZ_W(xyzName,wName)：需要两个参数分别对应 XYZ 分量 和 W 分量",
			insertText:"VXYZ_W(xyzName,wName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VXYZ",
			kind :CompletionItemKind.Constant,
			detail:vxyzwInfo,
			documentation:"VXYZ()：使用属性对应的显示名称"+
			"\nVXYZ(xyName)：参数可选，没有参数默认使用属性对应的显示名称",
			insertText:"VXYZ(xyName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "MMS",
			kind :CompletionItemKind.Constant,
			detail:mmsInfo,
			documentation:"MMS() 使用所属 Vector 的 X Y 分量绘制一个 0 到 1 的 MinMaxSlider"+
			"\nMMS (min,max) 使用所属 Vector 的 X Y 分量绘制一个 min 到 max 的 MinMaxSlider"+
			"\nMMS (min,max,VecCom1,VecCom2) 使用所属 Vector 的 VecCom1 和 VecCom2 分量绘制一个 min 到 max 的 MinMaxSlider",
			insertText:"MMS(min,max,VecCom1,VecCom2)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		}
	];
}

export function GetShaderGUITags():CompletionItem[]
{


	const ts=getBZTags();
	const ts2=getBZTags();
	ts.forEach(element => {
		element.filterText="";
	});
	const a=ts2.concat(ts);
	
	return a;
	
}


function extractMethodName(text: string | undefined, position: Position): string {
    if (!text) return '';

    // 获取光标位置之前的文本
    const lines = text.split('\n');
    const line = lines[position.line];
    const beforeCursor = line.substring(0, position.character);

    // 使用正则表达式提取方法名
    const match = beforeCursor.match(/(\w+)\s*\(/);
    return match ? match[1] : '';
}

export function getSignaturesForMethod(text: string | undefined, position: Position): SignatureInformation[] {
	const methodName=extractMethodName(text,position);

    const allSignatures: { [key: string]: SignatureInformation[] } = {
        'TG': [
            SignatureInformation.create(
                'TG(name)',
                tgInfo,
                ParameterInformation.create('name', 'a Toggle Property name as group name')
            ),
            SignatureInformation.create(
                'TG(name,order)',
                tgInfo,
                ParameterInformation.create('name', 'a Toggle Property name as group name'),
				ParameterInformation.create('order', 'int num for group sorting,default 50')
            ),
            SignatureInformation.create(
                'TG(name,order,style)',
				tgInfo,
                ParameterInformation.create('name', 'a Toggle Property name as group name'),
				ParameterInformation.create('order', 'int num for group sorting,default 50'),
                ParameterInformation.create('style', 'GUI Style ,default box')
            )
        ],
		'FD': [
            SignatureInformation.create(
                'FD(name)',
                fdInfo,
                ParameterInformation.create('name', 'string name')
            ),
            SignatureInformation.create(
                'FD(name,order)',
                fdInfo,
                ParameterInformation.create('name', 'string name'),
				ParameterInformation.create('order', 'int num for group sorting,default 50')
            ),
            SignatureInformation.create(
                'FD(name,order,style)',
                fdInfo,
                ParameterInformation.create('name', 'string name'),
				ParameterInformation.create('order', 'int num for group sorting,default 50'),
                ParameterInformation.create('style', 'GUI Style ,default box')
            )
        ],
		'BG': [
            SignatureInformation.create(
                'BG(name)',
                bgInfo,
                ParameterInformation.create('name', 'string name')
            ),
            SignatureInformation.create(
                'BG(name,order)',
                bgInfo,
                ParameterInformation.create('name', 'string name'),
				ParameterInformation.create('order', 'int num for group sorting,default 50')
            ),
            SignatureInformation.create(
                'BG(name,order,style)',
                bgInfo,
                ParameterInformation.create('name', 'string name'),
				ParameterInformation.create('order', 'int num for group sorting,default 50'),
                ParameterInformation.create('style', 'GUI Style ,default box')
            )
        ],
		'SIF': [
            SignatureInformation.create(
                'SIF(targetPropName)',
                sifInfo,
                ParameterInformation.create('targetPropName', 'targetPropName')
            ),
            SignatureInformation.create(
                'SIF(targetPropName,comFunc)',
                sifInfo,
                ParameterInformation.create('targetPropName', 'targetPropName'),
				ParameterInformation.create('comFunc', 'E、LE、GE、L、G、HT、NT')
            ),
            SignatureInformation.create(
                'SIF(targetPropName,comFunc,VectorCom)',
                sifInfo,
                ParameterInformation.create('targetPropName', 'targetPropName'),
				ParameterInformation.create('comFunc', 'E、LE、GE、L、G、HT、NT'),
                ParameterInformation.create('VectorCom', 'if target property is vector and want to compare one of the vector component ,use this param to figure it')
            )
        ],
		'TT': [
            SignatureInformation.create(
                'TT(value)',
                ttInfo,
                ParameterInformation.create('value', 'targetValue')
            ),
			SignatureInformation.create(
                'TT(v1,v2,v3,v4)',
                ttInfo,
                ParameterInformation.create('v', 'targetValue for each vector component')
            )
        ],
		'Dir2D': [
            SignatureInformation.create(
                'Dir2D',
                Dir2Info
            ),
			SignatureInformation.create(
                'Dir2D(true)',
                Dir2Info,
                ParameterInformation.create('true', 'true :split vector length as z, so xy on specify direction, \n'+
					'false: vector length specified by xy, same as no param')
            )
        ],
		'ST': [
            SignatureInformation.create(
                'ST',
                stInfo
            ),
			SignatureInformation.create(
                'ST(true)',
                stInfo,
                ParameterInformation.create('true', 'true :for element in oneline, \n'+
					'false: x y in oneline ,z w in next line')
            )
        ],
		'V4S': [
			SignatureInformation.create(
                'V4S(name)',
                v4sInfo,
                ParameterInformation.create('name', "x DisplayName")
            ),
			SignatureInformation.create(
                'V4S(name1,name2)',
                v4sInfo,
                ParameterInformation.create('name1', "x DisplayName"),
				ParameterInformation.create('name2', "y DisplayName"),
            ),
			SignatureInformation.create(
                'V4S(name1,name2,name3)',
                v4sInfo,
				ParameterInformation.create('name1', "x DisplayName"),
				ParameterInformation.create('name2', "y DisplayName"),
				ParameterInformation.create('name3', "z DisplayName"),
            ),
			SignatureInformation.create(
                'V4S(name1,name2,name3,name4)',
                v4sInfo,
				ParameterInformation.create('name1', "x DisplayName"),
				ParameterInformation.create('name2', "y DisplayName"),
				ParameterInformation.create('name3', "z DisplayName"),
				ParameterInformation.create('name4', "w DisplayName"),
            )
        ],
		'V': [
			SignatureInformation.create(
                'V(names)',
                vInfo,
                ParameterInformation.create('names', "Any combination of components , like XY or ZWYX")
            ),
        ],
		'VX_Y_ZW': [
			SignatureInformation.create(
                'VX_Y_ZW(xName,yName,zwName)',
                vxyzwInfo,
                ParameterInformation.create('xName', "the label of x for display"),
				ParameterInformation.create('yName', "the label of y for display"),
				ParameterInformation.create('zwName', "the label of z w for display"),
            ),
        ],
		'VX_YZ_W': [
			SignatureInformation.create(
                'VX_YZ_W(xName,yzName,wName)',
                vxyzwInfo,
                ParameterInformation.create('xName', "the label of x for display"),
				ParameterInformation.create('yzName', "the label of y z for display"),
				ParameterInformation.create('wName', "the label of w for display"),
            ),
        ],
		'VX_YZ': [
			SignatureInformation.create(
                'VX_YZ(xName,yzName)',
                vxyzwInfo,
                ParameterInformation.create('xName', "the label of x for display"),
				ParameterInformation.create('yzName', "the label of y z for display"),
            ),
        ],
		'VX_YZW': [
			SignatureInformation.create(
                'VX_YZW(xName,yzwName)',
                vxyzwInfo,
				ParameterInformation.create('xName', "the label of x for display"),
				ParameterInformation.create('yzwName', "the label of y z w for display"),
            ),
        ],
		'VXY_Z_W': [
			SignatureInformation.create(
                'VXY_Z_W(xyName,zName,wName)',
                vxyzwInfo,
                ParameterInformation.create('xyName', "the label of x y for display"),
				ParameterInformation.create('zName', "the label of z for display"),
				ParameterInformation.create('wName', "the label of w for display"),
            ),
        ],
		'VXY_Z': [
			SignatureInformation.create(
                'VXY_Z(xyName,zName)',
                vxyzwInfo,
                ParameterInformation.create('xyName', "the label of x y for display"),
				ParameterInformation.create('zName', "the label of z for display"),
            ),
        ],
		'VXY_ZW': [
			SignatureInformation.create(
                'VXY_ZW(xyName,zwName)',
                vxyzwInfo,
                ParameterInformation.create('xyName', "the label of x y for display"),
				ParameterInformation.create('zwName', "the label of z w for display"),
            ),
        ],
		'VXY': [
			SignatureInformation.create(
                'VXY(xyName)',
                vxyzwInfo,
                ParameterInformation.create('xyName', "the label of x y for display"),
            ),
        ],
		'VXYZ_W': [
			SignatureInformation.create(
                'VXYZ_W(xyzName,wName)',
                vxyzwInfo,
                ParameterInformation.create('xyzName', "the label of x y z for display"),
				ParameterInformation.create('wName', "the label of w for display")
            ),
        ],
		'VXYZ': [
			SignatureInformation.create(
                'VXYZ(xyzName)',
                vxyzwInfo,
                ParameterInformation.create('xyzName', "the label of x y z for display"),
            ),
        ],
		'MMS': [
			SignatureInformation.create(
                'MMS',
                mmsInfo,
            ),
			SignatureInformation.create(
                'MMS(min,max)',
                "draw a slider use X Y component within min to max",
                ParameterInformation.create('min', "slider min value"),
				ParameterInformation.create('max', "slider max value")
            ),	
			SignatureInformation.create(
                'MMS(min,max,vecCom1,vecCom2)',
                "draw a slider use specified vecCom1 and vecCom2 within min to max",
                ParameterInformation.create('min', "slider min value"),
				ParameterInformation.create('max', "slider max value"),
                ParameterInformation.create('vecCom1', "vector component for min"),
				ParameterInformation.create('vecCom2', "vector component for max"),
            ),
        ],

    };

    return allSignatures[methodName] || [];
}