"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[459],{877:function(t,e,a){a.d(e,{LN:function(){return s},S0:function(){return u},ul:function(){return o},wO:function(){return _},xm:function(){return r}});var n=a(388),c="2c84da57b63e5566f246dbdad2c46707",i="https://api.themoviedb.org/3/",r=function(){return n.Z.get("".concat(i,"trending/all/day?api_key=").concat(c))},s=function(t){return n.Z.get("".concat(i,"search/movie?api_key=").concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"))},o=function(t){return n.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(c,"&language=en-US"))},u=function(t){return n.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US"))},_=function(t){return n.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}},459:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var n=a(885),c=a(791),i=a(877),r=a(689),s="Cast_cast__container__UZGEs",o="Cast_cast__title__clnIp",u="Cast_cast__list__GYQAL",_="Cast_cast__item__dGjV1",l="Cast_cast__itemTitle__0idGr",d="Cast_cast__itemCharacter__bVoey",m="Cast_cast__img__DYyMd",g=a(184),h=function(){var t=(0,c.useState)([]),e=(0,n.Z)(t,2),a=e[0],h=e[1],f=(0,r.UO)().movieId;return(0,c.useEffect)((function(){(0,i.S0)(f).then((function(t){var e=t.data;0!==e.cast.length&&h(e.cast)}))}),[f]),(0,g.jsx)("div",{className:s,children:a.length>0?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{className:o,children:"Series Cast"}),(0,g.jsx)("ul",{className:u,children:a.map((function(t){var e=t.id,a=t.original_name,n=t.character,c=t.profile_path;return(0,g.jsxs)("li",{className:_,children:[(0,g.jsx)("h3",{className:l,children:a}),(0,g.jsx)("h4",{className:d,children:n}),(0,g.jsx)("img",{className:m,src:c?"https://image.tmdb.org/t/p/w300".concat(c):"https://i.pinimg.com/originals/9a/91/34/9a91349d6ceeba868c03a23776e6420d.jpg",alt:a})]},e)}))})]}):"Did not have any results"})}}}]);
//# sourceMappingURL=459.3d6a099a.chunk.js.map