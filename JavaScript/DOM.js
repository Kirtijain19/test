console.log("hello world")
// document.body.childNodes
// document.body.childNodes[0]
// document.body.childNodes[1]
// ...
//document.body.childNodes[1].childNodes
let cont= document.body.childNodes[1]
cont.firstChild
cont.lastChild
//inse text milega due to that space
cont.firstElementChild
//div.box milega
cont.lastElementChild
cont.lastElementChild.style.backgroundColor="green"
cont.lastElementChild.parentElement

document.body.firstElementChild

document.body.firstElementChild.childNodes
document.body.firstElementChild.children
document.body.firstElementChild.children[0]
document.body.firstElementChild.children[1]
document.body.firstElementChild.children[1].nextElementSibling
document.body.firstElementChild.children[1].previousElementSibling
document.body.firstElementChild.children[1].previousSibling
//childnodes se text node, comment node sab milta h but children se keval proper elements milte h

typeof window
typeof document
//both of these give object as answer


document.body.children
//HTMLCollection(2) [div.container, table]
document.body.children[1]
//<table>​…​</table>​
document.body.children[1].rows
//HTMLCollection(4) [tr, tr, tr, tr]0: traccessKey: ""align: ""ariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColIndexText: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowIndexText: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}autocapitalize: ""autofocus: falsebaseURI: "http://127.0.0.1:3000/JavaScript/DOM.html"bgColor: ""cells: HTMLCollection(3) [td, td, td]ch: ""chOff: ""childElementCount: 3childNodes: NodeList(7) [text, td, text, td, text, td, text]children: HTMLCollection(3) [td, td, td]classList: DOMTokenList [value: '']className: ""clientHeight: 20clientLeft: 0clientTop: 0clientWidth: 102contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}dir: ""draggable: falseeditContext: nullelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: tdhidden: falseid: ""inert: falseinnerHTML: "\n            \n            <td>name</td>\n            <td>age</td>\n            <td>class</td>\n           "innerText: "name\tage\tclass"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: tdlocalName: "tr"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: nullnextSibling: textnodeName: "TR"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 20offsetLeft: 2offsetParent: tableoffsetTop: 20offsetWidth: 102onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonscrollend: nullonscrollsnapchange: nullonscrollsnapchanging: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<tr>\n            \n            <td>name</td>\n            <td>age</td>\n            <td>class</td>\n           </tr>"outerText: "name\tage\tclass"ownerDocument: documentparentElement: theadparentNode: theadpart: DOMTokenList [value: '']popover: nullprefix: nullpreviousElementSibling: nullpreviousSibling: textrole: nullrowIndex: 0scrollHeight: 20scrollLeft: 0scrollTop: 0scrollWidth: 102sectionRowIndex: 0shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "TR"textContent: "\n            \n            name\n            age\n            class\n           "title: ""translate: truevAlign: ""virtualKeyboardPolicy: ""writingSuggestions: "true"[[Prototype]]: HTMLTableRowElement(...)1: tr2: tr3: trlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
document.body.children[1].caption
//<caption>​students data​</caption>​
document.body.children[1].tHead
//<thead>​…​</thead>​
document.body.children[1].tFoot
//<tfoot>​…​</tfoot>​
document.body.children[1].tBodies
//HTMLCollection [tbody]0: tbodylength: 1[[Prototype]]: HTMLCollection



document.body.children[1].children
//HTMLCollection(4) [caption, thead, tbody, tfoot]
document.body.children[1].children[3].rows
//HTMLCollection [tr]0: trlength: 1[[Prototype]]: HTMLCollection
document.body.children[1].rows
//HTMLCollection(4) [tr, tr, tr, tr]
