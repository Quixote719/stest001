var filter_keyword=getParameterByName("filter-term");
$( document ).ready(function() {
	if(filter_keyword&&filter_keyword.length>0){
		document.getElementById("filter-term").value=filter_keyword;
	}
});
var pages=0;
var itemCount=0;
var resultsPerPage=20;
var currentPage=0;

var itemIndex=0;
var urlIndex=1;
var urlTextIndex=2;
var descriptionIndex=3;
var keywordIndex=4;

var theSpans = new Array();
var theResults = new Array();
var BRS_ZEROWASTE_DISPOSAL_ITEM = 6;

var resultsMessage;

writeResults();


function writeResults(){
	document.getElementById("results-div").innerHTML='<span class="red_bold">Searching...</span>';
	setTimeout(writeResultsText,10);
}

function writeResultsText() {
	resultsMessage = '';
	if (filter_keyword.length > 0){
		resultsMessage = filter_keyword;
	} else {
		resultsMessage = 'Displaying all results';
	}
	itemCount = 0;

	var url = 'http://dsnydev.wpengine.com/wp-json/wp/v2/posts?search=' + filter_keyword + '&categories='+BRS_ZEROWASTE_DISPOSAL_ITEM;
	console.log(url)
	$.ajax( {
			url: url,
			datatype: "json",
			success: function ( data ) {
				console.log('success: ' + data)
				theSpans = results(data)
				showResults();
			},
			error: function (a,b,c) {
				console.log('error');
			},
			cache: false
		} );

	showResults();
}

function results(data) {
	var spans = new Array();
	theResults = new Array();
	var theString = '';
	var post,link,linkHtml,title,excerptHtml;
	if (data.length > 0) {
		resultsMessage = 'Displaying all results';
	}

	for (var i = 0; i < data.length; i++) {
		post = data[i];
		link = post.dsny_url;
		title = post.dsny_title;
		linkHtml = '<a href="' + link + '">' + title + '</a>';
		excerptHtml = post.excerpt.rendered;
		theString = theString + '<div class="results_entry"><b>' + linkHtml + '</b><br>'
				+ excerptHtml + '<br>'
				+ '</div>';
		theResults[theResults.length] = title;
		itemCount++;
		if (itemCount%resultsPerPage == 0 && i < data.length - 1) {
			spans[spans.length] = theString;
			theString = '';
		}		
	}

	if (theString.length > 0){
		spans[spans.length] = theString;
	}

	return (spans);
}

function showResults() {
	var theResults = '<h4>Search Results:</h4><div class="row"><div class="span6">' + resultsMessage + '</div><div class="span6 filter-pagination" id="topLinks"></div></div><hr>';
	theResults = theResults + '<div class="span12" id="resultsSpan"></div><hr>';
	theResults = theResults + '<div class="span12 filter-pagination" id="bottomLinks"></div>';
	document.getElementById("results-div").innerHTML = theResults;
	if (theSpans.length == 0) {
		resultsMessage = '<br><br><span class="red_bold">No results found</span>';
		document.getElementById("results-div").innerHTML = resultsMessage;
	} else {
		showPage(0);
	}
}

function showPage(thePage){
	currentPage=parseInt(thePage);
	document.getElementById('resultsSpan').innerHTML=theSpans[thePage];
	var prevLink="";
	if(thePage>0){
		prevLink="<a class='page_link' href='javascript:showPage("+(thePage-1)+")'>Previous</a> | ";
	}
	var pageLinks=getPageLinks(thePage);
	var nextLink="";
	if(thePage<theSpans.length-1){
		nextLink=" | <a class='page_link' href='javascript:showPage("+(thePage+1)+")'>Next</a>";
	}
	document.getElementById('topLinks').innerHTML=prevLink+pageLinks+nextLink;
	document.getElementById('bottomLinks').innerHTML=prevLink+pageLinks+nextLink;
}
function getPageLinks(thePage){
	var modulo=parseInt(thePage/5);
	var thePageLinks='';
	var maxPages=false;
	if(itemCount>resultsPerPage){
		for(var i=0;i<5;i++){
			if(modulo*5+i<theSpans.length){
				if(modulo*5+i==thePage){
					(i>0)?(thePageLinks=thePageLinks+" <span class='active_link'>"+(modulo*5+i+1)+"</span>"):(thePageLinks=thePageLinks+"<span class='active_link'>"+(modulo*5+i+1)+"</span>");
				}else{
					(i>0)?(thePageLinks=thePageLinks+" <a href='javascript:showPage("+(modulo*5+i)+")' class='page_link'>"+(modulo*5+i+1)+"</a>"):(thePageLinks=thePageLinks+"<a href='javascript:showPage("+(modulo*5+i)+")' class='page_link'>"+(modulo*5+i+1)+"</a>");
				}
			}else{
				maxPages=true;
			}
			if(i==theSpans.length){
				maxPages=true;
			}
		}
		if(!maxPages){
			thePageLinks=thePageLinks+" <a href='javascript:showPage("+(modulo*5+5)+")' class='page_link'>More</a>"
		}
	}
	return(thePageLinks);
}
function getResults(pageNumber){
	var firstItem=(pageNumber)*resultsPerPage+1;
	var lastItem=firstItem+resultsPerPage-1;
	if(lastItem>itemCount){
		lastItem=itemCount;
	}
	return(firstItem+"-"+lastItem);
}



function byLinkText(a,b){
	var theFirst=a[urlTextIndex].toLowerCase();
	var theSecond=b[urlTextIndex].toLowerCase();
	if(theFirst>theSecond){
		return(1);
	}else if(theSecond>theFirst){
		return(-1);
	}else{
		return(0);
	}
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};