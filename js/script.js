setInterval(function time() {
  let dateToday = new Date();
    let hours = dateToday.getUTCHours(); /*Atribuindo a hora UTC a variável hours*/
    let min = dateToday.getMinutes(); /*Atribuindo o minuto exato a variável min*/
    let sec = dateToday.getSeconds(); /*Atribuindo o segundo exato a variável seg*/

    let brhr = hours - 3
    let auhr = hours + 11
    let cchr = hours + 2
    let rohr = hours + 1
    let tohr = hours + 9
    let wahr = hours -5
    let ndhr = hours + 1
    let cmhr = hours - 6

    if (brhr <0) {brhr = brhr + 24;} else if (brhr > 24) {brhr = brhr - 24;};
    if (auhr <0) {auhr = auhr + 24;} else if (auhr > 24) {auhr = auhr - 24;};
    if (cchr <0) {cchr = cchr + 24;} else if (cchr > 24) {cchr = cchr - 24;};
    if (rohr <0) {rohr = rohr + 24;} else if (rohr > 24) {rohr = rohr - 24;};
    if (tohr <0) {tohr = tohr + 24;} else if (tohr > 24) {tohr = tohr - 24;};
    if (wahr <0) {wahr = wahr + 24;} else if (wahr > 24) {wahr = wahr - 24;};
    if (ndhr <0) {ndhr = ndhr + 24;} else if (ndhr > 24) {ndhr = ndhr - 24;};
    if (cmhr <0) {cmhr = cmhr + 24;} else if (cmhr > 24) {cmhr = cmhr - 24;};

    if (brhr <10) brhr = '0' + brhr;
    if (auhr <10) auhr = '0' + auhr;
    if (cchr <10) cchr = '0' + cchr;
    if (rohr <10) rohr = '0' + rohr;
    if (tohr <10) tohr = '0' + tohr;
    if (wahr <10) wahr = '0' + wahr;
    if (ndhr <10) ndhr = '0' + ndhr;
    if (cmhr <10) cmhr = '0' + cmhr;
    if (min <10) min = '0' + min;
    if (sec <10) sec = '0' + sec;

    
    brhoras.textContent = brhr; /*textContent altera o que está escrito no span de mesmi ID pra mostrar o que está dentro da variável brhr*/
    brminutos.textContent = min;
    brsegundos.textContent = sec;

    auhoras.textContent = auhr; /*textContent altera o que está escrito no span pra mostrar o que está dentro da variável hr*/
    auminutos.textContent = min;
    ausegundos.textContent = sec;

    cchoras.textContent = cchr; /*textContent altera o que está escrito no span pra mostrar o que está dentro da variável hr*/
    ccminutos.textContent = min;
    ccsegundos.textContent = sec;

    rohoras.textContent = rohr; /*textContent altera o que está escrito no span pra mostrar o que está dentro da variável hr*/
    rominutos.textContent = min;
    rosegundos.textContent = sec;

    tohoras.textContent = tohr; /*textContent altera o que está escrito no span pra mostrar o que está dentro da variável hr*/
    tominutos.textContent = min;
    tosegundos.textContent = sec;

    wahoras.textContent = wahr; /*textContent altera o que está escrito no span pra mostrar o que está dentro da variável hr*/
    waminutos.textContent = min;
    wasegundos.textContent = sec;

    cmhoras.textContent = cmhr; /*textContent altera o que está escrito no span pra mostrar o que está dentro da variável hr*/
    cmminutos.textContent = min;
    cmsegundos.textContent = sec;

    ndhoras.textContent = ndhr; /*textContent altera o que está escrito no span pra mostrar o que está dentro da variável hr*/
    ndminutos.textContent = min;
    ndsegundos.textContent = sec;
})