import { TextDocument } from 'vscode-languageserver-textdocument';
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentDiagnosticReportKind,
	type DocumentDiagnosticReport,
	TextDocumentEdit,
	InsertReplaceEdit
} from 'vscode-languageserver/node';

function getBZTags():CompletionItem[]
{
	return [
		{
			label : "TG",
			kind :CompletionItemKind.Constant,
			detail:"ToggleGTag 通过某一个属性的开关控制显隐的分组",
			documentation:"TG(name,order=50,style=\"box\")",
			insertText:"TG(name)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "FD",
			kind :CompletionItemKind.Constant,
			detail:"FoldoutGTag 卷展分组",
			documentation:"FD(name,order=50,style=\"box\")",
			insertText:"FD(name)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "BG",
			kind :CompletionItemKind.Constant,
			detail:"BoxGTag box 形式分组",
			documentation:"BG(name,order=50,style=\"box\")",
			insertText:"BG(name)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "SIF",
			kind :CompletionItemKind.Constant,
			detail:"ShowIfTag 通过对某个值得对比控制显隐的标签",
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
			detail:"目前只有一个 TT 标签，可以和 SIF 标签一起使用，用来进行值得判断 TT 的参数即为目标值",
			documentation:"TT(V1)"+
			"\nTT(V1,V2,V3,V4)"+
			"\nhttp://www.bzta.top/2023/12/03/datatag/",
			insertText:"TT()",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "2Dir",
			kind :CompletionItemKind.Constant,
			detail:"draw uv direction",
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
			detail:"绘制平铺与偏移,有一个可选 bool 参数",
			documentation:"ST() ： 使用两行来绘制平铺与偏移"+
			"\nST(true)： 平铺与偏移绘制在同一行",
			insertText:"ST()",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "V4S",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
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
			detail:"TTd",
			documentation:"V(coms)http://www.bzta.top/2023/12/26/vdrawer/",
			insertText:"V()",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VX_Y_ZW",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
			documentation:"VX_Y_ZW(xName,yName,zwName)：需要三个参数分别对应 X 分量 Y 分量和 ZW 分量",
			insertText:"VX_Y_ZW(xName,yName,zwName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VX_YZ_W",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
			documentation:"VX_YZ_W(xName,yzName,wName)：需要三个参数分别对应 X 分量 YZ 分量和 W 分量",
			insertText:"VX_YZ_W(xName,yzName,wName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VX_YZ",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
			documentation:"VX_YZ(xName,yzName)：需要两个参数分别对应 X 分量 和 YZ 分量",
			insertText:"VX_YZ(xName,yzName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VX_YZW",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
			documentation:"VX_YZW(xName,yzwName)：需要两个参数分别对应 X 分量 和 YZW 分量",
			insertText:"VX_YZW(xName,yzwName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VXY_Z_W",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
			documentation:"VXY_Z_W(xyName,zName,wName)：需要三个参数分别对应 XY 分量 Z 分量和 W 分量",
			insertText:"VXY_Z_W(xyName,zName,wName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},		
		{
			label : "VXY_Z",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
			documentation:"VXY_Z(xyName,zName)：需要两个参数分别对应 XY 分量 和 Z 分量",
			insertText:"VXY_Z(xyName,zName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VXY_ZW",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
			documentation:"VXY_ZW(xyName,zwName)：需要两个参数分别对应 XY 分量 和 ZW 分量",
			insertText:"VXY_ZW(xyName,zwName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VXY",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
			documentation:"VXY_ZW(xyName,zwName)：需要两个参数分别对应 XY 分量 和 ZW 分量",
			insertText:"VXY_ZW(xyName,zwName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VXYZ_W",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
			documentation:"VXYZ_W(xyzName,wName)：需要两个参数分别对应 XYZ 分量 和 W 分量",
			insertText:"VXYZ_W(xyzName,wName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "VXYZ",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
			documentation:"VXYZ()：使用属性对应的显示名称"+
			"\nVXYZ(xyName)：参数可选，没有参数默认使用属性对应的显示名称",
			insertText:"VXYZ(xyName)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		},
		{
			label : "MMS",
			kind :CompletionItemKind.Constant,
			detail:"TTd",
			documentation:"MMS() 使用所属 Vector 的 X Y 分量绘制一个 0 到 1 的 MinMaxSlider"+
			"\nMMS (min,max) 使用所属 Vector 的 X Y 分量绘制一个 min 到 max 的 MinMaxSlider"+
			"\nMMS (min,max,VecCom1,VecCom2) 使用所属 Vector 的 VecCom1 和 VecCom2 分量绘制一个 min 到 max 的 MinMaxSlider",
			insertText:"MMS(min,max,VecCom1,VecCom2)",
			filterText:"\[+\s*BZ",
			textEditText:"t in t",
		}
	]
}

export function GetShaderGUITags():CompletionItem[]
{

	var ts=getBZTags();
	var oldts:CompletionItem[]=[];
	oldts.concat(ts);
	ts.forEach(element => {
		element.filterText=""
	});
	oldts.concat(ts)
	
	return getBZTags();
	
}