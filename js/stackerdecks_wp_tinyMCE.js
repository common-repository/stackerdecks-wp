var SD_domain = "stackerdecks.com";

//Tiny MCE Plugin.....................................
(function() {
	tinymce.create('tinymce.plugins.stackerdecks_wp', {
		init: function(ed, url) {
			ed.addButton('stackerdecks_wp', {
				title: 'Insert Stackerdeck',
				image: url + '/img/stackerdecks_icon_red.png',
				onclick: function() {

					//Check for Stackit Token.......................... 
					stackit_token(ed);

				}
			});
		},
		createControl: function(n, cm) {
			return null;
		},
		getInfo: function() {
			return {
				longname: "Insert Stackerdeck",
				author: 'Stackerdecks.com',
				authorurl: 'http://www.stackerdecks.com',
				infourl: 'http://stackermedia.com',
				version: "1.0"
			};
		}
	});
	tinymce.PluginManager.add('stackerdecks_wp', tinymce.plugins.stackerdecks_wp);
})();


//XML Request.....................................................................

function httrequest(access_key, org_id, callback) {

	var xmlHttp = null;
	xmlHttp = new XMLHttpRequest();
	xmlHttp.ontimeout = function() {
		console.error("The request timed out.");
	};
	console.log(window.location.protocol + "//"+SD_domain+"/callback/wordpress.php?stackit_token=" + access_key);
	xmlHttp.open("GET", window.location.protocol + "//"+SD_domain+"/callback/wordpress.php?stackit_token=" + access_key, true);

	xmlHttp.onload = function(e) {
		if (xmlHttp.readyState === 4) {
			if (xmlHttp.status === 200) {
				//console.log('XML Request');
				if (typeof callback == "function") {
					// apply() sets the meaning of "this" in the callback
					
					callback(xmlHttp.responseText);
				}
			} else {
				console.error(xmlHttp.statusText);
			}
		}
	};
	xmlHttp.onerror = function(e) {
		console.error(xmlHttp.statusText);
	};

	xmlHttp.send(null);


}



//Inject Stackerdeck
function inject_stackerdeck(post_id, target_id)
{
	console.log('Inject Stackerdeck'+target_id);
	document.getElementById(target_id).innerHTML = '';
	
	var SD_add_active = document.getElementById("SD_display_deck");
		SD_add_active.classList.add('SD_deck_active');

	var sd_inject_exit = document.createElement('div');
		sd_inject_exit.id = "SD_inject_exit";
		sd_inject_exit.setAttribute('class', 'SD_inject_exit SD_color_default SD_button_boxed');
		sd_inject_exit.setAttribute("onclick", "exit_stackerdeck('SD_display_deck')");
		sd_inject_exit.innerHTML = 'Return To Deck List';
		
	var sd_inject_select = document.createElement('div');
		sd_inject_select.id = "sd_inject_select";
		sd_inject_select.setAttribute('class', 'sd_inject_select SD_color_default SD_button_boxed');
		sd_inject_select.setAttribute("onclick", "inject_script('" + post_id + "', 1)");
		sd_inject_select.innerHTML = 'Select This Deck';
	
	var sd_inject_deck_box = document.createElement('div');
		sd_inject_deck_box.id = "SD_inject_deck_box";
		sd_inject_deck_box.setAttribute('class', 'SD_inject_deck_box');
	
	
	var sd_inject = document.createElement('div');
	sd_inject.id = post_id;
	sd_inject.setAttribute('class', 'stackit');
	document.getElementById(target_id).appendChild(sd_inject_exit);
	document.getElementById(target_id).appendChild(sd_inject_select);
	document.getElementById(target_id).appendChild(sd_inject_deck_box);
	sd_inject_deck_box.appendChild(sd_inject);
	
	

	stack_tag(post_id, null, null, null); 
	console.log('deck_loaded'+post_id);
}

function exit_stackerdeck(target_id)
{
	console.log('exit Stackerdeck'+target_id);
	    window.stop();
	    try{
		clearInterval(load_card);
		}
		catch(e){}
		play_card_array = [];
	document.getElementById(target_id).innerHTML = '';
	var SD_add_active = document.getElementById("SD_display_deck");
		SD_add_active.classList.remove('SD_deck_active');

}

