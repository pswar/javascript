/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Run following command in your browser to launch this utility(be sure to update the url for this file in below command). 
 * Wrote this code long time ago so it's possible some parts are out of date or invalid.
 * 
javascript:var _s = document.createElement('script');_s.type = 'text/javascript';_s.src = "<location of this file>/pagestats.js?"+(new Date());document.getElementsByTagName("head")[0].appendChild(_s);alert("A new window with results opened...");
 * 
*/

(function () {
	function writeToConsole(pStr)
	{
	    if (window.console)
	        window.console.info(pStr);
	}
	if (window.console)
    {
        window.console.group("Page info for: " + document.location.href + ' @ ' + (new Date()));
    }
    
    var tblStyle = 'style="background-color: rgb(255, 255, 240);border-collapse: collapse;border-color: gray gray gray gray;"';
    var gTotal = 0;
    var h = '<div style="font-family:Georgia,tahoma,verdana;font-size:80%">';
    h += '<h2>' + document.location.href + '</h2> <b>@ ' + (new Date()) + '</b>';
    //debugger;
    h += '<hr/>';
    h += '<p align=right><b>???</b> - Not supported by this browser</p>';
    
    h += '<h3>Summary: </h3>';
    h += '<table border=1 cellspacing=0 ' + tblStyle + '>';
    h += '<tr>';
    h += '<td><b>User Agent</b></td><td>' + window.navigator.userAgent + '</td>';
    h += '</tr>';
    if (document.fileSize)
    {
        h += '<tr style="background-color:#00ffff">';
        h += '<td><b>Document file size</b></td><td><b>' + document.fileSize + ' Bytes</b></td>';
        h += '</tr>';
    }
    if (document.body)
    {
        h += '<tr style="background-color:#00ffff">';
        h += '<td><b>Raw document html size</b></td><td><b>' + document.body.innerHTML.length + ' Bytes</b></td>';
        h += '</tr>';
    }
    h += '<tr>';
    h += '<td>Cookie size</td><td><a href="#DisplayRaw" title="Click to see raw cookie" onclick="alert(document.cookie); return false;">' + document.cookie.length + ' Bytes</a></td>';
    h += '</tr>';
    h += '<tr>';
    h += '<td>Number of FRAMES</td><td>' + window.frames.length + '</td>';
    h += '</tr>';
    h += '<tr>';
    h += '<td>Number of LINKS</td><td>' + document.links.length + '</td>';
    h += '</tr>';
    h += '<tr>';
    h += '<td>Number of FORMS</td><td>' + document.forms.length + '</td>';
    h += '</tr>';
    h += '<tr>';
    h += '<tr>';
    var tmp = document.getElementsByTagName('div');
    h += '<td>Number of DIVs</td><td>' + tmp.length + '</td>';
    h += '</tr>';
    h += '<tr>';
    tmp = document.getElementsByTagName('span');
    h += '<td>Number of SPANs</td><td>' + tmp.length + '</td>';
    h += '</tr>';
    h += '<tr>';
    tmp = document.getElementsByTagName('table');
    h += '<td>Number of TABLEs</td><td>' + tmp.length + '</td>';
    h += '</tr>';
    h += '<tr>';
    h += '<tr style="background-color:#00ffff">';
    tmp = document.getElementsByTagName('*');
    h += '<td>Total number of HTML Elements</td><td>' + tmp.length + '</td>';
    h += '</tr>';
    h += '<td>Size of inline JS</td><td id="tdInlineJS"><!--tdInlineJS--></td>';
    h += '</tr>';
    if (document.all)
    {
        h += '<tr>';
        h += '<td>Total HTML elements on the page</td><td>' + document.all.length + '</td>';
        h += '</tr>';
    }
    h += '<tr>';
    h += '<td>Size of inline CSS</td><td id="tdInlineCSS"><!--tdInlineCSS--></td>';
    h += '</tr>';
    if (document.scripts)
    {
        h += '<tr>';
        h += '<td>SCRIPTS on the page</td><td>' + document.scripts.length + '</td>';
        h += '</tr>';
        h += '</table>';
    }
    h += '</table>';
    
    h += '<h3>JavaScript: </h3>';
    var scripts = document.getElementsByTagName("script");

    var cnt = 1, tot = 0;
    h += '<table border=1 cellspacing=0 ' + tblStyle + '>';
    h += '<tr style="background-color: rgb(204, 204, 204);font-weight:bold">';
    h += '<td>&nbsp;</td>';
    h += '<td>JS File path/JS Text</td>';
    h += '<td>File/Texte Size</td>';
    h += '</tr>';
    writeToConsole("Total Scripst: " + scripts.length);
    for (var i=0; i < scripts.length; i++)
    {
        if (scripts[i].src)
        {
            if (scripts[i].src.indexOf('sathish.js') > 0)
                continue;
            
            h += '<tr>';
            h += '<td>' + (cnt++) + '</td>';
            h += '<td>';
            h += '<a href="' + scripts[i].src + '" target=_new title="' + scripts[i].src + '">' + (scripts[i].src.substr(0, 80)) + (scripts[i].src.length > 80 ? '...' : '') + '</a>';
            h += '</td>';
            h += '<td>';
            h += '???';
            h += '</td>';
            h += '</tr>';
        }
        else
        {
            h += '<tr style="' + ( (scripts[i].innerHTML.length>500)?'background-color:rgb(255, 102, 0);':'' ) + '">';
            h += '<td>' + (cnt++) + '</td>';
            h += '<td>';
            h += 'Inline JS: <br/><textarea style="width:600px">' + (scripts[i].innerHTML) + '</textarea><br/>' + ( scripts[i].innerHTML.length<2 ? '<span style="background-color:red">EMPTY SCRIPT TAG!</span>':'' ) ;
            h += '</td>';
            h += '<td>';
            var tmp = parseInt(scripts[i].innerHTML.length);
            tot += tmp;
            h += tmp + ' Bytes';
            h += '</td>';
            h += '</tr>';
        }
    }
    gTotal += tot;
    h = h.replace('<!--tdInlineJS-->', tot + ' Bytes');
    writeToConsole('Inline JS size: ' + tot + ' Bytes');
    h += '<tr style="background-color:#d4d0c8"><td>&nbsp;</td><td style="text-align:right">Total Inline JS size:</td><td><b>' + tot + ' Bytes</b></td></tr>';
    h += '</table>';
    h += '<b>Note: Consider optimizing the highlighted items.</b>'

    h += '<hr/>';
    h += '<h3>Inline CSS: </h3>';
    cnt = 1;
    var styls = document.getElementsByTagName("style");
    tot = 0;
    h += '<table border=1 cellspacing=0 ' + tblStyle + '>';
    h += '<tr style="background-color: rgb(204, 204, 204);font-weight:bold">';
    h += '<td>&nbsp;</td>';
    h += '<td>CSS Text</td>';
    h += '<td>Size</td>';
    h += '</tr>';
    for (var i=0; i < styls.length; i++)
    {
        h += '<tr style="' + ( (styls[i].innerHTML.length>500)?'background-color:rgb(255, 102, 0);':'' ) + '">';
        h += '<td>' + (cnt++) + '</td>';
        h += '<td>';
        h += 'Inline CSS: <br/><textarea style="width:600px">' + (styls[i].innerHTML) + '</textarea><br/>' + ( styls[i].innerHTML.length<2 ? '<span style="background-color:red">EMPTY SCRIPT TAG!</span>':'' ) ;
        h += '</td>';
        h += '<td>';
        var tmp = styls[i].innerHTML.length;
        tot += tmp;
        h += tmp + ' Bytes';
        h += '</td>';
        h += '</tr>';
    }
    gTotal += tot;
    writeToConsole('Inline CSS Size: ' + tot + ' Bytes');
    h = h.replace('<!--tdInlineCSS-->', tot + ' Bytes');
    h += '<tr style="background-color:#d4d0c8"><td>&nbsp;</td><td style="text-align:right">Total Inline CSS size:</td><td><b>' + tot + ' Bytes</b></td></tr>';
    h += '</table>';
    h += '<b>Note: Consider optimizing the highlighted items.</b>'

    h += '<hr/>';
    h += '<h3>External CSS: </h3>';
    cnt = 1;
    tot = 0;
    var styls = document.styleSheets;
    h += '<table border=1 cellspacing=0 ' + tblStyle + '>';
    for (var i=0; i < styls.length; i++)
    {
        if (styls[i].href && location.href.indexOf(styls[i].href) < 0)
        {
            h += '<tr>';
            h += '<td>' + (cnt++) + '</td>';
            h += '<td>';
            h += '<a href="' + styls[i].href + '" target=_new title="' + styls[i].href + '">' + (styls[i].href.substr(0, 80)) + (styls[i].href.length > 80 ? '...' : '') + '</a>';
            h += '</td>';
            h += '<td>';
            if (typeof(styls[i].cssText) != 'unknown' && styls[i].cssText)
            {
                h += styls[i].cssText.length + ' Bytes';
                tot += styls[i].cssText.length;
            }
            else
                h += '???';
            h += '</td>';
            h += '</tr>';
        }
    }
    gTotal += tot;
    h += '<tr style="background-color:#d4d0c8"><td>&nbsp;</td><td style="text-align:right">Total External CSS size:</td><td><b>' + tot + ' Bytes</b></td></tr>';
    h += '</table>';
    h += '<b>Note: Consider optimizing the items in red color.</b>'
    
    h += '<hr/>';
    cnt = 1;
    tot = 0;
    var imgs = document.images;
    h += '<h3>Images: </h3>';
    h += '<table border=1 cellspacing=0 ' + tblStyle + '>';
    h += '<tr style="background-color: rgb(204, 204, 204);font-weight:bold">';
    h += '<td>&nbsp;</td>';
    h += '<td>File path</td>';
    h += '<td>File Size</td>';
    h += '</tr>';
    var totImgSize = 0;
    writeToConsole("Total Images: " + imgs.length);
    for (var i=0; i < imgs.length; i++)
    {
        h += '<tr>';
        h += '<td>' + (cnt++) + '</td>';
        h += '<td>';
        if (imgs[i].src)
            h += '<a href="' + imgs[i].src + '" target=_new title="' + imgs[i].src + '">' + (imgs[i].src.substr(0, 80)) + (imgs[i].src.length > 80 ? '...' : '') + '</a>';
        else
            h += 'Empy IMG tag! <b>REMOVE IT</b>';
            
        h += '</td>';
        if (imgs[i].fileSize)
        {
            var sz = imgs[i].fileSize;
            if (parseFloat(sz) > 0)
                totImgSize += parseFloat(sz);
            h += '<td style="' + ( (sz>50)?'background-color:red':'' ) + '">';
            if (sz)
                h += sz + ' Bytes';
            h += '</td>';
        }
        else
            h += '<td>???</td>';
        h += '</tr>';
    }
    gTotal += totImgSize;
    h += '<tr style="background-color:#d4d0c8"><td>&nbsp;</td><td style="text-align:right">Total size of the images:</td><td><b>' + totImgSize + ' Bytes</b></td></tr>';
    h += '</table>';
    h += '<b>Note: Consider optimizing the highlighted items.</b>'

    //Display grant total
    h += '<p style="background-color:#00ffff"><b>Total (Inline JS + Size of the images + Inline CSS + External CSS): <u>' + gTotal + ' Bytes (~' + Math.round(gTotal/1024) + ' KB)</u></b> (This is accurate only in the browser where it is supported)</p>';

    h += '</div>';

    var url = "";
    var win = window.open(url, 'w' + parseInt(1000*Math.random()), '');
    if (win != null && !win) {
    	win.document.write(h);
	    if (!document.all)
	        win.document.close();
	} else {
		alert("Popup blocker enabled, writing the report to the page.");
		var div = document.createElement('div');
		div.innerHTML = h;
		document.body.appendChild(div);
	}
    h = '';
    if (window.console)
        window.console.groupEnd();
})();