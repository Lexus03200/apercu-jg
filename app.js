(function(){
var P='img/2025_';
var SHOTS=[
 {f:'04_101d317a-447a-4237-a8f7-0c462a456335-1024x768.jpg',t:'peinture',c:'Mur bleu canard, parquet en pin conservé',s:'#0F6C77',k:'Bleu canard'},
 {f:'05_0afe4d6c-c905-481d-b743-1216ada4dda4-1-1024x768.jpg',t:'platrerie',c:'Faux plafond neuf et spots encastrés',k:'Pièce de vie, maison de caractère'},
 {f:'07_9ed4bcba-a292-4e5f-812f-b813784c9f27-1024x768.jpg',t:'peinture',c:'Plafond lissé, mur de séjour bleu nuit',s:'#1F2B57',k:'Bleu nuit'},
 {f:'R:2026_03_RestaurationsAnciennes-edited-2-1024x768.jpg',t:'platrerie',c:'Charpente de dôme en restauration',k:'Bâtisse ancienne, Vichy'},
 {f:'05_838cf730-885a-4757-a789-be579b314f5e-768x1024.jpg',t:'isolation',c:'Isolation de toiture en cours',k:'Isolant posé avant recouvrement'},
 {f:'04_3fd61dfc-39dc-4fc7-be78-f802bdfd16b9-1024x768.jpg',t:'peinture',c:'Chambre avec mur taupe foncé',s:'#4A423D',k:'Taupe'},
 {f:'05_42f8b9fd-c379-49a6-9a77-7fe96672a7e6-1-576x1024.jpg',t:'sols',c:'Pose d\'un sol vinyle imitation bois',k:'Lames grises, pièce de vie'},
 {f:'05_3ce959bb-f9f5-4373-b175-ef75eed88741-1024x768.jpg',t:'platrerie',c:'Plafond refait sur toute la pièce',k:'Même chantier, vue vers le séjour'},
 {f:'04_ee681ecd-176d-4f91-9148-bb29072759f3-1024x498.jpg',t:'peinture',c:'Mur violet, niche en orangé',s:'#4B3B8F',k:'Violet'},
 {f:'05_361b229c-a0f3-419a-9d6e-c02b433a5b92-1024x478.jpg',t:'sols',c:'Papier peint panoramique végétal',k:'Revêtement mural'},
 {f:'07_FauxPlafonds-576x1024.jpg',t:'platrerie',c:'Structure rayonnante du dôme',k:'Avant pose du plafond courbe'},
 {f:'04_8987c2e1-7d39-47ec-b35e-2fd89ac751a8-1024x768.jpg',t:'peinture',c:'Mur chocolat face aux placards blancs',s:'#4C3831',k:'Chocolat'},
 {f:'05_095125f3-5fdc-4c0b-857d-be3de599cd7c-1024x768.jpg',t:'isolation',c:'Isolation des combles entre chevrons',k:'Combles'},
 {f:'05_0c1fe8f0-f70b-4fcb-a8ba-1c45b4bd2990-768x1024.jpg',t:'sols',c:'Stratifié chêne clair posé',k:'Chambre'},
 {f:'07_18a4063d-8ab2-4e41-b475-455074cb8868-1024x768.jpg',t:'peinture',c:'Rénovation complète : peinture, plafond et parquet',s:'#E9E6DF',k:'Blanc cassé'},
 {f:'R:2026_03_0ee690b3-1c73-415e-a073-7928890211b0-498x1024.jpg',t:'platrerie',c:'Cloison en plaques hydrofuges sur rails',k:'Ossature métallique'},
 {f:'04_ba7b1d53-d217-463f-a790-448730b522ef-1024x768.jpg',t:'peinture',c:'Séjour ouvert, mur bleu nuit',s:'#1F2B57',k:'Bleu nuit'},
 {f:'05_77883682-626a-4e77-81cb-af6fe7268614-1024x498.jpg',t:'platrerie',c:'Poutres conservées, plafonds refaits',k:'Rénovation de bâti ancien'},
 {f:'05_9b791a89-6da0-45f6-95d2-c35bd1e683b2-1-473x1024.jpg',t:'sols',c:'Pose de vinyle, mur bleu nuit au fond',k:'Sol et peinture'},
 {f:'05_8c6da0fb-e900-476b-a153-df1de1e5e4ca-1024x768.jpg',t:'isolation',c:'Isolation par la toiture',k:'Couverture ouverte'},
 {f:'07_Renovation_Vichy-576x1024.jpg',t:'platrerie',c:'Plafond courbe en cours de pose',k:'Dôme, Vichy'},
 {f:'05_fab79e57-b7a8-440d-8083-34855fb1eb17-1024x768.jpg',t:'platrerie',c:'Doublages et cloisons avant enduits',k:'Aménagement intérieur'},
 {f:'05_ee29f83c-0c3c-4a52-af5e-055163e34f25-1024x768.jpg',t:'sols',c:'Papier peint à motifs dans un salon',k:'Revêtement mural'},
 {f:'04_b3970cba-414b-4bc3-8e2c-41216eeea527-1024x576.jpg',t:'isolation',c:'Charpente mise à nu avant isolation',k:'Combles'},
 {f:'05_50ed042b-60cc-4133-b999-173f255ecfea-1024x768.jpg',t:'platrerie',c:'Pièce mise à nu, poutres apparentes',k:'Avant rénovation'},
 {f:'05_491a4e31-60d5-4b43-b0f8-40980b92fb9d-1-1024x576.jpg',t:'sols',c:'Parquet flottant posé sur sous-couche',k:'Chambre'},
 {f:'05_f4175b3b-be23-4c5a-a53e-1ae1f59c6983-1024x498.jpg',t:'platrerie',c:'Plâtrerie terminée, prête à peindre',k:'Couloir et pièce de vie'},
 {f:'07_dbc1ce9a-e189-488f-9ee2-fe65f27dde46-1024x768.jpg',t:'peinture',c:'Pièce repeinte en blanc, sol foncé',s:'#F2F1EC',k:'Blanc'},
 {f:'05_3b993977-3959-4772-bd70-09e533b0b243.jpg',t:'isolation',c:'Combles en cours d\'aménagement',k:'Avant isolation'},
 {f:'04_6b0e9326-0a5f-43ca-a043-938f8e7aed50-1024x768.jpg',t:'platrerie',c:'Spots et plafond, vue vers la cuisine',k:'Pièce de vie'},
 {f:'04_ed8c8125-8890-49db-8dde-e8a87f0005cc.jpg',t:'platrerie',c:'Charpente du dôme vue d\'en bas',k:'Bâtisse ancienne, Vichy'},
 {f:'05_1fed3edb-1909-4ad0-bdcd-7e2119005dd4-1-768x576.jpg',t:'peinture',c:'Chambre rafraîchie',s:'#EFE6DD',k:'Rose poudré'}
];
function src(s){return s.f.indexOf('R:')===0?'img/'+s.f.slice(2):P+s.f}
var LABELS={tout:'Tout',platrerie:'Plâtrerie',peinture:'Peinture',isolation:'Isolation',sols:'Sols et murs'};

/* Menu mobile et sous-menu */
var mb=document.getElementById('menu-btn'),nav=document.getElementById('nav');
if(mb&&nav){mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'Fermer':'Menu'})}
document.querySelectorAll('.dd').forEach(function(dd){
  var b=dd.querySelector('button');
  b.addEventListener('click',function(e){e.stopPropagation();var o=dd.classList.toggle('open');b.setAttribute('aria-expanded',o)});
});
document.addEventListener('click',function(e){document.querySelectorAll('.dd.open').forEach(function(dd){if(!dd.contains(e.target)){dd.classList.remove('open');dd.querySelector('button').setAttribute('aria-expanded','false')}})});
document.addEventListener('keydown',function(e){if(e.key==='Escape')document.querySelectorAll('.dd.open').forEach(function(dd){dd.classList.remove('open');dd.querySelector('button').setAttribute('aria-expanded','false')})});

