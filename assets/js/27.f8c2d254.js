(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{383:function(t,a,s){"use strict";s.r(a);var n=s(42),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_2604-그릇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2604-그릇"}},[t._v("#")]),t._v(" 2604. 그릇")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=1865&sca=2050",target:"_blank",rel:"noopener noreferrer"}},[t._v("출처"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"문제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문제"}},[t._v("#")]),t._v(" 문제")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("그릇을 바닥에 놓았을 때 그 높이는 10cm 이다. \n그런데 두 개의 그릇을 같은 방향으로 포개면 그 높이는 5cm만 증가된다. \n만일 그릇이 서로 반대방향으로 쌓이면 높이는 그릇만큼, 즉 10cm 늘어난다. \n그릇을 괄호 기호로 나타내어 설명해보자. 편의상 그릇이 쌓여지는 방향은 왼쪽에서 오른쪽이라고 가정한다. \n그림에서 ‘(’은 그릇이 바닥에 바로 놓인 상태를 나타내며, ‘)’은 그릇이 거꾸로 놓인 상태를 나타낸다.\n만일 그릇이 포개진 모양이 아래 그림 1(a)와 같다면 전체의 높이는 25cm가 된다. \n왜냐하면 처음 바닥에 있는 그릇의 높이가 10cm이고 \n이후 같은 방향으로 3개의 그릇이 포개져 있으므로 늘어난 높이는 5+5+5=15 이기 때문이다. \n그림 1(b)와 같은 경우라면 그 높이는 10*4=40cm가 된다.\n여러분은 입력파일에 주어진 모양대로 그릇을 쌓을 때 최종의 전체 그릇 높이를 계산해서 출력해야 한다. \n즉 처음 입력으로 주어진 각 그릇의 방향은 바꿀 수 없다.\n")])])]),s("p",[s("img",{attrs:{src:"http://jungol.co.kr/data/editor/1512/e3050b66a1b29a01767400d7560a4131_1449727195_0993.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"입력-형식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#입력-형식"}},[t._v("#")]),t._v(" 입력 형식")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("입력파일의 첫 줄에는 괄호문자로만 이루어진 문자열이 주어진다.\n입력 문자열에서 열린 괄호 ‘(’은 바로 놓인 그릇 닫힌 괄호 ‘)’은 거꾸로 놓인 그릇을 나타난다. \n문자열의 길이는 3이상 50 이하이다.\n\n")])])]),s("h4",{attrs:{id:"출력형식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#출력형식"}},[t._v("#")]),t._v(" 출력형식")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("여러분은 그릇 방향이 괄호 문자로 표시된 문자열을 읽어서 그 최종의 높이를 정수로 출력해야 한다.\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("dish "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nanswer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dish"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" dish"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" dish"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        answer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        answer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("answer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);