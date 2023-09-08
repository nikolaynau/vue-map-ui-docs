import{_ as c,C as l,o as r,c as p,H as e,w as a,k as s,a as t,Q as i}from"./chunks/framework.0cc98949.js";const A=JSON.parse('{"title":"DefaultIcon","description":"","frontmatter":{},"headers":[],"relativePath":"components/layer/default-icon.md","filePath":"components/layer/default-icon.md","lastUpdated":1694171573000}'),y={name:"components/layer/default-icon.md"},E=s("h1",{id:"defaulticon",tabindex:"-1"},[t("DefaultIcon "),s("a",{class:"header-anchor",href:"#defaulticon","aria-label":'Permalink to "DefaultIcon"'},"​")],-1),d=s("p",null,[t("The "),s("code",null,"VMapDefaultIcon"),t(" component is used to represent the blue marker image.")],-1),h=s("h2",{id:"basic-usage",tabindex:"-1"},[t("Basic usage "),s("a",{class:"header-anchor",href:"#basic-usage","aria-label":'Permalink to "Basic usage"'},"​")],-1),u=s("div",{class:"language-vue vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," L "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'leaflet'"),s("span",{style:{color:"#E1E4E8"}},";")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"runtimeConfig"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useRuntimeConfig"),s("span",{style:{color:"#E1E4E8"}},"();")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"L"),s("span",{style:{color:"#E1E4E8"}},".Icon.Default.imagePath "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," runtimeConfig.public.baseURL;")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMap"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMapOsmTileLayer"),s("span",{style:{color:"#E1E4E8"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMapZoomControl"),s("span",{style:{color:"#E1E4E8"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMapAttributionControl"),s("span",{style:{color:"#E1E4E8"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMapMarker"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":latlng"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"[0, 0]"'),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMapDefaultIcon"),s("span",{style:{color:"#E1E4E8"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMapMarker"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"VMap"),s("span",{style:{color:"#E1E4E8"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," L "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'leaflet'"),s("span",{style:{color:"#24292E"}},";")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"runtimeConfig"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useRuntimeConfig"),s("span",{style:{color:"#24292E"}},"();")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#005CC5"}},"L"),s("span",{style:{color:"#24292E"}},".Icon.Default.imagePath "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," runtimeConfig.public.baseURL;")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"VMap"),s("span",{style:{color:"#24292E"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"VMapOsmTileLayer"),s("span",{style:{color:"#24292E"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"VMapZoomControl"),s("span",{style:{color:"#24292E"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"VMapAttributionControl"),s("span",{style:{color:"#24292E"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"VMapMarker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":latlng"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"[0, 0]"'),s("span",{style:{color:"#24292E"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"VMapDefaultIcon"),s("span",{style:{color:"#24292E"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"VMapMarker"),s("span",{style:{color:"#24292E"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"VMap"),s("span",{style:{color:"#24292E"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")])])])],-1),f=i('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h3><p>Use default icon options from leaflet <a href="https://leafletjs.com/reference.html#icon-default" target="_blank" rel="noreferrer">documentation</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>imagePath</td><td>Icon will try to auto-detect the path of the blue icon images. If you are placing these images in a non-standard way, set this option to point to the right path.</td><td><code>string</code></td><td>—</td></tr><tr><td>knownClasses</td><td>Here you can specify a list of classes that the leaflet library adds. This is necessary for the properties <code>className</code> and <code>class</code> to work correctly. By default, the list of internal classes of the leaflet library is used.</td><td><code>string[]</code></td><td>—</td></tr><tr><td>className</td><td>A custom class name to assign to both icon and shadow images. Empty by default. The value of this property is combined with and is equivalent to the <code>class</code> property.</td><td><code>any</code></td><td>—</td></tr><tr><td>class</td><td>The CSS class value. You can pass the <code>object</code>, <code>array</code> and <code>string</code> value.</td><td><code>any</code></td><td>—</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><p>No events.</p><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>The default slot can be used to extend behavior.</td></tr></tbody></table><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>icon</td><td>Leaflet icon instance.</td><td>Ref&lt;<a href="/components/types.html#icon">Icon</a> | null&gt;</td></tr></tbody></table>',10);function m(b,D,_,g,F,C){const o=l("Demo"),n=l("ClientOnly");return r(),p("div",null,[E,d,h,e(n,null,{default:a(()=>[e(o,{url:"/layer/basic-default-icon"},{default:a(()=>[u]),_:1})]),_:1}),f])}const V=c(y,[["render",m]]);export{A as __pageData,V as default};