/* Visionneuse */
var dlg=document.getElementById('viewer'),cur=0,list=[];
function show(i){cur=(i+list.length)%list.length;var s=list[cur];var im=document.getElementById('viewer-img');im.src=src(s);im.alt=s.c;document.getElementById('viewer-cap').textContent=s.c+(s.s?' (teinte '+s.k.toLowerCase()+')':'')+', photo '+(cur+1)+' sur '+list.length}
function openAt(arr,i){list=arr;show(i);if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','')}
if(dlg){
  document.getElementById('v-prev').onclick=function(){show(cur-1)};
  document.getElementById('v-next').onclick=function(){show(cur+1)};
  document.getElementById('v-close').onclick=function(){dlg.close()};
  dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
  dlg.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
}
function card(s,arr,i){
  var b=document.createElement('button');b.className='shot';b.type='button';
  var img=document.createElement('img');img.src=src(s);img.alt=s.c;img.loading='lazy';b.appendChild(img);
  var ch=document.createElement('span');ch.className='chip'+(s.s?'':' plain');
  ch.innerHTML='<i style="background:'+(s.s||'transparent')+'"></i><b></b><small></small>';
  ch.querySelector('b').textContent=s.c;ch.querySelector('small').textContent=(s.s?'Teinte : ':'')+s.k;
  b.appendChild(ch);b.addEventListener('click',function(){openAt(arr,i)});return b;
}

/* Galerie complète */
var gal=document.getElementById('gallery'),fil=document.getElementById('filters');
if(gal&&fil){
  var filter='tout';
  try{var h=location.hash.replace('#','');if(LABELS[h])filter=h}catch(e){}
  Object.keys(LABELS).forEach(function(k){
    var n=k==='tout'?SHOTS.length:SHOTS.filter(function(s){return s.t===k}).length;
    var b=document.createElement('button');b.type='button';b.dataset.k=k;b.innerHTML=LABELS[k]+'<span>'+n+'</span>';
    b.setAttribute('aria-pressed',k===filter);
    b.addEventListener('click',function(){filter=k;fil.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x.dataset.k===k)});render()});
    fil.appendChild(b);
  });
  function render(){var arr=SHOTS.filter(function(s){return filter==='tout'||s.t===filter});gal.innerHTML='';arr.forEach(function(s,i){gal.appendChild(card(s,arr,i))})}
  render();
}
/* Bandeaux de photos (accueil, pages métiers) */
document.querySelectorAll('[data-strip]').forEach(function(el){
  var t=el.getAttribute('data-strip'),n=+el.getAttribute('data-n')||6;
  var arr=(t==='best'?[0,2,1,3,9,5].map(function(i){return SHOTS[i]}):SHOTS.filter(function(s){return s.t===t})).slice(0,n);
  if(arr.length>3&&arr.length%3)arr=arr.slice(0,arr.length-arr.length%3);
  arr.forEach(function(s,i){el.appendChild(card(s,arr,i))});
});

