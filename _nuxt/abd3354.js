(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{257:function(t){t.exports=JSON.parse('{"images":[{"title":"Various Blobs","year":"2020","medium":"Pens, Copics","tag":"traditional","imgUrl":"art_img/traditional/blobs.jpg"},{"title":"Bulky","year":"2020","medium":"Pens, Copics","tag":"traditional","imgUrl":"art_img/traditional/bulky.jpg"},{"title":"Character Sheet","year":"2020","medium":"Pens, Copics","tag":"traditional","imgUrl":"art_img/traditional/lil_character.jpg"},{"title":"RADio","year":"2020","medium":"Pens, Copics","tag":"traditional","imgUrl":"art_img/traditional/radio.jpg"},{"title":"South Bend Blobs","year":"2020","medium":"Poscas","tag":"traditional","imgUrl":"art_img/traditional/sb_blobs.jpg"},{"title":"Traffic Cones\' Discovery","year":"2020","medium":"Copics, Prismacolor pencils","tag":"traditional","imgUrl":"art_img/traditional/traffic_cones.jpg"},{"title":"Characters from \'Wagyan Paradise","year":"2020","medium":"Pens, Copics","tag":"traditional","imgUrl":"art_img/traditional/wagyan.jpg"},{"title":"Honeybee","year":"2022","medium":"Acrylics","tag":"traditional","imgUrl":"art_img/traditional/honeybee.jpg"},{"title":"La Creatura","year":"2022","medium":"Acrylics","tag":"traditional","imgUrl":"art_img/traditional/the_creature.jpg"},{"title":"Equilibrium","year":"2022","medium":"Acrylics","tag":"traditional","imgUrl":"art_img/traditional/equilibrium.jpg"},{"title":"Little Friends","year":"2020","medium":"Digital - Microsoft Paint","tag":"digital","imgUrl":"art_img/digital/creatures.png"},{"title":"We Three Ghosts","year":"2021","medium":"Digital - Krita","tag":"digital","imgUrl":"art_img/digital/ghosts.png"},{"title":"The Summoning","year":"2021","medium":"Digital - crappy toy camera, Paint.NET, Aseprite","tag":"digital","description":"I made this by taking a picture with a crappy toy camera, then applying various filters and effects to it in Paint.NET, then drawing over that in Aseprite.","imgUrl":"art_img/digital/juxtaposition.png"},{"title":"Pyramid Dash!!","year":"2022","medium":"Digital - Krita","tag":"digital","description":"Made for the Famicase 2022 exhibition","imgUrl":"art_img/digital/pyramid_dash.jpg"},{"title":"Adventures in Nowhere","year":"2022","medium":"Digital - Krita","tag":"digital","description":"Album cover for a fictional band called <em>The Orb</>","imgUrl":"art_img/digital/adventures_in_nowhere.png"},{"title":"Soft Land","year":"2021","medium":"Digital - Krita","tag":"digital","description":"Box art for a fictional, Game Boy style game.","imgUrl":"art_img/digital/soft_land_box_art.png"},{"title":"Spaceship","year":"2022","medium":"Digital - Aseprite","tag":"digital","description":"Unused asset from a project","imgUrl":"art_img/digital/spaceship.gif"},{"title":"Creatures on the curb","year":"2021","medium":"Digital - crappy toy camera, Paint.NET, Aseprite","tag":"digital","description":"I made this by taking a picture with a crappy toy camera, then applying various filters and effects to it in Paint.NET, then drawing over that in Aseprite.","imgUrl":"art_img/digital/curb.png"},{"title":"Shapes study","year":"2022","medium":"Digital - Krita","tag":"digital","imgUrl":"art_img/digital/wacky_shapes.png"},{"title":"Walkabout in the sand","year":"2022","medium":"Expired film and Krita","tag":"digital","description":"Another album cover for a fictional band - This was a picture I took with my old point and shoot (RIP) using expired film, which I then drew over digitally in Krita.","imgUrl":"art_img/digital/walkabout.png"},{"title":"The Blorp","year":"2022","medium":"Blender","tag":"3d","imgUrl":"art_img/3D/blorp.png"},{"title":"Dude and Shapes","year":"2022","medium":"Blender","tag":"3d","imgUrl":"art_img/3D/print_render.png"},{"title":"Panpon Box","year":"2022","medium":"Blender","tag":"3d","description":"Box for a fictional game.","imgUrl":"art_img/3D/panpon_final.png"}]}')},258:function(t,r,e){var content=e(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(103).default)("315bc274",content,!0,{sourceMap:!1})},259:function(t,r,e){var map={"./art_img/3D/blorp.png":262,"./art_img/3D/panpon_final.png":263,"./art_img/3D/print_render.png":264,"./art_img/digital/adventures_in_nowhere.png":265,"./art_img/digital/creatures.png":266,"./art_img/digital/curb.png":267,"./art_img/digital/dance.gif":268,"./art_img/digital/ghosts.png":269,"./art_img/digital/juxtaposition.png":270,"./art_img/digital/pyramid_dash.jpg":271,"./art_img/digital/soft_land_box_art.png":272,"./art_img/digital/spaceship.gif":273,"./art_img/digital/wacky_shapes.png":274,"./art_img/digital/walkabout.png":275,"./art_img/placeholder.png":276,"./art_img/traditional/blobs.jpg":277,"./art_img/traditional/bulky.jpg":278,"./art_img/traditional/equilibrium.jpg":279,"./art_img/traditional/honeybee.jpg":280,"./art_img/traditional/lil_character.jpg":281,"./art_img/traditional/radio.jpg":282,"./art_img/traditional/sb_blobs.jpg":283,"./art_img/traditional/the_creature.jpg":284,"./art_img/traditional/traffic_cones.jpg":285,"./art_img/traditional/wagyan.jpg":286,"./data":257,"./data.json":257,"./style.css":184};function o(t){var r=n(t);return e(r)}function n(t){if(!e.o(map,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=259},260:function(t,r,e){"use strict";e.r(r);e(33),e(58);var o={name:"Modal",props:{hideModal:Function,modalShown:Boolean,artInfo:Object},methods:{descriptionExists:function(){return void 0!==this.artInfo.description}}},n=(e(287),e(43)),component=Object(n.a)(o,(function(){var t=this,r=t._self._c;return r("div",[r("div",{staticClass:"modal-background",style:t.modalShown?"display: block":"display: none",on:{click:t.hideModal}}),t._v(" "),r("div",{staticClass:"modal border-style",style:t.modalShown?"display: block":"display: none"},[r("div",{staticClass:"close-icon"},[r("img",{attrs:{src:"img/icons-and-links/close.png",alt:"close"},on:{click:t.hideModal}})]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"item"},[r("img",{staticClass:"image-style",attrs:{src:e(259)("./".concat(t.artInfo.imgUrl))}})]),t._v(" "),r("div",{staticClass:"item"},[r("h2",[t._v(t._s(t.artInfo.title))]),t._v(" "),r("h3",[t._v("Year: "+t._s(t.artInfo.year))]),t._v(" "),r("h3",[t._v("Medium: "+t._s(t.artInfo.medium))]),t._v(" "),t.descriptionExists?r("p",[t._v(t._s(t.artInfo.description))]):t._e()])])])])}),[],!1,null,"b81e6110",null);r.default=component.exports},262:function(t,r,e){t.exports=e.p+"img/blorp.db15134.png"},263:function(t,r,e){t.exports=e.p+"img/panpon_final.41858b7.png"},264:function(t,r,e){t.exports=e.p+"img/print_render.5dfff75.png"},265:function(t,r,e){t.exports=e.p+"img/adventures_in_nowhere.4f179bc.png"},266:function(t,r,e){t.exports=e.p+"img/creatures.9f3f832.png"},267:function(t,r,e){t.exports=e.p+"img/curb.6eaf210.png"},268:function(t,r,e){t.exports=e.p+"img/dance.2191209.gif"},269:function(t,r,e){t.exports=e.p+"img/ghosts.b5df500.png"},270:function(t,r,e){t.exports=e.p+"img/juxtaposition.eb01145.png"},271:function(t,r,e){t.exports=e.p+"img/pyramid_dash.e59b4ce.jpg"},272:function(t,r,e){t.exports=e.p+"img/soft_land_box_art.d9a4dbc.png"},273:function(t,r,e){t.exports=e.p+"img/spaceship.af59424.gif"},274:function(t,r,e){t.exports=e.p+"img/wacky_shapes.190c6cd.png"},275:function(t,r,e){t.exports=e.p+"img/walkabout.05aa09a.png"},276:function(t,r,e){t.exports=e.p+"img/placeholder.c6a3606.png"},277:function(t,r,e){t.exports=e.p+"img/blobs.e2550f0.jpg"},278:function(t,r,e){t.exports=e.p+"img/bulky.e30ce6d.jpg"},279:function(t,r,e){t.exports=e.p+"img/equilibrium.fba72d3.jpg"},280:function(t,r,e){t.exports=e.p+"img/honeybee.b4685ea.jpg"},281:function(t,r,e){t.exports=e.p+"img/lil_character.fcc5c65.jpg"},282:function(t,r,e){t.exports=e.p+"img/radio.605af72.jpg"},283:function(t,r,e){t.exports=e.p+"img/sb_blobs.b57f44b.jpg"},284:function(t,r,e){t.exports=e.p+"img/the_creature.180e467.jpg"},285:function(t,r,e){t.exports=e.p+"img/traffic_cones.a6fc649.jpg"},286:function(t,r,e){t.exports=e.p+"img/wagyan.b56e072.jpg"},287:function(t,r,e){"use strict";e(258)},288:function(t,r,e){var o=e(102)(!1);o.push([t.i,".modal[data-v-b81e6110]{position:fixed;top:0;left:0;right:0;bottom:0;margin:auto;background-color:#fbf9ea;box-sizing:border-box;z-index:9999;height:90%;width:75%;overflow-y:scroll;scrollbar-width:thin;scrollbar-color:#26318a #228d93}.modal[data-v-b81e6110]::-webkit-scrollbar{width:20px}.modal[data-v-b81e6110]::-webkit-scrollbar-track{background:#26318a}.modal[data-v-b81e6110]::-webkit-scrollbar-thumb{background-color:#228d93;border-radius:20px;border:3px solid #26318a}.modal-background[data-v-b81e6110]{width:100%;height:100%;background-color:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:9998}.close-icon[data-v-b81e6110]{margin:12px}.close-icon[data-v-b81e6110]:hover{cursor:pointer}.image-style[data-v-b81e6110]{width:500px;height:auto}.container[data-v-b81e6110]{display:flex;flex-direction:row}.item[data-v-b81e6110]{margin:36px}",""]),t.exports=o}}]);