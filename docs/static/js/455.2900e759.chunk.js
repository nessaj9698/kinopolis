"use strict";(self.webpackChunkaston_react=self.webpackChunkaston_react||[]).push([[455,839],{5492:(e,i,s)=>{s.d(i,{A:()=>a});s(5043);const a=s.p+"static/media/moviePoster.9f9e2a1a4a3269238a821f77b4266b65.svg"},3035:(e,i,s)=>{s.d(i,{C:()=>l});var a=s(5043),r=s(5614),o=s(8347),n=s(3870);var t=s(579);const l=e=>{let{addToFavourite:i,removeFromFavourite:s,movieId:l}=e;const[d,v]=(0,a.useState)((()=>{const e=localStorage.getItem("likedMovies");if(e){return JSON.parse(e).includes(l)}return!1})),c=(0,a.useContext)(o.FavouritesContext),g=(0,n.GV)(n.dt)||!1;return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:d?"#f50":"none",stroke:"#f50",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",onClick:e=>{e.preventDefault(),d?s():i(),g&&((0,r.$$)(l),v(!d)),c&&null!==c&&void 0!==c&&c.removeFromFavorites&&c.removeFromFavorites()},children:(0,t.jsx)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 9 3 10.54 3.89 12 5.35 13.46 3.89 15 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"})})}},7495:(e,i,s)=>{s.d(i,{e:()=>m});const a="CardRows_cardRows__mvQH0";var r=s(5475),o=s(5043),n=s(5492),t=s(3035),l=s(1935),d=s(3870);const v="MovieCard_movieCard__CNoP6";var c=s(579);const g=e=>{let{id:i,name:s,poster:a}=e;const g=(0,d.GV)(d.Sj),m=(0,o.useCallback)((()=>{g&&(0,l.$q)(g,"likedMovies",i)}),[g]),u=(0,o.useCallback)((()=>{g&&(0,l.jS)(g,"likedMovies",i)}),[]);return(0,c.jsx)(r.N_,{to:"/movie/".concat(i),children:(0,c.jsxs)("article",{className:v,children:[(0,c.jsx)("img",{src:a.previewUrl||n.A}),(0,c.jsx)("h2",{children:s}),g&&(0,c.jsx)(t.C,{addToFavourite:m,removeFromFavourite:u,movieId:String(i)})]})})},m=e=>{let{data:i}=e;return(0,c.jsx)("div",{className:a,children:i.map((e=>(0,c.jsx)(g,{id:e.id,name:e.name,poster:e.poster},e.id)))})}},8347:(e,i,s)=>{s.r(i),s.d(i,{FavouritesContext:()=>m,default:()=>u});var a=s(5043),r=s(592),o=s(3369),n=s(5614);const t=()=>{const e=(0,n.cQ)("likedMovies");return(0,o.N_)(e)};var l=s(7495),d=s(9708),v=s(7026);const c="FavouritesPage_Heading__-Fk9T";var g=s(579);const m=(0,a.createContext)(null),u=()=>{const[e,i]=(0,a.useState)((()=>t())),s=()=>{i(t())},o=(0,a.useMemo)((()=>({removeFromFavorites:s})),[s]),{data:n,error:u,isLoading:h}=(0,v.nq)(e,{skip:0===e.length});return(0,g.jsx)(m.Provider,{value:o,children:(0,g.jsxs)(d.m,{className:"maximum-height",children:[n&&e&&(0,g.jsx)(l.e,{data:n}),h&&(0,g.jsx)(r.a,{}),u&&(0,g.jsx)("h1",{children:"\u041e\u0448\u0438\u0431\u043a\u0430"}),0===e.length&&(0,g.jsx)("h1",{className:c,children:"\u041d\u0435\u0442 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432"})]})})}},5455:(e,i,s)=>{s.r(i),s.d(i,{default:()=>u});var a=s(3216),r=s(9708),o=s(7026),n=s(592),t=s(5492),l=s(3035),d=s(3870),v=s(1935);const c={singlePageInner:"MovieSinglePage_singlePageInner__oiGc7",singlePageYear:"MovieSinglePage_singlePageYear__AwO1h",singlePageDescription:"MovieSinglePage_singlePageDescription__x89b3",singlePageLeftSide:"MovieSinglePage_singlePageLeftSide__5TYYb"};var g=s(579);const m=e=>{var i;let{data:s,movieId:r}=e;const o=(0,d.GV)(d.dt),n=(0,a.Zp)();return(0,g.jsxs)("div",{className:c.singlePageInner,children:[(0,g.jsxs)("div",{className:c.singlePageLeftSide,children:[(0,g.jsx)("img",{src:(null===s||void 0===s||null===(i=s.poster)||void 0===i?void 0:i.previewUrl)||t.A}),(0,g.jsx)(l.C,{addToFavourite:()=>{null!==o&&void 0!==o&&o.uid?(0,v.$q)(o.uid,"likedMovies",r):n("/signin")},removeFromFavourite:()=>{null!==o&&void 0!==o&&o.uid&&(0,v.jS)(o.uid,"likedMovies",r)},movieId:r})]}),(0,g.jsxs)("div",{className:c.singlePageContent,children:[(0,g.jsx)("h1",{children:null===s||void 0===s?void 0:s.name}),(0,g.jsx)("p",{className:c.singlePageYear,children:null===s||void 0===s?void 0:s.year}),(0,g.jsx)("p",{className:c.singlePageDescription,children:(null===s||void 0===s?void 0:s.description)||"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442"})]})]})},u=()=>{const{id:e}=(0,a.g)(),{data:i,isLoading:s}=(0,o.Og)(e);return(0,g.jsxs)(r.m,{className:"maximum-height",children:[s&&(0,g.jsx)(n.a,{}),i&&e&&(0,g.jsx)(m,{data:i,movieId:e})]})}}}]);
//# sourceMappingURL=455.2900e759.chunk.js.map