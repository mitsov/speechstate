(this.webpackJsonpspeechstate=this.webpackJsonpspeechstate||[]).push([[0],{170:function(t,e,n){},218:function(t,e){},357:function(t,e){},360:function(t,e){},364:function(t,e){},365:function(t,e){},366:function(t,e){},367:function(t,e){},368:function(t,e){},456:function(t,e,n){"use strict";n.r(e);var i=n(166),s=n(19),a=(n(170),n(14),n(159)),o=n(15),r=n(94),c=n(3),u=n(459),l=n(460),d=o.a.send,p=o.a.assign,f=o.a.choose,m={version:"3.3",session:{session:{my_frontend:{user_id:"speechstate",position:{latitude:"57.699188",longitude:"11.948313"}}}},request:{start_session:{}}},b=function(t){return fetch(new Request("https://sfi-language-learning-orchestration-pipeline.eu2.ddd.tala.cloud/interact",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)})).then((function(t){return t.json()}))},g=p({sessionId:function(t,e){return e.data.session.session_id},tdmUtterance:function(t,e){return e.data.output.utterance},tdmVisualOutputInfo:function(t,e){return(e.data.output.visual_output||[{}])[0].visual_information},tdmExpectedAlternatives:function(t,e){return(e.data.context.expected_input||{}).alternatives},tdmPassivity:function(t,e){return e.data.output.expected_passivity},tdmActions:function(t,e){return e.data.output.actions}}),j=f([{cond:function(t){return(t.tdmExpectedAlternatives||[{}])[0].visual_information},actions:[d({type:"SHOW_PICTURES"})]}]),v={initial:"init",states:{init:{on:{CLICK:"tdm"}},tdm:{initial:"start",states:{start:{invoke:{id:"startSession",src:function(t,e){return b(m)},onDone:[{target:"utter",actions:g,cond:function(t,e){return e.data.output}},{target:"fail"}],onError:{target:"fail"}}},utter:{initial:"prompt",on:{RECOGNISED:"next",SELECT:{target:"nextHaptic",actions:p({hapticInput:function(t,e){return e.value}})},TIMEOUT:"passivity"},states:{prompt:{entry:[j,d((function(t){return{type:"SPEAK",value:t.tdmUtterance}}))],on:{ENDSPEECH:[{target:"#root.dm.init",cond:function(t,e){return t.tdmActions.some((function(t){return"EndSession"===t.name}))}},{target:"ask"}]}},ask:{entry:d("LISTEN")}}},next:{invoke:{id:"nlInput",src:function(t,e){return b((n=t.sessionId,i=t.recResult,{version:"3.3",session:{session_id:n},request:{natural_language_input:{modality:"speech",hypotheses:i}}}));var n,i},onDone:[{target:"utter",actions:g,cond:function(t,e){return e.data.output}},{target:"fail"}],onError:{target:"fail"}}},nextHaptic:{invoke:{id:"hapticInput",src:function(t,e){return b((n=t.sessionId,i=t.hapticInput,{version:"3.3",session:{session_id:n},request:{semantic_input:{interpretations:[{modality:"haptic",moves:[{perception_confidence:1,understanding_confidence:1,semantic_expression:i}]}]}}}));var n,i},onDone:[{target:"utter",actions:g,cond:function(t,e){return e.data.output}},{target:"fail"}],onError:{target:"fail"}}},passivity:{invoke:{id:"passivity",src:function(t,e){return b({version:"3.3",session:{session_id:t.sessionId},request:{passivity:{}}})},onDone:[{target:"utter",actions:g,cond:function(t,e){return e.data.output}},{target:"fail"}],onError:{target:"fail"}}},fail:{}}}}},O="_"+Math.random().toString(36).substr(2,9),E=(Object(c.b)({ttsAgenda:function(t,e){return"\u041f\u0440\u0438\u0432\u0435\u0442! \u0421\u043f\u0440\u043e\u0441\u0438 \u043c\u0435\u043d\u044f \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c."}}),Object(c.q)((function(t){return{type:"SPEAK",value:t.ttsAgenda}})),Object(c.q)("LISTEN"),Object(c.b)({ttsAgenda:function(t,e){return e.data.data.answer}}),Object(c.q)((function(t){return{type:"SPEAK",value:"Repainting to ".concat(t.recResult[0].utterance)}})));function S(t){return Object(c.q)((function(e){return{type:"SPEAK",value:t}}))}var h={initial:"init",states:{init:{on:{CLICK:"welcome"}},welcome:{initial:"prompt",on:{RECOGNISED:[{target:"repaint"}]},states:{prompt:{entry:S("Tell me the colour"),on:{ENDSPEECH:"ask"}},ask:{entry:Object(c.q)("LISTEN")}}},stop:{entry:S("Ok"),always:"init"},repaint:{initial:"prompt",states:{prompt:{entry:E,on:{ENDSPEECH:"repaint"}},repaint:{entry:"changeColour",always:"#root.dm.welcome"}}}}},y=n(160),T=n.n(y),x=n(163),R=n.n(x),k=n(9),C=h;C=v;var N=o.a.send,I=o.a.cancel,A="northeurope";Object(l.a)({url:"https://statecharts.io/inspect",iframe:!1});var _=Object(r.a)({id:"root",type:"parallel",states:{dm:Object(s.a)({},C),gui:{initial:"micOnly",states:{micOnly:{on:{SHOW_PICTURES:"pictureList"}},pictureList:{on:{SELECT:"micOnly"}}}},asrtts:{initial:"getToken",states:{getToken:{invoke:{id:"getAuthorizationToken",src:function(t,e){return w()},onDone:{actions:[Object(c.b)((function(t,e){return{azureAuthorizationToken:e.data}})),"ponyfillASR"],target:"ponyfillTTS"},onError:{target:"fail"}}},ponyfillTTS:{invoke:{id:"ponyTTS",src:function(t,e){return function(e,n){var i=R()({credentials:{region:A,authorizationToken:t.azureAuthorizationToken}}),s=i.speechSynthesis,a=i.SpeechSynthesisUtterance;t.tts=s,t.ttsUtterance=a,t.tts.addEventListener("voiceschanged",(function(){t.tts.cancel();var n=t.tts.getVoices(),i=RegExp("en-US","u");i=RegExp("sv-SE","u");var s=n.find((function(t){return i.test(t.name)}));s?(t.voice=s,e("TTS_READY")):(console.error("TTS_ERROR: Could not get voice for regexp ".concat(i)),e("TTS_ERROR"))}))}}},on:{TTS_READY:"idle",TTS_ERROR:"fail"}},idle:{on:{LISTEN:"recognising",SPEAK:{target:"speaking",actions:Object(c.b)((function(t,e){return{ttsAgenda:e.value}}))}}},recognising:{initial:"noinput",exit:"recStop",on:{ASRRESULT:{actions:["recLogResult",Object(c.b)((function(t,e){return{recResult:e.value}}))],target:".match"},RECOGNISED:"idle",SELECT:"idle",CLICK:".pause"},states:{noinput:{entry:["recStart",N({type:"TIMEOUT"},{delay:function(t){return 1e4},id:"timeout"})],on:{TIMEOUT:"#root.asrtts.idle",STARTSPEECH:"inprogress"},exit:I("timeout")},inprogress:{},match:{entry:N("RECOGNISED")},pause:{entry:"recStop",on:{CLICK:"noinput"}}}},speaking:{entry:"ttsStart",on:{ENDSPEECH:"idle",SELECT:"idle",CLICK:{target:"idle",actions:N("ENDSPEECH")}},exit:"ttsStop"},fail:{}}}}},{actions:{recLogResult:function(t){console.log("<< ASR: "+t.recResult[0].utterance)},test:function(){console.log("test")},logIntent:function(t){console.log("<< NLU intent: "+t.nluData.intent.name)}}}),L=function(t){switch(!0){case t.state.matches({asrtts:"fail"})||t.state.matches({dm:"fail"}):return Object(k.jsxs)("div",{className:"control",children:[Object(k.jsx)("div",{className:"status",children:"Something went wrong..."}),Object(k.jsx)("button",Object(s.a)({type:"button",className:"circle",style:{}},t))]});case t.state.matches({asrtts:{recognising:"pause"}}):return Object(k.jsxs)("div",Object(s.a)(Object(s.a)({className:"control"},t),{},{children:[Object(k.jsx)("div",{className:"status-talk",children:"click to continue"}),Object(k.jsx)("button",{type:"button",className:"circle",style:{}})]}));case t.state.matches({asrtts:"recognising"}):var e=t.state.context.tdmVisualOutputInfo||[];return Object(k.jsxs)("div",{className:"control",children:[Object(k.jsx)("div",{className:"status-talk",children:(e.find((function(t){return"text"===t.attribute}))||{value:"listening..."}).value}),Object(k.jsx)("button",Object(s.a)({type:"button",className:"circle",style:{animation:"bordersize 2s infinite"}},t))]});case t.state.matches({asrtts:"speaking"}):return Object(k.jsxs)("div",{className:"control",children:[Object(k.jsx)("div",{className:"status",children:"speaking..."}),Object(k.jsx)("button",Object(s.a)({type:"button",className:"circle-speaking",style:{animation:"bordering 2s infinite"}},t))]});case t.state.matches({dm:"init"}):return Object(k.jsxs)("div",Object(s.a)(Object(s.a)({className:"control"},t),{},{children:[Object(k.jsx)("div",{className:"status-talk",children:"click to start!"}),Object(k.jsx)("button",{type:"button",className:"circle-click",style:{}})]}));default:return Object(k.jsxs)("div",{className:"control",children:[Object(k.jsx)("div",{className:"status-talk"}),Object(k.jsx)("button",Object(s.a)({type:"button",className:"circle",style:{background:"#fff"}},t))]})}},P=function(t){console.log(t);var e=t.alternative.find((function(t){return"name"===t.attribute})).value,n=(t.alternative.find((function(t){return"image"===t.attribute}))||{}).value;return Object(k.jsxs)("figure",Object(s.a)(Object(s.a)({className:"flex"},t),{},{children:[n&&Object(k.jsx)("img",{src:n,alt:e}),Object(k.jsx)("figcaption",{children:e})]}))};function D(){var t=Object(u.b)(_,{devTools:!0,actions:{recStart:Object(u.a)((function(t){console.log("Ready to receive a voice input."),t.asr.start()})),recStop:Object(u.a)((function(t){console.log("Recognition stopped."),t.asr.abort()})),ttsStart:Object(u.a)((function(t){var e=new t.ttsUtterance(t.ttsAgenda);e.voice=t.voice,e.onend=function(){return s("ENDSPEECH")},t.tts.speak(e)})),ttsStop:Object(u.a)((function(t){console.log("TTS STOP..."),t.tts.cancel()})),ponyfillASR:Object(u.a)((function(t,e){var n=T()({credentials:{region:A,authorizationToken:t.azureAuthorizationToken}}).SpeechRecognition;t.asr=new n,t.asr.lang="sv-SE",t.asr.continuous=!0,t.asr.interimResults=!0,t.asr.onresult=function(t){var e=t.results[0];e.isFinal?s({type:"ASRRESULT",value:[{utterance:e[0].transcript,confidence:e[0].confidence}]}):s({type:"STARTSPEECH"})}}))}}),e=Object(i.a)(t,2),n=e[0],s=e[1],a=(n.context.tdmExpectedAlternatives||[]).filter((function(t){return t.visual_information})).map((function(t,e){return Object(k.jsx)(P,{state:n,alternative:t.visual_information,onClick:function(){return s({type:"SELECT",value:t.semantic_expression})}},e)}));return n.matches({gui:"pictureList"})?Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(L,{state:n,alternative:{},onClick:function(){return s("CLICK")}}),Object(k.jsx)("div",{className:"select-wrapper",children:Object(k.jsx)("div",{className:"select",children:a})})]}):Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(L,{state:n,alternative:{},onClick:function(){return s("CLICK")}})})}var w=function(){return fetch(new Request("https://northeurope.api.cognitive.microsoft.com/sts/v1.0/issuetoken",{method:"POST",headers:{"Ocp-Apim-Subscription-Key":"2e15e033f605414bbbfe26cb631ab755"}})).then((function(t){return t.text()}))},U=document.getElementById("root");a.render(Object(k.jsx)(D,{}),U)}},[[456,1,2]]]);
//# sourceMappingURL=main.a2f9868f.chunk.js.map