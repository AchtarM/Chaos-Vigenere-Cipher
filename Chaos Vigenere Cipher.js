function mod(n, m) {
  return ((n % m) + m) % m;
}

function choasKeys(text, k0, r) {
  let value;
  let k = [k0];
  let kString;
  let myKey = [];
  let plaintext;
  plaintext = text.split(" ").join("");
  
  for (let i = 0; i <= text.length; i++) {
    value = mod(r * k[i] * (1 - k[i]), 100003);
    if (value !== 100002) {
      k.push(value);
    }
  }

  k.shift();
  kString = k.toString().split(",").join("");
  kString = kString.match(/.{1,2}/g);

  for (let j = 0; j < plaintext.length; j++) {
    myKey.push(kString[j]);
  }

  return myKey;
};


function isUpperCase(letter) {
  var l = letter.charCodeAt();
  if (l > 64 && l < 91) {
    return true;
  }
  else {
    return false;
  }
}

function isLowerCase(letter) {
  let l = letter.charCodeAt();
  if (l > 96 && l < 123) {
    return true;
  }
  else {
    return false;
  }
}

function encrypt(plaintext, key) {
  let encrypted = "";
  let keys = [...key];
  keys = keys.map(item => +item);


  for (let i = 0; i < plaintext.length; i++) {
    let currentLetter = plaintext[i];
    const A = 65;
    const a = 97;

    if (isUpperCase(currentLetter)) {
      let Pi = (currentLetter.charCodeAt(0) - A);
      let Ki = keys.shift();
      let upperLetter = mod(Pi + Ki, 26);

      encrypted += String.fromCharCode(upperLetter + A);
    }
    else if (isLowerCase(currentLetter)) {
      let Pi = (currentLetter.charCodeAt() - a);
      let Ki = keys.shift();
      let lowerLetter = mod(Pi + Ki, 26);

      encrypted += String.fromCharCode(lowerLetter + a);
    }
    else {
      encrypted += currentLetter;
    }
  }
  return encrypted;
}


function decrypt(enc, key) {
  let decrypted = "";
  let keys = [...key];
  keys = keys.map(item => +item);

  for (let i = 0; i < enc.length; i++) {
    let currentLetter = enc[i];
    const A = 65;
    const a = 97;

    if (isUpperCase(currentLetter)) {
      let Ci = (currentLetter.charCodeAt(0) - A);
      let Ki = keys.shift();
      let upperLetter = mod(Ci - Ki, 26);

      decrypted += String.fromCharCode(upperLetter + A);
    }
    else if (isLowerCase(currentLetter)) {
      let Ci = (currentLetter.charCodeAt(0) - a);
      let Ki = keys.shift();
      let lowerLetter = mod(Ci - Ki, 26);
      decrypted += String.fromCharCode(lowerLetter + a);
    }
    else {
      decrypted += currentLetter;
    }
  }
  return decrypted;
}

let plaintext = "The him father parish looked has sooner. Attachment frequently buy terminated son. You smaller nay use prudent placing.Passage to so distant behaved natural between do talking. Friends off her windows painful. Still bay event you being think nay for.In three if aware he point it. Effects warrant me by no on feeling settled resolve. Sudden she seeing garret far regard. By hardly it direct if pretty up regret. Ability thought enquire settled prudent you sir. Or easy knew sold on well come year. Something consulted age extremely end procuring. Collecting preference he inquietude projection me in by. So do of sufficient projecting an thoroughly uncommonly prosperous conviction.Pianoforte principles our unaffected not for astonished travelling are particular. He difficult contented we determine ourselves me am earnestly. Hour no find it park. Eat welcomed any husbands moderate. Led was misery played waited almost cousin living. Of intention contained is by middleton am.Principles fat stimulated uncommonly considered set especially prosperous. Sons at park mr meet as fact like. At as in understood an remarkably solicitude.Mean them very seen she she. Use totally written the observe pressed justice. Instantly cordially far intention recommend estimable yet her his.Ladies stairs enough esteem add fat all enable. Needed its design number winter see. Oh be me sure wise sons no.Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up.Prevailed sincerity behaviour to so do principle mr. As departure at no propriety zealously my. On dear rent if girl view. First on smart there he sense.Earnestly enjoyment her you resources. Brother chamber ten old against. Mr be cottage so related minuter is.Delicate say and blessing ladyship exertion few margaret. Delight herself welcome against smiling its for.Suspected discovery by he affection household of principle perfectly he. Prepared do an dissuade be so whatever steepest. Yet her beyond looked either day wished nay. By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour.An dispatched impossible of of melancholy favourable. Our quiet not heart along scale sense timed.Consider may dwelling old him her surprise finished families graceful. Gave led past poor met fine was new.Dispatched entreaties boisterous say why stimulated. Certain forbade picture now prevent carried she get see sitting.Up twenty limits as months. Inhabit so perhaps of in to certain. Bex excuse chatty was seemed warmth.Nay add far few immediate sweetness earnestly dejection. Real sold my in call. Invitation on an advantages collecting.But event old above shy bed noisy. Had sister see wooded favour income has. Stuff rapid since do as hence. Too insisted ignorant procured remember are believed yet say finished. Ecstatic advanced and procured civility not absolute put continue.Overcame breeding or my concerns removing desirous so absolute. My melancholy unpleasing imprudence considered in advantages so impression.Almost unable put piqued talked likely houses her met. Met any nor may through resolve entered.An mr cause tried oh do shade happy. Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle.Any nay pleasure entrance prepared her.";

let encrypted = encrypt(plaintext, choasKeys(plaintext, 6, 7));
let decrypted = decrypt(encrypted, choasKeys(plaintext, 6, 7));

console.log(encrypted);
console.log("................................................>")
console.log(decrypted);