/* Galeries des fiches chantier */
document.querySelectorAll('[data-photos]').forEach(function(el){
  var arr=el.getAttribute('data-photos').split('|').map(function(u){var m=SHOTS.filter(function(s){return src(s)===u})[0];return m||{f:'R:'+u.replace('img/',''),c:'Photo du chantier',k:''}});
  arr.forEach(function(s,i){el.appendChild(card(s,arr,i))});
});

/* Formulaire de devis */
var form=document.getElementById('quote-form');
if(form){
  try{var q=new URLSearchParams(location.search).get('type');if(q){var sel=document.getElementById('f-type');for(var i=0;i<sel.options.length;i++){if(sel.options[i].value===q)sel.selectedIndex=i}}}catch(e){}
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var name=document.getElementById('f-name'),phone=document.getElementById('f-phone'),done=document.getElementById('form-done'),btn=document.getElementById('f-submit'),files=document.getElementById('f-photos');
    done.hidden=false;
    if(!name.value.trim()||!phone.value.trim()){done.textContent='Indiquez au moins votre nom et votre numéro de téléphone pour que nous puissions vous rappeler.';(name.value.trim()?phone:name).focus();return}
    if(files&&files.files.length>5){done.textContent='Vous pouvez joindre 5 photos au maximum.';files.focus();return}
    var total=0;if(files){for(var k=0;k<files.files.length;k++)total+=files.files[k].size}
    if(total>8*1024*1024){done.textContent='Les photos dépassent 8 Mo au total. Choisissez-en moins ou envoyez-les par WhatsApp.';return}
    btn.disabled=true;btn.textContent='Envoi en cours…';done.textContent='';done.hidden=true;
    fetch(form.getAttribute('action'),{method:'POST',body:new FormData(form)}).then(function(r){return r.json()}).then(function(d){
      if(!d||d.ok!==true){var er=new Error(d&&d.error||'');er.server=true;throw er}
      done.hidden=false;done.textContent='Merci '+name.value.trim()+', votre demande est bien envoyée. Nous vous rappelons sous 48 heures ouvrées.';form.reset();
    }).catch(function(err){
      done.hidden=false;
      done.textContent=(err&&err.server&&err.message)?err.message:'Votre demande n\u2019a pas pu être envoyée. Appelez-nous au 06 26 72 61 93 ou écrivez à gononjefferson@gmail.com.';
    }).then(function(){btn.disabled=false;btn.textContent='Envoyer ma demande'});
  });
}