//Create Stackit input box......................................................
var stackit_create_input = false;
var button_ed = "";

function create_stackit_input_box(ed, callback) {
	button_ed = ed;

	if (stackit_create_input == false) {
		stackit_create_input = true;

		var stackit_input = document.createElement('div');
		stackit_input.id = "SD_WP-stackit_input";
		stackit_input.setAttribute("style", "visibility: visible; opacity: 1;");

		var stackit_input_body = document.createElement('div');
		stackit_input_body.setAttribute("class", "SD_WP-stackit_input_body");

		var stackit_header_bar = document.createElement('div');
		stackit_header_bar.setAttribute("class", "SD_WP-stackit_header_bar");
		stackit_header_bar.innerHTML = "<span class='logo_stacker'>Stacker</span><span class='logo_decks'>decks</span><div id='stacker_close' onclick='show_stackit_input()'>X</div>";
		
		var stackit_input_content = document.createElement('div');
		stackit_input_content.setAttribute("class", "SD_WP-stackit_input_content");
		
		var sd_display_deck = document.createElement('div'); 
		sd_display_deck.id = 'SD_display_deck';
		sd_display_deck.setAttribute("class", "SD_display_deck");

		var stackit_h2 = document.createElement('div');
		stackit_h2.id = "SD_WP-header_title";
		stackit_h2.setAttribute("class", "SD_WP-header_title");
		stackit_h2.innerHTML = "Embed Stackerdecks";

		var stackit_hr = document.createElement('hr');
		stackit_hr.setAttribute("class", "deck_wall_hr");
		
		var stackit_hr2 = document.createElement('hr');
		stackit_hr2.setAttribute("class", "deck_wall_hr")
		
	    var stackit_div_input = document.createElement('div');
		stackit_div_input.setAttribute("class", "SD_WP-input");
		
		if (callback != false && callback != 'false' ) {
		stackit_div_input.setAttribute("style", "float:right");
		}
		else
		{
		stackit_div_input.setAttribute("style", "float:left");	
		}

		var stackit_h3 = document.createElement('div');
		stackit_h3.setAttribute("class", "SD_WP-header_subtitle");
		stackit_h3.innerHTML = "Paste Stackerdeck embed code here:";


		var deck_id_box = document.createElement('input');
		deck_id_box.id = "SD_WP-deck_id_box";
		deck_id_box.setAttribute("class", "SD_WP-deck_id_box");
		deck_id_box.setAttribute("type", "text");
		deck_id_box.setAttribute("value", "");
		deck_id_box.setAttribute("placeholder", "Paste Embed Code");
		deck_id_box.setAttribute("name", "deck_embed");

		var submit_it = document.createElement('input');
		submit_it.id = "SD_WP-submit_it";
		submit_it.setAttribute("class", "SD_WP-deck_id_box");
		submit_it.setAttribute("type", "button");
		submit_it.setAttribute("value", "Insert");
		submit_it.onclick = function() {

			var post_content = document.getElementById('SD_WP-deck_id_box').value;

                post_content = post_content.replace(/'/g, '"');
               

			//Strip double quote Embed ID...................
			if (post_content.indexOf('"') != -1) {
				try {
					post_content = post_content.split('"')[1];
					post_content = post_content.split('"')[0];
				} catch (e) {}
			}


			console.log('Post Content: ' + post_content);

			if (post_content != null && post_content != '') {

				//Inject Script..................
				button_ed.execCommand('mceInsertContent', false, '[stackerdecks_id]' + post_content + '[/stackerdecks_id]');
				show_stackit_input();
				document.getElementById('SD_WP-deck_id_box').value = "";

			}




		};

		stackit_input.appendChild(stackit_input_body);
		stackit_input_body.appendChild(stackit_header_bar);
		
		stackit_input_body.appendChild(stackit_input_content);
		stackit_input_content.appendChild(sd_display_deck);
		stackit_input_content.appendChild(stackit_h2);
		stackit_input_content.appendChild(stackit_hr);
		stackit_div_input.appendChild(stackit_h3);
		stackit_div_input.appendChild(deck_id_box);
		stackit_div_input.appendChild(submit_it);
		stackit_input_content.appendChild(stackit_div_input);
	
		//Callback.....................................
		if (callback != false && callback != 'false' ) {
			//console.log(callback);
			var results = JSON.parse(callback);
			
			//OR...........
			var stackit_or = document.createElement('div');
			stackit_or.setAttribute("class", "SD_WP-stackit_or");
			stackit_or.innerHTML = "OR";
			
			//Select Library Div....................
			var stackit_div_library = document.createElement('div');
			stackit_div_library.setAttribute("class", "SD_WP-library");
			stackit_div_library.innerHTML = "<div class='deck_box_title'>Choose a Deck</div>";
			


			
	           
						var sel_library = document.createElement('div');
						sel_library.setAttribute("class", "SD_WP-header_subtitle");
					
				

			

			//Select Deck Box..........
			var div_deck_box = document.createElement('ul');
			div_deck_box.id = "SD_WP-deck_box";
			div_deck_box.setAttribute("class", "SD_WP-deck_box");


			//Deck Drop Down............................
			var deck_array = results[0].deck_array;

			if (deck_array.length) {

				for (var i = 0; i < deck_array.length; i++) {

					var post_id = deck_array[i].post_id;
					var deck_title = deck_array[i].title;
					var cover_img = deck_array[i].cover_img;
					var user_login = deck_array[i].user_login;
					var slug_title = deck_array[i].slug_title;
					var deck_id = deck_array[i].deck_id;
					var contributor = deck_array[i].contributor;
					

					var div_deck = document.createElement('li');
					div_deck.setAttribute("class", "SD_WP-deck_item");
					

					//Build Link    
					var a = document.createElement('a');
					a.href = "javascript:void(0);";
					a.setAttribute("onclick", "inject_script('" + post_id + "', null)");
					a.setAttribute("class", "SD_WP-deck_item_link");
					
					//CTA Hover
					var a_hover_cta = document.createElement("div");
					a_hover_cta.setAttribute("class", "SD_WP-a_hover_cta");
					a_hover_cta.innerHTML = 'Insert Deck';
					
					
					//Cover Image Box
					var cover_img_box = document.createElement("div");
					cover_img_box.setAttribute("class", "SD_WP-cover_img_box");
					cover_img_box.setAttribute("style", "background-image: url('"+cover_img+"');");
					

					var div_deck_title = document.createElement("div");
					div_deck_title.setAttribute("class", "SD_WP-deck_title");
					var deck_title_length = 36;
					var deck_title_string = deck_title;
					var deck_title_string_length = deck_title_string.length; 
					var deck_title_truncated_string = deck_title_string.substring(0,deck_title_length);
					
					if (deck_title_string_length > deck_title_length) {
						div_deck_title.innerHTML = deck_title_truncated_string+ '...';
						} else {
							div_deck_title.innerHTML = deck_title;
						}
					
					var deck_title_grade = document.createElement("div");
					deck_title_grade.setAttribute("class", "SD_WP-deck_title_grade");

					var div_deck_options_box = document.createElement("div");
					div_deck_options_box.setAttribute("class", "SD_WP-deck_options_box");
					
					var div_deck_edit = document.createElement("div");
					
					if (contributor == 1)
					{
					div_deck_edit.setAttribute("class", "SD_WP-deck_edit");
					div_deck_edit.setAttribute("onclick", "inject_stackerdeck('" + post_id + "', 'SD_display_deck')");
					div_deck_edit.innerHTML = "Edit";
					}
					else
					{
					div_deck_edit.setAttribute("class", "SD_WP-deck_no_edit");
					div_deck_edit.setAttribute("onclick", "inject_stackerdeck('" + post_id + "', 'SD_display_deck')");
					div_deck_edit.innerHTML = "Edit";

	
					}


					a.appendChild(a_hover_cta);
					a.appendChild(cover_img_box);
					a.appendChild(div_deck_title);
					a.appendChild(deck_title_grade);
					div_deck_options_box.appendChild(div_deck_edit);
					div_deck.appendChild(a);
					div_deck.appendChild(div_deck_options_box);
					div_deck_box.appendChild(div_deck);



				}
			} else {
				div_deck_box.innerHTML = "No published Stackerdecks found in Library";
			}
			
			//Or
			stackit_input_content.appendChild(stackit_hr2);
			stackit_input_content.appendChild(stackit_or);
			
			//Append Library.........
			stackit_div_library.appendChild(sel_library);
			//Library
			stackit_input_content.appendChild(stackit_div_library);

			//Append Decks......
			stackit_input_content.appendChild(div_deck_box);
		}
		else
		{
		//Stacker Access Token Missing...........
		console.log('Show Stacker Links');
				
			var stackit_h3 = document.createElement('div');
			stackit_h3.innerHTML = '<div style="margin-top: 10px;"></div><hr class="deck_wall_hr"><div><div style="margin-bottom: 10px; margin-top: 10px;">Install our Extension for either Google Chrome or Apple Safari</div><a class="extension_cta_button" style="margin-right: 20px; " href="https://chrome.google.com/webstore/detail/stackerdecks/ecfljkneabepkbbghoabjmbpeacneppf" target="_blank"><img src="'+window.location.protocol + '//'+SD_domain+'/stackit/img/chrome-extension-download-cta.png" alt="Chrome Extension" width="200px"></a><a class="extension_cta_button" href="http://extensions.apple.com/details/?id=com.stackermedia.stackerdecks-KVUQBCH8S8" target="_blank"><img src="'+window.location.protocol + '//'+SD_domain+'/stackit/img/safari-extension-download-cta.png" alt="Safari Extension" width="200px"></a></div>';	

stackit_input_content.appendChild(stackit_h3);
		}


		document.getElementById("wp-content-wrap").appendChild(stackit_input);
				document.getElementsByTagName('body')[0].style.overflow = "hidden";

	} else {
		show_stackit_input();
	}

}

//Inject StackerDeck.................................

function inject_script(post_id, exit) {
	    window.stop();
	    try{
		clearInterval(load_card);
		}
		catch(e){}
		play_card_array = [];
	
	if(exit)
	{
	exit_stackerdeck('SD_display_deck');	
	}

	//Inject Script..................
	button_ed.execCommand('mceInsertContent', false, '[stackerdecks_id]' + post_id + '[/stackerdecks_id]');
	show_stackit_input();
	document.getElementById('SD_WP-deck_id_box').value = "";
}

var access_key = false;
var wp_stacker_click = null;
function wp_token_found(SD_Token)
{
	access_key = SD_Token || localStorage.getItem("SD_access_token");
	
	if (SD_Token)
	{
		console.log('My Token: '+SD_Token)
		//Deck Lookup.....................................
		httrequest(access_key, '', function(callback) {

			create_stackit_input_box(wp_stacker_click, callback);

		});	
	}
	else
	{
	create_stackit_input_box(wp_stacker_click, false);	
	}
}


//look for stackit token.....................................


function stackit_token(ed) {
wp_stacker_click = ed;
	//Create Jsonp........................................................
		var wp_script_token = document.createElement("script");
		wp_script_token.setAttribute("src", window.location.protocol + '//'+SD_domain+'/callback/iframe_token.php?wp=true&callback=wp_token_found');
		document.head.appendChild(wp_script_token);

}

//Toggle Stackit Input Box.....................................

function show_stackit_input() {

	var stackit_ele = document.getElementById('SD_WP-stackit_input');

	if (stackit_ele.style.visibility == 'visible') {
		//stackit_ele.style.visibility = "hidden";
		stackit_ele.setAttribute("style", "visibility: hidden; opacity: 0;")
				document.getElementsByTagName('body')[0].style.overflow = "scroll";

		//stackit_ele.style.opacity = "0";
	} else {
		stackit_ele.setAttribute("style", "visibility: visible; opacity: 1;")
				document.getElementsByTagName('body')[0].style.overflow = "hidden";

	
/*
		stackit_ele.style.visibility = "visible";
		stackit_ele.style.opacity = "1";
*/
	}


}