/* Simulateur d'aides */
var sim=document.getElementById('sim'),out=document.getElementById('sim-out');
if(sim&&out){
  function v(n){var x=sim.querySelector('input[name="'+n+'"]:checked');return x?x.value:''}
  function aid(cls,title,badge,text){return '<div class="aid '+cls+'"><header><h3>'+title+'</h3><span class="badge">'+badge+'</span></header><p>'+text+'</p></div>'}
  function run(){
    var st=v('statut'),age=v('age'),pr=v('projet'),dpe=v('dpe'),h='';
    if(st==='loc'){out.innerHTML=aid('maybe','Les aides sont pour votre propriétaire','À voir avec lui','Les aides à la rénovation énergétique sont accordées au propriétaire du logement. Parlez-lui de votre projet : il peut bénéficier des primes CEE, de l\'éco-PTZ et de la TVA réduite, et un logement mieux isolé lui permet de continuer à louer.');return}
    if(pr==='autre'){out.innerHTML=aid('no','Pas d\'aide à la rénovation énergétique','Hors dispositif','La peinture, les sols et la plâtrerie sans isolation ne sont pas concernés par ces aides.')+aid(age==='lt2'?'no':'yes','TVA à 10 %',age==='lt2'?'Non':'Oui',age==='lt2'?'Pour un logement de moins de 2 ans, la TVA est de 20 %.':'Pour un logement de plus de 2 ans, les travaux de rénovation bénéficient en général d\'une TVA à 10 % au lieu de 20 %.');return}
    var old2=age!=='lt2';
    h+=aid(old2?'yes':'no','TVA à 5,5 %',old2?'Oui':'Non',old2?'Les travaux d\'isolation dans un logement de plus de 2 ans bénéficient du taux réduit, appliqué directement sur notre facture.':'Le logement doit être achevé depuis plus de 2 ans.');
    var ptz=old2?(st==='occ'||st==='bail'):false;
    h+=aid(ptz?'yes':'no','Éco-prêt à taux zéro',ptz?'Oui':'Non',ptz?'Sans condition de revenus, pour une résidence principale. Jusqu\'à 15 000 € pour un poste de travaux, 30 000 € pour trois postes, et jusqu\'à 50 000 € avec MaPrimeRénov\'. Remboursement sur 15 ans au plus.':'Le logement doit être achevé depuis plus de 2 ans.');
    if(pr==='un'){
      h+=aid(old2?'yes':'no','Primes CEE',old2?'Oui':'Non',old2?'Versées par les fournisseurs d\'énergie pour une isolation réalisée seule. Le montant dépend de vos revenus et de la surface isolée.':'Les primes CEE concernent les logements existants de plus de 2 ans.');
      h+=aid('no','MaPrimeRénov\'','Non','Depuis le 1er septembre 2026, MaPrimeRénov\' ne finance plus l\'isolation réalisée seule. Elle reste possible dans une rénovation d\'ampleur.');
    }else{
      var okAge=age==='gt15',okDpe=dpe==='efg',okOcc=true;
      var mprCls=(okAge&&okDpe&&okOcc)?'yes':((okAge&&dpe==='nsp'&&okOcc)?'maybe':'no');
      var why=[];if(!okAge)why.push('le logement doit avoir au moins 15 ans');if(dpe==='abcd')why.push('le logement doit être classé E, F ou G');
      var txt=mprCls==='yes'?'Votre projet peut être éligible à MaPrimeRénov\' rénovation d\'ampleur : au moins deux postes d\'isolation, gain d\'au moins deux classes de DPE et accompagnement obligatoire par Mon Accompagnateur Rénov\'. Le montant dépend de vos revenus'+(st==='bail'?' et le logement doit être loué en résidence principale.':'.')+'':(mprCls==='maybe'?'Possible si votre logement est classé E, F ou G. Faites réaliser un audit énergétique pour le savoir. Il faut aussi gagner au moins deux classes et être accompagné par Mon Accompagnateur Rénov\'.':'Pas dans votre cas : '+why.join(', ')+'.');
      h+=aid(mprCls,'MaPrimeRénov\' rénovation d\'ampleur',mprCls==='yes'?'Possible':(mprCls==='maybe'?'À vérifier':'Non'),txt);
      h+=aid(old2?'maybe':'no','Primes CEE',old2?'Selon le montage':'Non',old2?'Non cumulables avec MaPrimeRénov\' rénovation d\'ampleur. Elles restent possibles si vous ne passez pas par MaPrimeRénov\'.':'Les primes CEE concernent les logements de plus de 2 ans.');
    }
    out.innerHTML=h;
  }
  sim.addEventListener('change',run);run();
}

/* Recherche de commune */
var zq=document.getElementById('z-q'),zr=document.getElementById('z-res'),zd=document.getElementById('z-data');
if(zq&&zr&&zd){
  var Z=JSON.parse(zd.textContent);
  function norm(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,' ').trim().replace(/\bst\b/g,'saint').replace(/\bste\b/g,'sainte')}
  var idx=Z.map(function(z){return [norm(z[0]),z]});
  zq.addEventListener('input',function(){
    var q=norm(zq.value);zr.className='z-res';
    if(q.length<2){zr.textContent='Saisissez au moins deux lettres.';return}
    var exact=idx.filter(function(x){return x[0]===q}),starts=idx.filter(function(x){return x[0].indexOf(q)===0}),inc=idx.filter(function(x){return x[0].indexOf(q)>=0});
    var hits=exact.length?exact:(starts.length?starts:inc);
    if(!hits.length){zr.className='z-res ko';zr.textContent='Cette commune n’est pas dans notre liste des 30 km. Appelez-nous au 06 26 72 61 93 : nous regardons au cas par cas.';return}
    if(hits.length>1&&!exact.length){zr.className='z-res ok';zr.innerHTML='';zr.appendChild(document.createTextNode(hits.length+' communes correspondent : '));hits.slice(0,8).forEach(function(h,i){var a=document.createElement('a');a.href=h[1][3];a.textContent=h[1][0];if(i)zr.appendChild(document.createTextNode(', '));zr.appendChild(a)});if(hits.length>8)zr.appendChild(document.createTextNode('…'));return}
    var z=hits[0][1];zr.className='z-res ok';zr.innerHTML='';
    zr.appendChild(document.createTextNode('Oui, nous intervenons à '+z[0]+' ('+z[1]+')'+(z[2]<1?'. ':', à '+String(z[2]).replace('.',',')+' km de Vichy. ')));
    var a=document.createElement('a');a.href=z[3];a.textContent='Voir le secteur de '+z[4];zr.appendChild(a);
  });
}
})();
